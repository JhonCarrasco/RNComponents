import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { Animated, Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../contexts/themeContext/ThemeContext'
import { useAnimation } from '../hooks/useAnimation'
import { COLORS } from '../theme/appTheme'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = () => {

    const navigation = useNavigation()
    const { theme: { colors } } = useContext(ThemeContext)

    const [activeIndex, setActiveIndex] = useState(0)
    const [isLast, setIsLast] = useState(false)
    const { opacity, fadeIn } = useAnimation()

    const renderItem = ({ title, desc, img }: Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={[styles.title, { color: colors.primary }]}>{title}</Text>
                <Text style={[styles.subtitle, { color: colors.text }]}>{desc}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50,
            }}
        >
            <HeaderTitle title='Slides Screen' />

            <Carousel
                //   ref={(c) => { _carousel = c; }}
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                onSnapToItem={(index) => {
                    setActiveIndex(index)
                    fadeIn(1000)
                }}
                onEndReached={() => setIsLast(true)}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
            }}>
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: colors.primary,
                    }}
                />

                {
                    isLast && (
                        <Animated.View
                            style={{
                                opacity
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: colors.primary,
                                    width: 140,
                                    height: 50,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('HomeScreen' as any)}
                            >
                                <Text
                                    style={{
                                        fontSize: 25,
                                        color: 'white',
                                        lineHeight: 28,
                                    }}>Entrar</Text>
                                <Icon
                                    name='chevron-forward-outline'
                                    color='white'
                                    size={30}
                                />
                            </TouchableOpacity>
                        </Animated.View>
                    )
                }
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
    }
})
