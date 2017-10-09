/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import SecondVC from './SecondVC';

export default class FirstVC extends Component{
    constructor(props){
        super(props);
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes();
        const {title} = routers[routers.length - 1];
        if (title === 'title'){
            console.log(title);
        }
    }
    //
    _actionClick(title,tag){
        const {navigator} = this.props;
        if (navigator){
            navigator.push({
                title:'第二个界面',
                component:SecondVC,
                params:{
                    param:'要传的参数',
                    callback(sting){
                        alert(sting);
                    }
                }
            });
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress = {() => this._actionClick('title',2)}>
                    <Text style={styles.welcome}>第一个界面</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
});