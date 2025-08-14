import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as v1060 from '../v1060'

export const onDemandOrderPlaced = {
    name: 'OnDemandAssignmentProvider.OnDemandOrderPlaced',
    /**
     * An order was placed at some spot price amount by orderer ordered_by
     */
    v1060: new EventType(
        'OnDemandAssignmentProvider.OnDemandOrderPlaced',
        sts.struct({
            paraId: v1060.Id,
            spotPrice: sts.bigint(),
            orderedBy: v1060.AccountId32,
        })
    ),
}

export const spotPriceSet = {
    name: 'OnDemandAssignmentProvider.SpotPriceSet',
    /**
     * The value of the spot price has likely changed
     */
    v1060: new EventType(
        'OnDemandAssignmentProvider.SpotPriceSet',
        sts.struct({
            spotPrice: sts.bigint(),
        })
    ),
}
