import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';

const LoveCalculatorScreen = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [lovePercentage, setLovePercentage] = useState(null);
    const navigation = useNavigation();

    // Function to calculate love percentage
    const calculateLovePercentage = () => {
        if (!name1.trim() || !name2.trim()) {
            Alert.alert('Error', 'Please enter both names.');
            return;
        }

        // A simple formula for love percentage (just for fun)
        const combinedLength = name1.trim().length + name2.trim().length;
        const percentage = (combinedLength * 7) % 101;
        setLovePercentage(percentage);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate("App_Drawer_Navigation")}>
                        <AntDesign name="arrowleft" size={20} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.Jtext}>Love Calculator</Text>
                   
                    <TouchableOpacity style={styles.settings}>
                        <Fontisto name="language" size={15} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="phone-call" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Title */}
                <View>
                    <Text style={styles.title}>Love Calculator</Text>

                </View>
                <View style={{ marginLeft: hp('2%'), marginTop: hp('2%') }}>
                    <TextInput
                        style={styles.textCalculat}
                        placeholder="What is Love calculator"
                        placeholderTextColor="#888"

                    />
                </View>

                {/* Input Fields */}
                <View style={styles.inputBox}>
                    <Text style={styles.textstyle}>Girl Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter girl's name"
                        value={name1}
                        onChangeText={setName1}
                    />
                    <Text style={styles.textstyle}>Boy Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter boy's name"
                        value={name2}
                        onChangeText={setName2}
                    />
                </View>

                {/* Calculate Button */}
                <TouchableOpacity style={styles.button} onPress={calculateLovePercentage}>
                    <Text style={styles.buttonText}>Calculate Love</Text>
                </TouchableOpacity>

                {/* Result Section */}
                {lovePercentage !== null && (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}>Love Percentage: {lovePercentage}%</Text>
                        {/* Mock Pie Chart */}
                        <View style={styles.pieChart}>
                            <Text style={styles.pieChartText}>{lovePercentage}%</Text>
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        padding: hp("2%"),
    },
    balance: {
        fontSize: hp("2%"),
        fontWeight: "bold",
        color: "#000",
    },
    Jtext: {
        marginRight: hp("20%"),
        color: "#000",
        fontWeight: "bold",
    },
    settings: {
        backgroundColor: "#FFD700",
        padding: wp("2%"),
        borderRadius: wp(2),
    },
    textstyle: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: hp('2%')
    },
    title: {
        fontSize: wp('6%'),
        fontWeight: 'bold',
        color: '#FFCC00',
        marginTop: hp('3%'),
        textAlign: 'center',
    },
    subtitle: {
        fontSize: wp('4%'),
        color: '#000',
        textAlign: 'center',
        marginBottom: hp('3%'),
    },
    textCalculat: {
        height: hp('7%'),
        color: '#000',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginRight: hp('2%'),
        paddingLeft: wp('3%'),
        marginBottom: hp('2%'),
        fontSize: wp('4%'),
    },
    input: {
        width: wp('80%'),
        height: hp('7%'),
        color: '#000',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: wp('3%'),
        marginBottom: hp('2%'),
        fontSize: wp('4%'),
    },

    inputBox: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: hp('2%'),
        marginHorizontal: wp('5%'),
        backgroundColor: '#FFF',
        marginTop: hp('3%'),
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    button: {
        backgroundColor: '#FFCC00',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('15%'),
        borderRadius: 8,
        margin: hp('4%'),
        padding: hp('10%')
    },
    buttonText: {
        color: '#FFF',
        fontSize: wp('5%'),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    resultContainer: {
        marginTop: hp('3%'),
        alignItems: 'center',
    },
    resultText: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: '#FFCC00',
        marginBottom: hp('2%'),
        textAlign: 'center',
        justifyContent: 'center',
    },
    pieChart: {
        width: wp('40%'),
        height: wp('40%'),
        borderRadius: wp('20%'),
        backgroundColor: '#FFCC00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pieChartText: {
        fontSize: wp('6%'),
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default LoveCalculatorScreen;
