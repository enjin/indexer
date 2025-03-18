module.exports = class Data1742289663612 {
    name = 'Data1742289663612'

    async up(db) {
        await db.query(`UPDATE collection SET market_policy = jsonb_set(market_policy, '{beneficiaries}', '[]'::jsonb)`)
    }

    async down(db) {
        // No revert
    }
}
