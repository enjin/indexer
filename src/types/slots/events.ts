import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const newLeasePeriod =  {
    name: 'Slots.NewLeasePeriod',
    /**
     * A new `[lease_period]` is beginning.
     */
    enjinV100: new EventType(
        'Slots.NewLeasePeriod',
        sts.struct({
            leasePeriod: sts.number(),
        })
    ),
}

export const leased =  {
    name: 'Slots.Leased',
    /**
     * A para has won the right to a continuous set of lease periods as a parachain.
     * First balance is any extra amount reserved on top of the para's existing deposit.
     * Second balance is the total amount reserved.
     */
    enjinV100: new EventType(
        'Slots.Leased',
        sts.struct({
            paraId: enjinV100.Id,
            leaser: enjinV100.AccountId32,
            periodBegin: sts.number(),
            periodCount: sts.number(),
            extraReserved: sts.bigint(),
            totalAmount: sts.bigint(),
        })
    ),
}
