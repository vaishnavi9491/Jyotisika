import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const RateChart = ({ navigation }) => {
    const services = [
        { id: "1", name: "Ghar Shanti", price: "₹ 610", discount: "₹ 500" },
        { id: "2", name: "Rahu - Ketu", price: "₹ 610", discount: "₹ 500" },
    ];
    return (
        <View style={styles.Container}>
            <View style={styles.heading}>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                     <Ionicons name="arrow-back" size={hp(3.5)} color="#000" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headText}>Rate Chart</Text>
            </View>
            <View style={styles.rateContainer}>
                {services.map((service) => (
                    <View key={service.id} style={styles.card}>
                        <Text style={styles.serviceName}>{service.name}</Text>
                        <Text style={styles.price}>Original Price: {service.price}</Text>
                        <Text style={styles.discount}>Discount Price: {service.discount}</Text>
                        <TouchableOpacity style={styles.changeButton}>
                            <Text style={styles.buttonText}>Change</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default RateChart

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
    rateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: hp('2%')
    },
    card: {
        padding: hp('0.5%'),
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 3
    },
    serviceName: {
        color: '#000',
        fontSize: hp('2.5%'),
        fontWeight: "bold"
    },
    price: {
        color: '#000',
        fontSize: 14,
        textDecorationLine: "line-through",
        marginTop: hp('2%')
    },
    discount: {
        fontSize: 14,
        color: "green",
        marginTop: hp('2%')
    },
    changeButton: {
        backgroundColor: "#AFF4C6",
        padding: hp('1%'),
        borderRadius: 30,
        marginTop: hp('2%'),
        margin: hp('2%'),
        borderWidth:2,
        borderColor:'#197d44'
    },
    buttonText: {
        color: "#000",
        textAlign: "center",
        fontWeight:'bold'
    },
})