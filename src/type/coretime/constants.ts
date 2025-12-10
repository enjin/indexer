import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as enjinV1062 from '../enjinV1062'

export const brokerId = {
    /**
     *  The ParaId of the coretime chain.
     */
    enjinV1062: new ConstantType('Coretime.BrokerId', sts.number()),
}

export const brokerPotLocation = {
    /**
     *  The coretime chain pot location.
     */
    enjinV1062: new ConstantType('Coretime.BrokerPotLocation', enjinV1062.V5Junctions),
}
