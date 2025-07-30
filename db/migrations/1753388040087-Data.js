module.exports = class Data1753388040087 {
    name = 'Data1753388040087'

    async up(db) {
        // Add columns to pool_member_rewards as nullable first
        await db.query(`ALTER TABLE "pool_member_rewards" ADD "accumulated_rewards" numeric`)
        await db.query(`ALTER TABLE "pool_member_rewards" ADD "rewards" numeric`)

        // Update existing records with default values
        await db.query(`UPDATE "pool_member_rewards" SET "accumulated_rewards" = 0 WHERE "accumulated_rewards" IS NULL`)
        await db.query(`UPDATE "pool_member_rewards" SET "rewards" = 0 WHERE "rewards" IS NULL`)

        // Make columns non-nullable
        await db.query(`ALTER TABLE "pool_member_rewards" ALTER COLUMN "accumulated_rewards" SET NOT NULL`)
        await db.query(`ALTER TABLE "pool_member_rewards" ALTER COLUMN "rewards" SET NOT NULL`)

        // Create early_bird_mint_event table with proper schema (without event foreign key)
        await db.query(`CREATE TABLE "early_bird_mint_event" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "reward" numeric NOT NULL, "event_id" text NOT NULL, "extrinsic_id" text, "pool_id" character varying, "pool_member_id" character varying, "era_id" character varying, CONSTRAINT "PK_5132948132ed25bae05b683fbea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_8321393237231070b0e4874ad5" ON "early_bird_mint_event" ("pool_id") `)
        await db.query(`CREATE INDEX "IDX_35447d43cb8c1a07c06daad070" ON "early_bird_mint_event" ("pool_member_id") `)
        await db.query(`CREATE INDEX "IDX_2ff597849d505832bf6ae9ad1e" ON "early_bird_mint_event" ("era_id") `)
        await db.query(`ALTER TABLE "early_bird_mint_event" ADD CONSTRAINT "FK_8321393237231070b0e4874ad5c" FOREIGN KEY ("pool_id") REFERENCES "nomination_pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "early_bird_mint_event" ADD CONSTRAINT "FK_35447d43cb8c1a07c06daad0703" FOREIGN KEY ("pool_member_id") REFERENCES "pool_member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "early_bird_mint_event" ADD CONSTRAINT "FK_2ff597849d505832bf6ae9ad1e9" FOREIGN KEY ("era_id") REFERENCES "era"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        // Drop early_bird_mint_event table
        await db.query(`ALTER TABLE "early_bird_mint_event" DROP CONSTRAINT "FK_8321393237231070b0e4874ad5c"`)
        await db.query(`ALTER TABLE "early_bird_mint_event" DROP CONSTRAINT "FK_35447d43cb8c1a07c06daad0703"`)
        await db.query(`ALTER TABLE "early_bird_mint_event" DROP CONSTRAINT "FK_2ff597849d505832bf6ae9ad1e9"`)
        await db.query(`DROP INDEX "public"."IDX_8321393237231070b0e4874ad5"`)
        await db.query(`DROP INDEX "public"."IDX_35447d43cb8c1a07c06daad070"`)
        await db.query(`DROP INDEX "public"."IDX_2ff597849d505832bf6ae9ad1e"`)
        await db.query(`DROP TABLE "early_bird_mint_event"`)

        // Drop pool_member_rewards columns
        await db.query(`ALTER TABLE "pool_member_rewards" DROP COLUMN "accumulated_rewards"`)
        await db.query(`ALTER TABLE "pool_member_rewards" DROP COLUMN "rewards"`)
    }
}
