import { H160 } from '@enjin/indexer/mappings/common/types'

export type ClaimMinted = {
    who: H160 // HexBytes -> string
    amount: bigint
}
