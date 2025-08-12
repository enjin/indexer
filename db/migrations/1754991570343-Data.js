module.exports = class Data1754991570343 {
    name = 'Data1754991570343'

    async up(db) {
        await db.query(`CREATE TABLE "token_group_token" ("id" character varying NOT NULL, "token_id" character varying, "token_group_id" character varying, CONSTRAINT "PK_df784a4f65d6edd7c9a15889310" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_9709e019b55823dcd42a6c77d3" ON "token_group_token" ("token_group_id") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_c82cce1f4c6e3e66abaf756ef1" ON "token_group_token" ("token_id", "token_group_id") `)
        await db.query(`CREATE TABLE "token_group" ("id" character varying NOT NULL, "collection_id" character varying, CONSTRAINT "PK_f314779659adbc6dbf818ee6533" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_30e366882bb535f0d575e30636" ON "token_group" ("collection_id") `)
        await db.query(`ALTER TABLE "attribute" ADD "token_group_id" character varying`)
        await db.query(`CREATE INDEX "IDX_b12790817a3c0b217541456baf" ON "attribute" ("token_group_id") `)
        await db.query(`ALTER TABLE "token_group_token" ADD CONSTRAINT "FK_866c13ee90e3d1ca05ea7e18c08" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_group_token" ADD CONSTRAINT "FK_9709e019b55823dcd42a6c77d33" FOREIGN KEY ("token_group_id") REFERENCES "token_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_group" ADD CONSTRAINT "FK_30e366882bb535f0d575e30636c" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "attribute" ADD CONSTRAINT "FK_b12790817a3c0b217541456bafc" FOREIGN KEY ("token_group_id") REFERENCES "token_group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "token_group_token"`)
        await db.query(`DROP INDEX "public"."IDX_9709e019b55823dcd42a6c77d3"`)
        await db.query(`DROP INDEX "public"."IDX_c82cce1f4c6e3e66abaf756ef1"`)
        await db.query(`DROP TABLE "token_group"`)
        await db.query(`DROP INDEX "public"."IDX_30e366882bb535f0d575e30636"`)
        await db.query(`ALTER TABLE "attribute" DROP COLUMN "token_group_id"`)
        await db.query(`DROP INDEX "public"."IDX_b12790817a3c0b217541456baf"`)
        await db.query(`ALTER TABLE "token_group_token" DROP CONSTRAINT "FK_866c13ee90e3d1ca05ea7e18c08"`)
        await db.query(`ALTER TABLE "token_group_token" DROP CONSTRAINT "FK_9709e019b55823dcd42a6c77d33"`)
        await db.query(`ALTER TABLE "token_group" DROP CONSTRAINT "FK_30e366882bb535f0d575e30636c"`)
        await db.query(`ALTER TABLE "attribute" DROP CONSTRAINT "FK_b12790817a3c0b217541456bafc"`)
    }
}
