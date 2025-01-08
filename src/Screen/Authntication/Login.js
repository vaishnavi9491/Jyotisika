import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from '../../Component/Footer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Login = ({ navigation, route }) => {

  const [mobileNumberError, setMobileNumberError] = useState('');
  const [mobileNumber, setMobileNumber] = useState(route?.params?.mobileNumber || '')
  const [isChecked, setIsChecked] = useState(false);
  const [otpVerified, setOtpVerified] = useState(route?.params?.otpVerified || false);



  const validateFields = () => {
    let isValid = true;

    if (!mobileNumber) {
      setMobileNumberError('Mobile number cannot be empty');
      isValid = false;
    } else if (mobileNumber.length < 10) {
      setMobileNumberError('Please enter a valid mobile number');
      isValid = false;
    } else {
      setMobileNumberError('');
    }



    if (isValid) {
      if (!otpVerified) {
        Alert.alert('Error', 'Please verify your mobile number by getting OTP');
      } else {
        navigation.navigate('Name');
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../../assets/image/j.jpeg')} style={styles.logo} />

        <View style={styles.box}>
          <Text style={styles.sectionTitle}>Mobile Number</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter Mobile Number"
              style={styles.input}
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              maxLength={10}
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => navigation.navigate('GetOTP', { mobileNumber })}
            >
              {otpVerified ? (
                <Icon name="checkmark-circle" size={20} color="green" />
              ) : (
                <Text style={{ color: '#1591ea' }}>Get OTP</Text>
              )}
            </TouchableOpacity>
          </View>
          {mobileNumberError ? <Text style={styles.errorText}>{mobileNumberError}</Text> : null}

          <View style={styles.checkboxWrapper}>
            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
              <View style={[styles.checkbox, isChecked && styles.checked]}>
                {isChecked && <Icon name="checkmark" size={18} color="#fff" />}
              </View>
            </TouchableOpacity>
            <Text style={styles.tictext}>By ticking the box, you agree to our</Text>
          </View>
          <View style={styles.termsRow}>
            <TouchableOpacity>
              <Text style={styles.termsText}>terms and conditions</Text>
            </TouchableOpacity>
            <Text style={styles.tictext}>and</Text>
            <TouchableOpacity>
              <Text style={styles.termsText}>privacy policy</Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity style={styles.button} onPress={validateFields}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={styles.Login}>
            <Text style={styles.accounttext}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('UserLogin')}>
              <Text style={styles.LoginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    height: hp('15%'),
    width: wp('30%'),
    alignSelf: 'center',
  },
  box: {
    width: wp('90%'),
    padding: hp('3%'),
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 5,
    marginTop: hp('10%')
  },
  sectionTitle: {
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    color: '#333',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: hp('1%'),
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: hp('1.5%'),
    backgroundColor: '#fff',
    color: '#000',
    fontSize: hp('2%'),
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: hp('1.8%'),
    color: '#007AFF',
  },
  button: {
    backgroundColor: '#E5A000',
    padding: hp('1.5%'),
    borderRadius: 10,
    alignItems: 'center',
    marginTop: hp('1%'),
  },
  buttonText: {
    color: '#fff',
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#1591ea',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: hp('2%'),
  },
  checked: {
    backgroundColor: '#ccc',
  },
  tictext: {
    color: '#555',
    fontSize: hp('2%'),
  },
  termsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  termsText: {
    color: '#1591ea',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  accounttext: {
    color: '#000',
    textAlign: 'center',
    marginTop: hp('2%'),
  },
  errorText: {
    color: 'red',
    fontSize: hp('1.8%'),
  },
  LoginText: {
    color: '#1591ea',
    marginTop: hp('2%'),
    fontWeight: 'bold'
  },
  Login: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  footer: {
    width: '100%',
    marginTop: hp('2%'),
  },
});


