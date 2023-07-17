# Url Shortener


## Install

*  Serve both the frontend and backend
    nx run-many -t serve -p url-client url-server


## Testing

*  Run frontend testing
    nx test url-client ( mocks a virtual DOM )
    nx e2e url-client-e2e ( Slower, spins a headless browser)

* Run the backend testing
    nx test url-server

## Description
URL Shortener turns inputted long urls into short urls
for easier viewing and use. It currently resolves to localhost shorturls, and thus the localhost urls are only valid if the server for the applications is running.


### Status Codes Quick Reference
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

### Technical Challenge Submission
List at least three things you would do to improve the quality of the codebase in order of importance.
    1. Sanitzation. There is a lot of room for someone to put in non-valid urls or cause errors, and can severely impact the experience of a web application when edge cases are neglected.
    2. Migrate to a better persistence for more scalable data, query complexity, and generally better server-side web app use cases. Something like mongoDB would be a good fit for me, as I have experience implementing a simple API with it.
    3. Authorization and authentication. Personable data storage so that multiple people can use the same web application without sharing the same global storage.
    (nice to have 4th) hosting the web app so that those who don't know computer science at all don't have to figure out how to run the services themselves, they can just visit the url of the web application