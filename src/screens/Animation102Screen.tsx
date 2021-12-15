import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { ThemeContext } from '../contexts/themeContext/ThemeContext'
import { useAnimation } from '../hooks/useAnimation'

export const Animation102Screen = () => {

    const { panResponder, pan } = useAnimation()
    const navigation = useNavigation()
    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={{
                    ...styles.box,
                    backgroundColor: colors.primary,
                    transform: [
                        { translateX: pan.getLayout().left },
                        { translateY: pan.getLayout().top },
                    ]
                }}
            />

            <View style={{ marginTop: 20 }}>
                <Button
                    title='Go Back'
                    onPress={() => navigation.navigate('HomeScreen' as any)}
                />
            </View>
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
        width: 150,
        height: 150,
    }
})
