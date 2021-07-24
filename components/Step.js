import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Step = ({ icon, title, text }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Text style={styles.icon}>
                    {icon}
                </Text>
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
        marginLeft: 20,
        marginRight: 20,
        marginTop:20
    },
    iconContainer: {
        flex: 0.1,
        marginTop: 5
    },
    textContainer: {
        flex: 0.9,
        textAlign: 'left'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#243e63',
        marginBottom: 10
    },
    text: {
        color: '#243e63'
    },
    icon: {
        color: '#243e63',
        fontSize:20,
        fontWeight:'bold'
    }
})

export default Step
