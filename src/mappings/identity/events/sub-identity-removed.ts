import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { SubIdentityRemoved } from '@enjin/indexer/mappings/identity/events/types'

export function subIdentityRemoved(event: EventItem): SubIdentityRemoved {
    return match(event)
        .returnType<SubIdentityRemoved>()
        .when(identity.subIdentityRemoved.matrixEnjinV1000.is, identity.subIdentityRemoved.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
