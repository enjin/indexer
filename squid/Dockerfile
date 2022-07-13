ARG node=node:16-alpine
FROM ${node} AS node


FROM node AS builder
RUN apk add g++ make python3
WORKDIR /squid
ADD ./squid-repo/ /squid/
RUN node common/scripts/install-run-rush.js install
RUN node common/scripts/install-run-rush.js build
RUN cd cli && npx oclif manifest


FROM builder AS substrate-ingest-builder
RUN node common/scripts/install-run-rush.js deploy --project @subsquid/substrate-ingest


FROM node AS substrate-ingest
ARG SELECTED_CHAIN
ARG EFINITY_ENDPOINT
ARG ROCFINITY_ENDPOINT
ENV SELECTED_CHAIN=${SELECTED_CHAIN}
ENV EFINITY_ENDPOINT=${EFINITY_ENDPOINT}
ENV ROCFINITY_ENDPOINT=${ROCFINITY_ENDPOINT}
COPY --from=substrate-ingest-builder /squid/common/deploy /squid
WORKDIR /squid/substrate-ingest
COPY init.sh init.sh
EXPOSE 9090
ENTRYPOINT ["/squid/substrate-ingest/init.sh"]


FROM builder AS chain-status-service-builder
RUN node common/scripts/install-run-rush.js deploy --project chain-status-service


FROM node AS chain-status-service
COPY --from=chain-status-service-builder /squid/common/deploy /squid
COPY ./config.json /squid/config.json
ENTRYPOINT ["node", "/squid/util/chain-status-service/lib/main.js"]
CMD ["/squid/config.json"]
EXPOSE 3000