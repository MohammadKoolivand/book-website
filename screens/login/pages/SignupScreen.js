import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function SignUpScreen({ navigation, route }) {
    let {name} = route.params
    return (
        <View>
            <Text>{name}</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    )
}
