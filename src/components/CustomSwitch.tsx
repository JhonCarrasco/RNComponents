import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../contexts/themeContext/ThemeContext';

interface Props {
    isOn: boolean,
    onChange: (value: boolean) => void
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const { theme: { colors } } = useContext(ThemeContext)

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    }

    return (
        <Switch
            trackColor={{ false: '#cdcbcc', true: colors.primary }}
            thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
            ios_backgroundColor='#dddbdb'
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
