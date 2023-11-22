import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {COLORS} from './utils/colors';
import Products from './screens/Products';
import Cart from './screens/Cart';
import OrderThank from './screens/OrderThank';
import Reservation from './screens/Reservation';
import ReserveThank from './screens/ReserveThank';
import Contacts from './screens/Contact';
import Events from './screens/Events';
import Festival from './screens/Festival';
import Lobster from './screens/Lobster';
import Night from './screens/Night';
import Branch from './screens/Branch';
import Sail from './screens/Sail';
import DrawerLogo from './assets/drawerLogo.png';
import CloseIcon from './assets/closeicon.png';
import {HeaderCartIcon} from './components/Svgs';
import Translations from './screens/Translations';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const {width, height} = Dimensions.get('window');
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Products"
        component={Products}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="OrderThank"
        component={OrderThank}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="ReserveThank"
        component={ReserveThank}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Reservation"
        component={Reservation}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Contacts"
        component={Contacts}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Events"
        component={Events}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Festival"
        component={Festival}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Lobster"
        component={Lobster}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Night"
        component={Night}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Branch"
        component={Branch}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Sail"
        component={Sail}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Translations"
        component={Translations}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawer(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={CloseIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Image source={DrawerLogo} style={styles.drawerLogo} />
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Products')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Главная</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={styles.drawerItemSecond}>
            <Text style={styles.itemTextSecond}>Корзина</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Translations')}
            style={styles.drawerItemSecond}>
            <Text style={styles.itemTextSecond}>Транслация</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Contacts')}
            style={styles.drawerItemSecond}>
            <Text style={styles.itemTextSecond}>Контакты</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Reservation')}
            style={styles.drawerItemSecond}>
            <Text style={styles.itemTextSecond}>Резерв столика</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Events')}
            style={styles.drawerItemSecond}>
            <Text style={styles.itemTextSecond}>События</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <View style={styles.cartTransform}>
            <HeaderCartIcon />
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: height - (height / 100) * 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    width: '100%',
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 50,
  },
  logo: {
    width: '80%',
    height: '80%',
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
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
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
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 40,
    height: 40,
  },
  header: {
    width: '100%',
    backgroundColor: COLORS.mainBlack,
    height: 120,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerLogo: {
    height: 58,
    width: width / 1.6,
  },
  cartTransform: {
    transform: 'scale(0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
    position: 'absolute',
    left: 30,
    top: -20,
  },
});
