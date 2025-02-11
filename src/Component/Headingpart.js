import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from '../Component/i18n';

const Headingpart = () => {

  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.lang);

  useEffect(() => {
    i18n.changeLanguage(lang); // Redux मधून घेतलेली भाषा i18n मध्ये बदला
  }, [lang]);


  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={require('../assets/image/jane.png')} />
        <Text style={styles.Jtext}>{t('Jyotisika')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('QuestionCategory')}>
          <AntDesign name="customerservice" size={22} color="#000" style={styles.customservice}/>
        </TouchableOpacity>
      </View>



    </View>
  )
}

export default Headingpart
const styles = StyleSheet.create({
  Container: {
    flex: 1

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: hp('1%'),
    backgroundColor: '#f8f9fa',
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  Jtext: {
    marginRight: hp('26%'),
    color: '#000',
    fontWeight: 'bold',
  },
  profilePic: {
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: wp(5),
  },
  balance: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000'
  },
  settings: {
    backgroundColor: '#FFD700',
    padding: wp('2%'),
    borderRadius: wp(2)
  },
  customservice:{
    marginLeft:'8%'
  }
})