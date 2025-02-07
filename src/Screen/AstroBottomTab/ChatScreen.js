// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const ChatScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   const handleSendMessage = () => {
//     if (input) {
//       setMessages([...messages, { id: Date.now(), text: input, isSender: true }]);
//       setInput('');
//     }
//   };

//   const renderMessage = ({ item }) => (
//     <View
//       style={[
//         styles.messageBubble,
//         item.isSender ? styles.sentMessage : styles.receivedMessage,
//       ]}
//     >
//       <Text style={styles.messageText}>{item.text}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity>
//           <FontAwesome name="arrow-left" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.chatTitle}>Jyotiska</Text>
//         <TouchableOpacity>
//           <FontAwesome name="bell" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Messages */}
//       <FlatList
//         data={messages}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderMessage}
//         style={styles.messagesList}
//       />

//       {/* Message Input */}
//       <View style={styles.messageInputWrapper}>
//         <TextInput
//           style={styles.messageInput}
//           placeholder="Type a message..."
//           placeholderTextColor="#888"
//           value={input}
//           onChangeText={setInput}
//         />
//         <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
//           <FontAwesome name="send" size={18} color="#fff" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#333',
//   },
//   chatTitle: { color: '#fff', fontSize: 18 },
//   messagesList: { flex: 1, padding: 10 },
//   messageBubble: {
//     padding: 10,
//     borderRadius: 10,
//     marginVertical: 5,
//     maxWidth: '70%',
//   },
//   sentMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#095EA1',
//   },
//   receivedMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#444',
//   },
//   messageText: { color: '#fff' },
//   messageInputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#222',
//     marginBottom:'14%'
//   },
//   messageInput: {
//     flex: 1,
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: '#444',
//     padding: 10,
//     borderRadius: 8,
//    // marginBottom:'35%'
//   },
// });

// export default ChatScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatScreen = ({ route }) => {
  const { userName } = route.params; 
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', isSender: false },
    { id: '2', text: 'Hi! How can I help you?', isSender: true },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: input, isSender: true }]);
      setInput('');
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.isSender ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        style={styles.messagesList}
       // inverted // Show latest messages at the bottom
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          placeholderTextColor='#888'
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
        <FontAwesome name="send" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    padding: 15,
    backgroundColor: '#94CAF4',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    color: '#000',
    fontWeight:'bold'
  },
  messagesList: {
    flex: 1,
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#94CAF4',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#888',
  },
  messageText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginRight: 10,
    color:'#000'
  },
  sendButton: {
    backgroundColor: '#94CAF4',
    padding: 12,
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#fff',
  },
});

export default ChatScreen;
