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

export default class SecondVC extends Component{
    constructor(props){
        super(props);
        alert('这是传的参数:' + this.props.param);
    }

    _onPressAction(){
        this.props.callback('这是回调的值');
        this.props.navigator.pop();
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress = {() => {this._onPressAction()}}>
                    <Text style={styles.welcome}>第二个界面</Text>
                </TouchableHighlight>
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