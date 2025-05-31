# Enjin Indexer: Relaychain & Matrixchain

<p align="center">
<img src="https://raw.githubusercontent.com/enjin/indexer/master/.github/assets/enjin.svg" width="70%" alt="Enjin Logo"/>
</p>

<div align="center">

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/enjin/indexer/run_build.yml?style=flat)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/version/enjin/indexer?style=flat)
[![Discord](https://img.shields.io/discord/783393889548501023?style=flat)](https://discord.gg/EUKexwF5RM)
![GitHub Org's stars](https://img.shields.io/github/stars/enjin?style=flat)
[![YouTube](https://img.shields.io/youtube/channel/subscribers/UC7F0a-BLue6W5E0Qcg-r5kw?style=flat&logo=youtube)](https://youtube.com/c/EnjinTV)
[![Enjin Blog](https://img.shields.io/badge/Visit-enjin.io-blue.svg?style=flat)](https://enjin.io) <!-- markdown-link-check-disable-line -->

</div>

---

## Introduction

The Enjin Blockchain Indexer is a Squid Indexer that serves processed blockchain data for other applications and dApps that require a more performant approach to retrieve the data as well as filtering, sorting, and relationships.

### What is a Squid?

> A squid is a project that extracts and transforms on-chain data to present it as a GraphQL API. Squids are developed using the Subsquid SDK, which provides extensive tooling to define data schemas, data transformation rules, and the shape of the resulting API.

We recommend that you read SubSquid docs to understand how it works: https://docs.subsquid.io/

## Prerequisites

- Node 20.x
- PNPM 8.x
- PostgreSQL 16.x
- Redis 7.x

Or you can use **Docker** with the provided docker-compose file to start all services.

## Quick-start (using Docker)

1. Clone the repository
2. Run `docker compose up -d`
3. Access the GraphiQL Playground at http://localhost:4000/graphql <!-- markdown-link-check-disable-line -->

## Architecture

The indexer is composed of four containers
1. **indexer_db** — a postgres database that stores the processed data;
2. **indexer_redis** — a redis instance used for cache and queue;
3. **indexer_processor** — the worker that transforms and saves the blockchain data;
4. **indexer_graphql** — the GraphQL API that exposes the processed data;
5. **indexer_worker** — the queue worker that processes the metadata of assets. 

## Metadata

The chain metadata is used to generate the interface classes through typegen. To scan the blockchain and get all the metadata ever used, you can use the following command:

```bash
pnpm run metadata:fetch
```

This indexer works with all Enjin networks, so make sure you always save the metadata from all of them before generating the typegen.


## Typegen

The typegen tool is used for generating TypeScript interface classes for Substrate events, calls, and storage. To generate it, first you should merge both metadata from **Enjin Matrixchain** and **Canary Matrixchain** into a single file. Then you can use the following command:

```bash
pnpm run metadata:typegen
```

## Codegen

The codegen tool is used for generating the model classes based on the GraphQL schema. If you edit the `schema.graphql` you should regenerate it by running:

```bash
pnpm run schema:codegen
```

## Migrations

When the schema is changed, we need to make a new migration. For development purposes the simplest way is to drop the database and generate the migrations from scratch. To do that, after you are finished editing the `schema.graphql` file and have generated all model files. You might run:

```bash
pnpm run db:generate
pnpm run db:migrate
```
