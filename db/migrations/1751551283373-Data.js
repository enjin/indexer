module.exports = class Data1751551283373 {
    name = 'Data1751551283373'

    async up(db) {
        await db.query(`ALTER TABLE "pool_member" ADD "accumulated_rewards" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "pool_member" DROP COLUMN "accumulated_rewards"`)
    }
}
