import { AccountId32 } from '@enjin/indexer/mappings/common/types'

export type FreezeStateMutated = {
    tankId: AccountId32
    ruleSetId?: number
    isFrozen: boolean
}
