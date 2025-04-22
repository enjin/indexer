import { sts, Block, Bytes, Option, Result, ConstantType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const poolCount = {
    /**
     *  The number of pools
     */
    matrixEnjinV603: new ConstantType('Pools.PoolCount', sts.number()),
}

export const poolAccountIds = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) for each pool
     */
    matrixEnjinV603: new ConstantType('Pools.PoolAccountIds', matrixEnjinV603.PoolAccountIds),
}

export const feeDistributorAccountId = {
    /**
     *  The [`AccountId`](frame_system::Config::AccountId) that holds fees until they are
     *  distributed
     */
    matrixEnjinV603: new ConstantType('Pools.FeeDistributorAccountId', matrixEnjinV603.AccountId32),
}
