import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FadeInImage } from '../components/FadeInImage'
import { HeaderTitle } from '../components/HeaderTitle'
import { _styles } from '../theme/appTheme'

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])



    const loadMore = () => {

        const newArray: number[] = []
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i
        }
        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 1000);
    }


    const renderItem = (item: number) => {
        return (
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/1024/1024`}
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
        )
        {/* <Image 
                source={{ uri: `https://picsum.photos/id/${ item }/500/400`}}
                style={{
                    width: '100%',
                    height: 400,
                }}
            /> */}
    }


    return (
        <View style={{
            flex: 1,
        }}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item, index }) => renderItem(item)}

                ListHeaderComponent={() => (
                    <View style={_styles.globalMargin}>
                        <HeaderTitle title='InfiniteScroll Screen' />
                    </View>
                )}
                onEndReached={loadMore}
                // onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{
                        height: 100,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <ActivityIndicator color='#5856D6' size={30} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
    }
})
