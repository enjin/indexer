module.exports = class Data1747320036198 {
    name = 'Data1747320036198'

    async up(db) {
        await db.query(`
            UPDATE "listing"
            SET "data" = jsonb_set("data", '{notUsed}', '0', true)
            WHERE "data"->>'listingType' = 'FixedPrice'
        `)
    }

    async down(db) {}
}
