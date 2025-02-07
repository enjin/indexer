import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type CreateCollectionCall = {
    descriptor: {
        policy: {
            mint: {
                maxTokenCount?: bigint
                maxTokenSupply?: bigint
                forceCollapsingSupply?: boolean
                forceSingleMint?: boolean
            }
            market: {
                royalty?:
                    | {
                          beneficiaries?: {
                              beneficiary: string
                              percentage: number
                          }[]
                      }
                    | {
                          beneficiary: string
                          percentage: number
                      }
            }
        }
        depositor?: string
        explicitRoyaltyCurrencies: {
            collectionId: bigint
            tokenId: bigint
        }[]
        attributes: {
            key: string
            value: string
        }[]
    }
}

export function createCollection(call: CallItem): CreateCollectionCall {
    return match(call)
        .returnType<CreateCollectionCall>()
        .when(calls.multiTokens.createCollection.matrixEnjinV1012.is, calls.multiTokens.createCollection.matrixEnjinV1012.decode)
        .when(calls.multiTokens.createCollection.matrixEnjinV603.is, calls.multiTokens.createCollection.matrixEnjinV603.decode)
        .when(calls.multiTokens.createCollection.matrixV1010.is, calls.multiTokens.createCollection.matrixV1010.decode)
        .when(calls.multiTokens.createCollection.matrixV500.is, calls.multiTokens.createCollection.matrixV500.decode)
        .when(calls.multiTokens.createCollection.enjinV1032.is, calls.multiTokens.createCollection.enjinV1032.decode)
        .when(calls.multiTokens.createCollection.enjinV100.is, calls.multiTokens.createCollection.enjinV100.decode)
        .when(calls.multiTokens.createCollection.v1050.is, calls.multiTokens.createCollection.v1050.decode)
        .when(calls.multiTokens.createCollection.v1030.is, calls.multiTokens.createCollection.v1030.decode)
        .when(calls.multiTokens.createCollection.v100.is, calls.multiTokens.createCollection.v100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
