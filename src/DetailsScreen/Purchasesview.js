import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Purchaseview = () => {
    const navigation = useNavigation(); // Initialize navigation

    return (

        <ScrollView>
            <View style={styles.container}>
                {/* Header Section */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.replace("Purches")}>
                        <AntDesign name="arrowleft" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.Jtext}>Purchase</Text>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.settings}>
                            <Fontisto name="language" size={15} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="customerservice" size={22} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Product Image */}
                <Image
                    source={require('../assets/image/flower.png')}
                    style={styles.productImage}
                />

                {/* Product Details */}
                <Text style={styles.productTitle}>Pooja Deepak</Text>
                <Text style={styles.productPrice}>₹ 500</Text>

                {/* Success Message */}
                <Text style={styles.successMessage}>
                    Your order sent successfully on this address
                </Text>

                {/* Address Section */}
                <View style={styles.infoBox}>
                    <View style={styles.addressContainer}>
                        <FontAwesome name="lock" size={20} color="#000" />
                        <Text style={styles.addressText}>
                            XYZ road, ABC colony, Nashik, Maharashtra
                        </Text>
                    </View>
                </View>

                {/* Expected Arrival Date */}
                <View style={styles.arrivalContainer}>
                    <Text style={styles.arrivalLabel}>Expected Arriving Date</Text>
                    <Text style={styles.arrivalDate}>24/12/2024</Text>
                </View>

                {/* Order Status */}
                <View style={styles.infoBox}>
                    <Text style={styles.statusLabel}>Order Status</Text>
                    <View style={styles.statusContainer}>
                        {[{
                            date: '12/12/2024', text: 'Order Received', active: true,
                        }, {
                            date: '16/12/2024', text: 'Order Packed', active: false,
                        }, {
                            date: '18/12/2024', text: 'Shipped', active: false,
                        }, {
                            date: '19/12/2024', text: 'Out For Delivery', active: false,
                        }, {
                            date: '24/12/2024', text: 'Delivered', active: false,
                        }].map((status, index) => (
                            <View key={index} style={styles.statusItem}>
                                <View
                                    style={[
                                        styles.statusCircle,
                                        { backgroundColor: status.active ? 'green' : 'gray' },
                                    ]}
                                />
                                <Text style={styles.statusText}>{status.text}</Text>
                                <Text style={styles.statusDate}>{status.date}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: hp('1%')

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        paddingVertical: hp("2%"),
        paddingHorizontal: wp("5%"),
        marginBottom: hp('2%'),
    },
    Jtext: {
        fontSize: hp('2%'),
        fontWeight: "bold",
        color: "#000",
    },
    headerIcons: {
        flexDirection: "row",
        alignItems: "center",
        gap: wp("4%"),
    },
    settings: {
        backgroundColor: "#FFD700",
        padding: wp("2%"),
        borderRadius: wp(2),
        marginRight: wp("2%"),
    },
    productImage: {
        width: wp('50%'),
        height: wp('50%'),
        borderRadius: 10,
        marginBottom: hp('2%'),
    },
    productTitle: {
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        color: '#000',

    },
    productPrice: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#000',
        marginBottom: hp('2%'),
    },
    successMessage: {
        fontSize: hp('2%'),
        color: 'green',
        textAlign: 'center',
        marginBottom: hp('2%'),
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: hp('1%'),
        borderRadius: 10,
        marginBottom: hp('2%'),
        width: '100%',
    },
    addressText: {
        fontSize: hp('2%'),
        color: '#000',
        marginLeft: hp('2%'),
    },
    arrivalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: hp('2%'),
    },
    arrivalLabel: {
        fontSize: hp('2%'),
        color: '#000',
        fontWeight: 'bold'
    },
    arrivalDate: {
        fontSize: hp('2%'),
        color: '#02542D',
        fontWeight: 'bold',
    },
    statusLabel: {
        fontSize: hp('2.3%'),
        color: '#000',
        marginBottom: hp('2%'),
    },
    statusContainer: {
        width: '100%',
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    statusCircle: {
        width: wp('4%'),
        height: hp('2%'),
        borderRadius: 10,
        marginRight: hp('2%'),
    },
    statusText: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#000',
        flex: 1,
        marginLeft: hp('2%'),
    },
    statusDate: {
        fontSize: hp('2%'),
        color: '#888',
    },
    infoBox: {
        backgroundColor: '#fff',
        marginVertical: hp(1),
        padding: wp(4),
        borderRadius: wp(2),
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        width: '100%',
    },
});

export default Purchaseview;
