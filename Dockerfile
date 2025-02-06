FROM node:20-alpine AS node

FROM node AS node-with-gyp
RUN apk add g++ make python3

FROM node-with-gyp AS builder

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN}

WORKDIR /squid

ADD package.json .
ADD package-lock.json .

RUN npm ci

ADD tsconfig.json .
ADD src src

RUN npm run build:prod

FROM node-with-gyp AS deps
WORKDIR /squid
ADD package.json .
ADD package-lock.json .
RUN npm ci --production

FROM node AS squid
WORKDIR /squid
COPY --from=deps /squid/package.json .
COPY --from=deps /squid/package-lock.json .
COPY --from=deps /squid/node_modules node_modules
COPY --from=builder /squid/lib lib
RUN apk add curl
RUN echo -e "loglevel=silent\nupdate-notifier=false" > /squid/.npmrc
ADD db db
ADD schema.graphql .
ENV PROCESSOR_PROMETHEUS_PORT 3000
EXPOSE 3000
EXPOSE 4000
# for worker
EXPOSE 9090
EXPOSE 8080

FROM squid AS matrixchain-indexer

LABEL org.opencontainers.image.source=https://github.com/enjin/indexer
LABEL org.opencontainers.image.description="Enjin Matrixchain Indexer"
LABEL org.opencontainers.image.licenses=GPLv3

COPY --chmod=0755 start.sh .

CMD ["/bin/sh", "-c", "/squid/start.sh"]