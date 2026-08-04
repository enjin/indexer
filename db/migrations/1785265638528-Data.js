module.exports = class Data1785265638528 {
    name = 'Data1785265638528'

    async up(db) {
        await db.query(`ALTER TABLE "collection" RENAME COLUMN "metadata" TO "stored_metadata"`)
        await db.query(`ALTER TABLE "token_group" RENAME COLUMN "metadata" TO "stored_metadata"`)
        await db.query(`ALTER TABLE "token" RENAME COLUMN "metadata" TO "stored_metadata"`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" RENAME COLUMN "stored_metadata" TO "metadata"`)
        await db.query(`ALTER TABLE "token_group" RENAME COLUMN "stored_metadata" TO "metadata"`)
        await db.query(`ALTER TABLE "collection" RENAME COLUMN "stored_metadata" TO "metadata"`)
    }
}
