module.exports = class Data1718013477503 {
    name = 'Data1718013477503'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_a708c8b728c92f895762b5d027"`)
        await db.query(`ALTER TABLE "token_rarity" DROP CONSTRAINT "FK_a708c8b728c92f895762b5d0278"`)
        await db.query(`ALTER TABLE "token_rarity" ADD CONSTRAINT "UQ_a708c8b728c92f895762b5d0278" UNIQUE ("token_id")`)
        await db.query(`CREATE UNIQUE INDEX "IDX_a708c8b728c92f895762b5d027" ON "token_rarity" ("token_id") `)
        await db.query(`ALTER TABLE "token_rarity" ADD CONSTRAINT "FK_a708c8b728c92f895762b5d0278" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_a708c8b728c92f895762b5d027" ON "token_rarity" ("token_id") `)
        await db.query(`ALTER TABLE "token_rarity" ADD CONSTRAINT "FK_a708c8b728c92f895762b5d0278" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_rarity" DROP CONSTRAINT "UQ_a708c8b728c92f895762b5d0278"`)
        await db.query(`DROP INDEX "public"."IDX_a708c8b728c92f895762b5d027"`)
        await db.query(`ALTER TABLE "token_rarity" DROP CONSTRAINT "FK_a708c8b728c92f895762b5d0278"`)
    }
}
