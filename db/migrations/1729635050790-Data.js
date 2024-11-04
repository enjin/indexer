module.exports = class Data1729635050790 {
    name = 'Data1729635050790'

    async up(db) {
        await db.query(`ALTER TABLE "counter_offer" ADD "last_action_id" character varying`)
        await db.query(`CREATE INDEX "IDX_58e629ae6cc7de61f48b151846" ON "counter_offer" ("last_action_id") `)
        await db.query(`ALTER TABLE "counter_offer" ADD CONSTRAINT "FK_58e629ae6cc7de61f48b1518464" FOREIGN KEY ("last_action_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "counter_offer" DROP COLUMN "last_action_id"`)
        await db.query(`DROP INDEX "public"."IDX_58e629ae6cc7de61f48b151846"`)
        await db.query(`ALTER TABLE "counter_offer" DROP CONSTRAINT "FK_58e629ae6cc7de61f48b1518464"`)
    }
}
