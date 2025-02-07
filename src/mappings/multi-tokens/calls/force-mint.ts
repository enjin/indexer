import { CallItem } from '@enjin/indexer/common/types/contexts'
import { UnsupportedCallError } from '@enjin/indexer/common/errors'
import { calls } from '../../../types/generated'
import { match } from 'ts-pattern'

type CreateTokenParams = {
    tokenId: bigint
    initialSupply: bigint
    sufficiency: {
        __kind: string
        value?:
            | {
                  unitPrice?: bigint
              }
            | {
                  minimumBalance: bigint
              }
    }
    cap?: {
        __kind: string
        value?: bigint
    }
    behavior?: {
        __kind: string
        value?: {
            beneficiary: string
            percentage: number
        }
    }
    listingForbidden: boolean
    freezeState?: {
        __kind: string
    }
    attributes: {
        key: string
        value: string
    }[]
    // foreignParams?: any
}

type MintParams = {
    tokenId: bigint
    amount: bigint
    depositor?: string
}

type CreateOrMintParams = {
    tokenId: bigint
    amount?: bigint
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
    // metadata?: {
    //     name: string
    //     symbol: string
    //     decimalCount: number
    // }
    // privilegedParams?: {
    //     requiresDeposit: boolean
    //     depositor?: string
    // }
}

type ForceMintCall = {
    // caller?: {
    //     __kind: string
    //     value?: string
    // }
    // recipient: {
    //     __kind: string
    //     value?: string
    // }
    collectionId: bigint
    params: (CreateOrMintParams | MintParams | CreateTokenParams)
    // depositor?: {
    //     __kind: string
    //     value?: string
    // }
    // depositBacker?: {
    //     __kind: string
    //     value?: string
    // }
}

export function forceMint(call: CallItem): ForceMintCall {
    return match(call)
        .returnType<ForceMintCall>()
        .when(calls.multiTokens.forceMint.matrixEnjinV1012.is, calls.multiTokens.forceMint.matrixEnjinV1012.decode)
        .when(calls.multiTokens.forceMint.matrixEnjinV1003.is, calls.multiTokens.forceMint.matrixEnjinV1003.decode)
        .when(calls.multiTokens.forceMint.matrixEnjinV603.is, calls.multiTokens.forceMint.matrixEnjinV603.decode)
        .when(calls.multiTokens.forceMint.matrixV1010.is, calls.multiTokens.forceMint.matrixV1010.decode)
        .when(calls.multiTokens.forceMint.matrixV1003.is, calls.multiTokens.forceMint.matrixV1003.decode)
        .when(calls.multiTokens.forceMint.matrixV604.is, calls.multiTokens.forceMint.matrixV604.decode)
        .when(calls.multiTokens.forceMint.enjinV1032.is, calls.multiTokens.forceMint.enjinV1032.decode)
        .when(calls.multiTokens.forceMint.enjinV1023.is, calls.multiTokens.forceMint.enjinV1023.decode)
        .when(calls.multiTokens.forceMint.enjinV101.is, calls.multiTokens.forceMint.enjinV101.decode)
        .when(calls.multiTokens.forceMint.v1050.is, calls.multiTokens.forceMint.v1050.decode)
        .when(calls.multiTokens.forceMint.v1030.is, calls.multiTokens.forceMint.v1030.decode)
        .when(calls.multiTokens.forceMint.v1023.is, calls.multiTokens.forceMint.v1023.decode)
        .when(calls.multiTokens.forceMint.v105.is, calls.multiTokens.forceMint.v105.decode)
        .otherwise(() => {
            throw new UnsupportedCallError(call)
        })
}
