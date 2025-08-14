import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as v1060 from '../v1060'

export const trafficDefaultValue = {
    /**
     *  The default value for the spot traffic multiplier.
     */
    v1060: new ConstantType('OnDemandAssignmentProvider.TrafficDefaultValue', v1060.FixedU128),
}

export const maxHistoricalRevenue = {
    /**
     *  The maximum number of blocks some historical revenue
     *  information stored for.
     */
    v1060: new ConstantType('OnDemandAssignmentProvider.MaxHistoricalRevenue', sts.number()),
}

export const palletId = {
    /**
     *  Identifier for the internal revenue balance.
     */
    v1060: new ConstantType('OnDemandAssignmentProvider.PalletId', v1060.PalletId),
}
