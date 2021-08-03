
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { connect } from 'react-redux';
import LoginScreen from '../screens/LoginScreen';


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        UserData: state.authReducer.UserData,
        UserDataSession: state.sessionAuthReducer.UserDataSession
    };
};

const CustomDrawerContent = (props) => {
    console.log('UserDataSession',props.UserDataSession);
    return (
        <DrawerContentScrollView {...props} style={styles.container}>
            {props.UserDataSession != null
                ?
                <Image
                    source={{ uri: props.UserDataSession.info.picture }}
                    style={styles.logo}
                />
                :
                <Image
                    source={require('../assets/user.png')}
                    style={styles.logo}
                />
            }

            {props.UserData != null
                ?
                <Text style={styles.greeting}>
                    Hi {props.UserData.info.given_name}
                </Text>
                :
                <Text style={styles.greeting}>
                    Hi User
                </Text>
            }

            <DrawerItemList {...props} />
            {props.UserData == null ?
                <LoginScreen display={true} />
                :
                <TouchableOpacity onPress={async () => {
                    signOut();
                }}>
                    <LoginScreen display={false} />
                    <Text style={styles.logOut}>
                        logout
                </Text>
                </TouchableOpacity>
            }
        </DrawerContentScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    logo: {
        height: 100,
        resizeMode: 'contain',
        minWidth: 100,
    },
    greeting: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
        marginTop: 10,
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


export default connect(mapStateToProps)(CustomDrawerContent);