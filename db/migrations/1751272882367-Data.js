module.exports = class Data1751272882367 {
    name = 'Data1751272882367'

    async up(db) {
        await db.query(`ALTER TABLE "collection" ADD "is_transfer_pending" boolean`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "collection" DROP COLUMN "is_transfer_pending"`)
    }
}
