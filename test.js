/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Dimensions,
    PixelRatio,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
} from 'react-native';

var zjScreenWidth = Dimensions.get('window').width;
var zjScreenHeight = Dimensions.get('window').height;

window.width = Dimensions.get('window').width;
window.height = Dimensions.get('window').height;

class RNLianXi extends Component {

    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            leixing:true,
            title:'开启',
        };
        //JS中的对象的属性可以不先声明，而在运行时候动态添加.
        //属性是相对于其他类而言的。
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillReceiveProps(){
        window.PixelRatio = PixelRatio.get();
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate(){
        return (true);
    }
    componentWillUpdate(){
        //如果shouldComponentUpdate返回true才会执行
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    render() {
        console.log('render');
        return(
            /*<Navigator initialRoute={{}}/>*/
            <View style={styles.container}>
                {this.zIndexTest()}
            </View>
        );
    }

    zIndexTest(){
        return(
        <View style={{width:300,height:300,backgroundColor:'#E2E2E2',}}>
            <View style={{width:100,height:100,backgroundColor:'red',left:20,
                position: 'absolute',zIndex:2}}>
                <Text style={{textAlign:'center',color:'white',fontSize:15,fontWeight:'bold'}}>zIndex = 2</Text>
            </View>
            <Image source={require('./imgs/LOGO.png')}
                style={{left:50,top:30,
                position: 'absolute',zIndex:3,backgroundColor:'yellow'}}>
                <Text style={{backgroundColor:'transparent',textAlign:'center',color:'white',
                    fontSize:15,fontWeight:'bold'}}>zIndex = 3</Text>
            </Image>

        </View>
        );
    }

    flexboxTest1(){

        return(
            <Image  style={{width: 200, height: 100}} />
        );
    }

    button(){
        return(
            <TouchableHighlight onPress = {this.buttonActionClick.bind(this)}>
                <Text>{this.state.title}</Text>
            </TouchableHighlight>
        );
    }

    longinView(){
        return(
            <View style={styles.containerFrame}>
                {/*设置背景图*/}
                <Image  source = {require('./imgs/background@2x.png')}>
                    {/*设置logo图标*/}
                    <Image style={{margin:80}} source={require('./imgs/LOGO@2x.png')}/>
                    {/*设置输入框*/}
                    <View style={{justifyContent:'center',flexDirection:'row',height:40,marginLeft:20,marginRight:20,
                        borderWidth:1,borderColor:'white'}}>
                        {/*设置输入框前面的图标*/}
                        <Image style={{width:20,height:20,margin:10}} source={require('./imgs/user@2x.png')}/>
                        {/*设置输入框*/}
                        <TextInput ref = 'mobleText'
                                   keyboardType = "phone-pad"
                                   style={{flex:1,color:'white'}}
                                   placeholder="请输入手机号"
                                   placeholderTextColor='white'>
                        </TextInput>
                    </View>
                    <View style={{justifyContent:'center',flexDirection:'row',height:40,marginLeft:20,marginRight:20,
                        borderWidth:1,borderColor:'white',borderTopWidth:0}}>
                        {/*设置输入框前面的图标*/}
                        <Image style={{width:20,height:20,margin:10}} source={require('./imgs/password@2x.png')}/>
                        {/*设置输入框*/}
                        <TextInput secureTextEntry = {true}
                                   style={{flex:1,color:'white'}}
                                   placeholder="请输入密码"
                                   placeholderTextColor='white'>
                        </TextInput>
                    </View>

                    {/*设置登录按钮*/}
                    <TouchableHighlight onPress = {this.onLonginPress}
                                        style={{marginTop:80,marginLeft:20,marginRight:20,height:40,
                                            borderRadius:5, justifyContent:'center',backgroundColor:'white',}}>
                        <Text style={{textAlign:'center',color:'red',fontSize:18,fontWeight: 'bold',}}>
                            登录
                        </Text>
                    </TouchableHighlight>
                </Image>
            </View>
        );
    }

    onLonginPress = () => {
        let objc = this.refs.mobleText;
        let text = objc._lastNativeText;
        console.warn(text);
    }
//不使用箭头函数时，要在调用该函数后面拼接bind(this)这个函数,输入this参数
    buttonActionClick(){
        console.log('点击方法');
        console.log(this.props);
        let boolType = this.state.leixing;
        let title = boolType ? '关闭':'开启';
        this.setState({
            leixing:!boolType,
            title:title,
        });
    }
    buttonAction =() => {
        console.log('点击方法');
        let boolType = this.state.leixing;
        let title = boolType ? '关闭':'开启';
        this.setState({
            leixing:!boolType,
            title:title,
        });
    }
    test2(){
        return(
            <View style={{margin:40,backgroundColor:'red',height:100,width:100}}></View>
        );
    }
    test1(){
        return(
            <View style={styles.containerFrame}>
                <Text style={{textAlign:'center',top:20,fontSize:20 ,backgroundColor:'red', paddingTop:20}}>
                    练习
                </Text>
            </View>
        );
    }
    appDelegate(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerFrame:{
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('RNLianXi', () => RNLianXi);
