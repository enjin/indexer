import { hexToString } from '@polkadot/util'
import { UnsupportedEventError, throwError } from '../../../common/errors'
import { events, calls, storage } from '../../../types/generated'
import {
    CapType,
    Collection,
    Event as EventModel,
    Extrinsic,
    FreezeState,
    MultiTokensTokenCreated,
    NativeTokenMetadata,
    Royalty,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
    TokenCapSingleMint,
    TokenCapSupply,
} from '../../../model'
import {
    DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_v500,
    FreezeState as FreezeState_v500,
    SufficiencyParam_Sufficient,
    TokenMarketBehavior as TokenMarketBehavior500,
} from '../../../types/generated/v500'
import { TokenMarketBehavior as TokenMarketBehavior1020 } from '../../../types/generated/v1020'
import { DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_v600 } from '../../../types/generated/v600'
import {
    TokenCap,
    DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_Enjin_v603,
} from '../../../types/generated/matrixEnjinV603'
import { DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_Enjin_v1010 } from '../../../types/generated/v1010'
import { DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_Enjin_v1012 } from '../../../types/generated/matrixEnjinV1012'
import { CallItem, CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

type TokenMarketBehavior = TokenMarketBehavior500 | TokenMarketBehavior1020

export function getCapType(cap: TokenCap) {
    if (cap.__kind === CapType.Supply) {
        return new TokenCapSupply({
            type: CapType.Supply,
            supply: cap.value,
        })
    }

    return new TokenCapSingleMint({
        type: CapType.SingleMint,
        supply: cap.__kind === 'CollapsingSupply' ? cap.value : 0n,
    })
}

export function getFreezeState(state: FreezeState_v500): FreezeState | null {
    switch (state.__kind) {
        case 'Permanent':
            return FreezeState.Permanent
        case 'Temporary':
            return FreezeState.Temporary
        case 'Never':
            return FreezeState.Never
        default:
            return null
    }
}

export function isTokenFrozen(freezeState: FreezeState | null | undefined): boolean {
    return freezeState === FreezeState.Permanent || freezeState === FreezeState.Temporary
}

async function getBehavior(
    ctx: CommonContext,
    behavior: TokenMarketBehavior
): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }
    const beneficiaries =
        'beneficiaries' in behavior.value
            ? behavior.value.beneficiaries
            : [
                  {
                      beneficiary: behavior.value.beneficiary,
                      percentage: behavior.value.percentage,
                  },
              ]

    const beneficiariesWithAccount = await Promise.all(
        beneficiaries.map(async (v) => {
            return new Royalty({
                beneficiary: (await getOrCreateAccount(ctx, v.beneficiary)).id,
                percentage: v.percentage,
            })
        })
    )

    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: beneficiariesWithAccount[0],
        beneficiaries: beneficiariesWithAccount,
    })
}

