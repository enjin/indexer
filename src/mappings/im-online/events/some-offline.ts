import { imOnline } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type SomeOfflineEvent = {
    offline: any
}

function getEventData(event: EventItem) {
    return match(event)
        .returnType<SomeOfflineEvent>()
        .when(imOnline.someOffline.enjinV100.is, () => imOnline.someOffline.enjinV100.decode(event))
        .otherwise(() => {
            throw new UnsupportedEventError(imOnline.someOffline)
        })
}
