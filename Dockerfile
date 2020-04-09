# install and run unit tests
FROM node:12-alpine AS test

WORKDIR /app

COPY . .

RUN yarn

RUN yarn test --coverage --config ./jest.noThreshold.js

# upload unit tests results
FROM mesosphere/aws-cli AS testCoverageUpload

COPY --from=test /app/coverage /app/coverage

COPY --from=test /app/aws-config ~/.aws/config

RUN cat ~/.aws/config

WORKDIR /app

RUN aws s3 cp --recursive --acl public-read coverage s3://unittest/dashboardui/master/

# build packages and storybook
FROM node:12-alpine AS build

COPY --from=test /app /app

WORKDIR /app

RUN yarn workspaces run prepare

RUN yarn build-storybook

# upload unit tests results
FROM mesosphere/aws-cli AS storyBookUpload

COPY --from=test /app/storybook-static /app/storybook-static

COPY --from=test /app/aws-config ~/.aws/config

WORKDIR /app

RUN aws s3 cp --recursive --acl public-read storybook-static s3://unittest/dashboardui/master/
