import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from '../screens/LoginScreen'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';

const Drawer = ({Token}) => {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                {Token == null ?
                    <Drawer.Screen name="LoginScreen" component={LoginScreen} />
                    :
                    <Drawer.Screen name="Home" component={HomeScreen} />
                }
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        Token: state.authReducer.Token,
    };
};

export default connect(mapStateToProps)(Drawer);
