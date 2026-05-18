module.exports = class Data1779093125389 {
    name = 'Data1779093125389'

    async up(db) {
        await db.query(`ALTER TABLE "collection" ADD "pending_transfer_id" character varying`)
        await db.query(`CREATE INDEX "IDX_adafc247d90ac1e517b327d141" ON "collection" ("pending_transfer_id") `)
        await db.query(`ALTER TABLE "collection" ADD CONSTRAINT "FK_adafc247d90ac1e517b327d141f" FOREIGN KEY ("pending_transfer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "collection" DROP CONSTRAINT "FK_adafc247d90ac1e517b327d141f"`)
        await db.query(`DROP INDEX "public"."IDX_adafc247d90ac1e517b327d141"`)
        await db.query(`ALTER TABLE "collection" DROP COLUMN "pending_transfer_id"`)
    }
}
