// import React from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-screen';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const AstrologerHomeScreen = () => {
//   const navigation = useNavigation();

//   const feedbacks = [
//     { id: '1', text: 'This Astrologer provided incredible insights into my life and personality...' },
//     { id: '2', text: 'Their predictions about my career path were spot-on, and their guidance helped me...' }
//   ];

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profileImage} />
//         <Text style={styles.username}>Jyotisika</Text>
//         <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
//       </View>

//       {/* Stats Cards */}
//       <View style={styles.statsContainer}>
//         <View style={[styles.statCard, { backgroundColor: '#EDE6FB' }]}> 
//           <Text style={styles.statNumber}>1,4325</Text>
//           <Text style={styles.statLabel}>Total Consultation</Text>
//         </View>
//         <View style={[styles.statCard, { backgroundColor: '#FCEFC4' }]}> 
//           <Text style={styles.statNumber}>1,4325</Text>
//           <Text style={styles.statLabel}>Appointment</Text>
//         </View>
//         <View style={[styles.statCard, { backgroundColor: '#DFF5E8' }]}> 
//           <Text style={styles.statNumber}>1,4325</Text>
//           <Text style={styles.statLabel}>Total Earning</Text>
//         </View>
//       </View>

//       {/* Recent Request */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Recent Request</Text>
//         <TouchableOpacity style={styles.viewAll}><Text>View all</Text></TouchableOpacity>
//       </View>
//       <View style={styles.requestCard}>
//         <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profileImage} />
//         <View>
//           <Text style={styles.requestName}>Jane Doe</Text>
//           <Text style={styles.requestDetail}>Services: Numerology</Text>
//           <Text style={styles.requestDetail}>Date: 25/1/2025</Text>
//           <Text style={styles.requestDetail}>Time: 10:00 AM</Text>
//           <Text style={styles.requestLocation}>XYZ road, ABC colony, Nashik, Maharashtra</Text>
//         </View>
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.acceptButton}><Text style={styles.buttonText}>Accept</Text></TouchableOpacity>
//         <TouchableOpacity style={styles.rejectButton}><Text style={styles.buttonText}>Reject</Text></TouchableOpacity>
//       </View>

//       {/* Feedback Section */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Feedbacks</Text>
//         <TouchableOpacity style={styles.viewAll}><Text>View all</Text></TouchableOpacity>
//       </View>
//       <FlatList
//         horizontal
//         data={feedbacks}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.feedbackCard}>
//             <Text>{item.text}</Text>
//           </View>
//         )}
//       />

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity><Ionicons name="home" size={24} color="white" /></TouchableOpacity>
//         <TouchableOpacity><Ionicons name="videocam" size={24} color="white" /></TouchableOpacity>
//         <TouchableOpacity><Ionicons name="chatbubbles" size={24} color="white" /></TouchableOpacity>
//         <TouchableOpacity><Ionicons name="person" size={24} color="white" /></TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F8F8F8' },
//   header: { flexDirection: 'row', alignItems: 'center', padding: 20 },
//   profileImage: { width: 40, height: 40, borderRadius: 20 },
//   username: { marginLeft: 10, fontSize: responsiveFontSize(2.2), fontWeight: 'bold' },
//   icon: { marginLeft: 'auto' },
//   statsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', padding: 10 },
//   statCard: { width: responsiveWidth(42), height: responsiveHeight(10), padding: 15, borderRadius: 10, alignItems: 'center' },
//   statNumber: { fontSize: responsiveFontSize(3), fontWeight: 'bold' },
//   statLabel: { fontSize: responsiveFontSize(1.5), textAlign: 'center' },
//   section: { flexDirection: 'row', justifyContent: 'space-between', padding: 15 },
//   sectionTitle: { fontSize: responsiveFontSize(2), fontWeight: 'bold' },
//   viewAll: { color: 'blue' },
//   requestCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 15, borderRadius: 10, margin: 10 },
//   requestName: { fontWeight: 'bold' },
//   requestDetail: { fontSize: responsiveFontSize(1.8) },
//   requestLocation: { color: 'blue' },
//   buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 10 },
//   acceptButton: { backgroundColor: 'green', padding: 10, borderRadius: 5 },
//   rejectButton: { backgroundColor: 'gray', padding: 10, borderRadius: 5 },
//   buttonText: { color: 'white' },
//   feedbackCard: { backgroundColor: '#FFF', padding: 15, borderRadius: 10, margin: 10, width: responsiveWidth(80) },
//   bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#007B8F', padding: 15 }
// });

// export default AstrologerHomeScreen;



import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AstrologerHomeScreen = () => {
  return (
    <View style={styles.statsContainer}>
      <View style={[styles.statCard, { backgroundColor: '#EDE6FB' }]}>
        <Text style={styles.statNumber}>1,4325</Text>
        <Text style={styles.statLabel}>Total Consultation</Text>
      </View>
      <View style={[styles.statCard, { backgroundColor: '#FCEFC4' }]}>
        <Text style={styles.statNumber}>1,4325</Text>
        <Text style={styles.statLabel}>Appointment</Text>
      </View>
      <View style={[styles.statCard, { backgroundColor: '#DFF5E8' }]}>
        <Text style={styles.statNumber}>1,4325</Text>
        <Text style={styles.statLabel}>Total Earning</Text>
      </View>
    </View>

  )
}

export default AstrologerHomeScreen
const styles=StyleSheet.create({
  
})