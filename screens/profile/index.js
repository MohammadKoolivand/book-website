import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from "./pages/ProfileScreen";

const Stack = createStackNavigator()
export default function LoginNavigator({ setIsLogin }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="profile">
                {props => <ProfileScreen {...props} title="react" setIsLogin={setIsLogin}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
