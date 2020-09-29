import React, {useState, useEffect} from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    Alert,
    Button,
    FlatList,
    ActivityIndicatorComponent, ActivityIndicator
} from 'react-native'
import {Container, Input, InputGroup, Text} from 'native-base'
import {DATA} from "../data";
import {MainProductList} from "../components/MainProductList";
// import * as firebase from "firebase";
import LinearGradient from "react-native-linear-gradient";

export default function MainScreen({navigation, route}) {
    // const item  = route.params;
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllProducts();

    }, []);

    let getAllProducts = async () => {
        await fetch('http://localhost/getallproducts', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then((result) => {
                const res = result.result;
                setAllProducts(res);
                setIsLoading(false)
            })
            .catch((err) => {
                console.log('[Error]', err.message);
            });
    };

    console.log('AAA allProducts', allProducts);


    // let updateChat = async () => {
    //     let res = await fetch('http://localhost/get_all', {
    //         method: 'GET',
    //         headers: {'Content-Type': 'application/json'},
    //     });
    //     let messages = await res.json();
    //     messages.reverse();
    //     let i = 0;
    //     setMessages(messages.map(messageText => ({
    //         _id: ++i,
    //         text: messageText,
    //         user: {
    //             _id: 1,
    //             name: 'TestUser',
    //             avatar: 'https://placeimg.com/140/140/any',
    //         },
    //     })));
    // };


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

    const openProductCategoryScreen = item => {
        console.log('EEE openProductCategoryScreen item', item)
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
            {isLoading ?
                <View>
                    <ActivityIndicator size='large' color={'#ffffff'}/>
                </View> :
                <View style={{flex: 1}}>
                    <FlatList
                        data={allProducts}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({item}) => {
                            return <MainProductList item={item} onOpen={openProductCategoryScreen}
                            />
                        }}
                    />
                </View>
            }
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


