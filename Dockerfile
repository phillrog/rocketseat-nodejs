FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn

EXPOSE 3001
EXPOSE 27017

CMD ["npm", "run", "dev"]