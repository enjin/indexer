# Efinity Indexer - A Squid for Efinity

<p align="center">
	<img src="https://user-images.githubusercontent.com/6452260/174344030-f2c3a03a-19f5-44f5-a80e-03adb26a41f4.png">
</p>

<div align="center">

[![Discord](https://img.shields.io/discord/783393889548501023)](https://discord.gg/EUKexwF5RM)
[![Medium](https://img.shields.io/badge/Medium-gray?logo=medium)](https://medium.com/@enjin)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fefinityio)](https://twitter.com/efinityio)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UC7F0a-BLue6W5E0Qcg-r5kw?style=social)](https://youtube.com/c/EnjinTV)
[![Blog URL](https://img.shields.io/badge/-blog-blue)](https://enjin.io/blog)
[![Podcast](https://img.shields.io/badge/-podcast-informational)](https://open.spotify.com/show/2COWzhR7C7SSoBxsqAK3ee)

</div>

## Introduction

The Efinity Indexer...

### What is a Squid?

> A squid is a project that extracts and transforms on-chain data in order to present it as a GraphQL API. Squids are developed using the Subsquid SDK, which provides extensive tooling to define data schemas, data transfomation rules, and the shape of the resulting API.

We recommend that you read SubSquid docs to understand how it works: https://docs.subsquid.io/

## Prerequisites

- Node 16.x
- Docker
- NPM

## Quick-start (using Docker)

1. Clone the repository
2. Run `docker compose up -d`
3. Access the GraphiQL Playground at http://localhost:4467/graphql

## Architecture

The indexer is composed of 7 containers
1. **indexer_db** - a postgres database that stores the processed data;
2. **indexer_processor** - the worker that transforms and saves the blockchain data;
3. **indexer_graphql** - the GraphQL API that exposes the processed data;
4. **archive_db** - a coackroach db that stores the blockchain data;
5. **archive_ingest** - the worker that ingests the blockchain data;
6. **archive_gateway** - the gateway that exposes the blockchain data to the processor;
7. **archive_explorer** - the GraphQL API that exposes the blockchain data;

## Metadata

The chain metadata is used to generate the interface classes through typegen. To scan the blockchain and get the all the metadatas ever used you can use the following command:

```bash
npx squid-substrate-metadata-explorer --chain wss://archive.rpc.efinity.io --out typegen/efinityVersions.jsonl
```

In this indexer we use all the metadata of **Efinity** and **Devfinity** so make sure you save them and use the proper WSS endpoint to gather them.

## Typegen

The typegen tool is used for generating TypeScript interface classes for Substrate events, calls and storage. To generate it, first you should merge both metadatas from **Efinity** and **Devfinity** into a single file. Then you can use the following command:

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