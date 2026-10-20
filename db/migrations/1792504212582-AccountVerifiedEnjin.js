module.exports = class AccountVerifiedEnjin1792504212582 {
    name = 'AccountVerifiedEnjin1792504212582'

    async up(db) {
        await db.query(`ALTER TABLE "account" ADD "verified_enjin" boolean NOT NULL DEFAULT false`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account" DROP COLUMN "verified_enjin"`)
    }
}
