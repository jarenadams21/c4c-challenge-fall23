import React, { useState, useCallback, FormEvent} from "react";
import { Shortened } from "../schema/urlData";
import axios from "axios";
import verifyShortResponse from "../utils/verifyShortResponse";
import isValidUrl from "../utils/isValidUrl";
import {
  List,
  ListItem,
  Divider,
  Stack,
  Button,
  Container,
  Heading,
  Flex,
  Spacer,
  Box
} from '@chakra-ui/react'
import { ButtonReveal } from "./ButtonReveal";

export const UrlShortenerForm = () => {

const [urls, setUrls] = useState<Array<Shortened>>([]);
const [isGenerating, setIsGenerating] = useState(false);
const [inputUrl, setInputUrl] = useState('');

const onSubmit = useCallback( async (e : FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 300);
    const response = await axios.post(`http://localhost:3333/api/shorten`, {
      original: inputUrl,
    });

    /* This code seems a bit alarming 
    because of the lack of actual validation 
    of the object, it just assumes it will
    come in correctly
    const newUrl = response.data as Shortened; // 🚨 This should set off alarm bells in your head! Why?
    */ 
   const newUrlFromService = response.data;

   try { 

    const newUrl: Shortened | undefined = verifyShortResponse(newUrlFromService, urls.length);

    if(newUrl) {
    setUrls([...urls,newUrl])
    setInputUrl('')
      } else {
        throw new Error('The following is not a valid shortened url query & response ->> Original: ' + newUrlFromService.original + 
        ', Short: ' + newUrlFromService.short)
      }
   } catch ( error ) {
      throw new Error('failed to shorten the url, this indicates that the original or short field is missing from the service response.');
    }
}, [inputUrl, urls])


    return (
    <>
      <Container>
      <Heading mt={4} mb={4}>My URL Shortener</Heading>
      <form onSubmit={ (e) => { 
        if(isValidUrl(inputUrl)) {
          onSubmit(e);
        }
        else {
          window.alert("Not a valid url.");
        }
      }}>
        <Flex padding={4} alignItems='center' justifyContent='space-evenly'>
        <label>Enter URL</label>
        <input
          value={inputUrl}
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
          placeholder="www.my-super-long-url-here.com/12345"
        />
        { !isGenerating ? (
        <Button type="submit">Generate</Button>) : (<Button
        isLoading
        colorScheme='blue'
      />)}
      </Flex>
      </form>
      </Container>
      
      <Container>
        <Heading mt={4}> My Shortened URLs</Heading>
      <List>
        {urls.map((u) => (
          <ListItem key={u.id}>
          <Stack justifyContent='center' alignItems='center' direction='column' h='100px' p={4}>
          <ButtonReveal short={u.short} original={u.original}/>
          </Stack>
          </ListItem>
        ))}
      </List>
      </Container>
    </>)
}