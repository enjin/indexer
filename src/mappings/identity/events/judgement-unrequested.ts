import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type JudgementUnrequestedEvent = {
    who: string
    registrarIndex: number
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<JudgementUnrequestedEvent>()
        .when(identity.judgementUnrequested.matrixEnjinV1000.is, () =>
            identity.judgementUnrequested.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(identity.judgementUnrequested)
        })
}
