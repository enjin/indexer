module.exports = class Data1717679807555 {
    name = 'Data1717679807555'

    async up(db) {
        await db.query(`ALTER TABLE "chain_info" ADD "validator" text`)
        await db.query(`CREATE INDEX "IDX_b183ef768fae584489aba400c6" ON "chain_info" ("validator") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "chain_info" DROP COLUMN "validator"`)
        await db.query(`DROP INDEX "public"."IDX_b183ef768fae584489aba400c6"`)
    }
}
