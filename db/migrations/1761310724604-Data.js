module.exports = class Data1761310724604 {
    name = 'Data1761310724604'

    async up(db) {
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968"`)
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE CASCADE ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968"`)
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }
}
