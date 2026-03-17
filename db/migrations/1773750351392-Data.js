module.exports = class Data1773750351392 {
    name = 'Data1773750351392'

    async up(db) {
        await db.query(`ALTER TABLE "pool_member_rewards" ADD "era_index" integer`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "pool_member_rewards" DROP COLUMN "era_index"`)
    }
}
