module.exports = class Data1700476842756 {
    name = 'Data1700476842756'

    async up(db) {
        await db.query(`ALTER TABLE "account" DROP COLUMN "token_values"`)
        await db.query(`ALTER TABLE "token_account" ADD "total_balance" numeric NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account" ADD "token_values" numeric NOT NULL`)
        await db.query(`ALTER TABLE "token_account" DROP COLUMN "total_balance"`)
    }
}