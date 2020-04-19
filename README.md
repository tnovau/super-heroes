# super-heroes
Super heroes front-end using react 

[![codecov](https://codecov.io/gh/tnovau/super-heroes/branch/master/graph/badge.svg)](https://codecov.io/gh/tnovau/super-heroes)
![React workflow](https://github.com/tnovau/super-heroes/workflows/React%20workflow/badge.svg?branch=master&event=push)

## Server
It uses [express](https://expressjs.com/) to serve the static assets and redirect the traffic to Marvel API, keeping the API key in the server side.

__Features__:
- Redirect http to https :rocket: via [heroku-ssl-redirect](https://www.npmjs.com/package/heroku-ssl-redirect)
- _.env_ files available via [dotenv](https://www.npmjs.com/package/dotenv)
- `PORT` is configurable by environment variables.

__How to use it__
- Get a Marvel API Key [here](https://developer.marvel.com/)
- Set environment variable `REACT_APP_MARVEL_API_KEY=#your_key#`
- Run: `yarn` to install the packages
- Run: `yarn build` to build the project
- Run: `yarn start` to start the server 

## Client
It uses [react](https://reactjs.org/) to build the user interface.
It uses [redux](http://redux.js.org/) for state managements.
It uses [react-router](https://reacttraining.com/react-router/web/guides/quick-start) for routing.
It uses [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro) for testing.

__Features__:
- Listing
- Sorting
- Filtering
- Details

Created using [Create React App](https://create-react-app.dev/)
