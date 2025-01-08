
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import CalendarPicker from "react-native-calendar-picker";

const { width, height } = Dimensions.get("window");

const horoscopes = [
  {
    text: "Today's horoscope for Leo highlights the importance of leveraging your natural confidence. It's a great day to embark on new projects or ventures, as your charisma and energy are likely to attract positive opportunities. You may receive recognition for your hard work, which will boost your morale and motivation. Financially, take time to review your goals carefully and ensure you’re making wise decisions."
  },
  {
    text: "Leos may feel extra creative today. Channel this energy into something productive.",
  },
  {
    text: "It's a good day for Leos to connect with loved ones and strengthen emotional bonds.",
  },
  {
    text: "Take time to relax and recharge. Leos may need a break to restore their energy.",
  },
];

const options = ["Yesterday", "Today", "Tomorrow"];

const Cancer = ({ navigation }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Daily");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
    console.log(`Selected: ${option}`);
  };

  const handleNext = () => {
    if (currentIndex < horoscopes.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + nextIndex);
      setSelectedDate(nextDate.toISOString().split("T")[0]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      const prevDate = new Date();
      prevDate.setDate(prevDate.getDate() - prevIndex);
      setSelectedDate(prevDate.toISOString().split("T")[0]);
    }
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(formattedDate);
    setIsCalendarVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Horoscope")}>
          <AntDesign name="arrowleft" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.Jtext}>BookPooja</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Wallet')}>
        <Text style={styles.balance}>₹ 50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings}>
          <Fontisto name="language" size={15} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="phone-call" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Dropdown */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setShowDropdown(!showDropdown)}
        >
          <Text style={styles.dropdownButtonText}>{selectedOption}</Text>
        </TouchableOpacity>
        {showDropdown && (
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={handlePrevious}>
            <AntDesign name="left" size={30} color={currentIndex > 0 ? "#000" : "#ccc"} />
          </TouchableOpacity>
          <Image
            source={require("../assets/image/cancer.png")}
            style={styles.zodiacImage}
          />
          <TouchableOpacity onPress={handleNext}>
            <AntDesign name="right" size={30} color={currentIndex < horoscopes.length - 1 ? "#000" : "#ccc"} />
          </TouchableOpacity>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{selectedDate}</Text>
          <TouchableOpacity onPress={() => setIsCalendarVisible(!isCalendarVisible)}>
            <AntDesign name="calendar" size={24} color="#161499" />
          </TouchableOpacity>
        </View>
        <Text style={styles.zodiacName}>Cancer</Text>
        <Text style={styles.horoscopeText}>{horoscopes[currentIndex].text}</Text>
        {isCalendarVisible && (
          <View style={styles.calendarDropdown}>
            <View style={styles.calendarHeader}>
              <TouchableOpacity onPress={() => setIsCalendarVisible(false)}>
                <AntDesign name="closecircle" size={24} color="#161499" />
              </TouchableOpacity>
            </View>
            <CalendarPicker
              onDateChange={handleDateChange}
              todayBackgroundColor="#FF8C00"
              selectedDayColor="#FFD700"
              selectedDayTextColor="#FFF"
              width={280}
              height={280}
              selectedStartDate={new Date(selectedDate)}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: hp("2%"),
  },
  balance: {
    fontSize: hp("2%"),
    fontWeight: "bold",
    color: "#000",
  },
  Jtext: {
    marginRight: hp("20%"),
    color: "#000",
    fontWeight: "bold",
  },
  settings: {
    backgroundColor: "#FFD700",
    padding: wp("2%"),
    borderRadius: wp(2),
  },
  dropdownContainer: {
    width: width * 0.9,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    alignSelf: "center",
    marginTop: hp("2%"),
  },
  dropdownButton: {
    padding: hp("1%"),
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  dropdownButtonText: {
    fontSize: hp("2%"),
    color: "#333",
  },
  dropdownItem: {
    padding: hp("1%"),
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownItemText: {
    fontSize: hp("2.2%"),
    color: "#333",
  },
  content: {
    alignItems: "center",
    padding: hp("2%"),
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  zodiacImage: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: "contain",
  },
  zodiacName: {
    fontSize: hp("2.2%"),
    fontWeight: "bold",
    color: "#161499",
    marginTop: 10,
  },
  date: {
    fontSize: hp("2%"),
    color: "#999",
    marginVertical: 5,
  },
  horoscopeText: {
    fontSize: hp("2.2%"),
    color: "#333",
    textAlign: "justify",
    marginVertical: hp("2%"),
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("3%"),
  },
  dateText: {
    fontSize: hp("2.2%"),
    fontWeight: "bold",
    color: "#000",
    marginRight: hp("2%"),
  },
  calendarDropdown: {
    position: "absolute",
    top: 50,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 10,
    zIndex: 1000,
  },
});

export default Cancer;
