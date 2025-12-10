import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV1062 from '../enjinV1062'

export const onDemandOrderPlaced = {
    name: 'OnDemandAssignmentProvider.OnDemandOrderPlaced',
    /**
     * An order was placed at some spot price amount by orderer ordered_by
     */
    enjinV1062: new EventType(
        'OnDemandAssignmentProvider.OnDemandOrderPlaced',
        sts.struct({
            paraId: enjinV1062.Id,
            spotPrice: sts.bigint(),
            orderedBy: enjinV1062.AccountId32,
        })
    ),
}

export const spotPriceSet = {
    name: 'OnDemandAssignmentProvider.SpotPriceSet',
    /**
     * The value of the spot price has likely changed
     */
    enjinV1062: new EventType(
        'OnDemandAssignmentProvider.SpotPriceSet',
        sts.struct({
            spotPrice: sts.bigint(),
        })
    ),
}

export const accountCredited = {
    name: 'OnDemandAssignmentProvider.AccountCredited',
    /**
     * An account was given credits.
     */
    enjinV1062: new EventType(
        'OnDemandAssignmentProvider.AccountCredited',
        sts.struct({
            who: enjinV1062.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
