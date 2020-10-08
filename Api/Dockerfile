FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build

EXPOSE 3333:3333

CMD [ "node", "dist/shared/infra/http/server.js" ]
