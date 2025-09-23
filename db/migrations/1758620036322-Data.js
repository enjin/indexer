module.exports = class Data1758620036322 {
    name = 'Data1758620036322'

    async up(db) {
        await db.query(`ALTER TABLE "token_group" ADD "created_at" TIMESTAMP WITH TIME ZONE NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token_group" DROP COLUMN "created_at"`)
    }
}
