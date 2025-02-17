import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feedback from '../../../Component/PujariHome/Feedback';

const AllPujariFeedBack = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            {/* Header Section */}
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => navigation.navigate('PujariBottomTab')}>
                    <Ionicons name="arrow-back" size={hp(3.5)} color="#000" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headText}>Feedbacks</Text>
            </View>

            {/* Scrollable Content */}
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
                <Feedback navigation={navigation} limit={null} layout="vertical" />
            </ScrollView>
        </View>
    );
};

export default AllPujariFeedBack;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#fff',
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
        fontWeight: '500',
        fontSize: hp('2.3%'),
        marginLeft: wp('4%'),
    },
    backIcon: {
        width: hp('4.5%'),
        height: hp('4%'),
    },
    scrollContainer: {
        flex: 1,
    },
    contentContainer: {
        padding: hp('1.5%'),
        paddingBottom: hp('3%'),
    },
});
