module.exports = class Data1759141332788 {
    name = 'Data1759141332788'

    async up(db) {
        await db.query(`ALTER TABLE "token_group_token" ADD "position" integer`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token_group_token" DROP COLUMN "position"`)
    }
}
