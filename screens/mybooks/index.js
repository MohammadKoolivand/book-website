import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyBooksScreen from "./pages/MyBookScreen";

const Stack = createStackNavigator()
export default function LoginNavigator({ setIsLogin }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="mybooks">
                {props => <MyBooksScreen {...props} title="react" setIsLogin={setIsLogin}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
