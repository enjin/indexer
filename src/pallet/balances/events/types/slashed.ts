import { AccountId32 } from '../../../common/types'

export type Slashed = {
    who: AccountId32
    amount: bigint
}
