import { throwFatalError } from '~/util/errors'
import {
    Collection,
    NativeTokenMetadata,
    RoyaltyBeneficiary,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
} from '~/model'
import { Block, CommonContext, EventItem } from '~/contexts'
import * as mappings from '~/pallet/index'
import { CreatePool } from '~/pallet/nomination-pools/calls'
import { BatchMint, ForceMint, Mint } from '~/pallet/multi-tokens/calls'
import { TokenCreated } from '~/pallet/multi-tokens/events'
import { TokenMarketBehavior as TokenMarketBehavior500 } from '~/type/matrixV500'
import { TokenMarketBehavior as TokenMarketBehavior1020 } from '~/type/matrixV1020'
import { getOrCreateAccount } from '~/util/entities'
import { getCapType, getFreezeState, isTokenFrozen } from '~/synchronize/common'
import { EventHandlerResult } from '~/processor.handler'
import { isDispatchCall, unwrapFuelTankCall } from '~/pallet/fuel-tanks/utils'
import { Batch } from '~/pallet/matrix-utility/calls'

type TokenMarketBehavior = TokenMarketBehavior500 | TokenMarketBehavior1020

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
            return new RoyaltyBeneficiary({
                accountId: (await getOrCreateAccount(ctx, v.beneficiary)).id,
                percentage: v.percentage,
            })
        })
    )

    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        beneficiaries: beneficiariesWithAccount,
    })
}

async function tokenFromCall(
    ctx: CommonContext,
    block: Block,
    event: TokenCreated,
    call: Mint | ForceMint | CreatePool
): Promise<Token> {
    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: event.collectionId.toString() },
    })

    const tokenCall = call

    if (!collection) {
        throwFatalError(`[TokenCreated] We have not found collection ${event.collectionId.toString()}.`)
    }

    const token = new Token({
        id: `${event.collectionId}-${event.tokenId}`,
        tokenId: event.tokenId,
        supply: 0n, // Updated on `Minted`
        cap: null, // params.cap,
        behavior: null, // params.behavior,
        isFrozen: false, // isTokenFrozen(params.freezeState),
        freezeState: null, // params.freezeState != undefined ? FreezeState[params.freezeState.__kind] : null,
        minimumBalance: 1n,
        unitPrice: 1n,
        mintDeposit: 0n, // TODO: Fixed for now
        attributeCount: 0,
        collection,
        metadata: null,
        nonFungible: false,
        listingForbidden: false,
        accountDepositCount: 0,
        anyoneCanInfuse: false,
        nativeMetadata: null,
        infusion: 0n, // Updated on `Infused event`
        tokenGroupTokens: [],
        createdAt: new Date(block.timestamp ?? 0),
    })

    let tokenParams = null

    if ('capacity' in tokenCall) {
        const data = await mappings.multiTokens.storage.tokens(block, {
            collectionId: event.collectionId,
            tokenId: event.tokenId,
        })

        if (data) {
            tokenParams = data
        }
    }

    if ('params' in tokenCall) {
        tokenParams = tokenCall.params

        if ('sufficiency' in tokenParams) {
            token.minimumBalance =
                tokenParams.sufficiency?.__kind === 'Sufficient' ? tokenParams.sufficiency.minimumBalance : 1n
            token.unitPrice =
                tokenParams.sufficiency?.__kind === 'Insufficient' ? (tokenParams.sufficiency.unitPrice ?? 1n) : 1n
        }

        if ('listingForbidden' in tokenParams) {
            token.listingForbidden = tokenParams.listingForbidden
        }

        if ('accountDepositCount' in tokenParams) {
            token.accountDepositCount = tokenParams.accountDepositCount ?? 0
        }

        if ('anyoneCanInfuse' in tokenParams) {
            token.anyoneCanInfuse = tokenParams.anyoneCanInfuse === undefined ? false : tokenParams.anyoneCanInfuse
        }

        if ('metadata' in tokenParams) {
            token.nativeMetadata =
                tokenParams.metadata !== undefined ? new NativeTokenMetadata(tokenParams.metadata) : null
        }

        if ('behavior' in tokenParams) {
            token.behavior =
                tokenParams.behavior !== undefined
                    ? await getBehavior(ctx, tokenParams.behavior as TokenMarketBehavior)
                    : null
        }

        if ('cap' in tokenParams) {
            token.cap = tokenParams.cap ? getCapType(tokenParams.cap) : null
        }

        if ('freezeState' in tokenParams) {
            const freezeState = tokenParams.freezeState ? getFreezeState(tokenParams.freezeState) : null
            token.freezeState = freezeState
            token.isFrozen = isTokenFrozen(freezeState)
        }
    }

    return token
}

async function tokenFromBatchCall(
    ctx: CommonContext,
    block: Block,
    event: TokenCreated,
    call: BatchMint
): Promise<Token[]> {
    const tokens = await Promise.all(
        call.recipients.map(async (recipient) => {
            return tokenFromCall(ctx, block, event, {
                recipient: {
                    __kind: 'Id',
                    value: recipient.accountId,
                },
                collectionId: call.collectionId,
                params: recipient.params,
            })
        })
    )

    return tokens
}

export async function tokenCreated(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave: boolean
): Promise<EventHandlerResult> {
    const event = mappings.multiTokens.events.tokenCreated(item)

    if (skipSave && item.call) {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${event.collectionId}-${event.tokenId}` },
        })

        if (token) {
            token.createdAt = new Date(block.timestamp ?? 0)
            await ctx.store.save(token)
        }

        return mappings.multiTokens.events.tokenCreatedEventModel(item, event)
    }

    if (item.call && isDispatchCall(item.call)) {
        const unwrappedCall = unwrapFuelTankCall(item.call) as Batch
        // @ts-ignore
        if (unwrappedCall?.__kind === 'batch') {
            const batchMintCall = unwrappedCall.calls[0].value
            if (batchMintCall.__kind === 'batch_mint') {
                const tokens = await tokenFromBatchCall(ctx, block, event, batchMintCall)
                await ctx.store.save(tokens)

                return mappings.multiTokens.events.tokenCreatedEventModel(item, event)
            }
        }
    }

    if (item.call) {
        const call = mappings.multiTokens.utils.anyMint(item.call, event.collectionId, event.tokenId)
        const token = await tokenFromCall(ctx, block, event, call)
        await ctx.store.save(token)
    }

    return mappings.multiTokens.events.tokenCreatedEventModel(item, event)
}
