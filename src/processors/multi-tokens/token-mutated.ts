import { hexToString } from '@polkadot/util'
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

    if (data.listingForbidden.__kind === 'SomeMutation') {
        token.listingForbidden = data.listingForbidden.value
    }

    if (data.name && data.name.__kind === 'SomeMutation') {
        token.nativeMetadata = new NativeTokenMetadata({
            decimalCount: token.nativeMetadata?.decimalCount ?? 0,
            symbol: hexToString(token.nativeMetadata?.symbol) ?? '',
            name: hexToString(data.name.value),
        })
    }

    if (data.anyoneCanInfuse && data.anyoneCanInfuse.__kind === 'SomeMutation') {
        token.anyoneCanInfuse = data.anyoneCanInfuse.value
    }

    if (data.behavior.__kind === 'SomeMutation') {
        if (!data.behavior.value) {
            token.behavior = null
        } else {
            token.behavior = await getBehavior(ctx, data.behavior.value)
        }
    }

    token.nonFungible = isNonFungible(token)
    token.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(token)

    await syncCollectionStats(data.collectionId.toString())

    return mappings.multiTokens.events.tokenMutatedEventModel(item, data)
}
