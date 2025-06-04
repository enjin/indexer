module.exports = class Data1749027102554 {
    name = 'Data1749027102554'

    async up(db) {
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "attributes"`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "meta"`)
        await db.query(`ALTER TABLE "account_token_event" ADD "token" jsonb`)
        await db.query(`ALTER TABLE "account_token_event" ADD "collection" jsonb`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account_token_event" ADD "attributes" jsonb`)
        await db.query(`ALTER TABLE "account_token_event" ADD "meta" jsonb`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "token"`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "collection"`)
    }
}
