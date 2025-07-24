module.exports = class Data1753388164062 {
    name = 'Data1753388164062'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_62d62253f33062b0e42352aab8"`)
        await db.query(`CREATE INDEX "IDX_1bc9800044086ca3e31f85f7e7" ON "attribute" ("key", "token_id", "collection_id") `)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_62d62253f33062b0e42352aab8" ON "attribute" ("key") `)
        await db.query(`DROP INDEX "public"."IDX_1bc9800044086ca3e31f85f7e7"`)
    }
}
