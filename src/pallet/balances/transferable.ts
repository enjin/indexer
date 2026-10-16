/**
 * Balance an account can move out right now, mirroring `pallet_balances`' `reducible_balance` with
 * `Preservation::Expendable` and `Fortitude::Polite` (what wallets show as "transferable").
 *
 * Since the fungible/holds rework, held (reserved) funds count towards freezes: a freeze only has to
 * be covered by the part of it the holds do not already cover, so the untouchable part of `free` is
 * `max(frozen - reserved, 0)`. The existential deposit is not subtracted; a keep-alive transfer can
 * move `ED` less than this.
 */
export function transferableBalance(free: bigint, reserved: bigint, frozen: bigint): bigint {
    const untouchable = frozen > reserved ? frozen - reserved : 0n
    return free > untouchable ? free - untouchable : 0n
}

/**
 * Pre-holds `AccountData` (`miscFrozen`/`feeFrozen`): locks applied to `free` alone and transfers
 * were limited by `miscFrozen`, so reserved funds never offset them.
 */
export function legacyTransferableBalance(free: bigint, miscFrozen: bigint): bigint {
    return free > miscFrozen ? free - miscFrozen : 0n
}
