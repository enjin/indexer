CREATE SCHEMA IF NOT EXISTS metadata;
CREATE TABLE IF NOT EXISTS "metadata"."metadata" (
    id TEXT PRIMARY KEY,
    metadata JSONB, 
    uri TEXT,
    lastUpdatedAt TIMESTAMP 
);