import { AccountId32, BitFlags } from '~/pallet/common/types'

export type RegistrarInfo = {
    account: AccountId32
    fee: bigint
    fields: BitFlags
}
