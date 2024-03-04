module.exports = class Data1709204458056 {
    name = 'Data1709204458056'

    async up(db) {
        await db.query(`ALTER TABLE "account" ADD "verified" boolean NOT NULL`)
        await db.query(`CREATE INDEX "IDX_9bfdaf06643c9b6d75a4292582" ON "token_account" ("created_at") `)
        await db.query(`CREATE INDEX "IDX_73e1ad9383189937588f24d128" ON "listing" ("created_at") `)
        await db.query(`CREATE INDEX "IDX_95d4beb28c1702ce48aa7f55e3" ON "token" ("created_at") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account" DROP COLUMN "verified"`)
        await db.query(`DROP INDEX "public"."IDX_9bfdaf06643c9b6d75a4292582"`)
        await db.query(`DROP INDEX "public"."IDX_73e1ad9383189937588f24d128"`)
        await db.query(`DROP INDEX "public"."IDX_95d4beb28c1702ce48aa7f55e3"`)
    }
}
