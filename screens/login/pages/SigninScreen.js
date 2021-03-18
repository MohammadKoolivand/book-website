import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Input, Button } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import GoodreadsImage from '../../../assets/images/goodreadsImage.jpg';

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerStyle: {
        width: '90%',
        marginTop: 30,
    },
    inputContainerStyle: {
        borderWidth: .5,
        borderColor: "#e1e1e1",
        borderRadius: 5
    },
    inputStyle: {
        fontSize: 14,
        paddingLeft: 10
    },
    forgetTitle: {
        fontSize: 12
    },
    footer: {
        backgroundColor: "#ccc",
        bottom: 0,
        borderTopWidth: .5,
        height: 40,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default function SigninScreen({ navigation, setIsLogin }) {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
    const keyboardOpen = () => {
        setIsKeyboardOpen(true)
    }
    const keyboardClose = () => {
        setIsKeyboardOpen(false)
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <View style={styles.rootView}>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Image style={{ resizeMode: 'stretch', height: 100, backgroundColor: "red", marginBottom: 10 }} source={GoodreadsImage} />
                    <Input placeholder="userName" containerStyle={styles.inputContainerStyle}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle} onFocus={keyboardOpen} onBlur={keyboardClose} />
                    <Input placeholder="password" containerStyle={[styles.inputContainerStyle, { marginTop: 10 }]} inputContainerStyle={styles.inputContainerStyle} inputStyle={styles.inputStyle} secureTextEntry={true} onFocus={keyboardOpen} onBlur={keyboardClose} />
                    <Button containerStyle={{ alignSelf: 'flex-end' }} titleStyle={styles.forgetTitle} title="رمز عبور را فراموش کرده ام" type="clear" />
                    <Button containerStyle={{ width: '90%', marginTop: 10 }} title="ورود" onPress={async () => {
                        await AsyncStorage.setItem('user', 'Ali')
                        setIsLogin(true)
                    }} />

                    {/* <TouchableOpacity onPress={async () => {
                        await AsyncStorage.setItem('user', 'Ali')
                        setIsLogin(true)
                    }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('register', { name: "MohammadKoolivand" })}>
                        <Text>RegisterScreen</Text>
                    </TouchableOpacity> */}
                </View>
                {isKeyboardOpen ? null :
                    <View style={styles.footer}>
                        <Button containerStyle={{ color: 'blue' }} title="ثبت نام" type="clear" onPress={() => navigation.navigate('register', { name: "MohammadKoolivand" })} />
                        <Text style={{ fontFamily: 'Vazir', fontSize: 25 }} >حساب کاربری ندارید؟</Text>

                    </View>}

            </View>
        </KeyboardAvoidingView>
    )
}
