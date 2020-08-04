import React, {useEffect, useState} from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import LinearGradient from "react-native-linear-gradient"
import ImagePicker from 'react-native-image-crop-picker'

export default function ProfileScreen({navigation, route}) {
    let bs = React.createRef();
    console.log('QQQ bs', bs);
    let fall = new Animated.Value(1);
    console.log('QQQ fall', fall);

    const [inputText, setInputText] = useState({
        location: '',
        email: '',
        phone: '',
    });
    const [image, setImage] = useState('https://i-gency.ru/blog_images/redactor/2015/09/01/x/e6925e7702bee74df0eba5da6cde4902.jpg');

    const handleLocationChange = (val) => {
        console.log('Password value', val)
        setInputText({
            ...inputText,
            location: val,
        })
    };
    const handleEmailChange = (val) => {
        console.log('email value', val)
        setInputText({
            ...inputText,
            email: val,
        })
    };
    const handlePhoneChange = (val) => {
        console.log('phone value', val)
        setInputText({
            ...inputText,
            phone: val,
        })
    };
    const choosePhotoFromLibrary = () => {
        console.log('ImagePicker ', ImagePicker);
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log('QQQ image',image);
            setImage(image.path);
            //bs.current.snapTo(1);
        });
    }

    const renderContent = () => (
        <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity>
                <LinearGradient
                    colors={['#F27527', '#F69493']}
                    style={styles.panelButton}>
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={choosePhotoFromLibrary}>
                <LinearGradient
                    colors={['#F27527', '#F69493']}
                    style={styles.panelButton}>
                    <Text style={styles.panelButtonTitle}>Choose From Library</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => bs.current.snapTo(1)}>
                <LinearGradient
                    colors={['#F27527', '#F69493']}
                    style={styles.panelButton}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );


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
                <BottomSheet
                    ref={bs}
                    snapPoints={[330, 0]}
                    renderContent={renderContent}
                    // renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={fall}
                    enabledGestureInteraction={true}
                    // renderHeader = {renderHeader}
                />
                <Animated.View style={{opacity: Animated.add(0.3, Animated.multiply(fall, 1.0)),}}>
                <ScrollView>
                <View style={styles.userInfoSection}>
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: image,
                                }}
                                size={120}
                                resizeMode='stretch'
                            />
                            <MaterialCommunityIcons
                                name="camera"
                                size={35}
                                color="#fff"
                                style={{
                                    opacity: 0.8,
                                    bottom: 20,
                                    left: 40
                                }}
                            />
                            <View>
                                <Title style={[styles.title, {
                                    marginTop: 10,
                                    marginBottom: 5,
                                }]}>Gabriel Macht</Title>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                            <MaterialCommunityIcons name="map-marker-radius" color={"#A5A5A5"} size={22}/>
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder='Enter location'
                                placeholderTextColor="white"
                                onChangeText={handleLocationChange}
                                // value={text}
                            />
                        </View>
                    <View style={styles.row}>
                        <Entypo name="phone" color={"#A5A5A5"} size={22}/>
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder='+(380) 99-751-22-2'
                            placeholderTextColor="white"
                            onChangeText={handlePhoneChange}
                            // value={text}
                        />
                    </View>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="email" color={"#A5A5A5"} size={20}/>
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder='gabriel_macht@gmail.com'
                            placeholderTextColor="white"
                            onChangeText={handleEmailChange}
                            // value={text}
                        />
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
            </Animated.View>
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
    textArea: {
        width: '100%',
        fontSize: 18,
        paddingHorizontal: 10,
        color: 'white'
    },

    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        borderRadius: 20,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },

});


