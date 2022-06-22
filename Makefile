SHELL := /bin/bash

process: migrate
	@node -r dotenv/config lib/process.js


serve:
	@npx squid-graphql-server


build:
	@npm run build


codegen:
	@npx sqd codegen


typegen:
	@npx squid-substrate-typegen typegen.json


migration:
	@npx sqd db:create-migration Data


migrate:
	@npx sqd db:migrate


ingest:
	@source .env && npx squid-substrate-ingest -e "$${CHAIN_ENDPOINT}" --out "$${ARCHIVE_DB_URL}"


explore:
	@source .env && npx squid-substrate-metadata-explorer \
		--chain "$${CHAIN_ENDPOINT}" \
		--out chainSpecVersions.jsonl


up:
	@docker compose up -d


logs:
	@docker compose logs --tail all -f


down:
	@docker compose down


.PHONY: process serve start codegen migration migrate up down typegen