module.exports = class RemoveGovernanceReferendumIndex1792397548525 {
    name = 'RemoveGovernanceReferendumIndex1792397548525'

    async up(db) {
        await db.query(`ALTER TABLE "governance_referendum" DROP COLUMN IF EXISTS "referendum_index"`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "governance_referendum" ADD COLUMN "referendum_index" integer`)
        await db.query(`UPDATE "governance_referendum" SET "referendum_index" = split_part("id", ':', 2)::integer`)
        await db.query(`ALTER TABLE "governance_referendum" ALTER COLUMN "referendum_index" SET NOT NULL`)
        await db.query(`CREATE INDEX "idx_governance_referendum_referendum_index_98d90a26" ON "governance_referendum" ("referendum_index")`)
    }
}
