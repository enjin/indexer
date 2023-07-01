module.exports = class Data1688225573137 {
    name = 'Data1688225573137'

    async up(db) {
        await db.query(`ALTER TABLE "account" ADD "username" text`)
        await db.query(`ALTER TABLE "account" ADD "verified_at" TIMESTAMP WITH TIME ZONE`)
        await db.query(`ALTER TABLE "account" ADD "image" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "account" DROP COLUMN "username"`)
        await db.query(`ALTER TABLE "account" DROP COLUMN "verified_at"`)
        await db.query(`ALTER TABLE "account" DROP COLUMN "image"`)
    }
}
