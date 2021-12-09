import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { _styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const top = useSafeAreaInsets().top

    const [refreshing, setRefresing] = useState(false)
    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefresing(true)

        setTimeout(() => {
            console.log('Terminamos el refreshing!')

            setRefresing(false)
            setData('Hola mundo')
        }, 3500);
    }


    return (
        <ScrollView
        style={{
            marginTop: refreshing ? top : 0
        }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    // progressViewOffset={100} // android subir o bajar el Spin
                    progressBackgroundColor='#5856D6' // android
                    colors={['red', 'yellow', 'green']} // android
                    // style={{ backgroundColor: 'yellow'}} // IOS
                    tintColor='red' // IOS
                    title='Cargando...' // IOS
                    titleColor='green' // IOS
                />
            }
        >
            <View style={_styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />

                {
                    data && <HeaderTitle title={data} />
                }

            </View>
        </ScrollView>
    )
}
