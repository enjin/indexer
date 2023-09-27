#!/usr/bin/env sh
set -e

role=${CONTAINER_ROLE:-app}

if [ "$role" = "processor" ]; then
    npm run db:migrate
    npm run processor:debug
elif [ "$role" = "graphql" ]; then
    npx squid-graphql-server --subscriptions --dumb-cache in-memory --dumb-cache-ttl 12000 --dumb-cache-size 512 --dumb-cache-max-age 12000 --max-root-fields 10 --sql-statement-timeout 5000
elif [ "$role" = "worker" ]; then
    npm run worker:start
else
    echo "Could not match the container role \"$role\""
    exit 1
fi
