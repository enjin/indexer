import { throwFatalError } from '../../../util/errors'
import { Event as EventModel, NativeTokenMetadata, Token } from '../../../model'
import { Block, CommonContext, EventItem } from '../../../contexts'
import * as mappings from '../../index'
import { isNonFungible } from '../../../util/helpers'
import { QueueUtils } from '../../../queue'

export async function tokenMutated(
    ctx: CommonContext,
    block: Block,
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
        throwFatalError(`[TokenMutated] We have not found token ${data.collectionId}-${data.tokenId}.`)
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

    // console.log('Dispatching from token mutated')
    QueueUtils.dispatchComputeStats(data.collectionId.toString())

    return mappings.multiTokens.events.tokenMutatedEventModel(item, data)
}
