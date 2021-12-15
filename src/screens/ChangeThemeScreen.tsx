import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../contexts/themeContext/ThemeContext'
import { COLORS, _styles } from '../theme/appTheme'

export const ChangeThemeScreen = () => {

    const { theme: { colors }, setDarkTheme, setLightTheme } = useContext(ThemeContext)
    const navigation = useNavigation()
    
    return (
        <View style={_styles.globalMargin}>
            <HeaderTitle title='Change Theme Screen' />

            <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
            }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}
                    onPress={setLightTheme}
                >
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 22,
                        }}
                    >Light</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}
                    onPress={setDarkTheme}
                >
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 22,
                        }}
                    >Dark</Text>
                </TouchableOpacity>
            </View>
            <Button
                title='Go Back'
                onPress={() => navigation.navigate('HomeScreen' as any)}
            />
        </View>
    )
}
