import React from 'react'
import { FlatList, View } from 'react-native'
import { _styles } from '../theme/appTheme'
import { FlatListMenuItem } from '../components/FlatListMenuItem'
import { menuItems } from '../data/menuItems'
import { HeaderTitle } from '../components/HeaderTitle'


export const HomeScreen = () => {

    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.5,
                    marginVertical: 5,
                }}>

            </View>
        )
    }


    return (

        <View style={[{ flex: 1 }, _styles.globalMargin]}>

            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title='Opciones de menú' />}
                ItemSeparatorComponent={itemSeparator}
            />
        </View>
    )
}
