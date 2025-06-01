#!/usr/bin/env sh
set -e

role=${CONTAINER_ROLE:-app}

if [ "$role" = "processor" ]; then
    npm run db:migrate
    npm run processor:start
elif [ "$role" = "graphql" ]; then
    npm run prom:start &
    P1=$!
    npx squid-graphql-server --dumb-cache redis --dumb-cache-max-age 6000 --max-root-fields 10 --sql-statement-timeout 20000 &
    P2=$!
    wait $P1 $P2
elif [ "$role" = "worker" ]; then
    npm run worker:start
else
    echo "Could not match the container role \"$role\""
    exit 1
fi
