module.exports = class Data1747335226262 {
    name = 'Data1747335226262'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_7921fb23203316a5371f2be477"`)
        await db.query(`DROP INDEX "public"."IDX_2b2b641fd385385ba996c66098"`)
        await db.query(`ALTER TABLE "token" ADD "name" text`)
        await db.query(`ALTER TABLE "collection" ADD "name" text`)
        await db.query(`ALTER TABLE "account_token_event" ALTER COLUMN "collection_id" DROP DEFAULT`)
        await db.query(`DROP INDEX "public"."IDX_87fb00cfed5217b47de01f5856"`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "token_id"`)
        await db.query(`ALTER TABLE "account_token_event" ADD "token_id" text NOT NULL`)
        await db.query(`CREATE UNIQUE INDEX "IDX_6ec33d2f722e291d62b6218cf8" ON "token_account" ("account_id", "token_id") `)
        await db.query(`CREATE INDEX "IDX_dc9680c2bbb75483a58b9c4fc5" ON "token" ("name") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_346b8bae8b4955200cfd03f178" ON "collection_account" ("account_id", "collection_id") `)
        await db.query(`CREATE INDEX "IDX_926e7bdc3f52cd582078a379f1" ON "collection" ("name") `)
        await db.query(`CREATE INDEX "IDX_87fb00cfed5217b47de01f5856" ON "account_token_event" ("token_id") `)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_7921fb23203316a5371f2be477" ON "token_account" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_2b2b641fd385385ba996c66098" ON "collection_account" ("account_id") `)
        await db.query(`ALTER TABLE "token" DROP COLUMN "name"`)
        await db.query(`ALTER TABLE "collection" DROP COLUMN "name"`)
        await db.query(`ALTER TABLE "account_token_event" ALTER COLUMN "collection_id" SET DEFAULT '0'`)
        await db.query(`CREATE INDEX "IDX_87fb00cfed5217b47de01f5856" ON "account_token_event" ("token_id") `)
        await db.query(`ALTER TABLE "account_token_event" ADD "token_id" character varying NOT NULL`)
        await db.query(`ALTER TABLE "account_token_event" DROP COLUMN "token_id"`)
        await db.query(`DROP INDEX "public"."IDX_6ec33d2f722e291d62b6218cf8"`)
        await db.query(`DROP INDEX "public"."IDX_dc9680c2bbb75483a58b9c4fc5"`)
        await db.query(`DROP INDEX "public"."IDX_346b8bae8b4955200cfd03f178"`)
        await db.query(`DROP INDEX "public"."IDX_926e7bdc3f52cd582078a379f1"`)
        await db.query(`DROP INDEX "public"."IDX_87fb00cfed5217b47de01f5856"`)
    }
}
