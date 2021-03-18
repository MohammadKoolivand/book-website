import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RegisterScreen from "./pages/SignupScreen";
import LoginScreen from "./pages/SigninScreen";

const Stack = createStackNavigator()
export default function LoginNavigator({ setIsLogin }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login">
                {props => <LoginScreen {...props} title="react" setIsLogin={setIsLogin}/>}
            </Stack.Screen>
            <Stack.Screen name="register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}
