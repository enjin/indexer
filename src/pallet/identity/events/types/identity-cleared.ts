import { AccountId32 } from '~/pallet/common/types'

export type IdentityCleared = {
    who: AccountId32
    deposit: bigint
}
