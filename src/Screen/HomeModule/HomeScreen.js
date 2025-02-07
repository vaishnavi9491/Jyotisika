import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  LogBox,
  NativeEventEmitter,
  Linking
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Voice from '@react-native-voice/voice';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTranslation } from 'react-i18next';
import i18n from '../../Component/i18n';  // Make sure you have i18n setup
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/Slice/languageSlice';

const HomeScreen = ({ navigation }) => {


  LogBox.ignoreLogs([
    '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
  ]);

  // Patch `removeListeners` if it doesn't exist
  if (!NativeEventEmitter.prototype.removeListeners) {
    NativeEventEmitter.prototype.removeListeners = () => { };
  }

  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const inputRef = useRef(null);
  // const [language, setLanguage] = useState('en');
  const language = useSelector((state) => state.language.language);
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    { label: 'English', value: 'en' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Marathi', value: 'mr' },
  ]);
  const [selectLanguage, setSelectLanguage] = useState('English');
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    checkLng();
  }, []);

  const checkLng = async () => {
    const x = await AsyncStorage.getItem('LANG');
    if (x != null) {
      i18n.changeLanguage(x);
      dispatch(setLanguage(x));
      let lng =
        x === 'en'
          ? 'English'
          : x === 'hi'
            ? 'हिंदी'
            : x === 'mr'
              ? 'मराठी'
              : 'English';
      setSelectLanguage(lng);
    }
  };


  const handleLanguageChange = async (value) => {
    dispatch(setLanguage(value)); // Update Redux store
    i18n.changeLanguage(value); // Update the i18n language
    await AsyncStorage.setItem('LANG', value); // Persist the selected language in AsyncStorage

    // Update the selected language text for UI
    const selectedLng = value === 'en' ? 'English' : value === 'hi' ? 'हिंदी' : 'मराठी';
    setSelectLanguage(selectedLng);
  };

  const profiles = [
    {
      id: 1,
      image: require('../../assets/image/poojadipak.png'),
      name: 'Pooja Dipak',
      rate: '₹50',
    },
    {
      id: 2,
      image: require('../../assets/image/stone.png'),
      name: 'John Doe',
      rate: '₹100',
    },
    {
      id: 3,
      image: require('../../assets/image/poojadipak.png'),
      name: 'Jane Doe',
      rate: '₹75',
    },
    {
      id: 4,
      image: require('../../assets/image/stone.png'),
      name: 'Samuel Lee',
      rate: '₹60',
    },
    {
      id: 5,
      image: require('../../assets/image/poojadipak.png'),
      name: 'Alex Smith',
      rate: '₹85',
    },
  ];


  const pujariData = [
    { id: 1, name: 'John Doe', rate: '₹50/min', image: require('../../assets/image/john.png') },
    { id: 2, name: 'Jane Smith', rate: '₹60/min', image: require('../../assets/image/jane.png') },
    { id: 3, name: 'Michael Lee', rate: '₹70/min', image: require('../../assets/image/john.png') },
    { id: 4, name: 'Sarah Khan', rate: '₹80/min', image: require('../../assets/image/jane.png') },
    { id: 5, name: 'Chris Evans', rate: '₹90/min', image: require('../../assets/image/john.png') },
  ];



  const handleChatPress = () => {
    setActiveButton('chat');
  };

  const handleCallPress = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url).catch((err) => console.error('Error:', err));
  };

  useEffect(() => {
    // Add event listeners for speech recognition
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      // Cleanup listeners when the component is unmounted
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      setIsListening(true);
      if (inputRef.current) {
        inputRef.current.focus(); // Focus the search bar when starting voice input
      }
      await Voice.start('en-US'); // Start listening for English language
    } catch (error) {
      console.error('Error starting voice recognition:', error);
    }
  };

  const stopListening = async () => {
    try {
      setIsListening(false);
      await Voice.stop(); // Stop listening
    } catch (error) {
      console.error('Error stopping voice recognition:', error);
    }
  };

  const onSpeechResults = (event) => {
    console.log('Speech Results:', event.value);
    if (event.value && event.value.length > 0) {
      setSearchText(event.value[0]); // Update the search text with the speech result
    }
    setIsListening(false); // Stop listening after results are received
  };

  const onSpeechError = (error) => {
    console.error('Speech recognition error:', error);
    setIsListening(false); // Stop listening if there is an error
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.settings} onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={20} />
        </TouchableOpacity>

        <Text style={styles.Jtext}>{t('Jyotisika')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('QuestionCategory')}>
          <AntDesign name="customerservice" size={22} color="#000" />
        </TouchableOpacity>
        {/* Language Dropdown */}
        <View style={styles.dropdownWrapper}>
          <DropDownPicker
            open={open}
            value={language} // Redux madhun language ghete
            items={items}
            setOpen={setOpen}
            setValue={(callback) => {
              const selectedValue = callback(language); // Callback madhe current value ghetay
              handleLanguageChange(selectedValue); // Function call karnay
            }}
            setItems={setItems}
            onChangeValue={handleLanguageChange}
            style={styles.dropdown}
            containerStyle={styles.dropdownContainer}
            dropDownDirection="BOTTOM"
            placeholder="Choose Language"
            placeholderStyle={styles.dropdownPlaceholder}
          />
        </View>

        {/* Customer Service Icon */}

      </View>



      {/* Search Bar */}
      <ScrollView style={styles.container}>
        <View style={styles.searchBar}>
          <Fontisto name="search" style={styles.searchIcon} size={20} color="#000" />
          <TextInput
            ref={inputRef}
            placeholder={t("Search astrologer, pujari, products")}
            placeholderTextColor='#888'
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={isListening ? stopListening : startListening} style={styles.micIcon}>
            <Fontisto name={isListening ? 'stop' : 'mic'} size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Services Section with Linear Gradient */}
        <Text style={{ color: '#000', marginLeft: hp('3%'), fontSize: hp('2%'), fontWeight: 'bold' }}>{t('Services')}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.services}>
          {['Birth kundali', 'Love', 'KP', 'pooja', 'Panchang'].map((service, index) => (
            <View
              key={index}
              style={[styles.serviceCard, { backgroundColor: '#F2F2F7' }]} // Simple gray background color
            >
              <View style={styles.iconTextContainer}>
                {/* Adding icons based on the service */}
                {service === 'Birth kundali' && (
                  <Icon name="birthday-cake" size={16} color="#FF6347" style={styles.icon} />
                )}
                <TouchableOpacity onPress={() => navigation.navigate('LoveCalculator')}>
                  {service === 'Love' && (
                    <Icon name="heart" size={16} color="#FF6347" style={styles.icon} />
                  )}
                </TouchableOpacity>
                {service === 'KP' && (
                  <Icon name="search" size={16} color="#FF6347" style={styles.icon} />
                )}
                {service === 'pooja' && (
                  <Icon name="hand-paper-o" size={16} color="#FF6347" style={styles.icon} />
                )}
                <TouchableOpacity onPress={() => navigation.navigate('Panchang')}>
                  {service === 'Panchang' && (
                    <Icon name="sun-o" size={16} color="#FF6347" style={styles.icon} />
                  )}
                </TouchableOpacity>

                <Text style={[styles.serviceText, { fontSize: 12 }]}>{t(service)}</Text>
              </View>
            </View>

          ))}
        </ScrollView>

        {/* Astrologers Section */}
        <View style={styles.container}>
          <View style={styles.row}>
            {/* First Card */}
            <TouchableOpacity style={styles.card}>
              <LinearGradient
                colors={['#F1F1F1', '#FFEAB1']} // Gradient colors for the card
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardGradient}>
                <TouchableOpacity onPress={() => navigation.navigate('Horoscope')}>
                  <Image style={styles.cardImage} source={require('../../assets/image/Horoscope.png')} />

                  <Text style={styles.cardText}>{t('Horoscope')}</Text>
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>

            {/* Second Card */}
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('KundaliMatching')}>
              <LinearGradient
                colors={['#F1F1F1', '#FFEAB1']} // Gradient colors for the card
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardGradient}>
                <Image style={styles.cardImage} source={require('../../assets/image/kundalimatching.png')} />
                <Text style={styles.cardText}>{t('Kundali Matching')}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            {/* Third Card */}
            <TouchableOpacity style={styles.card}>
              <LinearGradient
                colors={['#F1F1F1', '#FFEAB1']} // Gradient colors for the card
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardGradient}>
                <TouchableOpacity onPress={() => navigation.navigate('BookPooja')}>
                  <Image style={styles.cardImage} source={require('../../assets/image/bookpooja.png')} />
                  <Text style={styles.cardText}>{t('Book Pooja')}</Text>
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>

            {/* Fourth Card */}
            <TouchableOpacity style={styles.card}>
              <LinearGradient
                colors={['#F1F1F1', '#FFEAB1']} // Gradient colors for the card
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardGradient}>
                <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
                  <Image style={styles.cardImage} source={require('../../assets/image/shop.png')} />
                  <Text style={styles.cardText}>{t('Shop')}</Text>
                </TouchableOpacity>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image style={styles.AstroImage} source={require('../../assets/image/Astro.png')} />
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <Text style={styles.Astrotext}>{t('Astrologer')}</Text>
          <TouchableOpacity>
            <Text style={styles.Viewtext}>{t('View All')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pujariData.map((pujari) => (
              <View key={pujari.id} style={styles.profileCard}>

                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <Image source={pujari.image} style={styles.profileImage} />
                </TouchableOpacity>

                <Text style={styles.profileName}>{pujari.name}</Text>
                <Text style={styles.profileRate}>{pujari.rate}</Text>
                <View style={styles.profileActions}>
                  {/* Chat Button */}
                  <TouchableOpacity
                    style={[
                      styles.chatStyle,
                      activeButton === pujari.id && styles.chatActive,
                    ]}
                    // onPress={() => handleChatPress(pujari.id)}
                    onPress={() => navigation.navigate('LiveChat')}
                  >
                    <Text
                      style={[
                        styles.chatText,
                        activeButton === pujari.id && styles.chatActiveText,
                      ]}
                    >
                      {t('Chat')}
                    </Text>
                  </TouchableOpacity>

                  {/* Call Button */}
                  <TouchableOpacity
                    style={[
                      styles.callStyle,
                      activeButton === pujari.id && styles.callActive,
                    ]}
                    onPress={() => handleCallPress(pujari.phoneNumber)} // Use the actual phone number here
                  >
                    <Text
                      style={[
                        styles.callText,
                        activeButton === pujari.id && styles.callActiveText,
                      ]}
                    >
                      {t('Call')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>


        {/* Shopping */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: hp('2%') }}>
          <Text style={styles.Astrotext}>{t('Top Shop')}</Text>
          <TouchableOpacity>
            <Text style={styles.Viewtext}>{t('View All')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {profiles.map((profile) => (
              <View key={profile.id} style={styles.profileCard}>
                <Image source={profile.image} style={styles.poojaimg} />
                <Text style={styles.profileName}>{profile.name}</Text>
                <Text style={styles.profileRate}>{profile.rate}</Text>
                <View style={styles.profileActions}>
                  {/* Chat Button */}
                  <TouchableOpacity
                    style={[
                      styles.viewStyle,
                      activeButton === 'View' && styles.chatActive,
                    ]}
                    onPress={handleChatPress}>
                    <Text
                      style={[
                        styles.chatText,
                        activeButton === 'View' && styles.chatActiveText,
                      ]}>
                      {t('View')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>


        {/* pujari */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <Text style={styles.Astrotext}>{t('Pujari')}</Text>
          <TouchableOpacity>
            <Text style={styles.Viewtext}>{t('View All')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pujariData.map((pujari) => (
              <View key={pujari.id} style={styles.profileCard}>
                <Image source={pujari.image} style={styles.profileImage} />
                <Text style={styles.profileName}>{pujari.name}</Text>
                <Text style={styles.profileRate}>{pujari.rate}</Text>
                <View style={styles.profileActions}>
                  {/* Chat Button */}
                  <TouchableOpacity
                    style={[
                      styles.chatStyle,
                      activeButton === pujari.id && styles.chatActive,
                    ]}
                    onPress={() => handleChatPress(pujari.id)}
                  >
                    <Text
                      style={[
                        styles.chatText,
                        activeButton === pujari.id && styles.chatActiveText,
                      ]}
                    >
                      {t('Chat')}
                    </Text>
                  </TouchableOpacity>

                  {/* Call Button */}
                  <TouchableOpacity
                    style={[
                      styles.callStyle,
                      activeButton === pujari.id && styles.callActive,
                    ]}
                    onPress={() => handleCallPress(pujari.id)}
                  >
                    <Text
                      style={[
                        styles.callText,
                        activeButton === pujari.id && styles.callActiveText,
                      ]}
                    >
                      {t('Call')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>



        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={hp('10%')} // Adjust based on your header height
        >
          <ScrollView style={styles.container}>
            {/* Other content remains the same */}

            {/* Feedback Section */}
            <View style={styles.feedback}>
              <Text style={styles.Viewtext}>{t('We value your genuine feedback')}</Text>
              <TextInput
                placeholder={t("Write your genuine feedback here...")}
                placeholderTextColor="#aaa"
                style={styles.feedbackInput}
                multiline={true}
                numberOfLines={4}
              />
              <TouchableOpacity style={styles.feedbackButton}>
                <Text style={styles.feedbackButtonText}>{t('send')}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: hp('3.5%')
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: hp('1%'),
    backgroundColor: '#f8f9fa',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 1,
    width: '100%', // Ensure header takes up the full width
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
    borderRadius: wp(2),
  },
  Jtext: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#000',
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: wp('2%'), // Space between dropdown and customer service icon
    width: wp('50%'), // Adjust the width as per your preference
  },
  dropdownContainer: {
    width: wp('30%'), // Set width for the dropdown container
    zIndex: 10,
    marginTop: hp('2%'), // Ensure dropdown opens below
  },
  dropdown: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    minHeight: 40,
  },
  dropdownPlaceholder: {
    fontSize: 12,
    color: '#aaa',
  },
  customerService: {
    paddingLeft: wp('2%'), // Adjust spacing from the dropdown
  },


  searchBar: {
    position: 'relative',
    marginVertical: hp('2%'),
    marginHorizontal: wp('4%'),


  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp(2),
    paddingLeft: hp('5%'),
    paddingRight: wp('10%'),
    height: hp('6%'),
    fontSize: hp('1.5%'),
    color: '#000'
  },
  searchIcon: {
    position: 'absolute',
    left: wp('3%'),
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  micIcon: {
    position: 'absolute',
    right: wp('3%'),
    top: '40%',
    transform: [{ translateY: -10 }],
    backgroundColor: '#FFD700',
    padding: wp('1.5%'),
    borderRadius: hp('5%'),
  },
  services: {
    flexDirection: 'row',
    paddingVertical: hp('1%'),
  },
  serviceCard: {
    marginRight: hp('1%'),
    padding: hp('1%'),
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: hp('1%'),
    width: wp('35%'),
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  icon: {
    marginRight: hp('1%'),
  },
  serviceText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  card: {
    width: wp('45%'),
    marginHorizontal: wp('2.5%'),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardGradient: {
    padding: wp('4%'),
    borderRadius: wp('2%'),
    alignItems: 'center',
  },
  cardImage: {
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: wp(10),
    marginBottom: hp('1%'),
    aspectRatio: 1,
  },
  cardText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000'
  },
  AstroImage: {
    width: wp('95%'),
    height: hp('15%'),
    borderRadius: wp(5),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  feedback: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  Viewtext: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },

  feedbackInput: {
    height: hp('20%'),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: hp('2%'),
    marginBottom: hp('2%'),
  },
  feedbackButton: {
    backgroundColor: '#FFCC00',
    paddingVertical: hp('1.5%'),
    borderRadius: 5,
    alignItems: 'center',
  },
  feedbackButtonText: {
    color: '#fff',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  Jtext: {
    marginRight: hp('20%'),
    color: '#000',
    fontWeight: 'bold',
  },
  Astrotext: {
    color: '#000',
    fontWeight: 'bold'
  },
  Viewtext: {
    color: '#000',
    fontWeight: 'bold'
  },
  profileContainer: {
    marginVertical: hp('2%'),
    paddingHorizontal: wp('2%'),
  },
  profileCard: {
    width: wp('45%'),
    marginHorizontal: wp('4%'),
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: wp('10%'),
    marginBottom: hp(1),
    aspectRatio: 1,
  },
  profileName: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000'
  },
  profileRate: {
    textAlign: 'center',
    color: '#666',

  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  chatStyle: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FFCC00',
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  callStyle: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FFCC00',
    borderRadius: 5,
    alignItems: 'center',
  },
  chatText: {
    color: '#000',
  },
  callText: {
    color: '#000',
  },

  viewStyle: {
    flex: 1,
    padding: 8,
    backgroundColor: '#FFCC00',
    borderRadius: 5,
    alignItems: 'center',

  },
  poojaimg: {
    width: wp('40%'),
    height: hp('15%'),
    borderRadius: 10
  },

});

