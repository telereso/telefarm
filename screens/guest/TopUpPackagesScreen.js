import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { Header, Button, Feature, Step, Plan, Footer } from '../../components';
import { Ionicons } from '@expo/vector-icons';
import { useRef } from 'react';

const window = Dimensions.get("window");

const TopUpPackagesScreen = () => {

    const [dimensions, setDimensions] = useState({ window });
    const scrollRef = useRef();

    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
        });
    }
    const onChange = ({ window }) => {
        setDimensions({ window });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });

    const Features1 = ['300 minutes', 'Emulators', 'Real Devices', 'Customized Devices', '24 hrs Support', 'Secure'];
    const Features2 = ['600 minutes', 'Emulators', 'Real Devices', 'Customized Devices', '24 hrs Support', 'Secure'];
    const Features3 = ['900 minutes', 'Emulators', 'Real Devices', 'Customized Devices', '24 hrs Support', 'Secure'];
    return (
        <ScrollView  ref={scrollRef}>
            <Header />
            <View style={styles.container}>
                <View style={styles.plansSection}>
                    <View style={styles.plansLine}>
                        <View style={styles.feature}>
                            <Plan
                                image={<Image
                                    source={require('../../assets/silver.png')}
                                    style={styles.plan}
                                />}
                                title='Silver'
                                features={Features1}
                                Price='10'
                            />
                        </View>
                        <View style={styles.feature2}>
                            <Plan
                                image={<Image
                                    source={require('../../assets/gold.png')}
                                    style={styles.plan}
                                />}
                                title='Gold'
                                features={Features2}
                                Price='20'
                            />
                        </View>
                        <View style={styles.feature}>
                            <Plan
                                image={<Image
                                    source={require('../../assets/platinum.png')}
                                    style={styles.plan}
                                />}
                                title='Platinum'
                                features={Features3}
                                Price='30'
                                style={styles.feature}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <Footer scrollTop={onPressTouch} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 1400,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    h1: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 17
    },
    titleOne: {
        maxWidth: 430
    },
    titleTwo: {
        maxWidthL: 540
    },
    plansSection: {
        marginTop: 42,
    },
    featuresLine: {
        textAlign: 'center',
        maxWidth: 1000,
        marginTop: 42,
        flexDirection: 'row',
    },
    color1: {
        color: '#243e63'
    },
    color2: {
        color: '#009fd5',
    },
    margin10: {
        marginTop: 10
    },
    plan: {
        height: 100,
        resizeMode: 'contain'
    },
    plansLine: {
        textAlign: 'center',
        marginTop: 42,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'silver',
        alignSelf: 'center',
    },
    feature: {
        flex: 0.333,
        paddingTop: 15,
        paddingBottom: 15
    },
    feature2: {
        flex: 0.333,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'silver',
        paddingTop: 15,
        paddingBottom: 15
    },
})


export default TopUpPackagesScreen
