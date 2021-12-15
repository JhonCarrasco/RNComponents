import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { ThemeContext } from '../contexts/themeContext/ThemeContext'
import { useAnimation } from '../hooks/useAnimation'


export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation()
    const navigation = useNavigation()
    const { theme: { colors } } = useContext(ThemeContext)
    
    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.box,
                    backgroundColor: colors.primary,
                    marginBottom: 20,
                    opacity,
                    transform: [{
                        translateY: position,
                    }]
                }} />

            <Button
                title='FadeIn'
                onPress={() => {
                    fadeIn()
                    startMovingPosition(-100, 500)
                }}
            />

            <Button
                title='FadeOut'
                onPress={() => fadeOut()}
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
