import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";


const Purches = ({ navigation }) => {
  const data = [
    { id: '1', title: 'Pooja Deepak', price: 500, originalPrice: 710, image: require('../../assets/image/flower.png') },
    { id: '2', title: 'Pooja Deepak', price: 500, originalPrice: 710, image: require('../../assets/image/flower.png') },
    { id: '3', title: 'Pooja Deepak', price: 500, originalPrice: 710, image: require('../../assets/image/flower.png') },
    { id: '4', title: 'Pooja Deepak', price: 500, originalPrice: 710, image: require('../../assets/image/flower.png') },
    { id: '5', title: 'Pooja Deepak', price: 500, originalPrice: 710, image: require('../../assets/image/flower.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹ {item.price}</Text>
          <Text style={styles.originalPrice}> {item.originalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Purchaseview')}>
          <Text style={styles.buttonText}>View</Text>
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
        <Text style={styles.Jtext}>Purches</Text>

        <TouchableOpacity style={styles.settings}>
          <Fontisto name="language" size={15} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="customerservice" size={22} color='#000' />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: hp("2%"),
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
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: hp('2%'),
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: hp('2%'),
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: hp('2%'),
  },
  title: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  price: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: 'green',
  },
  originalPrice: {
    fontSize: hp('2%'),
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: hp('2%'),
  },
  button: {
    backgroundColor: '#FFC107',
    paddingVertical: hp('1%'),
    margin: hp('1%'),
    borderRadius: 5,
  },
  buttonText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default Purches;
