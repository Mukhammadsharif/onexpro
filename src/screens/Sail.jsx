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
import {COLORS} from '../utils/colors';
import Background from '../assets/sail.png';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from '../assets/backIcon.png';
import {NightText} from '../components/Svgs';

const {width, height} = Dimensions.get('window');
export default function Sail() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <LinearGradient
        colors={['#0D95C5', 'rgba(13, 149, 197, 0)']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('Events')}>
          <Image source={BackIcon} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Морской Ужин при Свечах</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxText}>14 февраля</Text>
          <Text style={styles.boxText}>19:00</Text>
        </View>

        <Text style={styles.description}>
          Романтический ужин с эксклюзивными морепродуктами, подаваемыми при
          свете свечей
        </Text>
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
    height: height / 1.2,
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
    paddingHorizontal: 30,
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    marginTop: 30,
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
  box: {
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: '#031B24',
    borderStyle: 'solid',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  boxText: {
    textAlign: 'center',
    color: '#021A23',
    fontFamily: 'Rubik-Bold',
    fontWeight: '900',
    shadowColor: COLORS.black,
    shadowOffset: {width: 8, height: 3},
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: width / 5,
    marginTop: 50,
    color: COLORS.white,
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
  },
});
