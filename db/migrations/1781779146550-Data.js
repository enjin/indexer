module.exports = class Data1781779146550 {
    name = 'Data1781779146550'

    async up(db) {
        await db.query(`ALTER TABLE "fuel_tank" ADD "account_expiration" integer`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "fuel_tank" DROP COLUMN "account_expiration"`)
    }
}
