module.exports = class Data1747320036197 {
    name = 'Data1747320036197'

    async up(db) {
        await db.query(`
            UPDATE "token"
            SET "cap" = jsonb_set("cap", '{supply}', '"0"', true)
            WHERE "cap"->>'type' = 'SingleMint'
            AND "cap" IS NOT NULL
            AND "cap"->>'supply' IS NULL
        `)
    }

    async down(db) {}
}
