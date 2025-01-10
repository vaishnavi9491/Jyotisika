import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Horoscope = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.header}>
          <Image style={styles.profilePic} source={require('../../assets/image/jane.png')} />
          <Text style={styles.Jtext}>Jyotisika</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Text style={styles.balance}>₹ 50</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settings}>
            <Fontisto name="language" size={15} />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="customerservice" size={22} color='#000' />
          </TouchableOpacity>

        </View>

        <View style={styles.Row}>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Capricorn')}>
            <Image
              source={require('../../assets/image/capricon.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Aquarius')}>
            <Image
              source={require('../../assets/image/aquarius.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Scorpio')}>
            <Image
              source={require('../../assets/image/scorpio.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Libra')}>
            <Image
              source={require('../../assets/image/libra.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Pisces')}>
            <Image
              source={require('../../assets/image/pisces.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Cancer')}>
            <Image
              source={require('../../assets/image/cancer.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Virgo')}>
            <Image
              source={require('../../assets/image/virgo.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Aries')}>
            <Image
              source={require('../../assets/image/aries.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Taurus')}>
            <Image
              source={require('../../assets/image/taurus.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Gemini')}>
            <Image
              source={require('../../assets/image/gemini.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Sagittarius')}>
            <Image
              source={require('../../assets/image/sagittarius.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.Box} onPress={() => navigation.navigate('Leo')}>
            <Image
              source={require('../../assets/image/leo.png')}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default Horoscope;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: hp('2%'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  profilePic: {
    width: wp('10%'),
    height: hp('6%'),
    borderRadius: wp(5),
  },
  balance: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000'
  },
  Jtext: {
    marginRight: hp('20%'),
    color: '#000',
    fontWeight: 'bold',
  },
  settings: {
    backgroundColor: '#FFD700',
    padding: wp('2%'),
    borderRadius: wp(2),

  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  Box: {
    width: wp('45%'),
    height: hp('22%'),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginTop: hp('2%')
  },
  ImageStyle: {
    width: wp('30%'),
    height: hp('30%'),
    resizeMode: 'contain',
  },
});
