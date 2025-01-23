// import React from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import Fontisto from "react-native-vector-icons/Fontisto";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import { useNavigation } from '@react-navigation/native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// const PujariScreen = () => {
//   const navigation = useNavigation();

//   const poojaList = [
//     {
//       id: '1',
//       title: 'Rahu-Ketu pooja',
//       name: 'John Doe',
//       rating: 4.5,
//       languages: 'English, Hindi, Marathi',
//       experience: '23 years',
//       price: 500,
//       oldPrice: 710,
//       poojaCount: '15003 Pooja',
//       startTime: 'Starts in : 1 d 4 h 23 m',
//       image: require('../../assets/image/john.png'),
//     },

//     {
//       id: '2',
//       title: 'Rahu-Ketu pooja',
//       name: 'John Doe',
//       rating: 4.5,
//       languages: 'English, Hindi, Marathi',
//       experience: '23 years',
//       price: 500,
//       oldPrice: 710,
//       poojaCount: '15003 Pooja',
//       startTime: 'Starts in : 1 d 4 h 23 m',
//       image: require('../../assets/image/john.png')
//     },

//   ];

//   const renderCard = ({ item }) => (
//     <View style={styles.card}>
//    <Image source={item.image} style={styles.image} />
//       <View style={styles.cardDetails}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.languages}>{item.languages}</Text>
//         <Text style={styles.experience}>Exp: {item.experience}</Text>
//         <Text style={styles.startTime}>{item.startTime}</Text>
//         <Text style={styles.price}>
//           ₹{item.price} <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
//         </Text>
//         <TouchableOpacity style={styles.bookButton}>
//           <Text style={styles.bookButtonText}>Book Pooja</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.navigate("App_Drawer_Navigation")}>
//           <AntDesign name="arrowleft" size={20} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.Jtext}>Purches</Text>

//         <TouchableOpacity style={styles.settings}>
//           <Fontisto name="language" size={15} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <AntDesign name="customerservice" size={22} color='#000' />
//         </TouchableOpacity>
//       </View>

//       {/* List */}
//       <FlatList
//         data={poojaList}
//         renderItem={renderCard}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.list}
//       />



//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: hp(4),
//     backgroundColor: '#FFD700',
//   },
//   headerTitle:
//   {
//     fontSize: hp(2.5),
//     fontWeight: 'bold'
//   },
//   headerIcons:
//   {
//     flexDirection: 'row',
//     gap: 10
//   },
//   list:
//   {
//     padding: hp(4)
//   },
//   card: {
//     flexDirection: 'row',
//     marginBottom: hp(2),
//     padding: hp(3),
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   image: {
//     width: wp('20%'),
//     height: hp("10%"),
//     borderRadius: 10,
//   },
//   cardDetails:
//   {
//     marginLeft: hp(4),
//     flex: 1
//   },
//   title:
//   {
//     fontSize: hp(2),
//     fontWeight: 'bold'
//   },
//   name:
//   {
//     fontSize: hp(1.8),
//     color: 'gray'
//   },
//   languages:
//   {
//     fontSize: hp(1.5)
//   },
//   experience:
//   {
//     fontSize: hp(1.5), color: 'gray'
//   },
//   startTime:
//   {
//     fontSize: hp(1.5),
//     color: 'red',
//     marginVertical: 5
//   },
//   price:
//   {
//     fontSize: hp(1.8),
//     color: 'green'
//   },
//   oldPrice:
//   {
//     textDecorationLine: 'line-through',
//     color: 'gray'
//   },
//   bookButton: {
//     backgroundColor: '#FFD700',
//     paddingVertical: hp(1),
//     borderRadius: 5,
//     marginTop: hp(1),
//   },
//   bookButtonText: {
//     textAlign: 'center',
//     fontWeight: 'bold'
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: hp(4),
//     backgroundColor: '#FFD700',
//   },
// });

// export default PujariScreen;



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
      title: 'Rahu-Ketu pooja',
      name: 'John Doe',
      rating: 4.5,
      languages: 'English, Hindi, Marathi',
      experience: '23 years',
      price: 500,
      oldPrice: 710,
      poojaCount: '15003 Pooja',
      startTime: 'Starts in : 1 d 4 h 23 m',
      image: require('../../assets/image/flower.png'),
    },
    {
      id: '2',
      title: 'Rahu-Ketu pooja',
      name: 'John Doe',
      rating: 4.5,
      languages: 'English, Hindi, Marathi',
      experience: '23 years',
      price: 500,
      oldPrice: 710,
      poojaCount: '15003 Pooja',
      startTime: 'Starts in : 1 d 4 h 23 m',
      image: require('../../assets/image/flower.png'),
    },
    {
      id: '3',
      title: 'Rahu-Ketu pooja',
      name: 'John Doe',
      rating: 4.5,
      languages: 'English, Hindi, Marathi',
      experience: '23 years',
      price: 500,
      oldPrice: 710,
      poojaCount: '15003 Pooja',
      startTime: 'Starts in : 1 d 4 h 23 m',
      image: require('../../assets/image/flower.png'),
    },
    {
      id: '4',
      title: 'Rahu-Ketu pooja',
      name: 'John Doe',
      rating: 4.5,
      languages: 'English, Hindi, Marathi',
      experience: '23 years',
      price: 500,
      oldPrice: 710,
      poojaCount: '15003 Pooja',
      startTime: 'Starts in : 1 d 4 h 23 m',
      image: require('../../assets/image/flower.png'),
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
          <Text style={styles.completedPoojas}>{item.completedPoojas} 15003 Pooja</Text>
        </View>
      </View>



      <View style={styles.detailsContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{item.title}</Text>

        </View>
        <Text style={styles.info}>{item.name}</Text>

        <Text style={styles.info}>{item.languages}</Text>
        <Text style={styles.info}>Exp: {item.experience} years</Text>
        <Text style={styles.startTime}>{item.startTime}</Text>
        <Text style={styles.info}>{item.distance}</Text>
        {/* <View style={styles.ratingRow}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <Text style={styles.completedPoojas}>{item.completedPoojas} Poojas</Text>
        </View> */}

        <TouchableOpacity style={styles.bookButton}>
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
    paddingHorizontal: hp('2%'),
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
    fontSize: hp('2%'),
    color: '#000',
  },
  placeholderStyle: {
    fontSize: hp('2%'),
    color: '#888',
  },
  selectedTextStyle: {
    fontSize: hp('2%'),
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: hp('2%'),
    marginVertical: hp('2%'),
    marginHorizontal: hp('2%'),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: wp('20%'),
    height: hp('10%'),
    borderRadius: 40,
    marginRight: hp('2%'),
  },
  detailsContainer: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: hp('2.5%'),
    color: '#000',
    fontWeight: 'bold',
  },
  info: {
    fontSize: hp('2%'),
    color: '#555',
    marginTop: hp('.2%'),
  },
  startTime: {
    color: 'red'
  },
  imageAndRating: {
    alignItems: 'center',
    marginRight: hp('2%'),
  },
  ratingRow: {
    alignItems: 'center',
    marginTop: hp('.3%'),
  },
  rating: {
    fontSize: hp('2%'),
    color: '#FFD700',
    marginRight: 10,
  },
  completedPoojas: {
    fontSize: hp('2%'),
    color: '#ccc',
  },
  priceBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 5,
    paddingVertical: hp('2%'),
    paddingHorizontal: hp('2%'),
  },
  priceBadgeText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#02542D',
  },
  bookButton: {
    backgroundColor: '#FFD700',
     paddingVertical: hp('1%'),
    borderRadius: 5,

    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000',
  },
});

export default OnlineofflineBookPooja;

