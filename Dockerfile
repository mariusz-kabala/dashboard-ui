# install and run unit tests
FROM node:12-alpine AS test

WORKDIR /app

COPY . .

RUN ls -la

RUN yarn

RUN yarn test --coverage --config ./jest.noThreshold.js

# upload unit tests results
FROM docker-registry.kabala.tech/aws-cli-scaleway:latest AS testCoverageUpload

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

COPY --from=test /app/coverage /app/coverage

RUN cat /root/.aws/config

WORKDIR /app

RUN aws s3 cp --recursive --acl public-read coverage s3://unittest/dashboardui/master/

# build packages and storybook
FROM node:12-alpine AS build

COPY --from=test /app /app

WORKDIR /app

RUN yarn workspaces run prepare

RUN yarn build-storybook

# upload unit tests results
FROM docker-registry.kabala.tech/aws-cli-scaleway:latest AS storyBookUpload

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

COPY --from=test /app/storybook-static /app/storybook-static

WORKDIR /app

RUN aws s3 cp --recursive --acl public-read storybook-static s3://unittest/dashboardui/master/
