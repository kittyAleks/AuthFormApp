import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './src/navigation/RootStackScreen';
import {MyState} from "./src/context/MyState";
import { Provider } from "react-redux";
import store from './src/store/store'

export default App = () => {
    return (
        <NavigationContainer>
            <MyState>
                <Provider store={store}>
                    <RootStackScreen/>
                </Provider>
            </MyState>
        </NavigationContainer>
    )
}
