import React from "react";
import {
    Alert,
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useWindowDimensions,
    Dimensions
} from "react-native"

const size = Dimensions.get('window')

function MyCenter({navigation,route}) {

    function onPress(){
        navigation.navigate('Detail')
    }

    return (
        <View style={styles.container}>
            <Animated.ScrollView style={styles.scrollStyle}>
                <Image source={require('@assets/landscape.png')} 
                    style={styles.headerImg}
                />
                <TouchableOpacity style={styles.button} onPress = {onPress}>
                    <Text>个人中心</Text>
                </TouchableOpacity>
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    scrollStyle: {
        flex: 1,
        backgroundColor: 'pink'
    },
    headerImg: {
        width: size.width,
        height: 170 / 256 * size.width
        // resizeMode: 'cover'
    },
    button: {
        alignItems:'center',
        margin: 30,
        padding: 10,
        borderWidth:1,
        borderColor: 'gray'
    }
})

export default MyCenter