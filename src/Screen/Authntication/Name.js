import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    ScrollView,
    TextInput,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Footer from '../../Component/Footer';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Name = ({ navigation }) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [role, setRole] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const [errors, setErrors] = useState({});;


    const genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ];

    const roleOptions = [
        { label: 'Astrologer', value: 'Astrologer' },
        { label: 'Pujari', value: 'Pujari' },
        { label: 'User', value: 'User' },
    ];


    const validateInputs = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = 'Name is required';
        if (!gender) newErrors.gender = 'Gender is required';
        if (!role) newErrors.role = 'Role is required';
        if (!dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleContinue = () => {
        if (validateInputs()) {
            navigation.navigate('SignUp', {
                name,
                gender,
                role,
                dateOfBirth: dateOfBirth.toISOString(), // Convert to a serializable string
            });
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/image/j.jpeg')}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.content}>
                    <View style={styles.card}>
                        <View style={styles.textinput}>
                            <Text style={styles.titleText}>Name</Text>
                            <TextInput
                                placeholder="Enter your name"
                                style={styles.input}
                                placeholderTextColor="#aaa"
                                value={name}
                                onChangeText={setName}
                            />
                            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

                        </View>
                        <View style={styles.textinput}>
                            <Text style={styles.titleText}>Select Gender</Text>
                            <Dropdown
                                style={styles.dropdown}
                                data={genderOptions}
                                labelField="label"
                                valueField="value"
                                placeholder="Select Gender"
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                itemTextStyle={styles.itemTextStyle}
                                value={gender}
                                onChange={(item) => setGender(item.value)}
                                renderItem={(item) => (
                                    <Text style={styles.dropdownItemText}>
                                        {item.label}
                                    </Text>
                                )}
                            />
                            {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
                        </View>

                        <View style={styles.textinput}>
                            <Text style={styles.titleText}>Select Your Role</Text>
                            <Dropdown
                                style={styles.dropdown}
                                data={roleOptions}
                                labelField="label"
                                valueField="value"
                                placeholder="Select Role"
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                itemTextStyle={styles.itemTextStyle}
                                value={role}
                                onChange={(item) => setRole(item.value)}
                                renderItem={(item) => (
                                    <Text style={styles.dropdownItemText}>
                                        {item.label}
                                    </Text>
                                )}
                            />
                            {errors.role && <Text style={styles.errorText}>{errors.role}</Text>}
                        </View>
                        <View style={styles.textinput}>
                            <Text style={styles.titleText}>Select Date of Birth</Text>
                            <View style={styles.dateInputContainer}>
                                <TouchableOpacity
                                    style={styles.dateInput}
                                    onPress={() => setIsDatePickerOpen(true)}
                                >
                                    <Text style={styles.dateText}>
                                        {dateOfBirth.toDateString()}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setIsDatePickerOpen(true)}
                                    style={styles.iconContainer}
                                >
                                    <FontAwesome name="calendar" size={24} color="#000" />
                                </TouchableOpacity>
                            </View>
                            <DatePicker
                                modal
                                open={isDatePickerOpen}
                                date={dateOfBirth}
                                mode="date"
                                onConfirm={(date) => {
                                    setIsDatePickerOpen(false);
                                    setDateOfBirth(date);
                                }}
                                onCancel={() => setIsDatePickerOpen(false)}
                            />
                            {errors.dateOfBirth && <Text style={styles.errorText}>{errors.dateOfBirth}</Text>}

                            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                                <Text style={styles.continueText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <Footer style={styles.footer} />
            </ScrollView>
        </View>
    );
};

export default Name;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        height: hp('15%'),
        width: wp('30%'),
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    card: {
        width: wp('90%'),
        padding: hp('3%'),
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        elevation: 3,
        borderColor: '#ccc',
    },
    titleText: {
        color: '#000',
        fontSize: hp('2%'),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
    },
    input: {
        width: '100%',
        height: hp('6%'),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: hp('1.5%'),
        backgroundColor: '#fff',
        color: '#000',
        fontSize: hp('2%'),
    },
    textinput: {
        marginTop: hp('2%')
    },
    dropdown: {
        width: '100%',
        height: hp('6%'),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: hp('1.5%'),
        backgroundColor: '#fff',
        marginBottom: hp('0.2%'),
    },
    placeholderStyle: {
        color: '#aaa',
        fontSize: hp('2%'),
    },
    selectedTextStyle: {
        color: '#000',
        fontSize: hp('2%'),
    },
    itemTextStyle: {
        fontSize: hp('2%'),
        color: '#000'
    },
    dropdownItemText: {
        fontSize: hp('1.8%'),
        color: '#000',
        paddingVertical: hp('1.3%'),
        paddingHorizontal: hp('1.3%'),
    },
    dateInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: hp('6%'),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: wp('3%'),
        backgroundColor: '#fff',
        marginBottom: hp('2%'),
    },
    dateInput: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: hp('0.5%'),
    },
    dateText: {
        color: '#000',
        fontSize: hp('2%'),
    },
    iconContainer: {
        paddingHorizontal: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: '#E5A000',
        padding: hp('1.5%'),
        borderRadius: 10,
        alignItems: 'center',
        marginTop: hp('1%'),
    },
    continueText: {
        color: '#fff',
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        fontSize: hp('1.8%'),
        // marginTop: hp('0.2%'), // Reduced margin for compact spacing
        //marginBottom: hp('0.2%'), // Reduced margin below the error text
    },
    footer: {
        width: '100%',
       // marginTop: hp('5%'),
    },
});


