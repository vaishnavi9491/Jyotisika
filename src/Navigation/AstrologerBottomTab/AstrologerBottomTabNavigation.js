import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AstrologerHomeScreen from '../../Screen/AstroBottomTab/AstrologerHomeScreen';
import LiveScreen from '../../Screen/AstroBottomTab/LiveScreen';
import UserChatList from '../../Screen/AstroBottomTab/UserChatList';
import AstrologerProfile from '../../Screen/AstroBottomTab/AstrologerProfile';



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
          backgroundColor: '#94CAF4',
          height: '7%',
          // Add shadow styles if needed
        }
      }}>
      <Tab.Screen
        name="AstrologerHome"
        component={AstrologerHomeScreen}
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
        name="LiveScreen"
        component={LiveScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.labelFocused]}>Live</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <HomeIcon
                  name='radio-outline'
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
        name="UserChatList"
        component={UserChatList}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.labelFocused]}>Chat</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <FontAwesome
                  name='wechat'
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
        name="AstrologerProfile"
        component={AstrologerProfile}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, focused && styles.labelFocused]}>Profile</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconWrapper}>
              <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                <FontAwesome
                  name='user-circle'
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
    fontSize:10,
    marginTop:'2%',
    fontWeight:'bold'
  },
  labelFocused: {
    color: '#000',
    fontWeight:'bold', 
    marginTop:'5%',
  },
});

export default AstrologerBottomTabNavigation;
