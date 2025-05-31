import { AccountId32 } from '../../../common/types'

export type Withdraw = {
    who: AccountId32
    amount: bigint
}
