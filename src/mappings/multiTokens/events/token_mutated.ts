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
import { TokenMarketBehavior, TokenMarketBehavior_HasRoyalty } from '../../../types/generated/efinityV3000'
import { Event } from '../../../types/generated/support'
import { isNonFungible } from '../utils/helpers'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Type_129, Type_132 } from '../../../types/generated/efinityV3012'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    behavior: Type_129
    listingForbidden: Type_132
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensTokenMutatedEvent(ctx, event)

    if (data.isV500) {
        const { collectionId, tokenId, mutation } = data.asV500
        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            listingForbidden: mutation.listingForbidden,
        }
    }

    if (data.isEfinityV3000) {
        const { collectionId, tokenId, mutation } = data.asEfinityV3000
        const behavior: Type_129 =
            mutation.behavior.__kind === 'None'
                ? {
                      __kind: 'NoMutation',
                  }
                : {
                      __kind: 'SomeMutation',
                      value: mutation.behavior.value,
                  }

        const listingForbidden: Type_132 =
            mutation.listingForbidden === undefined
                ? {
                      __kind: 'NoMutation',
                  }
                : {
                      __kind: 'SomeMutation',
                      value: mutation.listingForbidden,
                  }

        return {
            collectionId,
            tokenId,
            behavior,
            listingForbidden,
        }
    }

    if (data.isEfinityV3012) {
        const { collectionId, tokenId, mutation } = data.asEfinityV3012
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
    if (behavior.__kind === TokenBehaviorType.IsCurrency.toString()) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }

    const account = await getOrCreateAccount(ctx, (behavior as TokenMarketBehavior_HasRoyalty).value.beneficiary)
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: (behavior as TokenMarketBehavior_HasRoyalty).value.percentage,
        }),
    })
}

export async function tokenMutated(
    ctx: CommonContext,
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
    await ctx.store.save(token)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: token.id,
        data: new MultiTokensTokenMutated(),
    })
}
