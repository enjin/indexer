import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenMutatedEvent } from '../../../types/generated/events'
import {
    Collection,
    MarketPolicy,
    Royalty,
    RoyaltyCurrency,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency, TokenBehaviorType,
} from '../../../model'
import { encodeId } from '../../../common/tools'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { DefaultRoyalty, TokenMarketBehavior } from '../../../types/generated/efinityV3000'
import { ChainContext } from '../../../types/generated/support'
import { TokenMarketBehavior_HasRoyalty } from '../../../types/generated/v6'


interface EventData {
    collectionId: bigint
    tokenId: bigint
    behavior: TokenMarketBehavior | undefined
    listingForbidden: boolean | undefined
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensTokenMutatedEvent(ctx)

    if (event.isEfinityV3000) {
        const { collectionId, tokenId, mutation } = event.asEfinityV3000
        return {
            collectionId: collectionId,
            tokenId: tokenId,
            behavior: mutation.behavior,
            listingForbidden: mutation.listingForbidden,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

async function getBehavior(behavior: TokenMarketBehavior, ctx: ChainContext): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency.toString()) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }
    const address = encodeId((behavior as TokenMarketBehavior_HasRoyalty).value.beneficiary)
    const account = await getOrCreateAccount((ctx as CommonHandlerContext), address)

    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: (behavior as TokenMarketBehavior_HasRoyalty).value.percentage,
        })
    })
}

export async function handleTokenMutated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (data.listingForbidden) {
        token.listingForbidden = data.listingForbidden
    }

    if (data.behavior) {
        token.behavior = await getBehavior(data.behavior, ctx)
    }

    await ctx.store.save(token)
}
