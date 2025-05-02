'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.set = void 0
var support_1 = require('../support')
exports.set = {
    name: 'Timestamp.set',
    /**
     * Set the current time.
     *
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     *
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     *
     * The dispatch origin for this call must be `Inherent`.
     *
     * ## Complexity
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     */
    matrixEnjinV603: new support_1.CallType(
        'Timestamp.set',
        support_1.sts.struct({
            now: support_1.sts.bigint(),
        })
    ),
}
