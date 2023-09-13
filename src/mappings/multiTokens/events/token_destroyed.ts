import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenDestroyedEvent } from '../../../types/generated/events'
import {
    AccountTokenEvent,
    Attribute,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingStatus,
    MultiTokensTokenDestroyed,
    Token,
    TraitToken,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { CollectionService } from '../../../services'
import { computeTraits } from '../../../jobs/compute-traits'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    caller: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensTokenDestroyedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function tokenDestroyed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenDestroyed', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (token) {
        // TODO: We are removing all events that are related to this token.
        // We should only update the events that have relationship so it is null.
        // await ctx.store.delete(Event, { tokenId: token.id })
        await Promise.all([
            ctx.store
                .getRepository(ListingStatus)
                .query(
                    'DELETE FROM listing_status USING listing WHERE listing_status.listing_id = listing.id AND listing.make_asset_id_id  = $1',
                    [token.id]
                ),
            ctx.store.delete(Listing, {
                makeAssetId: {
                    id: token.id,
                },
            }),
            ctx.store.delete(Listing, {
                takeAssetId: {
                    id: token.id,
                },
            }),
            ctx.store.delete(TraitToken, { token: { id: token.id } }),
            ctx.store.delete(AccountTokenEvent, { token: { id: token.id } }),
            ctx.store.delete(Attribute, {
                token: {
                    id: token.id,
                },
            }),
        ])
    }

    ctx.store.remove(token)
    new CollectionService(ctx.store).sync(data.collectionId.toString())
    computeTraits(data.collectionId.toString())

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: token.id,
        data: new MultiTokensTokenDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            caller: u8aToHex(data.caller),
        }),
    })
}
