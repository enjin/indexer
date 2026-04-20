module.exports = class Data1776689449155 {
    name = 'Data1776689449155'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "hidden" boolean DEFAULT false`)
        await db.query(`CREATE INDEX "IDX_88049aff355e4933bf3703be76" ON "token" ("hidden") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "hidden"`)
        await db.query(`DROP INDEX "public"."IDX_88049aff355e4933bf3703be76"`)
    }
}
