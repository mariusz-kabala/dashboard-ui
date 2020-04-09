# install and run unit tests
FROM node:12-alpine AS build

WORKDIR /app

COPY . .

RUN yarn

RUN yarn test --coverage --config ./jest.noThreshold.js

RUN yarn workspaces run prepare

# upload unit tests results
FROM docker-registry.kabala.tech/aws-cli-scaleway:latest AS upload

ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

COPY --from=build /app/coverage /app/coverage
COPY --from=build /app/storybook-static /app/storybook-static

RUN cat /root/.aws/config

WORKDIR /app

RUN aws s3 cp --recursive --acl public-read coverage s3://unittest/dashboardui/master/
RUN aws s3 cp --recursive --acl public-read storybook-static s3://unittest/dashboardui/master/
