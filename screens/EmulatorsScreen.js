import { Button, FlatList, Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Card } from 'react-native-elements'
import * as firebase from 'firebase/app';
import "firebase/messaging";
import * as WebBrowser from 'expo-web-browser';
import { io } from "socket.io-client";
import { connect } from 'react-redux';
import { LogOut } from '../actions/AuthActions';
import Header from '../components/Header';

const mapDispatchToProps = (dispatch) => {
    return {
        reduxLogOut: () => dispatch(LogOut())
    }
};
const window = Dimensions.get("window");


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        UserData: state.authReducer.UserData,
    };
};

const EmulatorsScreen = ({ navigation, reduxLogOut, UserData }) => {

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


    const [devices, seDevices] = useState([])
    const stateRef = useRef(devices);
    stateRef.current = devices
    function fetchDevices() {
        fetch(`https://us-central1-instamaterial-2eb76.cloudfunctions.net/devices`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${UserData.id_token}`

            }
        }).then((response) => response.json()).then(data => {
            data.push(...data)
            data.push(...data)
            data.push(...data)
            data.push(...data)
            data.push(...data)
            data.push(...data)
            seDevices(data)
        })
    }

    useEffect(() => {

        let currentReconnectionAttempts = 1
        const reconnectionAttempts = 2
        const reconnectionDelay = 2000
        const host = "https://proxy.telereso.io";
        //        const host ="http://localhost:8081";
        const socket = io(host, {
            autoConnect: false,
            reconnection: false,
            withCredentials: true,
            query: { token: UserData.id_token }
        });

        const tryReconnect = () => {
            if (currentReconnectionAttempts >= reconnectionAttempts) return
            currentReconnectionAttempts++
            setTimeout(() => {
                socket.io.open((err) => {
                    if (err) {
                        tryReconnect();
                    }
                });
            }, reconnectionDelay);
        }

        socket.io.on("close", tryReconnect);


        socket.onAny((eventName, ...args) => {
            console.log(eventName);
        });

        socket.on("connect", () => {
            UserData.token = socket.id
        });

        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });

        socket.on("disconnect", () => {
            console.log(socket.id); // undefined
        });

        socket.on("device", (data) => {
            switch (data.state) {
                case "NA":
                    seDevices(devices.filter(({ serial }) => serial != data.serial))
                    break;
                case "reserved":
                    seDevices(stateRef.current.map(e => {
                        if (e.serial == data.serial) {
                            e['state'] = 'reserved'
                        }
                        return e
                    }));
                    break;
                case "A":
                    seDevices(stateRef.current.map(e => {
                        if (e.serial == data.serial) {
                            e['state'] = null
                        }
                        return e
                    }));
                    break;
                case "setup":
                    seDevices(stateRef.current.map(e => {
                        if (e.serial == data.serial) {
                            e['state'] = `${data.state}...`
                        }
                        return e
                    }));
                    break;
                case "ready":
                    seDevices(stateRef.current.map(e => {
                        if (e.serial == data.serial) {
                            e['state'] = 'open'
                            e['url'] = data.url
                        }
                        return e
                    }));

                    break;
                default:
                    console.log(data)
            }

        });
        socket.on("devices", (data) => {
            switch (data.state) {
                case "devices_refreshed":
                    fetchDevices();
                    break;
            }
            fetchDevices();
        });

        socket.connect()


        fetchDevices()
        // setInterval(() => {
        //     fetchDevices()

        // }, 30000)

    }, []);

    function getCloumn(){
        if (dimensions.window.width  < 768)
            return 1
        else
            return 3
    }

    console.log(dimensions.window.width )

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                key={`${getCloumn()}`}
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
                numColumns={getCloumn()}
                keyExtractor={(item, index) => index.toString()}
            />



        </View>
    );
}

function reserve(serial) {
    fetch(`https://us-central1-instamaterial-2eb76.cloudfunctions.net/requestDevice?serial=${serial}&token=${UserData.token}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${UserData.id_token}`
        }
    }).then((response) => response.json()).then(data => {
    })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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


export default connect(mapStateToProps, mapDispatchToProps)(EmulatorsScreen);

