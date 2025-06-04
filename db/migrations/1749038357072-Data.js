module.exports = class Data1749038357072 {
    name = 'Data1749038357072'

    async up(db) {
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "attributes"`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "meta"`)
        await db.query(`DROP INDEX "public"."IDX_f560ab12d57b56e6033c2c318f"`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "collection_id"`)
        await db.query(`ALTER TABLE "account_token_event" ADD "collection_id" character varying NOT NULL`)
        await db.query(`DROP INDEX "public"."IDX_87fb00cfed5217b47de01f5856"`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "token_id"`)
        await db.query(`ALTER TABLE "account_token_event" ADD "token_id" character varying NOT NULL`)
        await db.query(`CREATE INDEX "IDX_f560ab12d57b56e6033c2c318f" ON "account_token_event" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_87fb00cfed5217b47de01f5856" ON "account_token_event" ("token_id") `)
        await db.query(`ALTER TABLE "account_token_event" ADD CONSTRAINT "FK_f560ab12d57b56e6033c2c318fa" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account_token_event" ADD CONSTRAINT "FK_87fb00cfed5217b47de01f58562" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account_token_event" ADD "attributes" jsonb`)
        await db.query(`ALTER TABLE "account_token_event" ADD "meta" jsonb`)
        await db.query(`CREATE INDEX "IDX_f560ab12d57b56e6033c2c318f" ON "account_token_event" ("collection_id") `)
        await db.query(`ALTER TABLE "account_token_event" ADD "collection_id" text NOT NULL`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "collection_id"`)
        await db.query(`CREATE INDEX "IDX_87fb00cfed5217b47de01f5856" ON "account_token_event" ("token_id") `)
        await db.query(`ALTER TABLE "account_token_event" ADD "token_id" text NOT NULL`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "token_id"`)
        await db.query(`DROP INDEX "public"."IDX_f560ab12d57b56e6033c2c318f"`)
        await db.query(`DROP INDEX "public"."IDX_87fb00cfed5217b47de01f5856"`)
        await db.query(`ALTER TABLE "account_token_event" DROP CONSTRAINT "FK_f560ab12d57b56e6033c2c318fa"`)
        await db.query(`ALTER TABLE "account_token_event" DROP CONSTRAINT "FK_87fb00cfed5217b47de01f58562"`)
    }
}
