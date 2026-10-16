module.exports = class MarketplaceSettlementAbandonedWhitelistBigInt1792000000000 {
    name = 'MarketplaceSettlementAbandonedWhitelistBigInt1792000000000'

    async up(db) {
        await db.query(`ALTER TABLE "listing" ADD "settlement_abandoned" boolean`)
        await db.query(
            `ALTER TABLE "whitelisted_account" ALTER COLUMN "allowance" TYPE numeric USING "allowance"::numeric`
        )
        await db.query(
            `ALTER TABLE "whitelisted_account" ALTER COLUMN "amount_used" TYPE numeric USING "amount_used"::numeric`
        )
    }

    async down(db) {
        await db.query(
            `ALTER TABLE "whitelisted_account" ALTER COLUMN "amount_used" TYPE integer USING "amount_used"::integer`
        )
        await db.query(
            `ALTER TABLE "whitelisted_account" ALTER COLUMN "allowance" TYPE integer USING "allowance"::integer`
        )
        await db.query(`ALTER TABLE "listing" DROP COLUMN "settlement_abandoned"`)
    }
}
