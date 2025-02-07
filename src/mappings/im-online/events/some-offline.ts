import { imOnline } from '../../../types/generated/events'
import { EventItem } from '../../../common/types/contexts'
import { UnsupportedEventError } from '../../../common/errors'
import { match } from 'ts-pattern'

type SomeOfflineEvent = {
    offline: [
        string,
        {
            total: bigint
            own: bigint
            others: {
                who: string
                value: bigint
            }[]
        },
    ][]
}

export function someOffline(event: EventItem): SomeOfflineEvent {
    return match(event)
        .returnType<SomeOfflineEvent>()
        .when(imOnline.someOffline.enjinV100.is, imOnline.someOffline.enjinV100.decode)
        .otherwise(() => {
            throw new UnsupportedEventError(event)
        })
}
