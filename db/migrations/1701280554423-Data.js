module.exports = class Data1701280554423 {
    name = 'Data1701280554423'

    async up(db) {
        await db.query(`ALTER TABLE "fuel_tank_rule_set" ADD "is_permitted_extrinsics_null" boolean NOT NULL`)
        await db.query(`ALTER TABLE "fuel_tank_rule_set" ADD "whitelisted_pallets" text array`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "fuel_tank_rule_set" DROP COLUMN "is_permitted_extrinsics_null"`)
        await db.query(`ALTER TABLE "fuel_tank_rule_set" DROP COLUMN "whitelisted_pallets"`)
    }
}