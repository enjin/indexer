module.exports = class Data1737320036194 {
    name = 'Data1737320036194'

    async up(db) {
        await db.query(`ALTER TABLE "listing" ADD "has_royalty_increased" boolean`)
        await db.query(`CREATE INDEX "IDX_98f3fde34c051966bd8ceb376e" ON "listing" ("has_royalty_increased") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "listing" DROP COLUMN "has_royalty_increased"`)
        await db.query(`DROP INDEX "public"."IDX_98f3fde34c051966bd8ceb376e"`)
    }
}
