import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ToastAndroid,
  Image
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Picker } from "@react-native-picker/picker";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialIcons";


const KundliMatchingScreen = ({ navigation }) => {
  const [tab, setTab] = useState("Boy");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [amPm, setAmPm] = useState("AM");
  const [birthPlace, setBirthPlace] = useState("");

  // Error states
  const [errors, setErrors] = useState({
    name: "",
    birthDate: "",
    hour: "",
    minute: "",
    birthPlace: "",
  });

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthDate(selectedDate);
      setErrors((prev) => ({ ...prev, birthDate: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      name: "",
      birthDate: "",
      hour: "",
      minute: "",
      birthPlace: "",
    };

    if (!name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!birthDate || birthDate > new Date()) {
      newErrors.birthDate = "Valid birth date is required.";
      valid = false;
    }
    if (!hour.trim() || isNaN(hour) || hour < 1 || hour > 12) {
      newErrors.hour = "Valid birth hour is required (1-12).";
      valid = false;
    }
    if (!minute.trim() || isNaN(minute) || minute < 0 || minute > 59) {
      newErrors.minute = "Valid birth minute is required (0-59).";
      valid = false;
    }
    if (!birthPlace.trim()) {
      newErrors.birthPlace = "Birth place is required.";
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

    }
  };


  const openMap = () => {
    const query = birthPlace.trim() || "current location";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    Linking.openURL(url).catch(() =>
      alert("Unable to open maps. Please check your device settings.")
    );
  };


  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profilePic} source={require('../assets/image/jane.png')} />
        <Text style={styles.Jtext}>Jyotisika</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
          <Text style={styles.balance}>₹ 50</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settings}>
          <Fontisto name="language" size={20} />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="customerservice" size={22} color='#000' />
        </TouchableOpacity>

      </View>

      <View>
        <Text style={styles.headerKundli}>KundaliMatching</Text>
      </View>


      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, tab === "Boy" && styles.activeTab]}
          onPress={() => setTab("Boy")}
        >
          <Text style={[styles.tabText, tab === "Boy" && styles.activeTabText]}>Boy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === "Girl" && styles.activeTab]}
          onPress={() => setTab("Girl")}
        >
          <Text style={[styles.tabText, tab === "Girl" && styles.activeTabText]}>Girl</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setErrors((prev) => ({ ...prev, name: "" }));
          }}
        />
        {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
        <Text style={styles.label}>Birth Date</Text>
        <TouchableOpacity style={styles.Birthdateinput} onPress={() => setShowDatePicker(true)}>
          <Text style={[styles.birthDateText, { color: "#000" }]}>
            {birthDate.toDateString()}
          </Text>
          <Icon name="calendar-today" size={20} color='#000' />
        </TouchableOpacity>
        {errors.birthDate ? <Text style={styles.errorText}>{errors.birthDate}</Text> : null}
        {showDatePicker && (
          <DateTimePicker
            value={birthDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Birth Time</Text>
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
              onPress={() => setAmPm("AM")}
            >
              <Text style={styles.amPmText}>AM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.amPmButton, amPm === "PM" && styles.selectedAmPm]}
              onPress={() => setAmPm("PM")}
            >
              <Text style={styles.amPmText}>PM</Text>
            </TouchableOpacity>
          </View>
        </View>

        {errors.hour ? <Text style={styles.errorText}>{errors.hour}</Text> : null}
        {errors.minute ? <Text style={styles.errorText}>{errors.minute}</Text> : null}

        <Text style={styles.label}>Birth Place</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter birth place"
            value={birthPlace}
            onChangeText={(text) => {
              setBirthPlace(text);
              setErrors((prev) => ({ ...prev, birthPlace: "" }));
            }}
          />
          <TouchableOpacity onPress={openMap}>
            <Icon name="location-on" size={24} color="#5A4E8D" />
          </TouchableOpacity>
        </View>
        {errors.birthPlace ? <Text style={styles.errorText}>{errors.birthPlace}</Text> : null}


        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp('2%'),

  },
  profilePic: {
    width: wp('10%'),
    height: hp('5%'),
    borderRadius: wp(5),
  },
  balance: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#000'
  },
  settings: {
    backgroundColor: '#FFD700',
    padding: wp('2%'),
    borderRadius: wp(2),

  },
  Jtext: {
    marginRight: hp('20%'),
    color: '#000',
    fontWeight: 'bold',
  },
  headerKundli: {
    fontSize: hp('2.5%'),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: hp('2%'),
    color: "#5A4E8D",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp('3%'),
    marginBottom: hp('2%'),
  },
  tab: {
    padding: hp('2%'),
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#5A4E8D",
  },
  tabText: {
    fontSize: hp('2%'),
    color: "#7E7E7E",
  },
  activeTabText: {
    color: "#5A4E8D",
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: hp('2%'),
    marginHorizontal: wp('5%'),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
    color: "#000",
  },
  input: {
    borderWidth: 1,
    color: '#000',
    borderColor: "#000",
    borderRadius: 5,
    marginBottom: hp('2%'),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: hp('1%'),
    padding: hp('1.3%')

  },
  Birthdateinput: {
    borderWidth: 1,
    color: '#000',
    borderColor: "#000",
    borderRadius: 5,
    padding: hp('1.5%'),
    marginBottom: hp('2%'),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    color: '#000',
    marginBottom: hp('2%'),
  },
  timeInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: hp('2%'),
    width: 60,
    textAlign: "center",
    color: '#000',
  },
  colon: {
    marginHorizontal: hp('1%'),
    fontSize: hp('2%'),
    color: '#000',
  },
  amPmContainer: {
    flexDirection: "row",
    marginLeft: hp('2%'),
  },
  amPmButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: hp('2%'),
    marginLeft: hp('2%'),
  },
  selectedAmPm: {
    backgroundColor: "#FADADD",
    borderColor: "#FADADD",
  },
  amPmText: {
    fontSize: hp('2%'),
    color: "#000",

  },
  button: {
    backgroundColor: "#FFB300",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    marginBottom: hp('1%'),
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,

    backgroundColor: "#fff",
  },
  textInput: {
    flex: 1, // Takes up remaining space
    paddingVertical: hp('1%'),
    color: "#000",
  },
});


export default KundliMatchingScreen;


// import React from 'react';
// import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';

// const OpenMapButton = () => {
//   const handlePress = () => {
//     const url = 'https://maps.app.goo.gl/zYKiPVVjfkMe1qQa8'; // Replace with your URL
//     Linking.canOpenURL(url)
//       .then((supported) => {
//         if (supported) {
//           // Open Google Maps
//           Linking.openURL(url);
//         } else {
//           Alert.alert("Error", "Unable to open Google Maps.");
//         }
//       })
//       .catch((err) => console.error("An error occurred", err));
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TouchableOpacity
//         style={{
//           backgroundColor: '#007bff',
//           padding: 10,
//           borderRadius: 5,
//         }}
//         onPress={handlePress}
//       >
//         <Text style={{ color: '#fff' }}>Open Google Map</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default OpenMapButton;
