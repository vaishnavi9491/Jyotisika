
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HomeScreen from '../Screen/HomeModule/HomeScreen';
import HomeIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';
import Astrology from '../Screen/BottomScreen/Astrology';
import Live from '../Screen/BottomScreen/Live';
import Pujari from '../Screen/BottomScreen/Pujari';
import Shop from '../Screen/BottomScreen/Shop';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          elevation: 10,
          backgroundColor: '#ffcc00',
          height: '9%',
          // Add shadow styles if needed
        }
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <HomeIcon name="home" size={25} color={focused ? '#000' : 'white'} />
              <Text style={[styles.text, focused && styles.textFocused]}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Astro"
        component={Astrology}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <FontAwesome6 name="user-astronaut" size={25} color={focused ? '#000' : 'white'} />
              <Text style={[styles.text, focused && styles.textFocused]}>Astro</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Live"
        component={Live}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <Foundation name="play-video" size={25} color={focused ? '#000' : 'white'} />
              <Text style={[styles.text, focused && styles.textFocused]}>Live</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Pujari"
        component={Pujari}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <FontAwesome6 name="user-tie" size={25} color={focused ? '#000' : 'white'} />
              <Text style={[styles.text, focused && styles.textFocused]}>Pujari</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <FontAwesome6 name="cart-shopping" size={25} color={focused ? '#000' : 'white'} />
              <Text style={[styles.text, focused && styles.textFocused]}>Shop</Text>
            </View>
          ),
        }}
      />


    </Tab.Navigator>
  )
}

export default BottomTabNavigation



const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp('2%'),
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: hp('1.5%'),
    marginTop: 4,
  },
  textFocused: {
    color: '#000',
    fontWeight: 'bold',
  },
  customButton: {
    width: wp('70%'),
    height: hp('70%'),
    borderRadius: 35,
    backgroundColor: '#FFCC00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
})