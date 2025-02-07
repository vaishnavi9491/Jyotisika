import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image,StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const users = [
  { id: '1', name: 'Park Jimin', message: 'Hey, I got to know you are amid a design task, ATB for same', time: '12:35 PM', unreadCount: 6, image: require('../../assets/image/john.png')},
  { id: '2', name: 'Nancy', message: 'Hey, I got to know you are amid a design task, ATB for same', time: '12:35 PM', unreadCount: 8, image: require('../../assets/image/john.png') },
  { id: '3', name: 'Steve', message: 'Hey, I got to know you are amid a design task, ATB for same', time: '12:35 PM', unreadCount: 10, image: require('../../assets/image/john.png') },
  { id: '4', name: 'Jonithan', message: 'Hey, I got to know you are amid a design task, ATB for same', time: '12:35 PM', unreadCount: 2, image: require('../../assets/image/john.png') },
];

const UserChatList = ({ navigation }) => {
  const navigateToChat = (user) => {
    navigation.navigate('ChatScreen', { userName: user.name });
  };

  const renderUser = ({ item }) => (
    <TouchableOpacity style={styles.userItem} onPress={() => navigateToChat(item)}>
     <Image source={item.image} style={styles.profileImage} />
      <View style={styles.messageContainer}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.messageText} numberOfLines={1}>
          {item.message}
        </Text>
      </View>
      <View style={styles.timeAndBadge}>
        <Text style={styles.timeText}>{item.time}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.unreadCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#94CAF4" barStyle="light-content" />
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('../../assets/image/john.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>Jyotisika</Text>
        <Ionicons name="notifications-outline" size={wp('7%')} color="#000" style={styles.notificationIcon} />
      </View>

      {/* Chat List */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUser}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: wp('3%'),
  },
  headerImage: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
  },
  headerText: {
    color: '#000',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginLeft: wp('4%'),
    flex: 1,
    textAlign:'center'
  },
  notificationIcon: {
    color: '#000',
  },
  chatList: {
    paddingVertical: hp('1%'),
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: wp('3%'),
    marginHorizontal: wp('2%'),
    marginBottom: hp('1%'),
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: wp('2%'),
    elevation: 2,
  },
  profileImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
  },
  messageContainer: {
    flex: 1,
    marginLeft: wp('3%'),
  },
  userName: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#000',
  },
  messageText: {
    fontSize: wp('4%'),
    color: '#888',
    marginTop: hp('0.5%'),
  },
  timeAndBadge: {
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: wp('3.5%'),
    color: '#888',
  },
  badge: {
    backgroundColor: '#1DAB61',
    borderRadius: wp('3%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('0.3%'),
    marginTop: hp('0.5%'),
  },
  badgeText: {
    fontSize: wp('3%'),
    color: '#fff',
    fontWeight: 'bold',
  },
  
});

export default UserChatList;
