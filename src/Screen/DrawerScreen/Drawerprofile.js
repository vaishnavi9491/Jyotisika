
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  PermissionsAndroid,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DrawerProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [profilePic, setProfilePic] = useState(require("../../assets/image/jane.png"));

  const [nameError, setNameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [dobError, setDobError] = useState("");
  const [placeOfBirthError, setPlaceOfBirthError] = useState("");
  const [currentAddressError, setCurrentAddressError] = useState("");

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "This app needs access to your camera",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const Validation = () => {
    let isValid = true;

    if (name === "") {
      setNameError("Name cannot be empty");
      isValid = false;
    } else {
      setNameError("");
    }

    if (contact === "" || !/^\d{10}$/.test(contact)) {
      setContactError("Enter a valid 10-digit contact number");
      isValid = false;
    } else {
      setContactError("");
    }

    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (gender === "") {
      setGenderError("Gender cannot be empty");
      isValid = false;
    } else {
      setGenderError("");
    }

    if (dob === "") {
      setDobError("Date of Birth cannot be empty");
      isValid = false;
    } else {
      setDobError("");
    }

    if (placeOfBirth === "") {
      setPlaceOfBirthError("Place of Birth cannot be empty");
      isValid = false;
    } else {
      setPlaceOfBirthError("");
    }

    if (currentAddress === "") {
      setCurrentAddressError("Current Address cannot be empty");
      isValid = false;
    } else {
      setCurrentAddressError("");
    }

    return isValid;
  };

  const handleSave = () => {
    if (Validation()) {
      Alert.alert("Profile Saved", "Your changes have been saved successfully!");
    } else {
      Alert.alert("Validation Error", "Please fix the errors in the form.");
    }
  };

  const handleCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (hasPermission) {
      launchCamera(
        {
          mediaType: "photo",
          saveToPhotos: true,
        },
        (response) => {
          if (response.didCancel) {
            Alert.alert("Camera", "User cancelled camera");
          } else if (response.errorCode) {
            Alert.alert("Camera Error", response.errorMessage || "An error occurred");
          } else if (response.assets && response.assets.length > 0) {
            setProfilePic({ uri: response.assets[0].uri });
          }
        }
      );
    } else {
      Alert.alert("Permission Denied", "Camera permission is required to take a photo.");
    }
  };

  const handleGallery = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert("Gallery", "User cancelled image selection");
        } else if (response.errorCode) {
          Alert.alert("Gallery Error", response.errorMessage || "An error occurred");
        } else if (response.assets && response.assets.length > 0) {
          setProfilePic({ uri: response.assets[0].uri });
        }
      }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("App_Drawer_Navigation")}>
          <AntDesign name="arrowleft" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.Jtext}>Pratik</Text>
      </View>

      <View style={styles.profilePicContainer}>
        <TouchableOpacity onPress={handleGallery}>
          <Image source={profilePic} style={styles.profilePic} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraIcon} onPress={handleCamera}>
          <Text style={styles.cameraIconText}>📷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        {nameError !== "" && <Text style={styles.error}>{nameError}</Text>}

        <Text style={styles.label}>Contact</Text>
        <TextInput
          style={styles.input}
          value={contact}
          keyboardType="phone-pad"
          onChangeText={setContact}
        />
        {contactError !== "" && <Text style={styles.error}>{contactError}</Text>}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        {emailError !== "" && <Text style={styles.error}>{emailError}</Text>}

        <Text style={styles.label}>Gender</Text>
        <TextInput style={styles.input} value={gender} onChangeText={setGender} />
        {genderError !== "" && <Text style={styles.error}>{genderError}</Text>}

        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} value={dob} onChangeText={setDob} />
        {dobError !== "" && <Text style={styles.error}>{dobError}</Text>}

        <Text style={styles.label}>Place of Birth</Text>
        <TextInput
          style={styles.input}
          value={placeOfBirth}
          onChangeText={setPlaceOfBirth}
        />
        {placeOfBirthError !== "" && <Text style={styles.error}>{placeOfBirthError}</Text>}

        <Text style={styles.label}>Current Address</Text>
        <TextInput
          style={styles.input}
          value={currentAddress}
          onChangeText={setCurrentAddress}
        />
        {currentAddressError !== "" && <Text style={styles.error}>{currentAddressError}</Text>}

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: hp("2.5%"),
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: hp("10%"),
  },
  Jtext: {
    marginRight: hp("25%"),
    color: "#000",
    fontWeight: "bold",
  },
  profilePicContainer: {
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  profilePic: {
    width: wp("30%"),
    height: hp("15%"),
    borderRadius: 50,
    borderWidth: 2,

  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 110,
    backgroundColor: "#FFD700",
    padding: 5,
    borderRadius: 20,
  },
  cameraIconText: {
    fontSize: hp("2%"),
  },
  form: {
    marginTop: hp("2%"),
  },
  label: {
    fontSize: hp("1.5%"),
    marginBottom: hp("1%"),
    color: "#000",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: hp("1%"),
    padding: hp("1%"),
    fontSize: hp("2%"),
    color: "#000",
  },
  error: {
    color: "red",
    fontSize: hp("1.5%"),
    marginBottom: hp("2%"),
  },
  saveButton: {
    backgroundColor: "#FFCC00",
    borderColor: "#AB8800",
    padding: hp("2%"),
    borderRadius: 8,
    alignItems: "center",
    marginTop: hp("2%"),
  },
  saveButtonText: {
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: "#fff",
  },
});

export default DrawerProfile;

