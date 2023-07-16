import React, { useState, useCallback, FormEvent} from "react";
import { Shortened } from "../schema/urlData";
import axios from "axios";
import verifyShortResponse from "../utils/verifyShortResponse";
import isValidUrl from "../utils/isValidUrl";
import {
  Button,
  Flex,
  Input
} from '@chakra-ui/react'

type ShortenUrlFormProps = {
  requestShortUrl: (original: string) => Promise<void>;
}

export const UrlShortenerForm: React.FC<ShortenUrlFormProps> = ({ requestShortUrl, }) => {
const [isGenerating, setIsGenerating] = useState(false);
const [inputUrl, setInputUrl] = useState('');

const onSubmit = useCallback( async (e : FormEvent) => {

    e.preventDefault();
    await requestShortUrl(inputUrl);
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 300);
    setInputUrl('');
}, [inputUrl, setInputUrl, requestShortUrl]);

    return (
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
        <Input
          id="url-input"
          value={inputUrl}
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
          placeholder="www.my-super-long-url-here.com/12345"
        />
        { !isGenerating ? (
        <Button id="submit-btn" type="submit">Generate</Button>) : (<Button
        isLoading
        colorScheme='blue'
      />)}
      </Flex>
      </form>
        );
};