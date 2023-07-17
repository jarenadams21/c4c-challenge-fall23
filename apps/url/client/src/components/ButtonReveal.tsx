import { Button, Switch, Text, Flex, Link } from "@chakra-ui/react"
import { useState } from 'react'

// ButtonReveal props
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
    /* Rel='noreferrer' as I am not trying to boost analytics*/
    return (
        <>
        <Flex alignItems='center'>
        <Switch onChange={changeDisplay} id='url-switcher' />
        <Text color={color} ml={4}> {currentDisplayName} URL</Text>
        </Flex>
        <a rel='noreferrer' href={props.original} target='_blank'>
        <Button width='100%' color={color}>{currentDisplay}</Button>
        </a>
        </>
    )
}