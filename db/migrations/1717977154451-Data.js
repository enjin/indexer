module.exports = class Data1717977154451 {
    name = 'Data1717977154451'

    async up(db) {
        await db.query(`CREATE TABLE "token_rarity" ("id" character varying NOT NULL, "score" numeric NOT NULL, "rank" integer NOT NULL, "collection_id" character varying, "token_id" character varying, CONSTRAINT "PK_aa34e9209b73d6ac33b006b2f6d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2983370aa94af81928e41175e0" ON "token_rarity" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_a708c8b728c92f895762b5d027" ON "token_rarity" ("token_id") `)
        await db.query(`ALTER TABLE "token_rarity" ADD CONSTRAINT "FK_2983370aa94af81928e41175e0e" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_rarity" ADD CONSTRAINT "FK_a708c8b728c92f895762b5d0278" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "token_rarity"`)
        await db.query(`DROP INDEX "public"."IDX_2983370aa94af81928e41175e0"`)
        await db.query(`DROP INDEX "public"."IDX_a708c8b728c92f895762b5d027"`)
        await db.query(`ALTER TABLE "token_rarity" DROP CONSTRAINT "FK_2983370aa94af81928e41175e0e"`)
        await db.query(`ALTER TABLE "token_rarity" DROP CONSTRAINT "FK_a708c8b728c92f895762b5d0278"`)
    }
}
