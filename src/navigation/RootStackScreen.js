import React  from 'react'
import { StyleSheet } from 'react-native'

/* Components */
import SplashScreen from '../components/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const defaultOptions = {
    headerStyle: {
        backgroundColor: '#F69493',
    },

    headerTintColor: '#fff',
    headerTitleStyle: {
        fontSize: 20
    }
}

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const RootStackScreen = () => (
    <RootStack.Navigator>
        <RootStack.Screen name='Back' options={{
            headerShown: false
        }} component={SplashScreen} />
        <RootStack.Screen
            name='SignIn'
            component={SignInScreen}
            options={{
                headerTitle: 'Sign in',
                ...defaultOptions
            }}
        />
        <RootStack.Screen
            name='SignUp'
            component={SignUpScreen}
            options={{
                headerTitle: 'Registration',
                ...defaultOptions
            }}
        />
        <RootStack.Screen
            name='MainScreen'
            component={AllTabNavigation}
            options={{
                headerTitle: 'Hello guys',
                ...defaultOptions
            }}
        />
    </RootStack.Navigator>
);

const MainStack = createStackNavigator();
const MainNavigator = () => (
    <MainStack.Navigator>
        <MainStack.Screen
            name='MainScreen'
            component={MainScreen}

        />
    </MainStack.Navigator>
);
const SettingsStack = createStackNavigator();
const SettingsNavigator = () => (
    <SettingsStack.Navigator>
        <SettingsStack.Screen
            name='SettingsScreen'
            component={SettingsScreen}
        />
    </SettingsStack.Navigator>
);

const AllTabNavigation = () => (
    <Tab.Navigator
        barStyle={{
            backgroundColor: 'white',
        }}
        tabBarOptions={{
            paddingTop: 20,
            activeTintColor: 'white',
            // showLabel: false
            style: {
                height: 80,
                paddingTop: 5,
                backgroundColor: "rgba(255,125,41,0.54)",
            },
        }}>

        <Tab.Screen
            name='MainScreen'
            component={MainNavigator}
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-home" color={'white'} size={20} />
                ),
            }}
        />
        <Tab.Screen
            name='Settings'
            component={SettingsNavigator}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-settings" color={'white'} size={20} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default RootStackScreen

