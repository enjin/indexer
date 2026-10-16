module.exports = class FuelTankDestroyScheduledAt1791900000000 {
    name = 'FuelTankDestroyScheduledAt1791900000000'

    async up(db) {
        await db.query(`ALTER TABLE "fuel_tank" ADD "destroy_scheduled_at" integer`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "fuel_tank" DROP COLUMN "destroy_scheduled_at"`)
    }
}
