
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, useColorScheme, Modal, } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TimeDropdown from '../../../Component/PujariHome/TimeDropdown';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const Tab = createMaterialTopTabNavigator();

// **Personal Tab**
const PersonalScreen = () => {

    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ];
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.inputText}>Name</Text>
            <TextInput
                placeholder="Name"
                style={styles.input}
                placeholderTextColor='#888'
            />
            <Text style={styles.inputText}>Contact</Text>
            <TextInput
                placeholder="Phone"
                keyboardType="phone-pad"
                style={styles.input}
                placeholderTextColor='#888'
            />
            <Text style={styles.inputText}>Email</Text>
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={styles.input}
                placeholderTextColor='#888'
            />
            <Text style={styles.inputText}>Gender</Text>
            <Dropdown
                style={[styles.dropdown, styles.input]}
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

            <Text style={styles.inputText}>Date of Birth</Text>
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
                    <Icon name="calendar" size={24} color="#000" />
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

            <Text style={styles.inputText}>Place Of Birth</Text>
            <TextInput
                placeholder="Place of Birth"
                style={styles.input}
                placeholderTextColor='#888'
            />
            <Text style={styles.inputText}>Current Address</Text>
            <TextInput
                placeholder="Current Address"
                style={styles.input}
                placeholderTextColor='#888'
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

// **Professional Tab**
const ProfessionalScreen = () => {
    const [pooja1Time, setPooja1Time] = useState('');
    const [pooja2Time, setPooja2Time] = useState('');
    const [pooja3Time, setPooja3Time] = useState('');
    const [pooja4Time, setPooja4Time] = useState('');

    const timeOptions = [
        { label: '1 Hour', value: '1' },
        { label: '2 Hours', value: '2' },
        { label: '3 Hours', value: '3' },
        { label: '4 Hours', value: '4' },
        { label: '5 Hours', value: '5' },
        { label: 'Custom', value: 'custom' },  // Added "Custom" option
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.inputText}>Poojas</Text>
            <TextInput
                placeholderTextColor='#888'
                placeholder="Ghar Shanti (3 Hrs)"
                style={styles.input}
            />
            <TimeDropdown
                label="Duration for Ghar Shanti"
                placeholder="Select Time"
                value={pooja1Time}
                setValue={setPooja1Time}
                data={timeOptions}
            />
            <TimeDropdown
                label="Duration for Rahu-Ketu"
                placeholder="Select Time"
                value={pooja2Time}
                setValue={setPooja2Time}
                data={timeOptions}
            />
            <TimeDropdown
                label="Duration for Sukhi Vivah"
                placeholder="Select Time"
                value={pooja3Time}
                setValue={setPooja3Time}
                data={timeOptions}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


// **Advanced Tab**
const AdvancedScreen = () => {
    const theme = useColorScheme();
    // Pooja Dropdown
    const [selected, setSelectedPooja] = React.useState("");

    // Day selection
    const [startDay, setStartDay] = useState(null);
    const [endDay, setEndDay] = useState(null);

    // Time selection
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [modalVisible, setModalVisible] = useState(false);

    const poojaOptions = [
        { key: '1', value: 'Shanti Pooja' },
        { key: '2', value: 'Love Mantra' },
        { key: '3', value: 'Nav-chandi Pooja' },
        { key: '4', value: 'Ghar Shanti' },
    ];

    const dayOptions = [
        { label: 'Monday', value: 'monday' },
        { label: 'Tuesday', value: 'tuesday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Thursday', value: 'thursday' },
        { label: 'Friday', value: 'friday' },
        { label: 'Saturday', value: 'saturday' },
        { label: 'Sunday', value: 'sunday' },
    ];

    const onChangeStartTime = (event, selectedDate) => {
        setShowStartPicker(false);
        if (selectedDate) setStartTime(selectedDate);
    };

    const onChangeEndTime = (event, selectedDate) => {
        setShowEndPicker(false);
        if (selectedDate) setEndTime(selectedDate);
    };
    const placeholderColor = theme === 'dark' ? '#888' : '#888';
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.inputText}>Add Pooja</Text>
            <MultipleSelectList
                setSelected={(val) => {
                    setSelectedPooja(val);
                }}
                data={poojaOptions}
                save="value"
                placeholder="Choose Poojas"
                search={true}
                label="Pooja Selection"
                multiple={true}
                placeholderStyle={{ color: placeholderColor }}
                dropdownTextStyles={styles.MultippledropdownItemText}
                labelStyle={styles.labelStyle}
            />
            <TouchableOpacity
                style={styles.submitContainer}
                onPress={() => setModalVisible(true)} // Open Modal
            >
                <Text style={styles.submitText}>Submit</Text>
                <Ionicons name="arrow-forward" size={hp(3.3)} color="#007AFF" style={styles.backIcon} />
            </TouchableOpacity>

            <Text style={styles.inputText}>Availability Days</Text>
            <View style={styles.dayContainer}>
                <Dropdown
                    style={styles.dayDropdown}
                    data={dayOptions}
                    labelField="label"
                    valueField="value"
                    placeholder="From"
                    value={startDay}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    itemTextStyle={styles.itemTextStyle}
                    onChange={(item) => setStartDay(item.value)}
                    renderItem={(item) => (
                        <Text style={styles.dropdownItemText}>{item.label}</Text>
                    )}
                />
                <Dropdown
                    style={styles.dayDropdown}
                    data={dayOptions}
                    labelField="label"
                    valueField="value"
                    placeholder="To"
                    value={endDay}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    itemTextStyle={styles.itemTextStyle}
                    onChange={(item) => setEndDay(item.value)}
                    renderItem={(item) => (
                        <Text style={styles.dropdownItemText}>{item.label}</Text>
                    )}
                />
            </View>

            <Text style={styles.inputText}>Availability Time</Text>
            <View style={styles.timeContainer}>
                <Text style={styles.timeLabel}>From</Text>
                <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.timeBox}>
                    <Text style={styles.timeValue}>
                        {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.timeLabel}>To</Text>
                <TouchableOpacity onPress={() => setShowEndPicker(true)} style={[styles.timeBox, styles.timeBoxEnd]}>
                    <Text style={styles.timeValue}>
                        {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                    </Text>
                </TouchableOpacity>
            </View>

            {showStartPicker && (
                <DateTimePicker
                    value={startTime}
                    mode="time"
                    display="spinner"
                    onChange={onChangeStartTime}
                    is24Hour={false}
                />
            )}

            {showEndPicker && (
                <DateTimePicker
                    value={endTime}
                    mode="time"
                    display="spinner"
                    onChange={onChangeEndTime}
                    is24Hour={false}
                />
            )}

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                    <Image source={require('../../../assets/image/alertImg.png')} style={styles.alertImage} />
                        <Text style={styles.modalText}>
                            Note: These skills will be visible after a short interview!{'\n'}ALL THE BEST
                        </Text>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => setModalVisible(false)} // Close modal
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};


