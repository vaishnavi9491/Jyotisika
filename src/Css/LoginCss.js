import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        width: wp('70%'),
        height: hp('32%'),
        alignSelf: 'center',
    },
    card: {
        margin: hp('3%'),
        padding: hp('3%'),
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        elevation: 3,
        borderColor: '#ccc',
        marginTop: 0,

    },
    label: {
        fontSize: hp('2%'),
        marginBottom: hp('2%'),
        fontWeight: 'bold',
        color: '#000'
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: hp('2.5%'),
        color: '#000'
    },
    picker: {
        height: 50,
        width: '100%',
        color: '#000'
    },
    button: {
        backgroundColor: '#E89C00',
        padding: hp('2%'),
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: hp('2%'),
        fontWeight: 'bold',
    },
    progressDot: {
        position: 'absolute',
        left: 0,
        top: -4,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#007AFF',
    },
    progressContainer: {
        position: 'relative',
        marginTop: hp('10%'),
        marginBottom: hp('1%'),
        alignItems: 'center',
    },

    progress: {
        position: 'absolute',
        top: -hp('4%'),
        fontSize: hp('2%'),
        color: '#000',
        fontWeight: 'bold',
    },

    progressBar: {
        height: 2,
        backgroundColor: '#ccc',
        width: wp('90%'),
        marginHorizontal: wp('5%'),
        position: 'relative',
    },
});
export default styles;

