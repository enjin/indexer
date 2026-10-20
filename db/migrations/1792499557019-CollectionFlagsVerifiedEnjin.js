module.exports = class CollectionFlagsVerifiedEnjin1792499557019 {
    name = 'CollectionFlagsVerifiedEnjin1792499557019'

    async up(db) {
        await db.query(
            `UPDATE "collection" SET "flags" = "flags" || '{"verifiedEnjin": false}'::jsonb WHERE NOT ("flags" ? 'verifiedEnjin')`
        )
    }

    async down(db) {
        await db.query(`UPDATE "collection" SET "flags" = "flags" - 'verifiedEnjin'`)
    }
}
