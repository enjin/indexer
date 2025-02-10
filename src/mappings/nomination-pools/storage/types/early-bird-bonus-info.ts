export type EarlyBirdBonusInfo = {
    bonusCalculated: boolean
    currentPaymentId?: number
    nextPaymentBlock?: number
    totalPaid?: bigint // Added on v1023
}
