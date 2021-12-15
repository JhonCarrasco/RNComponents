import { useContext } from "react"
import { StyleSheet } from "react-native"
import { ThemeContext } from "../contexts/themeContext/ThemeContext"


export const _styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },
})

export const COLORS = () => {

    const { theme: { colors } } = useContext(ThemeContext)
    console.log(colors)
    return {
        colorsTheme: colors
    }
}

