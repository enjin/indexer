import { AccountId32 } from '../../../common/types'

export type BalanceSet = {
    who: AccountId32
    free: bigint
    reserved?: bigint // Removed on v104
}
