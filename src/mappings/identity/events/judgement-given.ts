import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type JudgementGivenEvent = {
    target: string
    registrarIndex: number
}

export function judgementGiven(event: EventItem): JudgementGivenEvent {
    return match(event)
        .returnType<JudgementGivenEvent>()
        .when(identity.judgementGiven.matrixEnjinV1000.is, () => identity.judgementGiven.matrixEnjinV1000.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
