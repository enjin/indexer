module.exports = class RemoveTokenLoanLastObservedBlock1789113419088 {
    name = 'RemoveTokenLoanLastObservedBlock1789113419088'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_a46b8836dc2050083dc95b28dc"`)
        await db.query(`ALTER TABLE "token_loan" DROP COLUMN "last_observed_block"`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token_loan" ADD "last_observed_block" numeric`)
        await db.query(`UPDATE "token_loan" SET "last_observed_block" = "expiration"`)
        await db.query(`ALTER TABLE "token_loan" ALTER COLUMN "last_observed_block" SET NOT NULL`)
        await db.query(
            `CREATE INDEX "IDX_a46b8836dc2050083dc95b28dc" ON "token_loan" ("last_observed_block")`
        )
    }
}
