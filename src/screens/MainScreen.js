import React, {useState, useEffect} from 'react'
import { View, StyleSheet, ImageBackground, Image, Alert, Button, FlatList, ActivityIndicator } from 'react-native'
import {Container, Input, InputGroup, Text} from 'native-base'
import {MainProductList} from "../components/MainProductList";
// import * as firebase from "firebase";
import { useDispatch, useSelector } from "react-redux"
import { getProducts, loadMoreProducts } from '../store/actions/mainProductsAction'

export default function MainScreen({navigation, route}) {
    // const item  = route.params;
    // const [allProducts, setAllProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     getAllProducts();
    //
    // }, []);

    // let getAllProducts = () => {
    //     fetch('http://localhost/getallproducts', {
    //         method: 'GET',
    //         headers: {'Content-Type': 'application/json'},
    //     })
    //         .then(res => res.json())
    //         .then((result) => {
    //             const res = result.result;
    //             setAllProducts(res);
    //             setIsLoading(false)
    //         })
    //         .catch((err) => {
    //             console.log('[Error]', err.message);
    //         });
    // };

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

    const dispatch = useDispatch();
    const products = useSelector(state => state.allProducts);
    const isLoading = useSelector(state => state.isLoading);
    useEffect( () => {
        getProducts(1)
            .then(products => {dispatch(products);
            }).catch(err => {
            console.log("ERR", err);
        });

    }, [dispatch]);

    console.log('AAA products', products);

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
        navigation.navigate('ProductCategoryScreen', {
            item: item,
            // liked_by_user: item.liked_by_user
        })
    };
    const renderFooter = () => {
        if(!isLoading) {
            return <View style={{paddingVertical: 30}}>
                <ActivityIndicator size='large' color={'#DD2000'}/>
            </View>
        } else return null
    };


    const showMore = (page) => {
        let pages = page + 1;
        loadMoreProducts(pages)
            .then(products => dispatch(products))
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
                    <FlatList
                        data={products}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={showMore}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={renderFooter}
                        renderItem={({item}) => {
                            return <MainProductList item={item} onOpen={openProductCategoryScreen}
                            />
                        }}
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


