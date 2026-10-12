module.exports = class GovernanceIndexing1791800000000 {
    name = 'GovernanceIndexing1791800000000'

    async up(db) {
        await db.query(`CREATE TABLE "governance_referendum" (
            "id" character varying PRIMARY KEY, "pallet" text NOT NULL, "referendum_index" integer NOT NULL,
            "track" integer, "status" text NOT NULL, "proposal" jsonb,
            "proposal_preimage_hash" text, "proposal_preimage_status" text, "proposal_preimage" text,
            "metadata_hash" text, "tally_ayes" numeric, "tally_nays" numeric, "tally_support" numeric,
            "submission_deposit" jsonb, "decision_deposit" jsonb, "submitted_at_block" integer,
            "updated_at_block" integer NOT NULL
        )`)
        await db.query(`CREATE INDEX "idx_governance_referendum_pallet_b6b95dfb" ON "governance_referendum" ("pallet")`)
        await db.query(`CREATE INDEX "idx_governance_referendum_referendum_index_98d90a26" ON "governance_referendum" ("referendum_index")`)
        await db.query(`CREATE INDEX "idx_governance_referendum_status_6611f23d" ON "governance_referendum" ("status")`)
        await db.query(`CREATE INDEX "idx_governance_referendum_proposal_preimage_hash_74b0a0b5" ON "governance_referendum" ("proposal_preimage_hash")`)
        await db.query(`CREATE INDEX "idx_governance_referendum_updated_at_block_34acf9a1" ON "governance_referendum" ("updated_at_block")`)

        await db.query(`CREATE TABLE "governance_activity" (
            "id" character varying PRIMARY KEY, "pallet" text NOT NULL, "name" text NOT NULL,
            "referendum_id" text, "account_id" text, "block_number" integer NOT NULL,
            "extrinsic_id" text, "data" jsonb
        )`)
        await db.query(`CREATE INDEX "idx_governance_activity_pallet_a0349c17" ON "governance_activity" ("pallet")`)
        await db.query(`CREATE INDEX "idx_governance_activity_name_1eb20180" ON "governance_activity" ("name")`)
        await db.query(`CREATE INDEX "idx_governance_activity_referendum_id_50de1e54" ON "governance_activity" ("referendum_id")`)
        await db.query(`CREATE INDEX "idx_governance_activity_account_id_11ada085" ON "governance_activity" ("account_id")`)
        await db.query(`CREATE INDEX "idx_governance_activity_block_number_c4280d4d" ON "governance_activity" ("block_number")`)

        await db.query(`CREATE TABLE "governance_vote" (
            "id" character varying PRIMARY KEY, "referendum_id" text NOT NULL, "account_id" text NOT NULL,
            "currency" text, "vote" jsonb, "active" boolean NOT NULL, "updated_at_block" integer NOT NULL
        )`)
        await db.query(`CREATE INDEX "idx_governance_vote_referendum_id_f13fd6ff" ON "governance_vote" ("referendum_id")`)
        await db.query(`CREATE INDEX "idx_governance_vote_account_id_f634c228" ON "governance_vote" ("account_id")`)
        await db.query(`CREATE INDEX "idx_governance_vote_updated_at_block_bbf9aa41" ON "governance_vote" ("updated_at_block")`)

        await db.query(`CREATE TABLE "governance_delegation" (
            "id" character varying PRIMARY KEY, "account_id" text NOT NULL, "track" integer,
            "currency" text, "target" text, "conviction" text, "balance" numeric,
            "active" boolean NOT NULL, "updated_at_block" integer NOT NULL
        )`)
        await db.query(`CREATE INDEX "idx_governance_delegation_account_id_298dcb0b" ON "governance_delegation" ("account_id")`)
        await db.query(`CREATE INDEX "idx_governance_delegation_updated_at_block_e3469896" ON "governance_delegation" ("updated_at_block")`)

        await db.query(`CREATE TABLE "governance_fellowship_member" (
            "id" character varying PRIMARY KEY, "rank" integer, "active" boolean NOT NULL,
            "updated_at_block" integer NOT NULL
        )`)
        await db.query(`CREATE INDEX "idx_governance_fellowship_member_updated_at_block_428be4dd" ON "governance_fellowship_member" ("updated_at_block")`)

        await db.query(`CREATE TABLE "governance_treasury_item" (
            "id" character varying PRIMARY KEY, "kind" text NOT NULL, "item_index" integer NOT NULL,
            "status" text NOT NULL, "details" jsonb, "updated_at_block" integer NOT NULL
        )`)
        await db.query(`CREATE INDEX "idx_governance_treasury_item_kind_33195396" ON "governance_treasury_item" ("kind")`)
        await db.query(`CREATE INDEX "idx_governance_treasury_item_item_index_913aac79" ON "governance_treasury_item" ("item_index")`)
        await db.query(`CREATE INDEX "idx_governance_treasury_item_status_f2c85ced" ON "governance_treasury_item" ("status")`)
        await db.query(`CREATE INDEX "idx_governance_treasury_item_updated_at_block_fff0e418" ON "governance_treasury_item" ("updated_at_block")`)

        await db.query(`CREATE TABLE "governance_whitelisted_call" (
            "id" character varying PRIMARY KEY, "active" boolean NOT NULL,
            "last_dispatched_block" integer, "updated_at_block" integer NOT NULL
        )`)
        await db.query(`CREATE INDEX "idx_governance_whitelisted_call_updated_at_block_0ae98db8" ON "governance_whitelisted_call" ("updated_at_block")`)
    }

    async down(db) {
        await db.query(`DROP TABLE "governance_whitelisted_call"`)
        await db.query(`DROP TABLE "governance_treasury_item"`)
        await db.query(`DROP TABLE "governance_fellowship_member"`)
        await db.query(`DROP TABLE "governance_delegation"`)
        await db.query(`DROP TABLE "governance_vote"`)
        await db.query(`DROP TABLE "governance_activity"`)
        await db.query(`DROP TABLE "governance_referendum"`)
    }
}
