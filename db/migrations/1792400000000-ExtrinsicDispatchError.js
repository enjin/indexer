module.exports = class ExtrinsicDispatchError1792400000000 {
    name = 'ExtrinsicDispatchError1792400000000'

    async up(db) {
        await db.query(`ALTER TABLE "extrinsic" ADD "dispatch_error" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "extrinsic" DROP COLUMN "dispatch_error"`)
    }
}
