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
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../assets/backIcon.png';
import LinearGradient from 'react-native-linear-gradient';
import Background from '../assets/lobsterimage.png';
import {COLORS} from '../utils/colors';

const {width, height} = Dimensions.get('window');
export default function Lobster() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('Events')}>
          <Image source={BackIcon} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.title}>Лобстер-Фест</Text>

        <View style={styles.timeContainer}>
          <Text style={styles.time}>12 сентября, 19:00</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>
            Праздник лобстера с различными способами приготовления и винной
            парой
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
  timeContainer: {
    backgroundColor: COLORS.mainBackground,
    borderRadius: 15,
    width: '60%',
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },
  time: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  box: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: COLORS.mainBackground,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '70%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  boxText: {
    textAlign: 'left',
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '900',
    fontFamily: 'Rubik-Bold',
    lineHeight: 20,
  },
});
