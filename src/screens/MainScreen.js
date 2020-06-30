import React, {useState, useEffect} from 'react'
import {View, StyleSheet, ImageBackground, Image, ScrollView, Alert, Button, FlatList} from 'react-native'
import {Container, Input, InputGroup, Text} from 'native-base'
import {DATA} from "../data";
import {MainProductList} from "../components/MainProductList";
// import * as firebase from "firebase";
import LinearGradient from "react-native-linear-gradient";

export default function MainScreen({navigation, route}) {
    // const item  = route.params;
    console.log('QQQ MainScreen route.params', route.params)

    const signOut = () => {
        // fetch('http://localhost/signout',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        // })
        //     .then((result) => {
        //         console.log('AAA signOut result',result);
        //     })
        //     .catch((err) => {
        //         console.log('Ошибка', err.message);
        //     });

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
                        fetch('http://localhost/signout',{
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                        })
                            .then((result) => {

                                console.log('AAA signOut result',result);
                                if(result.ok) {
                                    navigation.navigate('Back');
                                }
                            })
                            .catch((err) => {
                                console.log('Ошибка', err.message);
                            });
                    },
                },
            ],
            {cancelable: false}
        );

    };
    // firebase.auth().signOut().then(() => {
    //     navigation.navigate('Back')
    // })
    //     .catch((err) => {
    //         console.log('Ошибка', err.message)
    //     })
    //     .catch(error => this.setState({errorMessage: error.message}))

    // useEffect(() => {
    //     setEmail(firebase.auth().currentUser.email)
    // }, []);

    const openProductCategoryScreen = item => {
        console.log('EEE ITEM', item)
        navigation.navigate('ProductCategoryScreen', {
            item: item,
            // liked_by_user: item.liked_by_user
        })
    };
    return (
        <Container style={{
            flex: 1,
        }}>
            <View>
                <ImageBackground
                    style={{flex: 1, width: '100%', height: 1000}}
                    resizeMode='cover'
                    source={require('../../src/img/main_image.jpg')}
                    blurRadius={2}>
                </ImageBackground>
            </View>
            <View style={{flex: 1}}>
                <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>Hello</Text>
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => item.id.toString()}
                    renderItem={({item}) =>
                        <MainProductList item={item} onOpen={openProductCategoryScreen}
                        />
                    }
                />
            </View>
            <Button title='Logout' size={30} onPress={signOut} color={'white'}/>
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


