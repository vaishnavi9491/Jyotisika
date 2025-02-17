
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from '../../Component/i18n';

const Shop = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  const { t } = useTranslation();
  const lang = useSelector((state) => state.language.lang);

  const categories = [
    { id: '1', name: 'All', icon: <Ionicons name="grid" size={16} color="#000" /> },
    { id: '2', name: 'Love', icon: <Feather name="heart" size={16} color="#000" /> },
    { id: '3', name: 'Necklace', icon: <Feather name="link" size={16} color="#000" /> },
    { id: '4', name: 'Money', icon: <Fontisto name="money-symbol" size={16} color="#000" /> },
  ];

  const allProducts = [
    { id: '1', name: 'Pooja Deepak', price: 500, oldPrice: 710, category: 'Love', image: require('../../assets/image/Ring.png') },
    { id: '2', name: 'Pooja Deepak', price: 500, oldPrice: 710, category: 'Love', image: require('../../assets/image/Ring.png') },
    { id: '3', name: 'Pooja Deepak', price: 500, oldPrice: 710, category: 'Necklace', image: require('../../assets/image/stone.png') },
    { id: '4', name: 'Pooja Deepak', price: 500, oldPrice: 710, category: 'Money', image: require('../../assets/image/jwellary.png') },
    { id: '5', name: 'Pooja Deepak', price: 500, oldPrice: 710, category: 'Money', image: require('../../assets/image/jwellary.png') },
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const handleShowMoreToggle = () => {
    if (isExpanded) {
      setVisibleProducts(4); // Show fewer items
    } else {
      setVisibleProducts(filteredProducts.length); // Show all items
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (

    <FlatList
      data={[]}
      ListHeaderComponent={
        <View>
          <View style={styles.header}>
            <Image style={styles.profilePic} source={require('../../assets/image/j.jpeg')} />
            <Text style={styles.profileName}>{t('Jyotisika')}</Text>
            <TouchableOpacity>
              <AntDesign name="customerservice" size={22} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.searchBar}>
            <Fontisto name="search" style={styles.searchIcon} size={20} color="#000" />
            <TextInput
              ref={inputRef}
              placeholder="search products"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>

          <Text style={styles.sectionTitle}>{t('Product type')}</Text>
          <FlatList
            data={categories}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.categoryItem, selectedCategory === item.name && styles.selectedCategory]}
                onPress={() => setSelectedCategory(item.name)}
              >
                <View style={styles.categoryRow}>
                  {item.icon}
                  <Text style={[styles.categoryText, selectedCategory === item.name && styles.selectedCategoryText]}>
                    {t(item.name)}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          //contentContainerStyle={styles.categoryList}
          />

          <Text style={styles.sectionTitle}>{t('Popular products')}</Text>
        </View>
      }
      renderItem={({ item }) => null} // Empty render item since ListHeaderComponent is taking care of everything
      ListFooterComponent={
        <>
          <FlatList
            data={filteredProducts.slice(0, visibleProducts)}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{t(item.name)}</Text>
                  <Text style={styles.productPrice}>
                    ₹{item.price} <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>
                  </Text>
                  <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate('Productdetail')}>
                    <Text style={styles.viewButtonText}>{t('View')}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productList}
          />

          <TouchableOpacity onPress={handleShowMoreToggle} style={styles.showMoreButton}>
            <Text style={styles.showMoreText}>{isExpanded ? 'Show Less' : 'Show More'}</Text>
          </TouchableOpacity>

          {/* Combo Offers Section */}
          <Text style={styles.sectionTitle}>{t('Combo offers')}</Text>
          <FlatList
            data={[require('../../assets/image/jane.png'),
            require('../../assets/image/jane.png'),
            require('../../assets/image/jane.png'),
            require('../../assets/image/jane.png')]} // Combo images
            horizontal
            renderItem={({ item }) => (
              <Image source={item} style={styles.comboImage} />
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />

          <Text></Text>
          <Text></Text>
          <Text></Text>

        </>

      }

    />

  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: hp('1%'),
    backgroundColor: '#f8f9fa',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  profilePic: {
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: wp(5),
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: hp('2%'),
    color: '#000',
    marginRight: hp('30%')
  },
  balance: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000',
  },
  settings: {
    backgroundColor: '#FFD700',
    padding: wp('2%'),
    borderRadius: wp(2),
  },
  searchBar: {
    flexDirection: 'row',
    marginVertical: hp('2%'),
    marginHorizontal: wp('4%'),
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp(2),
    height: hp('6%'),
    paddingLeft: wp('10%'),
    fontSize: hp('2%'),
  },
  searchIcon: {
    position: 'absolute',
    left: wp('3%'),
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  sectionTitle: {
    fontSize: hp('2%'),
    fontWeight: '400',
    color: '#000',
    marginLeft: wp('4%'),

  },
  categoryItem: {
    height: hp('5%'),
    paddingHorizontal: wp('3%'),
    backgroundColor: '#ccc',
    borderRadius: wp(2),
    marginRight: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1%')
  },
  selectedCategory: {
    backgroundColor: '#FFD700',
    marginTop: hp('1%')
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    marginLeft: wp('2%'),
    color: '#000',
  },
  selectedCategoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productCard: {
    flexDirection: 'row',
    marginHorizontal: wp('4%'),
    marginBottom: hp('2%'),
    backgroundColor: '#fff',
    borderRadius: wp(2),
    elevation: 2,
    padding: wp('3%'),
  },
  productImage: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp(2),
  },
  productDetails: {
    flex: 1,
    marginLeft: wp('4%'),
  },
  productName: {
    fontSize: hp('2%'),
    color: '#000',
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: hp('2%'),
    color: 'green',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  viewButton: {
    marginTop: hp('1%'),
    backgroundColor: '#FFD700',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp(2),
  },
  viewButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  showMoreButton: {
    alignSelf: 'center',
    marginVertical: hp('2%'),
  },
  showMoreText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  comboImage: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp(2),
    marginRight: wp('4%'),
  },
});
