import { RootOrSigned } from '@enjin/indexer/mappings/common/types'

export type TokenCreated = {
    collectionId: bigint
    tokenId: bigint
    issuer: RootOrSigned
    initialSupply: bigint
}
