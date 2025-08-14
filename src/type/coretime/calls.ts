import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as v1060 from '../v1060'

export const requestCoreCount = {
    name: 'Coretime.request_core_count',
    /**
     * Request the configuration to be updated with the specified number of cores. Warning:
     * Since this only schedules a configuration update, it takes two sessions to come into
     * effect.
     *
     * - `origin`: Root or the Coretime Chain
     * - `count`: total number of cores
     */
    v1060: new CallType(
        'Coretime.request_core_count',
        sts.struct({
            count: sts.number(),
        })
    ),
}

export const requestRevenueAt = {
    name: 'Coretime.request_revenue_at',
    /**
     * Request to claim the instantaneous coretime sales revenue starting from the block it was
     * last claimed until and up to the block specified. The claimed amount value is sent back
     * to the Coretime chain in a `notify_revenue` message. At the same time, the amount is
     * teleported to the Coretime chain.
     */
    v1060: new CallType(
        'Coretime.request_revenue_at',
        sts.struct({
            when: sts.number(),
        })
    ),
}

export const assignCore = {
    name: 'Coretime.assign_core',
    /**
     * Receive instructions from the `ExternalBrokerOrigin`, detailing how a specific core is
     * to be used.
     *
     * Parameters:
     * -`origin`: The `ExternalBrokerOrigin`, assumed to be the coretime chain.
     * -`core`: The core that should be scheduled.
     * -`begin`: The starting blockheight of the instruction.
     * -`assignment`: How the blockspace should be utilised.
     * -`end_hint`: An optional hint as to when this particular set of instructions will end.
     */
    v1060: new CallType(
        'Coretime.assign_core',
        sts.struct({
            core: sts.number(),
            begin: sts.number(),
            assignment: sts.array(() => sts.tuple(() => [v1060.CoreAssignment, v1060.PartsOf57600])),
            endHint: sts.option(() => sts.number()),
        })
    ),
}
