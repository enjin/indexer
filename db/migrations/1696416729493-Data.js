module.exports = class Data1696416729493 {
    name = 'Data1696416729493'

    async up(db) {
        await db.query(`ALTER TABLE "claim_request" ADD "is_rejected" boolean NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "claim_request" DROP COLUMN "is_rejected"`)
    }
}
