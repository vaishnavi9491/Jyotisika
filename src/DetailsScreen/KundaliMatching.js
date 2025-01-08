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
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/MaterialIcons";

const KundliMatchingScreen = () => {
  const [tab, setTab] = useState("Boy");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [amPm, setAmPm] = useState("AM");
  const [birthPlace, setBirthPlace] = useState("");

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.header}>Kundli Matching</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, tab === "Boy" && styles.activeTab]}
          onPress={() => setTab("Boy")}
        >
          <Text style={[styles.tabText, tab === "Boy" && styles.activeTabText]}>
            Boy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === "Girl" && styles.activeTab]}
          onPress={() => setTab("Girl")}
        >
          <Text style={[styles.tabText, tab === "Girl" && styles.activeTabText]}>
            Girl
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Value"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Birth Date</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDatePicker(true)}
        >
          <Text>{birthDate.toDateString()}</Text>
          <Icon name="calendar-today" size={20} />
        </TouchableOpacity>
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
            onChangeText={setHour}
          />
          <Text style={styles.colon}>:</Text>
          <TextInput
            style={styles.timeInput}
            placeholder="Minute"
            value={minute}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={setMinute}
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

        <Text style={styles.label}>Birth Place</Text>
        <TextInput
          style={styles.input}
          placeholder="Value"
          value={birthPlace}
          onChangeText={setBirthPlace}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5FA",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#5A4E8D",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#5A4E8D",
  },
  tabText: {
    fontSize: 16,
    color: "#7E7E7E",
  },
  activeTabText: {
    color: "#5A4E8D",
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  timeInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    width: 60,
    textAlign: "center",
  },
  colon: {
    marginHorizontal: 5,
    fontSize: 16,
  },
  amPmContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  amPmButton: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 10,
    marginLeft: 5,
  },
  selectedAmPm: {
    backgroundColor: "#FADADD",
    borderColor: "#FADADD",
  },
  amPmText: {
    fontSize: 14,
    color: "#333333",
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
});

export default KundliMatchingScreen;
