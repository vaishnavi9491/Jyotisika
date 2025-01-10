import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Dropdown } from 'react-native-element-dropdown';

const PanchangScreen = ({ navigation }) => {
    const [value, setValue] = useState(null);
    const items = [
        { label: 'Nashik, Maharashtra, India', value: 'nashik' },
        { label: 'Mumbai, Maharashtra, India', value: 'mumbai' },
        { label: 'Pune, Maharashtra, India', value: 'pune' },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("App_Drawer_Navigation")}>
                    <AntDesign name="arrowleft" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.Jtext}>Panchang</Text>
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
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    containerStyle={styles.dropdownContainer}
                />
            </View>

            <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Friday, December 20, 2024</Text>
            </View>

            <View style={styles.infoBox}>
                <View style={styles.detailsContainer}>
                    {[
                        { label: 'Sunrise', value: '07:09 AM' },
                        { label: 'Sunset', value: '05:29 PM' },
                        { label: 'Tithi', value: 'Panchami upto 10:48 AM' },
                        { label: 'Nakshatra', value: 'Magha upto 03:47 AM, Dec 21' },
                        { label: 'Yoga', value: 'Vishkambha upto 06:12 PM' },
                        { label: 'Karana', value: 'Taitila upto 10:48 AM' },
                        { label: 'Karana', value: 'Garaja upto 11:29 PM' },
                        { label: 'Paksha', value: 'Krishna Paksha' },
                        { label: 'Weekday', value: 'Shukrawara' },
                        { label: 'Amanta Month', value: 'Margashirsha' },
                        { label: 'Purnimanta Month', value: 'Pausha' },
                        { label: 'Moonsign', value: 'Simha' },
                        { label: 'Sunsign', value: 'Dhanu' },
                        { label: 'Shaka Samvat', value: '1946 Krodhi' },
                        { label: 'Vikram Samvat', value: '2081 Pingala' },
                        { label: 'Gujarati Samvat', value: '2081 Nala' },
                    ].map((item, index) => (
                        <View key={index} style={styles.detailRow}>
                            <Text style={styles.detailLabel}>{item.label}</Text>
                            <Text style={styles.detailValue}>{item.value}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Nakshatra</Text>
                <Text style={styles.infoText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    vulputate libero et velit interdum, ac aliquet odio mattis.
                </Text>
            </View>

            <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Tithi</Text>
                <Text style={styles.infoText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    vulputate libero et velit interdum, ac aliquet odio mattis.
                </Text>
            </View>
        </ScrollView>
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
    dateContainer: {
        paddingVertical: hp(2),
        paddingHorizontal: wp(4),
    },
    dateText: {
        fontSize: wp(4.5),
        fontWeight: 'bold',
        color: '#000',
    },
    detailsContainer: {
        paddingHorizontal: wp(4),
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(0.5),
    },
    detailLabel: {
        fontSize: wp(4),
        color: '#000',
    },
    detailValue: {
        fontSize: wp(4),
        color: '#000',
    },
    infoBox: {
        backgroundColor: '#fff',
        marginHorizontal: wp(4),
        marginVertical: hp(1),
        padding: wp(4),
        borderRadius: wp(2),
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,

    },
    infoTitle: {
        fontSize: wp(4.5),
        fontWeight: 'bold',
        marginBottom: hp(1),
        color: '#000',
    },
    infoText: {
        fontSize: wp(3.8),
        color: '#000'
    },
});

export default PanchangScreen;
