import { AccountId32 } from '~/pallet/common/types'

export type HoldChange = {
    who: AccountId32
    amount: bigint
}
