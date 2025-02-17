
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React ,{useEffect}from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from '../Component/i18n';


const Tab = createBottomTabNavigator();

const UserBottomTabNavigation = () => {

  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.lang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);


  return (
    <>
      <StatusBar backgroundColor='#FFCC00' barStyle="light-content" />
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
              <Text style={[styles.label, focused && styles.labelFocused]}>{t('Home')}</Text>
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
              <Text style={[styles.label, focused && styles.labelFocused]}>{t('Astro')}</Text>
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
              <Text style={[styles.label, focused && styles.labelFocused]}>{t('Live')}</Text>
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
              <Text style={[styles.label, focused && styles.labelFocused]}>{t('Pujari')}</Text>
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
              <Text style={[styles.label, focused && styles.labelFocused]}>{t('Shop')}</Text>
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
    </>
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
    fontSize: hp('1%'),
    marginTop:hp ('.3%'),
    fontWeight: 'bold'
  },
  labelFocused: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: '5%',
  },
});

export default UserBottomTabNavigation;