import React, {useCallback, useEffect, useState} from 'react'
import {
    View,
    StatusBar,
    StyleSheet,
    ActivityIndicator,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
    Button, Linking, TextInput
} from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import { captureScreen } from 'react-native-view-shot';

let facebookParameters = "";
export default function SettingsScreen({navigation}) {
    const [image, setImage] = useState(null);
    const [FacebookShareURL, setFacebookShareURL] = useState('https://aboutreact.com');
    const [FacebookShareMessage, setFacebookShareMessage] = useState('Hello Guys, This is a testing of facebook share example');

    const takeSnapshot = () => {
        captureScreen({
            format: "jpg",
            quality: 0.8
        })
            .then((uri) => {
                setImage({uri})
            })

    };

    // const shareImg = async () => {
    //     const shareOptions = {
    //         title: 'Share file',
    //         url: image.uri,
    //     };
    //     try {
    //         const Shareresponse = Share.shareSingle(shareOptions);
    //         console.log('QQQ Shareresponse', Shareresponse)
    //     } catch (e) {
    //         e && console.log(e);
    //     }
    //     console.log('QQQ shareOptions' , shareOptions);
    // };

    const shareImg = () => {
        const shareOptions = {
            title: 'Share file',
            url: image.uri,
        };
        let FacebookShareURL = FacebookShareURL;
        let FacebookShareMessage = FacebookShareMessage;
        if(FacebookShareURL !== undefined)
        {
            if(facebookParameters.includes("?") === false)
            {
                facebookParameters = facebookParameters+"?u="+encodeURI(FacebookShareURL);
            }else{
                facebookParameters = facebookParameters+"&u="+encodeURI(FacebookShareURL);
            }
        }
        if(FacebookShareMessage !== undefined)
        {
            if(facebookParameters.includes("?") === false)
            {
                facebookParameters = facebookParameters+"?quote="+encodeURI(FacebookShareMessage);
            }else{
                facebookParameters = facebookParameters+"&quote="+encodeURI(FacebookShareMessage);
            }
        }
        let url = 'https://www.facebook.com/' + facebookParameters;
        console.log('QQQ Url', url);
        Linking.openURL(url)
            .then((data) => {
                if (!data) {
                    console.log('Can\'t handle url: ' + url);
                } else {
                    return Linking.openURL(url);
                }
            alert('Facebook Opened');
        }).catch(() => {
            alert('Something went wrong');
        });
    };


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
                        <Text>Hello</Text>
                        <View>
                            {image ?
                                <TouchableOpacity>
                                <Image
                                    fadeDuration={0}
                                    resizeMode="contain"
                                    style={styles.imageContainer}
                                    source={image}
                                />
                                </TouchableOpacity> :
                                <Text>Image is not defined</Text>
                            }
                        </View>
                        <Button onPress={takeSnapshot} title='Take Snapshot'></Button>
                        <Button onPress={shareImg} title='Share Snapshot'></Button>
                    </View>
                </ScrollView>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({

    titleSignUp: {
        color: 'white',
    },
    title: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center'
    },

    info: {
        fontSize: 20,
        marginHorizontal: 20,
        margin: 20
    },
    imageContainer: {
        marginBottom: 10,
        marginLeft: 10,
        opacity: 0.9,
        height: 250, width: 250,
        marginTop: 10,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 10,
    },
});


