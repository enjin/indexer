module.exports = class EventPosition1792145705000 {
    name = 'EventPosition1792145705000'
    transaction = false

    async up(db) {
        await db.query(`ALTER TABLE "event" ADD COLUMN IF NOT EXISTS "index" integer`)
        await db.query(`ALTER TABLE "event" ADD COLUMN IF NOT EXISTS "block_number" integer`)
        await this.ensureIndex(db)
    }

    async down(db) {
        await db.query(`DROP INDEX CONCURRENTLY IF EXISTS "idx_event_block_number_367674b2"`)
        await db.query(`ALTER TABLE "event" DROP COLUMN IF EXISTS "block_number"`)
        await db.query(`ALTER TABLE "event" DROP COLUMN IF EXISTS "index"`)
    }

    async ensureIndex(db) {
        const name = 'idx_event_block_number_367674b2'
        const indexes = await db.query(
            `SELECT idx.indisvalid AS valid
             FROM pg_catalog.pg_index idx
             INNER JOIN pg_catalog.pg_class cls ON cls.oid = idx.indexrelid
             INNER JOIN pg_catalog.pg_namespace ns ON ns.oid = cls.relnamespace
             WHERE ns.nspname = current_schema() AND cls.relname = $1`,
            [name]
        )

        if (indexes[0]?.valid) return
        if (indexes.length > 0) await db.query(`DROP INDEX CONCURRENTLY "idx_event_block_number_367674b2"`)
        await db.query(`CREATE INDEX CONCURRENTLY "idx_event_block_number_367674b2" ON "event" ("block_number")`)
    }
}
