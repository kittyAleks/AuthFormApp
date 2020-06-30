import React, {useEffect, useState } from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import {Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon, Button} from 'native-base'
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ProductCategoryScreen({navigation, route}) {

    const { item } = route.params;
    console.log('EEE ProductCategoryScreen item', item.list_products_in_category );

    return (
        <Container style={{
            flex: 1,
        }}>
            <View>
                <ImageBackground
                    style={{ flex: 1, width: '100%', height: 1000}}
                    resizeMode='cover'
                    source={require('../img/product_categ_img.jpg')}
                    blurRadius={1}>
                </ImageBackground>
                <InputGroup style={{marginTop: 6, paddingLeft: 25, paddingRight: 25, marginBottom: 10}} borderType='regular'>
                    <Input
                        style={styles.inputStyle}
                        placeholderTextColor = {"#909090"}
                        borderType='regular'
                        // value={searchText}
                        autoCapitalize="none"
                        autoCorrect={false}
                        // onChangeText={onSearchNameTextChange}
                        placeholder='Search by name'/>
                </InputGroup>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        {item.list_products_in_category.map(item => {
                            return <View key={item.id}>
                                <TouchableOpacity onPress={() => navigation.navigate('DetailProductScreen', {item: item})}>
                                    <Image style={styles.imageContainer}
                                           source={{ uri: item.product_image_in_category }}/>
                                        <View style={styles.textContainer}>
                                            <Text style={{fontSize: 18, color: '#696969'}}>{item.product_name_in_category}</Text>
                                            <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
                                                <Text style={{fontSize: 20}}>{'$ '}{item.price_category}</Text>
                                                <Ionicons onPress={() => alert('hi')} style={{fontSize: 22, color: '#e9943b'}}
                                                          name={'md-heart'}/>

                                            </View>
                                        </View>
                                </TouchableOpacity>
                            </View>
                        })}
                    </View>
                </ScrollView>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        paddingLeft: 20,
        marginTop: 15,
        borderRadius: 10,
        height: 50,
        backgroundColor: 'white',
        opacity: 0.7
    },
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 50,
        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.7,
    },
    imageContainer: {
        opacity: 0.8,
        // shadowColor: '#000',
        // shadowRadius: 8,
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: 0.7,
        height: 190, width: 165,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        marginBottom: 30,
        backgroundColor: '#eeeeee',
        opacity: 0.9,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        height: 65,
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    buttonStyle: {
        height: 29,
        backgroundColor: 'transparent',
    },
});


