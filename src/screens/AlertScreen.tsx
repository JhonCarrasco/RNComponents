import React from 'react'
import { Alert, Button, Platform, View } from 'react-native'
import prompt from 'react-native-prompt-android'
import { HeaderTitle } from '../components/HeaderTitle'
import { _styles } from '../theme/appTheme'

export const AlertScreen = () => {

    const showAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Ask me later",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            // solo en android - opcional
            {
                cancelable: true,
                onDismiss: () => console.log('OnDismiss')
            }
        )

    // solo en IOS
    const showPropmtIOS = () => {
        Alert.prompt(
            "Prompt Title",
            "My Prompt Msg",
            (value: string) => console.log('value: ', value),
            'plain-text',
            'Hola mundo cruel',
            'email-address'

        )
    }

    // Prompt para ambas plataformas - OPCIONAL (library 'react-native-prompt-android')
    const showPropmtLibrery = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        )
    }


    return (
        <View style={[_styles.globalMargin, { flex: 1, justifyContent: 'space-around', alignItems: 'center' }]}>
            <HeaderTitle title='Alerts' />

            <Button
                title='Mostrar alert'
                onPress={showAlert}
            />

            {
                Platform.OS === 'ios' && (
                    <Button
                        title='Mostrar prompt IOS'
                        onPress={showPropmtIOS}
                    />
                )
            }

            <Button
                title='Mostrar prompt genérico'
                onPress={showPropmtLibrery}
            />

        </View>
    )
}
