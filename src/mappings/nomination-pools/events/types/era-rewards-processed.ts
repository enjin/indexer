import { CommissionPayment } from '../../../common/types'

export type EraRewardsProcessed = {
    poolId: number
    era: number
    commission?: CommissionPayment
    bonus: bigint
    reinvested: bigint
    bonusCycleEnded?: boolean // Added on v104
}
