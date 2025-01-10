import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screen/Authntication/Splash';
import Login from '../Screen/Authntication/Login';
import SignUp from '../Screen/Authntication/SignUp';
import GetOTP from '../Screen/Authntication/GetOTP';
import Name from '../Screen/Authntication/Name';
import HomeScreen from '../Screen/HomeModule/HomeScreen';
import BottomTabNavigation from './BottomNavigation';
import App_Drawer_Navigation from './DrawerNavigation/App_Drawer_Navigation';
import BookPooja from '../Screen/DrawerScreen/BookPooja';
import Following from '../Screen/DrawerScreen/Following';
import Purches from '../Screen/DrawerScreen/Purches';
import PymentMethod from '../Screen/DrawerScreen/PymentMethod';
import Refertofriend from '../Screen/DrawerScreen/Refertofriend';
import SupportScreen from '../Screen/DrawerScreen/SupportScreen';
import ProfileScreen from '../DetailsScreen/ProfileScreen';
import Wallet from '../DetailsScreen/Wallet';
import PaymentInformation from '../DetailsScreen/PaymentInformation';
import Capricorn from '../DetailsScreen/Capricorn';
import Horoscope from '../Screen/DrawerScreen/Horoscope';
import Aquarius from '../DetailsScreen/Aquarius';
import Aries from '../DetailsScreen/Aries';
import Cancer from '../DetailsScreen/Cancer';
import Gemini from '../DetailsScreen/Gemini';
import Leo from '../DetailsScreen/Leo';
import Libra from '../DetailsScreen/Libra';
import Pisces from '../DetailsScreen/Pisces';
import Sagittarius from '../DetailsScreen/Sagittarius';
import Scorpio from '../DetailsScreen/Scorpio';
import Taurus from '../DetailsScreen/Taurus';
import Virgo from '../DetailsScreen/Virgo';
import KundaliMatching from '../DetailsScreen/KundaliMatching';
import LoveCalculator from '../DetailsScreen/LoveCalculator';
import Drawerprofile from '../Screen/DrawerScreen/Drawerprofile';
import Panchang from '../DetailsScreen/Panchang';



const App_Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SplashScreen'
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='GetOTP'
                component={GetOTP}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Name'
                component={Name}
                options={{ headerShown: false }}
            />
            {/*HomeModule*/}

            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='KundaliMatching'
                component={KundaliMatching}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='LoveCalculator'
                component={LoveCalculator}
                options={{ headerShown: false }}
            />


            <Stack.Screen
                name='Profile'
                component={ProfileScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Wallet'
                component={Wallet}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='PaymentInformation'
                component={PaymentInformation}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='BottomTabNavigation'
                component={BottomTabNavigation}
                options={{ headerShown: false }}
            />

            {/*DrawerScreen*/}


            <Stack.Screen
                name='App_Drawer_Navigation'
                component={App_Drawer_Navigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Horoscope'
                component={Horoscope}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='BookPooja'
                component={BookPooja}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Following'
                component={Following}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Purches'
                component={Purches}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='PymentMethod'
                component={PymentMethod}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Refertofriend'
                component={Refertofriend}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Support'
                component={SupportScreen}
                options={{ headerShown: false }}
            />
            {/*DrawerScreen*/}
            <Stack.Screen
                name='Capricorn'
                component={Capricorn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Aquarius'
                component={Aquarius}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Aries'
                component={Aries}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Cancer'
                component={Cancer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Gemini'
                component={Gemini}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Leo'
                component={Leo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Libra'
                component={Libra}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Pisces'
                component={Pisces}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Sagittarius'
                component={Sagittarius}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Scorpio'
                component={Scorpio}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Taurus'
                component={Taurus}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Virgo'
                component={Virgo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Drawerprofile'
                component={Drawerprofile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Panchang'
                component={Panchang}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>

    )
}

export default App_Navigation