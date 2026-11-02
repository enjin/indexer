module.exports = class EventCreatedAt1793364077335 {
    name = 'EventCreatedAt1793364077335'

    async up(db) {
        await db.query(`ALTER TABLE "event" ADD "created_at" TIMESTAMP WITH TIME ZONE`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "event" DROP COLUMN "created_at"`)
    }
}
