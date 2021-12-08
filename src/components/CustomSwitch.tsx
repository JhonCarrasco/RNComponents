import React, { useState } from 'react'
import { Platform, Switch } from 'react-native'

interface Props {
    isOn: boolean,
    onChange: (value: boolean) => void
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    }

    return (
        <Switch
            trackColor={{ false: '#cdcbcc', true: '#782eac' }}
            thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
            ios_backgroundColor='#dddbdb'
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
