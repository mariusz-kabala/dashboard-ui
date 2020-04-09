FROM node:12-alpine AS build

WORKDIR /app

COPY . .

RUN yarn

RUN yarn workspaces run prepare
