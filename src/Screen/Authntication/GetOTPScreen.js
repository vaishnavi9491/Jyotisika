


// import React, { useState, useRef, useEffect } from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     Alert,
//     Image,
//     ScrollView,
// } from 'react-native';
// import Footer from '../../Component/Footer';
// import styles from '../../Css/GetOTPCss';

// const GetOTPScreen = ({ navigation, route }) => {
//     const [otp, setOtp] = useState(['', '', '', '']);
//     const [timer, setTimer] = useState(30);
//     const [isTimerActive, setIsTimerActive] = useState(true);
//     const inputRefs = useRef([]);
//     const { mobileNumber } = route.params;

//     const handleOtpChange = (text, index) => {
//         const newOtp = [...otp];
//         newOtp[index] = text;
//         setOtp(newOtp);


//         if (text && index < 3) {
//             inputRefs.current[index + 1]?.focus();
//         }


//         if (!text && index > 0) {
//             inputRefs.current[index - 1]?.focus();
//         }
//     };


//     const handleOtpSubmit = () => {
//         const enteredOtp = otp.join('');
//         if (enteredOtp === '1234') {
//             Alert.alert('Success', 'OTP Verified');
//             navigation.navigate('Login', { mobileNumber, otpVerified: true });
//         } else {
//             Alert.alert('Error', 'Invalid OTP');
//         }
//     };


//     const startTimer = () => {
//         setTimer(30);
//         setIsTimerActive(true);
//     };


//     useEffect(() => {
//         let interval;
//         if (isTimerActive && timer > 0) {
//             interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
//         } else if (timer === 0) {
//             setIsTimerActive(false);
//         }
//         return () => clearInterval(interval);
//     }, [timer, isTimerActive]);

//     return (
//         <View style={styles.container}>
//             <Image
//                 source={require('../../assets/image/j.jpeg')}
//                 style={styles.logo}
//             />

//             <ScrollView contentContainerStyle={styles.contentContainer}>
//                 <View style={styles.boxContainer}>
//                     <Text style={styles.description}>
//                         We have sent the code to +91 ***** ***14
//                     </Text>

//                     <View style={styles.otpContainer}>
//                         {otp.map((digit, index) => (
//                             <TextInput
//                                 key={index}
//                                 ref={(ref) => (inputRefs.current[index] = ref)}
//                                 value={digit}
//                                 onChangeText={(text) => handleOtpChange(text, index)}
//                                 keyboardType="numeric"
//                                 maxLength={1}
//                                 style={styles.otpInput}
//                             />
//                         ))}
//                     </View>

//                     <View style={styles.resendContainer}>
//                         <TouchableOpacity
//                             onPress={startTimer}
//                             disabled={isTimerActive}
//                             style={styles.resendButton}
//                         >
//                             <Text
//                                 style={[
//                                     styles.resendText,
//                                     isTimerActive && { color: '#aaa' },
//                                 ]}
//                             >
//                                 Resend OTP
//                             </Text>
//                         </TouchableOpacity>
//                         {isTimerActive && (
//                             <Text style={styles.timerText}>
//                                 00:{timer < 10 ? `0${timer}` : timer}
//                             </Text>
//                         )}
//                     </View>

//                     <TouchableOpacity
//                         style={styles.continueButton}
//                         onPress={handleOtpSubmit}
//                     >
//                         <Text style={styles.continueText}>Continue</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>

//             <Footer />
//         </View>
//     );
// };

// export default GetOTPScreen;

import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Image,
    SafeAreaView,
} from 'react-native';
import Footer from '../../Component/Footer';

const GetOTPScreen = ({ navigation, route }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(30);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const inputRefs = useRef([]);
    const { mobileNumber } = route.params;

    const handleOtpChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }

        if (!text && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleOtpSubmit = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp === '1234') {
            Alert.alert('Success', 'OTP Verified');
            navigation.navigate('Login', { mobileNumber, otpVerified: true });
        } else {
            Alert.alert('Error', 'Invalid OTP');
        }
    };

    const startTimer = () => {
        setTimer(30);
        setIsTimerActive(true);
    };

    useEffect(() => {
        let interval;
        if (isTimerActive && timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        } else if (timer === 0) {
            setIsTimerActive(false);
        }
        return () => clearInterval(interval);
    }, [timer, isTimerActive]);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../../assets/image/j.jpeg')}
                style={styles.logo}
            />

            <View style={styles.boxContainer}>
                <Text style={styles.description}>
                    We have sent the code to +91 ***** ***14
                </Text>

                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            value={digit}
                            onChangeText={(text) => handleOtpChange(text, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            style={styles.otpInput}
                        />
                    ))}
                </View>

                <View style={styles.resendContainer}>
                    <TouchableOpacity
                        onPress={startTimer}
                        disabled={isTimerActive}
                        style={styles.resendButton}
                    >
                        <Text
                            style={[
                                styles.resendText,
                                isTimerActive && { color: '#aaa' },
                            ]}
                        >
                            Resend OTP
                        </Text>
                    </TouchableOpacity>
                    {isTimerActive && (
                        <Text style={styles.timerText}>
                            00:{timer < 10 ? `0${timer}` : timer}
                        </Text>
                    )}
                </View>

                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={handleOtpSubmit}
                >
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>

            <Footer />
        </SafeAreaView>
    );
};

export default GetOTPScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',     // Center content horizontally
    },
    logo: {
        height: 100,
        width: 150,
        marginBottom: 20,          // Space between logo and box
    },
    boxContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    description: {
        fontSize: 18,
        color: '#000',
        marginBottom: 15,
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        backgroundColor: '#fff',
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    resendButton: {
        marginRight: 40,
    },
    resendText: {
        fontSize: 16,
        color: '#000',
    },
    timerText: {
        fontSize: 16,
        color: '#000',
    },
    continueButton: {
        backgroundColor: '#E5A000',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        width: '80%',
    },
    continueText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
