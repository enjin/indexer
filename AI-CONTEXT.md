# Enjin Indexer — AI Context

This document gives coding assistants and new contributors a reliable mental model of the repository. It supplements [README.md](README.md); source code and configuration remain authoritative when they disagree with documentation.

## Project purpose

Enjin Indexer is a TypeScript/Subsquid application that reads Enjin blockchain data, transforms Substrate calls and events into relational entities, and exposes that data through GraphQL. The same codebase supports four network profiles:

- Enjin Matrixchain
- Canary Matrixchain
- Enjin Relaychain
- Canary Relaychain

`CHAIN_NAME`, chain endpoints, archive endpoints, genesis details, and the SS58 prefix select the active profile. Network checks are centralized in `src/util/tools.ts` (`isRelay()` and `isMainnet()`). Avoid inferring the chain only from an endpoint URL or prefix.

## Runtime architecture

The deployed system has seven cooperating services:

1. **Processor** — `src/main.ts` configures the Subsquid batch processor, decodes blocks, dispatches calls/events to pallet handlers, and persists entities to PostgreSQL.
2. **PostgreSQL** — stores indexed entities, chain state, events, extrinsics, and derived data through TypeORM.
3. **Hasura GraphQL API** — exposes tracked PostgreSQL tables and the indexer extension Remote Schema as one graph.
4. **Extension Remote Schema** — `src/remote-schema/index.ts` serves the TypeGraphQL queries and command mutations from `src/server-extension/` without duplicating the persisted entity graph.
5. **Worker** — `src/worker/index.ts` runs BullMQ consumers for metadata and derived-data jobs and exposes Bull Board on port 9090.
6. **Redis** — backs BullMQ and the transitional Subsquid GraphQL dumb cache.
7. **Transitional Subsquid GraphQL API** — preserves the previous combined entity/extension endpoint while clients migrate to Hasura.

The transitional GraphQL container also starts the Prometheus metrics process and decoder server. `start.sh` selects processor, GraphQL, worker, or extension Remote Schema behavior through `CONTAINER_ROLE`. `docker-compose.yml` is the simplest way to run the full local topology. Its pinned Hasura `cli-migrations-v3` image applies the version-controlled `metadata/` directory at startup.

## Main processing flow

```text
RPC / Subsquid archive
        |
        v
src/processor.config.ts  -- selects subscribed calls/events and requested fields
        |
        v
src/main.ts              -- iterates blocks, extrinsics, calls, and events
        |
        v
src/processor.handler.ts -- routes by runtime name
        |
        v
src/pallet/*             -- decodes versions and applies domain behavior
        |
        +--> PostgreSQL entities
        +--> BullMQ follow-up work
        +--> selected SNS notifications
```

Important semantics:

- The processor requests call data as well as events so failed extrinsics can still expose pallet/method/arguments.
- State-changing call handlers run only for successful calls. Do not remove that guard.
- `supportHotBlocks: true` means reorganizations and non-finalized blocks matter. Entity IDs, block hashes, and SNS reorganization handling must remain deterministic.
- Historical/warp synchronization and live processing can take different paths. The `skipSave` behavior passed to event handlers prevents duplicate historical writes in selected processors.
- Large writes are intentionally chunked. Keep batch size and database pressure in mind when adding per-block work.

## Repository map

| Path | Responsibility |
| --- | --- |
| `schema.graphql` | Source schema for TypeORM entities and relations |
| `src/main.ts` | Processor bootstrap and block-level orchestration |
| `src/processor.config.ts` | Subscribed events/calls, chain source, and selected fields |
| `src/processor.handler.ts` | Central call/event routing |
| `src/pallet/` | Hand-written domain processors, decoders, and pallet utilities |
| `src/type/` | Generated, version-aware Substrate runtime types |
| `typegen/` | Network metadata inputs and typegen configuration |
| `src/model/generated/` | Generated TypeORM models from `schema.graphql` |
| `src/model/overridden/` | Hand-written model overrides |
| `src/synchronize/` | Genesis, warp-sync, and derived-state synchronization |
| `src/queue/` | BullMQ queue instances, options, constants, and dispatch helpers |
| `src/worker/` | Worker bootstrap, job implementations, and processors |
| `src/server-extension/` | Custom GraphQL resolvers and query helpers |
| `src/remote-schema/` | Dedicated GraphQL host used by Hasura as a Remote Schema |
| `metadata/` | Canonical Hasura tables, Remote Schemas, and permissions |
| `src/decoder/`, `src/encoder/` | Runtime data decode/encode services |
| `src/prom-metrics/` | Prometheus registry and metric definitions |
| `db/migrations/` | TypeORM migration artifacts |
| `lib/` | Ignored JavaScript build output |

## Pallet organization and compatibility

The indexer handles both common and chain-specific pallets. Common examples include balances, identity, multi-tokens, marketplace, and fuel tanks. Relay-specific behavior includes staking, nomination pools, stake exchange, im-online, and XCM. Matrix-specific behavior includes claims and Matrix utility behavior.

Runtime upgrades are represented by version-aware definitions under `src/type/`. Pallet processors typically normalize multiple historical event shapes into the current database model. When changing a decoder:

- inspect every supported runtime variant for that event/call;
- preserve historical indexing and replay behavior;
- distinguish Matrixchain from Relaychain cases explicitly;
- use exhaustive matching where the surrounding code does;
- preserve `bigint` until a schema/API boundary deliberately serializes it.

Adding a type definition alone does not index it. The subscription, handler route, processor, schema/model, and migration layers may all need coordinated updates.

## Data model and schema workflow