async function getCallData(ctx: CommonContext, call: CallItem, event: ReturnType<typeof getEventData>) {
    if (
        call.name === 'MatrixUtility.batch' ||
        call.name === 'Utility.batch' ||
        call.name === 'Utility.batch_all' ||
        call.name === 'FuelTanks.dispatch_and_touch' ||
        call.name === 'FuelTanks.dispatch'
    ) {
        return undefined
    }

    if (call.name === 'MultiTokens.batch_mint') {
        if (calls.multiTokens.batchMint.matrixEnjinV1022.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.matrixEnjinV1022.decode(call)

            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v1012
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                const unitPrice = 10_000_000_000_000_000n
                const minimumBalance = 1n

                return {
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                    nativeMetadata: new NativeTokenMetadata({
                        decimalCount: params.metadata.decimalCount,
                        name: hexToString(params.metadata.name),
                        symbol: hexToString(params.metadata.symbol),
                    }),
                    anyoneCanInfuse: params.anyoneCanInfuse,
                    infusion: params.infusion,
                    accountDepositCount: params.accountDepositCount,
                }
            }
        }

        if (calls.multiTokens.batchMint.matrixEnjinV1012.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.matrixEnjinV1012.decode(call)

            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v1012
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                const unitPrice = 10_000_000_000_000_000n
                const minimumBalance = 1n

                return {
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                    nativeMetadata: new NativeTokenMetadata({
                        decimalCount: params.metadata.decimalCount,
                        name: hexToString(params.metadata.name),
                        symbol: hexToString(params.metadata.symbol),
                    }),
                    anyoneCanInfuse: params.anyoneCanInfuse,
                    infusion: params.infusion,
                    accountDepositCount: params.accountDepositCount,
                }
            }
        }

        if (calls.multiTokens.batchMint.v1010.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.v1010.decode(call)

            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v1010
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                const unitPrice = 10_000_000_000_000_000n
                const minimumBalance = 1n

                return {
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                    nativeMetadata: new NativeTokenMetadata({
                        decimalCount: params.metadata.decimalCount,
                        name: hexToString(params.metadata.name),
                        symbol: hexToString(params.metadata.symbol),
                    }),
                    anyoneCanInfuse: params.anyoneCanInfuse,
                    infusion: params.infusion,
                    accountDepositCount: params.accountDepositCount,
                }
            }
        }

        if (calls.multiTokens.batchMint.matrixEnjinV603.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.matrixEnjinV603.decode(call)

            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v603
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                    unitPrice = null
                }

                return {
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (calls.multiTokens.batchMint.v600.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.v600.decode(call)
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParamsCreateToken_v600
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                    unitPrice = null
                }

                return {
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (calls.multiTokens.batchMint.v500.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.v500.decode(call)
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParamsCreateToken_v500
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                    unitPrice = null
                }

                return {
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        throw new UnsupportedEventError(calls.multiTokens.batchMint.name)
    }

    if (call.name === 'MultiTokens.force_mint') {
        if (calls.multiTokens.forceMint.matrixEnjinV1022.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.matrixEnjinV1022.decode(call)
            const { params } = calls.multiTokens.forceMint.matrixEnjinV1022.decode(call)
            if (params.__kind !== 'CreateOrMint') {
                // eslint-disable-next-line no-console
                console.log('Invalid params', params)
                throw new Error('Invalid params')
            }
            const cap = params.value.cap ? getCapType(params.value.cap) : null
            const behavior = params.value.behavior ? await getBehavior(ctx, params.value.behavior) : null
            const freezeState = params.value.freezeState ? getFreezeState(params.value.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n
            const minimumBalance = 1n

            return {
                collectionId,
                tokenId: params.value.tokenId,
                initialSupply: params.value.amount,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.value.listingForbidden ?? false,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: params.value.metadata.decimalCount,
                    name: hexToString(params.value.metadata.name),
                    symbol: hexToString(params.value.metadata.symbol),
                }),
                anyoneCanInfuse: params.value.anyoneCanInfuse,
                infusion: params.value.infusion,
                accountDepositCount: params.value.accountDepositCount,
            }
        }

        if (calls.multiTokens.forceMint.matrixEnjinV1012.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.matrixEnjinV1012.decode(call)
            const { params } = calls.multiTokens.forceMint.matrixEnjinV1012.decode(call)
            if (params.__kind !== 'CreateOrMint') {
                // eslint-disable-next-line no-console
                console.log('Invalid params', params)
                throw new Error('Invalid params')
            }
            const cap = params.value.cap ? getCapType(params.value.cap) : null
            const behavior = params.value.behavior ? await getBehavior(ctx, params.value.behavior) : null
            const freezeState = params.value.freezeState ? getFreezeState(params.value.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n
            const minimumBalance = 1n

            return {
                collectionId,
                tokenId: params.value.tokenId,
                initialSupply: params.value.amount,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.value.listingForbidden ?? false,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: params.value.metadata.decimalCount,
                    name: hexToString(params.value.metadata.name),
                    symbol: hexToString(params.value.metadata.symbol),
                }),
                anyoneCanInfuse: params.value.anyoneCanInfuse,
                infusion: params.value.infusion,
                accountDepositCount: params.value.accountDepositCount,
            }
        }

        if (calls.multiTokens.forceMint.v1010.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.v1010.decode(call)
            const { params } = calls.multiTokens.forceMint.v1010.decode(call)
            if (params.__kind !== 'CreateOrMint') {
                // eslint-disable-next-line no-console
                console.log('Invalid params', params)
                throw new Error('Invalid params')
            }
            const cap = params.value.cap ? getCapType(params.value.cap) : null
            const behavior = params.value.behavior ? await getBehavior(ctx, params.value.behavior) : null
            const freezeState = params.value.freezeState ? getFreezeState(params.value.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n
            const minimumBalance = 1n

            return {
                collectionId,
                tokenId: params.value.tokenId,
                initialSupply: params.value.amount,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.value.listingForbidden ?? false,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: params.value.metadata.decimalCount,
                    name: hexToString(params.value.metadata.name),
                    symbol: hexToString(params.value.metadata.symbol),
                }),
                anyoneCanInfuse: params.value.anyoneCanInfuse,
                infusion: params.value.infusion,
                accountDepositCount: params.value.accountDepositCount,
            }
        }

        if (calls.multiTokens.forceMint.matrixEnjinV1003.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.matrixEnjinV1003.decode(call)
            const params = calls.multiTokens.forceMint.matrixEnjinV1003.decode(call).params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (calls.multiTokens.forceMint.matrixEnjinV603.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.matrixEnjinV603.decode(call)
            const params = calls.multiTokens.forceMint.matrixEnjinV603.decode(call).params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (calls.multiTokens.forceMint.v1003.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.v1003.decode(call)
            const params = calls.multiTokens.forceMint.v1003.decode(call).params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (calls.multiTokens.forceMint.v604.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.v604.decode(call)
            const params = calls.multiTokens.forceMint.v604.decode(call).params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        throw new UnsupportedEventError(calls.multiTokens.forceMint.name)
    }

    if (call.name === 'MultiTokens.mint') {
        if (calls.multiTokens.mint.matrixEnjinV1022.is(call)) {
            const { collectionId } = calls.multiTokens.mint.matrixEnjinV1022.decode(call)
            const { params } = calls.multiTokens.mint.matrixEnjinV1022.decode(call)
            if (params.__kind !== 'CreateToken') {
                // eslint-disable-next-line no-console
                console.error('Invalid params', call.name, params)
                throw new Error('Invalid params')
            }

            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n
            const minimumBalance = 1n

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: params.metadata.decimalCount,
                    name: hexToString(params.metadata.name),
                    symbol: hexToString(params.metadata.symbol),
                }),
                anyoneCanInfuse: params.anyoneCanInfuse,
                infusion: params.infusion,
                accountDepositCount: params.accountDepositCount,
            }
        }

        if (calls.multiTokens.mint.matrixEnjinV1012.is(call)) {
            const { collectionId } = calls.multiTokens.mint.matrixEnjinV1012.decode(call)
            const { params } = calls.multiTokens.mint.matrixEnjinV1012.decode(call)
            if (params.__kind !== 'CreateToken') {
                // eslint-disable-next-line no-console
                console.error('Invalid params', call.name, params)
                throw new Error('Invalid params')
            }

            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n
            const minimumBalance = 1n

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: params.metadata.decimalCount,
                    name: hexToString(params.metadata.name),
                    symbol: hexToString(params.metadata.symbol),
                }),
                anyoneCanInfuse: params.anyoneCanInfuse,
                infusion: params.infusion,
                accountDepositCount: params.accountDepositCount,
            }
        }

        if (calls.multiTokens.mint.v1020.is(call)) {
            const { collectionId } = calls.multiTokens.mint.v1020.decode(call)
            const { params } = calls.multiTokens.mint.v1020.decode(call)
            if (params.__kind !== 'CreateToken') {
                throw new Error('Invalid params')
            }
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n
            const minimumBalance = 1n

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: params.metadata.decimalCount,
                    name: hexToString(params.metadata.name),
                    symbol: hexToString(params.metadata.symbol),
                }),
                anyoneCanInfuse: params.anyoneCanInfuse,
                infusion: params.infusion,
                accountDepositCount: params.accountDepositCount,
            }
        }

        if (calls.multiTokens.mint.v1010.is(call)) {
            const { collectionId } = calls.multiTokens.mint.v1010.decode(call)
            const { params } = calls.multiTokens.mint.v1010.decode(call)
            if (params.__kind !== 'CreateToken') {
                // eslint-disable-next-line no-console
                console.error('Invalid params', call.name, params)
                throw new Error('Invalid params')
            }

            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n
            const minimumBalance = 1n

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: params.metadata.decimalCount,
                    name: hexToString(params.metadata.name),
                    symbol: hexToString(params.metadata.symbol),
                }),
                anyoneCanInfuse: params.anyoneCanInfuse,
                infusion: params.infusion,
                accountDepositCount: params.accountDepositCount,
            }
        }

        if (calls.multiTokens.mint.matrixEnjinV603.is(call)) {
            const { collectionId } = calls.multiTokens.mint.matrixEnjinV603.decode(call)
            const params = calls.multiTokens.mint.matrixEnjinV603.decode(call).params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (calls.multiTokens.mint.v600.is(call)) {
            const { collectionId } = calls.multiTokens.mint.v600.decode(call)
            const params = calls.multiTokens.mint.v600.decode(call).params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (calls.multiTokens.mint.v500.is(call)) {
            const { collectionId } = calls.multiTokens.mint.v500.decode(call)
            const params = calls.multiTokens.mint.v500.decode(call).params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        throw new UnsupportedEventError(calls.multiTokens.mint.name)
    }

    throw new UnsupportedEventError(call.name)
}

function getEventData(event: EventItem) {
    if (events.multiTokens.tokenCreated.matrixEnjinV603.is(event)) {
        const { collectionId, tokenId, issuer, initialSupply } = events.multiTokens.tokenCreated.matrixEnjinV603.decode(event)
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, initialSupply }
        }
        return {
            collectionId,
            tokenId,
            issuer: '0x0000000000000000000000000000000000000000000000000000000000000000',
            initialSupply,
        }
    }

    throw new UnsupportedEventError(events.multiTokens.tokenCreated.name)
}

