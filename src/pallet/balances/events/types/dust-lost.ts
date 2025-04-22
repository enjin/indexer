import { AccountId32 } from '../../../common/types'

export type DustLost = {
    account: AccountId32
    amount: bigint
}
