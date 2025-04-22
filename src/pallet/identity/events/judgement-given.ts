import { identity } from '../../../type/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../util/errors'
import { match } from 'ts-pattern'
import { JudgementGiven } from './types'

export function judgementGiven(event: EventItem): JudgementGiven {
    return match(event)
        .returnType<JudgementGiven>()
        .when(
            () => identity.judgementGiven.matrixEnjinV1000.is(event),
            () => identity.judgementGiven.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
