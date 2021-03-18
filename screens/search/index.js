import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from "./pages/SearchScreen";

const Stack = createStackNavigator()
export default function LoginNavigator({ setIsLogin }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="search">
                {props => <SearchScreen {...props} title="react" setIsLogin={setIsLogin}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
