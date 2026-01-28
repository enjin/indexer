module.exports = class Data1769522666260 {
    name = 'Data1769522666260'

    async up(db) {
        await db.query(`ALTER TABLE "trait" ADD "display_value" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "trait" DROP COLUMN "display_value"`)
    }
}
