import React, {useEffect, useState} from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

export default function SettingsScreen({navigation}) {
    navigation.setOptions({
        headerTitle: () => (
            <TouchableOpacity>
                <Text style={{
                    fontSize: 45,
                    bottom: 10,
                    color: '#fff',
                }}>Viround</Text>
            </TouchableOpacity>
        ),
    })

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
                            SettingsScreen
                        </Text>
                    </View>

                </ScrollView>
            </View>

        </Container>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        color: 'white'
    },
    mainTextStyle: {
        flexDirection: 'column',
        paddingHorizontal: 30,
        textAlign: 'center',
        paddingVertical: 200,
    },
    inputGroupStyle: {
        marginTop: 15,
        borderRadius: 10,
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        opacity: 0.7,
        overflow: 'hidden'
    },
    button: {
        marginLeft: 5,
        marginTop: 30,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        opacity: 0.7,
        borderWidth: 1,
        borderColor: '#fff'
    },
    buttonSignUp: {
        backgroundColor: '#ff9c9b'
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


