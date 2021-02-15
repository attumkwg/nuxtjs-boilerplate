# ECS用ビルドスクリプト
FROM node:15.5.1-stretch as build

RUN mkdir -p /src
WORKDIR /src
COPY ./ /src
RUN yarn install --frozen-lockfile --non-interactive \
    && yarn run build

# ECS公開イメージ作成用スクリプト
# 上記buildで作成したものをコピーすることで全体容量の削減を行う
# 基本的にこちらを実行すればbuildも実行されるので実行コマンドは
# docker build -t nuxt-base --target base .
# docker run -p 3000:3000 nuxt-base
FROM node:15.5.1-alpine as base

WORKDIR /src
COPY --from=build /src /src
EXPOSE 3000

ENTRYPOINT [ "yarn", "run", "start" ]
