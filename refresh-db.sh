#!/bin/sh
docker compose stop indexer_db indexer_redis
docker compose rm -f indexer_db indexer_redis
docker volume rm indexer_indexer_db indexer_redis_db
docker compose up -d indexer_db indexer_redis

sleep 5
sudo rm -rf ./db/migrations/*
DB_HOST=localhost sh -c 'npx squid-typeorm-migration generate'
DB_HOST=localhost sh -c 'npx squid-typeorm-migration apply'
