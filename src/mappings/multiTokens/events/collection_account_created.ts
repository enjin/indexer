import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionAccountCreatedEvent } from '../../../types/generated/events'
import { Collection, CollectionAccount, Event as EventModel, MultiTokensCollectionAccountCreated } from '../../../model'
// eslint-disable-next-line import/no-cycle
import { Context, getAccount } from '../../../processor'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensCollectionAccountCreatedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, accountId } = data.asEfinityV2
        return { collectionId, accountId }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function collectionAccountCreated(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionAccountCreated', { event: { args: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    const account = await getAccount(ctx, data.accountId)
    const collectionAccount = new CollectionAccount({
        id: `${data.collectionId}-${u8aToHex(data.accountId)}`,
        isFrozen: false,
        approvals: null,
        accountCount: 0, // TODO: Change fixed for now
        account,
        collection,
        createdAt: new Date(block.timestamp),
        updatedAt: new Date(block.timestamp),
    })

    await ctx.store.insert(collectionAccount)

    return new EventModel({
        id: item.event.id,
        data: new MultiTokensCollectionAccountCreated({
            collectionId: data.collectionId,
            account: account.id,
        }),
    })
}
