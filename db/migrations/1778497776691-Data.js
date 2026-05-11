module.exports = class Data1778497776691 {
    name = 'Data1778497776691'

    async up(db) {
        await db.query(`ALTER TABLE "extrinsic" ALTER COLUMN "pallet" DROP NOT NULL`)
        await db.query(`ALTER TABLE "extrinsic" ALTER COLUMN "method" DROP NOT NULL`)
        await db.query(`ALTER TABLE "extrinsic" ALTER COLUMN "participants" DROP NOT NULL`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "extrinsic" ALTER COLUMN "pallet" SET NOT NULL`)
        await db.query(`ALTER TABLE "extrinsic" ALTER COLUMN "method" SET NOT NULL`)
        await db.query(`ALTER TABLE "extrinsic" ALTER COLUMN "participants" SET NOT NULL`)
    }
}
