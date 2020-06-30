import React, {useEffect, useState} from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import * as Animatable from 'react-native-animatable'
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function DetailProductScreen({route}) {
    // console.log('QQQ DetailProductScreen route.params', route.params)
    const { item } = route.params;
    console.log('QQQ DetailProductScreen route.params', item);

    return (
        <Container style={{
            flex: 1,
        }}>
            <View>
                <ImageBackground
                    style={{ flex: 1, width: '100%', height: 1000}}
                    resizeMode='cover'
                    source={require('../../src/img/detail_img.jpg')}
                    >
                </ImageBackground>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={{paddingTop: 10}}>
                            <Animatable.Image
                                animation="bounceIn"
                                duraton="1500"
                                source={{ uri: item.product_image_in_category }}
                                style={styles.imageStyle}/>
                        </View>
                        {/*<View style={{flexDirection: 'row'}}><Text>Hello</Text>*/}
                        {/*<Text>Hello</Text>*/}
                        {/*<Text>Hello</Text></View>*/}


                        <Animatable.View
                            style={[styles.footer, {
                                backgroundColor: 'white'
                            }]}
                            animation="fadeInUpBig"
                        >
                            <Text style={[styles.titleDescription, {color: 'green' } ]}>Product description for you!</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque pharetra laoreet erat, nec gravida leo tincidunt nec. Nulla in tincidunt odio.
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Pellentesque pharetra laoreet erat, nec gravida leo tincidunt nec. Nulla in tincidunt odio.
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                Nulla condimentum tortor eget nibh blandit, a cursus eros hendrerit. </Text>
                            <View style={styles.button}>
                                <TouchableOpacity onPress={()=> alert('Hello')}>
                                    <LinearGradient
                                        colors={['#F27527', '#F69493']}
                                        style={styles.buyNow}
                                    >
                                        <Text style={styles.textBuyNow}>Buy Now</Text>
                                        <Ionicons
                                            name="md-add"
                                            color="#fff"
                                            size={20}
                                        />
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </Animatable.View>


                    </View>
                </ScrollView>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: '#787878',
        shadowRadius: 5,
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 1.1,

    },
    imageStyle: {
        width: 380,
        height: 300,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 30,
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 40,
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: '100%',
        height: 450
    },

    titleDescription: {
        marginBottom: 10,
        color: '#05375a',
        fontSize: 28,
        fontWeight: 'bold',
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    buyNow: {
        width: 170,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textBuyNow: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 10,
    }
});


