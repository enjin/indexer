module.exports = class Data1772543442948 {
    name = 'Data1772543442948'

    async up(db) {
        await db.query(`ALTER TABLE "trait" ADD "display_type" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "trait" DROP COLUMN "display_type"`)
    }
}
