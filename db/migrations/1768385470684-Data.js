module.exports = class Data1768385470684 {
    name = 'Data1768385470684'

    async up(db) {
        await db.query(`ALTER TABLE "token_group" ADD "metadata" jsonb`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token_group" DROP COLUMN "metadata"`)
    }
}
