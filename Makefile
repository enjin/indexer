SHELL := /bin/bash

process: migrate
	@node -r dotenv/config lib/process.js


serve:
	@npx squid-graphql-server


build:
	@npm run build


codegen:
	@npx squid-typeorm-codegen


typegen:
	@npx squid-substrate-typegen typegen/typegen.json


migrate:
	@npx squid-typeorm-migration apply


migration:
	@npx squid-typeorm-migration generate


ingest:
	npx squid-substrate-ingest -e wss://archive.rpc.efinity.io --out postgres://root@localhost:26555/defaultdb --prom-port 9090 --write-batch-size 80 --start-block 0


explore:
	@source .env && npx squid-substrate-metadata-explorer \
		--chain "$${CHAIN_ENDPOINT}" \
		--out typegen/chainSpecVersions.jsonl


efinity:
	@source .env && source .env.efinity && docker compose up -d


rocfinity:
	@source .env && source .env.rocfinity && docker compose up -d


logs:
	@docker compose logs --tail all -f

.PHONY: process serve start codegen migration migrate up down typegen