import React, {useEffect, useState, useRef } from 'react'
import {View, Keyboard, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, TextInput, Button} from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import {HeaderButton, HeaderButtons, Item} from 'react-navigation-header-buttons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {THEME} from "../theme"

export default function NewsScreen({navigation}) {

    return (
        /* Keyboard.dismiss - закрывает автом-и клавиатуру после ввода текста */
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Сreate a new user</Text>
                <View style={styles.textAreaContainer}>
                    <TextInput
                        style={styles.textArea}
                        underlineColorAndroid="transparent"
                        placeholder='Enter text'
                        placeholderTextColor="#8f9bae"
                        numberOfLines={10}
                        multiline={true}
                        // onChangeText={setText}
                        // value={text}
                    />
                </View>
            </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}
NewsScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'News',
    headerLeft: (
        <HeaderButtons>
            <Ionicons style={{paddingLeft: 20}} onPress={() => navigation.toggleDrawer()} name='ios-menu' color='white' size={25} />
        </HeaderButtons>
    )
});
const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
        color: '#525252'
    },
    textAreaContainer: {
        width: '100%',
        borderRadius: 5,
        borderColor: '#d2dadd',
        borderWidth: 1,
        paddingHorizontal: 5,
        paddingTop: 6,
        paddingBottom: 11,
    },
    textArea: {
        width: '100%',
        fontSize: 16,
        paddingHorizontal: 10,
    },
    imageStyle: {
        width: 350,
        height: 350,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: 'center',
        marginVertical: 20
    }
});


