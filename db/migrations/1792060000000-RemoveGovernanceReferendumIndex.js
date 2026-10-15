module.exports = class RemoveGovernanceReferendumIndex1792060000000 {
    name = 'RemoveGovernanceReferendumIndex1792060000000'

    async up(db) {
        await db.query(`DROP INDEX "idx_governance_referendum_referendum_index_98d90a26"`)
        await db.query(`ALTER TABLE "governance_referendum" DROP COLUMN "referendum_index"`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "governance_referendum" ADD "referendum_index" integer`)
        await db.query(`
            UPDATE "governance_referendum"
            SET "referendum_index" = (
                CASE WHEN "pallet" = 'Referenda' THEN "id" ELSE split_part("id", ':', 2) END
            )::integer
        `)
        await db.query(`ALTER TABLE "governance_referendum" ALTER COLUMN "referendum_index" SET NOT NULL`)
        await db.query(`
            CREATE INDEX "idx_governance_referendum_referendum_index_98d90a26"
            ON "governance_referendum" ("referendum_index")
        `)
    }
}
