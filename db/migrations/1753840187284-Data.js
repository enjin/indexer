module.exports = class Data1753840187284 {
    name = 'Data1753840187284'

    async up(db) {
        await db.query(`CREATE TABLE "early_bird_mint_event" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "reward" numeric NOT NULL, "pool_id" character varying, "pool_member_id" character varying, "era_id" character varying, "event_id" character varying, CONSTRAINT "PK_5132948132ed25bae05b683fbea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_8321393237231070b0e4874ad5" ON "early_bird_mint_event" ("pool_id") `)
        await db.query(`CREATE INDEX "IDX_35447d43cb8c1a07c06daad070" ON "early_bird_mint_event" ("pool_member_id") `)
        await db.query(`CREATE INDEX "IDX_2ff597849d505832bf6ae9ad1e" ON "early_bird_mint_event" ("era_id") `)
        await db.query(`CREATE INDEX "IDX_0bae64a33ee523cd866fe4db48" ON "early_bird_mint_event" ("event_id") `)
        await db.query(`ALTER TABLE "early_bird_mint_event" ADD CONSTRAINT "FK_8321393237231070b0e4874ad5c" FOREIGN KEY ("pool_id") REFERENCES "nomination_pool"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "early_bird_mint_event" ADD CONSTRAINT "FK_35447d43cb8c1a07c06daad0703" FOREIGN KEY ("pool_member_id") REFERENCES "pool_member"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "early_bird_mint_event" ADD CONSTRAINT "FK_2ff597849d505832bf6ae9ad1e9" FOREIGN KEY ("era_id") REFERENCES "era"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "early_bird_mint_event" ADD CONSTRAINT "FK_0bae64a33ee523cd866fe4db480" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "early_bird_mint_event"`)
        await db.query(`DROP INDEX "public"."IDX_8321393237231070b0e4874ad5"`)
        await db.query(`DROP INDEX "public"."IDX_35447d43cb8c1a07c06daad070"`)
        await db.query(`DROP INDEX "public"."IDX_2ff597849d505832bf6ae9ad1e"`)
        await db.query(`DROP INDEX "public"."IDX_0bae64a33ee523cd866fe4db48"`)
        await db.query(`ALTER TABLE "early_bird_mint_event" DROP CONSTRAINT "FK_8321393237231070b0e4874ad5c"`)
        await db.query(`ALTER TABLE "early_bird_mint_event" DROP CONSTRAINT "FK_35447d43cb8c1a07c06daad0703"`)
        await db.query(`ALTER TABLE "early_bird_mint_event" DROP CONSTRAINT "FK_2ff597849d505832bf6ae9ad1e9"`)
        await db.query(`ALTER TABLE "early_bird_mint_event" DROP CONSTRAINT "FK_0bae64a33ee523cd866fe4db480"`)
    }
}
