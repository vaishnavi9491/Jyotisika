// Footer.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Get first chat and call free!</Text>
      <View style={styles.footerStats}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>100%</Text>
          <Text style={styles.statLabel}>Privacy</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>300+</Text>
          <Text style={styles.statLabel}>Astrologers</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>500+</Text>
          <Text style={styles.statLabel}>Pujari</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FFCC00',
    paddingVertical: hp('4%'),
    alignItems: 'center',
    marginTop: hp('13%'),
  },

  footerText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    marginBottom: '10%',
    color: '#000'
  },

  footerStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('100%'),
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: hp('2.7%'),
    fontWeight: 'bold',
    color: '#000'
  },
  statLabel: {
    fontSize: hp('2%'),
    color: '#000'
  },
});

export default Footer;
