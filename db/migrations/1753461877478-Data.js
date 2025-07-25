module.exports = class Data1753461877478 {
    name = 'Data1753461877478'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_1bc9800044086ca3e31f85f7e7"`)
        await db.query(`CREATE INDEX "IDX_62d62253f33062b0e42352aab8" ON "attribute" ("key") `)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_1bc9800044086ca3e31f85f7e7" ON "attribute" ("key", "collection_id", "token_id") `)
        await db.query(`DROP INDEX "public"."IDX_62d62253f33062b0e42352aab8"`)
    }
}
