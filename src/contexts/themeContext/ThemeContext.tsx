import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { lightTheme, darkTheme, themeReducer, ThemeState } from "./ThemeReducer";

interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: any) => {

    const colorScheme = useColorScheme()

    /* Android conocer el status de mi aplicacion - para saber si el thema por defecto del dispositivo */
    // const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark') ? darkTheme: lightTheme )
    /* IOS - actualmente funca para ambos */
    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme: lightTheme )

    /* Android conocer el status de mi aplicacion - para saber si el thema por defecto del dispositivo */
    // useEffect(() => {        
    //     AppState.addEventListener('change', (status) => {
    //         // console.log({ status })
    //         if(status == 'active') {
    //             (Appearance.getColorScheme() === 'light')
    //             ? setLightTheme()
    //             : setDarkTheme()
    //         }
    //     })
    // }, [])

    /* Solo en IOS - a la fecha actual ya funca para ambos*/
    useEffect(() => {

        (colorScheme === 'light')
        ? setLightTheme()
        : setDarkTheme()

    }, [colorScheme])

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' })
        console.log('setDarkTheme')
    }

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' })
        console.log('setLightTheme')
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
