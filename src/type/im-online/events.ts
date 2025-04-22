import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const heartbeatReceived = {
    name: 'ImOnline.HeartbeatReceived',
    /**
     * A new heartbeat was received from `AuthorityId`.
     */
    enjinV100: new EventType(
        'ImOnline.HeartbeatReceived',
        sts.struct({
            authorityId: sts.bytes(),
        })
    ),
}

export const allGood = {
    name: 'ImOnline.AllGood',
    /**
     * At the end of the session, no offence was committed.
     */
    enjinV100: new EventType('ImOnline.AllGood', sts.unit()),
}

export const someOffline = {
    name: 'ImOnline.SomeOffline',
    /**
     * At the end of the session, at least one validator was found to be offline.
     */
    enjinV100: new EventType(
        'ImOnline.SomeOffline',
        sts.struct({
            offline: sts.array(() => sts.tuple(() => [enjinV100.AccountId32, enjinV100.Exposure])),
        })
    ),
}
