# react-native 

```
 "react": "17.0.2",
 "react-native": "0.67.3",
 "@react-navigation/native": "^6.0.8",
 "@react-navigation/native-stack": "^6.5.0",
```

## 编译并运行
```
yarn ios

```

## 设置路径别名

```
yarn add babel-plugin-root-import --dev
```
配置别名，打开`babel.config.js`文件
修改如下：
```
module.exports = {
  plugins: [
    [ "babel-plugin-root-import",{
        paths: [
            {
                rootPathSuffix: './src/assets',
                rootPathPrefix: '@assets'
            },
            {
                rootPathSuffix: './src/common',
                rootPathPrefix: '@common'
            }
        ]
    } ]
  ],
  presets: ['module:metro-react-native-babel-preset']
};
```

然后清除缓存重新打包
```
yarn start --reset-cache
```

# 导航结构
```
const Screens = [
  { name: '', compontent: Com, 
    options: { title: '', headerTintColor: '', headerStyle:{}, headerTitleStyle:{} } 
  }
]
```

```
<NavigationContainer>
  <Stack.Navigator mode='modal'>
    <Stack.Screen name="Main" 
      component={
        <MStack.Navigator>
          <MStack.Screen component={
            <Tab.Navigator>
              <Tab.Screen />
              <Tab.Screen />
              <Tab.Screen />
            </Tab.Navigator>
          }/>

          <MStack.Screen name='detail' options={{}} component={Detail}/>
          {
            Screens.map((obj) => {
              return <MStack.Screen {...obj}/>
            })
          }
        </MStack.Navigator>
      }
      options={{
        headerShown: false
      }}
    />
    {
      Modals.map((obj,index) => {
        return <Stack.Screen {...obj}/>
      })
    }
  </Stack.Navigator>
</NavigationContainer>
```

