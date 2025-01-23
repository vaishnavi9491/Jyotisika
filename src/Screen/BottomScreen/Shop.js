import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const ShopScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const inputRef = useRef(null);

  const categories = [
    { id: '1', name: 'All', icon: <Fontisto name="shopping-bag" size={16} color="#000" /> },
    { id: '2', name: 'Love', icon: <AntDesign name="hearto" size={16} color="#000" /> },
    { id: '3', name: 'Necklace', icon: <Feather name="link" size={16} color="#000" /> },
    { id: '4', name: 'Money', icon: <Fontisto name="money-symbol" size={16} color="#000" /> },
  ];

  const allProducts = [
    {
      id: '1',
      name: 'Love Ring',
      price: 500,
      oldPrice: 710,
      category: 'Love',
      image: require('../../assets/image/Ring.png'),
    },
    {
      id: '2',
      name: 'Love Ring',
      price: 500,
      oldPrice: 710,
      category: 'Love',
      image: require('../../assets/image/Ring.png'),
    },
    {
      id: '3',
      name: 'Money Bracelet',
      price: 600,
      oldPrice: 800,
      category: 'Money',
      image: require('../../assets/image/jwellary.png'),
    },
    {
      id: '4',
      name: 'Necklace',
      price: 900,
      oldPrice: 1100,
      category: 'Necklace',
      image: require('../../assets/image/stone.png'),
    },
    // {
    //   id: '5',
    //   name: 'Necklace',
    //   price: 900,
    //   oldPrice: 1100,
    //   category: 'Necklace',
    //   image: require('../../assets/image/stone.png'),
    // },
    // {
    //   id: '6',
    //   name: 'Necklace',
    //   price: 900,
    //   oldPrice: 1100,
    //   category: 'Necklace',
    //   image: require('../../assets/image/stone.png'),
    // },
  ];

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.Jtext}>BookPooja</Text>
        <TouchableOpacity>
          <Text style={styles.balance}>₹ 50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings}>
          <Fontisto name="language" size={15} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="customerservice" size={22} color='#000' />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Fontisto name="search" style={styles.searchIcon} size={20} color="#000" />
        <TextInput
          ref={inputRef}
          placeholder="Search astrologer, pujari, products"
          placeholderTextColor='#aaa'
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryItem,
              selectedCategory === item.name && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(item.name)}
          >
            <View style={styles.categoryRow}>
              {item.icon}
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item.name && styles.selectedCategoryText,
                ]}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />

      {/* Filtered Products */}
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>
                ₹{item.price}{' '}
                <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
              </Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 16,
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
  searchBar: {
    marginVertical: hp('2%'),
    marginHorizontal: wp('4%'),
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp(2),
    paddingLeft: hp('5%'),
    height: hp('6%'),
    fontSize: hp('2%'),
    color: '#000',
  },
  searchIcon: {
    position: 'absolute',
    left: wp('3%'),
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  categoryItem: {
    height: 40, // Set a fixed height for the box
    paddingHorizontal: 15, // Add spacing inside the box horizontally
    backgroundColor: '#f5f5f5', // Default background color
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center', // Center content vertically
    justifyContent: 'center', // Center content horizontally
    flexDirection: 'row', // Ensure icon and text are in one row
  },
  selectedCategory: {
    backgroundColor: '#FFD700', // Highlight color for selected category
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 14,
    marginLeft: 5, // Space between icon and text
    color: '#000',
  },
  selectedCategoryText: {
    fontWeight: 'bold',
    color: '#fff', // Change text color when selected
  },
  categoryList: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  productCard: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  viewButton: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    paddingVertical: 5,
    borderRadius: 5,
  },
  viewButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ShopScreen;
