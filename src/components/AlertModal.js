import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"

const AlertModal = (props) => {

    const { visible } = props || {}

    const onClose = () => {
        props.onClose && props.onClose()
    }

    const onOk = () => {
        props.onOk && props.onOk()
    }

    return (
        <Modal visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.centerView}>
                <View style={styles.modalView}>
                    <Text>Hello World!</Text>
                    <TouchableOpacity activeOpacity={0.8} style={styles.okbutton} onPress={onOk}>
                        <Text style={styles.textStyle}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>    
        </Modal>
    )
}

const styles = StyleSheet.create({
    centerView: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    okbutton: {
        backgroundColor: '#f194ff',
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default AlertModal;