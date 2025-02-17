import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TableComponent from '../../../Component/PujariHome/TableComponent';

const EarningBreakdown = ({ navigation }) => {
    const tableData1 = [
        { pooja: "Offline", december: 5, november: 12 },
        { pooja: "Online", december: 7, november: 15 },
        { pooja: "Mob", december: 10, november: 12 },
    ];

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={hp(3.5)} color="#000" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headText}>Earnings Breakdown</Text>
            </View>
            <ScrollView style={styles.container}>
                <TableComponent
                    title="Offline pooja Breakdown"
                    headers={["Name", "Pooja", "Fees"]}
                    data={[
                        { name: "Jerry", pooja: 'Rahu-ketu', fees: 1200 },
                        { name: "Tom", pooja: 'Wealth', fees: 500 },
                        { name: "Alice", pooja: 'Ghar shanti', fees: 250 },
                        { name: "Jisuk", pooja: 'Rahu-ketu', fees: 400 },
                        { name: "Hain", pooja: 'Wealth', fees: 500 },
                        { name: "Suga", pooja: 'Ghar shanti', fees: 600 },
                    ]}
                />

                <TableComponent
                    title="Online pooja Breakdown"
                    headers={["Name", "Pooja", "Fees"]}
                    data={[
                        { name: "Jerry", pooja: 'Rahu-ketu', fees: 1200 },
                        { name: "Tom", pooja: 'Wealth', fees: 500 },
                        { name: "Alice", pooja: 'Ghar shanti', fees: 250 },
                        { name: "Jisuk", pooja: 'Rahu-ketu', fees: 400 },
                        { name: "Hain", pooja: 'Wealth', fees: 500 },
                    ]}
                />

                <TableComponent
                    title="Mob pooja Breakdown"
                    headers={["Name", "Pooja", "Fees"]}
                    data={[
                        { name: "Jerry", pooja: 'Rahu-ketu', fees: 1200 },
                        { name: "Tom", pooja: 'Wealth', fees: 500 },
                        { name: "Alice", pooja: 'Ghar shanti', fees: 250 },
                        { name: "Suga", pooja: 'Ghar shanti', fees: 600 },
                    ]}
                />
            </ScrollView>
        </View>
    );
};

export default EarningBreakdown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: hp('2%'),
        marginTop: hp('0.3%'),
        backgroundColor: '#fff',
        marginBottom:hp('0.5%')
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
