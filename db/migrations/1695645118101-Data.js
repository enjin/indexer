module.exports = class Data1695645118101 {
    name = 'Data1695645118101'

    async up(db) {
        await db.query(`CREATE TABLE "fuel_tank_user_accounts" ("id" character varying NOT NULL, "tank_deposit" numeric NOT NULL, "user_deposit" numeric NOT NULL, "tank_id" character varying, "account_id" character varying, CONSTRAINT "PK_081ff92d0e705469802bc1a722f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_62f346dd95e06802105a27c5b5" ON "fuel_tank_user_accounts" ("tank_id") `)
        await db.query(`CREATE INDEX "IDX_bde2b34a13d724575c0d561371" ON "fuel_tank_user_accounts" ("account_id") `)
        await db.query(`CREATE TABLE "fuel_tank_account_rules" ("id" character varying NOT NULL, "rule" jsonb NOT NULL, "tank_id" character varying, CONSTRAINT "PK_b4993a9c290c0d3681a5f0f5633" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f85fafe4773fad2663995dd889" ON "fuel_tank_account_rules" ("tank_id") `)
        await db.query(`CREATE TABLE "fuel_tank" ("id" character varying NOT NULL, "name" text NOT NULL, "provides_deposit" boolean NOT NULL, "is_frozen" boolean NOT NULL, "account_count" integer NOT NULL, "user_account_management" jsonb, "tank_account_id" character varying, "owner_id" character varying, CONSTRAINT "PK_00990856c313237086f9389784b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5a60f57b95f697e2ac75964762" ON "fuel_tank" ("tank_account_id") `)
        await db.query(`CREATE INDEX "IDX_3d8d58541e0377421fefa87b4e" ON "fuel_tank" ("owner_id") `)
        await db.query(`CREATE TABLE "fuel_tank_rule_set" ("id" character varying NOT NULL, "index" integer NOT NULL, "is_frozen" boolean NOT NULL, "whitelisted_callers" text array, "whitelisted_collections" text array, "max_fuel_burn_per_transaction" jsonb, "user_fuel_budget" jsonb, "tank_fuel_budget" jsonb, "require_token" jsonb, "permitted_calls" text array, "tank_id" character varying, CONSTRAINT "PK_6f08fe8ff628100f82f54f3744a" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2af9817108e7de3cec526c836d" ON "fuel_tank_rule_set" ("tank_id") `)
        await db.query(`CREATE TABLE "permitted_extrinsics" ("id" character varying NOT NULL, "pallet_name" text, "extrinsic_name" text, "rule_set_id" character varying, CONSTRAINT "PK_5d473dd868ed25e8453852ec101" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c12039a3ab3d643d126afb709d" ON "permitted_extrinsics" ("rule_set_id") `)
        await db.query(`ALTER TABLE "fuel_tank_user_accounts" ADD CONSTRAINT "FK_62f346dd95e06802105a27c5b59" FOREIGN KEY ("tank_id") REFERENCES "fuel_tank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "fuel_tank_user_accounts" ADD CONSTRAINT "FK_bde2b34a13d724575c0d561371e" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "fuel_tank_account_rules" ADD CONSTRAINT "FK_f85fafe4773fad2663995dd889f" FOREIGN KEY ("tank_id") REFERENCES "fuel_tank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "fuel_tank" ADD CONSTRAINT "FK_5a60f57b95f697e2ac759647627" FOREIGN KEY ("tank_account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "fuel_tank" ADD CONSTRAINT "FK_3d8d58541e0377421fefa87b4e5" FOREIGN KEY ("owner_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "fuel_tank_rule_set" ADD CONSTRAINT "FK_2af9817108e7de3cec526c836d0" FOREIGN KEY ("tank_id") REFERENCES "fuel_tank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "permitted_extrinsics" ADD CONSTRAINT "FK_c12039a3ab3d643d126afb709df" FOREIGN KEY ("rule_set_id") REFERENCES "fuel_tank_rule_set"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "fuel_tank_user_accounts"`)
        await db.query(`DROP INDEX "public"."IDX_62f346dd95e06802105a27c5b5"`)
        await db.query(`DROP INDEX "public"."IDX_bde2b34a13d724575c0d561371"`)
        await db.query(`DROP TABLE "fuel_tank_account_rules"`)
        await db.query(`DROP INDEX "public"."IDX_f85fafe4773fad2663995dd889"`)
        await db.query(`DROP TABLE "fuel_tank"`)
        await db.query(`DROP INDEX "public"."IDX_5a60f57b95f697e2ac75964762"`)
        await db.query(`DROP INDEX "public"."IDX_3d8d58541e0377421fefa87b4e"`)
        await db.query(`DROP TABLE "fuel_tank_rule_set"`)
        await db.query(`DROP INDEX "public"."IDX_2af9817108e7de3cec526c836d"`)
        await db.query(`DROP TABLE "permitted_extrinsics"`)
        await db.query(`DROP INDEX "public"."IDX_c12039a3ab3d643d126afb709d"`)
        await db.query(`ALTER TABLE "fuel_tank_user_accounts" DROP CONSTRAINT "FK_62f346dd95e06802105a27c5b59"`)
        await db.query(`ALTER TABLE "fuel_tank_user_accounts" DROP CONSTRAINT "FK_bde2b34a13d724575c0d561371e"`)
        await db.query(`ALTER TABLE "fuel_tank_account_rules" DROP CONSTRAINT "FK_f85fafe4773fad2663995dd889f"`)
        await db.query(`ALTER TABLE "fuel_tank" DROP CONSTRAINT "FK_5a60f57b95f697e2ac759647627"`)
        await db.query(`ALTER TABLE "fuel_tank" DROP CONSTRAINT "FK_3d8d58541e0377421fefa87b4e5"`)
        await db.query(`ALTER TABLE "fuel_tank_rule_set" DROP CONSTRAINT "FK_2af9817108e7de3cec526c836d0"`)
        await db.query(`ALTER TABLE "permitted_extrinsics" DROP CONSTRAINT "FK_c12039a3ab3d643d126afb709df"`)
    }
}
