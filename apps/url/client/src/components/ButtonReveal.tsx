import { Button, Text } from "@chakra-ui/react"
import { useState } from 'react'

interface ButtonRevealProps {
    short: string,
    original: string
}

export const ButtonReveal = (props: ButtonRevealProps) => {
    // State
    const [currentDisplay, setCurrentDisplay] = useState(props.short);
    const [currentDisplayName, setCurrentDisplayName] = useState('Short');
    const [color, setColor] = useState('teal');

    // Utility
    function changeDisplay() {
        if(currentDisplay === props.short) {
            setCurrentDisplay(props.original);
            setCurrentDisplayName('Original')
            setColor('red');
        }
        else {
            setCurrentDisplay(props.short)
            setCurrentDisplayName('Short')
            setColor('teal');
        }
    }

    // Render
    return (
        <>
        <Text> {currentDisplayName} </Text>
        <Button width='80%' color={color} onClick={changeDisplay}>{currentDisplay}</Button>
        </>
    )
}