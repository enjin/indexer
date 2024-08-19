module.exports = class Data1724062751552 {
    name = 'Data1724062751552'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "updated_at" TIMESTAMP WITH TIME ZONE`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "updated_at"`)
    }
}
