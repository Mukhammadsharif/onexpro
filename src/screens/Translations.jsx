import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Burger, HeaderCartIcon, HeaderLogo} from '../components/Svgs';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';
import NBA from '../assets/NBA.png';
import NHL from '../assets/NHL.png';
import MLB from '../assets/MLB.png';
import NFL from '../assets/NFL.png';

export default function Translations() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
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

      <Text style={styles.title}>Спортивные трансляции</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.half}>
            <Image source={NBA} style={styles.image} />

            <Text style={styles.time}>15.07 00:50</Text>
          </View>

          <View style={styles.half}>
            <Text style={styles.time}>Brooklyn Nets</Text>

            <Text style={styles.time}>Phoenix Suns</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.half}>
            <Image source={NHL} style={styles.image} />

            <Text style={styles.time}>20.07 00:00</Text>
          </View>

          <View style={styles.halfSecond}>
            <Text style={styles.time}>Vancouver Canucks</Text>

            <Text style={styles.time}>St. Louis Blues</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.half}>
            <Image source={MLB} style={styles.image} />

            <Text style={styles.time}>23.07 00:50</Text>
          </View>

          <View style={styles.halfSecond}>
            <Text style={styles.time}>San Francisco Giants</Text>

            <Text style={styles.time}>Atlanta Braves</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.half}>
            <Image source={NFL} style={styles.image} />

            <Text style={styles.time}>30.07 00:15</Text>
          </View>

          <View style={styles.halfSecond}>
            <Text style={styles.time}>New England Patriots</Text>

            <Text style={styles.time}>Kansas City Chiefs</Text>
          </View>
        </View>
      </View>
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
    fontSize: 18,
    padding: 25,
    color: COLORS.mainBackground,
    shadowColor: COLORS.black,
    shadowOffset: {width: 8, height: 3},
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  cardContainer: {
    paddingHorizontal: 20,
  },
  card: {
    width: '95%',
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.mainBackground,
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
  },
  image: {
    height: 25,
    width: 80,
    marginTop: 10,
  },
  time: {
    marginTop: 10,
    fontFamily: 'Rubik-Bold',
    fontSize: 14,
    color: COLORS.mainBlack,
  },
  half: {
    width: '40%',
    justifyContent: 'space-between',
  },
  halfSecond: {
    width: '60%',
    justifyContent: 'space-between',
  },
});
