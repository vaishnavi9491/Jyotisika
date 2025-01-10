

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { faqData } from '../../Screen/GetSupport/Data';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const QuestionScreen = ({ route, navigation }) => {
    const { category } = route.params;
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Get questions for the selected category
    const questions = faqData[category] || [];

    const toggleAnswer = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <View style={styles.container}>
            {/* Custom Header */}
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headText}>{category}</Text>
            </View>

            {/* Questions List */}
            <FlatList
                data={questions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.questionContainer}>
                        <TouchableOpacity
                            onPress={() => toggleAnswer(index)}
                            style={styles.questionRow}
                        >
                            <Text style={styles.questionText}>{item.question}</Text>
                            <MaterialIcons
                                name={expandedIndex === index ? 'arrow-drop-up' : 'arrow-drop-down'}
                                size={25}
                                color="#000"
                            />
                        </TouchableOpacity>
                        {expandedIndex === index && (
                            <Text style={styles.answerText}>{item.answer}</Text>
                        )}
                    </View>
                )}
            />
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomText1}>Query not in the list ?</Text>
                <TouchableOpacity>
                    <Text style={styles.bottomText2}>Contact Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QuestionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        elevation: 5,
        padding: hp('2.3%'),
        marginBottom: hp('5%'),
    },
    headText: {
        color: '#000',
        fontSize: hp('2.5%'),
        position: 'absolute',
        left: '34%',
        transform: [{ translateX: -wp('15%') }],
        fontWeight: 'bold',
        width: '95%',
    },
    questionContainer: {
        backgroundColor: '#F2F2F7',
        paddingVertical: hp('1.7%'),
        borderRadius: 10,
        marginHorizontal: hp('2%'),
        padding: hp('1.4%'),
        marginBottom: hp('1.5%'),
    },
    questionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    questionText: {
        fontSize: hp('2%'),
        color: '#000',
        fontWeight: '500',
        flex: 1, // Ensure the text takes available space
    },
    answerText: {
        fontSize: hp('1.8%'),
        color: '#000',
        marginTop: 8,
    },
    bottomContainer: {
        alignItems:'center',
        marginBottom:hp('2%')
    },
    bottomText1: {
        color: '#000',
        fontSize:hp('2')
    },
    bottomText2: {
        color: '#007AFF',
        fontSize:hp('2.2')
    }
});
