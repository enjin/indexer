import { multiTokens } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import {
    Account,
    AccountTokenEvent,
    AccountTokenEventMeta,
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensInfused,
    Token,
} from '../../../model'
import { Infused } from '../types'
import { unwrapAccount } from '../../../utils/entities'
import { generateAccountTokenEventToken, generateAccountTokenEventCollection } from '../../../utils/event'

export function infused(event: EventItem): InfusedType {
    return match(event)
        .returnType<InfusedType>()
        .when(
            () => multiTokens.infused.matrixEnjinV1022.is(event),
            () => multiTokens.infused.matrixEnjinV1022.decode(event)
        )
        .when(
            () => multiTokens.infused.matrixEnjinV1012.is(event),
            () => multiTokens.infused.matrixEnjinV1012.decode(event)
        )
        .when(
            () => multiTokens.infused.matrixV1020.is(event),
            () => multiTokens.infused.matrixV1020.decode(event)
        )
        .when(
            () => multiTokens.infused.matrixV1010.is(event),
            () => multiTokens.infused.matrixV1010.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
