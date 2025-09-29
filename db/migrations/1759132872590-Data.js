module.exports = class Data1759132872590 {
    name = 'Data1759132872590'

    async up(db) {
        await db.query(`ALTER TABLE "account" ADD "stats" jsonb`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account" DROP COLUMN "stats"`)
    }
}
