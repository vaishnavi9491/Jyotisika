import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Linking
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from '../../Component/i18n';
const Astrology = ({ navigation }) => {

  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.lang);

  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [activeButton, setActiveButton] = useState('');

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

  const handleCallPress = () => {
    setActiveButton('call');
    const phoneNumber = '1234567890'; 
    Linking.openURL(`tel:${phoneNumber}`);
  };

  useEffect(() => {
    i18n.changeLanguage(lang); 
  }, [lang]);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={require('../../assets/image/j.jpeg')} />
        <Text style={styles.Jtext}>{t('Jyotisika')}</Text>

        <TouchableOpacity onPress={() => navigation.navigate('QuestionCategory')}>
          <AntDesign name="customerservice" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.searchBar}>
          <Fontisto name="search" style={styles.searchIcon} size={20} color="#000" />
          <TextInput

            placeholder={t("Search astrologer,service")}
            placeholderTextColor='#ccc'
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "All" && styles.activeTab]}
            onPress={() => setActiveTab("All")}
          >
            <Ionicons name="grid" size={20} color={activeTab === "All" ? "#FFF" : "#000"} />
            <Text style={[styles.tabText, activeTab === "All" && styles.activeTabText]}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "Love" && styles.activeTab]}
            onPress={() => setActiveTab("Love")}
          >
            <Ionicons name="heart" size={20} color={activeTab === "Love" ? "red" : "#000"} />
            <Text style={[styles.tabText, activeTab === "Love" && styles.activeTabText]}>Love</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "Education" && styles.activeTab]}
            onPress={() => setActiveTab("Education")}
          >
            <Ionicons name="book" size={20} color={activeTab === "Education" ? "#21005D" : "#000"} />
            <Text style={[styles.tabText, activeTab === "Education" && styles.activeTabText]}>Education</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "Career" && styles.activeTab]}
            onPress={() => setActiveTab("Career")}
          >
            <Ionicons name="briefcase" size={20} color={activeTab === "Career" ? "#89475E" : "#000"} />
            <Text style={[styles.tabText, activeTab === "Career" && styles.activeTabText]}>Career</Text>
          </TouchableOpacity>
        </ScrollView>
      </View> */}
        <Text style={{ color: '#000', marginLeft: hp('3%'), fontSize: hp('2%'), fontWeight: 'bold' }}>{t('Services')}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.services}>

          {/* Apply Translation to All Services */}
          {['All', 'Love', 'Educational', 'Career', 'Marriage'].map((service, index) => (
            <View
              key={index}
              style={[styles.serviceCard, { backgroundColor: '#F2F2F7' }]} // Simple gray background color
            >
              <View style={styles.iconTextContainer}>
                {/* Adding icons based on the service */}
                {service === 'All' && (
                  <Ionicons name="grid" size={16} color="#888" style={styles.icon} />
                )}
                {service === 'Love' && (
                  <Ionicons name="heart" size={16} color="#888" style={styles.icon} />
                )}
                {service === 'Educational' && (
                  <Ionicons name="book" size={16} color="#888" style={styles.icon} />
                )}
                {service === 'Career' && (
                  <Ionicons name="briefcase" size={16} color="#888" style={styles.icon} />
                )}
                {service === 'Marriage' && (
                  <MaterialCommunityIcons name="ring" size={16} color="#888" style={styles.icon} />
                )}

                {/* Apply Translation Here */}
                <Text style={[styles.serviceText, { fontSize: 12 }]}>{t(service)}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View>
          <TouchableOpacity style={styles.RecentChatButton} onPress={() => navigation.navigate('RecentChat')} >
            <Text style={styles.RecentChat}>{t('Recent Chat')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Box}>
          <View style={styles.profileInfo}>
            <Image
              source={require('../../assets/image/jane.png')}
              style={styles.profile}
            />
            <View style={styles.details}>
              <Text style={styles.name}>{t('John Doe')}</Text>
              <Text style={styles.rating}>⭐ 4.5</Text>
              <Text style={styles.expertise}>{t('Vedic,Numerology,Tarot')}</Text>
              <Text style={styles.languages}>{t('English,Hindi,Marathi')}</Text>
              <Text style={styles.experience}>{t('Exp:23 years')}</Text>
            </View>
          </View>

          <View style={styles.stats}>
            <Text style={styles.orders}>{t('15003 orders')}</Text>
            <Text style={styles.wait}>⏳ wait: 5 min</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('LiveChat')}>
              <Text style={styles.chatText}>{t('Chat now')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
              <Text style={styles.callText}>{t('Call now')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹ 50/min</Text>
            <Text style={styles.oldPrice}>₹ 71/min</Text>
          </View>
        </View>

        <View style={styles.Box}>
          <View style={styles.profileInfo}>
            <Image
              source={require('../../assets/image/jane.png')}
              style={styles.profile}
            />
            <View style={styles.details}>
              <Text style={styles.name}>{t('John Doe')}</Text>
              <Text style={styles.rating}>⭐ 4.5</Text>
              <Text style={styles.expertise}>{t('Vedic,Numerology,Tarot')}</Text>
              <Text style={styles.languages}>{t('English,Hindi,Marathi')}</Text>
              <Text style={styles.experience}>{t('Exp:23 years')}</Text>
            </View>
          </View>

          <View style={styles.stats}>
            <Text style={styles.orders}>{t('15003 orders')}</Text>
            <Text style={styles.wait}>⏳ wait: 5 min</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('LiveChat')}>
              <Text style={styles.chatText}>{t('Chat now')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
              <Text style={styles.callText}>{t('Call now')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹ 50/min</Text>
            <Text style={styles.oldPrice}>₹ 71/min</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <Text style={styles.Astrotext}>{t('Treading')}</Text>
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


        <View style={styles.Box}>
          <View style={styles.profileInfo}>
            <Image
              source={require('../../assets/image/jane.png')}
              style={styles.profile}
            />
            <View style={styles.details}>
              <Text style={styles.name}>{t('John Doe')}</Text>
              <Text style={styles.rating}>⭐ 4.5</Text>
              <Text style={styles.expertise}>{t('Vedic,Numerology,Tarot')}</Text>
              <Text style={styles.languages}>{t('English,Hindi,Marathi')}</Text>
              <Text style={styles.experience}>{t('Exp:23 years')}</Text>
            </View>
          </View>

          <View style={styles.stats}>
            <Text style={styles.orders}>{t('15003 orders')}</Text>
            <Text style={styles.wait}>⏳ wait: 5 min</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('LiveChat')}>
              <Text style={styles.chatText}>{t('Chat now')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
              <Text style={styles.callText}>{t('Call now')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹ 50/min</Text>
            <Text style={styles.oldPrice}>₹ 71/min</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <Text style={styles.Astrotext}>{t('Pujaris')}</Text>
          <TouchableOpacity>
            <Text style={styles.Viewtext}>{t('View All')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Astrology;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f8f9fa',
    elevation: 5, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
    marginRight: hp('30%'),
    color: '#000',
    fontWeight: 'bold',
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('3%'),
    flex: 1,
  },
  profileImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
  },
  profileName: {
    fontSize: wp('4.5%'),
    marginLeft: wp('2%'),
    color: '#000',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('20%'), // Adjust the width to create space for the icons
  },
  icon: {
    marginLeft: wp('2%'), // Add space between the icons
    padding: wp('2%'),
    backgroundColor: "#FFD700",
    borderRadius: wp(2),
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
    fontSize: hp('2%'),
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
  serviceText: {
    fontSize: hp('2%'),
    fontWeight: '600',
    color: '#000',
  },
  serviceCard: {
    marginRight: hp('1%'),
    padding: hp('1%'),
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: hp('1%'),
    width: wp('25%'),
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  icon: {
    marginRight: hp('1%'),
  },
  RecentChatButton: {
    backgroundColor: '#CFF7D3',
    margin: hp('1%'),
    borderRadius: 10,
    padding: hp('2%'),
  },
  RecentChat: {
    color: '#02542D',
    textAlign: 'center',
    fontSize: hp('2%'),
    fontWeight: 'bold'
  },
  Box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  profileInfo: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  details: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  rating: {
    fontSize: 16,
    color: '#F39C12',
  },
  expertise: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  languages: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  experience: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  orders: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  wait: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  chatButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  callButton: {
    backgroundColor: '#2ECC71',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  chatText: {
    color: '#fff',
    fontSize: 16,
  },
  callText: {
    color: '#fff',
    fontSize: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27AE60',
  },
  oldPrice: {
    fontSize: 14,
    color: '#BDC3C7',
    textDecorationLine: 'line-through',
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
    backgroundColor: '#2ECC71',
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
});
