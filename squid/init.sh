#!/bin/sh
if [ "$SELECTED_CHAIN" = "rocfinity" ]; then
  node /squid/substrate-ingest/bin/run.js --out postgres://root@archive_cockroach:26257/defaultdb -e "$ROCFINITY_ENDPOINT" -c 80 --prom-port 9090 --write-batch-size 80 --start-block 0
else
  node /squid/substrate-ingest/bin/run.js --out postgres://root@archive_cockroach:26257/defaultdb -e "$EFINITY_ENDPOINT" -c 80 --prom-port 9090 --write-batch-size 80 --start-block 0
fi