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
import { Event } from '../../../types/generated/support'
import { isNonFungible } from '../utils/helpers'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { TokenMarketBehavior } from '../../../types/generated/v500'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensTokenMutatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        const { collectionId, tokenId, mutation } = data.asMatrixEnjinV603
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

function getEvent(
    item: EventItem<'MultiTokens.TokenMutated', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenMutated(),
    })
}

export async function tokenMutated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenMutated', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

    if (data.listingForbidden.__kind === 'SomeMutation') {
        token.listingForbidden = data.listingForbidden.value
    }

    if (data.behavior.__kind === 'SomeMutation') {
        if (!data.behavior.value) {
            token.behavior = null
        } else {
            token.behavior = await getBehavior(ctx, data.behavior.value)
        }
    }

    token.nonFungible = isNonFungible(token)
    ctx.store.save(token)

    return getEvent(item, data)
}
