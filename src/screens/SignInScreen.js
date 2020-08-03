import React, {useContext, useEffect, useState} from 'react'
import { View, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import {MainContext} from "../context/mainContext";

export default function SignInScreen({navigation, route}) {
    // const item  = route.params;
    // console.log('QQQ SignInScreen route.params', item)
    // console.log('QQQ SignInScreen item', item)

    navigation.setOptions({
        headerTitle: 'Sign in',
        headerBackground: () => <LinearGradient colors={['#F27527', '#F69493']} style={{ height: '100%' }} />,
    });

    // const [data, setData] = useState({
    //     email: '',
    //     password: '',
    //     checkTextInputChange: false,
    //     secureTextEntry: true
    // });
    const [data, setData, requestOptions] = useContext(MainContext);

    const textInputChange = (value) => {
        if(value.length === 0) {
            setData({
                email: value,
                ...data,
                checkTextInputChange: false,
            })
        } else {
            setData({
                ...data,
                email: value,
                checkTextInputChange: true,
            })
        }
};
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        })
    };
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    };

    var formSignIn = [];
    for (let key in data) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(data[key]);
        formSignIn.push(encodedKey + '=' + encodedValue);
    }
    formSignIn = formSignIn.join('&');

     const handleSubmitSignIn = async () => {
        if (!data.email || data.email.length < 3) {
            alert('Please enter your Email');
            return;
        } else if (!data.password) {
            alert('Please enter your Password');
            return;
        }

        await fetch('http://localhost/login', requestOptions )
            .then(result => {
                console.log('AAA SignIn result', result);
                // setData({
                //     email: result.email,
                //     password: result.password,
                //     password_confirmation: result.password_confirmation,
                // });
                if (result.ok) {
                    navigation.navigate('MainScreen',  {data: data})
                } else {
                    alert('Enter the data again');
                }
            })
            .catch((err) => {
                console.log('Ошибка', err.message);
            });
    };

     const loginFb = async () => {
         try {
             let result = LoginManager.logInWithPermissions(['public_profile'])
             if (result.isCancelled) {
                 alert('Login was cancelled');
             } else {
                 alert('Login was successful with permissions: '
                     + result.grantedPermissions.toString());
             }
         } catch (e) {
             console.log('Login failed with error: ' + e.message);
         }
     }

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
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={{ ...styles.title, ...styles.info }}>
                        Log in with your account
                    </Text>
                </View>

                <View>
                    <InputGroup style={styles.inputGroupStyle}>
                        {data.checkTextInputChange ?
                            <Ionicons style={{paddingRight: 10}} name='ios-checkmark-circle' color={'#F27527'} size={25}/> :
                            <Ionicons style={{paddingRight: 10}} name='ios-checkmark-circle-outline' color={'#F27527'} size={25}/> }
                        <Input
                            style={styles.inputStyle}
                            placeholderTextColor = {"#909090"}
                            // value={searchText}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={textInputChange}
                            placeholder='Email'
                        />
                    </InputGroup>
                </View>

                <InputGroup style={styles.inputGroupStyle}>
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Ionicons style={{paddingRight: 10}} name='ios-eye-off' color={'#F27527'} size={25}/> :
                            <Ionicons style={{paddingRight: 10}} name='ios-eye' color={'#F27527'} size={25}/>
                        }
                    </TouchableOpacity>
                    <Input
                        style={styles.inputStyle}
                        placeholderTextColor = {"#909090"}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={handlePasswordChange}
                        placeholder='Password'/>
                </InputGroup>
                <Button
                    title='SIGN IN'
                    onPress={handleSubmitSignIn}
                    buttonStyle={{ ...styles.button, ...styles.buttonSignUp }}
                    titleStyle={styles.titleSignUp}
                />

                <View>
                    <Button
                        title='Login Facebook'
                        onPress={loginFb}
                        buttonStyle={{ ...styles.button, ...styles.buttonSignUp }}
                        titleStyle={styles.titleSignUp}
                    />

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


