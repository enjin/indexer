module.exports = class Data1753273557049 {
    name = 'Data1753273557049'

    async up(db) {
        await db.query(`ALTER TABLE "nomination_pool" ADD "accumulated_commission" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "nomination_pool" DROP COLUMN "accumulated_commission"`)
    }
}
