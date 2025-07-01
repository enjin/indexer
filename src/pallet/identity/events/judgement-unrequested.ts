import { identity } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { JudgementUnrequested } from '~/pallet/identity/events/types'

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
