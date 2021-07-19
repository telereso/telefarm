
import React, { useEffect, Component, useState } from 'react';
import { Button, View, TouchableOpacity, Text } from "react-native";
import { io } from "socket.io-client";
import * as WebBrowser from 'expo-web-browser';
import { connect } from 'react-redux';
import { Login } from '../actions/AuthActions';
import Header from '../components/Header';
import jwt from "jsonwebtoken";


const mapDispatchToProps = (dispatch) => {
    return {
        reduxLogin: (googleUser) => dispatch(Login(googleUser))
    }
};


const LoginScreen = ({ reduxLogin }) => {
    useEffect(() => {
        window.onSignIn = function (googleUser) {
            reduxLogin(googleUser);
        }
    })
    return (
        <View style={{ flex: 1, alignSelf: 'center' }}>
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
        </View>
    );

}


export default connect(null, mapDispatchToProps)(LoginScreen);
