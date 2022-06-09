FROM node:16-alpine3.15 AS node

FROM node AS squid
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@8.12.1
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
EXPOSE 3001
EXPOSE 4000

FROM squid AS processor
CMD ["npm", "run", "processor:start"]

FROM squid AS query-node
CMD ["npm", "run", "query-node:start"]