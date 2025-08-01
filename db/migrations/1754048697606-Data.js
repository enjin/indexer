module.exports = class Data1754048697606 {
    name = 'Data1754048697606'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_5c1733fe78ae1230c9ff22dc6a"`)
        await db.query(`ALTER TABLE "token" ADD "nomination_pool_id" character varying`)
        await db.query(`ALTER TABLE "nomination_pool" DROP CONSTRAINT "FK_5c1733fe78ae1230c9ff22dc6a9"`)
        await db.query(`ALTER TABLE "nomination_pool" DROP CONSTRAINT "REL_5c1733fe78ae1230c9ff22dc6a"`)
        await db.query(`CREATE INDEX "IDX_5c1733fe78ae1230c9ff22dc6a" ON "nomination_pool" ("degen_token_id") `)
        await db.query(`CREATE INDEX "IDX_8d7dca96af03019ffe354cb5aa" ON "token" ("nomination_pool_id") `)
        await db.query(`ALTER TABLE "nomination_pool" ADD CONSTRAINT "FK_5c1733fe78ae1230c9ff22dc6a9" FOREIGN KEY ("degen_token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_8d7dca96af03019ffe354cb5aa1" FOREIGN KEY ("nomination_pool_id") REFERENCES "nomination_pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`CREATE UNIQUE INDEX "IDX_5c1733fe78ae1230c9ff22dc6a" ON "nomination_pool" ("degen_token_id") `)
        await db.query(`ALTER TABLE "token" DROP COLUMN "nomination_pool_id"`)
        await db.query(`ALTER TABLE "nomination_pool" ADD CONSTRAINT "FK_5c1733fe78ae1230c9ff22dc6a9" FOREIGN KEY ("degen_token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "nomination_pool" ADD CONSTRAINT "REL_5c1733fe78ae1230c9ff22dc6a" UNIQUE ("degen_token_id")`)
        await db.query(`DROP INDEX "public"."IDX_5c1733fe78ae1230c9ff22dc6a"`)
        await db.query(`DROP INDEX "public"."IDX_8d7dca96af03019ffe354cb5aa"`)
        await db.query(`ALTER TABLE "nomination_pool" DROP CONSTRAINT "FK_5c1733fe78ae1230c9ff22dc6a9"`)
        await db.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_8d7dca96af03019ffe354cb5aa1"`)
    }
}
