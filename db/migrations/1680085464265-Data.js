module.exports = class Data1680085464265 {
    name = 'Data1680085464265'

    async up(db) {
        await db.query(`ALTER TABLE "trait" DROP COLUMN "count"`)
        await db.query(`ALTER TABLE "trait" ADD "count" numeric NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "trait" ADD "count" integer NOT NULL`)
        await db.query(`ALTER TABLE "trait" DROP COLUMN "count"`)
    }
}
