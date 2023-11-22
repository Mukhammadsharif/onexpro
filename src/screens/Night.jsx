import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../assets/night.png';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from '../assets/backIcon.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';
import {NightText} from '../components/Svgs';

const {width, height} = Dimensions.get('window');
export default function Night() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <LinearGradient
        colors={['#073241', 'rgba(7, 50, 65, 0)']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('Events')}>
          <Image source={BackIcon} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.title}>Лобстер-Фест</Text>

        <View style={styles.absoluteTime}>
          <NightText />
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>
            Наслаждайтесь изысканными блюдами из морепродуктов
            <Text
              style={{fontStyle: 'italic', fontWeight: '900', fontSize: 19}}>
              {' '}
              под мягкие звуки живого джаза
            </Text>
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  gradient: {
    height: height,
    paddingTop: 80,
  },
  icon: {
    width: 50,
    height: 20,
    marginLeft: 30,
  },
  title: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
    fontSize: 30,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  time: {
    textAlign: 'center',
    color: COLORS.mainBackground,
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 20,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  absoluteTime: {
    transform: [{scale: 0.25}],
    position: 'absolute',
    top: height / 5.5,
    left: -width / 1.65,
  },
  box: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: COLORS.mainBackground,
    paddingVertical: 30,
    paddingHorizontal: 40,
    width: '90%',
    left: width / 20,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderStyle: 'solid',
    borderRadius: 40,
  },
  boxText: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 24,
  },
});
