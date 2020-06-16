import React from 'react'
import { View, StyleSheet, ImageBackground, Image, ScrollView, Alert, Button } from 'react-native'
import { Container, Text } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';

export default function MainScreen({navigation}) {
    const signOut = () => {
        Alert.alert(
            'Logout',
            'Are you sure? You want to logout?',
            [
                {
                    text: 'Cancel',
                    onPress: () => {
                        return null;
                    },
                },
                {
                    text: 'Confirm',
                    onPress: () => {
                        AsyncStorage.clear();
                        navigation.navigate('Back');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <Container style={{
            flex: 1,
        }}>
            <View>
                <ImageBackground
                    style={{ flex: 1, width: '100%', height: 1000}}
                    resizeMode='cover'
                    source={require('../../src/img/222.jpg')}
                    blurRadius={2}>
                </ImageBackground>
                <ScrollView style={styles.mainTextStyle}>
                    <View style={styles.center}>
                        <Text style={styles.title}>Welcome</Text>
                        <Text style={{ ...styles.title, ...styles.info }}>
                            You are logged in as a registered user
                        </Text>
                    </View>
                    <Button title='Logout' size={30} onPress={signOut} color={'#ef003d'}/>

                </ScrollView>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    mainTextStyle: {
        flexDirection: 'column',
        paddingHorizontal: 30,
        textAlign: 'center',
        paddingVertical: 200,
    },
    titleSignUp: {
        color: 'white',
    },
    title: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center'
    },
    center: {
        paddingTop: 3,
    },
    info: {
        fontSize: 20,
        marginHorizontal: 20,
        margin: 20
    },
});


