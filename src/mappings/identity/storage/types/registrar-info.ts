import { AccountId32, BitFlags } from '@enjin/indexer/mappings/common/types'

export type RegistrarInfo = {
    account: AccountId32
    fee: bigint
    fields: BitFlags
}
