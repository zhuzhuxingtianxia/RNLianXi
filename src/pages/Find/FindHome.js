
import React,{ useState, useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated
} from 'react-native';
import AlertModal from '@com/AlertModal';

function FindHome({navigation,route}) {

    const [vasible, setVasible] = useState(false)
    const [scrollY] = useState(new Animated.Value(0))

    useEffect(() => {

        const animatedObser = scrollY.addListener(obj => {
            console.log('---:',obj)
        })
        return () => {
            scrollY.removeListener(animatedObser)
        }
    },[])

    const onPress = () => {
        setVasible(true)
        // navigation.navigate('Detail')
    }

    return (
        <View style={{flex:1}}>
            <StatusBar />
            <Animated.ScrollView 
                contentInsetAdjustmentBehavior="automatic"
                scrollEventThrottle={1}
                style={styles.content}
                onScroll={Animated.event(
                    [
                      {
                        nativeEvent: {
                          contentOffset: { y: scrollY }
                        }
                      }
                    ],
                    { useNativeDriver: true }
                  )
                }
            >
                <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
                    <Text>按钮</Text>
                </TouchableOpacity>
                <View style={styles.subContent}>
                    <Text>{'xpxpxp'}</Text>
                </View>
                <AlertModal visible={vasible}
                    onOk={()=>{
                        setVasible(false)
                    }}
                />
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'red',
        paddingVertical: 20
    },
    button: {
        backgroundColor: 'white',
        height: 44,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    subContent: {
        flex: 1,
        height: 500,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FindHome