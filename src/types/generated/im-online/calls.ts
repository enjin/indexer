import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV1026 from '../enjinV1026'
import * as v1026 from '../v1026'

export const heartbeat =  {
    name: 'ImOnline.heartbeat',
    /**
     * ## Complexity:
     * - `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is length of
     *   `heartbeat.network_state.external_address`
     *   - `O(K)`: decoding of length `K`
     *   - `O(E)`: decoding/encoding of length `E`
     */
    enjinV100: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: enjinV100.Heartbeat,
            signature: sts.bytes(),
        })
    ),
    /**
     * See [`Pallet::heartbeat`].
     */
    enjinV1026: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: enjinV1026.Heartbeat,
            signature: sts.bytes(),
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
    v100: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: v100.Heartbeat,
            signature: sts.bytes(),
        })
    ),
    /**
     * See [`Pallet::heartbeat`].
     */
    v1026: new CallType(
        'ImOnline.heartbeat',
        sts.struct({
            heartbeat: v1026.Heartbeat,
            signature: sts.bytes(),
        })
    ),
}
