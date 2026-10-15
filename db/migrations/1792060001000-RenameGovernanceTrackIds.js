module.exports = class RenameGovernanceTrackIds1792060001000 {
    name = 'RenameGovernanceTrackIds1792060001000'

    async up(db) {
        await db.query(`ALTER TABLE "governance_referendum" DROP CONSTRAINT "FK_governance_referendum_governance_track"`)
        await db.query(`
            ALTER TABLE "governance_referendum"
            ADD CONSTRAINT "FK_governance_referendum_governance_track"
            FOREIGN KEY ("governance_track_id") REFERENCES "governance_track"("id")
            ON DELETE NO ACTION ON UPDATE CASCADE
        `)
        await db.query(`
            UPDATE "governance_track"
            SET "id" = "track_index"::text || CASE "pallet"
                WHEN 'Referenda' THEN '-rnd'
                WHEN 'FellowshipReferenda' THEN '-frnd'
            END
            WHERE "pallet" IN ('Referenda', 'FellowshipReferenda')
              AND "id" = "pallet" || ':' || "track_index"::text
        `)
        await db.query(`ALTER TABLE "governance_referendum" DROP CONSTRAINT "FK_governance_referendum_governance_track"`)
        await db.query(`
            ALTER TABLE "governance_referendum"
            ADD CONSTRAINT "FK_governance_referendum_governance_track"
            FOREIGN KEY ("governance_track_id") REFERENCES "governance_track"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "governance_referendum" DROP CONSTRAINT "FK_governance_referendum_governance_track"`)
        await db.query(`
            ALTER TABLE "governance_referendum"
            ADD CONSTRAINT "FK_governance_referendum_governance_track"
            FOREIGN KEY ("governance_track_id") REFERENCES "governance_track"("id")
            ON DELETE NO ACTION ON UPDATE CASCADE
        `)
        await db.query(`
            UPDATE "governance_track"
            SET "id" = "pallet" || ':' || "track_index"::text
            WHERE ("pallet" = 'Referenda' AND "id" = "track_index"::text || '-rnd')
               OR ("pallet" = 'FellowshipReferenda' AND "id" = "track_index"::text || '-frnd')
        `)
        await db.query(`ALTER TABLE "governance_referendum" DROP CONSTRAINT "FK_governance_referendum_governance_track"`)
        await db.query(`
            ALTER TABLE "governance_referendum"
            ADD CONSTRAINT "FK_governance_referendum_governance_track"
            FOREIGN KEY ("governance_track_id") REFERENCES "governance_track"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
    }
}
