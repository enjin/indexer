module.exports = class Data1679718963086 {
    name = 'Data1679718963086'

    async up(db) {
        await db.query(`CREATE TABLE "trait" ("id" character varying NOT NULL, "trait_type" text NOT NULL, "value" text NOT NULL, "count" integer NOT NULL, "collection_id" character varying, CONSTRAINT "PK_c5d145e577199fe58afbf2a1b2d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_641b9ad0c609f0a1ec747a05ce" ON "trait" ("collection_id") `)
        await db.query(`CREATE TABLE "trait_token" ("id" character varying NOT NULL, "trait_id" character varying, "token_id" character varying, CONSTRAINT "PK_4e57eb88e2621a0cc66431f9115" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_71850fdd62a5b8d25de4245e55" ON "trait_token" ("trait_id") `)
        await db.query(`CREATE INDEX "IDX_42c1cb4414e0240cf7e0ee8f96" ON "trait_token" ("token_id") `)
        await db.query(`ALTER TABLE "trait" ADD CONSTRAINT "FK_641b9ad0c609f0a1ec747a05ce3" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_71850fdd62a5b8d25de4245e550" FOREIGN KEY ("trait_id") REFERENCES "trait"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "trait"`)
        await db.query(`DROP INDEX "public"."IDX_641b9ad0c609f0a1ec747a05ce"`)
        await db.query(`DROP TABLE "trait_token"`)
        await db.query(`DROP INDEX "public"."IDX_71850fdd62a5b8d25de4245e55"`)
        await db.query(`DROP INDEX "public"."IDX_42c1cb4414e0240cf7e0ee8f96"`)
        await db.query(`ALTER TABLE "trait" DROP CONSTRAINT "FK_641b9ad0c609f0a1ec747a05ce3"`)
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_71850fdd62a5b8d25de4245e550"`)
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968"`)
    }
}
