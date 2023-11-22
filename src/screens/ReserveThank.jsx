import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Burger, HeaderCartIcon, HeaderLogo} from '../components/Svgs';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';
import ReserveImage from '../assets/reserve.png';
import Button from '../components/Button';

export default function ReserveThank() {
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

      <Text style={styles.title}>СТОЛИК ЗАРЕЗЕРВИРОВАН!</Text>

      <View style={styles.imageContainer}>
        <Image source={ReserveImage} style={styles.image} />
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
  title: {
    fontFamily: 'Rubik-Bold',
    fontWeight: '900',
    fontSize: 28,
    padding: 25,
    color: COLORS.mainBackground,
    textAlign: 'center',
    marginTop: 50,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  image: {
    width: 200,
    height: 200,
  },
});
