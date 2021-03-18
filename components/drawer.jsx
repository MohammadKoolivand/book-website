import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Image, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

export default function DrawerComponent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <Image style={{ width: "100%", resizeMode: "stretch", height: 200 }} source={{ uri: "https://asanyadbegir.com/static/media/reactDesc.03306b76.png" }} />
            <DrawerItemList {...props} />
            <DrawerItem label="about me" />
            <TouchableOpacity onPress={() => {
                AsyncStorage.removeItem('user')
                props.setIsLogin(false)
            }}>
                <Text>Open Drawer</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    )
}
