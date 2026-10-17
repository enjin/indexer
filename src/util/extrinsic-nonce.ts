import type { ExtrinsicItem } from '~/contexts'

export function getExtrinsicNonce(extrinsic: Pick<ExtrinsicItem, 'id' | 'signature'>): number {
    // Unsigned extrinsics have no nonce; retain zero for the non-null persisted field.
    if (extrinsic.signature === undefined) return 0

    const extensions = extrinsic.signature.signedExtensions
    // Subsquid normalizes V14 extension names to camelCase; older metadata retains CheckNonce.
    const value =
        extensions && typeof extensions === 'object'
            ? ((extensions as Record<string, unknown>).checkNonce ?? (extensions as Record<string, unknown>).CheckNonce)
            : undefined

    let nonce: bigint
    if (typeof value === 'number' && Number.isSafeInteger(value)) {
        nonce = BigInt(value)
    } else if (typeof value === 'string' && /^\d+$/.test(value)) {
        nonce = BigInt(value)
    } else {
        throw new Error(`Missing or invalid signed nonce for extrinsic ${extrinsic.id}`)
    }

    // Extrinsic.nonce is currently a PostgreSQL/GraphQL signed Int, even though the chain uses u32.
    if (nonce < 0n || nonce > 2147483647n) {
        throw new Error(`Signed nonce for extrinsic ${extrinsic.id} exceeds the persisted Int range`)
    }

    return Number(nonce)
}
