import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



const PujariProfile = ({ navigation }) => {
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = () => {
        if (!isFollowed) {

        }
        setIsFollowed(!isFollowed); // Toggle the follow state
    };
    // const renderReview = ({ item }) => (
    //     <View style={styles.reviewCard}>
    //         <Image source={{ uri: item.image }} style={styles.reviewImage} />
    //         <View style={styles.reviewContent}>
    //             <Text style={styles.reviewerName}>{item.name}</Text>
    //             <Text style={styles.reviewDate}>{item.date}</Text>
    //             <Text style={styles.reviewText}>{item.review}</Text>
    //             <View style={styles.ratingContainer}>
    //                 {Array.from({ length: item.rating }).map((_, index) => (
    //                     <Text key={index} style={styles.star}>
    //                         ★
    //                     </Text>
    //                 ))}
    //             </View>
    //         </View>
    //     </View>
    // );


    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.component}>
                    <TouchableOpacity onPress={() => navigation.navigate('OnlineOfflineBookPooja')}>
                        <AntDesign name='arrowleft' size={20} color='#000' />
                    </TouchableOpacity>
                    <Text style={styles.Jtext}>Profile</Text>
                    <Text style={styles.balance}>₹ 50</Text>
                    <TouchableOpacity style={styles.settings}>
                        <Fontisto name="language" size={15} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name="customerservice" size={22} color='#000' />
                    </TouchableOpacity>

                </View>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/image/jane.png')}
                        style={styles.profileImage}
                    />
                    <View style={styles.headerContent}>
                        <Text style={styles.profileName}>John Doe</Text>
                        <View style={styles.ratingRow}>
                            <Text style={styles.star}>
                                ★
                            </Text>
                            <Text style={styles.rating}> 4.5</Text>
                            <Text style={styles.orders}> | 15003 orders</Text>
                        </View>

                        <View style={styles.ratingRow}>
                            <AntDesign name='user' size={20} color='#000' />
                            <Text style={styles.followers}>1200 followers</Text>
                        </View>

                        <View style={styles.ratingRow}>
                            <EvilIcons name='clock' size={20} color='#000' />
                            <Text style={styles.specialization}>Vedic, Numerology, Tarot</Text>
                        </View>


                    </View>
                    <TouchableOpacity
                        style={[styles.followButton, isFollowed && styles.followedButton]}
                        onPress={handleFollow}
                    >
                        {isFollowed ? (
                            <AntDesign name="check" size={20} color="#fff" />
                        ) : (
                            <Text style={styles.followText}>FOLLOW</Text>
                        )}
                    </TouchableOpacity>
                </View>

                {/* Info Section */}
                <View style={styles.footer}>

                    <View style={styles.footerStats}>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>Hindi,English</Text>
                            <Text style={styles.statNumber}>Marathi</Text>
                            <Text style={styles.statLabel}>Languages</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>50/min+</Text>
                            <Text style={styles.statLabel}>Price</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>23 yrs+</Text>
                            <Text style={styles.statLabel}>Experience</Text>
                        </View>
                    </View>
                </View>


                {/* About Section */}
                <View style={styles.aboutSection}>
                    <Text style={styles.statNumber}>About</Text>
                    <Text style={styles.aboutText}>
                        Worem ipsum dolor sit amet, consectetur adipiscing elit. Velit interdu
                        matti.
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.showMore}>Show more</Text>
                    </TouchableOpacity>
                </View>

                {/* Gallery Section */}

                <FlatList
                    data={[
                        { id: '1', image: require('../../assets/image/kundali.png'), type: 'local' },
                        { id: '2', image: require('../../assets/image/kundali.png'), type: 'local' },
                        { id: '3', image: require('../../assets/image/kundali.png'), type: 'local' },
                    ]}
                    horizontal
                    renderItem={({ item }) => (
                        <Image
                            source={item.image}
                            style={{ width: 100, height: 100, margin: 10 }}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
                {/* camera Section */}
                <View style={styles.Videocamera}>
                    <TouchableOpacity>
                        <AntDesign name="videocamera" size={22} color='#000' />
                    </TouchableOpacity>
                    <View style={styles.Videostyle}>
                        <Text style={styles.Videocall}>VideoCall</Text>
                        <Text style={styles.Videocall}>₹50/min</Text>
                    </View>
                </View>
                <Text style={styles.sectionTitle}>User Reviews</Text>
                <ScrollView horizontal contentContainerStyle={styles.reviewList}>
                    <View style={styles.reviewSection}>

                        <View>
                            <Text style={styles.reviewText}>
                                The astrologer provided incredible insights into my life and personality.
                                Their predictions about my career path were spot-on, and their guidance helped me make better decisions.
                                Highly recommend for anyone seeking clarity!
                            </Text>
                            <View style={styles.reviewHeader}>
                                <Image
                                    source={require('../../assets/image/jane.png')}
                                    style={styles.profileImage}
                                />
                                <Text style={styles.reviewerName}>Jane Doe|3 year ago</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.reviewSection}>
                        <View>
                            <Text style={styles.reviewText}>
                                The astrologer provided incredible insights into my life and personality.
                                Their predictions about my career path were spot-on, and their guidance helped me make better decisions.
                                Highly recommend for anyone seeking clarity!
                            </Text>
                        </View>
                        <View style={styles.reviewHeader}>
                            <Image
                                source={require('../../assets/image/jane.png')}
                                style={styles.profileImage}
                            />
                            <Text style={styles.reviewerName}>Jane Doe|3 year ago</Text>
                        </View>

                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.chatButton} onPress={() => navigation.navigate('BookPoojaform')}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    component: {
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
    profilePic: {
        width: wp('10%'),
        height: hp('6%'),
        borderRadius: wp(5),
    },
    balance: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#000'
    },
    Jtext: {
        marginRight: hp('20%'),
        color: '#000',
        fontWeight: 'bold',
    },
    settings: {
        backgroundColor: '#FFD700',
        padding: wp('2%'),
        borderRadius: wp(2),

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('4%'),
    },
    profileImage: {
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: wp('10%'),
    },
    headerContent: {
        flex: 1,
        marginLeft: wp('4%'),
    },
    profileName: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: '#000'
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: wp('4%'),
        color: '#FFD700',
    },
    orders: {
        fontSize: wp('3.5%'),
        color: '#666',
    },
    followers: {
        fontSize: wp('3.5%'),
        color: '#666',
    },
    specialization: {
        fontSize: wp('3.5%'),
        color: '#000',
    },
    followButton: {
        backgroundColor: '#FFD700',
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('5%'),
        borderRadius: wp('2%'),
    },
    followText: {
        color: '#000',
        fontWeight: 'bold',
    },
    infoSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: wp('4%'),
        backgroundColor: '#f9f9f9',
    },
    infoText: {
        fontSize: wp('4%'),
        color: '#000',

    },
    aboutSection: {
        padding: wp('4%'),
    },
    aboutText: {
        fontSize: wp('4%'),
        color: '#666',
    },
    showMore: {
        fontSize: wp('4%'),
        color: '#007BFF',
    },
    gallery: {
        marginVertical: hp('2%'),
    },
    galleryImage: {
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: wp('2%'),
        marginHorizontal: wp('2%'),
    },
    reviewList: {
        paddingHorizontal: wp('4%'),
    },
    reviewCard: {
        flexDirection: 'row',
        marginBottom: hp('2%'),
        backgroundColor: '#f9f9f9',
        borderRadius: wp('2%'),
        padding: wp('3%'),
    },
    reviewImage: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('6%'),
        marginRight: wp('4%'),
    },
    reviewContent: {
        flex: 1,
    },
    reviewerName: {
        fontSize: wp('4%'),
        fontWeight: 'bold',
    },
    reviewDate: {
        fontSize: wp('3.5%'),
        color: '#666',
    },
    reviewText: {
        fontSize: wp('4%'),
        color: '#000',
        marginVertical: hp('1%'),
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    star: {
        fontSize: wp('4%'),
        color: '#000',
    },
    footer: {
        backgroundColor: '#fff',
        paddingVertical: hp('2%'),
        alignItems: 'center',
        //marginTop: hp('13%'),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    footerText: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        // marginBottom: '10%',
        color: '#000'
    },

    footerStats: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: wp('100%'),
    },
    statBox: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: hp('2%'),
        fontWeight: '500',
        color: '#000'
    },
    statLabel: {
        fontSize: hp('2%'),
        color: '#000'
    },
    Videocamera: {
        flexDirection: 'row',
        marginBottom: hp('2%'),
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: wp('2%'),
        borderRadius: wp('4%'),
        marginHorizontal: wp('4%'),
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    Videostyle: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: wp('3%'),
    },

    Videocall: {
        color: '#000',
        fontSize: wp('4%'),
        fontWeight: 'bold',
        marginBottom: hp('0.5%'),
    },
    reviewList: {
        flexDirection: 'row',
        paddingHorizontal: wp('4%'),
        alignItems: 'center',
    },

    reviewSection: {
        backgroundColor: '#f9f9f9',
        borderRadius: wp('2%'),
        padding: wp('4%'),
        marginRight: wp('4%'),
        width: wp('80%'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },

    sectionTitle: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
        color: '#000',
        marginLeft: hp('2%')
    },

    reviewText: {
        fontSize: wp('4%'),
        color: '#000',
        marginBottom: hp('1%'),
    },

    profileImage: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('6%'),
        marginTop: hp('1%'),
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    star: {
        fontSize: wp('4%'),
        color: '#FFD700',
    },
    reviewerName: {
        fontSize: wp('4%'),
        fontWeight: 'bold',
        color: '#000',
    },
    reviewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('1%'),
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: hp('5%'),
        alignItems: 'center',
        marginTop: hp('1%'),
    },

    chatButton: {
        backgroundColor: '#FFCC00',
        paddingVertical: hp('1%'),
        margin: hp('5%'),
        borderRadius: wp('2%'),
    },

    buttonText: {
        fontSize: wp('3.5%'),
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',

    },
});

