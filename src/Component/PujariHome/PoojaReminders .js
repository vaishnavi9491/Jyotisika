
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PoojaReminders = ({ navigation, limit, showButtons = true }) => {
    const PoojaRemainderData = [
        {
            pooja: 'Ghar Shanti Pooja',
            date: '25/1/2025',
            time: '12:00 AM',
            attendee: '104',
            startsIn: '1d 4h 23m'
        },
        {
            pooja: 'Lakshmi Pooja',
            date: '26/1/2025',
            time: '10:00 AM',
            attendee: '105',
            startsIn: '1d 4h 23m'
        },
        {
            pooja: 'Ganesh Pooja',
            date: '27/1/2025',
            time: '2:00 PM',
            attendee: '106',
            startsIn: '1d 4h 23m'
        },
        {
            pooja: 'Navratri Pooja',
            date: '28/1/2025',
            time: '6:00 PM',
            attendee: '109',
            startsIn: '1d 4h 23m'
        },
    ];

    // Show limited requests if 'limit' prop is provided
    const displayRequests = limit ? PoojaRemainderData.slice(0, limit) : PoojaRemainderData;

    const PoojaRemainderCard = ({ pooja, date, time, attendee, startsIn }) => {
        return (
            <View>

                <View>
                    <View style={styles.reminderCard}>
                        <View style={styles.rowContainer}>
                            <Image source={require('../../assets/image/john.png')} style={styles.userImage} />
                            <View style={styles.reminderDetails}>
                                <Text style={styles.reminderText}>Pooja : {pooja}</Text>
                                <Text style={styles.reminderText}>Date   : {date}</Text>
                                <Text style={styles.reminderText}>Time  : {time}</Text>
                                <Text style={styles.attendeeText}>Attendee : {attendee}</Text>
                                <Text style={styles.countdown}>Starts In : {startsIn}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View>
            <View style={styles.rowContainer}>
                <Text style={styles.RecentText}>Pooja Reminders</Text>
                {limit && ( // Show "View All" only in HomeScreen
                    <TouchableOpacity onPress={() => navigation.navigate('AllPoojaRemainder')}>
                        <Text style={styles.ViewText}>View all</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.section}>
                <ScrollView vertical showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {displayRequests.map((item, index) => (
                        <PoojaRemainderCard key={index} {...item} />
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
    section: {
        marginTop: hp('1.3%'),
    },
    reminderCard: {
        backgroundColor: '#FFF3CD',
        padding: hp('1%'),
        borderRadius: 10,
        marginBottom:hp('1%')
    },
    reminderDetails: {
        flex: 1,
    },
    userImage: {
        width: wp('25%'),
        height: wp('30%'),
        borderRadius: wp('1%'),
        marginRight: wp('3%'),
    },
    reminderDetails: {
        flex: 1,
    },
    poojaTitle: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#000'
    },
    reminderText: {
        fontSize: hp('1.8%'),
        color: '#000',
        fontWeight: '600'
    },
    attendeeText: {
        fontSize: hp('1.6%'),
        color: '#14AE5C',
        fontWeight: '600'
    },
    countdown: {
        fontSize: hp('1.5%'),
        color: 'red',
    },
});

export default PoojaReminders;
