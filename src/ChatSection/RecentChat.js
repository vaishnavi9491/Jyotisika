import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Modal,
    TextInput,
    Button,
    Alert
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RecentChat = ({ navigation }) => {
    const [isReviewModalVisible, setReviewModalVisible] = useState(false);
    const [isThankYouModalVisible, setThankYouModalVisible] = useState(false);
    const [selectedChat, setSelectedChat] = useState(null);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);

    const [chatData, setChatData] = useState([
        {
            id: "1",
            name: "John Doe",
            message: "Hey I got to know you are amid a design task, ATB for same",
            time: "12:35 PM",
            badge: 10,
            imageUrl: "https://via.placeholder.com/100",
            pinned: false,
        },
        {
            id: "2",
            name: "Jane Smith",
            message: "Can we discuss the upcoming project?",
            time: "1:15 PM",
            badge: 5,
            imageUrl: "https://via.placeholder.com/100",
            pinned: false,
        },
        {
            id: "3",
            name: "Alex Johnson",
            message: "Let me know your availability for the call.",
            time: "3:30 PM",
            badge: 2,
            imageUrl: "https://via.placeholder.com/100",
            pinned: false,
        },
    ]);

    const handlePinChat = (id) => {
        const updatedChats = chatData.map((chat) => ({
            ...chat,
            pinned: chat.id === id ? !chat.pinned : chat.pinned,
        }));

        // Reorder chats: pinned chats appear at the top
        updatedChats.sort((a, b) => b.pinned - a.pinned);

        setChatData(updatedChats);
    };

    const handleDeleteChat = (id) => {
        Alert.alert(
            "Delete Chat",
            "Are you sure you want to delete this chat?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        const updatedChats = chatData.filter((chat) => chat.id !== id);
                        setChatData(updatedChats);
                    },
                },
            ]
        );
    };


    const handleChatPress = (item) => {
        setSelectedChat(item);
        setReviewModalVisible(true);
    };

    const handleStarPress = (star) => {
        setRating(star);
    };

    const handleSubmitReview = () => {
        console.log("Review Submitted:", {
            name: selectedChat?.name,
            rating,
            reviewText,
        });

        setReviewModalVisible(false);
        setThankYouModalVisible(true);
    };

    const closeThankYouModal = () => {
        setThankYouModalVisible(false);
        setReviewText("");
        setRating(0);
        setSelectedChat(null);
    };



    const renderChatActions = (item) => (
        <View style={styles.chatActions}>
            <TouchableOpacity onPress={() => console.log("Chat Icon Pressed")}>
                <AntDesign name="message1" size={20} color="blue"
                    style={{ marginLeft: hp('2%') }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePinChat(item.id)}>
                <AntDesign
                    name={item.pinned ? "pushpin" : "pushpino"}
                    size={20}
                    color={item.pinned ? "#FFD700" : "#000"}
                    style={{ marginLeft: hp('2%'), marginTop: hp('2%') }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteChat(item.id)}>
                <AntDesign name="delete" size={20} color="#FF0000"
                    style={{ marginLeft: hp('2%'), marginTop: hp('2%') }}
                />
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleChatPress(item)}>
            <View style={styles.chatCard}>
                <Image source={{ uri: item.imageUrl }} style={styles.avatar} />
                <View style={styles.chatContent}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text style={styles.time}>{item.time}</Text>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{item.badge}</Text>
                    </View>
                </View>
                {renderChatActions(item)}
            </View>
        </TouchableOpacity>
    );
    const renderHeader = () => (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <AntDesign name="arrowleft" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.Jtext}>Chat Section</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={chatData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={styles.list}
            />

            {/* Review Modal */}
            <Modal
                visible={isReviewModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setReviewModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>

                        <Text style={styles.modalTitle}>
                            Submit Review for {selectedChat?.name}
                        </Text>
                        <View style={styles.starContainer}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity
                                    key={star}
                                    onPress={() => handleStarPress(star)}
                                >
                                    <AntDesign
                                        name={star <= rating ? "star" : "staro"}
                                        size={30}
                                        color="#FFD700"
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                        <Text style={styles.reviewText}>Comment your review</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Write your review here..."
                            value={reviewText}
                            onChangeText={setReviewText}
                            multiline
                        />
                        <Button title="Submit" onPress={handleSubmitReview} />
                    </View>
                </View>
            </Modal>

            {/* Thank You Modal */}
            <Modal
                visible={isThankYouModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={closeThankYouModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Thank You!</Text>
                        <Text style={styles.reviewText}>Your review has been submitted successfully.</Text>
                        <Image
                            source={require('../assets/image/Jyotisika.png')}
                            style={{ height: hp('15%'), width: wp('30%') }}
                        />
                        <Button title="Close" onPress={closeThankYouModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: hp('2%'),
        backgroundColor: '#f8f9fa',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginTop: '-4%'
    },
    Jtext: {
        marginLeft: hp("2%"),
        color: "#000",
        fontWeight: "bold",
        fontSize: hp("2.5%"),
    },
    list: {
        paddingVertical: hp('2%'),
    },
    chatCard: {
        flexDirection: "row",
        alignItems: "center",
        padding: hp('2%'),
        backgroundColor: "#fff",
        marginVertical: hp('1%'),
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 2,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    chatContent: {
        flex: 1,
    },
    name: {
        fontSize: hp('2.2%'),
        fontWeight: "bold",
        color: "#000",
    },
    message: {
        fontSize: hp('2%'),
        color: "#7d7d7d",
    },
    rightSection: {
        alignItems: "flex-end",
    },
    time: {
        fontSize: hp('2%'),
        color: "#7d7d7d",
    },
    badge: {
        backgroundColor: "#4CAF50",
        borderRadius: 12,
        paddingVertical: hp('.1%'),
        paddingHorizontal: hp('1%'),
        marginTop: hp('2%'),
    },
    badgeText: {
        fontSize: hp('2%'),
        color: "#fff",
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: hp('3%'),
        alignItems: "center",
    },
    modalTitle: {
        fontSize: hp('2.2%'),
        color: '#000',
        fontWeight: "bold",
        marginBottom: hp('2%'),
    },
    starContainer: {
        flexDirection: "row",
        marginBottom: hp('2%'),
    },
    reviewText: {
        color: '#000',
        fontSize: hp('2%'),
        fontWeight: 'bold',
        marginBottom: hp('2%')
    },
    textInput: {
        width: "100%",
        borderWidth: 2,
        borderColor: "#000",
        color: '#000',
        borderRadius: 5,
        padding: hp('2%'),
        marginBottom: hp('2%'),
        textAlignVertical: "top",
    },

});

export default RecentChat;
