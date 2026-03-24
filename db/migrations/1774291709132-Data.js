module.exports = class Data1774291709132 {
    name = 'Data1774291709132'

    async up(db) {
        await db.query(`ALTER TABLE "chain_info" ADD "finalized" boolean`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "chain_info" DROP COLUMN "finalized"`)
    }
}
