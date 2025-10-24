module.exports = class Data1761310724604 {
    name = 'Data1761310724604'

    async up(db) {
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968"`)
        await db.query(`ALTER TABLE "token_rarity" DROP CONSTRAINT "FK_a708c8b728c92f895762b5d0278"`)
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE CASCADE ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_rarity" ADD CONSTRAINT "FK_a708c8b728c92f895762b5d0278" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE CASCADE ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968"`)
        await db.query(`ALTER TABLE "token_rarity" DROP CONSTRAINT "FK_a708c8b728c92f895762b5d0278"`)
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_rarity" ADD CONSTRAINT "FK_a708c8b728c92f895762b5d0278" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }
}
