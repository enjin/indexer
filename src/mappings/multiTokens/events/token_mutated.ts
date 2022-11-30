import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenMutatedEvent } from '../../../types/generated/events'
import { Royalty, Token, TokenBehaviorHasRoyalty, TokenBehaviorIsCurrency, TokenBehaviorType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { TokenMarketBehavior } from '../../../types/generated/efinityV3000'
import { Option } from '../../../types/generated/support'
import { TokenMarketBehavior_HasRoyalty } from '../../../types/generated/v6'
import { isNonFungible } from '../utils/helpers'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    behavior: Option<TokenMarketBehavior | undefined>
    listingForbidden: boolean | undefined
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensTokenMutatedEvent(ctx)

    if (event.isEfinityV3000) {
        const { collectionId, tokenId, mutation } = event.asEfinityV3000
        return {
            collectionId,
            tokenId,
            behavior: mutation.behavior,
            listingForbidden: mutation.listingForbidden,
        }
    }
    throw new UnknownVersionError(event.constructor.name)
}

async function getBehavior(
    behavior: TokenMarketBehavior,
    ctx: EventHandlerContext
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

export async function tokenMutated(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

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
            token.behavior = await getBehavior(data.behavior.value, ctx)
        }
    }

    token.nonFungible = isNonFungible(token)
    await ctx.store.save(token)
}
