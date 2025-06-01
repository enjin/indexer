import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensClaimedCollections } from '../../../model'
import { ClaimedCollections } from './claimed-collections.type'
import { EventMapBuilder } from '../../event-map.builder'

export interface ClaimedCollectionsProcessData {
    account: any
    collections: any[]
}

/**
 * Decode the ClaimedCollections event from the EventItem
 */
function decode(event: EventItem): ClaimedCollections {
    return match(event)
        .returnType<ClaimedCollections>()
        .when(
            () => multiTokens.claimedCollections.matrixEnjinV1000.is(event),
            () => multiTokens.claimedCollections.matrixEnjinV1000.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.matrixEnjinV603.is(event),
            () => multiTokens.claimedCollections.matrixEnjinV603.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.matrixV1000.is(event),
            () => multiTokens.claimedCollections.matrixV1000.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.matrixV604.is(event),
            () => multiTokens.claimedCollections.matrixV604.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.enjinV1021.is(event),
            () => multiTokens.claimedCollections.enjinV1021.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.enjinV101.is(event),
            () => multiTokens.claimedCollections.enjinV101.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.v1021.is(event),
            () => multiTokens.claimedCollections.v1021.decode(event)
        )
        .when(
            () => multiTokens.claimedCollections.v106.is(event),
            () => multiTokens.claimedCollections.v106.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the ClaimedCollections event
 */
function notificationBody(item: EventItem, data: ClaimedCollections, result: ClaimedCollectionsProcessData): any {
    return {
        account: data.accountId,
        ethAccount: data.ethereumAddress,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the ClaimedCollections event
 */
function eventModel(item: EventItem, data: ClaimedCollections, result?: ClaimedCollectionsProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensClaimedCollections.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensClaimedCollections({
            account: data.accountId,
            ethAccount: data.ethereumAddress,
            collectionIds: data.collectionIds.map((id) => {
                return typeof id == 'bigint' ? id : id.native
            }),
        }),
    })
}

export const claimedCollectionsMap = EventMapBuilder.create<ClaimedCollections, ClaimedCollectionsProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
