import { AccountId32 } from '../../../common/types'

export type CollectionAccount = {
    isFrozen: boolean
    approvals: [AccountId32, number | undefined][]
    accountCount: number
}
