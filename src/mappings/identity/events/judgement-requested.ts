import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type JudgementRequestedEvent = {
    who: string
    registrarIndex: number
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<JudgementRequestedEvent>()
        .when(identity.judgementRequested.matrixEnjinV1000.is, () => identity.judgementRequested.matrixEnjinV1000.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(identity.judgementRequested)
        })
}
