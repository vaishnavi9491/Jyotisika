

import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-element-dropdown';

const PujariTodaysSchedule = ({navigation}) => {
  const [statuses, setStatuses] = useState({});
  const requestData = [
    {
      id:1,
      name: 'John Doe',
      pooja: 'Ghar Shanti Pooja',
      date: '25/1/2025',
      time: '12:00 AM',
      address: 'XYZ Road, Nashik'
    },
    {
      id:2,
      name: 'Alice Smith',
      pooja: 'Lakshmi Pooja',
      date: '26/1/2025',
      time: '10:00 AM',
      address: 'ABC Colony, Pune'
    },
    {
      id:3,
      name: 'Michael Brown',
      pooja: 'Ganesh Pooja',
      date: '27/1/2025',
      time: '2:00 PM',
      address: 'LMN Street, Mumbai'
    },
    {
      id:4,
      name: 'Sophia Johnson',
      pooja: 'Navratri Pooja',
      date: '28/1/2025',
      time: '6:00 PM',
      address: 'XYZ Road, Nashik'
    },
  ];
  const statusOptions = [
    { label: 'In Progress', value: 'In Progress' },
    { label: 'Completed', value: 'Completed' }
  ];

  const handleStatusChange = (value, id) => {
    setStatuses((prev) => ({ ...prev, [id]: value }));
  };

  const RequestCard = ({ id, name, pooja, date, time, address }) => {
    return (
      <View style={styles.requestCard}>
      <Image source={require('../../../assets/image/john.png')} style={styles.userImage} />
      <View style={styles.requestDetails}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.dateTime}>{date}</Text>
        <Text style={styles.poojaDetails}>Pooja: {pooja}</Text>
        <Text style={styles.dateTime}>Time: {time}</Text>
        <Text style={styles.location}>{address}</Text>
      </View>
      <View style={styles.distanceBadge}>
        <Text style={styles.distanceText}>2.5 km Away</Text>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Pooja Status:</Text>
        <Dropdown
          data={statusOptions}
          labelField="label"
          valueField="value"
          placeholder="Select Status"
          value={statuses[id] || 'In Progress'}
          onChange={(item) => handleStatusChange(item.value, id)}
          style={styles.dropdown}
          selectedTextStyle={styles.dropdownText}
          containerStyle={styles.dropdownMenu}
          itemTextStyle={styles.dropdownItemText}
        />
      </View>
    </View>
  );
};

  return (
    <View>
      <View style={styles.heading}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={hp(3.5)} color="#000" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headText}>Today’s Schedule</Text>
      </View>
      <View style={styles.section}>
        <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          {requestData.map((item, index) => (
            <RequestCard
              key={index}
              name={item.name}
              pooja={item.pooja}
              date={item.date}
              time={item.time}
              address={item.address}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({

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
  requestCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#d9d9d9',
    padding: hp('2%'),
    marginTop: hp('1%'),
    borderRadius: 5,
    marginHorizontal: hp('1.5%'),
  },
  requestDetails: {
    marginHorizontal: hp('1.5%'),
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: hp('2.2%'),
    color: '#000',
  },
  poojaDetails: {
    fontSize: hp('1.8%'),
    color: '#000',
    marginTop: hp('1%'),
  },
  dateTime: {
    fontSize: hp('1.6%'),
    color: '#000',
  },
  location: {
    fontSize: hp('1.6%'),
    color: '#000',
  },
  distanceBadge: {
    backgroundColor: '#333',
    paddingHorizontal: wp('2%'),
    borderRadius: 5,
  },
  distanceText: {
    fontSize: hp('1.5%'),
    fontWeight: 'bold',
    color: '#fff',
  },
  userImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    marginRight: wp('3%'),
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.5%'),
    width: '100%', 
  },
  statusLabel: {
    fontSize: hp('1.7%'),
    fontWeight: 'bold',
    color: '#000',
    marginRight: wp('3%'),
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('1%'),
    width: wp('50%'),
  },
  dropdownText: {
    fontSize: hp('1.8%'),
    color: '#000',
  },
  dropdownMenu: {
    width: wp('50%'),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
  },
  dropdownItemText: {
    fontSize: hp('1.6%'),
    color: '#000',
  },
  section:{
    marginBottom:hp('15%')
  }
});

export default PujariTodaysSchedule;
