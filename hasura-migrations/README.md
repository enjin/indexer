# Hasura migrations

The indexer owns PostgreSQL schema migrations under `db/migrations/` and applies them with TypeORM.
This directory intentionally remains empty so Hasura's `cli-migrations-v3` image can apply the
version-controlled metadata without attempting to manage the database schema.
