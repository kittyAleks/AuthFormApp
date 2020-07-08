import React, {useEffect, useState} from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

export default function ProfileScreen({navigation, route}) {

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
                <ScrollView>

                <View style={styles.userInfoSection}>
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 15}}>
                        <Avatar.Image
                            source={{
                                uri: 'https://i-gency.ru/blog_images/redactor/2015/09/01/x/e6925e7702bee74df0eba5da6cde4902.jpg',
                            }}
                            size={120}
                            resizeMode='stretch'
                        />
                        <View>
                            <Title style={[styles.title, {
                                marginTop: 10,
                                marginBottom: 5,
                            }]}>Gabriel Macht</Title>
                        </View>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="map-marker-radius" color={"#A5A5A5"} size={20}/>
                        <Text style={styles.userInfoText}>Ukraine, Kiev</Text>
                    </View>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="phone" color="#A5A5A5" size={20}/>
                        <Text style={styles.userInfoText}>+(380) 99-751-22-22</Text>
                        <Entypo style={{marginLeft: 10}} name="edit" color="#A5A5A5" size={18}/>

                    </View>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="email" color={"#A5A5A5"} size={20}/>
                        <Text style={styles.userInfoText}>gabriel_macht@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={styles.infoBox}>
                        <Title>$100</Title>
                        <Caption>Wallet</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>12</Title>
                        <Caption>Orders</Caption>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <MaterialIcons name='payment' color="#FF6347" size={25}/>
                            <Text style={styles.menuItemText}>Payment</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <MaterialIcons name="share" color="#FF6347" size={25}/>
                            <Text style={styles.menuItemText}>Tell Your Friends</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.menuItem}>
                            <MaterialCommunityIcons name="account-check-outline" color="#FF6347" size={25}/>
                            <Text style={styles.menuItemText}>Support</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {navigation.navigate('Settings')}}>
                        <View style={styles.menuItem}>
                            <Ionicons name="ios-settings" color="#FF6347" size={25}/>
                            <Text style={styles.menuItemText}>Settings</Text>
                        </View>
                    </TouchableRipple>
                </View>
                </ScrollView>



            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    userInfoText: {
        color: '#eeeeee', marginLeft: 20, fontSize: 18
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 20,
        opacity: 0.8,
        shadowColor: '#ababab',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#eeeeee',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 26,
    },

});


