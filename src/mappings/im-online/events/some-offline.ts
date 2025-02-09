import { imOnline } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'
import { SomeOffline } from '@enjin/indexer/mappings/im-online/events/types'

export function someOffline(event: EventItem): SomeOffline {
    return match(event)
        .returnType<SomeOffline>()
        .when(imOnline.someOffline.enjinV100.is, imOnline.someOffline.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
