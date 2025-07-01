import { AccountId32 } from '~/pallet/common/types'

export type Minted = {
    who: AccountId32
    amount: bigint
}
