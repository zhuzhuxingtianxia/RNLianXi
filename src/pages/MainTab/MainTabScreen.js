import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Home from '@pages/Main/Home'
import FindHome from '@pages/Find/FindHome'
import MyCenter from '@pages/MyCenter/MyCenter';

import ic_tab_home_active from '@assets/tabs/ic_tab_home_active.png'
import ic_tab_home_normal from '@assets/tabs/ic_tab_home_normal.png'

import ic_tab_group_active from '@assets/tabs/ic_tab_group_active.png'
import ic_tab_group_normal from '@assets/tabs/ic_tab_group_normal.png'

import ic_tab_profile_active from '@assets/tabs/ic_tab_profile_active.png'
import ic_tab_profile_normal from '@assets/tabs/ic_tab_profile_normal.png'

const Tab = createBottomTabNavigator();

const MainTabScreen = ()=> {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused
                    ? ic_tab_home_active
                    : ic_tab_home_normal;
                } else if (route.name === 'FindHome') {
                    iconName = focused ? ic_tab_group_active : ic_tab_group_normal;
                }else if (route.name === 'MyCenter') {
                    iconName = focused ? ic_tab_profile_active : ic_tab_profile_normal;
                }
                
                // You can return any component that you like here!
                return (
                    <View style={{width: size.width,height: size.height}}>
                        <Image source={ iconName } 
                            resizeMode='center'
                        />
                </View>
                )
                },
                tabBarActiveTintColor: '#39B344',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: route.name === 'Home' ? '首页' : route.name === 'FindHome' ? '发现' : '个人中心'
            })}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    title:'首页',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            />
            <Tab.Screen name="FindHome" component={FindHome} 
                options={{ tabBarBadge: 3 , title: '发现'}}
            />
            <Tab.Screen name="MyCenter" component={MyCenter} 
                options={{headerShown: false}}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen;