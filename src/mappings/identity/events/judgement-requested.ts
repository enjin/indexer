import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { JudgementRequested } from '@enjin/indexer/mappings/identity/events/types'

export function judgementRequested(event: EventItem): JudgementRequested {
    return match(event)
        .returnType<JudgementRequested>()
        .when(identity.judgementRequested.matrixEnjinV1000.is, identity.judgementRequested.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
