import React from 'react'
import { View, Text } from 'react-native'
import Genre from "../../../components/tabs/search/genre";

const SearchScreen = () => {
    return (
        <View style={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
        </View>
    )
}

export default SearchScreen
