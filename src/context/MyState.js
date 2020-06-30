import React from 'react';
import {MainContext} from './mainContext';

export const MyState = ({children}) => {
    return <MainContext.Provider
        value={{
            requestOptions

        }}>{children}
    </MainContext.Provider>
};
const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
    })
};
