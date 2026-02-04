module.exports = class Data1770234834693 {
    name = 'Data1770234834693'

    async up(db) {
        await db.query(`ALTER TABLE "user_infusion" DROP COLUMN "created_at"`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "user_infusion" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL`)
    }
}
