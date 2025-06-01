import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensCollectionMutated } from '../../../model'
import { CollectionMutated } from './collection-mutated.type'
import { EventMapBuilder } from '../../event-map.builder'

export interface CollectionMutatedProcessData {
    collection: any
    listings?: any[]
    royaltyCurrencies?: any[]
    previousPercentage?: number
    currentPercentage?: number
}

/**
 * Decode the CollectionMutated event from the EventItem
 */
function decode(event: EventItem): CollectionMutated {
    return match(event)
        .returnType<CollectionMutated>()
        .when(
            () => multiTokens.collectionMutated.matrixEnjinV1022.is(event),
            () => multiTokens.collectionMutated.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.collectionMutated.matrixEnjinV603.is(event),
            () => multiTokens.collectionMutated.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.collectionMutated.matrixV1020.is(event),
            () => multiTokens.collectionMutated.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.collectionMutated.v1050.is(event),
            () => multiTokens.collectionMutated.v1050.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the CollectionMutated event
 */
function notificationBody(item: EventItem, data: CollectionMutated, result: CollectionMutatedProcessData): any {
    const notificationBody: any = {
        collectionId: data.collectionId,
        extrinsic: item.extrinsic?.id,
    }

    // Add royalty increase notification data if applicable
    if (result.listings && result.previousPercentage !== undefined && result.currentPercentage !== undefined) {
        notificationBody.previousRoyalty = result.previousPercentage
        notificationBody.newRoyalty = result.currentPercentage
        notificationBody.sellers = result.listings.map((listing) => listing.seller.address)
        notificationBody.listings = result.listings.map((listing) => listing.id)
    }

    return notificationBody
}

/**
 * Create the event model for the CollectionMutated event
 */
function eventModel(item: EventItem, data: CollectionMutated, result?: CollectionMutatedProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensCollectionMutated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: null,
        data: new MultiTokensCollectionMutated({
            collectionId: data.collectionId,
        }),
    })
}

export const collectionMutatedMap = EventMapBuilder.create<CollectionMutated, CollectionMutatedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
