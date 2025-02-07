
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const BookedPoojaScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Online'); // Default to 'Online'

  const bookedPoojas = [
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Online',
    },
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Online',
    },
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Online',
    },
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Offline',
    },
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Ongoing',
    },
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Ongoing',
    },
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Completed',
    },
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Completed',
    },
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Completed',
    },
    {
      title: 'Ghar Shanti Pooja',
      address: 'XYZ, ABC, Nashik, MH',
      panditName: 'John Doe',
      date: '25/12/2024',
      time: '10:00 AM',
      status: 'Completed',
    },
  ];

  // Filter poojas based on the selected tab
  const filteredPoojas = bookedPoojas.filter(pooja => pooja.status === selectedTab);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Navigate to Home')}>
          <AntDesign name='arrowleft' size={20} color='#000' />
        </TouchableOpacity>
        <Text style={styles.Jtext}>BookPooja</Text>

      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Offline' && styles.selectedTab]}
          onPress={() => setSelectedTab('Offline')}
        >
          <Text style={styles.tabText}>Offline</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Online' && styles.selectedTab]}
          onPress={() => setSelectedTab('Online')}
        >
          <Text style={styles.tabText}>Online</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Mob' && styles.selectedTab]}
          onPress={() => setSelectedTab('Mob')}
        >
          <Text style={styles.tabText}>Mob</Text>
        </TouchableOpacity>
      </View>

      {/* More Tabs for Ongoing and Completed */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Ongoing' && styles.selectedTab]}
          onPress={() => setSelectedTab('Ongoing')}
        >
          <Text style={styles.tabText}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'Completed' && styles.selectedTab]}
          onPress={() => setSelectedTab('Completed')}
        >
          <Text style={styles.tabText}>Completed</Text>
        </TouchableOpacity>
      </View>

      {/* Booked Pooja List */}
      <ScrollView style={styles.bookedList}>
        {filteredPoojas.map((pooja, index) => {
          // Dynamically set the image based on the pooja status
          let imageSource;
          if (pooja.status === 'Online') {
            imageSource = require('../../assets/image/stone.png');
          } else if (pooja.status === 'Offline') {
            imageSource = require('../../assets/image/stone.png');
          } else if (pooja.status === 'Ongoing') {
            imageSource = require('../../assets/image/jwellary.png');
          } else if (pooja.status === 'Completed') {
            imageSource = require('../../assets/image/flower.png');
          }

          return (
            <View key={index} style={styles.card}>
              <Image
                source={imageSource} // Dynamically selected image
                style={styles.cardImage}
              />
              <View style={styles.cardDetails}>
                <Text style={styles.cardTitle}>{pooja.title}</Text>
                <Text style={styles.cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <Text style={styles.cardInfo}>Address        :  {pooja.address}</Text>
                <Text style={styles.cardInfo}>Pandit name :  {pooja.panditName}</Text>
                <Text style={styles.cardInfo}>Date               :  {pooja.date}</Text>
                <Text style={styles.cardInfo}>Time               :  {pooja.time}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',

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
  balance: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000',
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('2%'),
  },
  tabButton: {
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('1%'),


  },
  selectedTab: {
    borderColor: '#65558F',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: hp('1.5%'),
    color: '#6a1b9a',
    fontWeight: 'bold'
  },
  bookedList: {
    marginTop: hp('2%'),
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: hp('2%'),
    borderRadius: 10,
    padding: hp('2%'),
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardImage: {
    width: hp('12%'),
    height: hp('10%'),
    borderRadius: 10,
  },
  cardDetails: {
    flex: 1,
    paddingLeft: hp('2%'),
  },
  cardTitle: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: hp('1.6%'),
    color: '#777',

  },
  cardInfo: {
    fontSize: hp('1.3%'),
    color: '#000',
    marginTop: hp('1%'),
  },
});

export default BookedPoojaScreen;
