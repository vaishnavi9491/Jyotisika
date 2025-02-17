
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

const LiveChat = ({ navigation, route }) => {
  const { userName, } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [timer, setTimer] = useState(0);
  const [sessionActive, setSessionActive] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [isEndSessionModalVisible, setEndSessionModalVisible] = useState(false);
  const [isReviewModalVisible, setReviewModalVisible] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

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

  useEffect(() => {
    let timerInterval;
    if (sessionActive) {
      timerInterval = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);

      // Auto end session after 60 seconds
      if (timer >= 60) {
        clearInterval(timerInterval);
        autoEndSession();
      }
    }

    return () => clearInterval(timerInterval);
  }, [timer, sessionActive]);

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

  const submitReview = () => {
    console.log('Rating:', rating);
    console.log('Review:', review);
    setReviewModalVisible(false);
  };


  const handleEndSession = () => {
    setSessionActive(false);
    setEndSessionModalVisible(false);
    setReviewModalVisible(true);
  };

  const autoEndSession = () => {
    setSessionActive(false);
    setReviewModalVisible(true);
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
        <TouchableOpacity onPress={() => navigation.navigate('App_Drawer_Navigation')}>
          <Icon name="arrow-back" size={wp('6%')} color="#000" />
        </TouchableOpacity>

        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/image/jane.png')}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>{userName}</Text>

        </View>

        <View style={styles.sessionInfo}>
          <Text style={styles.timer}>{timer}s</Text>
          <TouchableOpacity onPress={() => setEndSessionModalVisible(true)} style={styles.endSessionButton}>
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
            <Text style={styles.chatMessage}>{chat.message}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
      />

      <Text style={styles.focustext}>
        {selectedCategory ? `Focus: ${selectedCategory}` : 'Choose your focus for the session'}
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
          <Icon name="send" size={wp('6%')} color="#000" />
        </TouchableOpacity>
      </View>

      {/* End Session Confirmation Modal */}
      <Modal
        visible={isEndSessionModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setEndSessionModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Icon name="warning" size={wp('12%')} color="#FFC107" />
            <Text style={styles.modalText}>Do you really want to end the session?</Text>
            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setEndSessionModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.endButton} onPress={handleEndSession}>
                <Text style={styles.endButtonText}>End</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Rating & Review Modal */}
      <Modal
        visible={isReviewModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setReviewModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setReviewModalVisible(false)}>
              <Icon name="close" size={24} color="#000" />
            </TouchableOpacity>

            {/* Review Heading */}
            <Text style={styles.modalText}>Rate Your Chat Experience</Text>

            {/* Star Rating */}
            <View style={styles.starContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star} onPress={() => setRating(star)}>
                  <Icon name="star" size={30} color={star <= rating ? '#FFD700' : '#E0E0E0'} />
                </TouchableOpacity>
              ))}
            </View>

            {/* Review Input */}
            <TextInput
              style={styles.reviewInput}
              placeholder="Write your feedback..."
              value={review}
              onChangeText={setReview}
              multiline
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
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
    justifyContent: 'space-between',
    padding: hp('1%'),
    backgroundColor: '#f8f9fa',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

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
  userName: {
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
    color: '#000',
  },
  myMessage: {
    backgroundColor: '#CFF7D3',
    alignSelf: 'flex-end',
  },
  userMessage: {
    backgroundColor: '#CFF7D3',
    alignSelf: 'flex-start',
  },
  message: {
    fontSize: wp('4%'),
    color: '#000'
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
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  reviewInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    textAlignVertical: 'top',
  },
  submitButton: {
    marginTop: 15,
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

});

export default LiveChat;