export default PujariProfile;


// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     TouchableOpacity,
//     StyleSheet,
//     SafeAreaView,
//     ScrollView
// } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';


// const PujariProfile = () => {
//     const [isFollowed, setIsFollowed] = useState(false);

//     // Play the sound when the button is clicked
//     const playSound = () => {
//         const sound = new Sound('success_tone.mp3', Sound.MAIN_BUNDLE, (error) => {
//             if (error) {
//                 console.error('Failed to load the sound', error);
//                 return;
//             }
//             sound.play(() => {
//                 sound.release(); // Release the sound resource after playing
//             });
//         });
//     };

//     const handleFollow = () => {
//         if (!isFollowed) {
//             playSound(); // Play the sound only when clicking "Follow"
//         }
//         setIsFollowed(!isFollowed); // Toggle the follow state
//     };

//     return (
//         <ScrollView>
//             <SafeAreaView style={styles.container}>
//                 <View style={styles.header}>
//                     <Image
//                         source={require('../../assets/image/jane.png')}
//                         style={styles.profileImage}
//                     />
//                     <View style={styles.headerContent}>
//                         <Text style={styles.profileName}>John Doe</Text>
//                     </View>

//                     {/* Follow Button */}
//                     <TouchableOpacity
//                         style={[styles.followButton, isFollowed && styles.followedButton]}
//                         onPress={handleFollow}
//                     >
//                         {isFollowed ? (
//                             <AntDesign name="check" size={20} color="#fff" />
//                         ) : (
//                             <Text style={styles.followText}>FOLLOW</Text>
//                         )}
//                     </TouchableOpacity>
//                 </View>
//             </SafeAreaView>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 20,
//     },
//     profileImage: {
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//     },
//     headerContent: {
//         flex: 1,
//         marginLeft: 20,
//     },
//     profileName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     followButton: {
//         backgroundColor: '#FFD700',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 10,
//     },
//     followedButton: {
//         backgroundColor: 'green',
//     },
//     followText: {
//         color: '#fff',
//         fontWeight: 'bold',
//     },
// });

// export default PujariProfile;
