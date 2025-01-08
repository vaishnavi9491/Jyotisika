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
// const OtpScreen = ({ navigation }) => {
//     const [otp, setOtp] = useState(['', '', '', '']);
//     const [timer, setTimer] = useState(30);
//     const [isTimerActive, setIsTimerActive] = useState(true);
//     const timerRef = useRef(null);
//     const inputRefs = useRef([]);

//     const handleOtpChange = (text, index) => {
//         const newOtp = [...otp];
//         newOtp[index] = text;
//         setOtp(newOtp);


//         if (text && index < 3) {
//             inputs[index + 1].focus();
//         }
//     };


//     const inputs = [];

//     const startTimer = () => {
//         clearInterval(timerRef.current);
//         setTimer(30); // Reset the timer to 30 seconds
//         setIsTimerActive(true);

//         timerRef.current = setInterval(() => {
//             setTimer((prevTimer) => {
//                 if (prevTimer > 0) {
//                     return prevTimer - 1;
//                 } else {
//                     clearInterval(timerRef.current);
//                     setIsTimerActive(false);
//                     return 0;
//                 }
//             });
//         }, 1000);
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
//                 style={styles.logo} />

//             <ScrollView contentContainerStyle={styles.contentContainer}>
//                 <View style={styles.boxContainer}>
//                     <Text style={styles.description}>
//                         We have sent the code to +91 ***** ***14
//                     </Text>

//                     <View style={styles.otpContainer}>
//                         {otp.map((digit, index) => (
//                             <TextInput
//                                 key={index}
//                                 ref={(ref) => (inputs[index] = ref)}
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
//                     //onPress={() => Alert.alert('OTP Submitted', `Your OTP: ${otp.join('')}`)}
//                     onPress={() => navigation.navigate('SignUp')}
//                     >
//                         <Text style={styles.continueText} >Continue</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>

//             {/* Footer */}
//             <Footer />
//         </View>
//     );
// };

// export default OtpScreen;


import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Image,
    ScrollView,
} from 'react-native';
import Footer from '../../Component/Footer';
import styles from '../../Css/GetOTPCss';

const OtpScreen = ({ navigation, route }) => {
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
        <View style={styles.container}>
            <Image
                source={require('../../assets/image/j.jpeg')}
                style={styles.logo}
            />

            <ScrollView contentContainerStyle={styles.contentContainer}>
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
            </ScrollView>

            <Footer />
        </View>
    );
};

export default OtpScreen;
