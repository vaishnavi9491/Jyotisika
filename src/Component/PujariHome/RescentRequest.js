import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const RecentRequest = ({ navigation, limit, showButtons = true }) => {
    const requestData = [
        {
            name: 'John Doe',
            pooja: 'Ghar Shanti Pooja',
            date: '25/1/2025',
            time: '12:00 AM',
            address: 'XYZ Road, Nashik'
        },
        {
            name: 'Alice Smith',
            pooja: 'Lakshmi Pooja',
            date: '26/1/2025',
            time: '10:00 AM',
            address: 'ABC Colony, Pune'
        },
        {
            name: 'Michael Brown',
            pooja: 'Ganesh Pooja',
            date: '27/1/2025',
            time: '2:00 PM',
            address: 'LMN Street, Mumbai'
        },
        {
            name: 'Sophia Johnson',
            pooja: 'Navratri Pooja',
            date: '28/1/2025',
            time: '6:00 PM',
            address: 'XYZ Road, Nashik'
        },
    ];

    // Show limited requests if 'limit' prop is provided
    const displayRequests = limit ? requestData.slice(0, limit) : requestData;

    const RequestCard = ({ name, pooja, date, time, address }) => {
        return (
            <View>
                <View style={styles.requestCard}>
                    <Image source={require('../../assets/image/john.png')} style={styles.userImage} />
                    <View style={styles.requestDetails}>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.dateTime}>{date}</Text>
                        <Text style={styles.poojaDetails}>Pooja : {pooja}</Text>
                        <Text style={styles.dateTime}>Time : {time}</Text>
                        <Text style={styles.location}>{address}</Text>
                    </View>
                    <View style={styles.distanceBadge}>
                        <Text style={styles.distanceText}>2.5 km Away</Text>
                    </View>
                </View>
                {showButtons && (
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.acceptButton}>
                            <Text style={styles.buttonText}>Accept</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.rejectButton}>
                            <Text style={styles.buttonText}>Reject</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    };

    return (
        <View>
            <View style={styles.rowContainer}>
                <Text style={styles.RecentText}>Recent Request</Text>
                {limit && ( // Show "View All" only in HomeScreen
                    <TouchableOpacity onPress={() => navigation.navigate('AllRescentRequest')}>
                        <Text style={styles.ViewText}>View all</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.section}>
                <ScrollView vertical showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {displayRequests.map((item, index) => (
                        <RequestCard key={index} {...item} />
                    ))}
                </ScrollView>
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
    // scrollContainer: {
    //     marginBottom: hp('5%')
    // },
    requestCard: {
        flexDirection: 'row',
        backgroundColor: '#d9d9d9',
        padding: hp('2%'),
        marginTop: hp('1%'),
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomWidth: 2,
        borderColor: '#888'
    },
    requestDetails: {
        marginHorizontal: hp('1.5%'),
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
        backgroundColor: '#bdbdbd',
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
