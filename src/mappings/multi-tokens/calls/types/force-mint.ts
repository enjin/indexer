import { FlexibleMintParams, MultiAddress } from '@enjin/indexer/mappings/common/types'

export type ForceMint = {
    caller?: MultiAddress // Changed from MultiAddress to MultiAddress? on v1023
    recipient: MultiAddress
    collectionId: bigint
    params: FlexibleMintParams
    depositBacker?: MultiAddress
}
