import { Avatar } from 'react-native-elements';
// import AsyncStorage from '@react-native-community/async-storage'
import React from 'react'
// import { TouchableOpacity } from 'react-native'
import { View, Image, Text } from 'react-native'
import userProfile from "../../../assets/images/profile/profile004.jpg";
import levelBadge from "../../../assets/icons/levelBadge.png";

export default function MoreScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Text>MoreScreen</Text>
            <TouchableOpacity onPress={() => {
                AsyncStorage.removeItem('user')
                setIsLogin(false)
            }}>
                <Text>Open Drawer</Text>
            </TouchableOpacity> */}

            <View style={{borderBottomWidth:1, borderColor:"#ccc",marginBottom:20, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{ width: 80, height: 80, borderRadius: 20, marginRight: 5 }} source={userProfile} />
            <Text style={{ fontWeight: 'bold', marginTop: 15 }}>Mohammad Koolivand</Text>
            <Image style={{ width: 40, height: 40, borderRadius: 20, marginRight: 5 }} source={levelBadge} />
            <Text style={{ fontSize:14, marginTop: 15 }}>114 Books</Text>
            </View>

            <Text>Friends</Text>
            <Text>Information</Text>

        </View>
    )
}

