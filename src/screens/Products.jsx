import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Burger, HeaderCartIcon, HeaderLogo} from '../components/Svgs';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../utils/colors';
import {data} from '../utils/data';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const navigation = useNavigation();
  const [selectedMenu, setSelectedMenu] = useState(0);
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

      <ScrollView
        contentContainerStyle={styles.scrollHorizontal}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => setSelectedMenu(0)}
          style={selectedMenu === 0 ? styles.menuItemActive : styles.menuItem}>
          <Text
            style={
              selectedMenu === 0
                ? styles.menuItemTextActive
                : styles.menuItemText
            }>
            Закуски
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedMenu(1)}
          style={selectedMenu === 1 ? styles.menuItemActive : styles.menuItem}>
          <Text
            style={
              selectedMenu === 1
                ? styles.menuItemTextActive
                : styles.menuItemText
            }>
            Основные блюда
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedMenu(2)}
          style={selectedMenu === 2 ? styles.menuItemActive : styles.menuItem}>
          <Text
            style={
              selectedMenu === 2
                ? styles.menuItemTextActive
                : styles.menuItemText
            }>
            Десерты
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedMenu(3)}
          style={selectedMenu === 3 ? styles.menuItemActive : styles.menuItem}>
          <Text
            style={
              selectedMenu === 3
                ? styles.menuItemTextActive
                : styles.menuItemText
            }>
            Напитки
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView
        contentContainerStyle={[
          styles.verticalScroll,
          {paddingBottom: selectedMenu === 3 ? 300 : 50},
        ]}
        showsVerticalScrollIndicator={false}>
        {data[selectedMenu].map((item, index) => (
          <ProductCard productItem={item} key={selectedMenu + index} />
        ))}
      </ScrollView>
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
  scrollHorizontal: {
    height: 35,
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.mainBackground,
    borderStyle: 'solid',
    borderRadius: 10,
    marginLeft: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuItemText: {
    color: COLORS.black,
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
  },
  menuItemActive: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.mainBackground,
    borderStyle: 'solid',
    borderRadius: 10,
    marginLeft: 5,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: COLORS.mainBackground,
  },
  menuItemTextActive: {
    color: COLORS.white,
    fontFamily: 'Rubik-Bold',
    fontWeight: '700',
    shadowColor: COLORS.black,
    shadowOffset: {width: 8, height: 3},
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  verticalScroll: {
    paddingHorizontal: 15,
    marginTop: 10,
    paddingBottom: 50,
  },
});
