import { AccountId32 } from '../../../common/types'

export type Locked = {
    who: AccountId32
    amount: bigint
}
