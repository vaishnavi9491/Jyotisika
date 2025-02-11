// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const AllMonthlyEarning = () => {
//   return (
//     <View>
//       <Text>AllMonthlyEarning</Text>
//     </View>
//   )
// }

// export default AllMonthlyEarning

// const styles = StyleSheet.create({})




import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MonthlyEarnings from '../../../Component/PujariHome/MonthlyEarnings';

const Tab = createMaterialTopTabNavigator();

const PendingRequests = () =>
    <View style={{ flex: 1, marginBottom: hp('10%'), padding: hp('2%'),backgroundColor:'#fff' }}>
            <MonthlyEarnings />
    </View>
const ApprovedRequests = () =>
    <View style={{ flex: 1, marginBottom: hp('10%'), padding: hp('2%'),backgroundColor:'#fff' }}>
            <MonthlyEarnings />
    </View>

const AllMonthlyEarning = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            {/* Header Section */}
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => navigation.navigate('PujariBottomTab')}>
                    <Ionicons name="arrow-back" size={hp(3.5)} color="#000" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headText}>Pooja Remainder</Text>
            </View>

            {/* Tab Navigator */}
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: hp(1.8), fontWeight: 'bold', color: '#65558F' },
                    tabBarIndicatorStyle: { backgroundColor: '#65558F', width: wp('25%'), marginLeft: hp('6%'), borderWidth: 2, borderRadius: 5 },
                    tabBarStyle: { backgroundColor: '#F2F2F7' },
                }}
            >
                <Tab.Screen name="Pending" component={PendingRequests} />
                <Tab.Screen name="Approved" component={ApprovedRequests} />
            </Tab.Navigator>
        </View>
    );
};

export default AllMonthlyEarning;

const styles = StyleSheet.create({
    Container: {
        flex: 1,

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
});
