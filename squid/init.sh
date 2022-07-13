#!/bin/sh
node /squid/substrate-ingest/bin/run.js --out postgres://root@archive_cockroach:26257/defaultdb -e "$CHAIN_ENDPOINT" -c 80 --prom-port 9090 --write-batch-size 80 --start-block 0