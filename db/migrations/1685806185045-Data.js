module.exports = class Data1685806185045 {
    name = 'Data1685806185045'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "best_listing_id" character varying`)
        await db.query(`CREATE INDEX "IDX_3329305f7a90cd8be81342574a" ON "token" ("best_listing_id") `)
        await db.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_3329305f7a90cd8be81342574ac" FOREIGN KEY ("best_listing_id") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "best_listing_id"`)
        await db.query(`DROP INDEX "public"."IDX_3329305f7a90cd8be81342574a"`)
        await db.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_3329305f7a90cd8be81342574ac"`)
    }
}
