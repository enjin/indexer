module.exports = class Data1755509473732 {
    name = 'Data1755509473732'

    async up(db) {
        await db.query(`ALTER TABLE "validator" ADD "is_active" boolean`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "validator" DROP COLUMN "is_active"`)
    }
}
