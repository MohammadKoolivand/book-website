import React from 'react'
import profileImage from "../../../assets/images/profile/profile004.jpg";
import coverImage from "../../../assets/images/covers/onLove.jpg";
import { View, StyleSheet, Image, Text } from 'react-native'
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
    rootWant: {
        width: '100%',
        height: 230,
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "#ccc",
        margin: 5,
        marginBottom: 10

    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        height: '25%',
        padding: 3,
    },
    body: {
        width: '100%',
        flexDirection:'row',
        height: '60%',
        paddingLeft:5,
        padding:2,
        marginBottom:5

    },
    action: {
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    actionLike: {
        marginRight: 10,
        marginLeft: 10,
        fontSize: 12
    },
    actionComment: {
        fontSize: 12
    },
    profileimage: {
        fontSize: 12
    },
    headerDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:1,
        alignItems: 'center'
    },
    headerDetailText: {
        display: 'flex',
        alignSelf:'flex-end',
        marginTop:-9

    }
})
export default function Progress() {
    return (
        <View style={styles.rootWant}>
            <View style={styles.header}>
                <Image style={{ width: 40, height: 40, borderRadius: 20, marginRight: 5 }} source={profileImage} />
                <View style={{display:'flex'}}>
                    <View style={styles.headerDetail}>
                        <Button titleStyle={{ fontSize: 15 }} containerStyle={{ color: 'blue' }} title="Mohammad" type="clear" />
                        <Text>made progress</Text>
                    </View>
                    <View style={styles.headerDetailText}>
                        <Text style={{ fontSize: 10, color: '#ccc' }}>Jan 28, 2019 01:24 AM</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
            <Image style={{ width: 90, height: 140, marginRight: 5 }} source={coverImage} />
            <View style={{marginLeft:10, height:'90%', justifyContent:'flex-start'}}>
            <Text style={{marginBottom:-7}}>On Love</Text>
            <Button titleStyle={{ fontSize: 12, alignSelf:'flex-start' }} containerStyle={{marginBottom:10, color: 'blue', alignSelf:'flex-start' }} title="Alain do Botton" type="clear"/>
            <Button titleStyle={{ fontSize: 12, width:100 }} containerStyle={{ color: 'blue'}} title="Reading" type="outline"/>
            <View style={{width:'100%',borderWidth:1, height:14, marginTop:20}}>
            <View style={{width:'40%', height:12, backgroundColor:'#ff5656'}}>

            </View>
            </View>
            </View>
            </View>
            <View style={styles.action}>
                <Button titleStyle={{ fontSize: 12 }} containerStyle={{ color: 'blue' }} title="Like" type="clear" />
                <Button titleStyle={{ fontSize: 12 }} containerStyle={{ color: 'blue' }} title="Comment" type="clear" />

            </View>
        </View>
    )
}
