module.exports = class Data1725967507033 {
    name = 'Data1725967507033'

    async up(db) {
        await db.query(`ALTER TABLE "fuel_tank_rule_set" ADD "minimum_infusion" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "fuel_tank_rule_set" DROP COLUMN "minimum_infusion"`)
    }
}
