import React, { useContext, useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'
import { ThemeContext } from '../contexts/themeContext/ThemeContext'
import { useAnimation } from '../hooks/useAnimation'

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext)

    const { opacity, fadeIn } = useAnimation()
    const [isLoading, setisLoading] = useState(true)

    const finishLoading = () => {
        setisLoading(false)
        fadeIn()
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                isLoading && <ActivityIndicator
                    color={ colors.primary }
                    size={30}
                    style={{
                        position: 'absolute',
                    }}
                />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>
    )
}
