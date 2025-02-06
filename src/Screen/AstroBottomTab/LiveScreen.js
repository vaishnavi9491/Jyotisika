// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   TextInput,
//   StyleSheet,
//   StatusBar,
//   Alert,
// } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera'; // Install this library
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const LiveScreen = () => {
//   const [isLive, setIsLive] = useState(false);
//   const [comments, setComments] = useState([]);
//   const [input, setInput] = useState('');
//   const [joinRequests, setJoinRequests] = useState([]); // Stores user join requests

//   const devices = useCameraDevices();
//   const cameraDevice = devices.front; // Use front camera for live

//   const handleSendComment = () => {
//     if (input) {
//       setComments([...comments, { id: Date.now(), text: input }]);
//       setInput('');
//     }
//   };

//   const handleJoinRequest = (user) => {
//     setJoinRequests([...joinRequests, user]);
//   };

//   const acceptJoinRequest = (user) => {
//     Alert.alert(`${user} has joined your live session!`);
//     setJoinRequests(joinRequests.filter((req) => req !== user)); // Remove from requests
//   };

//   const startLiveStream = async () => {
//     const cameraPermission = await Camera.requestCameraPermission();
//     const microphonePermission = await Camera.requestMicrophonePermission();

//     if (cameraPermission === 'granted' && microphonePermission === 'granted') {
//         setIsLive(true);
//       } else {
//         Alert.alert('Permissions Denied', 'Please allow camera and microphone access to go live.');
//       }
//     } 

//   const stopLiveStream = () => {
//     setIsLive(false);
//     Alert.alert('Live session ended.');
//   };

//   return (
//     <View style={styles.container}>
//        <StatusBar backgroundColor="#94CAF4" barStyle="light-content" />

//       {isLive ? (
//         cameraDevice ? (
//           <Camera
//             style={styles.camera}
//             device={cameraDevice}
//             isActive={isLive}
//             video={true}
//             audio={true}
//           >
//             {/* Live Overlay */}
//             <View style={styles.liveOverlay}>
//               {/* Top Bar */}
//               <View style={styles.topBar}>
//                 <Text style={styles.liveText}>Live</Text>
//                 <TouchableOpacity onPress={stopLiveStream}>
//                   <FontAwesome name="close" size={24} color="#fff" />
//                 </TouchableOpacity>
//               </View>

//               {/* Viewer Join Requests */}
//               {joinRequests.length > 0 && (
//                 <View style={styles.requestsContainer}>
//                   <Text style={styles.requestsTitle}>Join Requests:</Text>
//                   {joinRequests.map((user, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.requestButton}
//                       onPress={() => acceptJoinRequest(user)}
//                     >
//                       <Text style={styles.requestText}>{user}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               )}

//               {/* Comments Section */}
//               <FlatList
//                 data={comments}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                   <Text style={styles.commentText}>{item.text}</Text>
//                 )}
//                 style={styles.commentsList}
//               />

//               {/* Add Comment */}
//               <View style={styles.commentInputWrapper}>
//                 <TextInput
//                   style={styles.commentInput}
//                   placeholder="Add a comment..."
//                   placeholderTextColor="#ccc"
//                   value={input}
//                   onChangeText={setInput}
//                 />
//                 <TouchableOpacity onPress={handleSendComment} style={styles.sendButton}>
//                   <FontAwesome name="send" size={18} color="#fff" />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </Camera>
//         ) : (
//           <Text style={styles.loadingText}>Loading Camera...</Text>
//         )
//       ) : (
//         <View style={styles.offlineContainer}>
//           <Text style={styles.offlineText}>You are not live yet</Text>
//           <TouchableOpacity onPress={startLiveStream} style={styles.liveButton}>
//             <Text style={styles.liveButtonText}>Go Live</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// export default LiveScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   camera: {
//     flex: 1,
//   },
//   liveOverlay: {
//     flex: 1,
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#000000aa',
//     padding: 10,
//     borderRadius: 8,
//   },
//   liveText: { color: '#f00', fontWeight: 'bold', fontSize: 16 },
//   requestsContainer: {
//     backgroundColor: '#000000aa',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   requestsTitle: {
//     color: '#fff',
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   requestButton: {
//     backgroundColor: '#444',
//     padding: 5,
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   requestText: { color: '#fff' },
//   commentsList: {
//     flex: 1,
//     marginVertical: 10,
//     backgroundColor: '#000000aa',
//     borderRadius: 8,
//     padding: 10,
//   },
//   commentText: { color: '#fff', marginBottom: 5 },
//   commentInputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#000000aa',
//     borderRadius: 8,
//   },
//   commentInput: {
//     flex: 1,
//     backgroundColor: '#333',
//     color: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   sendButton: { padding: 10, backgroundColor: '#444', borderRadius: 8 },
//   offlineContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   offlineText: {
//     color: '#fff',
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   liveButton: {
//     backgroundColor: '#f00',
//     padding: 15,
//     borderRadius: 10,
//   },
//   liveButtonText: { color: '#fff', fontWeight: 'bold' },
//   loadingText: {
//     color: '#fff',
//     fontSize: 18,
//     alignSelf: 'center',
//   },
// });
  import { StyleSheet, Text, View } from 'react-native'
  import React from 'react'
  
  const LiveScreen = () => {
    return (
      <View>
        <Text>LiveScreen</Text>
      </View>
    )
  }
  
  export default LiveScreen
  
  const styles = StyleSheet.create({})