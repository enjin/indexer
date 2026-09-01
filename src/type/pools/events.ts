import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1040 from '../matrixV1040'

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
    matrixV1040: new EventType(
        'Pools.FeeDistributionFailed',
        sts.struct({
            pool: matrixV1040.AccountId32,
            amount: sts.bigint(),
            error: matrixV1040.DispatchError,
        })
    ),
}
