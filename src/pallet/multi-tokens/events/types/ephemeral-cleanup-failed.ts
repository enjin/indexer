export type EphemeralCleanupFailed = {
    collectionId: bigint
    tokenId: bigint
    expiration: number
    error: unknown
}
