# Url Shortener Backend

## Install
nx g @nx/express:app url/server

### Serve the backend
nx serve url-server

### Most important technologies:
- Express (Node)
- SQLite

### Utility Functions
- deleteUrl (id: number)
    ->> Deletes a shortened url with the provided id
- getAllUrls
    ->> Returns all shortened urls in storage
- getDB
    ->> Creates or returns a table for storing original urls with their associated id
- lookupUrl (shortenedID: number)
    ->> Returns the url that matches the provided shortID
- shortenUrl (url: string)
    ->> Inserts into the table and returns the newly created short url

### Initialization of Server
- app.ts
    ->> Injects function implementations for expected dependencies within main.ts and starts the server port after the app is created
- main.ts
    ->> Creates the application endpoints and dependencies needed for proper server behavior

