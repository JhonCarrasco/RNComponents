import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation102Screen = () => {

    const { panResponder, pan } = useAnimation()
    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={{
                    ...styles.box,
                    transform: [
                        { translateX: pan.getLayout().left },
                        {translateY: pan.getLayout().top},
                    ]
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#71d0d4',
        width: 150,
        height: 150,
    }
})
