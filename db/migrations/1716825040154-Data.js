module.exports = class Data1716825040154 {
    name = 'Data1716825040154'

    async up(db) {
        await db.query(`CREATE INDEX "IDX_f2e5cb46b3f9ea88431a618acb" ON "collection_account" ("created_at") `)
    }

    async down(db) {
        await db.query(`DROP INDEX "public"."IDX_f2e5cb46b3f9ea88431a618acb"`)
    }
}
