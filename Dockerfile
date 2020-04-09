FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn 

EXPOSE 3001

CMD ["npm", "run", "dev"]