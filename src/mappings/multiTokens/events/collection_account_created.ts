import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import * as Sentry from '@sentry/node'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionAccountCreatedEvent } from '../../../types/generated/events'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensCollectionAccountCreated,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    collectionId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensCollectionAccountCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.CollectionAccountCreated', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionAccountCreated({
            collectionId: data.collectionId,
            account: u8aToHex(data.accountId),
        }),
    })
}

export async function collectionAccountCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionAccountCreated', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${u8aToHex(data.accountId)}` },
    })

    if (skipSave) {
        if (collectionAccount) {
            return getEvent(item, data)
        }

        // This collection account was probably deleted before the LAST_HEIGHT when it was synced, and thus does not exist here.
        // So let the script continue, so it creates the collection account that will probably be deleted later
        Sentry.captureMessage(
            `[CollectionAccountCreated] We have not found collection account ${data.collectionId}-${u8aToHex(data.accountId)}.`,
            'fatal'
        )
    }

    const account = await getOrCreateAccount(ctx, data.accountId)
    const newCollectionAccount = new CollectionAccount({
        id: `${data.collectionId}-${u8aToHex(data.accountId)}`,
        isFrozen: false,
        approvals: null,
        accountCount: 0,
        account,
        collection: new Collection({ id: data.collectionId.toString() }),
        createdAt: new Date(block.timestamp),
        updatedAt: new Date(block.timestamp),
    })

    await ctx.store.insert(CollectionAccount, newCollectionAccount as any)

    return getEvent(item, data)
}
