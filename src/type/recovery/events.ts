import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as v1070 from '../v1070'

export const currentHeadForced = {
    name: 'Recovery.CurrentHeadForced',
    /**
     * A parachain's head data was force-updated.
     */
    v1070: new EventType(
        'Recovery.CurrentHeadForced',
        sts.struct({
            /**
             * The parachain ID that was updated.
             */
            paraId: v1070.Id,
        })
    ),
}

export const currentCodeForced = {
    name: 'Recovery.CurrentCodeForced',
    /**
     * A parachain's validation code was force-updated.
     */
    v1070: new EventType(
        'Recovery.CurrentCodeForced',
        sts.struct({
            /**
             * The parachain ID that was updated.
             */
            paraId: v1070.Id,
        })
    ),
}

export const staleBlockThresholdUpdated = {
    name: 'Recovery.StaleBlockThresholdUpdated',
    /**
     * The stale block threshold was updated.
     */
    v1070: new EventType(
        'Recovery.StaleBlockThresholdUpdated',
        sts.struct({
            /**
             * The new threshold value in blocks.
             */
            threshold: sts.number(),
        })
    ),
}

export const futureCodeHashSet = {
    name: 'Recovery.FutureCodeHashSet',
    /**
     * A future code hash was set for a parachain.
     */
    v1070: new EventType(
        'Recovery.FutureCodeHashSet',
        sts.struct({
            /**
             * The parachain ID that was updated.
             */
            paraId: v1070.Id,
            /**
             * The future code hash that was set.
             */
            codeHash: sts.option(() => v1070.ValidationCodeHash),
        })
    ),
}

export const futureCodeUpgradeSet = {
    name: 'Recovery.FutureCodeUpgradeSet',
    /**
     * A future code upgrade block was set for a parachain.
     */
    v1070: new EventType(
        'Recovery.FutureCodeUpgradeSet',
        sts.struct({
            /**
             * The parachain ID that was updated.
             */
            paraId: v1070.Id,
            /**
             * The block number when the upgrade will occur.
             */
            upgradeBlock: sts.option(() => sts.number()),
        })
    ),
}

export const upgradeGoAheadSignalSet = {
    name: 'Recovery.UpgradeGoAheadSignalSet',
    /**
     * An upgrade go-ahead signal was set for a parachain.
     */
    v1070: new EventType(
        'Recovery.UpgradeGoAheadSignalSet',
        sts.struct({
            /**
             * The parachain ID that was updated.
             */
            paraId: v1070.Id,
            /**
             * The value that was set
             */
            value: sts.option(() => v1070.UpgradeGoAhead),
        })
    ),
}
