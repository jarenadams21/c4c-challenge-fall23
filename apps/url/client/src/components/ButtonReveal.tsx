import { Button, Switch, Text, Flex } from "@chakra-ui/react"
import { useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import axios from "axios"
import { Shortened } from "../schema/urlData"

// ButtonReveal props
interface ButtonRevealProps {
    url: Shortened
}

export const ButtonReveal = (props: ButtonRevealProps) => {
    // State
    const [currentDisplay, setCurrentDisplay] = useState(props.url.short);
    const [currentDisplayName, setCurrentDisplayName] = useState('Short');
    const [color, setColor] = useState('teal');

    // Utility
    function changeDisplay() {
        if(currentDisplay === props.url.short) {
            setCurrentDisplay(props.url.original);
            setCurrentDisplayName('Original')
            setColor('red');
        }
        else {
            setCurrentDisplay(props.url.short)
            setCurrentDisplayName('Short')
            setColor('teal');
        }
    }

    async function deleteURL() {
        await axios.delete(`http://localhost:3333/deleteURL/${props.url.id}`);
    }

    // Render
    /* Rel='noreferrer' as I am not trying to boost analytics*/
    return (
        <>
        <Flex alignItems='center'>
        <Switch onChange={changeDisplay} id='url-switcher' />
        <Text color={color} ml={4}> {currentDisplayName} URL</Text>
        </Flex>
        <Flex alignItems='center'>
        <a rel='noreferrer' href={props.url.original} target='_blank'>
        <Button width='100%' color={color}>{currentDisplay}</Button>
        </a>
        <DeleteIcon onClick={ deleteURL } ml={4}/>
        </Flex>
        </>
    )
}