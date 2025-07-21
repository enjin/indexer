module.exports = class Data1749904403251 {
    name = 'Data1749904403251'

    async up(db) {
        await db.query(`ALTER TABLE "pool_member" ADD "is_active" boolean`)
        await db.query(`ALTER TABLE "collection" ADD "is_transfer_pending" boolean`)
        await db.query(`ALTER TABLE "stake_exchange_offer" ADD "amount" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "pool_member" DROP COLUMN "is_active"`)
        await db.query(`ALTER TABLE "collection" DROP COLUMN "is_transfer_pending"`)
        await db.query(`ALTER TABLE "stake_exchange_offer" DROP COLUMN "amount"`)
    }
}
