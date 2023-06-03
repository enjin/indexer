module.exports = class Data1685807632833 {
    name = 'Data1685807632833'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "recent_listing_id" character varying`)
        await db.query(`CREATE INDEX "IDX_c767cb0b961c3e85c5978a582b" ON "token" ("recent_listing_id") `)
        await db.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_c767cb0b961c3e85c5978a582b6" FOREIGN KEY ("recent_listing_id") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "recent_listing_id"`)
        await db.query(`DROP INDEX "public"."IDX_c767cb0b961c3e85c5978a582b"`)
        await db.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_c767cb0b961c3e85c5978a582b6"`)
    }
}
