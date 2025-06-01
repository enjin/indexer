import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { Event as EventModel, Extrinsic, MultiTokensClaimTokensInitiated } from '../../../model'
import { ClaimTokensInitiated } from './claim-tokens-initiated.type'
import { EventMapBuilder } from '../../event-map.builder'

export interface ClaimTokensInitiatedProcessData {
    account: any
    claimExists?: any
}

/**
 * Decode the ClaimTokensInitiated event from the EventItem
 */
function decode(event: EventItem): ClaimTokensInitiated {
    return match(event)
        .returnType<ClaimTokensInitiated>()
        .when(
            () => multiTokens.claimTokensInitiated.matrixEnjinV1000.is(event),
            () => multiTokens.claimTokensInitiated.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}

/**
 * Create the notification body for the ClaimTokensInitiated event
 */
function notificationBody(item: EventItem, data: ClaimTokensInitiated, result: ClaimTokensInitiatedProcessData): any {
    return {
        account: data.accountId,
        ethAccount: data.ethereumAddress,
        extrinsic: item.extrinsic?.id,
    }
}

/**
 * Create the event model for the ClaimTokensInitiated event
 */
function eventModel(item: EventItem, data: ClaimTokensInitiated, result?: ClaimTokensInitiatedProcessData): EventModel | undefined {
    return new EventModel({
        id: item.id,
        name: MultiTokensClaimTokensInitiated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new MultiTokensClaimTokensInitiated({
            account: data.accountId,
            ethAccount: data.ethereumAddress,
        }),
    })
}

export const claimTokensInitiatedMap = EventMapBuilder.create<ClaimTokensInitiated, ClaimTokensInitiatedProcessData>()
    .withDecoder(decode)
    .withNotification(notificationBody)
    .withEventModel(eventModel)
    .build()
