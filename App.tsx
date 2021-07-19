import 'react-native-gesture-handler';
import React, { useEffect, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DeviceScreen } from "./screens/DeviceScreen";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, View } from "react-native";
import jwt from "jsonwebtoken";
import { io } from "socket.io-client";
import Drawer from './routes/Drawer.js';

import { Provider } from 'react-redux';
import { store, persistor } from './store/Store';
import { PersistGate } from 'redux-persist/integration/react';

WebBrowser.maybeCompleteAuthSession();
const Stack = createStackNavigator();


export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Drawer />
            </PersistGate>
        </Provider>
    );
}








