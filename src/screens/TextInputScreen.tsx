import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text, Button } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../contexts/themeContext/ThemeContext'
import { useForm } from '../hooks/useForm'
import { _styles } from '../theme/appTheme'


export const TextInputScreen = () => {

    const navigation = useNavigation()

    const { theme: { colors, dividerColor } } = useContext(ThemeContext)

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false,
    })


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[_styles.globalMargin]}>
                        <HeaderTitle title='TextInputs' />
                        <TextInput
                            style={[
                                styles.textInput,
                                {
                                    borderColor: colors.text,
                                    color: colors.text,
                                }
                            ]}
                            placeholder='Ingrese su nombre'
                            placeholderTextColor={dividerColor}
                            autoCorrect={false}
                            autoCapitalize='words'
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput
                            style={[
                                styles.textInput,
                                {
                                    borderColor: colors.text,
                                    color: colors.text,
                                }
                            ]}
                            placeholder='Ingrese su email'
                            placeholderTextColor={dividerColor}
                            autoCorrect={false}
                            autoCapitalize='none'
                            onChangeText={(value) => onChange(value, 'email')}
                            keyboardType='email-address'
                            keyboardAppearance='dark'
                        />

                        <View style={styles.switchRow}>
                            <Text style={styles.switchText} >Subscribed?</Text>
                            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />

                        <TextInput
                            style={[
                                styles.textInput,
                                {
                                    borderColor: colors.text,
                                    color: colors.text,
                                }
                            ]}
                            placeholder='Ingrese su teléfono'
                            placeholderTextColor={dividerColor}
                            onChangeText={(value) => onChange(value, 'phone')}
                            keyboardType='phone-pad'
                        />

                        <View style={{ marginTop: 20 }}>
                            <Button
                                title='Go Back'
                                onPress={() => navigation.navigate('HomeScreen' as any)}
                            />
                        </View>

                    </View>
                </TouchableWithoutFeedback>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,

        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
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
