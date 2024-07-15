module.exports = class Data1720712181724 {
    name = 'Data1720712181724'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "native_metadata" jsonb`)
        await db.query(`ALTER TABLE "token" ADD "account_deposit_count" integer NOT NULL DEFAULT 0`)
        await db.query(`ALTER TABLE "token" ADD "anyone_can_infuse" boolean NOT NULL DEFAULT false`)
        await db.query(`ALTER TABLE "token" ADD "infusion" numeric NOT NULL DEFAULT 0`)
        await db.query(`ALTER TABLE "fuel_tank" ADD "coverage_policy" character varying(14)`)
        await db.query(`ALTER TABLE "fuel_tank_rule_set" ADD "require_signature" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "native_metadata"`)
        await db.query(`ALTER TABLE "token" DROP COLUMN "account_deposit_count"`)
        await db.query(`ALTER TABLE "token" DROP COLUMN "anyone_can_infuse"`)
        await db.query(`ALTER TABLE "token" DROP COLUMN "infusion"`)
        await db.query(`ALTER TABLE "fuel_tank" DROP COLUMN "coverage_policy"`)
        await db.query(`ALTER TABLE "fuel_tank_rule_set" DROP COLUMN "require_signature"`)
    }
}
