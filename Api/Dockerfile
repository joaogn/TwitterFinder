FROM node:12

# CREATE ARGs
ARG nameImage="twitter-finder"
ARG port=8081

COPY . .

RUN npm install && npm run build

EXPOSE $port

CMD [ "node", "dist/shared/infra/http/server.js" ]
