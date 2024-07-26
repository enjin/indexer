module.exports = class Data1721915534639 {
    name = 'Data1721915534639'

    async up(db) {
        await db.query(`CREATE INDEX "IDX_2e957c007c0f7ec5fc1dc4b5d5" ON "collection" ("hidden") `)
    }

    async down(db) {
        await db.query(`DROP INDEX "public"."IDX_2e957c007c0f7ec5fc1dc4b5d5"`)
    }
}
