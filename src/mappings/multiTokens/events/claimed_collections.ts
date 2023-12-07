import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensClaimedCollectionsEvent } from '../../../types/generated/events'
import { Collection, Event as EventModel, Extrinsic, MultiTokensClaimedCollections } from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensClaimedCollectionsEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    if (data.isV1000) {
        return data.asV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function claimedCollections(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.ClaimedCollections', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const account = await getOrCreateAccount(ctx, data.accountId)

    await ctx.store
        .createQueryBuilder()
        .update(Collection)
        .set({ owner: account })
        .where('collectionId IN (:...collectionIds)', { collectionIds: data.collectionIds })
        .execute()

    if (item.event.extrinsic) {
        Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                account: u8aToHex(data.accountId),
                ethAccount: u8aToHex(data.ethereumAddress),
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensClaimedCollections({
            account: u8aToHex(data.accountId),
            ethAccount: u8aToHex(data.ethereumAddress),
            collectionIds: data.collectionIds,
        }),
    })
}
