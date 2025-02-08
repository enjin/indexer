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

// export async function token(ctx: CommonContext, block: BlockHeader, collectionId: bigint, tokenId: bigint) {
//     if (storage.multiTokens.tokens.matrixEnjinV1012.is(block)) {
//         const data = await storage.multiTokens.tokens.matrixEnjinV1012.get(block, collectionId, tokenId)
//
//         if (data) {
//             const cap = data.cap ? getCapType(data.cap) : null
//             const behavior = data.marketBehavior ? await getBehavior(ctx, data.marketBehavior) : null
//             const freezeState = data.freezeState ? getFreezeState(data.freezeState) : null
//             const unitPrice: bigint = 10_000_000_000_000_000n
//
//             return {
//                 collectionId,
//                 tokenId,
//                 infusion: data.infusion,
//                 initialSupply: data.supply,
//                 minimumBalance: 1n,
//                 anyoneCanInfuse: data.anyoneCanInfuse,
//                 unitPrice,
//                 cap,
//                 nativeMetadata: new NativeTokenMetadata({
//                     decimalCount: data.metadata.decimalCount,
//                     name: hexToString(data.metadata.name),
//                     symbol: hexToString(data.metadata.symbol),
//                 }),
//                 accountDepositCount: data.accountCount,
//                 behavior,
//                 freezeState,
//                 listingForbidden: data.listingForbidden ?? false,
//             }
//         }
//     }
//
//     if (storage.multiTokens.tokens.matrixEnjinV603.is(block)) {
//         const data = await storage.multiTokens.tokens.matrixEnjinV603.get(block, collectionId, tokenId)
//
//         if (data) {
//             const cap = data.cap ? getCapType(data.cap) : null
//             const behavior = data.marketBehavior ? await getBehavior(ctx, data.marketBehavior) : null
//             const freezeState = data.freezeState ? getFreezeState(data.freezeState) : null
//             const unitPrice: bigint | null =
//                 data.sufficiency.__kind === 'Insufficient' ? data.sufficiency.unitPrice : 10_000_000_000_000_000n
//             const { minimumBalance } = data
//
//             return {
//                 collectionId,
//                 tokenId,
//                 initialSupply: data.supply,
//                 minimumBalance,
//                 unitPrice,
//                 cap,
//                 behavior,
//                 freezeState,
//                 listingForbidden: data.listingForbidden,
//             }
//         }
//     }
//
//     throw new UnsupportedStorageError('storage.multi-tokens.token')
// }
