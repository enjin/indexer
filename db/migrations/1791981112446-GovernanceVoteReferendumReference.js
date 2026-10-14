module.exports = class GovernanceVoteReferendumReference1791981112446 {
    name = 'GovernanceVoteReferendumReference1791981112446'

    async up(db) {
        await db.query(`ALTER TABLE "governance_vote" ADD "referendum_record_id" character varying`)
        await db.query(`
            UPDATE "governance_vote" AS vote
            SET "referendum_record_id" = referendum."id"
            FROM "governance_referendum" AS referendum
            WHERE vote."referendum_id" = referendum."id"
        `)
        await db.query(`CREATE INDEX "idx_governance_vote_referendum_record_04028020" ON "governance_vote" ("referendum_record_id")`)
        await db.query(`
            ALTER TABLE "governance_vote"
            ADD CONSTRAINT "FK_governance_vote_referendum_record"
            FOREIGN KEY ("referendum_record_id") REFERENCES "governance_referendum"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "governance_vote" DROP CONSTRAINT "FK_governance_vote_referendum_record"`)
        await db.query(`DROP INDEX "idx_governance_vote_referendum_record_04028020"`)
        await db.query(`ALTER TABLE "governance_vote" DROP COLUMN "referendum_record_id"`)
    }
}
