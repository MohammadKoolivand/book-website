import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from "./screens/login/index";
import MainTabNavigator from "./routes/MainTabNavigator";
import AsyncStorage from '@react-native-community/async-storage';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export default function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFonts()
  }, [])
  const loadFonts = async () => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Vazir: require('./assets/fonts/Vazir-Bold-FD-WOL.ttf'),
    });
    // await Asset.loadAsync({

    // })
    AsyncStorage.getItem('user').then((user) => {
      if (user === null || user.length === 0) {
        setIsLogin(false)
        setLoading(false)
      } else {
        setIsLogin(true)
        setLoading(false)
      }
    })
  }
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <NavigationContainer>
      {isLogin ?
        <MainTabNavigator setIsLogin={setIsLogin} />
        :
        <LoginNavigator setIsLogin={setIsLogin} />
      }
    </NavigationContainer>
  );
}

