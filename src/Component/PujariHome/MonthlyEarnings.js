import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MonthlyEarnings = () => {
    return (
        <View>
            <View style={styles.rowContainer}>
                <Text style={styles.RecentText}>Monthly Earning</Text>
                <TouchableOpacity>
                    <Text style={styles.ViewText}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <View style={[styles.reminderCard, { backgroundColor: '#D6D6D6' }]}>
                    <View style={styles.rowContainer}>
                        <View style={styles.reminderDetails}>
                            <Text style={styles.poojaTitle}>Pooja :  Rahu - Ketu Pooja</Text>
                            <Text style={styles.reminderText}>Date    :  30/1/2025</Text>
                            <Text style={styles.reminderText}>Time   :  10:00 AM</Text>
                            <Text style={styles.attendeeText}>Attendee:  104</Text>
                            <Text style={styles.countdown}>Starts in: 1d 4h 23m</Text>
                        </View>
                    </View>
                </View>
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
    },
    userImage: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('6%'),
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

export default MonthlyEarnings;
