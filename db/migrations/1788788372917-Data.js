module.exports = class Data1788788372917 {
    name = 'Data1788788372917'

    async up(db) {
        await db.query(`ALTER TABLE "attribute" ADD "is_frozen" boolean NOT NULL DEFAULT false`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "attribute" DROP COLUMN "is_frozen"`)
    }
}
