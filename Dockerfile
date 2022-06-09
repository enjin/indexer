FROM node:16-alpine3.15 AS node

FROM node AS squid
WORKDIR /usr/src/app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

EXPOSE 3000
EXPOSE 3001
EXPOSE 4000

FROM squid AS processor
CMD ["yarn", "processor:debug"]

FROM squid AS query-node
CMD ["yarn", "query-node:start"]