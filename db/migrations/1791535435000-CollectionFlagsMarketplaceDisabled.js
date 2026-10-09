module.exports = class CollectionFlagsMarketplaceDisabled1791535435000 {
    name = 'CollectionFlagsMarketplaceDisabled1791535435000'

    async up(db) {
        await db.query(
            `UPDATE "collection" SET "flags" = "flags" || '{"marketplaceDisabled": false}'::jsonb WHERE NOT ("flags" ? 'marketplaceDisabled')`
        )
    }

    async down(db) {
        await db.query(`UPDATE "collection" SET "flags" = "flags" - 'marketplaceDisabled'`)
    }
}
