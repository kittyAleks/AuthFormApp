import React from 'react';
import RootStackScreen from './src/navigation/RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import store from './src/store/store'
import renderer from 'react-test-renderer';
import {MyState} from "./src/context/MyState";

export default App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyState>
                    <RootStackScreen/>
                </MyState>
            </NavigationContainer>
        </Provider>
    )
}
