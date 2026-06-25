module.exports = class Data1782381017047 {
    name = 'Data1782381017047'

    async up(db) {
        await db.query(`ALTER TABLE "fuel_tank_rule_set" ADD "require_account" boolean`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "fuel_tank_rule_set" DROP COLUMN "require_account"`)
    }
}
