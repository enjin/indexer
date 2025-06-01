import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensClaimTokensCompleted } from '../../../model'
import { ClaimTokensCompleted } from './claim-tokens-completed.type'
import { EventMapBuilder } from '../../event-map.builder'

export interface ClaimTokensCompletedProcessData {
    claim: any
}

/**
 * Decode the ClaimTokensCompleted event from the EventItem
 */
function decode(event: EventItem): ClaimTokensCompleted {
    return match(event)
        .returnType<ClaimTokensCompleted>()
        .when(
            () => multiTokens.claimTokensCompleted.matrixEnjinV1000.is(event),
            () => multiTokens.claimTokensCompleted.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the ClaimTokensCompleted event
 */
function notificationBody(item: EventItem, data: ClaimTokensCompleted, result: ClaimTokensCompletedProcessData): any {
    return {
        account: data.destination,
        ethAccount: data.ethereumAddress,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the ClaimTokensCompleted event
 */
function eventModel(item: EventItem, data: ClaimTokensCompleted, result?: ClaimTokensCompletedProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensClaimTokensCompleted.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensClaimTokensCompleted({
            account: data.destination,
            ethAccount: data.ethereumAddress,
        }),
    })
}

export const claimTokensCompletedMap = EventMapBuilder.create<ClaimTokensCompleted, ClaimTokensCompletedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
