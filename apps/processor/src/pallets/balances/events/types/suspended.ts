import { AccountId32 } from '../../../common/types'

export type Suspended = {
    who: AccountId32
    amount: bigint
}
