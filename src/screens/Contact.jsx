import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../utils/colors';
import {Burger, HeaderCartIcon, HeaderLogo} from '../components/Svgs';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

export default function Contact() {
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

      <Text style={styles.title}>Контакты</Text>

      <View style={styles.inputContainer}>
        <TextInput
          editable={false}
          style={styles.input}
          placeholder={'Номер телефона'}
          placeholderTextColor={COLORS.black}
        />

        <TextInput
          editable={false}
          style={styles.input}
          placeholder={'Город'}
          placeholderTextColor={COLORS.black}
        />

        <TextInput
          editable={false}
          style={styles.input}
          placeholder={'Индекс'}
          placeholderTextColor={COLORS.black}
        />

        <TextInput
          editable={false}
          style={styles.input}
          placeholder={'Страна'}
          placeholderTextColor={COLORS.black}
        />
      </View>

      <Button
        text={'На главную'}
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
    fontSize: 18,
    padding: 25,
    color: COLORS.mainBackground,
    shadowColor: COLORS.black,
    shadowOffset: {width: 8, height: 3},
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  input: {
    height: 45,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.mainBackground,
    borderStyle: 'solid',
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 15,
    color: COLORS.black,
    fontFamily: 'Rubik-Light',
    fontSize: 12,
  },
});
