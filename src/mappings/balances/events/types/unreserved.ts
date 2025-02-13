import { AccountId32 } from '../../../common/types'

export type Unreserved = {
    who: AccountId32
    amount: bigint
}
