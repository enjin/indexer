'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.heartbeat = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV1026 = require('../enjinV1026')
var v1026 = require('../v1026')
exports.heartbeat = {
    name: 'ImOnline.heartbeat',
    /**
     * ## Complexity:
     * - `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is length of
     *   `heartbeat.network_state.external_address`
     *   - `O(K)`: decoding of length `K`
     *   - `O(E)`: decoding/encoding of length `E`
     */
    enjinV100: new support_1.CallType(
        'ImOnline.heartbeat',
        support_1.sts.struct({
            heartbeat: enjinV100.Heartbeat,
            signature: support_1.sts.bytes(),
        })
    ),
    /**
     * See [`Pallet::heartbeat`].
     */
    enjinV1026: new support_1.CallType(
        'ImOnline.heartbeat',
        support_1.sts.struct({
            heartbeat: enjinV1026.Heartbeat,
            signature: support_1.sts.bytes(),
        })
    ),
    /**
     * # <weight>
     * - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is
     *   length of `heartbeat.network_state.external_address`
     *   - `O(K)`: decoding of length `K`
     *   - `O(E)`: decoding/encoding of length `E`
     * - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
     *   `ReceivedHeartbeats`
     * - DbWrites: `ReceivedHeartbeats`
     * # </weight>
     */
    v100: new support_1.CallType(
        'ImOnline.heartbeat',
        support_1.sts.struct({
            heartbeat: v100.Heartbeat,
            signature: support_1.sts.bytes(),
        })
    ),
    /**
     * See [`Pallet::heartbeat`].
     */
    v1026: new support_1.CallType(
        'ImOnline.heartbeat',
        support_1.sts.struct({
            heartbeat: v1026.Heartbeat,
            signature: support_1.sts.bytes(),
        })
    ),
}
