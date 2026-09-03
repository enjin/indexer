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
import { ForceMint, Mint } from '~/pallet/multi-tokens/calls'
import { TokenCreated } from '~/pallet/multi-tokens/events'
import { getOrCreateAccount } from '~/util/entities'
import { getCapType, getFreezeState, isTokenFrozen } from '~/synchronize/common'
import { EventHandlerResult } from '~/processor.handler'
import { isDispatchCall, unwrapFuelTankCall } from '~/pallet/fuel-tanks/utils'
import { DefaultMintParams, FlexibleMintParams, TokenMarketBehavior } from '~/pallet/common/types'
import { hexToString } from '@polkadot/util'
import { safeString } from '~/util/tools'
import { Token as StoredToken } from '~/pallet/multi-tokens/storage/types'
import { calls } from '~/type'
import { selectTokenCreationCall, unwrapFlexibleMintParams } from '~/pallet/multi-tokens/processors/token-created-call'
import { QueueUtils } from '~/queue'

type TokenParams = DefaultMintParams | FlexibleMintParams | StoredToken

async function getBehavior(
    ctx: CommonContext,
    behavior: TokenMarketBehavior
): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === 'IsCurrency') {
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
    call?: Mint | ForceMint | CreatePool,
    useStorage = false
): Promise<Token> {
    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: event.collectionId.toString() },
        relations: {
            attributes: true,
        },
    })

    if (!collection) {
        throwFatalError(`[TokenCreated] We have not found collection ${event.collectionId.toString()}.`)
    }

    const existingToken = await ctx.store.findOne<Token>(Token, {
        where: { id: `${event.collectionId}-${event.tokenId}` },
    })

    let existingSupply = 0n
    if (existingToken) {
        existingSupply = existingToken.supply
    }

    const token = new Token({
        id: `${event.collectionId}-${event.tokenId}`,
        hidden: false,
        tokenId: event.tokenId,
        supply: existingSupply, // Updated on `Minted`
        cap: null, // params.cap,
        behavior: null, // params.behavior,
        isFrozen: false, // isTokenFrozen(params.freezeState),
        freezeState: null, // params.freezeState != undefined ? FreezeState[params.freezeState.__kind] : null,
        minimumBalance: 1n,
        unitPrice: 1n,
        mintDeposit: 0n, // TODO: Fixed for now
        attributeCount: 0,
        creationSupply: existingSupply,
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

    let tokenParams: TokenParams | undefined
    if (useStorage || (call && 'capacity' in call)) {
        tokenParams = await mappings.multiTokens.storage.tokens(block, {
            collectionId: event.collectionId,
            tokenId: event.tokenId,
        })
    } else if (call && 'params' in call) {
        tokenParams = unwrapFlexibleMintParams(call.params)
    }

    if (tokenParams) {
        if ('sufficiency' in tokenParams) {
            if (tokenParams.sufficiency?.__kind === 'Sufficient' && 'minimumBalance' in tokenParams.sufficiency) {
                token.minimumBalance = tokenParams.sufficiency.minimumBalance
            }
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
                tokenParams.metadata !== undefined && !('__kind' in tokenParams.metadata)
                    ? new NativeTokenMetadata({
                          decimalCount: tokenParams.metadata.decimalCount,
                          symbol: safeString(hexToString(tokenParams.metadata.symbol)),
                          name: safeString(hexToString(tokenParams.metadata.name)),
                      })
                    : null
        }

        const behavior =
            'behavior' in tokenParams
                ? tokenParams.behavior
                : 'marketBehavior' in tokenParams
                  ? tokenParams.marketBehavior
                  : undefined
        if (behavior !== undefined) {
            token.behavior = await getBehavior(ctx, behavior)
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

    await checkMetadataInheritance(token)

    return token
}

function unwrapComplexMintCall(item: EventItem): { call: unknown } | undefined {
    if (!item.call) return undefined
    if (isDispatchCall(item.call)) return { call: unwrapFuelTankCall(item.call) }
    if (item.call.name === calls.matrixUtility.batch.name) {
        return { call: mappings.matrixUtility.calls.batch(item.call) }
    }
    return undefined
}

async function checkMetadataInheritance(token: Token): Promise<void> {
    const uriAttribute = token.collection.attributes.find((attribute) => attribute.key === 'uri')

    if (!uriAttribute?.value.includes('{id}')) return

    await QueueUtils.dispatchComputeMetadata({
        id: token.id,
        type: 'token',
        force: true,
        traits: true,
        delay: 10000,
    })
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

    if (item.call) {
        const complexCall = unwrapComplexMintCall(item)
        // Encoded children include failed and unexecuted calls. Trust call parameters only when one recipient matches
        // the finalized event; otherwise hydrate that event's token from canonical storage.
        const call =
            complexCall === undefined
                ? mappings.multiTokens.utils.anyMint(item.call, event.collectionId, event.tokenId)
                : selectTokenCreationCall(complexCall.call, event)
        const token = await tokenFromCall(ctx, block, event, call, complexCall !== undefined && call === undefined)
        await ctx.store.save(token)
    }

    return mappings.multiTokens.events.tokenCreatedEventModel(item, event)
}
