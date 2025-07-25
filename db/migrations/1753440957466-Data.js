module.exports = class Data1753440957466 {
    name = 'Data1753440957466'

    async up(db) {
        await db.query(`CREATE TABLE "pools_offers" ("id" character varying NOT NULL, "pool_id" character varying, "offer_id" character varying, CONSTRAINT "PK_72afd0362bd7724f37ffd2436cd" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_7689d49b22e69755ce8360ad11" ON "pools_offers" ("pool_id") `)
        await db.query(`CREATE INDEX "IDX_c586be6735819a7a6a44f5c08f" ON "pools_offers" ("offer_id") `)
        await db.query(`ALTER TABLE "pools_offers" ADD CONSTRAINT "FK_7689d49b22e69755ce8360ad112" FOREIGN KEY ("pool_id") REFERENCES "nomination_pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "pools_offers" ADD CONSTRAINT "FK_c586be6735819a7a6a44f5c08f1" FOREIGN KEY ("offer_id") REFERENCES "stake_exchange_offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "pools_offers"`)
        await db.query(`DROP INDEX "public"."IDX_7689d49b22e69755ce8360ad11"`)
        await db.query(`DROP INDEX "public"."IDX_c586be6735819a7a6a44f5c08f"`)
        await db.query(`ALTER TABLE "pools_offers" DROP CONSTRAINT "FK_7689d49b22e69755ce8360ad112"`)
        await db.query(`ALTER TABLE "pools_offers" DROP CONSTRAINT "FK_c586be6735819a7a6a44f5c08f1"`)
    }
}
