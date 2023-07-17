### Technical Challenge Submission
    I included my 3 proposed improvements, READMEs, and code all in the url files!

List at least three things you would do to improve the quality of the codebase in order of importance.
->>
    1. Sanitzation. There is a lot of room for someone to put in non-valid urls or cause errors, and can severely impact the experience of a web application when edge cases are neglected.
    2. Migrate to a better persistence for more scalable data, query complexity, and generally better server-side web app use cases. Something like mongoDB would be a good fit for me, as I have experience implementing a simple API with it.
    3. Authorization and authentication. Personable data storage so that multiple people can use the same web application without sharing the same global storage.
    (nice to have 4th) hosting the web app so that those who don't know computer science at all don't have to figure out how to run the services themselves, they can just visit the url of the web application

    ->> Also, ideally I would keep React.StrictMode on but I was having trouble with my async useEffect and thus decided to submit without strict mode as if it was production. Refreshing after deleting a url is also annoying, so converting to a stateful list would have been best practice.
<<-

# Everything

This is the C4C monorepo containing all of our active projects.

Deployable units exist in `/apps`, inside each folder there is a README explaining how that unit is tested and deployed.

Business logic and supporting library for those deployable units exist in `/libs`. These are composable units of software that are not coupled to a specific deployment framework or strategy, and are meant to be easily reused in future projects.

The purpose of `README.md`s in this repository are to explain the usage of the application. The bare minimum you need to get it running. More detailed developer and public documentation exists on the wiki. `README.md`s will often link to relevant wiki pages.


Links to Project `README.md`

- [Monarch](./apps/monarch/README.md)
- [c4cneu.com](./apps/dotcom/README.md)


## 🔨 Development
1. Install Node v16.x
2. Clone this repo
3. `yarn install`

When adding new dependencies, use `yarn add` or its dev dependency equivalent. Thanks to Nx, each package will only be installed once, and each app knows how to bundle itself correctly based on its dependencies.