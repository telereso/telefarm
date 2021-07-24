import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const Plan = ({ title, image, features, Price }) => {

    const listItems = features.map((feature) => {
        return (
            <View key={feature} style={styles.item}>
                <AntDesign name="checkcircleo" size={20} color="green" style={styles.checkItem} />
                <Text styles={styles.feature}>{feature}</Text>
            </View>
        )
    }
    );

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                {image}
            </View>
            <Text
                style={styles.title}
            >{title}</Text>
            <View style={styles.features}>
                {listItems}
            </View>
            <Text
                style={styles.price}
            >{Price}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 'auto',
    },
    image: {
        flex: 1
    },
    title: {
        flex: 1,
        color: '#6314fe',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        flex: 1,
        backgroundColor: '#6314fe',
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop:5,
        paddingBottom:5,
        fontSize: 17,
        fontWeight: 'bold',
        borderRadius: 5,
        alignSelf:'center'
    },
    feature: {
        color: 'black'
    },
    features:{
        width:180
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginTop:5,
        marginBottom:5
    },
    checkItem: {
        marginRight: 8,

    }
})


export default Plan
