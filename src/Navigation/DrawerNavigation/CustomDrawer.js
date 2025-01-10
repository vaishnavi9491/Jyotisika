import { View, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react'
import { DrawerItemList } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = (props) => {
    const { navigation } = props;
    const [uname, setUsername] = useState();

    useEffect(() => {
        checkSession();
    }, [uname]);

    const checkSession = async () => {
        try {
            const value = await AsyncStorage.getItem('username');
            setUsername(value);
        } catch (error) {
            console.log(error);
        }
    };

    const logoutSession = async () => {
        try {
            await AsyncStorage.setItem(
                'login',
                '',
            );
            ToastAndroid.show('Logout successfully.', ToastAndroid.SHORT);
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
               
                    <View style={{ backgroundColor: '#FFCC00', marginBottom: '5%', padding: '4%' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Drawerprofile')}>
                        <Image
                            source={require('../../assets/image/jane.png')}
                            style={styles.imgStyle}
                        />
                        </TouchableOpacity>
                        <View style={styles.userInfoContainer}>
                            <Text style={styles.nameStyle}>Hello {uname}</Text>
                            <Text style={styles.emailStyle}>abc@gmail.com</Text>
                        </View>
                    </View>
                


                <DrawerItemList {...props} />
                <TouchableOpacity style={styles.btnStyle} onPress={logoutSession}>
                    <View style={styles.shareContainer}>
                        <Entypo name="log-out" size={22} color='#FF5757' />
                        <Text
                            style={{
                                fontSize: 15,
                                marginLeft: 25,
                                color: '#FF5757',
                                fontWeight: '600'
                            }}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
export default CustomDrawer
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgStyle: {
        height: hp('10%'),
        width: wp('20%'),
        alignSelf: 'center',
        borderRadius: 45
    },
    nameStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('2%'),
        marginBottom: hp('4%'),
        textAlign: 'center'
    },
    shareContainer: {
        flexDirection: 'row',
    },
    btnStyle: {
        marginTop: hp('5%'),
        padding: hp('3%')
    },
    userInfoContainer: {
        alignItems: 'center',
        marginTop: hp('1%'),
    },
    nameStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('2%'),
        textAlign: 'center',
        marginBottom: 0,
    },
    emailStyle: {
        color: 'black',
        fontSize: hp('1.8%'),
        textAlign: 'center',
        marginTop: 0,
    },


})
