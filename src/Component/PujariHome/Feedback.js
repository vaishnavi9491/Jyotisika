import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,ScrollView} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Feedback = () => {
     const feedbacks = [
            {
                feedback: "This Panditji provided incredible insights into my life and personality...",
                name: "Jane Doe",
                date: "3 days ago",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                rating: 5,
            },
            {
                feedback: "Amazing guidance! Helped me make better life decisions...",
                name: "John Smith",
                date: "1 week ago",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                rating: 4,
            },
            {
                feedback: "Highly recommend for anyone seeking clarity in life...",
                name: "Emily Brown",
                date: "2 weeks ago",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                rating: 5,
            },
        ];
        const FeedbackCard = ({ feedback, name, date, image, rating }) => {
            return (
                <View style={styles.card}>
                    <Text style={styles.feedbackText}>{feedback}</Text>
                    <View style={styles.userInfo}>
                        <Image source={{ uri: image }} style={styles.userImage} />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.date}>{date}</Text>
                        </View>
                    </View>
                    <View style={styles.rating}>
                        {[...Array(rating)].map((_, index) => (
                            <FontAwesome key={index} name="star" size={16} color="#FFD700" />
                        ))}
                    </View>
                </View>
            );
        };
    return (
        <View>
            <View style={styles.rowContainer}>
                <Text style={styles.RecentText}>Feedbacks</Text>
                <TouchableOpacity>
                    <Text style={styles.ViewText}>View all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {feedbacks.map((item, index) => (
                        <FeedbackCard key={index} {...item} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: hp('0.5%'),
        marginTop: hp('1%'),
        marginBottom: hp('1%')
    },
    RecentText: {
        color: '#000',
        fontWeight: '500'
    },
    ViewText: {
        color: '#757575',
        fontWeight: '500'
    },
    section: {
        marginTop: hp('1.3%'),
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        width: 250,
        marginRight: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginBottom:hp('2.5%')
    },
    feedbackText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    date: {
        fontSize: 12,
        color: '#757575',
    },
    rating: {
        flexDirection: 'row',
        marginTop: 5,
    },
});

export default Feedback;
