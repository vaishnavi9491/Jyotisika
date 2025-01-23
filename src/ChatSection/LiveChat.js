
import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LiveChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [timer, setTimer] = useState(0);
  const [sessionActive, setSessionActive] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [isModalVisible, setModalVisible] = useState(false);

  const categories = [
    'Love & Relationship',
    'Career',
    'Health',
    'Finance',
    'Kundali',
    'Birth Chart',
    'Education',
    'Business',
  ];

  const sendMessage = () => {
    if (message.trim()) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length.toString(), text: message, sender: 'me', timestamp: currentTime },
      ]);
      setMessage('');

      // Simulate user response
      setTimeout(() => {
        simulateUserResponse();
      }, 1000);
    }
  };

  const simulateUserResponse = () => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length.toString(), text: 'Hello! How can I help you?', sender: 'user', timestamp: currentTime },
    ]);
  };

  useEffect(() => {
    let timerInterval;
    if (sessionActive) {
      timerInterval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [sessionActive]);

  const handleEndSession = () => {
    setSessionActive(false);
    setModalVisible(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const CategoryBox = ({ title }) => (
    <TouchableOpacity
      style={[
        styles.categoryBox,
        selectedCategory === title && styles.selectedCategoryBox,
      ]}
      onPress={() => handleCategorySelect(title)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === title && styles.selectedCategoryText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go Back')}>
          <Icon name="arrow-back" size={wp('6%')} color="#fff" />
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/image/jane.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>John Doe</Text>
        </View>

        <View style={styles.sessionInfo}>
          <Text style={styles.timer}>{timer}s</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.endSessionButton}>
            <Text style={styles.endSessionText}>End Session</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === 'me' ? styles.myMessage : styles.userMessage,
            ]}
          >
            <Text style={styles.message}>{item.text}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />

      <Text style={styles.focustext}>
        {selectedCategory
          ? `Focus: ${selectedCategory}`
          : 'Choose your focus for the session'}
      </Text>

      <View style={styles.categoryGrid}>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          renderItem={({ item }) => <CategoryBox title={item} />}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
          editable={sessionActive}
        />

        <TouchableOpacity style={styles.sendButton} onPress={sendMessage} disabled={!sessionActive}>
          <Icon name="send" size={wp('6%')} color="#fff" />
        </TouchableOpacity>
      </View>


      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Icon name="warning" size={wp('12%')} color="#FFC107" />
            <Text style={styles.modalText}>Do You Really Want to End the Session?</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.endButton}
                onPress={handleEndSession}
              >
                <Text style={styles.endButtonText}>End</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>




    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('1%'),

  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('3%'),
    flex: 1,
  },
  profileImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
  },
  profileName: {
    fontSize: wp('4.5%'),
    marginLeft: wp('2%'),
    color: '#000',
    fontWeight: 'bold',
  },
  sessionInfo: {
    alignItems: 'flex-end',
  },
  timer: {
    fontSize: wp('4%'),
    color: '#000',
  },
  endSessionButton: {
    marginTop: hp('0.5%'),
    backgroundColor: '#d9534f',
    paddingVertical: hp('0.5%'),
    paddingHorizontal: wp('2%'),
    borderRadius: wp('3%'),
  },
  endSessionText: {
    color: '#fff',
    fontSize: wp('3.5%'),
  },
  messageContainer: {
    marginBottom: hp('1%'),
    padding: hp('1.5%'),
    borderRadius: wp('3%'),
    maxWidth: '70%',
  },
  myMessage: {
    backgroundColor: '#FFCC00',
    alignSelf: 'flex-end',
  },
  userMessage: {
    backgroundColor: '#FFCC00',
    alignSelf: 'flex-start',
  },
  message: {
    fontSize: wp('4%'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: wp('5%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('3%'),
    marginHorizontal: wp('2%'),
    color: '#000',
  },
  sendButton: {
    backgroundColor: '#FFCC00',
    padding: wp('3%'),
    borderRadius: wp('5%'),
  },
  focustext: {
    color: '#000',
    marginLeft: hp('2%'),
  },
  categoryGrid: {
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    backgroundColor: '#fff',
  },
  categoryBox: {
    flex: 1,
    margin: wp('1%'),
    backgroundColor: '#f1f1f1',
    paddingVertical: hp('1%'),
    borderRadius: wp('3%'),
    borderWidth: 1,
    borderColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: wp('15%'),
  },
  categoryText: {
    fontSize: wp('3.5%'),
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
  timestamp: {
    fontSize: wp('3%'),
    color: '#000',
    marginTop: hp('0.5%'),
    textAlign: 'right',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: wp('3%'),
    padding: wp('5%'),
    alignItems: 'center',
  },
  modalText: {
    fontSize: wp('4.5%'),
    textAlign: 'center',
    marginVertical: hp('2%'),
    color: '#000',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: hp('1%'),
    borderRadius: wp('3%'),
    alignItems: 'center',
    marginRight: wp('2%'),
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
  },
  endButton: {
    flex: 1,
    backgroundColor: '#FFC1C1',
    paddingVertical: hp('1%'),
    borderRadius: wp('3%'),
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  endButtonText: {
    color: '#FF0000',
    fontSize: wp('4%'),
  },
});

export default LiveChat;
