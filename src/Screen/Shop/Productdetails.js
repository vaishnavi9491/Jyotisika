import React, { useState, } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Productdetails = ({ navigation }) => {
    const [searchText, setSearchText] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.profilePic} source={require('../../assets/image/j.jpeg')} />
                <Text style={styles.Jtext}>Jyotisika</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
                    <Text style={styles.balance}>₹ 50</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settings}>
                    <Fontisto name="language" size={20} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('QuestionCategory')}>
                    <AntDesign name="customerservice" size={22} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.searchBar}>
                    <Fontisto name="search" style={styles.searchIcon} size={20} color="#000" />
                    <TextInput
                        placeholder="Search astrologer,service"
                        placeholderTextColor='#ccc'
                        style={styles.input}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>


                <View style={styles.productContainer}>
                    <Image
                        source={require('../../assets/image/poojadipak.png')}
                        style={styles.productImage}
                    />
                    <Text style={styles.productPrice}>₹ 500 <Text style={styles.originalPrice}>₹ 710</Text></Text>
                </View>

                <Text style={styles.heading}>Pooja Deepak</Text>

                <View style={styles.quantityContainer}>
                    <Text style={{ color: '#000', marginLeft: hp('2%') }}>Quantity</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={handleDecrement}>
                        <Text style={styles.quantityText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={handleIncrement}>
                        <Text style={styles.quantityText}>+</Text>
                    </TouchableOpacity>

                </View>


                {/* <TouchableOpacity style={styles.buyButton} >
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                    style={styles.buyButton}
                    onPress={() =>
                        navigation.navigate("PaymentInformation", {
                            amount: 500,
                            image: require("../../assets/image/poojadipak.png"),
                            extra: "Additional Info",
                            showCoupons: false,
                            fromProductScreen: true
                        })
                    }
                >
                    <Text style={styles.buyButtonText}>Buy Now</Text>
                </TouchableOpacity>

                <View>
                    <Text style={styles.heading}>What is Pooja Deepak</Text>
                    <View style={styles.box}>
                        <Text style={styles.productDescription}>
                            The Pooja Deepak, or oil lamp, holds a significant place in Hindu rituals and spirituality.
                            It is not merely a source of light but a symbolic representation of divinity, positivity,
                            and spiritual energy.
                        </Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Need for Pooja Deepak</Text>
                    <View style={styles.card}>
                        <Text style={styles.cardSubtitle}>Spiritual Illumination</Text>
                        <Text style={styles.cardText}>
                            • Lighting a lamp symbolizes the removal of darkness (ignorance) and the ushering of light (knowledge and wisdom).
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardSubtitle}>Invoking Divine Energy</Text>
                        <Text style={styles.cardText}>
                            • The lamp is believed to attract positive cosmic energies and divine blessings.
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardSubtitle}>Focus and Meditation</Text>
                        <Text style={styles.cardText}>
                            • The steady flame of the lamp helps create a serene environment conducive to concentration and meditation.
                        </Text>
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardSubtitle}>Purification</Text>
                        <Text style={styles.cardText}>
                            • The act of lighting a lamp is considered purifying for the surrounding space, warding off negative energies.
                        </Text>
                    </View>
                </View>

                <Text style={styles.heading}>Similar products</Text>
                <ScrollView horizontal={true} style={styles.similarProductsContainer}>
                    <Image source={require('../../assets/image/Diva.png')} style={styles.similarProductImage} />
                    <Image source={require('../../assets/image/Diva.png')} style={styles.similarProductImage} />
                    <Image source={require('../../assets/image/Diva.png')} style={styles.similarProductImage} />
                    <Image source={require('../../assets/image/Diva.png')} style={styles.similarProductImage} />
                    <Image source={require('../../assets/image/Diva.png')} style={styles.similarProductImage} />
                    <Image source={require('../../assets/image/Diva.png')} style={styles.similarProductImage} />
                </ScrollView>

            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

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
    balance: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#000'
    },
    settings: {
        backgroundColor: '#FFD700',
        padding: wp('2%'),
        borderRadius: wp(2),

    },
    Jtext: {
        marginRight: hp('20%'),
        color: '#000',
        fontWeight: 'bold',
    },
    searchBar: {
        position: 'relative',
        marginVertical: hp('2%'),
        marginHorizontal: wp('4%'),


    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: wp(2),
        paddingLeft: hp('5%'),
        paddingRight: wp('10%'),
        height: hp('6%'),
        fontSize: hp('2%'),
        color: '#000'
    },
    searchIcon: {
        position: 'absolute',
        left: wp('3%'),
        top: '50%',
        transform: [{ translateY: -10 }],
    },
    productContainer: {
        alignItems: 'center',
        marginBottom: hp('2%'),
    },
    productImage: {
        height: hp('20%'),
        borderRadius: 10,
    },
    productPrice: {
        fontSize: hp('2%'),
        color: '#000',
        fontWeight: 'bold',
        marginTop: hp('2%'),
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        fontSize: hp('2%'),
        color: '#aaa',
    },
    productName: {
        fontSize: hp('2%'),
        fontWeight: '600',
        marginLeft: hp('2%')

    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: hp('3%'),
    },
    quantityButton: {
        width: hp('5%'),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 5,
        marginHorizontal: hp('1%'),
    },
    quantityText: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#000'
    },
    buyButton: {
        backgroundColor: '#FFDD00',
        padding: hp('2%'),
        margin: hp('3%'),
        borderRadius: 5,
        alignItems: 'center',
    },
    buyButtonText: {
        fontSize: hp('2%'),
        color: '#000',
        fontWeight: '500',
    },
    heading: {
        fontSize: hp('2%'),
        fontWeight: '500',
        marginLeft: hp('2%'),
        color: '#000',
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#000',
        padding: hp('1%'),
        borderWidth: 1,
        marginLeft: hp('2%'),
        borderColor: '#ccc',
        width: '90%',
    },
    productDescription: {
        fontSize: hp('2%'),
        marginTop: 10,
        color: '#000',
        borderRadius: 10
    },

    similarProductsContainer: {
        marginTop: hp('1%'),
    },
    similarProductImage: {
        width: wp('20%'),
        height: hp('10%'),
        marginRight: hp('2%'),
        borderRadius: 10,
    },
    section: {
        marginBottom: hp('2%'),
    },
    sectionTitle: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#000',
        marginLeft: hp('2%'),
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: hp('1%'),
        margin: hp('2%'),
        marginBottom: hp('1%'),
        borderWidth: 1,
        borderColor: '#ccc',
    },
    cardText: {
        fontSize: hp('2%'),
        color: '#000',
        lineHeight: 24,
    },
    cardSubtitle: {
        fontSize: hp('2%'),
        fontWeight: '700',
        color: '#000',

    },
});

export default Productdetails;

