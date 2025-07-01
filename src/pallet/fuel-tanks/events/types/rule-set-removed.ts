import { AccountId32 } from '~/pallet/common/types'

export type RuleSetRemoved = {
    tankId: AccountId32
    ruleSetId: number
}
