import { AccountId32 } from '../../../common/types'

export type MutateFreezeStateScheduled = {
    tankId: AccountId32
    ruleSetId?: number
    isFrozen: boolean
}
