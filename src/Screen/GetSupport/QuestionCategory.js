// import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { AstrologyIcon } from '../../Component/Horoscopeicon';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const QuestionCategory = () => {
//     return (
//         <ScrollView style={styles.container}>
//             <View style={styles.heading}>
//                 <TouchableOpacity>
//                     <Ionicons name="arrow-back" size={28} color='#000' />
//                 </TouchableOpacity>
//                 <Text style={styles.headText}>Get Help</Text>
//             </View>
//             <View style={styles.categoryContainer}>
//                 <FontAwesome6 name="circle-user" size={25} color='#000' />
//                 <Text style={styles.categoryText}>Account and Profile Issues</Text>
//             </View>
//             <View style={styles.categoryContainer}>
//                 <Ionicons name="wallet" size={25} color='#000' />
//                 <Text style={styles.categoryText}>Payment and Refund Queries</Text>
//             </View>
//             <View style={styles.categoryContainer}>
//                 <FontAwesome6 name="circle-user" size={25} color='#000' />
//                 <Text style={styles.categoryText}>Astrology Consultation Issues</Text>
//             </View>
//             <View style={styles.categoryContainer}>
//                 <FontAwesome6 name="circle-user" size={25} color='#000' />
//                 <Text style={styles.categoryText}>Technical Problems</Text>
//             </View>
//             <View style={styles.categoryContainer}>
//                 <FontAwesome6 name="circle-user" size={25} color='#000' />
//                 <Text style={styles.categoryText}>Subscription and Service Queries</Text>
//             </View>
//             <View style={styles.categoryContainer}>
//                 <MaterialCommunityIcons name="shield-lock" size={25} color='#000' />
//                 <Text style={styles.categoryText}>Privacy and Data Security</Text>
//             </View>
//             <View style={styles.categoryContainer}>
//                 <FontAwesome name="question-circle" size={25} color='#000' />
//                 <Text style={styles.categoryText}>General Astrology Questions</Text>
//             </View>
//             <View style={styles.categoryContainer}>
//                 <FontAwesome6 name="circle-user" size={25} color='#000' />
//                 <Text style={styles.categoryText}>Common Feature Requests</Text>
//             </View>
//         </ScrollView>
//     );
// };

// export default QuestionCategory;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//        // paddingVertical: hp('1%'),
//         backgroundColor: '#fff'
//     },
//     heading: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%',
//         backgroundColor: '#fff',
//         marginBottom:hp('5%'),
//         elevation: 5,
//         padding:hp('1.5%')
//     },
//     headText: {
//         color: '#000',
//         fontSize: hp('2.5%'),
//         position: 'absolute',
//         left: '50%',
//         transform: [{ translateX: -wp('15%') }],
//         fontWeight: 'bold'
//     },
//     categoryContainer:{
//         flexDirection:'row',
//         backgroundColor:'#F2F2F7',
//         paddingVertical:hp('1.7%'),
//         borderRadius:10,
//         marginHorizontal:hp('2%'),
//         padding:hp('0.7%'),
//         marginBottom:hp('1.5%'),
//     },
//     categoryText:{
//         color:'#000',
//         marginLeft:hp('1%'),
//         fontSize:hp('2%')
//     },
// });

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const QuestionCategory = ({ navigation }) => {
    const categories = [
        { id: 1, name: "Account and Profile Issues", icon: <FontAwesome6 name="circle-user" size={25} color="#000" /> },
        { id: 2, name: "Payment and Refund Queries", icon: <Ionicons name="wallet" size={25} color="#000" /> },
        { id: 3, name: "Astrology Consultation Issues", icon: <FontAwesome6 name="circle-user" size={25} color="#000" /> },
        { id: 4, name: "Technical Problems", icon: <FontAwesome6 name="circle-user" size={25} color="#000" /> },
        { id: 5, name: "Subscription and Service Queries", icon: <FontAwesome6 name="circle-user" size={25} color="#000" /> },
        { id: 6, name: "Privacy and Data Security", icon: <MaterialCommunityIcons name="shield-lock" size={25} color="#000" /> },
        { id: 7, name: "General Astrology Questions", icon: <FontAwesome name="question-circle" size={25} color="#000" /> },
        { id: 8, name: "Common Feature Requests", icon: <FontAwesome6 name="file-circle-exclamation" size={22} color="#000" /> },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headText}>Get Help</Text>
            </View>
            {categories.map((category) => (
                <TouchableOpacity
                    key={category.id}
                    style={styles.categoryContainer}
                    onPress={() => navigation.navigate('QuestionScreen', { category: category.name })}
                >
                    {category.icon}
                    <Text style={styles.categoryText}>{category.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default QuestionCategory;

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
        marginBottom: hp('5%'),
        elevation: 5,
        padding: hp('1.5%'),
    },
    headText: {
        color: '#000',
        fontSize: hp('2.5%'),
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -wp('15%') }],
        fontWeight: 'bold',
    },
    categoryContainer: {
        flexDirection: 'row',
        backgroundColor: '#F2F2F7',
        paddingVertical: hp('1.7%'),
        borderRadius: 10,
        marginHorizontal: hp('2%'),
        padding: hp('0.7%'),
        marginBottom: hp('1.5%'),
    },
    categoryText: {
        color: '#000',
        marginLeft: hp('1%'),
        fontSize: hp('2%'),
    },
});
