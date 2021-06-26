import {Text, View} from "react-native";
import React from "react";

export function DeviceScreen({navigation}) {
    return (
        <iframe src={navigation?.params?.url || "https://google.com"  } />
    );
}
