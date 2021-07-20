
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
        reduxLogin: (UserData) => dispatch(Login(UserData))
    }
};


const LoginScreen = ({ reduxLogin }) => {
    useEffect(() => {
        window.onSignIn = function (googleUser) {
            let UserData = {}
            UserData.data = googleUser;
            UserData.info = jwt.decode(googleUser.getAuthResponse().id_token)
            reduxLogin(UserData);
        }
    })
    return (
        <View style={{ flex: 1, alignSelf: 'center' }}>
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
        </View>
    );

}


export default connect(null, mapDispatchToProps)(LoginScreen);
