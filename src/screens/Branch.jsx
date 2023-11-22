import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../assets/branch.png';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from '../assets/backIcon.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';

const {width, height} = Dimensions.get('window');
export default function Branch() {
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

        <Text style={styles.title}>Каждое воскресенье, 11:00</Text>

        <View style={styles.branchContainer}>
          <Text style={styles.branchText}>Морской Бранч</Text>
        </View>

        <Text style={styles.text}>
          Наслаждайтесь ленивым воскресным бранчем с
          <Text style={{fontStyle: 'italic'}}>
            изысканными морепродуктами и шампанским
          </Text>
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
    color: '#15BBF7',
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  branchContainer: {
    backgroundColor: '#15BBF7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '50%',
    alignSelf: 'center',
    marginTop: 10,
  },
  branchText: {
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
    fontSize: 18,
  },
  text: {
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 16,
    paddingHorizontal: width / 10,
    marginTop: 20,
  },
});
