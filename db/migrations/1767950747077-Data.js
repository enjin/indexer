module.exports = class Data1767950747077 {
    name = 'Data1767950747077'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "creation_supply" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "creation_supply"`)
    }
}
