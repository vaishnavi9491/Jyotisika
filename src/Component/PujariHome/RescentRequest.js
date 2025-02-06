import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const RecentRequest = () => {
    return (
        <View>
            <View style={styles.rowContainer}>
                <Text style={styles.RecentText}>Recent Request</Text>
                <TouchableOpacity>
                    <Text style={styles.ViewText}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.requestCard}>
                <Image source={require('../../assets/image/john.png')} style={styles.userImage} />
                <View style={styles.requestDetails}>
                    <Text style={styles.userName}>Jane Doe</Text>
                    <Text style={styles.poojaDetails}>Pooja : Ghar Shanti Pooja</Text>
                    <Text style={styles.dateTime}>Date : 25/1/2025</Text>
                    <Text style={styles.dateTime}>Time : 10:00 AM</Text>
                    <Text style={styles.location}>XYZ Road, Nashik</Text>
                </View>
                <View style={styles.distanceBadge}>
                    <Text style={styles.distanceText}>2.5 km Away</Text>
                </View>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.acceptButton}>
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectButton}>
                    <Text style={styles.buttonText}>Reject</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: hp('0.5%'),
        marginTop: hp('1%'),
        marginBottom: hp('1%')
    },
    RecentText: {
        color: '#000',
        fontWeight: '500'
    },
    ViewText: {
        color: '#757575',
        fontWeight: '500'
    },
    requestCard: {
        flexDirection: 'row',
        backgroundColor: '#ccc',
        padding: hp('2%'),
        marginTop: hp('1%'),
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomWidth: 2,
        borderColor: '#888'
    },
    requestDetails: {
        marginLeft: hp('1.5%'),
        flex: 1,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: hp('2.2%'),
        color: '#000',
    },
    poojaDetails: {
        fontSize: hp('1.8%'),
        color: '#000',
        marginTop: hp('1%'),
    },
    dateTime: {
        fontSize: hp('1.6%'),
        color: '#000',
    },
    location: {
        fontSize: hp('1.6%'),
        color: '#000',
    },
    distanceBadge: {
        backgroundColor: '#333',
        paddingHorizontal: wp('2%'),
        borderRadius: 5,
    },
    distanceText: {
        fontSize: hp('1.5%'),
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#999',
        padding: hp('1.5%')
    },
    acceptButton: {
        backgroundColor: '#28A745',
        flex: 1,
        paddingVertical: hp('1%'),
        alignItems: 'center',
        marginRight: wp('2%'),
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#277d37'
    },
    rejectButton: {
        backgroundColor: '#ccc',
        flex: 1,
        paddingVertical: hp('1%'),
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#6e736f'
    },
    buttonText: {
        color: '#fff',
        fontSize: hp('2%'),
        fontWeight: 'bold',
    },
    userImage: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('6%'),
        marginRight: wp('3%'),
    },
});

export default RecentRequest;
