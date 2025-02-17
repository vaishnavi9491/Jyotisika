import { StyleSheet, Text, View, TouchableOpacity, FlatList, } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PujariNotification = ({navigation}) => {
  const notifications = [
    { id: "1", message: "Schedule your poojas to get started", time: "10:00 AM" },
    { id: "2", message: "You got new request from Jane Doe", time: "10:10 PM" },
  ];
  return (
    <View style={styles.Container}>
      <View style={styles.heading}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={hp(3.5)} color="#000" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headText}>Notification</Text>
      </View>
      <View style={styles.notificationContainer}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.message}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
      </View>
    </View>
  )
}

export default PujariNotification

const styles = StyleSheet.create({
  Container: {
 //   flex: 1,

  },
  heading: {
    backgroundColor: '#fff',
    padding: hp('1.3%'),
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
  },
  headText: {
    color: '#000',
    fontWeight: '500',
    fontSize: hp('2.3%'),
    marginLeft: wp('4%'),
  },
  backIcon: {
    width: hp('4.5%'),
    height: hp('4%'),
  },
  notificationContainer:{
    paddingHorizontal:hp('2%'),
    marginTop:hp('2%')
  },
  notificationItem: {
    padding: hp('1%'),
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor:'#ccc',
    borderRadius:10,
    marginVertical:hp('1%')
  },
  notificationText: {
    fontSize: 14,
    color: "#000",
   // textAlign:'center'
  },
  time: {
    fontSize: 12,
    color: "gray",
    textAlign: "right"
  },
})