import { AccountId32 } from '~/pallet/common/types'

export type ConsumptionSet = {
    tankId: AccountId32
    userId?: AccountId32
    ruleSetId: number
    consumption: {
        totalConsumed: bigint
        lastResetBlock?: number
    }
}