function getEvent(item: EventItem, data: ReturnType<typeof getEventData>) {
    return new EventModel({
        id: item.id,
        name: MultiTokensTokenCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenCreated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            issuer: data.issuer,
            initialSupply: data.initialSupply,
        }),
    })
}

async function getTokenId(ctx: CommonContext, block: BlockHeader, collectionId: bigint, tokenId: bigint) {
    if (storage.multiTokens.tokens.v1020.is(block)) {
        const data = await storage.multiTokens.tokens.v1020.get(block, collectionId, tokenId)

        if (data) {
            const cap = data.cap ? getCapType(data.cap) : null
            const behavior = data.marketBehavior ? await getBehavior(ctx, data.marketBehavior) : null
            const freezeState = data.freezeState ? getFreezeState(data.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n

            return {
                collectionId,
                tokenId,
                infusion: data.infusion,
                initialSupply: data.supply,
                minimumBalance: 1n,
                anyoneCanInfuse: data.anyoneCanInfuse,
                unitPrice,
                cap,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: data.metadata.decimalCount,
                    name: hexToString(data.metadata.name),
                    symbol: hexToString(data.metadata.symbol),
                }),
                accountDepositCount: data.accountCount,
                behavior,
                freezeState,
                listingForbidden: data.listingForbidden ?? false,
            }
        }
    }

    if (storage.multiTokens.tokens.v1010.is(block)) {
        const data = await storage.multiTokens.tokens.v1010.get(block, collectionId, tokenId)

        if (data) {
            const cap = data.cap ? getCapType(data.cap) : null
            const behavior = data.marketBehavior ? await getBehavior(ctx, data.marketBehavior) : null
            const freezeState = data.freezeState ? getFreezeState(data.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n

            return {
                collectionId,
                tokenId,
                infusion: data.infusion,
                initialSupply: data.supply,
                minimumBalance: 1n,
                anyoneCanInfuse: data.anyoneCanInfuse,
                unitPrice,
                cap,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: data.metadata.decimalCount,
                    name: hexToString(data.metadata.name),
                    symbol: hexToString(data.metadata.symbol),
                }),
                accountDepositCount: data.accountCount,
                behavior,
                freezeState,
                listingForbidden: data.listingForbidden ?? false,
            }
        }
    }

    if (storage.multiTokens.tokens.matrixEnjinV1012.is(block)) {
        const data = await storage.multiTokens.tokens.matrixEnjinV1012.get(block, collectionId, tokenId)

        if (data) {
            const cap = data.cap ? getCapType(data.cap) : null
            const behavior = data.marketBehavior ? await getBehavior(ctx, data.marketBehavior) : null
            const freezeState = data.freezeState ? getFreezeState(data.freezeState) : null
            const unitPrice: bigint = 10_000_000_000_000_000n

            return {
                collectionId,
                tokenId,
                infusion: data.infusion,
                initialSupply: data.supply,
                minimumBalance: 1n,
                anyoneCanInfuse: data.anyoneCanInfuse,
                unitPrice,
                cap,
                nativeMetadata: new NativeTokenMetadata({
                    decimalCount: data.metadata.decimalCount,
                    name: hexToString(data.metadata.name),
                    symbol: hexToString(data.metadata.symbol),
                }),
                accountDepositCount: data.accountCount,
                behavior,
                freezeState,
                listingForbidden: data.listingForbidden ?? false,
            }
        }
    }

    if (storage.multiTokens.tokens.matrixEnjinV603.is(block)) {
        const data = await storage.multiTokens.tokens.matrixEnjinV603.get(block, collectionId, tokenId)

        if (data) {
            const cap = data.cap ? getCapType(data.cap) : null
            const behavior = data.marketBehavior ? await getBehavior(ctx, data.marketBehavior) : null
            const freezeState = data.freezeState ? getFreezeState(data.freezeState) : null
            const unitPrice: bigint | null =
                data.sufficiency.__kind === 'Insufficient' ? data.sufficiency.unitPrice : 10_000_000_000_000_000n
            const { minimumBalance } = data

            return {
                collectionId,
                tokenId,
                initialSupply: data.supply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: data.listingForbidden ?? false,
            }
        }
    }

    throw new UnsupportedEventError('storage.multiTokens.token')
}

