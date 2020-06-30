import React, {useEffect, useState, useCallback} from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity} from 'react-native'
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import { GiftedChat } from 'react-native-gifted-chat'

/*            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },*/

export default function TelegramScreen({navigation}) {
    const [messages, setMessages] = useState([]);

    let updateChat = async () => {
        let res = await fetch('http://localhost/get_all', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        let messages = await res.json();
        messages.reverse();
        let i = 0;
        setMessages(messages.map(messageText => ({
            _id: ++i,
            text: messageText,
            user: {
                _id: 1,
                name: 'TestUser',
                avatar: 'https://placeimg.com/140/140/any',
            },
        })));
    };

    useEffect(() => {
        const interval = setInterval(updateChat, 1000);
        return () => clearInterval(interval);
    }, []);

    const onSend = useCallback((messages = []) => {
        console.log('[QQQ] messages', messages);
        //setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        messages.forEach(message => {
            fetch('http://localhost/send', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    message: message.text
                }),
            }).then(res => {
                console.log('QQQ res',res);
            });
        })
    }, []);

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )

    /*return (
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
                <GiftedChat
                    messages={messages}
                    // onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
                <View style={styles.center}>
                    <GiftedChat
                        messages={messages}
                        // onSend={messages => onSend(messages)}
                        user={{
                            _id: 1,
                        }}
                    />
                </View>
            </View>
        </Container>
    )*/
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


