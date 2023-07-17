import { Container, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { AppInfo } from '../components/AppInfo';
import { UrlList } from '../components/UrlList';
import { UrlShortenerForm } from '../components/UrlShortenerForm';
import { Shortened } from '../schema/urlData';
import verifyShortResponse from '../utils/verifyShortResponse';

export function App() {
  // State
  const [urls, setUrls] = useState<Array<Shortened>>([]);
  const [isGrabbing, setIsGrabbing] = useState(false);

  useEffect(() => {
    setUrls([]);
    async function grabUrls() {
      setIsGrabbing(true);
      const shortenedUrls = await axios.get(`http://localhost:3333/api/getAllUrls`);
      const urlArray = shortenedUrls.data.urls as Array<Shortened>;
      urlArray.forEach( (url) => {
          const insertion : Shortened = {
            id: url.id,
            original: url.original,
            short: `http://localhost:3333/s/${url.id}`
          }
          // Tricky, refer here: https://legacy.reactjs.org/docs/hooks-reference.html#usestate
          setUrls((urls) => [...urls, insertion]);
      })

      setIsGrabbing(false);
    }
    grabUrls();
  }, []);
  
  // Callback definition
  const requestShortUrl = useCallback(
    async (inputUrl: string) => {
      
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
      const newUrl: Shortened | undefined = verifyShortResponse(newUrlFromService);
  
      if(newUrl) {
      setUrls([...urls,newUrl])

        }
         else {
          throw new Error('The following is not a valid shortened url query & response ->> Original: ' + newUrlFromService.original + 
          ', Short: ' + newUrlFromService.short)

        }
     } catch ( error ) {
        throw new Error('failed to shorten the url, this indicates that the original or short field is missing from the service response.');
      }
  }, [urls, setUrls]);
  
  // Render
  return (
    <div className="app">
      <AppInfo/>
      <Container maxWidth="4xl" marginBlock={10} textAlign="center">
      <Heading mt={4} mb={4}>My URL Shortener</Heading>
      <UrlShortenerForm requestShortUrl={requestShortUrl}/>
      <Heading mt={4}> My Shortened URLs</Heading>
      { !isGrabbing && <UrlList urls={urls}/>}
      </Container>
    </div>
  );
}

export default App;