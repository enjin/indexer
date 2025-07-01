import { AccountId32 } from '~/pallet/common/types'

export type Endowed = {
    account: AccountId32
    freeBalance: bigint
}
