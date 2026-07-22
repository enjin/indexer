module.exports = class Data1784714541132 {
    name = 'Data1784714541132'

    async up(db) {
        await db.query(`ALTER TABLE "nomination_pool" ALTER COLUMN "bonus_cycle" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "nomination_pool" ALTER COLUMN "bonus_cycle" SET NOT NULL`)
    }
}
