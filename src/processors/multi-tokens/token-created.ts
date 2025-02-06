import { hexToString } from '@polkadot/util'
import { UnsupportedEventError, throwError } from '../../common/errors'
import { events, calls, storage } from '../../types/generated'
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
} from '../../model'
import {
    DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_v500,
    FreezeState as FreezeState_v500,
    SufficiencyParam_Sufficient,
    TokenMarketBehavior,
} from '../../types/generated/v500'
import { DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_v600 } from '../../types/generated/v600'
import {
    TokenCap,
    DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_Enjin_v603,
} from '../../types/generated/matrixEnjinV603'
import { DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_Enjin_v1010 } from '../../types/generated/v1010'
import { DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_Enjin_v1012 } from '../../types/generated/matrixEnjinV1012'
import { CallItem, CommonContext, BlockHeader, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import * as mappings from './../../mappings'

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

    const account = await getOrCreateAccount(ctx, behavior.value.beneficiary)
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: behavior.value.percentage,
        }),
    })
}

async function getTokenId(ctx: CommonContext, block: BlockHeader, collectionId: bigint, tokenId: bigint) {
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

    throw new UnsupportedEventError('storage.multi-tokens.token')
}

export async function tokenCreated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const eventData = mappings.multiTokens.events.tokenCreated(item)
    if (!eventData) return undefined

    if (skipSave && item.call) {
        const token = await ctx.store.findOne(Token, {
            where: { id: `${eventData.collectionId}-${eventData.tokenId}` },
        })

        if (token) {
            token.createdAt = new Date(block.timestamp ?? 0)
            ctx.store.save(token)
        }

        return mappings.multiTokens.events.tokenCreatedEventModel(item, eventData)
    }

    if (item.call) {
        const collection = await ctx.store.findOne(Collection, {
            where: { id: eventData.collectionId.toString() },
        })

        if (collection === null) {
            throwError(`[TokenCreated] We have not found collection ${eventData.collectionId.toString()}.`, 'fatal')
            return mappings.multiTokens.events.tokenCreatedEventModel(item, eventData)
        }

        let callData = await mappings.multiTokens.calls.mint(ctx, item.call, eventData)

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

    return mappings.multiTokens.events.tokenCreatedEventModel(item, eventData)
}
