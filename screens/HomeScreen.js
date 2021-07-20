import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Header from '../components/Header';

const window = Dimensions.get("window");

const HomeScreen = () => {

    const [dimensions, setDimensions] = useState({ window });

    const onChange = ({ window }) => {
        setDimensions({ window });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });
    
    return (
        <View>
            <Header />
            <View>
                <View>
                    <View>
                        {dimensions.window.width > 1200 ?
                            <Text> large</Text>
                            : dimensions.window.width > 768 ?
                                <Text> mid</Text>
                                :
                                <Text> small </Text>
                        }
                    </View>
                    <Image />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

const stylesLarge = StyleSheet.create({

})

export default HomeScreen
