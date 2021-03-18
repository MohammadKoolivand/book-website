import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native'
import WantToRead from "../../../components/tabs/home/want";
import Start from "../../../components/tabs/home/start";
import Finish from "../../../components/tabs/home/finish";
import Progress from "../../../components/tabs/home/progress";
import Suggest from "../../../components/tabs/home/suggest";
import Rating from "../../../components/tabs/home/rating";
import Review from "../../../components/tabs/home/review";

const styles = StyleSheet.create({
    rootHome:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    }
})
export default function HomeScreen({ navigation, setIsLogin }) {
    return (
        <View style={styles.rootHome}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('friends')}>
                <Text>Friends</Text>
            </TouchableOpacity> */}

            <ScrollView>
            <Suggest />
            <Review />
            <Rating />
            <Progress />
            <WantToRead />
            <Start />
            <Finish />
            </ScrollView>

        </View>
    )
}
