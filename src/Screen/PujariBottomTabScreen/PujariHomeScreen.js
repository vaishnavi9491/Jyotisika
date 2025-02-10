import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RecentRequest from '../../Component/PujariHome/RescentRequest';
import PoojaReminders from '../../Component/PujariHome/PoojaReminders ';
import MonthlyEarnings from '../../Component/PujariHome/MonthlyEarnings';
import Feedback from '../../Component/PujariHome/Feedback';

const PujariHomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => navigation.navigate('PujariProfileScreen')}>
                    <Image source={require('../../assets/image/john.png')} style={styles.headerImage} />
                </TouchableOpacity>
                <Text style={styles.headTeaxt}>Jyotisika</Text>
                <FontAwesome name="bell" size={24} color="black" style={styles.notificationIcon} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                <View style={{ paddingHorizontal: hp('0.5%') }}>
                    <View style={styles.actionRow}>
                        {[
                            {
                                title: "Today's Schedule",
                                screen: "ScheduleScreen",
                                color: "#CFF7D3",
                                icon: "calendar-alt",
                                iconLib: FontAwesome5,
                                iconColor: "#009951",
                                textColor: "#02542D"
                            },
                            {
                                title: "Upcoming Pooja",
                                screen: "UpcomingPoojaScreen",
                                color: "#E8DEF8",
                                icon: "event",
                                iconLib: MaterialIcons,
                                iconColor: "#65558F",
                                textColor: "#4B0082"
                            },
                            {
                                title: "Rate Charts",
                                screen: "RateChart",
                                color: "#FFD8E4",
                                icon: "rupee",
                                iconLib: FontAwesome,
                                iconColor: "#852221",
                                textColor: "#852221"
                            },
                            {
                                title: "Add Pooja",
                                screen: "AddPoojaScreen",
                                color: "#FFF1C2",
                                icon: "calendar-plus",
                                iconLib: FontAwesome5,
                                iconColor: "#BF6A02",
                                textColor: "#522504"
                            }
                        ].map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.actionButton, { backgroundColor: item.color }]}
                                onPress={() => navigation.navigate(item.screen)}
                            >
                                <item.iconLib
                                    name={item.icon}
                                    size={24}
                                    color={item.iconColor}
                                    style={styles.icon}
                                />
                                <Text style={[styles.actionText, { color: item.textColor }]}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    {/* RecentRequest Component */}
                    <RecentRequest navigation={navigation} limit={1} />
                    {/* PoojaReminders Component */}
                    <PoojaReminders navigation={navigation} limit={1} />
                    {/* MonthlyEarnings Component */}
                    <MonthlyEarnings  navigation={navigation} limit={1}/>
                    {/* Feedback Component */}
                    <Feedback />
                </View>
            </ScrollView>
        </View>
    )
}

export default PujariHomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: hp('7%'),
    },
    heading: {
        backgroundColor: '#fff',
        padding: hp('1.5%'),
        elevation: 8,
        flexDirection: 'row',
    },
    headerImage: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('5%'),
        marginLeft: hp('1.5%')
    },
    headTeaxt: {
        color: '#000',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: hp('2.3%'),
        marginLeft: hp('2%')
    },
    notificationIcon: {
        marginLeft: 'auto',
        marginRight: wp('5%'),
        alignSelf: 'center'
    },
    scrollContainer: {
        padding: hp('1.4%')
    },
    actionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp('2%'),
    },
    actionButton: {
        flex: 1,
        marginHorizontal: wp('1.5%'),
        paddingVertical: hp('2%'),
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    icon: {
        marginBottom: hp('1%'),
    },
    actionText: {
        fontSize: hp('1.4%'),
        color: '#000',
        textAlign: 'center',
        fontWeight: '500'
    },
})
