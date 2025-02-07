import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type MintCall = {
    recipient: {
        __kind: string
        value?: string
    }
    collectionId: bigint
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
}

export function mint(call: CallItem): MintCall {
    return match(call)
        .returnType<MintCall>()
        .when(calls.multiTokens.mint.matrixEnjinV1012.is, calls.multiTokens.mint.matrixEnjinV1012.decode)
        .when(calls.multiTokens.mint.matrixEnjinV603.is, calls.multiTokens.mint.matrixEnjinV603.decode)
        .when(calls.multiTokens.mint.matrixV1010.is, calls.multiTokens.mint.matrixV1010.decode)
        .when(calls.multiTokens.mint.matrixV600.is, calls.multiTokens.mint.matrixV600.decode)
        .when(calls.multiTokens.mint.matrixV500.is, calls.multiTokens.mint.matrixV500.decode)
        .when(calls.multiTokens.mint.enjinV1032.is, calls.multiTokens.mint.enjinV1032.decode)
        .when(calls.multiTokens.mint.enjinV100.is, calls.multiTokens.mint.enjinV100.decode)
        .when(calls.multiTokens.mint.v1050.is, calls.multiTokens.mint.v1050.decode)
        .when(calls.multiTokens.mint.v1030.is, calls.multiTokens.mint.v1030.decode)
        .when(calls.multiTokens.mint.v102.is, calls.multiTokens.mint.v102.decode)
        .when(calls.multiTokens.mint.v100.is, calls.multiTokens.mint.v100.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
