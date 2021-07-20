import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from '../screens/LoginScreen'
import ContactUsScreen from '../screens/ContactUsScreen'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { LogOut } from '../actions/AuthActions';

import CustomDrawerContent from './CustomDrawerContent';
import EmulatorsScreen from '../screens/EmulatorsScreen';



const Drawer = ({reduxLogOut }) => {
    const Drawer = createDrawerNavigator();

    useEffect(() => {
        window.onSignOut = function () {
            reduxLogOut();
        }
    }, [])

    return (
        <NavigationContainer >
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: 'black',
                    activeBackgroundColor: '#29a0df'
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                {/* <Drawer.Screen name="Login" component={LoginScreen} /> */}
                <Drawer.Screen name="Home" component={EmulatorsScreen} />
                <Drawer.Screen name="ContactUS" component={ContactUsScreen} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        reduxLogOut: () => dispatch(LogOut())
    }
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    logo: {
        height: 100,
        resizeMode: 'contain',
        minWidth: 100
    },
    greeting: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        marginBottom: 10,
        paddingBottom: 10
    },
    logOut: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        margin: 10,
        textAlign: 'center',
        color: 'red',
        borderRadius: 5,
        fontWeight: 'bold'
    }
})

export default connect(null, mapDispatchToProps)(Drawer);
