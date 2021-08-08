import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { Header, Button, Feature, Step, Plan, Footer } from '../components';
import { Ionicons } from '@expo/vector-icons';
import { useRef } from 'react';

const window = Dimensions.get("window");

const HomeScreen = () => {

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
                <View style={styles.bannerContainer}>
                    <View style={styles.bannerTextContainer} >
                        <Text style={[styles.h1, styles.titleOne]}>
                            Beautiful React Templates for you.
                        </Text>
                        <Text style={[styles.h3, styles.titleTwo]}>
                            Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.
                    </Text>
                        <Button
                            text='Get Started'
                            link='Home'
                        />
                    </View>
                    <View style={styles.bannerImageContainer}>
                        <Image
                            style={styles.bannerImage}
                            source={require("../assets/homeBanner.svg")}
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.h2, styles.color2, styles.margin10]}>
                        Features
                    </Text>
                    <Text style={[styles.h1, styles.color1, styles.margin10]}>
                        We have Amazing Service.
                    </Text>
                    <Text style={[styles.h3, styles.color1, styles.margin10]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>
                <View style={styles.featuresSection}>
                    <View style={styles.featuresLine}>
                        <Feature
                            icon={<Ionicons name="shield-checkmark" size={24} color="#009fd5" />}
                            title='Secure'
                            text='text text text texttext texttext texttext texttext texttext texttext texttext text'
                            style={styles.feature}
                        />
                        <Feature
                            icon={<Ionicons name="shield-checkmark" size={24} color="#009fd5" />}
                            title='24/7 Support'
                            text='text text text texttext texttext texttext texttext texttext texttext texttext text'
                            style={styles.feature}
                        />
                        <Feature
                            icon={<Ionicons name="shield-checkmark" size={24} color="#009fd5" />}
                            title='Customizable'
                            text='text text text texttext texttext texttext texttext texttext texttext texttext text'
                            style={styles.feature}
                        />
                    </View>
                    <View style={styles.featuresLine}>
                        <Feature
                            icon={<Ionicons name="shield-checkmark" size={24} color="#009fd5" />}
                            title='Reliable'
                            text='text text text texttext texttext texttext texttext texttext texttext texttext text'
                            style={styles.feature}
                        />
                        <Feature
                            icon={<Ionicons name="shield-checkmark" size={24} color="#009fd5" />}
                            title='Fast'
                            text='text text text texttext texttext texttext texttext texttext texttext texttext text'
                            style={styles.feature}
                        />
                        <Feature
                            icon={<Ionicons name="shield-checkmark" size={24} color="#009fd5" />}
                            title='Easy'
                            text='text text text texttext texttext texttext texttext texttext texttext texttext text'
                            style={styles.feature}
                        />
                    </View>
                </View>
                <View style={styles.stepsContainer}>
                    <View style={styles.stepsImageContainer}>
                        <Image
                            style={styles.stepsImage}
                            source={require("../assets/homeBanner.svg")}
                        />
                    </View>
                    <View style={styles.stepsTextContainer} >
                        <Text style={[styles.h2, styles.color2]}>
                            Register
                        </Text>
                        <Text style={[styles.h1, styles.color1]}>
                            We have Amazing Service.
                        </Text>
                        <Step
                            icon='01'
                            title='Secure'
                            text='text text text texttext texttext texttext texttext texttext texttext texttext text'
                        />
                        <Step
                            icon='02'
                            title='24/7 Support'
                            text='text text text texttext texttext texttext texttext texttext texttext texttext text'
                        />
                        <Step
                            icon='03'
                            title='Customizable'
                            text='text text text texttext texttext texttext texttext texttext texttext texttext text'
                        />
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={[styles.h2, styles.color2, styles.margin10]}>
                        Pricing
                    </Text>
                    <Text style={[styles.h1, styles.color1, styles.margin10]}>
                        Reasonable & Flexible Packages.
                    </Text>
                    <Text style={[styles.h3, styles.color1, styles.margin10]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>

                <View style={styles.plansSection}>
                    <View style={styles.plansLine}>
                        <View style={styles.feature}>
                            <Plan
                                image={<Image
                                    source={require('../assets/silver.png')}
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
                                    source={require('../assets/gold.png')}
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
                                    source={require('../assets/platinum.png')}
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
    bannerContainer: {
        flexDirection: 'row',
        flex: 1
    },
    bannerTextContainer: {
        flex: 0.5,
        alignSelf: 'center'
    },
    bannerImageContainer: {
        flex: 0.5
    },
    stepsContainer: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 42
    },
    stepsTextContainer: {
        flex: 0.5,
        alignSelf: 'center',
        paddingLeft: 20
    },
    stepsImageContainer: {
        flex: 0.5
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
    bannerImage: {
        height: 510,
        resizeMode: 'contain'
    },
    stepsImage: {
        height: 510,
        resizeMode: 'contain'
    },
    section: {
        textAlign: 'center',
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 42
    },
    featuresSection: {
        marginTop: 42
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
        maxWidth: 800,
        width: 800,
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


export default HomeScreen
