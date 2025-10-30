import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as v1060 from '../v1060'

export const brokerId = {
    /**
     *  The ParaId of the coretime chain.
     */
    v1060: new ConstantType('Coretime.BrokerId', sts.number()),
}

export const brokerPotLocation = {
    /**
     *  The coretime chain pot location.
     */
    v1060: new ConstantType('Coretime.BrokerPotLocation', v1060.V5Junctions),
}
