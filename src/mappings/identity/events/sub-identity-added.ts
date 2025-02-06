import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type SubIdentityAddedEvent = {
    main: string
    sub: string
    deposit: bigint
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<SubIdentityAddedEvent>()
        .when(identity.subIdentityAdded.matrixEnjinV1000.is, () => identity.subIdentityAdded.matrixEnjinV1000.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(identity.subIdentityAdded)
        })
}
