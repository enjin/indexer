import { identity } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { IdentityKilled } from '@enjin/indexer/mappings/identity/events/types'

export function identityKilled(event: EventItem): IdentityKilled {
    return match(event)
        .returnType<IdentityKilled>()
        .when(identity.identityKilled.matrixEnjinV1000.is, identity.identityKilled.matrixEnjinV1000.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
