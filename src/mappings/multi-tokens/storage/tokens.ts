import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'

type Token = {
    supply: bigint
    cap?: any
    freezeState?: any
    requiresDeposit?: boolean
    creationDeposit?: any
    ownerDeposit?: bigint
    totalTokenAccountDeposit?: bigint
    attributeCount: number
    accountCount?: number
    marketBehavior?: any
    listingForbidden: boolean
    metadata: any
    infusion?: bigint
    anyoneCanInfuse?: boolean
    groups?: any
}

export async function tokens(block: BlockHeader, collectionId: bigint, tokenId: bigint): Promise<Token | undefined> {
    return match(block)
        .returnType<Promise<Token | undefined>>()
        .when(storage.multiTokens.tokens.enjinV1032.is, () =>
            storage.multiTokens.tokens.enjinV1032.get(block, collectionId, tokenId)
        )
        .when(storage.multiTokens.tokens.enjinV100.is, () =>
            storage.multiTokens.tokens.enjinV100.get(block, collectionId, tokenId)
        )
        .when(storage.multiTokens.tokens.v1050.is, () => storage.multiTokens.tokens.v1050.get(block, collectionId, tokenId))
        .when(storage.multiTokens.tokens.v1030.is, () => storage.multiTokens.tokens.v1030.get(block, collectionId, tokenId))
        .when(storage.multiTokens.tokens.v102.is, () => storage.multiTokens.tokens.v102.get(block, collectionId, tokenId))
        .when(storage.multiTokens.tokens.v100.is, () => storage.multiTokens.tokens.v100.get(block, collectionId, tokenId))
        .otherwise(() => {
            throw new UnsupportedStorageError('MultiTokens.Tokens')
        })
}
