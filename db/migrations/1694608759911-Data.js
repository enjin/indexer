module.exports = class Data1694608759911 {
    name = 'Data1694608759911'

    async up(db) {
        await db.query(`ALTER TABLE "claim_request" ALTER COLUMN "hash" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "claim_request" ALTER COLUMN "hash" SET NOT NULL`)
    }
}
