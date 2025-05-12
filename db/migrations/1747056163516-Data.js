module.exports = class Data1747056163516 {
    name = 'Data1747056163516'

    async up(db) {
        await db.query(`ALTER TABLE "account_token_event" ADD "meta" jsonb NOT NULL`)
        await db.query(`ALTER TABLE "account_token_event" ALTER COLUMN "collection_id" DROP DEFAULT`)
        await db.query(`DROP INDEX "public"."IDX_87fb00cfed5217b47de01f5856"`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "token_id"`)
        await db.query(`ALTER TABLE "account_token_event" ADD "token_id" text NOT NULL`)
        await db.query(`CREATE INDEX "IDX_87fb00cfed5217b47de01f5856" ON "account_token_event" ("token_id") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "meta"`)
        await db.query(`ALTER TABLE "account_token_event" ALTER COLUMN "collection_id" SET DEFAULT '0'`)
        await db.query(`CREATE INDEX "IDX_87fb00cfed5217b47de01f5856" ON "account_token_event" ("token_id") `)
        await db.query(`ALTER TABLE "account_token_event" ADD "token_id" character varying NOT NULL`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "token_id"`)
        await db.query(`DROP INDEX "public"."IDX_87fb00cfed5217b47de01f5856"`)
    }
}
