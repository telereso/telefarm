import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Button = ({text,link}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate(link)}}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#6314fe', 
        textAlign: 'center', 
        width: 120, 
        alignSelf: 'flex-start', 
        borderRadius: 5,
        marginTop:20,
        marginBottom:20
    },
    text:{
        textAlign:'center',
        color:'white',
        fontSize:17,
        margin:8
    }
})
export default Button
