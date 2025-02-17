import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const notifications = [
  { id: '1', icon: 'user', text: 'John Doe is live', time: '10:00 AM', isOnline: false },
  { id: '2', icon: 'circle', text: 'Smith is', highlight: 'Online', suffix: ', chat now', time: '10:00 PM', isOnline: true },
];

const NotificationScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      {/* Icon (User / Online Indicator) */}
      {item.isOnline ? (
        <MaterialIcons name="fiber-manual-record" size={16} color="green" style={styles.icon} />
      ) : (
        <FontAwesome name={item.icon} size={16} color="black" style={styles.icon} />
      )}

      {/* Notification Text */}
      <Text style={styles.notificationText}>
        {item.text}{' '}
        {item.highlight && <Text style={styles.highlightText}>{item.highlight}</Text>}
        {item.suffix}
      </Text>

      {/* Time */}
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: hp("2%"), flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: hp('2%'),
    backgroundColor: '#f8f9fa',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 1,
    width: '100%',
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: hp('25%')
  },
  listContainer: {
    padding: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
    fontSize: 14,
  },
  highlightText: {
    color: 'green',
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default NotificationScreen;
