
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AstrologerHomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <Image source={require('../../assets/image/john.png')} style={styles.profileImage} />
        <Text style={styles.username}>Jyotisika</Text>
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>


        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: '#EDE6FB' }]}>
            <Text style={styles.statNumber}>1,4325</Text>
            <Text style={styles.statLabel}>Total Consultation</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#FCEFC4' }]}>
            <Text style={styles.statNumber}>1,4325</Text>
            <Text style={styles.statLabel}>Appointment</Text>
          </View>

        </View>
        <View style={styles.TotalEarning}>
          <View style={[styles.statCard, { backgroundColor: '#DFF5E8' }]}>
            <Text style={styles.statNumber}>1,4325</Text>
            <Text style={styles.statLabel}>Total Earning</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Request</Text>
          <TouchableOpacity style={styles.viewAll}><Text>View all</Text></TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.detailsContainer}>
              <View style={styles.profileRow}>
                <Image source={require('../../assets/image/jane.png')} style={styles.profileImage} />
                <View>
                  <Text style={styles.name}>Jane Doe</Text>
                  <Text style={styles.date}>12/1/2025</Text>
                </View>
              </View>
              <Text style={styles.detailText}><Text style={styles.label}>Services :</Text> Numerology</Text>
              <Text style={styles.detailText}><Text style={styles.label}>Date         :</Text> 25/1/2025</Text>
              <Text style={styles.detailText}><Text style={styles.label}>Time        :</Text> 10:00 AM</Text>

              <Text style={styles.address}>XYZ road, ABC colony, Nashik, Maharashtra</Text>
            </View>
            <Image source={require('../../assets/image/Location.png')} style={styles.mapImage} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectText}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Feedback Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Feedback</Text>
          <TouchableOpacity >
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal contentContainerStyle={styles.reviewList}>
          <View style={styles.reviewSection}>

            <View>
              <Text style={styles.reviewText}>

                The astrologer provided incredible insights into my life and personality.
                Their predictions about my career path were spot-on, and their guidance helped me make better decisions.
                Highly recommend for anyone seeking clarity!
              </Text>
              <View style={styles.reviewHeader}>
                <Image
                  source={require('../../assets/image/jin.png')}
                  style={styles.profileImage}
                />
                <Text style={styles.reviewerName}>Jane Doe|3 year ago</Text>
              </View>
            </View>
          </View>

          <View style={styles.reviewSection}>
            <View>
              <Text style={styles.reviewText}>
                The astrologer provided incredible insights into my life and personality.
                Their predictions about my career path were spot-on, and their guidance helped me make better decisions.
                Highly recommend for anyone seeking clarity!
              </Text>
            </View>
            <View style={styles.reviewHeader}>
              <Image
                source={require('../../assets/image/jin.png')}
                style={styles.profileImage}
              />
              <Text style={styles.reviewerName}>Jane Doe|3 year ago</Text>
            </View>

          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollContainer: {
    paddingTop: hp('10%'),
    paddingBottom: hp('10%'),
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    backgroundColor: '#EFF8FF',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 10, // Keep it above other content
  },

  username:
  {
    marginLeft: hp('2%'),
    color: '#000',
    fontWeight: '700',
    fontSize: hp('2%'),
  },
  icon:
  {
    marginLeft: 'auto'
  },
  statsContainer:
  {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: hp('2%')
  },
  TotalEarning: {
    alignItems: 'center'
  },
  statCard: {
    width: wp('35%'),
    height: hp('12%'),
    padding: hp('2%'),
    borderRadius: 10,
    alignItems: 'center'
  },
  statNumber:
  {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#095EA1'
  },
  statLabel:
  {
    fontSize: hp('2%'),
    textAlign: 'center',
    color: '#095EA1'
  },
  section:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  sectionTitle:
  {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#1E1E1E'
  },
  viewAll:
  {
    color: '#757575',
    marginRight: hp('2%')
  },
  requestCard:
  {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: hp('3%'),
    borderRadius: 10,
  },
  buttonContainer:
  {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: hp('2%')
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: hp('2%'),
    margin: hp('2%'),
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",  // Side-by-side layout
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 1,  // Left side takes most of the space
    justifyContent: "space-between",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp('1.2%'),
  },
  profileImage: {
    width: wp('16%'),
    height: hp('8%'),
    borderRadius: 22.5,
    marginRight: hp('2%'),
  },
  name: {
    fontSize: hp('2%'),
    fontWeight: "bold",
    color: '#000'
  },
  date: {
    color: "#888",
    fontSize: hp('1.5%'),

  },
  detailText: {
    fontSize: hp('1.8%'),
    marginBottom: 2,
    color: '#000'
  },
  label: {
    fontWeight: "bold",
    color: '#000'
  },
  address: {
    flex: 1,
    color: "green",
    fontSize: hp('1.8%'),
    flexWrap: "wrap",
  },
  mapImage: {
    width: wp('35%'),
    height: hp('25%'),
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp('1.8%'),
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#28A745",
    paddingVertical: 8,
    borderRadius: 6,
    marginRight: hp('1.5%'),
  },
  rejectButton: {
    flex: 1,
    backgroundColor: "#E0C07C",
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 4,
  },
  acceptText: {
    color: "white",
    textAlign: "center",
    fontSize: hp('1.8%'),
    fontWeight: "bold",
  },
  rejectText: {
    color: "black",
    textAlign: "center",
    fontSize: hp('1.8%'),
    fontWeight: "bold",
  },
  reviewList: {
    flexDirection: 'row',
    paddingHorizontal: wp('4%'),
    alignItems: 'center',
  },

  reviewSection: {
    backgroundColor: '#f9f9f9',
    borderRadius: wp('2%'),
    padding: wp('4%'),
    marginRight: wp('4%'), // Space between reviews
    width: wp('80%'), // Adjust width for each review card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },

  sectionTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: '#000',
    marginLeft: hp('2%')
  },

  reviewText: {
    fontSize: wp('4%'),
    color: '#000',
    marginBottom: hp('1%'),
  },

  profileImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    marginTop: hp('1%'),
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: wp('4%'),
    color: '#FFD700',
  },
  reviewerName: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: '#000',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
});

export default AstrologerHomeScreen;