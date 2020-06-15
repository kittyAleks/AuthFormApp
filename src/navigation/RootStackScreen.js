import React  from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../components/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LinearGradient from "react-native-linear-gradient";
import MainScreen from '../screens/MainScreen';

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
            component={MainScreen}
            options={{
                headerTitle: 'Main Screen',
                ...defaultOptions
            }}
        />
    </RootStack.Navigator>
);
export default RootStackScreen

const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});

