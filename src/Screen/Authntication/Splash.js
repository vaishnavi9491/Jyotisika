

import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const password = await AsyncStorage.getItem('password');
        const userName = await AsyncStorage.getItem('userName');

        console.log('Token:', token);
        console.log('User ID:', password);
        console.log('User Name:', userName);

        if (token && userId) {
          // User is logged in, navigate to VehicleListScreen
          navigation.navigate('VehicleListScreen', { userId, name: userName });
        } else {
          // User is not logged in, navigate to LoginScreen
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Failed to retrieve user session:', error);
        navigation.navigate('Login');
      }
    };

    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        checkLoginStatus(); // Check login status after animation
      }, 2000);
    });
  }, [navigation, scaleAnim, fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/image/j.jpeg')}
        resizeMode='contain'
        style={[
          styles.imageStyle,
          {
            opacity: fadeAnim,
            transform: [
              {
                scale: scaleAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageStyle: {
    height: '90%',
    width: '90%',
  },
});
