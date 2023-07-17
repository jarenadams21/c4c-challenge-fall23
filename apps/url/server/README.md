# Url Shortener Backend

## Install
nx g @nx/express:app url/server

### Serve the backend
nx serve url-server

### Most important technologies:
- Express (Node)
- SQLite

### Types:
- Shortened
    ->> id : number
    ->> original: string
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


