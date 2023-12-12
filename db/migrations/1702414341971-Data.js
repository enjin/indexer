module.exports = class Data1702414341971 {
    name = 'Data1702414341971'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_cab3c454b0419a03584a3990ce"`)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_cab3c454b0419a03584a3990ce" ON "token" ("token_id") `)
    }
}
