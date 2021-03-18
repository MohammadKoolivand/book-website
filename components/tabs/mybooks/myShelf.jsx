import React from 'react'
import coverImage1 from "../../../assets/images/covers/1984.jpg";
import coverImage2 from "../../../assets/images/covers/theKiteRunner.jpg";
import coverImage3 from "../../../assets/images/covers/guideToTheGoodLife.jpg";
import { View, StyleSheet, Image, Text } from 'react-native'
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
    rootWant: {
        width: '100%',
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "#ccc",
        height: 100

    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        padding: 3,
    },
    body: {
        width: '100%',
        flexDirection: 'row',
        height: '60%',
        paddingLeft: 5,
        padding: 2,
        marginBottom: 5

    },
    action: {
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    actionLike: {
        marginRight: 10,
        marginLeft: 10,
        fontSize: 12
    },
    actionComment: {
        fontSize: 12
    },
    profileimage: {
        fontSize: 12
    },
    headerDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 1,
        alignItems: 'center'
    },
    headerDetailText: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginTop: -9

    }
})

export default function MyShelf() {
    return (
        <View style={styles.rootWant}>

            <View style={styles.body}>
                <View style={{ display: "flex", alignItems: 'flex-start' }}>
                    <Image style={{
                        width: 50,

                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3

                        , height: 90, marginRight: 5, zIndex: 3
                    }} source={coverImage1} />
                    <Image style={{
                        width: 50,

                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3

                        , position: 'absolute', marginLeft: 20, marginTop: 10, height: 80, marginRight: 5, zIndex: 2
                    }} source={coverImage2} />
                    <Image style={{
                        width: 5,

                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3

                        , position: 'absolute', marginLeft: 40, marginTop: 20, height: 70, marginRight: 5, zIndex: 1
                    }} source={coverImage3} />

                </View>
                <View style={{ marginLeft: 90, height: '90%', justifyContent: 'flex-start' }}>
                    <Text style={{ marginBottom: -7 }}>Read</Text>
                    <Button titleStyle={{ fontSize: 12, alignSelf: 'flex-start' }} containerStyle={{ marginBottom: 10, color: 'blue', alignSelf: 'flex-start' }} title="47 Books" type="clear" />

                </View>
            </View>

        </View>
    )
}
