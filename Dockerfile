FROM node:alpine

ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn"]
