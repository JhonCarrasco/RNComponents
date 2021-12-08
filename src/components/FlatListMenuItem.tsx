import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/appInterfaces'


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { name, icon, component } = menuItem
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(component as any)}
        >
            <View
                style={styles.container}
            >
                <Icon
                    name={icon}
                    color='gray'
                    size={23}
                />
                <Text
                    style={styles.itemText}
                >{name}</Text>

                <View style={{ flex: 1 }}></View>

                <Icon
                    name='chevron-forward-outline'
                    color='gray'
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    },
})
