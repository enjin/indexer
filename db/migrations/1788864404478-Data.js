module.exports = class Data1788864404478 {
    name = 'Data1788864404478'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "ephemeral_expiration" numeric`)
        await db.query(
            `CREATE INDEX "IDX_ed5b78f4a358afc6f0f4e09282" ON "token" ("ephemeral_expiration")`
        )
    }

    async down(db) {
        await db.query(`DROP INDEX "public"."IDX_ed5b78f4a358afc6f0f4e09282"`)
        await db.query(`ALTER TABLE "token" DROP COLUMN "ephemeral_expiration"`)
    }
}
