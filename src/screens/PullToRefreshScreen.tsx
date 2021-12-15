import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { ScrollView, View, RefreshControl, Text, Button } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../contexts/themeContext/ThemeContext'
import { _styles } from '../theme/appTheme'

export const PullToRefreshScreen = () => {

    const top = useSafeAreaInsets().top

    const navigation = useNavigation()
    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext)

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
                    progressBackgroundColor={ dividerColor } // android
                    colors={ [colors.text] }//{['red', 'yellow', 'green']} // android
                    // style={{ backgroundColor: 'yellow'}} // IOS
                    tintColor={ colors.text } // IOS
                    title='Cargando...' // IOS
                    titleColor={ dark ? 'white': 'black' } // IOS
                />
            }
        >
            <View style={_styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />

                {
                    data 
                    ? <HeaderTitle title={data} />
                    : <Text>***Slide down***</Text>
                }

            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    title='Go Back'
                    onPress={() => navigation.navigate('HomeScreen' as any)}
                />
            </View>

        </ScrollView>
    )
}
