module.exports = class Data1755247483404 {
    name = 'Data1755247483404'

    async up(db) {
        await db.query(`ALTER TABLE "validator" ADD "nominators_count" integer`)
        await db.query(`ALTER TABLE "validator" ADD "accumulated_rewards" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "validator" DROP COLUMN "nominators_count"`)
        await db.query(`ALTER TABLE "validator" DROP COLUMN "accumulated_rewards"`)
    }
}
