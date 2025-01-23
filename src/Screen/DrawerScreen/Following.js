import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const Followings = ({navigation}) => {
  const data = [
    {
      id: "1",
      name: "John Doe",
      rating: 4.5,
      orders: 15003,
      specialties: "Vedic, Numerology, Tarot",
      languages: "English, Hindi, Marathi",
      experience: "23 years",
      image: "https://via.placeholder.com/150", // Replace with your image URL
    },
    {
      id: "2",
      name: "John Doe",
      rating: 4.5,
      orders: 15003,
      specialties: "Vedic, Numerology, Tarot",
      languages: "English, Hindi, Marathi",
      experience: "23 years",
      image: "https://via.placeholder.com/150", // Replace with your image URL
    },
    {
      id: "3",
      name: "John Doe",
      rating: 4.5,
      orders: 15003,
      specialties: "Vedic, Numerology, Tarot",
      languages: "English, Hindi, Marathi",
      experience: "23 years",
      image: "https://via.placeholder.com/150", // Replace with your image URL
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Profile Image */}
      <Image source={{ uri: item.image }} style={styles.profileImage} />

      {/* Details */}
      <View style={styles.details}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Fontisto name="check" size={16} color="#25D366" style={styles.verifiedIcon} />
        </View>
        <Text style={styles.specialties}>{item.specialties}</Text>
        <Text style={styles.languages}>
          <Fontisto name="language" size={14} /> {item.languages}
        </Text>
        <Text style={styles.experience}>
          <FontAwesome name="graduation-cap" size={14} /> Exp: {item.experience}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>
            <FontAwesome name="star" size={14} color="#FFD700" /> {item.rating}
          </Text>
          <Text style={styles.orders}>{item.orders} orders</Text>
        </View>
      </View>

      {/* Unfollow Button */}
      <TouchableOpacity style={styles.unfollowButton}>
        <Text style={styles.unfollowText}>UNFOLLOW</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
          <FontAwesome name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Followings</Text>
      </View>

      {/* List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: wp(4),
    color: "#000",
  },
  listContainer: {
    paddingHorizontal: wp(5),
    paddingBottom: hp(2),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: wp(3),
    padding: wp(4),
    marginBottom: hp(2),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  profileImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(7.5),
    marginRight: wp(4),
  },
  details: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  verifiedIcon: {
    marginLeft: wp(2),
  },
  specialties: {
    fontSize: 14,
    color: "#555",
    marginVertical: hp(0.5),
  },
  languages: {
    fontSize: 14,
    color: "#555",
    marginVertical: hp(0.5),
  },
  experience: {
    fontSize: 14,
    color: "#555",
    marginVertical: hp(0.5),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(0.5),
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginRight: wp(2),
  },
  orders: {
    fontSize: 14,
    color: "#555",
  },
  unfollowButton: {
    backgroundColor: "#fff",
    borderColor: "#007BFF",
    borderWidth: 1,
    borderRadius: wp(2),
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(3),
  },
  unfollowText: {
    fontSize: 14,
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default Followings;
