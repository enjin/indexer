module.exports = class Data1748852860724 {
    name = 'Data1748852860724'

    async up(db) {
        await db.query(`ALTER TABLE "account_token_event" ADD "attributes" jsonb`)
        await db.query(`ALTER TABLE "collection" ALTER COLUMN "mint_policy" DROP NOT NULL`)
        await db.query(`ALTER TABLE "collection" ALTER COLUMN "stats" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "attributes"`)
        await db.query(`ALTER TABLE "collection" ALTER COLUMN "mint_policy" SET NOT NULL`)
        await db.query(`ALTER TABLE "collection" ALTER COLUMN "stats" SET NOT NULL`)
    }
}
