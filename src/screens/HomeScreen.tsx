import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme'
import { MenuItem } from '../interfaces/appInterfaces'
import { FlatListMenuItem } from '../components/FlatListMenuItem'

const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen',
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen',
    }
]
export const HomeScreen = () => {

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text style={styles.title}>Opciones de menú</Text>
            </View>
        )
    }

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
        <SafeAreaView style={[{ flex: 1 }, styles.globalMargin]}>
            <View style={{ flex: 1 }}>

                {/* <Icon name="rocket" size={30} color="#900" /> */}
                <FlatList
                    data={menuItems}
                    renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                    keyExtractor={(item) => item.name}
                    ListHeaderComponent={renderListHeader}
                    ItemSeparatorComponent={itemSeparator}
                />
            </View>
        </SafeAreaView>
    )
}
