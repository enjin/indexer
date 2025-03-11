module.exports = class Data1740596837112 {
    name = 'Data1740596837112'

    async up(db) {
        await db.query(
            `UPDATE "token_account" SET "is_frozen" = false WHERE "id" = '0x0aafe019f1e9cde034c60e55545aaee4ec30386c05ce0314afd305647e28f902-2100-1'`
        )
        await db.query(
            `UPDATE "token_account" SET "is_frozen" = false WHERE "id" = '0x0aafe019f1e9cde034c60e55545aaee4ec30386c05ce0314afd305647e28f902-2100-29'`
        )
        await db.query(
            `UPDATE "token_account" SET "is_frozen" = false WHERE "id" = '0x0aafe019f1e9cde034c60e55545aaee4ec30386c05ce0314afd305647e28f902-2100-31'`
        )
        await db.query(
            `UPDATE "token_account" SET "is_frozen" = false WHERE "id" = '0x0aafe019f1e9cde034c60e55545aaee4ec30386c05ce0314afd305647e28f902-2100-41'`
        )
        await db.query(
            `UPDATE "token_account" SET "is_frozen" = false WHERE "id" = '0x0aafe019f1e9cde034c60e55545aaee4ec30386c05ce0314afd305647e28f902-2100-46'`
        )
        await db.query(
            `UPDATE "token_account" SET "is_frozen" = false WHERE "id" = '0x0aafe019f1e9cde034c60e55545aaee4ec30386c05ce0314afd305647e28f902-2100-45'`
        )
    }

    async down(db) {
        // Do not revert
    }
}
