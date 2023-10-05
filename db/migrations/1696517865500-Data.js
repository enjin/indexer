module.exports = class Data1696517865500 {
    name = 'Data1696517865500'

    async up(db) {
        await db.query(`CREATE UNIQUE INDEX "IDX_0cc84b92a53558f6d4dcbf4874" ON "claim_request" ("hash") `)
    }

    async down(db) {
        await db.query(`DROP INDEX "public"."IDX_0cc84b92a53558f6d4dcbf4874"`)
    }
}
