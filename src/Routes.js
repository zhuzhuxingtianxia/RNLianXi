import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabScreen from './pages/MainTab/MainTabScreen'
import Detail from './pages/Main/Detail';

const Stack = createNativeStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='HomeTab'
                component={MainTabScreen}
                options={{
                    title:'首页',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShown: false
                }}
            />
            <Stack.Screen name='Detail'
                component={Detail}
                options={({navigation,route}) => ({
                    title: '详情',
                    headerBackTitle: '',
                    headerTintColor: 'black',
                    // headerBackImageSource: require('./assets/wares_zuohua.png'),
                    // headerLeft: (opt)=>{
                    //     return (
                    //         // <Text>返回</Text>
                    //         <Image resizeMode='center' source={require('./assets/wares_zuohua.png')}/>
                    //     )
                    // }
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
)



export default Routes;