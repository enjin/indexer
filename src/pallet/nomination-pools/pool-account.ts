import { hexToU8a, stringToU8a, u8aEq, u8aToBn } from '@polkadot/util'

const MOD_PREFIX = stringToU8a('modl')
const PALLET_ID_LENGTH = 8
const ACCOUNT_LENGTH = 32

export const POOL_BONDED_ACCOUNT_INDEX = 1

/**
 * Reverses the pool sub-account derivation (`modl` ++ palletId ++ index ++ poolId as u32 LE ++ zero padding) and
 * returns the pool id when `account` is the given sub-account of a pool, otherwise undefined.
 */
export function decodePoolId(
    palletId: string,
    account: string,
    index: number = POOL_BONDED_ACCOUNT_INDEX
): string | undefined {
    const bytes = hexToU8a(account)
    const palletIdBytes = hexToU8a(palletId)

    if (bytes.length !== ACCOUNT_LENGTH || palletIdBytes.length !== PALLET_ID_LENGTH) return undefined

    const prefixEnd = MOD_PREFIX.length + PALLET_ID_LENGTH
    if (!u8aEq(bytes.subarray(0, MOD_PREFIX.length), MOD_PREFIX)) return undefined
    if (!u8aEq(bytes.subarray(MOD_PREFIX.length, prefixEnd), palletIdBytes)) return undefined
    if (bytes[prefixEnd] !== index) return undefined

    const poolIdEnd = prefixEnd + 1 + 4
    if (bytes.subarray(poolIdEnd).some((byte) => byte !== 0)) return undefined

    return u8aToBn(bytes.subarray(prefixEnd + 1, poolIdEnd), { isLe: true }).toString()
}
