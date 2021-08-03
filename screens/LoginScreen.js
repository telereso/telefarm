
import React, { useEffect, Component, useState } from 'react';
import { Button, View, TouchableOpacity, Text } from "react-native";
import { io } from "socket.io-client";
import * as WebBrowser from 'expo-web-browser';
import { connect } from 'react-redux';
import { Login, LoginSession } from '../actions/AuthActions';
import Header from '../components/Header';
import jwt from "jsonwebtoken";


const mapDispatchToProps = (dispatch) => {
    return {
        reduxLogin: (UserData) => dispatch(Login(UserData)),
        sessionLogin: (UserDataSession) => dispatch(LoginSession(UserDataSession))
    }
};


const LoginScreen = ({ reduxLogin, display, sessionLogin }) => {
    useEffect(() => {
        window.onSignIn = function (googleUser) {
            let UserData = {}
            let UserDataSession = {}
            UserData.data = googleUser;
            UserData.info = jwt.decode(googleUser.getAuthResponse().id_token)

            UserDataSession.data = googleUser;
            UserDataSession.info = jwt.decode(googleUser.getAuthResponse().id_token)
            sessionLogin(UserDataSession);
            reduxLogin(UserData);
        }
    })
    return (
        <>
            {
                display ? (
                    <View style={{ flex: 1, alignSelf: 'center' }} >
                        <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
                    </View >

                ) : (
                    <View style={{ display: 'none' }} >
                        <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
                    </View >
                )

            }
        </>
    );

}


export default connect(null, mapDispatchToProps)(LoginScreen);
