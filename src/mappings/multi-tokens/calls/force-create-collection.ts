import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type ForceCreateCollectionCall = {
    owner: string
    collectionId: bigint
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

export function forceCreateCollection(call: CallItem): ForceCreateCollectionCall {
    return match(call)
        .returnType<ForceCreateCollectionCall>()
        .when(
            calls.multiTokens.forceCreateCollection.matrixEnjinV1012.is,
            calls.multiTokens.forceCreateCollection.matrixEnjinV1012.decode
        )
        .when(
            calls.multiTokens.forceCreateCollection.matrixEnjinV603.is,
            calls.multiTokens.forceCreateCollection.matrixEnjinV603.decode
        )
        .when(calls.multiTokens.forceCreateCollection.matrixV1010.is, calls.multiTokens.forceCreateCollection.matrixV1010.decode)
        .when(calls.multiTokens.forceCreateCollection.matrixV500.is, calls.multiTokens.forceCreateCollection.matrixV500.decode)
        .when(calls.multiTokens.forceCreateCollection.enjinV1032.is, calls.multiTokens.forceCreateCollection.enjinV1032.decode)
        .when(calls.multiTokens.forceCreateCollection.enjinV100.is, calls.multiTokens.forceCreateCollection.enjinV100.decode)
        .when(calls.multiTokens.forceCreateCollection.v1050.is, calls.multiTokens.forceCreateCollection.v1050.decode)
        .when(calls.multiTokens.forceCreateCollection.v1030.is, calls.multiTokens.forceCreateCollection.v1030.decode)
        .when(calls.multiTokens.forceCreateCollection.v100.is, calls.multiTokens.forceCreateCollection.v100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
