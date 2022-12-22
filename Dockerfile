FROM node:16-alpine3.15 AS node


FROM node AS node-with-gyp
RUN apk add g++ make python3


FROM node-with-gyp AS builder
WORKDIR /squid
ADD package.json .
ADD package-lock.json .
RUN npm install
RUN npm ci
ADD tsconfig.json .
ADD src src
RUN npm run build


FROM node-with-gyp AS deps
WORKDIR /squid
ADD package.json .
ADD package-lock.json .
RUN npm install
RUN npm ci --production


FROM node AS squid
WORKDIR /squid
COPY --from=deps /squid/package.json .
COPY --from=deps /squid/package-lock.json .
COPY --from=deps /squid/node_modules node_modules
COPY --from=builder /squid/lib lib
ADD .env .env
ADD db db
ADD schema.graphql .
ENV PROCESSOR_PROMETHEUS_PORT 3000
EXPOSE 3000
EXPOSE 4000


FROM squid AS processor
CMD ["npm", "run", "processor:debug"]


FROM squid AS query-node
CMD [
    "npx",
    "squid-graphql-server",
    "--subscriptions",
    "--dumb-cache", "in-memory",
    "--dumb-cache-ttl", "12000",
    "--dumb-cache-size", "1024",
    "--dumb-cache-max-age", "12000",
    "--max-root-fields", "10",
    "--sql-statement-timeout", "1000"
]