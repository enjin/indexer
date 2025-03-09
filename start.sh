#!/usr/bin/env sh
set -e

role=${CONTAINER_ROLE:-app}

if [ "$role" = "processor" ]; then
    pnpm run db:migrate
    pnpm run processor
elif [ "$role" = "graphql" ]; then
    pnpm run metrics &
    P1=$!
    pnpm exec squid-graphql-server --subscriptions --dumb-cache redis --dumb-cache-max-age 3000 --max-root-fields 10 --sql-statement-timeout 15000 &
    P2=$!
    wait $P1 $P2
elif [ "$role" = "worker" ]; then
    pnpm run worker
else
    echo "Could not match the container role \"$role\""
    exit 1
fi
