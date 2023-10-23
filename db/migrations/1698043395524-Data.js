module.exports = class Data1698043395524 {
    name = 'Data1698043395524'

    async up(db) {
        await db.query(`ALTER TABLE "extrinsic" ADD "fuel_tank" jsonb`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "extrinsic" DROP COLUMN "fuel_tank"`)
    }
}
