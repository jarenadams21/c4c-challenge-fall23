# Url Shortener Frontend

## Install
yarn global add nx@latest
nx g @nx/react:app url/client

### Serve the frontend
nx serve url-client

### Most important technologies:
- Typescript
- React
- Axios
- Chakra UI
- SQLite

### Types:
- Shortened
    ->> id : number (produced client side)
    ->> original: string ( produced client side)
    ->> short: string

### Utility Functions
- isValidUrl
    ->> Checks if a provided string is a valid url per the built-in JS function checkValidity()
- verifyShortResponse
    ->> Verifies the object received from the service when trying to shorten the long url is a valid 'Shortened'.

### Component Overview
- ButtonReveal
    ->> Component that switches between the original and short link views, and once pressed, visits the original link
- UrlList
    ->> Displays a list of ButtonReveal components using their client-side defined ids as keys for rendering
- UrlShortenerForm
    ->> A form that prompts a long url entry, and once submitted with the generate button, appends to the UrlList after making an axios call to the service to shorten the submitted long url.


