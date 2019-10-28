FROM node:latest

WORKDIR /app
COPY package.json package.json
RUN npm i -g npm
RUN npm install gulp -g
RUN npm install
COPY ./ .