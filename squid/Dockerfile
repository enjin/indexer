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
COPY --from=substrate-ingest-builder /squid/common/deploy /squid
WORKDIR /squid/substrate-ingest
EXPOSE 9090
ENTRYPOINT ["node", "/squid/substrate-ingest/bin/run.js", "--out", "postgres://efinity:password@archive_db:5432/rocfinity_archive", "-e", "wss://archive.rpc.rococo.efinity.io", "-c", "80", "--prom-port", "9090", "--write-batch-size", "80", "--start-block", "0"]

FROM builder AS chain-status-service-builder
RUN node common/scripts/install-run-rush.js deploy --project chain-status-service


FROM node AS chain-status-service
COPY --from=chain-status-service-builder /squid/common/deploy /squid
COPY ./config.json /squid/config.json
ENTRYPOINT ["node", "/squid/util/chain-status-service/lib/main.js"]
CMD ["/squid/config.json"]
EXPOSE 3000
