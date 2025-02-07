import { BlockHeader } from '@enjin/indexer/common/types/contexts'
import { UnsupportedStorageError } from '@enjin/indexer/common/errors'
import { storage } from '../../../types/generated'
import { match } from 'ts-pattern'

type Token = {
    supply: bigint
    cap?: {
        __kind: string
        value?: bigint
    }
    freezeState?: {
        __kind: string
    }
    requiresDeposit?: boolean
    creationDeposit?: {
        depositor?: string
        amount: bigint
    }
    ownerDeposit?: bigint
    totalTokenAccountDeposit?: bigint
    attributeCount: number
    accountCount?: number
    marketBehavior?: {
        __kind: string
        value?:
            | {
                  beneficiary: string
                  percentage: number
              }
            | {
                  beneficiaries: { beneficiary: string; percentage: number }[]
              }
    }
    listingForbidden: boolean
    metadata:
        | {
              decimalCount: number
              name: string
              symbol: string
          }
        | { __kind: string }
    infusion?: bigint
    anyoneCanInfuse?: boolean
    groups?: bigint[]
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
