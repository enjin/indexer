import { AccountId32 } from '../../../common/types'

export type FreezeStateMutated = {
    tankId: AccountId32
    ruleSetId?: number
    isFrozen: boolean
}
