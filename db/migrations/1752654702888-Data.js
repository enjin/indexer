module.exports = class Data1752654702888 {
    name = 'Data1752654702888'

    async up(db) {
        await db.query(`ALTER TABLE "pool_member" ADD "accumulated_rewards" numeric`)
        await db.query(`ALTER TABLE "pool_member" ADD "is_stash" boolean`)
        await db.query(`ALTER TABLE "collection" ADD "is_transfer_pending" boolean`)
        await db.query(`ALTER TABLE "stake_exchange_offer" ADD "amount" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "pool_member" DROP COLUMN "accumulated_rewards"`)
        await db.query(`ALTER TABLE "pool_member" DROP COLUMN "is_stash"`)
        await db.query(`ALTER TABLE "collection" DROP COLUMN "is_transfer_pending"`)
        await db.query(`ALTER TABLE "stake_exchange_offer" DROP COLUMN "amount"`)
    }
}
