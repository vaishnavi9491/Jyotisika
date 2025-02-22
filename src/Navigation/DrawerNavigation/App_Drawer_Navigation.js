import React, { useEffect } from 'react';
import { Image, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Horoscope from '../../Screen/DrawerScreen/Horoscope';
import HomeScreen from '../../Screen/HomeModule/HomeScreen';
import CustomDrawer from './CustomDrawer';
import BottomTabNavigation from '../BottomNavigation';
import BookPooja from '../../Screen/DrawerScreen/BookPooja';
import Following from '../../Screen/DrawerScreen/Following';
import Purches from '../../Screen/DrawerScreen/Purches';
import Refertofriend from '../../Screen/DrawerScreen/Refertofriend';
import PymentMethod from '../../Screen/DrawerScreen/PymentMethod';
import SupportScreen from '../../Screen/DrawerScreen/SupportScreen';
import { FollowingIcon, HoroscopeIcon, Poojas, PurchasesIcon, ReferofriendIcon, SettingsIcon, SupportIcon, Notification } from '../../Component/Horoscopeicon';
import PoojasScreen from '../../Screen/DrawerScreen/PoojasScreen';
import NotificationScreen from '../../Screen/DrawerScreen/NotificationScreen';
// import {FollowingIcon, HoroscopeIcon, PaymentMethodIcon, PurchasesIcon, ReferofriendIcon, SettingsIcon,SupportIcon } from '../../Component/Horoscopeicon';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from '../../Component/i18n';

const Drawer = createDrawerNavigator();

const App_Drawer_Navigation = () => {

  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.lang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}>

      < Drawer.Screen
        name="Home"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
          title: t('Home'),
          drawerIcon: ({ focused, size }) => (
            <FontAwesome name='home' size={22} color='#000'
              style={{ height: 25, width: 25, }} />
          ),
        }}
      />
      <Drawer.Screen
        name="Horoscope"
        component={Horoscope}
        options={{
          headerShown: false,
          title: t('Horoscope'),
          drawerIcon: ({ focused, size }) => (
            <HoroscopeIcon size={size} color={focused ? '#000' : '#535763'} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookPooja"
        component={BookPooja}
        options={{
          headerShown: false,
          title: t('BookPooja'),
          drawerIcon: ({ focused, size }) => (
            <SettingsIcon size={size} color={focused ? '#000' : '#535763'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Following"
        component={Following}
        options={{
          headerShown: false,
          title: t('Following'),
          drawerIcon: ({ focused, size }) => (
            <FollowingIcon size={size} color={focused ? '#000' : '#535763'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Purchases"
        component={Purches}
        options={{
          headerShown: false,
          title: t('Purchases'),
          drawerIcon: ({ focused, size }) => (
            <PurchasesIcon size={size} color={focused ? '#000' : '#535763'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Poojas"
        component={PoojasScreen}
        options={{
          headerShown: false,
          title: t('Poojas'),
          drawerIcon: ({ focused, size }) => (
            <Poojas size={size} color={focused ? '#000' : '#535763'} />
          ),
        }}
      />

      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          headerShown: false,
          title: t('Notification'),
          drawerIcon: ({ focused, size }) => (
            <Notification size={size} color={focused ? '#000' : '#535763'} />
          ),
        }}
      />

      <Drawer.Screen
        name="Refer to Friend"
        component={Refertofriend}
        options={{
          headerShown: false,
          title: t('Refer to friend'),
          drawerIcon: ({ focused, size }) => (
            <ReferofriendIcon size={size} color={focused ? '#000' : '#535763'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Support"
        component={SupportScreen}
        options={{
          headerShown: false,
          title: t('Support'),
          drawerIcon: ({ focused, size }) => (
            <SupportIcon size={size} color={focused ? '#000' : '#535763'} />
          ),
        }}
      />

    </Drawer.Navigator>
  )
}
export default App_Drawer_Navigation;

