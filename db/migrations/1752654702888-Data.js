module.exports = class Data1752654702888 {
    name = 'Data1752654702888'

    async up(db) {
        await db.query(`ALTER TABLE "pool_member" ADD "accumulated_rewards" numeric`)
        await db.query(`ALTER TABLE "pool_member" ADD "is_stash" boolean`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "pool_member" DROP COLUMN "accumulated_rewards"`)
        await db.query(`ALTER TABLE "pool_member" DROP COLUMN "is_stash"`)
    }
}
