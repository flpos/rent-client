FROM node:lts as build

WORKDIR /app

COPY . .

RUN yarn && yarn build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY ./nginx/frontend.conf /etc/nginx/templates/default.conf.template

COPY --from=build /app/build .