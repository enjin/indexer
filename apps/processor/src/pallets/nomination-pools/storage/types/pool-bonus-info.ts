export type PoolBonusInfo = {
    amount: bigint
    shareCaptureBlock?: number
    lastPaymentId?: number
    totalPaid?: bigint // Added on v1023
}
