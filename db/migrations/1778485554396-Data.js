module.exports = class Data1778485554396 {
    name = 'Data1778485554396'

    async up(db) {
        await db.query(`ALTER TABLE "extrinsic" ADD "block_id" character varying`)
        await db.query(`CREATE INDEX "IDX_a3b99daba1259dab0dd040d4f7" ON "extrinsic" ("block_id") `)
        await db.query(`ALTER TABLE "extrinsic" ADD CONSTRAINT "FK_a3b99daba1259dab0dd040d4f74" FOREIGN KEY ("block_id") REFERENCES "chain_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "extrinsic" DROP CONSTRAINT "FK_a3b99daba1259dab0dd040d4f74"`)
        await db.query(`DROP INDEX "public"."IDX_a3b99daba1259dab0dd040d4f7"`)
        await db.query(`ALTER TABLE "extrinsic" DROP COLUMN "block_id"`)
    }
}