export async function tokenCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const eventData = getEventData(item)
    if (!eventData) return undefined

    if (skipSave && item.call) {
        const token = await ctx.store.findOne(Token, {
            where: { id: `${eventData.collectionId}-${eventData.tokenId}` },
        })

        if (token) {
            token.createdAt = new Date(block.timestamp ?? 0)
            ctx.store.save(token)
        }

        return getEvent(item, eventData)
    }

    if (item.call) {
        const collection = await ctx.store.findOne(Collection, {
            where: { id: eventData.collectionId.toString() },
        })

        if (collection === null) {
            throwError(`[TokenCreated] We have not found collection ${eventData.collectionId.toString()}.`, 'fatal')
            return getEvent(item, eventData)
        }

        let callData = await getCallData(ctx, item.call, eventData)

        if (callData === undefined) {
            callData = await getTokenId(ctx, block, eventData.collectionId, eventData.tokenId)
        }

        const token = new Token({
            id: `${eventData.collectionId}-${eventData.tokenId}`,
            tokenId: eventData.tokenId,
            supply: 0n, // Supply is updated on Mint/Burn events
            cap: callData.cap,
            behavior: callData.behavior,
            isFrozen: isTokenFrozen(callData.freezeState),
            freezeState: callData.freezeState,
            minimumBalance: callData.minimumBalance,
            unitPrice: callData.unitPrice,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection,
            metadata: null,
            nonFungible: false,
            listingForbidden: callData.listingForbidden,
            accountDepositCount: callData.accountDepositCount ?? 0,
            anyoneCanInfuse: callData.anyoneCanInfuse ?? false,
            nativeMetadata: callData.nativeMetadata,
            infusion: callData.infusion ?? 0n,
            createdAt: new Date(block.timestamp ?? 0),
        })

        await ctx.store.save(token)
    }

    return getEvent(item, eventData)
}
