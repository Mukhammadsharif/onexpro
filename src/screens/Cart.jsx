import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Burger, HeaderLogo} from '../components/Svgs';
import Button from '../components/Button';
import CartEmpty from '../assets/cartempty.png';
import CartCard from '../components/CartCard';
import {COLORS} from '../utils/colors';

export default function Cart() {
  const navigation = useNavigation();
  const {refresh} = useContext(GlobalContext);
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCartItems(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  useEffect(() => {
    if (cartItems?.length) {
      let sum = 0;
      cartItems.forEach(product => {
        sum = sum + parseInt(product.price, 10) * product.count;
      });

      setPrice(sum);
    }
  }, [cartItems, refresh]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.transform}>
          <Burger />
        </TouchableOpacity>

        <View style={styles.logo}>
          <HeaderLogo />
        </View>

        <TouchableOpacity style={styles.transform}>
          {/*<HeaderCartIcon />*/}
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {!cartItems?.length ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.title}>
              {'В КОРЗИНЕ ПУСТО...'.toUpperCase()}
            </Text>

            <Image source={CartEmpty} style={styles.cartEmpty} />
          </View>
        ) : (
          cartItems?.map((item, index) => (
            <CartCard key={index} productItem={item} />
          ))
        )}
      </ScrollView>

      {cartItems?.length ? (
        <Text style={styles.priceText}>К оплате: {price}$</Text>
      ) : (
        ''
      )}

      <Button
        text={cartItems?.length ? 'ЗАКАЗАТЬ' : 'НА главную'}
        onPress={() => {
          if (cartItems?.length) {
            navigation.navigate('OrderThank');
          } else {
            navigation.navigate('Products');
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  transform: {
    transform: [{scale: 0.35}],
  },
  logo: {
    transform: [{scale: 0.4}],
    position: 'absolute',
    left: -10,
  },
  cartEmpty: {
    width: 200,
    height: 200,
    marginTop: 100,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 18,
    fontWeight: '700',
  },
  priceText: {
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
    bottom: 100,
    left: 20,
    color: COLORS.mainBlack,
  },
});
