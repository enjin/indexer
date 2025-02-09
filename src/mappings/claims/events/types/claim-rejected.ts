import { H160, H256 } from '@enjin/indexer/mappings/common/types'

export type ClaimRejected = {
    account: H160 // HexBytes -> string
    transactionHash: H256 // HexBytes -> string
}
