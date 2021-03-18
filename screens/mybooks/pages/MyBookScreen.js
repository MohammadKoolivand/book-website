import React from 'react'
import { View, Text } from 'react-native'
import MyShelf from "../../../components/tabs/mybooks/myShelf";

export default function MyBookScreen() {
    return (
        <View style={{display:"flex", justifyContent:'flex-start',flexDirection:'column'}}>
            <MyShelf />
            <MyShelf />
            <MyShelf />
        </View>
    )
}
