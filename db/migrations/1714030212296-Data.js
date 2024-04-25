module.exports = class Data1714030212296 {
    name = 'Data1714030212296'

    async up(db) {
        await db.query(`ALTER TABLE "event" ADD "name" text NOT NULL`)
        await db.query(`CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "event" ("name") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "event" DROP COLUMN "name"`)
        await db.query(`DROP INDEX "public"."IDX_b535fbe8ec6d832dde22065ebd"`)
    }
}
