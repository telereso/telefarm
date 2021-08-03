import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import HomeScreen from "../screens/HomeScreen";
import ContactUsScreen from '../screens/ContactUsScreen'
import EmulatorsScreen from '../screens/EmulatorsScreen';
import CustomizeScreen from '../screens/CustomizeScreen';
import RealDevicesScreen from '../screens/RealDevicesScreen';
import TopUpPackagesScreen from '../screens/guest/TopUpPackagesScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { LogOut, LogOutSession } from '../actions/AuthActions';

import CustomDrawerContent from './CustomDrawerContent';


const Drawer = ({ reduxLogOut, SessionLogOut }) => {
    const Drawer = createDrawerNavigator();

    useEffect(() => {
        window.onSignOut = function () {
            reduxLogOut();
            SessionLogOut();
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
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="ContactUS" component={ContactUsScreen} />
                <Drawer.Screen name="Emulators" component={EmulatorsScreen} />
                <Drawer.Screen name="Customize" component={CustomizeScreen} />
                <Drawer.Screen name="RealDevices" component={RealDevicesScreen} />
                <Drawer.Screen name="TopUpPackages" component={TopUpPackagesScreen} />
                <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
                <Drawer.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        reduxLogOut: () => dispatch(LogOut()),
        SessionLogOut: () => dispatch(LogOutSession()),
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
