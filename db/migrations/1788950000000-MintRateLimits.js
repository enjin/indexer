module.exports = class MintRateLimits1788950000000 {
    name = 'MintRateLimits1788950000000'

    async up(db) {
        await db.query(`ALTER TABLE "collection" ADD "mint_rate_limit" jsonb`)
        await db.query(`ALTER TABLE "token" ADD "mint_rate_limit" jsonb`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "mint_rate_limit"`)
        await db.query(`ALTER TABLE "collection" DROP COLUMN "mint_rate_limit"`)
    }
}
