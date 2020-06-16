import React, {useEffect, useState} from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import Swagger from 'swagger-client';

// import * as firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyDeNP4cEz68IBw-FPQbQT_atB1a8l4faWY",
//     authDomain: "testflatlist-5faf9.firebaseapp.com",
//     // databaseURL: "https://myapp-project-123.firebaseio.com",
//     // projectId: "auth-form-app",
//     // storageBucket: "myapp-project-123.appspot.com",
//     // messagingSenderId: "65211879809",
//     // appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
//     // measurementId: "G-8GSGZQ44ST"
// };
//
// firebase.initializeApp(firebaseConfig);

export default function SignUpScreen({navigation}) {
    navigation.setOptions({
        headerTitle: 'Sign up',
        headerBackground: () => <LinearGradient colors={['#F27527', '#F69493']} style={{height: '100%'}}/>,
    });

    const [data, setData] = useState({
        email: '',
        password: '',
        password_confirmation: '',
        checkTextInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });
    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

    var formRegistration = [];
    for (let key in data) {
        let encodedKey = encodeURIComponent(key);
        let encodedValue = encodeURIComponent(data[key]);
        formRegistration.push(encodedKey + '=' + encodedValue);
    }
    formRegistration = formRegistration.join('&');
    console.log('AAA formRegistration', formRegistration);

    const handleSubmitButton = () => {
        if (!data.email || data.email.length < 3) {
            alert('Please enter your Email');
            return;
        } else if (!data.password) {
            alert('Please enter your Password');
            return;
        } else if (!data.password_confirmation) {
            alert('Please repeat your Password');
            return;
        }
        // firebase
        //     .auth()
        //     .createUserWithEmailAndPassword(data.email, data.password)
        //     .then((res) => {
        //         console.log('EEE res', res);
        //         console.log('User registered successfully!')
        //         setData({
        //             email: '',
        //             password: ''
        //         });
        //         navigation.navigate('SignIn')
        //     })
        //     .catch((err) => {
        //         console.log('Ошибка', err.message)
        //     })
        Swagger({ url: 'https://dev.addictivelearning.io/docs/api-docs.json' })
            .then((client) => {
            console.log('QQQ client', client);
            client.apis.auth.post_api_v1_register({
                method: 'POST',
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
            }).then(response => {
                console.log('QQQ response', response)
                    if (response.status === 200) {
                        setIsRegistraionSuccess(true);
                        navigation.navigate('SignIn');
                        console.log('Registration super');
                    } else {
                        console.log('Registration Unsuccessful');
                    }
            }) .catch((err) => {
                console.log('Ошибка', err.response)
            })
        });

    };
    // if (isRegistraionSuccess) {
    //     return (
    //         <View
    //             style={{
    //                 flex: 1,
    //                 backgroundColor: '#307ecc',
    //                 justifyContent: 'center',
    //             }}>
    //
    //             <Text>Registration Successful.</Text>
    //             <TouchableOpacity
    //                 style={styles.buttonStyle}
    //                 activeOpacity={0.5}
    //                 onPress={() => navigation.navigate('SignIn')}>
    //                 <Text style={styles.buttonTextStyle}>Login Now</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }


    const handleEmailChange = (val) => {
        console.log('Email value', val)
        if(val.length !== 0) {
            setData({
                ...data,
                email: val,
                checkTextInputChange: true,
            })
        } else {
            setData({
                ...data,
                email: val,
                checkTextInputChange: false,
            })
        }
    };

    const handlePasswordChange = (val) => {
        console.log('Password value', val)
        setData({
            ...data,
            password: val,
        })
    };
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            password_confirmation: val,
        })
    };
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry

        })
    };
    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry

        })
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
                                onChangeText={handleEmailChange}
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
                    <InputGroup style={styles.inputGroupStyle}>
                        <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                            {data.confirm_secureTextEntry ?
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
                            onChangeText={handleConfirmPasswordChange}
                            placeholder='Confirm password'/>
                    </InputGroup>
                    <Button
                        title='SIGN UP'
                        onPress={handleSubmitButton}
                        buttonStyle={{ ...styles.button, ...styles.buttonSignUp }}
                        titleStyle={styles.titleSignUp}
                    />
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
    inputGroupStyle: {
        paddingBottom: 5,
        marginTop: 15,
        borderRadius: 10,
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        opacity: 0.7,
        overflow: 'hidden'
    },
    button: {
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


