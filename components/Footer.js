import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

const Footer = ({ scrollTop }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.topArrow} onPress={() => scrollTop()}>
                    <FontAwesome name="arrow-up" size={20} color="#6314fe" />
                </TouchableOpacity>
            </View>
            <View style={styles.socialMediaContainer}>
                <View style={styles.socialView}>
                    <TouchableOpacity style={styles.social}>
                        <FontAwesome5 name="facebook-f" size={20} color="#6314fe" />
                    </TouchableOpacity>
                </View>
                <View style={styles.socialView}>
                    <TouchableOpacity style={styles.social}>
                        <FontAwesome name="instagram" size={20} color="#6314fe" />
                    </TouchableOpacity>

                </View>
                <View style={styles.socialView}>
                    <TouchableOpacity style={styles.social}>
                        <FontAwesome name="linkedin" size={20} color="#6314fe" />
                    </TouchableOpacity>
                </View>
                <View style={styles.socialView}>
                    <TouchableOpacity style={styles.social}>
                        <FontAwesome name="youtube-play" size={20} color="#6314fe" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.pagesLinkContainer}>
                <TouchableOpacity>
                    <Text style={[styles.pagesLink, styles.borderR]}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.pagesLink, styles.borderR]}>
                        Real Devices
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.pagesLink, styles.borderR]}>
                        Emulator's
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.pagesLink, styles.borderR]}>
                        Plans
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.pagesLink]}>
                        Customize Devices
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.pagesLinkTwoContainer}>
                <TouchableOpacity>
                    <Text style={styles.pagesLinkTwo}>
                        Contact US
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.pagesLinkTwo}>
                        Terms and Conditions
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.pagesLinkTwo}>
                        Privacy Policy
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 84

    },
    topContainer: {
        alignSelf: 'flex-end'
    },
    topArrow: {
        marginRight:20,
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:10,
        paddingRight:10,
        borderWidth:1,
        borderColor: '#6314fe',
    },
    socialMediaContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    pagesLinkContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
    },
    pagesLinkTwoContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20,
    },
    socialView: {
        textAlign: 'center',
    },
    social: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#6314fe',
        padding: 8,
        width: 40,
        alignSelf: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    pagesLink: {
        color: 'white',
        fontSize: 17,
        paddingLeft: 20,
        paddingRight: 20,
    },
    pagesLinkTwo: {
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    borderR: {
        borderRightWidth: 2,
        borderColor: 'white',
    }
})

export default Footer
