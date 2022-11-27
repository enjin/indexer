#!/bin/sh
docker compose build
docker stop indexer_db indexer_graphql indexer_processor
docker rm indexer_db indexer_graphql indexer_processor
sudo rm -rf /opt/indexer/indexer_db/
docker compose up -d indexer_db
sleep 5
#sudo rm -rf ./db/migrations/*
#DB_HOST=localhost sh -c 'npx squid-typeorm-migration generate'
DB_HOST=localhost sh -c 'make migrate'
docker compose up -d indexer_graphql indexer_processor
docker logs -f indexer_processor