import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenMutatedEvent } from '../../../types/generated/events'
import {
    Event as EventModel,
    Extrinsic,
    MultiTokensTokenMutated,
    Royalty,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
} from '../../../model'
import { TokenMarketBehavior } from '../../../types/generated/efinityV3000'
import { Event, Option } from '../../../types/generated/support'
import { TokenMarketBehavior_HasRoyalty } from '../../../types/generated/v6'
import { isNonFungible } from '../utils/helpers'
import { Context, getAccount } from '../../../processor'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    behavior: Option<TokenMarketBehavior | undefined>
    listingForbidden: boolean | undefined
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensTokenMutatedEvent(ctx, event)

    if (data.isEfinityV3000) {
        const { collectionId, tokenId, mutation } = data.asEfinityV3000
        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            listingForbidden: mutation.listingForbidden,
        }
    }
    throw new UnknownVersionError(data.constructor.name)
}

async function getBehavior(
    ctx: Context,
    behavior: TokenMarketBehavior
): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency.toString()) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }

    const account = await getAccount(ctx, (behavior as TokenMarketBehavior_HasRoyalty).value.beneficiary)
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: (behavior as TokenMarketBehavior_HasRoyalty).value.percentage,
        }),
    })
}

export async function tokenMutated(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenMutated', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

    if (data.listingForbidden) {
        token.listingForbidden = data.listingForbidden
    }

    if (data.behavior.__kind !== 'None') {
        if (!data.behavior.value) {
            token.behavior = null
        } else {
            token.behavior = await getBehavior(ctx, data.behavior.value)
        }
    }

    token.nonFungible = isNonFungible(token)
    await ctx.store.save(token)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: token.id,
        data: new MultiTokensTokenMutated(),
    })
}
