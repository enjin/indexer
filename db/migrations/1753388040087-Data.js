module.exports = class Data1753388040087 {
    name = 'Data1753388040087'

    async up(db) {
        // Add columns as nullable first
        await db.query(`ALTER TABLE "pool_member_rewards" ADD "accumulated_rewards" numeric`)
        await db.query(`ALTER TABLE "pool_member_rewards" ADD "rewards" numeric`)
        await db.query(`ALTER TABLE "pool_member_rewards" ADD "early_bird_reward" numeric`)

        // Update existing records with default values
        await db.query(`UPDATE "pool_member_rewards" SET "accumulated_rewards" = 0 WHERE "accumulated_rewards" IS NULL`)
        await db.query(`UPDATE "pool_member_rewards" SET "rewards" = 0 WHERE "rewards" IS NULL`)
        await db.query(`UPDATE "pool_member_rewards" SET "early_bird_reward" = 0 WHERE "early_bird_reward" IS NULL`)

        // Make columns non-nullable
        await db.query(`ALTER TABLE "pool_member_rewards" ALTER COLUMN "accumulated_rewards" SET NOT NULL`)
        await db.query(`ALTER TABLE "pool_member_rewards" ALTER COLUMN "rewards" SET NOT NULL`)
        await db.query(`ALTER TABLE "pool_member_rewards" ALTER COLUMN "early_bird_reward" SET NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "pool_member_rewards" DROP COLUMN "accumulated_rewards"`)
        await db.query(`ALTER TABLE "pool_member_rewards" DROP COLUMN "rewards"`)
        await db.query(`ALTER TABLE "pool_member_rewards" DROP COLUMN "early_bird_reward"`)
    }
}
