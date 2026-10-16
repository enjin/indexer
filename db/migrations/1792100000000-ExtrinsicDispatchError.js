module.exports = class ExtrinsicDispatchError1792100000000 {
    name = 'ExtrinsicDispatchError1792100000000'

    async up(db) {
        await db.query(`ALTER TABLE "extrinsic" ADD "dispatch_error" text`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "extrinsic" DROP COLUMN "dispatch_error"`)
    }
}
