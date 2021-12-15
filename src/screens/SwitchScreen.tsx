import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../contexts/themeContext/ThemeContext';
import { _styles } from '../theme/appTheme'

export const SwitchScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext)
    const navigation = useNavigation()

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    })

    const { isActive, isHungry, isHappy } = state

    const onChange = (value: boolean, field: keyof typeof state) => { // o field: string
        setState({
            ...state,
            [field]: value,
        })
    }
    

    return (
        <View style={_styles.globalMargin}>

            <HeaderTitle title='Switches' />

            <View style={ styles.switchRow }>
                <Text style={[styles.switchText, { color: colors.text }]} >isActive</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange( value, 'isActive')} />
            </View>
            <View style={ styles.switchRow }>
                <Text style={[styles.switchText, { color: colors.text }]} >isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange( value, 'isHungry')} />
            </View>
            <View style={ styles.switchRow }>
                <Text style={[styles.switchText, { color: colors.text }]} >isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange( value, 'isHappy')} />
            </View>

            <Text style={[styles.switchText, { color: colors.text }]}>
                {JSON.stringify(state, null, 5)}
            </Text>

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
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    switchText: {
        fontSize: 25,
    },
})
