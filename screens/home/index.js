import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../home/pages/HomeScreen";
import FriendsScreen from "../home/pages/FriendsScreen";

const Stack = createStackNavigator()
export default function index({ setIsLogin }) {
    return (
        <Stack.Navigator >
            <Stack.Screen name="home">
                {props => <HomeScreen {...props} title="react" setIsLogin={setIsLogin} />}
            </Stack.Screen>
            <Stack.Screen name="friends" component={FriendsScreen} />
        </Stack.Navigator >
    )
}
