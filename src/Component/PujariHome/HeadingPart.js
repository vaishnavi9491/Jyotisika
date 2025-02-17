
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const HeadingPart = ({navigation}) => {
  return (
   <View >
            <View style={styles.heading}>
               <TouchableOpacity onPress={() => navigation.navigate('PujariProfileScreen')}>
                 <Image source={require('../../assets/image/john.png')} style={styles.headerImage} />
               </TouchableOpacity>
               <Text style={styles.headTeaxt}>Jyotisika</Text>
               <TouchableOpacity onPress={() => navigation.navigate('PujariNotification')}>
                 <FontAwesome name="bell" size={24} color="black" style={styles.notificationIcon} />
               </TouchableOpacity>
             </View>
       </View>
  )
}

export default HeadingPart

const styles = StyleSheet.create({
      heading: {
        backgroundColor: '#fff',
        padding: hp('1.5%'),
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('0.5%') 
      },
      headerImage: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('5%'),
        marginLeft: hp('1%')
      },
      headTeaxt: {
        color: '#000',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: hp('2.3%'),
      },
      notificationIcon: {
        marginLeft: 'auto',
        marginRight: wp('1%'),
        alignSelf: 'center'
      },
  })
