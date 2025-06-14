module.exports = class Data1749904403251 {
    name = 'Data1749904403251'

    async up(db) {
        await db.query(`ALTER TABLE "pool_member" ADD "is_active" boolean`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "pool_member" DROP COLUMN "is_active"`)
    }
}
