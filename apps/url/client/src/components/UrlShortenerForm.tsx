import React, { useState, useCallback, FormEvent} from "react";
import { Shortened } from "../schema/urlData";

export const UrlShortenerForm = () => {

const [urls, setUrls] = useState<Array<Shortened>>([]);
const [inputUrl, setInputUrl] = useState('');

const onSubmit = useCallback( (e : FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    const newUrl : Shortened = {

      id: urls.length,
      original: inputUrl,
      short: 'short.com/123',
    }
    setUrls([...urls,newUrl])
    setInputUrl('')
}, [inputUrl, urls])


    return (
    <div>
      <h1>My URL Shortener</h1>
      <form onSubmit={ (e) => onSubmit(e)}>
        <label>URL</label>
        <input
          value={inputUrl}
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
          placeholder="www.my-super-long-url-here.com/12345"
        />
        <button type="submit">Generate</button>
      </form>

      <ul>
        {urls.map((u) => (
          <li key={u.id}>
            {u.short} - {u.original}
          </li>
        ))}
      </ul>
    </div>)
}