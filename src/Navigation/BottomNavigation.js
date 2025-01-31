
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeScreen from '../Screen/HomeModule/HomeScreen';
import Foundation from 'react-native-vector-icons/Foundation';
import Astrology from '../Screen/BottomScreen/Astrology';
import Live from '../Screen/BottomScreen/Live';
import Pujari from '../Screen/BottomScreen/Pujari';
import Shop from '../Screen/BottomScreen/Shop';



const Tab = createBottomTabNavigator();

const AstrologerBottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          elevation: 10,
          backgroundColor: '#FFCC00',
          height: '7%',
          // Add shadow styles if needed
        }
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.labelFocused]}>Home</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <HomeIcon
                  name='home'
                  color={focused ? '#000' : 'white'}
                  size={28}
                  style={{ alignSelf: 'center' }}
                />
              </View>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Astrology"
        component={Astrology}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.labelFocused]}>Astro</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <FontAwesome6
                  name="user-astronaut"
                  color={focused ? '#000' : 'white'}
                  size={27}
                  style={{ alignSelf: 'center' }}
                />
              </View>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Live"
        component={Live}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.labelFocused]}>Live</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <Foundation
                  name="play-video"
                  color={focused ? '#000' : 'white'}
                  size={28}
                  style={{ alignSelf: 'center' }}
                />
              </View>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Pujari"
        component={Pujari}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.labelFocused]}>Pujari</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <FontAwesome6
                  name="user-tie"
                  color={focused ? '#000' : 'white'}
                  size={28}
                  style={{ alignSelf: 'center' }}
                />
              </View>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.labelFocused]}>Shop</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <FontAwesome6
                  name="cart-shopping"
                  color={focused ? '#000' : 'white'}
                  size={28}
                  style={{ alignSelf: 'center' }}
                />
              </View>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 5,
    borderColor: 'transparent',
  },
  iconFocused: {
    borderColor: 'white',
  },
  label: {
    color: '#fff',
    fontSize: 10,
    marginTop: '2%',
    fontWeight: 'bold'
  },
  labelFocused: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: '5%',
  },
});

export default AstrologerBottomTabNavigation;