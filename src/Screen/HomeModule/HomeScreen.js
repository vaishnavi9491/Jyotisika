
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
  Linking,
  Modal,
  FlatList
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
import i18n from '../../Component/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../Redux/Slice/languageSlice';

const HomeScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [activeButton, setActiveButton] = useState('');
  const inputRef = useRef(null);
  const language = useSelector((state) => state.language.language);
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { id: 'en', name: 'English' },
    { id: 'hi', name: 'हिंदी' },
    { id: 'mr', name: 'मराठी' },

  ];


  useEffect(() => {
    checkStoredLanguage();
  }, []);

  const checkStoredLanguage = async () => {
    const storedLang = await AsyncStorage.getItem('LANG');
    if (storedLang) {
      i18n.changeLanguage(storedLang);
      dispatch(setLanguage(storedLang));

      // Map language codes to language names
      const languageMap = {
        en: 'English',
        hi: 'हिंदी',
        mr: 'मराठी',
      };

      setSelectedLanguage(languageMap[storedLang] || 'English');
    }
  };
  const handleLanguageSelect = async (lang) => {
    dispatch(setLanguage(lang.id));
    i18n.changeLanguage(lang.id);
    await AsyncStorage.setItem('LANG', lang.id);

    setSelectedLanguage(lang.name);
    setModalVisible(false);
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



  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.settings} onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={20} />
        </TouchableOpacity>
        <Text style={styles.Jtext}>{t('Jyotisika')}</Text>

        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.languageButton}>
          <Fontisto name="language" size={24} color="#000" backgroundColor='#FFCC00' />
          <Text style={styles.languageText}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('QuestionCategory')}>
          <AntDesign name="customerservice" size={20} color="#000" />
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType="fade" transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Choose your language</Text>

              {/* Search Bar */}

              {/* Language List */}
              <FlatList
                data={languages.filter(lang => lang.name.toLowerCase().includes(searchText.toLowerCase()))}
                numColumns={3}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.languageBox,
                      selectedLanguage === item.name && styles.selectedLanguageBox,
                    ]}
                    onPress={() => handleLanguageSelect(item)}
                  >
                    <Text style={styles.languageText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />

              {/* Close Button */}
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
    width: '100%',
  },

  settings: {
    backgroundColor: '#FFD700',
    padding: wp('2%'),
    borderRadius: wp(2),
  },
  Jtext: {
    fontSize: hp('2.5%'),
    marginRight: hp('30%'),
    fontWeight: 'bold',
    color: '#000',
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
    marginRight: hp('25%'),
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
    marginTop: hp('2%'),
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
  languageButton:
  {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10
  },
  languageText:
  {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalOverlay:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContainer: {
    backgroundColor: '#FFD66B',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    marginBottom: hp('2%')
  },
  languageBox: {
    backgroundColor: '#fff',
    margin: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 40,
  },
  closeButton:
  {
    marginTop: 10,
    padding: hp('2%'),
    backgroundColor: '#fff',
    borderRadius: 10
  },
  closeButtonText:
  {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red'
  },

});


