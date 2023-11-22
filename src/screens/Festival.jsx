import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from '../assets/backIcon.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';
import MainImage from '../assets/festivalimage.png';

const {width, height} = Dimensions.get('window');
export default function Festival() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#0D97C8', '#104456']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Image source={BackIcon} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.time}>21 марта, 18:00</Text>

      <Text style={styles.title}>Фестиваль Устриц</Text>

      <Image source={MainImage} style={styles.image} />

      <Text style={styles.description}>
        <Text style={{fontStyle: 'italic'}}>Большой выбор устриц</Text> со всего
        мира с сомелье, рассказывающим о лучших винах к ним.
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    paddingTop: 80,
  },
  icon: {
    width: 50,
    height: 20,
    marginLeft: 30,
  },
  time: {
    textAlign: 'right',
    marginRight: width / 6,
    color: COLORS.white,
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  title: {
    textAlign: 'left',
    color: COLORS.white,
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
    fontSize: 40,
    marginTop: 0,
    paddingHorizontal: 30,
  },
  image: {
    width: width,
    height: height / 2,
    marginTop: 30,
  },
  description: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 18,
    marginTop: 0,
    paddingHorizontal: 30,
    lineHeight: 24,
  },
});
