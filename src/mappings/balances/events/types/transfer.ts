import { AccountId32 } from '../../../common/types'

export type Transfer = {
    from: AccountId32
    to: AccountId32
    amount: bigint
}
