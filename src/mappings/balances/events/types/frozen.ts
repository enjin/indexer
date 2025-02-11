import { AccountId32 } from '../../../common/types'

export type Frozen = {
    who: AccountId32
    amount: bigint
}
