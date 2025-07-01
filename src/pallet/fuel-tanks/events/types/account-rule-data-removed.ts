import { AccountId32 } from '~/pallet/common/types'

export type AccountRuleDataRemoved = {
    tankId: AccountId32
    userId: AccountId32
    ruleSetId: number
    ruleKind: {
        __kind: string
    }
}
