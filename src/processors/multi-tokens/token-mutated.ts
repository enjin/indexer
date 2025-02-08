import { throwError } from '../../common/errors'
import {
    Event as EventModel,
    NativeTokenMetadata,
    Royalty,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
} from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../common/types/contexts'
import { getOrCreateAccount } from '../../common/util/entities'
import { syncCollectionStats } from '../../jobs/collection-stats'
import * as mappings from './../../mappings'
import { isNonFungible } from '@enjin/indexer/processors/multi-tokens/utils/helpers'
import { TokenMarketBehavior } from '@enjin/indexer/types/generated/v100'

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

export async function tokenMutated(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = mappings.multiTokens.events.tokenMutated(item)
    if (skipSave) return mappings.multiTokens.events.tokenMutatedEventModel(item, data)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

    if (!token) {
        throwError(`[TokenMutated] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return mappings.multiTokens.events.tokenMutatedEventModel(item, data)
    }

    // TODO: Move all the parsing logics to the mapping classes
    if (data.mutation.listingForbidden.value !== undefined) {
        token.listingForbidden = data.mutation.listingForbidden.value
    }

    if (data.mutation.name !== undefined && data.mutation.name.value !== undefined) {
        token.nativeMetadata = new NativeTokenMetadata({
            decimalCount: token.nativeMetadata?.decimalCount ?? 0,
            symbol: token.nativeMetadata?.symbol ?? '',
            name: data.mutation.name.value,
        })
    }

    if (data.mutation.anyoneCanInfuse !== undefined && data.mutation.anyoneCanInfuse.value !== undefined) {
        token.anyoneCanInfuse = data.mutation.anyoneCanInfuse.value
    }

    if (data.mutation.behavior.__kind === 'SomeMutation') {
        token.behavior = data.mutation.behavior.value === undefined ? null : await getBehavior(ctx, data.mutation.behavior.value)
    }

    token.nonFungible = isNonFungible(token)
    token.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(token)

    syncCollectionStats(data.collectionId.toString())

    return mappings.multiTokens.events.tokenMutatedEventModel(item, data)
}
