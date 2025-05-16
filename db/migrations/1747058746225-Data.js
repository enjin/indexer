module.exports = class Data1747058746225 {
    name = 'Data1747058746225'

    async up(db) {
        await db.query(`ALTER TABLE "account_token_event" ADD "meta" jsonb`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "meta"`)
    }
}
