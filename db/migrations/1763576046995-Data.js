module.exports = class Data1763576046995 {
    name = 'Data1763576046995'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "best_listing_price" numeric`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "best_listing_price"`)
    }
}
