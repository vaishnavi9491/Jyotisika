import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TimeDropdown = ({ label, placeholder, value, setValue, data }) => {
    const [isCustomTime, setIsCustomTime] = useState(false);
    const [customTime, setCustomTime] = useState('');

    const handleSelect = (item) => {
        if (item.value === 'custom') {
            setIsCustomTime(true); // Show the input field for custom time
        } else {
            setIsCustomTime(false); // Hide the input field
            setValue(item.value); // Set the selected value
        }
    };

    return (
        <View>
            <Text style={styles.inputText}>{label}</Text>
            <Dropdown
                style={[styles.dropdown, styles.input]}
                data={data}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                value={value}
                onChange={(item) => handleSelect(item)}
                renderItem={(item) => (
                    <Text style={styles.dropdownItemText}>{item.label}</Text>
                )}
            />
            
            {isCustomTime && (
                <View style={styles.customTimeInputContainer}>
                    <TextInput
                        style={styles.customTimeInput}
                        placeholder="Enter time in hours"
                        keyboardType="numeric"
                        value={customTime}
                        onChangeText={(text) => setCustomTime(text)}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        color: '#000',
        fontWeight: '500',
        marginBottom: hp('1%'),
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
    dropdownItemText: {
        fontSize: hp('1.8%'),
        color: '#000',
        paddingVertical: hp('1.3%'),
        paddingHorizontal: hp('1.3%'),
    },
    customTimeInputContainer: {
        marginTop: hp('1%'),
    },
    customTimeInput: {
        height: hp('6%'),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingLeft: 10,
        color: '#000',
    },
});

export default TimeDropdown;
