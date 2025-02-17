import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CompletedPoojaScreen = ({ navigation }) => {
    const poojaData = [
        { name: "Jane Doe", pooja: "Ghar Shanti Pooja", date: "25/1/2025", time: "10:00 AM", image: require('../../../assets/image/john.png') },
        { name: "Jane Doe", pooja: "Ghar Shanti Pooja", date: "25/1/2025", time: "10:00 AM", image: require('../../../assets/image/john.png') },
        { name: "Jane Doe", pooja: "Ghar Shanti Pooja", date: "25/1/2025", time: "10:00 AM", image: require('../../../assets/image/john.png') },
    ];

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={hp(3.5)} color="#000" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headText}>Completed Offline Poojas</Text>
            </View>
            <View style={styles.container}>
            <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>All</Text></TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Ghar Shanti</Text></TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Rahu-ketu</Text></TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Wealth</Text></TouchableOpacity>
            </View>
            {poojaData.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Image source={item.image} style={styles.profilePic} />
                    <View style={styles.cardTextContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.details}>Pooja : {item.pooja}</Text>
                        <Text style={styles.details}>Date : {item.date}</Text>
                        <Text style={styles.details}>Time : {item.time}</Text>
                    </View>
                </View>
            ))}
            </View>
        </View>
    );
};

export default CompletedPoojaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: hp('2%'),
    },
    heading: {
        backgroundColor: '#fff',
        padding: hp('1.3%'),
        elevation: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp('4%'),
    },
    headText: {
        color: '#000',
        fontWeight: '400',
        fontSize: hp('2.3%'),
        marginLeft: wp('4%'),
    },
    backIcon: {
        width: hp('4.5%'),
        height: hp('4%'),
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('2%'),
    },
    filterButton: {
        backgroundColor: '#ccc',
        padding: hp('1%'),
        borderRadius: 10,
    },
    filterText: {
        fontSize: hp('1.8%'),
        fontWeight: '500',
        color: '#000'
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        padding: hp('2%'),
        borderRadius: 10,
        marginBottom: hp('1.5%'),
        alignItems: 'center',
    },
    profilePic: {
        width: hp('6%'),
        height: hp('6%'),
        borderRadius: 50,
        marginRight: hp('2%'),
    },
    cardTextContainer: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    name: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#000'
    },
    details: {
        fontSize: hp('1.8%'),
        color: '#000'
    },
});
