module.exports = class QueryPerformanceIndexes1788240000000 {
    name = 'QueryPerformanceIndexes1788240000000'

    async up(db) {
        // Supports EventData attribute filters such as CollectionsUriQuery without scanning every event.
        await db.query(
            `CREATE INDEX "event_data_attribute_lookup_idx" ON "event" ((data->>'isTypeOf'), (data->>'key'), (data->'tokenId')) INCLUDE ("extrinsic_id")`
        )

        // Supports participants_containsAny, which PostgreSQL compiles to the array-overlap operator (&&).
        await db.query(
            `CREATE INDEX "extrinsic_participants_gin_idx" ON "extrinsic" USING GIN ("participants")`
        )

        // Makes event-name relation counts index-only on the Event side of AccountTokenEvent queries.
        await db.query(`CREATE INDEX "event_name_id_idx" ON "event" ("name", "id")`)

        // Supports both ENJ balance metrics while covering the IDs/addresses consumed by their aggregates.
        await db.query(
            `CREATE INDEX "account_free_balance_idx" ON "account" ((("balance"->>'free')::numeric)) INCLUDE ("id", "address")`
        )

        // Zero-balance token accounts do not contribute to either holder metric.
        await db.query(
            `CREATE INDEX "token_account_positive_holder_idx" ON "token_account" ("account_id") WHERE "total_balance" > 0 AND "account_id" IS NOT NULL`
        )
    }

    async down(db) {
        await db.query(`DROP INDEX "token_account_positive_holder_idx"`)
        await db.query(`DROP INDEX "account_free_balance_idx"`)
        await db.query(`DROP INDEX "event_name_id_idx"`)
        await db.query(`DROP INDEX "extrinsic_participants_gin_idx"`)
        await db.query(`DROP INDEX "event_data_attribute_lookup_idx"`)
    }
}
