
import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HeadingPart from "../../Component/PujariHome/HeadingPart";

const Tab = createMaterialTopTabNavigator();

const poojaData = [
  {
    id: "1",
    name: "Jane Doe",
    pooja: "Ghar Shanti Pooja",
    date: "25/1/2025",
    time: "10:00 AM",
    location: "XYZ road, ABC colony, Nashik, Maharashtra",
    distance: "2.5 Kms Away",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "Jimin",
    pooja: "Ghar Shanti Pooja",
    date: "27/1/2025",
    time: "10:00 AM",
    location: "XYZ road, ABC colony, Nashik, Maharashtra",
    distance: "2.5 Kms Away",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const PoojaCard = ({ item }) => {
  return (
    <View
      style={styles.CardContainer}>
      <View style={styles.cardDetails}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.pooja}>{item.pooja}</Text>
        </View>
      </View>
      <Text style={styles.details}>Date: {item.date}</Text>
      <Text style={styles.details}>Time: {item.time}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.distance}>{item.distance}</Text>
    </View>
  );
};

const PoojaTabScreen = ({navigation}) => (

  <View style={{ padding: hp('1%'), marginBottom: hp('5%') }}>
    <View style={styles.addContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('PujariProfileScreen', { screen: 'Advanced' })}>
        <FontAwesome5 name="calendar-plus" size={hp(3.5)} color="#522504" style={styles.addIcon} />
        <Text style={styles.addText}>Add Pooja</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.sectionTitle}>Today's Schedule</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={poojaData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PoojaCard item={item} />}
    />

    <Text style={styles.sectionTitle}>Upcoming Pooja</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={poojaData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PoojaCard item={item} />}
    />
  </View>
);


const PoojasScreen = () => {
  return (
    <View style={{ flex: 1 }}>
    <HeadingPart/>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#FEF7FF', elevation: 5, },
          tabBarLabelStyle: { fontSize: hp(1.7), fontWeight: 'bold', color: '#65558F' },
          tabBarIndicatorStyle: { backgroundColor: '#65558F', borderWidth: 2, borderRadius: 5 },
        }}
      >
        <Tab.Screen name="Offline" component={PoojaTabScreen} />
        <Tab.Screen name="Online" component={PoojaTabScreen} />
        <Tab.Screen name="Mob" component={PoojaTabScreen} />
      </Tab.Navigator>
    </View>
  );
};


export default PoojasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  addIcon: {
    alignSelf: 'center'
  },
  addContainer: {
    backgroundColor: '#FFF1C2',
    padding: hp('1.5%')
  },
  addText: {
    color: '#522504',
    textAlign: 'center',
    fontSize: hp('1.5%'),
    marginTop: hp('1%'),
    fontWeight: 'bold'
  },
  sectionTitle: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: hp('1%')
  },
  CardContainer: {
    width: wp("80%"),
    height: hp('28%'),
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: hp("1%"),
    margin: wp("1%"),
    elevation: 3,
  },
  cardDetails: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: wp("12%"),
    height: wp("12%"),
    borderRadius: wp("6%")
  },
  textContainer: {
    marginLeft: wp("3%"),
  },
  name: {
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: '#000'
  },
  pooja: {
    fontSize: hp("1.8%"),
    color: "#49454F",
  },
  details: {
    marginTop: hp("1%"),
    fontSize: hp("1.8%"),
    color: '#000'
  },
  location: {
    fontSize: hp("1.8%"),
    color: "#02542D",
    marginTop: hp("1%"),
  },
  distance: {
    marginTop: hp("1%"),
    fontSize: hp("1.8%"),
    color: "gray",
  },

})