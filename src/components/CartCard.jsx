import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../utils/colors';
import Plus from '../assets/deletefromcarticon.png';

const {width, height} = Dimensions.get('window');
export default function CartCard({productItem}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  const deleteFromCart = async () => {
    if (carts?.length) {
      const newArray = carts.filter(
        product => product.name !== productItem.name,
      );
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={productItem.image} style={styles.image} />

      <View style={styles.main}>
        <Text style={styles.name}>{productItem?.name}</Text>

        <Text style={styles.description}>{productItem?.description}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>{productItem?.price}$</Text>

          <TouchableOpacity
            style={styles.transform}
            onPress={() => deleteFromCart(productItem)}>
            <Image source={Plus} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    height: height / 7.5,
    marginTop: 15,
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: 'row',
  },
  image: {
    width: width / 3,
    height: height / 7.5,
    borderRadius: 15,
  },
  main: {
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    color: COLORS.black,
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
    lineHeight: 20,
    fontSize: 13,
  },
  description: {
    color: COLORS.black,
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    lineHeight: 12,
    fontSize: 10,
    flexShrink: 1,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  price: {
    fontFamily: 'Rubik-Regular',
  },
  icon: {
    width: 15,
    height: 15,
  },
});
