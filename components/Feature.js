import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Feature = ({ icon, title, text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft:20,
        marginRight:20
    },
    iconContainer: {
        flex: 0.3,
        marginTop:10
    },
    textContainer: {
        flex: 0.7,
        textAlign:'left'
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        color:'#243e63',
        marginBottom:10
    },
    text:{
        color:'#243e63'
    }
})

export default Feature
