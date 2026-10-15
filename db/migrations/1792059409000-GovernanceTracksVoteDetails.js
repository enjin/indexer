module.exports = class GovernanceTracksVoteDetails1792059409000 {
    name = 'GovernanceTracksVoteDetails1792059409000'

    async up(db) {
        await db.query(`CREATE TABLE "governance_track" (
            "id" character varying PRIMARY KEY, "pallet" text NOT NULL, "track_index" integer NOT NULL,
            "name" text NOT NULL, "max_deciding" integer NOT NULL, "decision_deposit" numeric NOT NULL,
            "prepare_period" integer NOT NULL, "decision_period" integer NOT NULL,
            "confirm_period" integer NOT NULL, "min_enactment_period" integer NOT NULL,
            "min_approval" jsonb NOT NULL, "min_support" jsonb NOT NULL,
            "updated_at_block" integer NOT NULL
        )`)
        await db.query(`CREATE INDEX "idx_governance_track_pallet_3f2c1f6f" ON "governance_track" ("pallet")`)
        await db.query(`CREATE INDEX "idx_governance_track_track_index_f421067b" ON "governance_track" ("track_index")`)
        await db.query(`CREATE INDEX "idx_governance_track_updated_at_block_296f22aa" ON "governance_track" ("updated_at_block")`)

        await db.query(`ALTER TABLE "governance_referendum" ADD "governance_track_id" character varying`)
        await db.query(`ALTER TABLE "governance_referendum" ADD "ended_at_block" integer`)
        await db.query(`
            CREATE INDEX "idx_governance_referendum_governance_track_17a7a2ec"
            ON "governance_referendum" ("governance_track_id")
        `)
        await db.query(`
            ALTER TABLE "governance_referendum"
            ADD CONSTRAINT "FK_governance_referendum_governance_track"
            FOREIGN KEY ("governance_track_id") REFERENCES "governance_track"("id")
            ON DELETE NO ACTION ON UPDATE NO ACTION
        `)
        await db.query(`ALTER TABLE "governance_vote" ADD "vote_modifier" integer`)
        await db.query(`ALTER TABLE "governance_vote" ADD "unlockable_at_block" integer`)

        // Referenda and FellowshipReferenda have separate counters. Only the former gets a bare ID.
        await db.query(`
            UPDATE "governance_referendum"
            SET "id" = "referendum_index"::text
            WHERE "pallet" = 'Referenda' AND "id" LIKE 'Referenda:%'
        `)
        await db.query(`
            UPDATE "governance_vote"
            SET "referendum_id" = split_part("referendum_id", ':', 2)
            WHERE "referendum_id" LIKE 'Referenda:%'
        `)
        await db.query(`
            UPDATE "governance_activity"
            SET "referendum_id" = split_part("referendum_id", ':', 2)
            WHERE "referendum_id" LIKE 'Referenda:%'
        `)
        await db.query(`
            UPDATE "event" AS event
            SET "data" = jsonb_set(event."data", '{referendumId}',
                to_jsonb(split_part(event."data"->>'referendumId', ':', 2)))
            FROM "governance_activity" AS activity
            WHERE event."id" = activity."id"
              AND event."data"->>'isTypeOf' = 'GovernanceEventData'
              AND event."data"->>'referendumId' LIKE 'Referenda:%'
        `)
        await db.query(`
            UPDATE "governance_vote"
            SET "vote_modifier" = ("vote"->>'vote')::integer & 127
            WHERE "vote"->>'__kind' = 'Standard'
              AND "vote"->>'vote' ~ '^[0-9]{1,3}$'
              AND ("vote"->>'vote')::integer BETWEEN 0 AND 255
              AND (("vote"->>'vote')::integer & 127) BETWEEN 0 AND 6
        `)
    }

    async down(db) {
        await db.query(`
            UPDATE "governance_referendum"
            SET "id" = 'Referenda:' || "referendum_index"::text
            WHERE "pallet" = 'Referenda' AND "id" = "referendum_index"::text
        `)
        await db.query(`
            UPDATE "governance_vote"
            SET "referendum_id" = 'Referenda:' || "referendum_id"
            WHERE "referendum_id" ~ '^[0-9]+$'
        `)
        await db.query(`
            UPDATE "governance_activity"
            SET "referendum_id" = 'Referenda:' || "referendum_id"
            WHERE "referendum_id" ~ '^[0-9]+$'
        `)
        await db.query(`
            UPDATE "event" AS event
            SET "data" = jsonb_set(event."data", '{referendumId}',
                to_jsonb('Referenda:' || (event."data"->>'referendumId')))
            FROM "governance_activity" AS activity
            WHERE event."id" = activity."id"
              AND event."data"->>'isTypeOf' = 'GovernanceEventData'
              AND event."data"->>'referendumId' ~ '^[0-9]+$'
        `)
        await db.query(`ALTER TABLE "governance_vote" DROP COLUMN "unlockable_at_block"`)
        await db.query(`ALTER TABLE "governance_vote" DROP COLUMN "vote_modifier"`)
        await db.query(`ALTER TABLE "governance_referendum" DROP CONSTRAINT "FK_governance_referendum_governance_track"`)
        await db.query(`DROP INDEX "idx_governance_referendum_governance_track_17a7a2ec"`)
        await db.query(`ALTER TABLE "governance_referendum" DROP COLUMN "ended_at_block"`)
        await db.query(`ALTER TABLE "governance_referendum" DROP COLUMN "governance_track_id"`)
        await db.query(`DROP TABLE "governance_track"`)
    }
}
