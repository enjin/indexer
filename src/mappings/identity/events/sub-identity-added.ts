import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { SubIdentityAdded } from './types'

export function subIdentityAdded(event: EventItem): SubIdentityAdded {
    return match(event)
        .returnType<SubIdentityAdded>()
        .when(identity.subIdentityAdded.matrixEnjinV1000.is, identity.subIdentityAdded.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
