import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as enjinV1062 from '../enjinV1062'

export const trafficDefaultValue = {
    /**
     *  The default value for the spot traffic multiplier.
     */
    enjinV1062: new ConstantType('OnDemandAssignmentProvider.TrafficDefaultValue', enjinV1062.FixedU128),
}

export const maxHistoricalRevenue = {
    /**
     *  The maximum number of blocks some historical revenue
     *  information stored for.
     */
    enjinV1062: new ConstantType('OnDemandAssignmentProvider.MaxHistoricalRevenue', sts.number()),
}

export const palletId = {
    /**
     *  Identifier for the internal revenue balance.
     */
    enjinV1062: new ConstantType('OnDemandAssignmentProvider.PalletId', enjinV1062.PalletId),
}
