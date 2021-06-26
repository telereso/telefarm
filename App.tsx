import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "./screens/HomeScreen";
import {DeviceScreen} from "./screens/DeviceScreen";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import {Button, View} from "react-native";

WebBrowser.maybeCompleteAuthSession();
const Stack = createStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Select Device" component={HomeScreen}/>
                <Stack.Screen name="Device" component={DeviceScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function onSingIn(googleUser: any=null,e:any=null) {
    console.log("ID: "); // Don't send this directly to your server!
    console.log(googleUser); // Don't send this directly to your server!
    console.log(e); // Don't send this directly to your server!
    // var profile = googleUser.getBasicProfile();
    // console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    // console.log('Full Name: ' + profile.getName());
    // console.log('Given Name: ' + profile.getGivenName());
    // console.log('Family Name: ' + profile.getFamilyName());
    // console.log("Image URL: " + profile.getImageUrl());
    // console.log("Email: " + profile.getEmail());
    //
    // // The ID token you need to pass to your backend:
    // var id_token = googleUser.getAuthResponse().id_token;


}



export function LoginScreen({ navigation }) {
    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     webClientId: '193172152804-k0f0mpm423abj72h8pjqklarqsvsi3tb.apps.googleusercontent.com',
    // });
    //
    // React.useEffect(() => {
    //     if (response?.type === 'success') {
    //         const {authentication} = response;
    //         console.log(authentication)
    //         console.log(response)
    //         console.log(request)
    //     }
    // }, [response]);
    //
    const channel = new BroadcastChannel("auth-channel");
    channel.onmessage = (messageEvent) => {
        global.idToekn = messageEvent.data
        navigation.navigate('Select Device')
    }
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"/>

            {/*<Button*/}
            {/*    disabled={!request}*/}
            {/*    title="Login"*/}
            {/*    onPress={async () => {*/}
            {/*        promptAsync();*/}
            {/*        // const loginTopic = `idtoken_${new Date().getTime()}`*/}
            {/*        // let result = await WebBrowser.openBrowserAsync(`http://localhost?topic=${loginTopic}`);*/}
            {/*        // const pubSubClient = new PubSub();*/}
            {/*        // const subscription = pubSubClient.subscription(loginTopic);*/}
            {/*        //*/}
            {/*        // // Create an event handler to handle messages*/}
            {/*        // let messageCount = 0;*/}
            {/*        // const messageHandler = (message: { id: any; data: any; attributes: any; ack: () => void; }) => {*/}
            {/*        //     console.log(`Received message ${message.id}:`);*/}
            {/*        //     console.log(`\tData: ${message.data}`);*/}
            {/*        //     console.log(`\tAttributes: ${message.attributes}`);*/}
            {/*        //     messageCount += 1;*/}
            {/*        //*/}
            {/*        //     // "Ack" (acknowledge receipt of) the message*/}
            {/*        //     message.ack();*/}
            {/*        // };*/}
            {/*        //*/}
            {/*        // // Listen for new messages until timeout is hit*/}
            {/*        // subscription.on('message', messageHandler);*/}
            {/*        //*/}
            {/*        // setTimeout(() => {*/}
            {/*        //     subscription.removeListener('message', messageHandler);*/}
            {/*        //     console.log(`${messageCount} message(s) received.`);*/}
            {/*        // }, 60 * 1000);*/}

            {/*    }}*/}
            {/*/>*/}
        </View>
    );
    // const myHTML = "<html lang=\"en\">\n" +
    //     "<head>\n" +
    //     "    <meta name=\"google-signin-scope\" content=\"profile email\">\n" +
    //     "    <meta name=\"google-signin-client_id\" content=\"193172152804-k0f0mpm423abj72h8pjqklarqsvsi3tb.apps.googleusercontent.com\">\n" +
    //     "    <script src=\"https://apis.google.com/js/platform.js\"expo install expo-web-browser></script>\n" +
    //     "</head>\n" +
    //     "<body>\n" +
    //     "<div class=\"g-signin2\" data-onsuccess=\"onSignIn\" data-theme=\"dark\"></div>\n" +
    //     "<script>\n" +
    //     "    function onSignIn(googleUser) {\n" +
    //     "        // Useful data for your client-side scripts:\n" +
    //     "        var profile = googleUser.getBasicProfile();\n" +
    //     "        console.log(\"ID: \" + profile.getId()); // Don't send this directly to your server!\n" +
    //     "        console.log('Full Name: ' + profile.getName());\n" +
    //     "        console.log('Given Name: ' + profile.getGivenName());\n" +
    //     "        console.log('Family Name: ' + profile.getFamilyName());\n" +
    //     "        console.log(\"Image URL: \" + profile.getImageUrl());\n" +
    //     "        console.log(\"Email: \" + profile.getEmail());\n" +
    //     "\n" +
    //     "        // The ID token you need to pass to your backend:\n" +
    //     "        var id_token = googleUser.getAuthResponse().id_token;\n" +
    //     "        console.log(\"ID Token: \" + id_token);\n" +
    //     "    }\n" +
    //     "</script>\n" +
    //     "</body>\n" +
    //     "</html>"
    // return <iframe width={200} height={200} src={"data:text/html,"+encodeURIComponent(myHTML)}/>

}





