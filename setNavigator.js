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

import FirstVC from './FirstVC';

class RNLianXi extends Component{
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            hideNavBar: true,
        };
    }

    _renderScene =(route,navigator) =>{
        //这个方法会执行多次,加载时执行一次,push时执行两次,pop时执行一次
        let Component = route.component;
        return <Component {...route.params} navigator = {navigator}/>
    }

    render() {
        console.log('render');
        return(
            <Navigator ref={this._setNavigatorRef}
                       debugOverlay={false}
                       initialRoute={{component:FirstVC,title:'title',id:'Longin'}}
                       renderScene={this._renderScene}
                       navigationBar={this._navigationBar()}/>

        );
    }
    _navigationBar(){
        //需要先声明才能使用
        var routeMapper = {
            LeftButton(route,navigator,index,navState){
                if (index > 0){
                    return(
                        <TouchableOpacity
                            onPress = {() => navigator.pop()}
                            style = {styles.button}>
                            <Text style={styles.buttonText}> 返回</Text>
                        </TouchableOpacity>
                    );
                }else {
                    return(
                        <TouchableOpacity
                            onPress = {() =>navigator.pop()} style={styles.button}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity>
                    );
                }
            },
            RightButton(route, navigator, index, navState){
                if (index > 0 && route.rightButton){
                    return(
                        <TouchableOpacity
                            onPress ={() => navigator.pop()} style = {styles.button}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity>
                    );
                }else { return null}
            },
            Title(route, navigator, index, navState){
                return(
                    <View style={styles.title}>
                        <Text style={styles.buttonText}>
                            {route.title ? route.title : '没有标题'}
                        </Text>
                    </View>
                );
            },
        };

        if (!this.state.hideNavBar){
            return(
                <Navigator.NavigationBar style = {styles.bar}
                                         routeMapper = {routeMapper}/>
            );
        }else {
            return <Text style={{height:0, position:'absolute', top:0}} />;
        }
    }

    _onWillFocus = (event) => {
        if(event.data.route.id == 'Longin') {
            this.setState({
                hideNavBar: true,
            });
        } else {
            this.setState({
                hideNavBar: false,
            });
        }
    }

    // ref={this._setNavigatorRef}
    // debugOverlay={false}
    _setNavigatorRef = (navigator,route) => {
        if (navigator !== this._navigator) {
            this._navigator = navigator;
            if (navigator) {
                // 添加监听事件.
                this._listeners = [
                    navigator.navigationContext.addListener('willfocus', this._onWillFocus),
                ];
            }
        }
    }

    componentWillUnmount() {
        this._listeners && this._listeners.forEach(listener => listener.remove());
    }
}

const styles = StyleSheet.create({
        bar :{
            alignItems:'center',
            backgroundColor:'#55ACEE',
            shadowOffset:{
                width:1,
                height:0.5,
            },
            shadowColor:'#55ACEE',
            shadowOpacity:0.8,
        },
        title: {
            flex:1, alignItems: 'center', justifyContent: 'center'
        },
        button: {
            flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
        },
        buttonText: {
            fontSize: 18, color: 'white',fontWeight: '400'
        }

});

AppRegistry.registerComponent('RNLianXi', () => RNLianXi);

/*
 //需要先声明
const styles ={
    bar :{
        alignItems:'center',
        backgroundColor:'#55ACEE',
        shadowOffset:{
            width:1,
            height:0.5,
        },
        shadowColor:'#55ACEE',
        shadowOpacity:0.8,
    },
    title: {
        flex:1, alignItems: 'center', justifyContent: 'center'
    },
    button: {
        flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18, color: 'white',fontWeight: '400'
    }
}
 */