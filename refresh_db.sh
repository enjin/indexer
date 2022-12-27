#!/bin/sh
docker compose build
docker compose stop indexer_graphql indexer_processor indexer_db
docker compose rm -f indexer_db
docker volume rm indexer_indexer_db
docker compose up -d indexer_db

sleep 5
#sudo rm -rf ./db/migrations/*
#DB_HOST=localhost sh -c 'npx squid-typeorm-migration generate'
DB_HOST=localhost sh -c 'make migrate'
docker compose up -d indexer_graphql indexer_processor
docker logs -f indexer_processor