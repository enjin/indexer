# Enjin Matrixchain Indexer

<p align="center">
	<img src="https://assets-global.website-files.com/60f57c496975b84c29335fb7/60f58bd888a6e86e3ff69551_Enjin.svg" alt="Enjin Logo" width="100%">
</p>

<div align="center">

[![Discord](https://img.shields.io/discord/783393889548501023)](https://discord.gg/EUKexwF5RM)
[![Medium](https://img.shields.io/badge/Medium-gray?logo=medium)](https://medium.com/@enjin)
<!-- markdown-link-check-disable-next-line -->
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fenjin)](https://twitter.com/enjin)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UC7F0a-BLue6W5E0Qcg-r5kw?style=social)](https://youtube.com/c/EnjinTV)
[![Blog URL](https://img.shields.io/badge/-blog-blue)](https://enjin.io/blog)
[![Podcast](https://img.shields.io/badge/-podcast-informational)](https://open.spotify.com/show/2COWzhR7C7SSoBxsqAK3ee)

</div>

## Introduction

The Enjin Matrixchain Indexer is a Squid that serves processed blockchain data for other applications and dApps that require a more performant approach to retrieve the data as well as filtering, sorting, and relationships.

> [!NOTE]
<!-- markdown-link-check-disable-next-line -->
> You can find a hosted version of this indexer available at Subsquid Aquarium in the following URL: https://squid.subsquid.io/matrixchain/graphql

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
3. Access the GraphiQL Playground at http://localhost:4467/graphql <!-- markdown-link-check-disable-line -->

## Architecture

The indexer is composed of 7 containers
1. **indexer_db** - a postgres database that stores the processed data;
2. **indexer_processor** - the worker that transforms and saves the blockchain data;
3. **indexer_graphql** - the GraphQL API that exposes the processed data;
4. **archive_db** - a cockroach db that stores the blockchain data;
5. **archive_ingest** - the worker that ingests the blockchain data;
6. **archive_gateway** - the gateway that exposes the blockchain data to the processor;
7. **archive_explorer** - the GraphQL API that exposes the blockchain data;

## Metadata

The chain metadata is used to generate the interface classes through typegen. To scan the blockchain and get the all the metadata ever used you can use the following command:

```bash
npx squid-substrate-metadata-explorer --chain wss://archive.matrix.blockchain.io --out typegen/matrixVersion.jsonl
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