// **Profile Screen with Tabs**
const PujariProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.heading}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={hp(3.5)} color="#000" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headText}>Profile</Text>
            </View>

            <View style={styles.profileContainer}>
                <Image source={require('../../../assets/image/john.png')} style={styles.profileImage} />
                <Icon name="camera" size={hp(3.5)} color="#FFB43B" style={styles.cameraIcon} />
            </View>

            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: { backgroundColor: '#FEF7FF', elevation: 5, marginHorizontal: hp(1.2) },
                    tabBarLabelStyle: { fontSize: hp(1.7), fontWeight: 'bold', color: '#65558F' },
                    tabBarIndicatorStyle: { backgroundColor: '#65558F', borderWidth: 2, borderRadius: 5 },
                }}
            >
                <Tab.Screen name="Personal" component={PersonalScreen} />
                <Tab.Screen name="Professional" component={ProfessionalScreen} />
                <Tab.Screen name="Advanced" component={AdvancedScreen} />
            </Tab.Navigator>
        </View>
    );
};

export default PujariProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: wp(5)
    },
    heading: {
        backgroundColor: '#fff',
        padding: hp('1.3%'),
        elevation: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp('4%'),
    },
    headText: {
        color: '#000',
        fontWeight: '500',
        fontSize: hp('2.3%'),
        marginLeft: wp('4%'),
    },
    backIcon: {
        width: hp('4.5%'),
        height: hp('4%'),
    },
    inputText: {
        color: '#000',
        fontWeight: '500',
        marginVertical: hp('1%')
    },
    input: {
        height: hp(6),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: hp(2),
        color: '#000'
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
    MultippledropdownItemText: {
        fontSize: hp('1.8%'),
        color: '#000',
        paddingHorizontal: hp('1.3%'),
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
    button: {
        backgroundColor: '#FFB43B',
        padding: hp(1),
        borderRadius: 15,
        alignItems: 'center',
        marginTop: hp(2),
        borderWidth: 2,
        borderColor: '#AB8800',
        marginBottom: hp('4%')
    },
    buttonText: {
        color: '#000',
        fontSize: hp(2.2),
        fontWeight: 'bold'
    },
    dropdown: {
        marginBottom: hp(2)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp(2)
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: hp(2)
    },
    profileImage: {
        width: hp('17.1%'),
        height: hp('17%'),
        borderRadius: hp(7),
        marginTop: hp('2%')
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: wp(36)
    },
    submitContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 5
    },
    submitText: {
        color: '#007AFF',
        fontWeight: '500',
    },
    dayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dayDropdown: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        margin: 5,
    },
    timeContainer: {
        // marginTop:hp('1%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timeBox: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: hp('1%'),
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: hp('1.3%')
    },
    timeBoxEnd: {
        backgroundColor: '#eee',
    },
    timeLabel: {
        fontSize: hp('1.6%'),
        fontWeight: 'bold',
        color: '#000',
        marginTop: hp('3%')
    },
    timeValue: {
        fontSize: hp('2.1%'),
        color: '#007BFF',
        fontWeight: '500',
    },
    labelStyle: {
        color: 'black',  // Set the label color to black
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        padding: hp('1%'),
        borderRadius: 10,
        alignItems: 'center',
    },
    alertImage:{
        height:hp('15%'),
        width:hp('15%')
    },
    modalText: {
        fontSize:  hp('2.1%'),
        textAlign: 'center',
        marginBottom: hp('2.5%'),
        color:'#000'
    },
    modalButton: {
        backgroundColor: '#4F378A',
        paddingVertical: hp('1%'),
        paddingHorizontal:  hp('5%'),
        borderRadius: 5,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: hp('2.1%'),
        fontWeight: 'bold',
    },
});