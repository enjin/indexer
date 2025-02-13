import { identity } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { JudgementUnrequested } from './types'

export function judgementUnrequested(event: EventItem): JudgementUnrequested {
    return match(event)
        .returnType<JudgementUnrequested>()
        .when(
            () => identity.judgementUnrequested.matrixEnjinV1000.is(event),
            () => identity.judgementUnrequested.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
