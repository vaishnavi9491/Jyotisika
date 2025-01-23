

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
  ImageBackground,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Voice from '@react-native-voice/voice';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  LogBox.ignoreLogs([
    '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.',
  ]);

  if (!NativeEventEmitter.prototype.removeListeners) {
    NativeEventEmitter.prototype.removeListeners = () => { };
  }

  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Ghar Shanti Pooja',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      backgroundImage: require('../../assets/image/flower.png'),
      selectedServiceType: '',
    },
    {
      id: 2,
      title: 'Navgrah Shanti Pooja',
      description: 'Vivamus lacinia odio vitae vestibulum vestibulum.',
      backgroundImage: require('../../assets/image/jwellary.png'),
      selectedServiceType: '',
    },
    {
      id: 3,
      title: 'Navgraha Pooja',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      backgroundImage: require('../../assets/image/Gnapati.png'),
      selectedServiceType: '',
    },
  ]);

  const inputRef = useRef(null);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      setIsListening(true);
      if (inputRef.current) {
        inputRef.current.focus();
      }
      await Voice.start('en-US');
    } catch (error) {
      console.error('Error starting voice recognition:', error);
    }
  };

  const stopListening = async () => {
    try {
      setIsListening(false);
      await Voice.stop();
    } catch (error) {
      console.error('Error stopping voice recognition:', error);
    }
  };

  const onSpeechResults = (event) => {
    if (event.value && event.value.length > 0) {
      setSearchText(event.value[0]);
    }
    setIsListening(false);
  };

  const onSpeechError = (error) => {
    console.error('Speech recognition error:', error);
    setIsListening(false);
  };

  const handleServiceTypeSelection = (cardId, type) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, selectedServiceType: type } : card
      )
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Image style={styles.profilePic} source={require('../../assets/image/jane.png')} />
          <Text style={styles.Jtext}>Jyotisika</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Text style={styles.balance}>₹ 50</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settings}>
            <Fontisto name="language" size={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('QuestionCategory')}>
            <AntDesign name="customerservice" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBar}>
          <Fontisto name="search" style={styles.searchIcon} size={20} color="#000" />
          <TextInput
            ref={inputRef}
            placeholder="Search astrologer, pujari, products"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity onPress={isListening ? stopListening : startListening} style={styles.micIcon}>
            <Fontisto name={isListening ? 'stop' : 'mic'} size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Services</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.services}>
          {['Birth Kundali', 'Love', 'KP', 'Pooja', 'Panchang'].map((service, index) => (
            <View
              key={index}
              style={[styles.serviceCard, { backgroundColor: '#F2F2F7' }]} // Simple gray background color
            >
              <View style={styles.iconTextContainer}>
                {service === 'Birth Kundali' && (
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
                {service === 'Pooja' && (
                  <Icon name="hand-paper-o" size={16} color="#FF6347" style={styles.icon} />
                )}
                <TouchableOpacity onPress={() => navigation.navigate('Panchang')}>
                  {service === 'Panchang' && (
                    <Icon name="sun-o" size={16} color="#FF6347" style={styles.icon} />
                  )}
                </TouchableOpacity>

                {/* Reduced font size for the service text */}
                <Text style={[styles.serviceText, { fontSize: 12 }]}>{service}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {cards.map((card) => (
          <View key={card.id} style={styles.card}>
            <ImageBackground
              source={card.backgroundImage}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 10 }}
              blurRadius={10}
            >
              <View style={styles.overlay} />
              <Image source={card.backgroundImage} style={styles.imageContainer} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{card.title}</Text>
                <Text style={styles.description}>{card.description}</Text>
              </View>

              {/* Buttons placed at the bottom of the card */}
              <View style={[styles.serviceTypeContainer, styles.blackBackground]}>
                <TouchableOpacity
                  onPress={() => {
                    handleServiceTypeSelection(card.id, 'online');
                    navigation.navigate('OnlineOfflineBookPooja', { cardId: card.id });
                  }}
                  style={[
                    styles.serviceTypeButton,
                    card.selectedServiceType === 'online' && styles.selectedButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.serviceTypeText,
                      card.selectedServiceType === 'online' && styles.selectedText,
                    ]}
                  >
                    Online Pooja
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleServiceTypeSelection(card.id, 'offline');
                    navigation.navigate('OnlineOfflineBookPooja', { cardId: card.id });
                  }}
                  style={[
                    styles.serviceTypeButton,
                    card.selectedServiceType === 'offline' && styles.selectedButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.serviceTypeText,
                      card.selectedServiceType === 'offline' && styles.selectedText,
                    ]}
                  >
                    Offline Pooja
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView:
  {
    paddingBottom: hp('5%')
  },
  header:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp('1.2%')
  },
  Jtext: {
    marginRight: hp('20%'),
    color: '#000',
    fontWeight: 'bold',
  },
  profilePic:
  {
    width: wp('10%'),
    height: hp('8%'),
    borderRadius: wp(5)
  },
  balance:
  {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000'
  },
  settings:
  {
    backgroundColor: '#FFD700',
    padding: wp('2%'),
    borderRadius: wp(2)
  },
  searchBar:
  {
    marginVertical: hp('2%'),
    marginHorizontal: wp('4%')
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp(2),
    paddingLeft: hp('5%'),
    paddingRight: wp('10%'),
    height: hp('6%'),
    fontSize: hp('2%'),
    color: '#000',
  },
  searchIcon:
  {
    position: 'absolute',
    left: wp('3%'),
    top: '50%',
    transform: [{ translateY: -10 }]
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
  iconTextContainer:
  {
    flexDirection: 'row',
    alignItems: 'center'
  },
  serviceText:
  {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000'
  },
  sectionTitle:
  {
    color: '#000',
    marginLeft: hp('3%'),
    fontSize: hp('2%'),
    fontWeight: 'bold'
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    width: '90%',

    alignSelf: 'center',
    marginBottom: hp('2%'),
  },
  // backgroundImage:{
  //   flex: 1,
  //   justifyContent: 'center',
  //   padding: hp('2%')
  // },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
  },
  backgroundImage: {
    width: '100%',
    justifyContent: 'space-between',
    justifyContent: 'center',
    //padding: hp('2%')
  },
  imageContainer:
  {
    width: wp('30%'),
    height: hp('10%'),
    borderRadius: 10
  },
  textContainer: {
    padding: hp('1%')
  },
  title:
  {
    fontSize: hp('2%'),
    color: '#000',
    fontWeight: 'bold'
  },
  description:
  {
    fontSize: hp('2%'),
    color: '#fff'
  },
  serviceTypeContainer:
  {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingVertical: 10,
    alignItems: 'center',
  },
  blackBackground: {
    backgroundColor: '#000000A6',

  },
  serviceTypeButton:
  {
    padding: hp('1%'),
    marginHorizontal: hp('4%'),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,


  },
  selectedButton: {
    backgroundColor: '#ffcc00',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  serviceTypeText: {
    fontSize: hp('2.2%'),
    color: '#FFF',
    fontWeight: '600'
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold'
  },
});

export default HomeScreen;

