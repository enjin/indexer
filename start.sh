#!/usr/bin/env sh
set -e

ROLE=${CONTAINER_ROLE:-app}
TRUNCATE_DATABASE=${TRUNCATE_DATABASE:-false}

if [ "$ROLE" = "processor" ]; then
    if [ "$TRUNCATE_DATABASE" != "true" ]; then
        echo "Running database migration..."
        pnpm run db:migrate || { echo "Database migration failed"; exit 1; }
        echo "Starting processor..."
        pnpm run processor
    else
        pnpm run db:clear || exit
    fi
elif [ "$ROLE" = "graphql" ]; then
    pnpm run metrics &
    P1=$!
    pnpm exec squid-graphql-server --subscriptions --dumb-cache redis --dumb-cache-max-age 3000 --max-root-fields 10 --sql-statement-timeout 15000 &
    P2=$!
    wait $P1 $P2
elif [ "$ROLE" = "worker" ]; then
    pnpm run worker
else
    echo "Could not match the container role \"$ROLE\""
    exit 1
fi
