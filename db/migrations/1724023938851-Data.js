module.exports = class Data1724023938851 {
    name = 'Data1724023938851'

    async up(db) {
        await db.query(`CREATE TABLE "counter_offer" ("id" character varying NOT NULL, "seller_price" numeric, "buyer_price" numeric, "amount" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "account_id" character varying, "listing_id" character varying, CONSTRAINT "PK_af6aabc71dd863112e2f223d15e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_9df1e36fa119ce844b219a1fd2" ON "counter_offer" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_ad80cb472652e78956eaa5e367" ON "counter_offer" ("listing_id") `)
        await db.query(`ALTER TABLE "counter_offer" ADD CONSTRAINT "FK_9df1e36fa119ce844b219a1fd23" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "counter_offer" ADD CONSTRAINT "FK_ad80cb472652e78956eaa5e3672" FOREIGN KEY ("listing_id") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "counter_offer"`)
        await db.query(`DROP INDEX "public"."IDX_9df1e36fa119ce844b219a1fd2"`)
        await db.query(`DROP INDEX "public"."IDX_ad80cb472652e78956eaa5e367"`)
        await db.query(`ALTER TABLE "counter_offer" DROP CONSTRAINT "FK_9df1e36fa119ce844b219a1fd23"`)
        await db.query(`ALTER TABLE "counter_offer" DROP CONSTRAINT "FK_ad80cb472652e78956eaa5e3672"`)
    }
}
