/**
 * SQL predicate that is true unless a listing's JSON `state` column was flagged expired by the expiry job. Expired
 * auctions and offers stay active until the chain sweeps them, so availability queries must exclude them explicitly.
 */
export function notExpiredListingSql(stateColumn: string): string {
    return `COALESCE((${stateColumn}->>'isExpired')::boolean, false) = false`
}
