
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const PaymentInformation = ({ route, navigation, }) => {
  const { amount, extra, showCoupons, image, fromProductScreen } = route.params;  // Destructure showCoupons

  const gst = (amount * 0.18).toFixed(2); // GST calculation (18%)
  const payableAmount = (amount + parseFloat(gst)).toFixed(2);

  const handleGooglePay = () => {
    const googlePayUrl = `upi://pay?pa=vaishnavijadhav5279@oksbi&pn=Vaishnavi%20Jadhav&am=${payableAmount}&cu=INR&tn=Recharge%20Payment`;

    Linking.openURL(googlePayUrl)
      .then(() => console.log("Google Pay opened successfully."))
      .catch((err) => {
        console.error("Error occurred:", err);
        Alert.alert("Error", "Could not open Google Pay. Please try again.");
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.paymentInfo}>
          <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
            <AntDesign name="arrowleft" size={24} color="#000" style={styles.arrowIcon} />
          </TouchableOpacity>
          <Text style={styles.paymentTitle}>Payment Information</Text>
        </View>

        {fromProductScreen && image && (
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.productImage} />
          </View>
        )}
        <Text style={styles.price}>Price: ₹{amount}</Text>
        {/* Payment Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Recharge Amount</Text>
            <Text style={styles.value}>₹{amount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>GST (18%)</Text>
            <Text style={styles.value}>₹{gst}</Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.label, styles.bold]}>Payable Amount</Text>
            <Text style={[styles.value, styles.bold]}>₹{payableAmount}</Text>
          </View>
        </View>

        {/* Show Available Coupons only if showCoupons is true */}
        {showCoupons && (
          <View style={styles.couponContainer}>
            <Text style={styles.couponTitle}>Available Coupons</Text>
            <View style={styles.couponBox}>
              <Text style={styles.couponText}>100% Extra on recharge of ₹50</Text>
              <Text style={styles.couponSubtext}>
                ✅ Rs. 50 cashback in wallet with this recharge
              </Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Coupon code"
                  placeholderTextColor="#aaa"
                />
                <TouchableOpacity style={styles.applyButton}>
                  <Text style={styles.applyButtonText}>APPLY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Pay Section */}
      <View style={styles.paySection}>
        <Text style={styles.payUsing}>Pay using</Text>
        <TouchableOpacity onPress={handleGooglePay} style={styles.gpayRow}>
          <Image
            source={require("../assets/image/GP.png")}
            style={styles.gpayIcon}
          />
          <Text style={styles.gpayText}>G Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGooglePay} style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay ₹{payableAmount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: hp('10%'), // Add padding bottom for better scrollability
  },
  paymentInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: hp("2%"),
  },
  arrowIcon: {
    marginRight: hp("1.5%"), // Space between the icon and the text
  },
  paymentTitle: {
    fontSize: hp("2.2%"),
    fontWeight: "600",
    color: "#000",
  },
  detailsContainer: {
    paddingHorizontal: hp("5%"),
    marginVertical: hp("4%"),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp("1%"),
  },
  label: {
    fontSize: hp("2.2%"),
    color: "#333",
  },
  value: {
    fontSize: hp("2%"),
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },
  couponContainer: {
    backgroundColor: "#f9f9f9",
    padding: hp("2%"),
    margin: hp("2%"),
    borderRadius: 10,
  },
  couponTitle: {
    fontSize: hp("2%"),
    marginBottom: 10,
    color: "#000",
  },
  couponBox: {
    backgroundColor: "#e7f9e7",
    padding: hp("3%"),
    borderRadius: 10,
  },
  couponText: {
    fontSize: hp("2.2%"),
    color: "#2e7d32",
  },
  couponSubtext: {
    fontSize: hp("2.2%"),
    color: "#555",
    marginVertical: hp("2%"),
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: hp('2%'),
    marginRight: hp("2%"),
    backgroundColor: "#fff",
    color: '#000'
  },
  applyButton: {
    backgroundColor: "#4caf50",
    padding: hp("2%"),
    borderRadius: 5,
  },
  applyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  paySection: {
    padding: hp('3%'),
    backgroundColor: "#f9f9f9",
    borderTopWidth: 1,
    borderColor: "#ccc",
    position: 'absolute', // Fixed position at the bottom
    bottom: 0,
    width: '100%',
  },
  payUsing: {
    fontSize: hp('2%'),
    color: "#555",
    marginBottom: 10,
  },
  gpayRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp('3%'),
  },
  gpayIcon: {
    width: wp('10%'),
    height: hp('5%'),
    marginRight: 10,
  },
  gpayText: {
    fontSize: hp('2.5%'),
    color: "#333",
  },
  payButton: {
    backgroundColor: "#4caf50",
    padding: hp('2%'),
    borderRadius: 5,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: hp('2.4%'),
    fontWeight: "bold",
  },
  productImage: {
    width: wp("80%"),
    height: hp("30%"),
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: hp("2%"),
  },
  price: {
    color: '#000',
    textAlign: 'center'
  }
});

export default PaymentInformation;
