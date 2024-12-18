# Enjin Matrixchain Indexer

<p align="center">
	<img src="https://assets-global.website-files.com/60f57c496975b84c29335fb7/60f58bd888a6e86e3ff69551_Enjin.svg" alt="Enjin Logo" width="100%">
</p>

<div align="center">
	
[![Discord](https://img.shields.io/discord/783393889548501023)](https://discord.gg/EUKexwF5RM)
[![Medium](https://img.shields.io/badge/Medium-gray?logo=medium)](https://medium.com/@enjin)
[![X](https://img.shields.io/twitter/url?url=https%3A%2F%2Fx.com%2Fenjin&style=flat&logo=x&label=%40enjin)](https://x.com/enjin)
[![YouTube](https://img.shields.io/youtube/channel/subscribers/UC7F0a-BLue6W5E0Qcg-r5kw?style=flat&logo=youtube)](https://youtube.com/c/EnjinTV)
[![Enjin Block](https://img.shields.io/badge/Visit-blog-blue.svg)](https://enjin.io/blog) <!-- markdown-link-check-disable-line -->
	
</div>

## Introduction

The Enjin Matrixchain Indexer is a Squid that serves processed blockchain data for other applications and dApps that require a more performant approach to retrieve the data as well as filtering, sorting, and relationships.

### What is a Squid?

> A squid is a project that extracts and transforms on-chain data in order to present it as a GraphQL API. Squids are developed using the Subsquid SDK, which provides extensive tooling to define data schemas, data transformation rules, and the shape of the resulting API.

We recommend that you read SubSquid docs to understand how it works: https://docs.subsquid.io/

## Prerequisites

- Node 18.x
- NPM
- Docker

## Quick-start (using Docker)

1. Clone the repository
2. Run `docker compose up -d`
3. Access the GraphiQL Playground at http://localhost:4000/graphql <!-- markdown-link-check-disable-line -->

## Architecture

The indexer is composed of 4 containers
1. **indexer_db** - a postgres database that stores the processed data;
2. **indexer_redis** - a redis instance used for cache and queue;
3. **indexer_processor** - the worker that transforms and saves the blockchain data;
4. **indexer_graphql** - the GraphQL API that exposes the processed data;
5. **indexer_worker** - the queue worker that processes the metadata of assets. 

## Metadata

The chain metadata is used to generate the interface classes through typegen. To scan the blockchain and get the all the metadata ever used you can use the following command:

```bash
npx squid-substrate-metadata-explorer --rpc wss://archive.matrix.blockchain.enjin.io --out typegen/matrixVersion.jsonl
npx squid-substrate-metadata-explorer --rpc wss://archive.matrix.canary.enjin.io --out typegen/canaryVersion.jsonl
```

In this indexer we use all the metadata of **Enjin Matrixchain** and **Canary Matrixchain** so make sure you save them and use the proper WSS endpoint to gather them.

## Typegen

The typegen tool is used for generating TypeScript interface classes for Substrate events, calls and storage. To generate it, first you should merge both metadata from **Enjin Matrixchain** and **Canary Matrixchain** into a single file. Then you can use the following command:

```bash
npx squid-substrate-typegen typegen/typegen.json
```

## Codegen

The codegen tool is used for generating the model classes based on the GraphQL schema. If you edit the `schema.graphql` you should regenerate it by running:

```bash
npx squid-typeorm-codegen
```

## Migrations

When the schema is changed we need to make a new migration. For development purposes the simplest way is to drop the database and generate the migrations from scratch. To do that, after you are finished editing the `schema.graphql` file and have generated all model files. You might run:

```bash
npx squid-typeorm-migration generate
npx squid-typeorm-migration apply
```

**Please note:** you need to delete the files under `db/migrations` and your database must be clean before running the `generate` command as this will connect to your database for checking the "changes" and generate the file based on it.

## Utilities

For simplifying the steps above when making a change to the schema, we have created a script that will do all the steps for you. Just run:

```bash
./refresh_db.sh
```
