module.exports = class Data1700133046667 {
    name = 'Data1700133046667'

    async up(db) {
        await db.query(`CREATE TABLE "multi_tokens_claims" ("id" character varying NOT NULL, "eth_account" text NOT NULL, "completed" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "account_id" character varying, CONSTRAINT "PK_f074c8e8d71ea5023df43762615" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c8aaf94cba10437b7503292814" ON "multi_tokens_claims" ("account_id") `)
        await db.query(`ALTER TABLE "multi_tokens_claims" ADD CONSTRAINT "FK_c8aaf94cba10437b75032928149" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "multi_tokens_claims"`)
        await db.query(`DROP INDEX "public"."IDX_c8aaf94cba10437b7503292814"`)
        await db.query(`ALTER TABLE "multi_tokens_claims" DROP CONSTRAINT "FK_c8aaf94cba10437b75032928149"`)
    }
}