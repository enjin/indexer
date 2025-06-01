import { AccountId32 } from '../../../common/types'

export type Deposit = {
    who: AccountId32
    amount: bigint
}
