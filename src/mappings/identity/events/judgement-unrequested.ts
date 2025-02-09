import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { JudgementUnrequested } from '@enjin/indexer/mappings/identity/events/types'

export function judgementUnrequested(event: EventItem): JudgementUnrequested {
    return match(event)
        .returnType<JudgementUnrequested>()
        .when(identity.judgementUnrequested.matrixEnjinV1000.is, identity.judgementUnrequested.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
