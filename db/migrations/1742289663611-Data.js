module.exports = class Data1742289663611 {
    name = 'Data1742289663611'

    async up(db) {
        await db.query(
            `CREATE TABLE "whitelisted_account" ("id" character varying NOT NULL, "allowance" integer NOT NULL, "amount_used" integer NOT NULL, "deposit" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "account_id" character varying, "listing_id" character varying, CONSTRAINT "PK_e50c2ce75b1a2aaa84296caa11f" PRIMARY KEY ("id"))`
        )
        await db.query(`CREATE INDEX "IDX_08fcb547f04afff252aae6ed4d" ON "whitelisted_account" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_2e16c26d1dbedada68a1784d7f" ON "whitelisted_account" ("listing_id") `)
        await db.query(`ALTER TABLE "listing" ADD "start_block" integer`)
        await db.query(`ALTER TABLE "listing" ADD "creation_block" integer`)
        await db.query(`UPDATE "listing" SET "creation_block" = "height"`)
        await db.query(`ALTER TABLE "listing" ALTER COLUMN "creation_block" SET NOT NULL`)
        await db.query(`ALTER TABLE "listing" ADD "uses_whitelist" boolean NOT NULL DEFAULT false`)
        await db.query(
            `ALTER TABLE "whitelisted_account" ADD CONSTRAINT "FK_08fcb547f04afff252aae6ed4d9" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
        await db.query(
            `ALTER TABLE "whitelisted_account" ADD CONSTRAINT "FK_2e16c26d1dbedada68a1784d7f4" FOREIGN KEY ("listing_id") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
    }

    async down(db) {
        await db.query(`DROP TABLE "whitelisted_account"`)
        await db.query(`DROP INDEX "public"."IDX_08fcb547f04afff252aae6ed4d"`)
        await db.query(`DROP INDEX "public"."IDX_2e16c26d1dbedada68a1784d7f"`)
        await db.query(`ALTER TABLE "listing" DROP COLUMN "start_block"`)
        await db.query(`ALTER TABLE "listing" DROP COLUMN "creation_block"`)
        await db.query(`ALTER TABLE "listing" DROP COLUMN "uses_whitelist"`)
        await db.query(`ALTER TABLE "whitelisted_account" DROP CONSTRAINT "FK_08fcb547f04afff252aae6ed4d9"`)
        await db.query(`ALTER TABLE "whitelisted_account" DROP CONSTRAINT "FK_2e16c26d1dbedada68a1784d7f4"`)
    }
}
