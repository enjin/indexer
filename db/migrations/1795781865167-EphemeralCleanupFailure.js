module.exports = class EphemeralCleanupFailure1795781865167 {
    name = 'EphemeralCleanupFailure1795781865167'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "ephemeral_cleanup_failure" jsonb`)
        // Restore only a finalized failure belonging to the existing token's lifetime.
        await db.query(`
            WITH failures AS (
                SELECT DISTINCT ON (failure.token_id)
                       failure.token_id,
                       jsonb_build_object(
                           'expirationBlock', failure.data->>'expirationBlock',
                           'error', failure.data->'error'
                       ) AS state
                  FROM event AS failure
                  JOIN token ON token.id = failure.token_id
                  JOIN LATERAL (
                      SELECT MIN(chain_info.timestamp) AS timestamp
                        FROM chain_info
                       WHERE chain_info.block_number = COALESCE(
                                 failure.block_number,
                                 CASE
                                     WHEN failure.id ~ '^[0-9]{10}-[0-9a-f]{5}-[0-9]{6}$'
                                      AND SPLIT_PART(failure.id, '-', 1) <= '2147483647'
                                     THEN SPLIT_PART(failure.id, '-', 1)::int
                                 END
                             )
                         AND chain_info.finalized IS TRUE
                         AND LOWER(SUBSTRING(chain_info.block_hash FROM 3 FOR 5)) = SPLIT_PART(failure.id, '-', 2)
                      HAVING COUNT(*) = 1
                  ) AS failure_block ON failure_block.timestamp >= token.created_at
                 WHERE failure.name = 'MultiTokensEphemeralCleanupFailed'
                   AND failure.data->>'expirationBlock' = token.ephemeral_expiration::text
                   AND NOT EXISTS (
                       SELECT 1
                         FROM event AS destruction
                        WHERE destruction.token_id = failure.token_id
                          AND destruction.name IN ('MultiTokensTokenDestroyed', 'MultiTokensEphemeralTokenDestroyed')
                          AND destruction.id > failure.id
                   )
                 ORDER BY failure.token_id, failure.id DESC
            )
            UPDATE token
               SET ephemeral_cleanup_failure = failures.state
              FROM failures
             WHERE token.id = failures.token_id
        `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "ephemeral_cleanup_failure"`)
    }
}
