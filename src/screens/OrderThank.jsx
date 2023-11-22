import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Burger, HeaderCartIcon, HeaderLogo} from '../components/Svgs';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';
import Button from '../components/Button';
import QRCode from 'react-native-qrcode-svg';

const {width} = Dimensions.get('window');
export default function OrderThank() {
  const navigation = useNavigation();

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

        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          style={styles.transform}>
          <HeaderCartIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <Text style={styles.title}>Благодарим за заказ!</Text>
      </View>

      <View style={styles.qrContainer}>
        <QRCode
          value={'https://www.savvarest.ru/'}
          size={width / 2}
          color={COLORS.mainBackground}
        />
      </View>

      <Button
        text={'НА ГЛАВНУЮ'}
        onPress={() => navigation.navigate('Products')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  main: {
    width: '100%',
    paddingVertical: 30,
    backgroundColor: COLORS.mainBackground,
    marginTop: 50,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '900',
    fontFamily: 'Rubik-Bold',
    paddingHorizontal: 100,
  },
  qrContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
