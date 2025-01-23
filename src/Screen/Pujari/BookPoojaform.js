
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ToastAndroid,
    Image,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialIcons";
import DateTimePicker from "@react-native-community/datetimepicker";

const BookPoojsform = ({ navigation, extra }) => {
    const [Address, setAddress] = useState("");
    const [PreferredDate, setPreferredDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [amPm, setAmPm] = useState("AM");
    const [amount, setAmount] = useState(500);


    // Error states
    const [errors, setErrors] = useState({
        Address: "",
        PreferredDate: "",
        hour: "",
        minute: "",
        time: "",
    });

    const [isTimeChanged, setIsTimeChanged] = useState(false); // Track if the time has been changed

    // Booked dates and times (can be fetched from the server)
    const bookedDates = ["2024-12-25"];
    const bookedTimes = ["10:00 AM", "02:30 PM"];

    const gst = (amount * 0.18).toFixed(2);
    const payableAmount = (parseFloat(amount) + parseFloat(gst)).toFixed(2);

    // Check if the selected time is booked
    const isTimeBooked = (selectedHour, selectedMinute, selectedAmPm) => {
        const formattedTime = `${selectedHour}:${selectedMinute} ${selectedAmPm}`;
        return bookedTimes.includes(formattedTime);
    };

    const isDateBooked = (selectedDate) => {
        const formattedDate = selectedDate.toISOString().split("T")[0]; // Format date to YYYY-MM-DD
        return bookedDates.includes(formattedDate);
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || PreferredDate;
        setShowDatePicker(false);

        if (currentDate instanceof Date && !isNaN(currentDate)) {
            setPreferredDate(currentDate);
            if (isDateBooked(currentDate)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    PreferredDate: "Oops! The date is already booked.",
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    PreferredDate: "",
                }));
            }
        }
    };

    const handleTimeChange = (selectedHour, selectedMinute, selectedAmPm) => {
        setHour(selectedHour);
        setMinute(selectedMinute);
        setAmPm(selectedAmPm);

        // If the user changes the time, reset the error for the time field
        if (isTimeBooked(selectedHour, selectedMinute, selectedAmPm)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                time: "Oops! This time is already booked.",
            }));
            setIsTimeChanged(false); // The time is still booked, don't allow submit
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                time: "", // Clear the time error when the time is changed
            }));
            setIsTimeChanged(true); // The time is changed and is available
        }
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {
            Address: "",
            PreferredDate: "",
            hour: "",
            minute: "",
            time: "",
        };

        if (!Address.trim()) {
            newErrors.Address = "Address is required.";
            valid = false;
        }
        if (!PreferredDate || PreferredDate > new Date()) {
            newErrors.PreferredDate = "Valid preferred date is required.";
            valid = false;
        }
        if (isDateBooked(PreferredDate)) {
            newErrors.PreferredDate = "This date is already booked.";
            valid = false;
        }

        if (!hour.trim() || isNaN(hour) || hour < 1 || hour > 12) {
            newErrors.hour = "Valid hour (1-12) is required.";
            valid = false;
        }

        if (!minute.trim() || isNaN(minute) || minute < 0 || minute > 59) {
            newErrors.minute = "Valid minute (0-59) is required.";
            valid = false;
        }

        // If the time has been changed and is available, we validate that the new time is not booked
        if (isTimeBooked(hour, minute, amPm)) {
            newErrors.time = "Oops! This time is already booked.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleContinue = () => {
        if (validateForm()) {
            ToastAndroid.showWithGravity(
                "Form submitted successfully!",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            );
            // Navigate to the payment screen after validation is successful
            navigation.navigate("PaymentInformation", {
                amount: amount,
                extra: extra,
                showCoupons: false,
            });
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.profilePic} source={require("../../assets/image/jane.png")} />
                <Text style={styles.Jtext}>Jyotisika</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
                    <Text style={styles.balance}>₹ 50</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settings}>
                    <Fontisto name="language" size={20} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <AntDesign name="customerservice" size={22} color="#000" />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.headerKundli}>Ghar Shanti Pooja</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.label}>Precise address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Address"
                    value={Address}
                    onChangeText={(text) => {
                        setAddress(text);
                        setErrors((prev) => ({ ...prev, Address: "" }));
                    }}
                />
                {errors.Address ? <Text style={styles.errorText}>{errors.Address}</Text> : null}

                <Text style={styles.label}>Preferred Date</Text>
                <TouchableOpacity style={styles.Birthdateinput} onPress={() => setShowDatePicker(true)}>
                    <Text style={[styles.birthDateText, { color: "#000" }]}>
                        {PreferredDate.toDateString()}
                    </Text>
                    <Icon name="calendar-today" size={20} color="#000" />
                </TouchableOpacity>
                {errors.PreferredDate ? <Text style={styles.errorText}>{errors.PreferredDate}</Text> : null}
                {showDatePicker && (
                    <DateTimePicker
                        value={PreferredDate}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}

                <Text style={styles.label}>Preferred Time</Text>
                <View style={styles.timeContainer}>
                    <TextInput
                        style={styles.timeInput}
                        placeholder="Hour"
                        value={hour}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={(text) => {
                            setHour(text);
                            setErrors((prev) => ({ ...prev, hour: "" }));
                        }}
                    />
                    <Text style={styles.colon}>:</Text>
                    <TextInput
                        style={styles.timeInput}
                        placeholder="Minute"
                        value={minute}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={(text) => {
                            setMinute(text);
                            setErrors((prev) => ({ ...prev, minute: "" }));
                        }}
                    />
                    <View style={styles.amPmContainer}>
                        <TouchableOpacity
                            style={[styles.amPmButton, amPm === "AM" && styles.selectedAmPm]}
                            onPress={() => handleTimeChange(hour, minute, "AM")}
                        >
                            <Text style={styles.amPmText}>AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.amPmButton, amPm === "PM" && styles.selectedAmPm]}
                            onPress={() => handleTimeChange(hour, minute, "PM")}
                        >
                            <Text style={styles.amPmText}>PM</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {errors.time ? <Text style={styles.errorText}>{errors.time}</Text> : null}
                {errors.hour ? <Text style={styles.errorText}>{errors.hour}</Text> : null}
                {errors.minute ? <Text style={styles.errorText}>{errors.minute}</Text> : null}

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleContinue}
                    disabled={!!errors.time || !!errors.PreferredDate}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: hp("2%"),
    },
    profilePic: {
        width: wp("10%"),
        height: hp("5%"),
        borderRadius: wp(5),
    },
    balance: {
        fontSize: hp("2%"),
        fontWeight: "bold",
        color: "#000",
    },
    settings: {
        backgroundColor: "#FFD700",
        padding: wp("2%"),
        borderRadius: wp(2),
    },
    Jtext: {
        marginRight: hp("20%"),
        color: "#000",
        fontWeight: "bold",
    },
    headerKundli: {
        fontSize: hp("2.5%"),
        fontWeight: "bold",
        textAlign: "center",
        marginTop: hp("5%"),
        color: "#5A4E8D",
    },
    form: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginTop: hp("5%"),
        padding: hp("2%"),
        marginHorizontal: wp("5%"),
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    label: {
        fontSize: hp("2%"),
        fontWeight: "bold",
        marginBottom: hp("1%"),
        color: "#000",
    },
    input: {
        borderWidth: 1,
        color: "#000",
        borderColor: "#000",
        borderRadius: 5,
        marginBottom: hp("2%"),
        paddingVertical: hp("1%"),
        paddingHorizontal: hp("1.3%"),
    },
    Birthdateinput: {
        borderWidth: 1,
        color: "#000",
        borderColor: "#000",
        borderRadius: 5,
        padding: hp("1.5%"),
        marginBottom: hp("2%"),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
        color: "#000",
        marginBottom: hp("2%"),
    },
    timeInput: {
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 5,
        padding: hp("2%"),
        width: 60,
        textAlign: "center",
        color: "#000",
    },
    colon: {
        marginHorizontal: hp("1%"),
        fontSize: hp("2%"),
        color: "#000",
    },
    amPmContainer: {
        flexDirection: "row",
        marginLeft: hp("1%"),
    },
    amPmButton: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        padding: hp("1%"),
        marginLeft: hp("2%"),
    },
    selectedAmPm: {
        backgroundColor: "#FADADD",
        borderColor: "#FADADD",
    },
    amPmText: {
        fontSize: hp("2%"),
        color: "#000",
    },
    button: {
        backgroundColor: "#FFB300",
        padding: hp('2%'),
        borderRadius: 5,
        alignItems: "center",
        marginTop: hp('2%'),
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: hp('2%'),
    },
    errorText: {
        fontSize: 12,
        color: "red",
        marginBottom: hp("1%"),
    },
});

export default BookPoojsform;
