FROM node:15.5.1-stretch

RUN mkdir -p /src
WORKDIR /src
COPY ./ /src
RUN yarn install && yarn run build

EXPOSE 3000

ENTRYPOINT [ "yarn", "run", "start" ]
