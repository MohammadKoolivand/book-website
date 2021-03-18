import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from "../screens/home/index";
import MyBookStackScreen from "../screens/mybooks/index";
import SearchStackScreen from "../screens/search/pages/SearchScreen";
import ProfileStackScreen from "../screens/profile/pages/ProfileScreen";
import { Text } from 'react-native';
import { Icon } from 'native-base';

const Tabs = createBottomTabNavigator()
export default function MainTabNavigator({ setIsLogin }) {
  return (

    <Tabs.Navigator tabBarOptions={{ activeTintColor: "#ccc", activeTintColor: "red" }}>
      <Tabs.Screen options={{
        tabBarLabel: ({ focused }) => <Text style={{ fontSize: 15, color: focused ? "blue" : "#000" }}>خانه</Text>,
        tabBarIcon: ({ focused, color }) => <Icon name="home-outline" type="Ionicons"
          style={{ fontSize: focused ? 20 : 15, color: color }} />
      }}
        name="homeStack" >
        {props => <HomeStackScreen {...props} title="react" setIsLogin={setIsLogin} />}
      </Tabs.Screen>
      <Tabs.Screen options={{
        tabBarLabel: ({ focused }) => <Text style={{ fontSize: 15, color: focused ? "blue" : "#000" }}>جستجو</Text>,
        tabBarIcon: ({ focused, color }) => <Icon name="search" type="Feather" style={{ fontSize: focused ? 20 : 15, color: color }} />
      }}
        name="searchStack" >
        {props => <SearchStackScreen {...props} title="react" setIsLogin={setIsLogin} />}
      </Tabs.Screen>

      <Tabs.Screen options={{
        tabBarLabel: ({ focused }) => <Text style={{ fontSize: 15, color: focused ? "blue" : "#000" }}>کتاب های من</Text>,
        tabBarIcon: ({ focused, color }) => <Icon name="book" type="AntDesign" style={{ fontSize: focused ? 20 : 15, color: color }} />
      }}
        name="mybooksStack" >
        {props => <MyBookStackScreen {...props} title="react" setIsLogin={setIsLogin} />}
      </Tabs.Screen>

      <Tabs.Screen options={{
        tabBarLabel: ({ focused }) => <Text style={{ fontSize: 15, color: focused ? "blue" : "#000" }}>پروفایل</Text>,
        tabBarIcon: ({ focused, color }) => <Icon name="face-profile" type="MaterialCommunityIcons" style={{ fontSize: focused ? 20 : 15, color: color }} />
      }}
        name="profileStack" >
        {props => <ProfileStackScreen {...props} title="react" setIsLogin={setIsLogin} />}
      </Tabs.Screen>


    </Tabs.Navigator>
  )
}
