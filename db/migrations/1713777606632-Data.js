module.exports = class Data1713777606632 {
    name = 'Data1713777606632'

    async up(db) {
        await db.query(`ALTER TABLE "claim_request" ADD "acount_type" character varying(9) NOT NULL`)
        await db.query(`ALTER TABLE "claim_request" DROP COLUMN "account"`)
        await db.query(`ALTER TABLE "claim_request" ADD "account" text NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "claim_request" DROP COLUMN "acount_type"`)
        await db.query(`ALTER TABLE "claim_request" ADD "account" jsonb NOT NULL`)
        await db.query(`ALTER TABLE "claim_request" DROP COLUMN "account"`)
    }
}
