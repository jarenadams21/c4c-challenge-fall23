# Url Shortener


## Install

# Serve both the frontend and backend
nx run-many -t serve -p url-client url-server


## Testing

# Run frontend testing
nx test url-client ( mocks a virtual DOM )
nx e2e url-client-e2e ( Slower, spins a headless browser)

# Run the backend testing
nx test url-server

### Status Codes Quick Reference
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)