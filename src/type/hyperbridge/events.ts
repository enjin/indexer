import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const hostParamsUpdated = {
    name: 'Hyperbridge.HostParamsUpdated',
    /**
     * Hyperbridge governance has now updated it's host params on this chain.
     */
    matrixV1030: new EventType(
        'Hyperbridge.HostParamsUpdated',
        sts.struct({
            /**
             * The old host params
             */
            old: matrixV1030.VersionedHostParams,
            /**
             * The new host params
             */
            new: matrixV1030.VersionedHostParams,
        })
    ),
}

export const relayerFeeWithdrawn = {
    name: 'Hyperbridge.RelayerFeeWithdrawn',
    /**
     * A relayer has withdrawn some fees
     */
    matrixV1030: new EventType(
        'Hyperbridge.RelayerFeeWithdrawn',
        sts.struct({
            /**
             * The amount that was withdrawn
             */
            amount: sts.bigint(),
            /**
             * The withdrawal beneficiary
             */
            account: matrixV1030.AccountId32,
        })
    ),
}
