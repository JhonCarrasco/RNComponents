import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {

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
                    color='#3c4043'
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
