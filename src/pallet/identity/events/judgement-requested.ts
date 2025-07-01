import { identity } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { JudgementRequested } from '~/pallet/identity/events/types'

export function judgementRequested(event: EventItem): JudgementRequested {
    return match(event)
        .returnType<JudgementRequested>()
        .when(
            () => identity.judgementRequested.matrixEnjinV1000.is(event),
            () => identity.judgementRequested.matrixEnjinV1000.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
