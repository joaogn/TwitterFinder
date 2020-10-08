# Twitter Finder

This is a simple Twitter Finder, using NodeJs to Backend with Typescript and SOLID architecture and ReactJs to Frontend

## RUN

- Create .env file on Api folder and add

  ```
  TWITTER_API_URL=https://api.twitter.com/1.1/
  TWITTER_API_TOKEN=<twitter-bearer-token>
  ```

- Backend With Docker

  ```
  cd Api
  docker build -t backend-twitter-finder .
  docker run -d -p 3333:3333 backend-twitter-finder
  ```

- Backend To Dev

  ```
  cd Api
  yarn
  yarn dev:server

  or

  cd Api
  npm install
  npm run dev:server

  ```

- Frontend

  ```
  cd Web
  yarn
  yarn start

  or

  cd Web
  npm install
  npm run start
  ```
