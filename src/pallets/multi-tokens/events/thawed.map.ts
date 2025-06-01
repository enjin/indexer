import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensThawed } from '../../../model'
import { Frozen } from './frozen.type'
import { EventMapBuilder } from '../../event-map.builder'

export interface ThawedProcessData {
    tokenAccount?: any
    collectionAccount?: any
    token?: any
    collection?: any
    address?: string | null
    tokenId?: bigint | null
}

/**
 * Decode the Thawed event from the EventItem
 */
function decode(event: EventItem): Frozen {
    return match(event)
        .returnType<Frozen>()
        .when(
            () => multiTokens.thawed.matrixEnjinV603.is(event),
            () => multiTokens.thawed.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the Thawed event
 */
function notificationBody(item: EventItem, data: Frozen, result: ThawedProcessData): any {
    return {
        kind: data.freezeType,
        address: result.address,
        collectionId: data.collectionId.toString(),
        tokenId: result.tokenId,
        token: result.tokenId ? `${data.collectionId}-${result.tokenId}` : null,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the Thawed event
 */
function eventModel(item: EventItem, data: Frozen, result?: ThawedProcessData): EventModel | undefined {
    if (result === undefined && !item.extrinsic?.id) return undefined

    let tokenId: null | string = null
    if (data.freezeType.__kind !== 'Collection' && data.freezeType.__kind !== 'CollectionAccount') {
        tokenId = `${data.collectionId}-${data.freezeType.tokenId}`
    }

    return new EventModel({
        id: item.id,
        name: MultiTokensThawed.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: tokenId,
        data: new MultiTokensThawed(),
    })
}

export const thawedMap = EventMapBuilder.create<Frozen, ThawedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
