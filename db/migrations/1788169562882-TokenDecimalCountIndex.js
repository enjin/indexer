module.exports = class TokenDecimalCountIndex1788169562882 {
    name = 'TokenDecimalCountIndex1788169562882'

    async up(db) {
        // Expression index for the openreader filter nativeMetadata.decimalCount_gt/_eq/...,
        // which compiles to ("token"."native_metadata"->'decimalCount')::integer and
        // otherwise seq-scans the whole token table (30s statement timeouts on production).
        await db.query(
            `CREATE INDEX "token_native_metadata_decimal_count_idx" ON "token" ((("native_metadata"->'decimalCount')::integer))`
        )
    }

    async down(db) {
        await db.query(`DROP INDEX "token_native_metadata_decimal_count_idx"`)
    }
}
