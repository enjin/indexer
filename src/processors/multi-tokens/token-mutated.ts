import { throwError } from '../../utils/errors'
import { Event as EventModel, NativeTokenMetadata, Token } from '../../model'
import { BlockHeader, CommonContext, EventItem } from '../../contexts'
// import { syncCollectionStats } from '../../jobs/collection-stats'
import * as mappings from './../../mappings'
import { isNonFungible } from './utils/helpers'

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

    if (data.mutation.listingForbidden.__kind === 'SomeMutation') {
        token.listingForbidden = data.mutation.listingForbidden.value
    }

    if (data.mutation.name !== undefined && data.mutation.name.__kind === 'SomeMutation') {
        token.nativeMetadata = new NativeTokenMetadata({
            decimalCount: token.nativeMetadata?.decimalCount ?? 0,
            symbol: token.nativeMetadata?.symbol ?? '',
            name: data.mutation.name.value,
        })
    }

    if (data.mutation.anyoneCanInfuse !== undefined && data.mutation.anyoneCanInfuse.__kind === 'SomeMutation') {
        token.anyoneCanInfuse = data.mutation.anyoneCanInfuse.value
    }

    if (data.mutation.behavior.__kind === 'SomeMutation') {
        // TODO: Fix this
        // token.behavior = data.mutation.behavior.value === undefined ? null : await getBehavior(ctx, data.mutation.behavior.value)
    }

    token.nonFungible = isNonFungible(token)
    token.updatedAt = new Date(block.timestamp ?? 0)
    await ctx.store.save(token)

    // syncCollectionStats(data.collectionId.toString())

    return mappings.multiTokens.events.tokenMutatedEventModel(item, data)
}
