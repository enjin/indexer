module.exports = class Data1740596837111 {
    name = 'Data1740596837111'

    async up(db) {
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968"`)
        await db.query(`ALTER TABLE "token_rarity" DROP CONSTRAINT "FK_a708c8b728c92f895762b5d0278"`)
        await db.query(`ALTER TABLE "token" ALTER COLUMN "account_deposit_count" DROP DEFAULT`)
        await db.query(`ALTER TABLE "token" ALTER COLUMN "anyone_can_infuse" DROP DEFAULT`)
        await db.query(`ALTER TABLE "token" ALTER COLUMN "infusion" DROP DEFAULT`)
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_rarity" ADD CONSTRAINT "FK_a708c8b728c92f895762b5d0278" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE CASCADE ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_rarity" ADD CONSTRAINT "FK_a708c8b728c92f895762b5d0278" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE CASCADE ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token" ALTER COLUMN "account_deposit_count" SET DEFAULT '0'`)
        await db.query(`ALTER TABLE "token" ALTER COLUMN "anyone_can_infuse" SET DEFAULT false`)
        await db.query(`ALTER TABLE "token" ALTER COLUMN "infusion" SET DEFAULT '0'`)
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968"`)
        await db.query(`ALTER TABLE "token_rarity" DROP CONSTRAINT "FK_a708c8b728c92f895762b5d0278"`)
    }
}