`schema.graphql` defines the persisted entity model. The generated classes in `src/model/generated/` should be considered disposable output. Hasura metadata is maintained separately under `metadata/`; do not use Subsquid's monolithic metadata regeneration/apply commands because they omit Remote Schemas and other directory metadata.

For a schema change:

```bash
pnpm run schema:codegen
pnpm run build
pnpm run db:generate
```

Inspect the generated model and migration, especially nullability, indexes, unique constraints, relation ownership, defaults, destructive column changes, and backfill requirements. Apply a migration only against the intended local database:

```bash
pnpm run db:migrate
```

After reviewing and applying the database migration, update the affected tracked-table YAML under `metadata/databases/default/tables/` and apply the complete metadata directory with `pnpm run schema:hasura`. Never replace it with a generated monolithic metadata file; doing so would remove the extension Remote Schema.

## Chain metadata and type generation

Metadata JSONL files exist for Enjin/Canary and Matrix/Relay networks. All supported networks must remain represented so a type generation update does not silently drop historical or alternate-network types.

Typical workflow:

```bash
pnpm run metadata:fetch
pnpm run metadata:typegen
pnpm run build
```

`metadata:fetch` contacts remote archive RPC endpoints and replaces metadata files. Review the resulting diff; do not run it merely to fix formatting or an unrelated build. `metadata:typegen` merges network metadata before running Subsquid typegen.

## Queues and derived data

The processor dispatches asynchronous work for accounts, balances, collections, listings, metadata, nomination pools, tokens, traits, and validators. Queue definitions live under `src/queue/`; worker processors and jobs live under `src/worker/`.

Queue code must be safe under retries and multiple replicas. BullMQ owns stalled-job recovery. Startup code intentionally does not clean all active jobs because another replica may still hold their locks. Prefer stable job IDs, idempotent writes, bounded batches, and explicit retry behavior.

During initial synchronization, selected queues are paused and later resumed. Changes to synchronization or processor error handling must preserve queue recovery so queues are not left permanently paused.

## GraphQL and server extensions

Hasura is the primary GraphQL boundary. It exposes persisted entities from tracked tables and merges the dedicated extension service defined by `metadata/remote_schemas.yaml`. Custom API operations live in `src/server-extension/`; every resolver class exposed to clients must be collected in `src/server-extension/resolvers/index.ts`.

The extension Remote Schema owns both read/compute queries and queue-oriented command mutations. Refresh and import resolvers must use `@Mutation` so their state-changing behavior is explicit in the merged Hasura graph. Hasura Actions are intentionally unused. Hasura-to-extension requests are authenticated with `HASURA_EXTENSION_SECRET`, and the extension service should not be published outside the service network.

Some extensions enqueue refresh/import work, and others execute database queries. Changes here should account for:

- query cost and pagination on large indexed tables;
- validation and authorization expectations of the existing resolver;
- SQL parameterization and GraphQL enum/input validation;
- cache behavior and stale derived data;
- SSRF controls for metadata URLs and other remote resources.

## Configuration

Configuration is loaded from environment variables in `src/util/config.ts`. `.env.example` contains safe placeholders; `.env` is local and ignored.

Core local dependencies are PostgreSQL 16 and Redis 7. The application defaults target Enjin Matrixchain, but explicit environment configuration is preferable for any data-affecting work. When running application processes on the host while databases run in Docker, use host-reachable values such as `DB_HOST=localhost` and `REDIS_URL=redis://localhost:6379`; the example's Docker service names resolve only inside the Compose network.

Never log, document, or commit real values for Sentry, AWS/SNS, Logtail, Pinata, Hasura admin secrets, archive API keys, or marketplace credentials.

## Development commands

Install and build:

```bash
pnpm install
pnpm run build
```

Run individual TypeScript entry points in development:

```bash
pnpm run dev:processor
pnpm run dev:worker
pnpm run dev:decoder
pnpm run dev:metris
pnpm run dev:extensions
```

`dev:metris` is the existing script name despite the spelling. The quickest full environment remains:

```bash
docker compose up -d
```

This can consume substantial local resources because PostgreSQL is configured with large shared memory and buffers.

## Quality checks

CI builds on Node.js 20 and 22 and runs ESLint and Prettier checks. Use:

```bash
pnpm run ci:lint
pnpm run ci:prettier
pnpm run build
```

`pnpm run lint` and `pnpm run prettier` are auto-fixing commands. Markdown, generated models/types, migrations, and several integration-heavy directories are excluded from some formatting or lint rules, so a passing check does not replace focused review.

Run focused unit tests with `pnpm run test`. Integration-heavy behavior still requires proportional validation with a local processor replay, a focused GraphQL query, a queue job run, or migration inspection; record what was exercised.

## High-risk areas

- **Schema and migrations:** accidental drops, nullability changes, and expensive backfills affect large databases.
- **Replays and reorganizations:** non-idempotent writes can duplicate balances, listings, notifications, or derived statistics.
- **Numeric precision:** chain values routinely exceed JavaScript's safe integer range.
- **Runtime compatibility:** code that works on the latest Matrix runtime may break historical blocks or Relaychain.
- **Queue coordination:** clearing locks or active jobs can corrupt work owned by another replica.
- **Remote metadata:** user-controlled URLs must continue through SSRF and size/type protections.
- **Database wipes:** `db:wipe`, `TRUNCATE_DATABASE=true`, and `refresh-db.sh` are destructive and require an explicitly confirmed local target.

## Keeping this context current

Update this document when the runtime topology, core event flow, supported networks, generated-code boundaries, or development commands change. Keep detailed feature behavior close to the relevant code; this file should remain a map, not a second implementation specification.
