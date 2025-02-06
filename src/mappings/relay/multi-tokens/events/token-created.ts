import { hexToString } from '@polkadot/util'
import { UnknownVersionError, throwError } from '../../../common/errors'
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
import { CallItem, CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { TokenMarketBehavior as TokenMarketBehavior1050 } from '../../../types/generated/v1050'
import {
    TokenCap as TokenCap_v1032,
    FreezeState as FreezeState_v1032,
    TokenMarketBehavior as TokenMarketBehavior1032,
    DefaultMintParams_CreateToken as DefaultMintParams_CreateToken_v1032,
} from '../../../types/generated/enjinV1032'
import {
    TokenCap as TokenCap_v100,
    DefaultMintParams_CreateToken as DefaultMintParams_CreateToken_v100,
} from '../../../types/generated/enjinV100'

type TokenMarketBehavior = TokenMarketBehavior1032 | TokenMarketBehavior1050

export function getCapType(cap: TokenCap_v1032 | TokenCap_v100) {
    if (cap.__kind === CapType.Supply) {
        return new TokenCapSupply({
            type: CapType.Supply,
            supply: cap.value,
        })
    }

    return new TokenCapSingleMint({
        type: CapType.SingleMint,
    })
}

export function getFreezeState(state: FreezeState_v1032): FreezeState | null {
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
        call.name === 'FuelTanks.dispatch' ||
        call.name === 'NominationPools.create'
    ) {
        return undefined
    }

    if (call.name === 'MultiTokens.batch_mint') {
        if (calls.multiTokens.batchMint.v1050.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.v1050.decode(call)

            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParams_CreateToken_v1032
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

        if (calls.multiTokens.batchMint.enjinV1032.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.enjinV1032.decode(call)

            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParams_CreateToken_v1032
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

        if (calls.multiTokens.batchMint.v1030.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.v1030.decode(call)

            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParams_CreateToken_v1032
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

        if (calls.multiTokens.batchMint.enjinV100.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.enjinV100.decode(call)
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParams_CreateToken_v100
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = params.sufficiency.minimumBalance
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

        if (calls.multiTokens.batchMint.v102.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.v102.decode(call)
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParams_CreateToken_v100
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = params.sufficiency.minimumBalance
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

        if (calls.multiTokens.batchMint.v100.is(call)) {
            const { collectionId, recipients } = calls.multiTokens.batchMint.v100.decode(call)
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParams_CreateToken_v100
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = params.sufficiency.minimumBalance
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

        throw new UnknownVersionError(calls.multiTokens.batchMint.name)
    }

    if (call.name === 'MultiTokens.force_mint') {
        if (calls.multiTokens.forceMint.v1050.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.v1050.decode(call)
            const { params } = calls.multiTokens.forceMint.v1050.decode(call)
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

        if (calls.multiTokens.forceMint.enjinV1032.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.enjinV1032.decode(call)
            const { params } = calls.multiTokens.forceMint.enjinV1032.decode(call)
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

        if (calls.multiTokens.forceMint.enjinV1023.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.enjinV1023.decode(call)
            const params = calls.multiTokens.forceMint.enjinV1023.decode(call).params
            if (params.__kind !== 'CreateToken') {
                throw new Error('Invalid params')
            }
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = params.sufficiency.minimumBalance
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

        if (calls.multiTokens.forceMint.enjinV101.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.enjinV101.decode(call)
            const params = calls.multiTokens.forceMint.enjinV101.decode(call).params
            if (params.__kind !== 'CreateToken') {
                throw new Error('Invalid params')
            }
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = params.sufficiency.minimumBalance
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

        if (calls.multiTokens.forceMint.v1030.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.v1030.decode(call)
            const { params } = calls.multiTokens.forceMint.v1030.decode(call)
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

        if (calls.multiTokens.forceMint.v1023.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.v1023.decode(call)
            const params = calls.multiTokens.forceMint.v1023.decode(call).params
            if (params.__kind !== 'CreateToken') {
                throw new Error('Invalid params')
            }
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = params.sufficiency.minimumBalance
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

        if (calls.multiTokens.forceMint.v105.is(call)) {
            const { collectionId } = calls.multiTokens.forceMint.v105.decode(call)
            const params = calls.multiTokens.forceMint.v105.decode(call).params
            if (params.__kind !== 'CreateToken') {
                throw new Error('Invalid params')
            }
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = params.sufficiency.minimumBalance
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

        throw new UnknownVersionError(calls.multiTokens.forceMint.name)
    }

    if (call.name === 'MultiTokens.mint') {
        if (calls.multiTokens.mint.v1050.is(call)) {
            const { collectionId } = calls.multiTokens.mint.v1050.decode(call)
            const { params } = calls.multiTokens.mint.v1050.decode(call)
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

        if (calls.multiTokens.mint.enjinV1032.is(call)) {
            const { collectionId } = calls.multiTokens.mint.enjinV1032.decode(call)
            const { params } = calls.multiTokens.mint.enjinV1032.decode(call)
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

        if (calls.multiTokens.mint.enjinV100.is(call)) {
            const { collectionId } = calls.multiTokens.mint.enjinV100.decode(call)
            const { params } = calls.multiTokens.mint.enjinV100.decode(call)
            if (params.__kind !== 'CreateToken') {
                throw new Error('Invalid params')
            }
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = params.sufficiency.minimumBalance
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

        if (calls.multiTokens.mint.v1030.is(call)) {
            const { collectionId } = calls.multiTokens.mint.v1030.decode(call)
            const { params } = calls.multiTokens.mint.v1030.decode(call)
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

        if (calls.multiTokens.mint.v102.is(call)) {
            const { collectionId } = calls.multiTokens.mint.v102.decode(call)
            const { params } = calls.multiTokens.mint.v102.decode(call)
            if (params.__kind !== 'CreateToken') {
                throw new Error('Invalid params')
            }
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = params.sufficiency.minimumBalance
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

        if (calls.multiTokens.mint.v100.is(call)) {
            const { collectionId } = calls.multiTokens.mint.v100.decode(call)
            const { params } = calls.multiTokens.mint.v100.decode(call)
            if (params.__kind !== 'CreateToken') {
                throw new Error('Invalid params')
            }
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = params.sufficiency.minimumBalance
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

        throw new UnknownVersionError(calls.multiTokens.mint.name)
    }

    throw new UnknownVersionError(call.name)
}

function getEventData(event: EventItem) {
    if (events.multiTokens.tokenCreated.enjinV100.is(event)) {
        const { collectionId, tokenId, issuer, initialSupply } = events.multiTokens.tokenCreated.enjinV100.decode(event)
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

    throw new UnknownVersionError(events.multiTokens.tokenCreated.name)
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
    if (storage.multiTokens.tokens.enjinV1032.is(block)) {
        const data = await storage.multiTokens.tokens.enjinV1032.get(block, collectionId, tokenId)

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

    if (storage.multiTokens.tokens.enjinV100.is(block)) {
        const data = await storage.multiTokens.tokens.enjinV100.get(block, collectionId, tokenId)

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

    if (storage.multiTokens.tokens.v1050.is(block)) {
        const data = await storage.multiTokens.tokens.v1050.get(block, collectionId, tokenId)

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

    if (storage.multiTokens.tokens.v1030.is(block)) {
        const data = await storage.multiTokens.tokens.v1030.get(block, collectionId, tokenId)

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

    if (storage.multiTokens.tokens.v102.is(block)) {
        const data = await storage.multiTokens.tokens.v102.get(block, collectionId, tokenId)

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

    if (storage.multiTokens.tokens.v100.is(block)) {
        const data = await storage.multiTokens.tokens.v100.get(block, collectionId, tokenId)

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

    throw new UnknownVersionError('storage.multiTokens.token')
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
            supply: 0n,
            cap: callData.cap,
            behavior: callData.behavior,
            isFrozen: isTokenFrozen(callData.freezeState),
            freezeState: callData.freezeState,
            minimumBalance: callData.minimumBalance,
            unitPrice: callData.unitPrice,
            mintDeposit: 0n,
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
