import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Burger, HeaderCartIcon, HeaderLogo} from '../components/Svgs';
import {COLORS} from '../utils/colors';

export default function Events() {
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

      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sail')}
          style={styles.drawerItem}>
          <Text style={styles.itemText}>Морской Ужин</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Festival')}
          style={styles.drawerItemSecond}>
          <Text style={styles.itemTextSecond}>Фестиваль Устриц</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Lobster')}
          style={styles.drawerItemSecond}>
          <Text style={styles.itemTextSecond}>Лобстер-Фест</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Night')}
          style={styles.drawerItemSecond}>
          <Text style={styles.itemTextSecond}>Ночь Морепродуктов</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Branch')}
          style={styles.drawerItemSecond}>
          <Text style={styles.itemTextSecond}>Морской Бранч</Text>
        </TouchableOpacity>
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
  mainContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 100,
  },
  drawerItem: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: COLORS.mainBlack,
    marginTop: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  drawerItemSecond: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: COLORS.mainBlack,
    borderWidth: 1,
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Rubik-Bold',
  },
  itemTextSecond: {
    color: COLORS.mainBlack,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Rubik-Bold',
  },
});
