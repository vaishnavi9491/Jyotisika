import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ConfettiCannon from 'react-native-confetti-cannon';

const RegistrationSuccess = ({ navigation,route }) => {

  useEffect(() => {
    if (route.params) {   
      console.log('Route params:', route.params);
    }
})
  return (
    <View style={styles.container}>

      <ConfettiCannon
        count={15}
        origin={{ x: 0, y: 0 }}
        fadeOut={false}
        autoStart
      />
      <ConfettiCannon
        count={15}
        origin={{ x: wp('100%'), y: 0 }}
        fadeOut={false}
        autoStart
      />


      <Text style={styles.successText}>Registration Successful!</Text>


      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('App_Drawer_Navigation')}
      >
        <Text style={styles.continueText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  successText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: hp('3%'),
  },
  continueButton: {
    backgroundColor: '#E5A000',
    padding: hp('1.5%'),
    borderRadius: 10,
    alignItems: 'center',
    width: wp('60%'),
  },
  continueText: {
    color: '#fff',
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
  },
});
