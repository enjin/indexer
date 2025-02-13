import { AccountId32 } from '../../../common/types'

export type Burned = {
    who: AccountId32
    amount: bigint
}
