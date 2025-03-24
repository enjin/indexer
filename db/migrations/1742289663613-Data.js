module.exports = class Data1742289663613 {
    name = 'Data1742289663613'

    async up(db) {
        await db.query(`UPDATE token SET market_policy = jsonb_set(market_policy, '{beneficiaries}', '[]'::jsonb)`)
    }

    async down(db) {
        // No revert
    }
}
