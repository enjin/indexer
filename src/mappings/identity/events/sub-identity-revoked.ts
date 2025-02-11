import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { SubIdentityRevoked } from './types'

export function subIdentityRevoked(event: EventItem): SubIdentityRevoked {
    return match(event)
        .returnType<SubIdentityRevoked>()
        .when(identity.subIdentityRevoked.matrixEnjinV1000.is, identity.subIdentityRevoked.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
