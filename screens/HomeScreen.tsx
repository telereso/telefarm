import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Card } from 'react-native-elements'
import * as firebase from 'firebase/app';
import "firebase/messaging";
import * as WebBrowser from 'expo-web-browser';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByJlNuPKr9mQ_MmW0xw1_AQYfMDZ3rXwg",
    authDomain: "instamaterial-2eb76.firebaseapp.com",
    projectId: "instamaterial-2eb76",
    storageBucket: "instamaterial-2eb76.appspot.com",
    messagingSenderId: "193172152804",
    appId: "1:193172152804:web:72f74e5f7ac226d409a7f1",
    measurementId: "G-5KJ4F2NMQC"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.getToken({ vapidKey: "BMsOZS5g4PFGm0a2XRjl0aHfsJ0B-HxWIXHb8f7vXmKwPKeSfCvFom6q4aB1bmP7xrangd8M8A_RTcd_BnjTvzA" }).then((currentToken) => {
    if (currentToken) {
        global.fcmToken = currentToken
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});

export function HomeScreen({ navigation }) {
    const [devices, seDevices] = useState([])
    const stateRef = useRef(devices);
    stateRef.current = devices

    function fetchDevices() {
        fetch(`https://us-central1-instamaterial-2eb76.cloudfunctions.net/devices?token=${global.fcmToken}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${global.idToekn}`

            }
        }).then((response) => response.json()).then(data => {
            seDevices(data)
        })
    }

    useEffect(() => {
        messaging.onMessage(async (payload) => {
            switch (payload.data.state) {
                case "NA":
                    seDevices(devices.filter(({ serial }) => serial != payload.data.serial))
                    break;
                case "devices_refreshed":
                    fetchDevices();
                break;    
                case "reserved":
                    seDevices(stateRef.current.map(e => {
                        if (e.serial == payload.data.serial) {
                            e['state'] = 'reserved'
                        }
                        return e
                    }));
                    break;    
                case "A":
                    seDevices(stateRef.current.map(e => {
                        if (e.serial == payload.data.serial) {
                            e['state'] = null
                        }
                        return e
                    }));
                    break;
                case "setup":
                    seDevices(stateRef.current.map(e => {
                        if (e.serial == payload.data.serial) {
                            e['state'] = `${payload.data.state}...`
                        }
                        return e
                    }));
                    break;
                case "ready":
                    seDevices(stateRef.current.map(e => {
                        if (e.serial == payload.data.serial) {
                            e['state'] = 'open'
                            e['url'] = payload.data.url
                        }
                        return e
                    }));

                    break;
                default:
                    console.log(payload)
            }
            // const { title, ...options } = payload.notification;
            // navigator.serviceWorker.register("firebase-messaging-sw.js");
            // function showNotification() {
            //     Notification.requestPermission(function (result) {
            //         if (result === "granted") {
            //             navigator.serviceWorker.ready.then(function (registration) {
            //                 registration.showNotification(payload.notification.title, {
            //                     body: payload.notification.body,
            //                     tag: payload.notification.tag,
            //                 });
            //             });
            //         }
            //     });
            // }
            // showNotification();
        });

        fetchDevices()
        // setInterval(() => {
        //     fetchDevices()

        // }, 30000)

    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={devices}
                renderItem={({ item: { serial, abi, height, locale, manufacturer, model, name, width, state, url } }) => (
                    <Card>
                        <Card.Title>{name}</Card.Title>
                        <Card.Divider />{
                            <View style={styles.deviceContainer}>
                                <Image style={styles.deviceImage}
                                    resizeMode="center"
                                    source={require(`../assets/${model}.png`)}
                                />
                                <View style={styles.deviceInfo}>
                                    <Text>{manufacturer}</Text>
                                    <View style={styles.padding} />
                                    <Text>{model}</Text>
                                    <View style={styles.padding} />
                                    <Text>{`${width}X${height}`}</Text>
                                    <View style={styles.padding} />
                                    <Text>{abi}</Text>
                                    <View style={styles.padding} />
                                    <Text>{locale}</Text>
                                    <View style={styles.padding} />

                                    <View style={styles.deviceReserve}>

                                        <Button
                                            disabled={state === "progress..." || state === "setup..." || state === 'reserved'}
                                            color="#66BB6A"
                                            onPress={async () => {
                                                if (state == "open") {
                                                    let result = await WebBrowser.openBrowserAsync(url);
                                                } else {
                                                    seDevices(devices.map(e => {
                                                        if (e.serial === serial) {
                                                            e['state'] = 'progress...'
                                                        }
                                                        return e
                                                    }))
                                                    reserve(serial)
                                                }
                                            }}
                                            title={state || "Reserve"}
                                            accessibilityLabel="Reserve a phone"
                                        />
                                    </View>
                                </View>
                            </View>

                        }
                    </Card>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

function reserve(serial: string) {
    fetch(`https://us-central1-instamaterial-2eb76.cloudfunctions.net/requestDevice?serial=${serial}&token=${global.fcmToken}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${global.idToekn}`
        }
    }).then((response) => response.json()).then(data => {
    })
}

const styles = StyleSheet.create({
    deviceContainer: {
        flex: 1,
        flexDirection: "row",
    },
    deviceImage: {
        width: 100,
        height: 200
    },
    deviceInfo: {
        flex: 1,
        marginStart: 10,
        flexDirection: "column",
    },
    deviceReserve: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    padding: {
        padding: 4
    },
});
