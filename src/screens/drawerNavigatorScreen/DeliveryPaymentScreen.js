import React, {useEffect, useState} from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'

export default function DeliveryPaymentScreen({navigation}) {
    return (
        <Container style={{
            flex: 1,
        }}>
            <View>
                <ImageBackground
                    style={{ flex: 1, width: '100%', height: 1000}}
                    resizeMode='cover'
                    source={require('../../src/img/main_image.jpg')}
                    blurRadius={2}>
                </ImageBackground>
                <ScrollView style={styles.mainTextStyle}>
                    <View style={styles.center}>
                        <Text style={styles.title}>Welcome</Text>
                        <Text style={{ ...styles.title, ...styles.info }}>
                            ContactScreen
                        </Text>
                    </View>
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


