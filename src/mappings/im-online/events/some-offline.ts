import { imOnline } from '../../../types/events'
import { EventItem } from '../../../contexts'
import { UnsupportedEventError } from '../../../utils/errors'
import { match } from 'ts-pattern'
import { SomeOffline } from '../../../mappings/im-online/events/types'

export function someOffline(event: EventItem): SomeOffline {
    return match(event)
        .returnType<SomeOffline>()
        .when(
            () => imOnline.someOffline.enjinV100.is(event),
            () => imOnline.someOffline.enjinV100.decode(event)
        )
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
