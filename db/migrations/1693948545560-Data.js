module.exports = class Data1693948545560 {
    name = 'Data1693948545560'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_24528e3c38f12c28bf002e9c18"`)
        await db.query(`CREATE TABLE "claim_request" ("id" character varying NOT NULL, "account" jsonb NOT NULL, "hash" text NOT NULL, "amount_claimable" numeric NOT NULL, "amount_burned" numeric NOT NULL, "is_efi_token" boolean NOT NULL, "extrinsic_index" integer, "is_claimed" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "created_block" integer NOT NULL, CONSTRAINT "PK_2bc42faa6b816885c7ab31b2ccf" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "claim_details" ("id" character varying NOT NULL, "exchange_rate" integer, "delay_claims_period" integer, "total_unclaimed_amount" numeric NOT NULL, CONSTRAINT "PK_6ad8d63cb66db1408935cfb4e54" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "claim" DROP COLUMN "block_number"`)
        await db.query(`ALTER TABLE "claim" DROP COLUMN "block_hash"`)
        await db.query(`ALTER TABLE "claim" DROP COLUMN "extrinsic_id"`)
        await db.query(`ALTER TABLE "claim" DROP COLUMN "extrinsic_hash"`)
        await db.query(`ALTER TABLE "claim" ADD "efi_sum" numeric NOT NULL`)
        await db.query(`ALTER TABLE "claim" ADD "enj_sum" numeric NOT NULL`)
        await db.query(`ALTER TABLE "claim" ADD "count" integer NOT NULL`)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_24528e3c38f12c28bf002e9c18" ON "claim" ("block_number") `)
        await db.query(`DROP TABLE "claim_request"`)
        await db.query(`DROP TABLE "claim_details"`)
        await db.query(`ALTER TABLE "claim" ADD "block_number" integer NOT NULL`)
        await db.query(`ALTER TABLE "claim" ADD "block_hash" text NOT NULL`)
        await db.query(`ALTER TABLE "claim" ADD "extrinsic_id" text NOT NULL`)
        await db.query(`ALTER TABLE "claim" ADD "extrinsic_hash" text NOT NULL`)
        await db.query(`ALTER TABLE "claim" DROP COLUMN "efi_sum"`)
        await db.query(`ALTER TABLE "claim" DROP COLUMN "enj_sum"`)
        await db.query(`ALTER TABLE "claim" DROP COLUMN "count"`)
    }
}
