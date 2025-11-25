module.exports = class Data1764057660620 {
    name = 'Data1764057660620'

    async up(db) {
        await db.query(`ALTER TABLE "claim_details" ALTER COLUMN "delay_claims_period" TYPE bigint USING "delay_claims_period"::bigint`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "claim_details" ALTER COLUMN "delay_claims_period" TYPE integer USING "delay_claims_period"::integer`)
    }
}
