module.exports = class Data1755512507213 {
    name = 'Data1755512507213'

    async up(db) {
        await db.query(`ALTER TABLE "validator" ADD "bonded" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "validator" DROP COLUMN "bonded"`)
    }
}
