// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// const WalletScreen = ({navigation}) => {
//     const walletOptions = [
//         { amount: 50, extra: '100% Extra' },
//         { amount: 100, extra: '100% Extra' },
//         { amount: 200, extra: '50% Extra' },
//         { amount: 500, extra: '50% Extra' },
//         { amount: 1000, extra: '30% Extra' },
//         { amount: 2000, extra: '15% Extra' },
//         { amount: 3000, extra: '15% Extra' },
//         { amount: 4000, extra: '10% Extra' },
//         { amount: 8000, extra: '10% Extra' },


//     ];

//     return (
//         <View style={styles.container}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
//                 <Icon name="arrow-back" size={24} color="#000" />
//                 </TouchableOpacity>
//                 <Text style={styles.headerText}>Wallet</Text>
//                 <View style={styles.headerIcons}>
//                     <Fontisto name="language" size={20} color="#FFF" style={styles.settings} />
//                     <AntDesign name="customerservice" size={22} color="#000" style={styles.iconSpacing} />
//                 </View>
//             </View>

//             {/* Balance */}
//             <View style={styles.balanceContainer}>
//                 <Text style={styles.balanceLabel}>Available balance</Text>
//                 <Text style={styles.balanceAmount}>₹ 50</Text>
//             </View>

//             {/* Wallet Options */}
//             <ScrollView contentContainerStyle={styles.gridContainer}>
//                 {walletOptions.map((option, index) => (
//                     <TouchableOpacity key={index} style={styles.card} onPress={()=>navigation.navigate('PaymentInformation')}>
//                         <Text style={styles.amountText}>₹{option.amount}</Text>
//                         <Text style={styles.extraText}>{option.extra}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: hp('2%'),

//     },
//     settings: {
//         backgroundColor: '#FFD700',
//         padding: wp('1%'),
//         borderRadius: wp(2),

//     },
//     headerText: {
//         fontSize: hp('2.5%'),
//         fontWeight: 'bold',
//         color: '#000',
//     },
//     headerIcons: {
//         flexDirection: 'row',
//     },
//     iconSpacing: {
//         marginLeft: hp('2%'),
//     },
//     balanceContainer: {

//         padding: hp('2%'),
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee',
//     },
//     balanceLabel: {
//         fontSize: hp('2%'),
//         color: '#888',
//     },
//     balanceAmount: {
//         fontSize: hp('2.5%'),
//         fontWeight: 'bold',
//         color: '#000',
//         marginTop: hp('3%'),
//     },
//     gridContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//         padding: hp('2%'),
//     },
//     card: {
//         width: '30%',
//         backgroundColor: '#F5F5F5',
//         borderRadius: 8,
//         padding: hp('2.5%'),
//         marginBottom: hp('2.2%'),
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#00C853',
//     },
//     amountText: {
//         fontSize: hp('2.3%'),
//         fontWeight: 'bold',
//         color: '#000',
//     },
//     extraText: {
//         fontSize: hp('1.7%'),
//         color: '#00C853',
//         marginTop: hp('1%'),
//     },
// });

// export default WalletScreen;




import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const WalletScreen = ({ navigation, showCoupons }) => {
  const [walletOptions, setWalletOptions] = useState([]);

  useEffect(() => {
    // Simulating API call
    const fetchWalletOptions = async () => {
      try {
        const data = [
          { amount: 50, extra: '100% Extra' },
          { amount: 100, extra: '100% Extra' },
          { amount: 200, extra: '50% Extra' },
          { amount: 500, extra: '50% Extra' },
          { amount: 1000, extra: '30% Extra' },
          { amount: 2000, extra: '15% Extra' },
          { amount: 3000, extra: '15% Extra' },
          { amount: 4000, extra: '10% Extra' },
          { amount: 8000, extra: '10% Extra' },

        ];
        setWalletOptions(data);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch wallet options');
      }
    };

    fetchWalletOptions();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('App_Drawer_Navigation')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Wallet</Text>
        <View style={styles.headerIcons}>
          <Fontisto name="language" size={20} color="#FFF" style={styles.settings} />
          <AntDesign name="customerservice" size={22} color="#000" style={styles.iconSpacing} />
        </View>
      </View>

      {/* Balance */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Available balance</Text>
        <Text style={styles.balanceAmount}>₹ 50</Text>
      </View>

      {/* Wallet Options */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {walletOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() =>
              navigation.navigate('PaymentInformation', {
                amount: option.amount,
                extra: option.extra,
                showCoupons: true,
              })
            }
          >
            <Text style={styles.amountText}>₹{option.amount}</Text>
            <Text style={styles.extraText}>{option.extra}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: hp('2%'),

  },
  settings: {
    backgroundColor: '#FFD700',
    padding: wp('1%'),
    borderRadius: wp(2),

  },
  headerText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: hp('2%'),
  },
  balanceContainer: {

    padding: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  balanceLabel: {
    fontSize: hp('2%'),
    color: '#888',
  },
  balanceAmount: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: '#000',
    marginTop: hp('3%'),
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: hp('2%'),
  },
  card: {
    width: '30%',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: hp('2.5%'),
    marginBottom: hp('2.2%'),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00C853',
  },
  amountText: {
    fontSize: hp('2.3%'),
    fontWeight: 'bold',
    color: '#000',
  },
  extraText: {
    fontSize: hp('1.7%'),
    color: '#00C853',
    marginTop: hp('1%'),
  },
});

export default WalletScreen;

