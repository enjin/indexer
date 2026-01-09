module.exports = class Data1767949966614 {
    name = 'Data1767949966614'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "creation_supply" numeric NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "creation_supply"`)
    }
}
