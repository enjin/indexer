import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { JudgementGiven } from './types'

export function judgementGiven(event: EventItem): JudgementGiven {
    return match(event)
        .returnType<JudgementGiven>()
        .when(identity.judgementGiven.matrixEnjinV1000.is, identity.judgementGiven.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
