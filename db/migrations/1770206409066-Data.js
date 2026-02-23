module.exports = class Data1770206409066 {
    name = 'Data1770206409066'

    async up(db) {
        await db.query(`CREATE TABLE "user_infusion" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "account_id" character varying, "token_id" character varying, CONSTRAINT "PK_2b9e170a79f15e877e282685236" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6a653c2062456eb22f80271668" ON "user_infusion" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_70bec67c9f26c6441726bdf3c3" ON "user_infusion" ("token_id") `)
        await db.query(`ALTER TABLE "user_infusion" ADD CONSTRAINT "FK_6a653c2062456eb22f802716680" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "user_infusion" ADD CONSTRAINT "FK_70bec67c9f26c6441726bdf3c35" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "user_infusion"`)
        await db.query(`DROP INDEX "public"."IDX_6a653c2062456eb22f80271668"`)
        await db.query(`DROP INDEX "public"."IDX_70bec67c9f26c6441726bdf3c3"`)
        await db.query(`ALTER TABLE "user_infusion" DROP CONSTRAINT "FK_6a653c2062456eb22f802716680"`)
        await db.query(`ALTER TABLE "user_infusion" DROP CONSTRAINT "FK_70bec67c9f26c6441726bdf3c35"`)
    }
}
