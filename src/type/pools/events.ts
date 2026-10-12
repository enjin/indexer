import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1041 from '../matrixEnjinV1041'

export const poolsMutated = {
    name: 'Pools.PoolsMutated',
    /**
     * Pools storage was modified by [`PoolsMutation`]
     */
    matrixEnjinV603: new EventType('Pools.PoolsMutated', matrixEnjinV603.PoolsMutation),
}

export const feeDistributionFailed = {
    name: 'Pools.FeeDistributionFailed',
    /**
     * A pool's fee share could not be transferred. Its share remains in the distributor
     * account. Emitted from a session hook, which cannot return an error.
     */
    matrixEnjinV1041: new EventType(
        'Pools.FeeDistributionFailed',
        sts.struct({
            pool: matrixEnjinV1041.AccountId32,
            amount: sts.bigint(),
            error: matrixEnjinV1041.DispatchError,
        })
    ),
}
