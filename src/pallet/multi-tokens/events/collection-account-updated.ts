import { multiTokens } from '~/type/events'
import { EventItem } from '~/contexts'
import { UnsupportedEventError } from '~/util/errors'
import { match } from 'ts-pattern'
import { CollectionAccountUpdated } from '~/pallet/multi-tokens/events/types'

export function collectionAccountUpdated(event: EventItem): CollectionAccountUpdated {
    return match(event)
        .returnType<CollectionAccountUpdated>()
        .when(
            () => multiTokens.collectionAccountUpdated.matrixEnjinV603.is(event),
            () => multiTokens.collectionAccountUpdated.matrixEnjinV603.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
