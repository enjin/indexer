module.exports = class Data1751394543479 {
    name = 'Data1751394543479'

    async up(db) {
        await db.query(`ALTER TABLE "stake_exchange_offer" ADD "amount" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "stake_exchange_offer" DROP COLUMN "amount"`)
    }
}
