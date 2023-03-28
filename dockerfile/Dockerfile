FROM node:18.12.1-alpine

WORKDIR /app/

ADD . .

RUN npm install express

EXPOSE 3000

CMD [ "node", "app.js" ]