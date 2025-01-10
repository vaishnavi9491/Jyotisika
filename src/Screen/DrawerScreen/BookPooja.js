import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

// const data = [
//   {
//     id: '1',
//     title: 'Ghar Shanti Pooja',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     // image: require('../../assets/image/flower.png'),
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '2',
//     title: 'Navgrah Shanti Pooja',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '3',
//     title: 'Maa Saraswati Pooja',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     image: 'https://via.placeholder.com/150',
//   },
// ];

const data = [
  {
    id: '1',
    title: 'Ghar Shanti Pooja',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../../assets/image/flower.png'), // Local image
  },
  {
    id: '2',
    title: 'Navgrah Shanti Pooja',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../../assets/image/jwellary.png'),
  },
  {
    id: '3',
    title: 'Maa Saraswati Pooja',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../../assets/image/jwellary.png'),
  },
];

const BookPooja = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name='arrowleft' size={20} color='#000' />
        </TouchableOpacity>
        <Text style={styles.Jtext}>BookPooja</Text>
        <Text style={styles.balance}>₹ 50</Text>
        <TouchableOpacity style={styles.settings}>
          <Fontisto name="language" size={15} />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="customerservice" size={22} color='#000' />
        </TouchableOpacity>

      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={25} color="#000" style={styles.searchicon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Pooja"
          placeholderTextColor="#bab2b2"
        />
      </View>

      {/* FlatList */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />

      {/* Bottom Navigation */}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',


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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('4%'),
    //backgroundColor: '#FFD700',
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    margin: wp('4%'),
    // padding: wp('3%'),
    borderRadius: wp('2%'),
  },
  searchInput: {
    marginLeft: wp('2%'),
    fontSize: wp('4%'),
    color: '#000',
    flex: 1,
  },
  listContent: {
    paddingBottom: hp('10%'),
  },
  card: {
    //flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: wp('4%'),
    marginBottom: hp('2%'),
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('2%'),
    margin: wp('2%'),
  },
  cardContent: {
    flex: 1,
    padding: wp('2%'),
  },
  cardTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#000',
  },
  cardDescription: {
    fontSize: wp('3.5%'),
    color: '#666',
    marginVertical: hp('1%'),
  },
  bookButton: {
    backgroundColor: '#FFD700',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('2%'),
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    fontSize: wp('4%'),
    color: '#000',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    height: hp('8%'),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  searchicon: {
    alignSelf: 'center',
    marginLeft: hp('2%')
  }
});

export default BookPooja;


