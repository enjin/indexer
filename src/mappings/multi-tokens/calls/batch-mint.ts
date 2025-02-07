import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type BatchMintCall = {
    collectionId: bigint
    recipients: {
        accountId: string
        params:
            | {
                  tokenId: bigint
                  initialSupply: bigint
                  accountDepositCount?: number
                  cap?: {
                      __kind: string
                      value?: bigint
                  }
                  behavior?: {
                      __kind: string
                      value?:
                          | {
                                beneficiaries: {
                                    beneficiary: string
                                    percentage: number
                                }[]
                            }
                          | {
                                beneficiary: string
                                percentage: number
                            }
                  }
                  listingForbidden: boolean
                  freezeState?: {
                      __kind: string
                  }
                  attributes?: {
                      key: string
                      value: string
                  }[]
                  infusion?: bigint
                  anyoneCanInfuse?: boolean
                  metadata?: {
                      name: string
                      symbol: string
                      decimalCount: number
                  }
                  privilegedParams?: {
                      requiresDeposit: boolean
                      depositor?: string
                  }
              }
            | {
                  tokenId: bigint
                  amount: bigint
                  depositor?: string
              }
    }[]
}

export function batchMint(call: CallItem): BatchMintCall {
    return match(call)
        .returnType<BatchMintCall>()
        .when(calls.multiTokens.batchMint.matrixEnjinV1012.is, calls.multiTokens.batchMint.matrixEnjinV1012.decode)
        .when(calls.multiTokens.batchMint.matrixEnjinV603.is, calls.multiTokens.batchMint.matrixEnjinV603.decode)
        .when(calls.multiTokens.batchMint.matrixV1010.is, calls.multiTokens.batchMint.matrixV1010.decode)
        .when(calls.multiTokens.batchMint.matrixV600.is, calls.multiTokens.batchMint.matrixV600.decode)
        .when(calls.multiTokens.batchMint.matrixV500.is, calls.multiTokens.batchMint.matrixV500.decode)
        .when(calls.multiTokens.batchMint.enjinV1032.is, calls.multiTokens.batchMint.enjinV1032.decode)
        .when(calls.multiTokens.batchMint.enjinV100.is, calls.multiTokens.batchMint.enjinV100.decode)
        .when(calls.multiTokens.batchMint.v1050.is, calls.multiTokens.batchMint.v1050.decode)
        .when(calls.multiTokens.batchMint.v1030.is, calls.multiTokens.batchMint.v1030.decode)
        .when(calls.multiTokens.batchMint.v102.is, calls.multiTokens.batchMint.v102.decode)
        .when(calls.multiTokens.batchMint.v100.is, calls.multiTokens.batchMint.v100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
