module.exports = class Data1779358893784 {
    name = 'Data1779358893784'

    async up(db) {
        await db.query(`ALTER TABLE "collection" ALTER COLUMN "socials" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "collection" ALTER COLUMN "socials" SET NOT NULL`)
    }
}
