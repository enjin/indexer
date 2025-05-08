module.exports = class Data1746711677954 {
    name = 'Data1746711677954'

    async up(db) {
        await db.query(`ALTER TABLE "account_token_event" ADD "collection_id" text NOT NULL default '0'`) // TODO: Remove default value when we resync
        await db.query(`CREATE INDEX "IDX_f560ab12d57b56e6033c2c318f" ON "account_token_event" ("collection_id") `)
        await db.query(`ALTER TABLE "account_token_event" DROP CONSTRAINT "FK_87fb00cfed5217b47de01f58562"`)
        await db.query(`UPDATE "account_token_event" SET "token_id" = '0' WHERE "token_id" IS NULL`) // TODO: Remove this when we resync
        await db.query(`ALTER TABLE "account_token_event" ALTER COLUMN "token_id" SET NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account_token_event" ADD CONSTRAINT "FK_87fb00cfed5217b47de01f58562" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "collection_id"`)
        await db.query(`CREATE INDEX "IDX_87fb00cfed5217b47de01f5856" ON "account_token_event" ("token_id") `)
        await db.query(`ALTER TABLE "account_token_event" ADD "token_id" character varying`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "token_id"`)
        await db.query(`DROP INDEX "public"."IDX_f560ab12d57b56e6033c2c318f"`)
        await db.query(`DROP INDEX "public"."IDX_87fb00cfed5217b47de01f5856"`)
    }
}
