import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        //flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: hp('15%'),
        width: wp('30%'),
        alignSelf: 'center',
    },
    boxContainer: {
        width: '90%',
        padding: hp('3%'),
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    description: {
        fontSize: hp('2.5%'),
        color: '#000',
        marginBottom: hp('2%'),
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: hp('2.5%'),
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: hp('2.5%'),
        color: '#000',
        backgroundColor: '#fff',
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('2.5%'),
    },
    resendButton: {
        marginRight: hp('20%'),
    },
    resendText: {
        fontSize: hp('2%'),
        color: '#000',
    },
    timerText: {
        fontSize: hp('2%'),
        color: '#000',
    },
    continueButton: {
        backgroundColor: '#E5A000',
        padding: hp('2%'),
        borderRadius: 8,
        alignItems: 'center',
        width: '80%',
    },
    continueText: {
        color: '#fff',
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
    },
});

export default styles;
