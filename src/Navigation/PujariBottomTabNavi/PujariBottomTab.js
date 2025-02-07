import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LiveScreen from '../../Screen/AstroBottomTab/LiveScreen';
import UserChatList from '../../Screen/AstroBottomTab/UserChatList';
import AstrologerProfile from '../../Screen/AstroBottomTab/AstrologerProfile';
import PujariHomeScreen from '../../Screen/PujariBottomTabScreen/PujariHomeScreen';
import { PoojaIcon, Poojas } from '../../Component/Horoscopeicon';
import PoojasScreen from '../../Screen/PujariBottomTabScreen/PoojasScreen';
import PujariAnalyticsScreen from '../../Screen/PujariBottomTabScreen/PujariAnalyticsScreen';
import PujariEarningsScreen from '../../Screen/PujariBottomTabScreen/PujariEarningsScreen';



const Tab = createBottomTabNavigator();

const PujariBottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    elevation: 10,
                    backgroundColor: '#FF9500',
                    height: '7%',
                    // Add shadow styles if needed
                }
            }}>
            <Tab.Screen
                name="PujariHome"
                component={PujariHomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.label, focused && styles.labelFocused]}>Home</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconWrapper}>
                            <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                                <HomeIcon
                                    name='home'
                                    color={focused ? '#000' : 'white'}
                                    size={28}
                                    style={{ alignSelf: 'center' }}
                                />
                            </View>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="PoojasScreen"
                component={PoojasScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.label, focused && styles.labelFocused]}>Pooja's</Text>
                    ),
                    tabBarIcon: ({ focused, size }) => (
                        <View style={styles.iconWrapper}>
                            <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                                <Poojas size={size} color={focused ? '#000' : '#fff'} />
                            </View>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="PujariAnalyticsScreen"
                component={PujariAnalyticsScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.label, focused && styles.labelFocused]}>Analytics</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.iconWrapper}>
                            <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                                <FontAwesome name="line-chart"
                                    size={20}
                                    color={focused ? '#000' : '#fff'}
                                    style={{ height: 25, width: 25, alignSelf: 'center' }}
                                />
                            </View>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="PujariEarningsScreen"
                component={PujariEarningsScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text style={[styles.label, focused && styles.labelFocused]}>Earnings</Text>
                    ),
                    tabBarIcon: ({ focused, size }) => (
                        <View style={styles.iconWrapper}>
                            <View style={[styles.iconContainer, focused && styles.iconFocused]}>
                                <FontAwesome6
                                    name="hand-holding-dollar"
                                    size={20}
                                    color={focused ? '#000' : '#fff'}
                                    style={{ height: 25, width: 25, alignSelf: 'center' }}
                                />
                            </View>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 5,
        borderColor: 'transparent',
    },
    iconFocused: {
        borderColor: 'white',
    },
    label: {
        color: '#fff',
        fontSize: 10,
        marginTop: '2%',
        fontWeight: 'bold'
    },
    labelFocused: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: '5%',
    },
});

export default PujariBottomTab;
