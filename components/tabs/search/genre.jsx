import React from 'react'
import profileImage from "../../../assets/images/profile/profile003.jpg";
import coverImage from "../../../assets/images/covers/theSuicideShop.jpg";
import { View, StyleSheet, Image, Text } from 'react-native'
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
    rootWant: {
        width:'max-content',
        margin: 5,
        marginBottom: 10

    }
})
export default function Start() {
    return (
        <View style={styles.rootWant}>
            <Image style={{ width: 90, height: 140}} source={coverImage} />
        </View>
    )
}
