import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PujariProfile from './PujariProfile';


const OnlineofflineBookPooja = ({ navigation }) => {
  const [value, setValue] = useState(null);

  const items = [
    { label: 'Nashik, Maharashtra, India', value: 'nashik' },
    { label: 'Mumbai, Maharashtra, India', value: 'mumbai' },
    { label: 'Pune, Maharashtra, India', value: 'pune' },
  ];

  const data = [
    {
      id: '1',
      name: 'John Doe',
      rating: 4.5,
      completedPoojas: 15003,
      poojas: 'Griha shanti, Satya narayan, +',
      languages: 'English, Hindi, Marathi',
      experience: 23,
      distance: '2 KMs Away',
      price: 500,
      discountPrice: 710,
      image: require('../../assets/image/jwellary.png'),
    },
    {
      id: '2',
      name: 'Jane Smith',
      rating: 4.8,
      completedPoojas: 10012,
      poojas: 'Ganesh Pooja, Lakshmi Pooja, +',
      languages: 'Hindi, Marathi',
      experience: 15,
      distance: '5 KMs Away',
      price: 600,
      discountPrice: 850,
      image: require('../../assets/image/jwellary.png'),
    },
    {
      id: '3',
      name: 'Jane Smith',
      rating: 4.8,
      completedPoojas: 10012,
      poojas: 'Ganesh Pooja, Lakshmi Pooja, +',
      languages: 'Hindi, Marathi',
      experience: 15,
      distance: '5 KMs Away',
      price: 600,
      discountPrice: 850,
      image: require('../../assets/image/jwellary.png'),
    },
    {
      id: '4',
      name: 'Jane Smith',
      rating: 4.8,
      completedPoojas: 10012,
      poojas: 'Ganesh Pooja, Lakshmi Pooja, +',
      languages: 'Hindi, Marathi',
      experience: 15,
      distance: '5 KMs Away',
      price: 600,
      discountPrice: 850,
      image: require('../../assets/image/jwellary.png'),
    },
  ];

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.priceBadge}>
        <Text style={styles.priceBadgeText}>₹ {item.price}</Text>
      </View>


      <View style={styles.imageAndRating}>
        <TouchableOpacity>
        <Image source={item.image} style={styles.profileImage} />
        </TouchableOpacity>
       
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.completedPoojas}>{item.completedPoojas} Poojas</Text>
        </View>
      </View>



      <View style={styles.detailsContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.info}>{item.poojas}</Text>
        <Text style={styles.info}>{item.languages}</Text>
        <Text style={styles.info}>Exp: {item.experience} years</Text>
        <Text style={styles.info}>{item.distance}</Text>
        {/* <View style={styles.ratingRow}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.completedPoojas}>{item.completedPoojas} Poojas</Text>
        </View> */}

        <TouchableOpacity style={styles.bookButton} onPress={()=>navigation.navigate('PujariProfile')}>
          <Text style={styles.bookButtonText}>Book Pooja</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("App_Drawer_Navigation")}>
          <AntDesign name="arrowleft" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.Jtext}>Poojaris</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
          <Text style={styles.balance}>₹ 50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings}>
          <Fontisto name="language" size={15} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="customerservice" size={22} color='#000' />
        </TouchableOpacity>
      </View>
      <View style={styles.location}>
        <Dropdown
          data={items}
          labelField="label"
          valueField="value"
          placeholder="Select Location"
          value={value}
          onChange={(item) => setValue(item.value)}
          style={styles.dropdown}
          itemTextStyle={styles.itemTextStyle}
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: hp("2%"),
  },
  balance: {
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: "#000",
  },
  Jtext: {
    marginRight: hp("20%"),
    color: "#000",
    fontWeight: "bold",
  },
  settings: {
    backgroundColor: "#FFD700",
    padding: wp("2%"),
    borderRadius: wp(2),
  },
  location: {
    backgroundColor: '#FDE9E9',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
  },
  dropdown: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    borderRadius: wp(2),
    paddingHorizontal: wp(3),
    height: hp(6),
  },
  dropdownContainer: {
    backgroundColor: '#FFF',
  },
  itemTextStyle: {
    fontSize: wp(4),
    color: '#000',
  },
  placeholderStyle: {
    fontSize: wp(4),
    color: '#888',
  },
  selectedTextStyle: {
    fontSize: wp(4),
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  imageAndRating: {
    alignItems: 'center', // Center-align image and rating row
    marginRight: 15, // Add spacing between image and details
  },
  ratingRow: {
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    marginRight: 10,
  },
  completedPoojas: {
    fontSize: 14,
    color: '#007AFF',
  },
  priceBadge: {
    position: 'absolute', // Absolutely positioned
    top: 10, // Distance from the top of the card
    right: 10, // Distance from the right of the card
    backgroundColor: '#FFD700', // Gold background for visibility
    borderRadius: 5, // Rounded corners
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  priceBadgeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000', // Black text
  },
  bookButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default OnlineofflineBookPooja;
