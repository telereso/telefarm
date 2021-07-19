
import React, { useEffect, Component, useState } from 'react';
import { Button, View, TouchableOpacity, Text } from "react-native";
import jwt from "jsonwebtoken";
import { io } from "socket.io-client";
import * as WebBrowser from 'expo-web-browser';
import { connect } from 'react-redux';
import { Login } from '../actions/AuthActions';


const mapDispatchToProps = (dispatch) => {
    return {
        reduxLogin: (googleUser) => dispatch(Login(googleUser))
    }
};


const LoginScreen = ({ reduxLogin }) =>  {
    useEffect(() => {
        window.onSignIn = function (googleUser) {
            const channel = new BroadcastChannel("auth-channel");
            channel.onmessage = (messageEvent) => {
                global.user = messageEvent.data
            }
            reduxLogin(googleUser);
        }
    })
    return (
        <View>
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="light" />
        </View>
    );

}


export default connect(null, mapDispatchToProps)(LoginScreen);
