import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const serviceOverweight = {
    name: 'Ump.service_overweight',
    /**
     * Service a single overweight upward message.
     *
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight message to service.
     * - `weight_limit`: The amount of weight that message execution may take.
     *
     * Errors:
     * - `UnknownMessageIndex`: Message of `index` is unknown.
     * - `WeightOverLimit`: Message execution may use greater than `weight_limit`.
     *
     * Events:
     * - `OverweightServiced`: On success.
     */
    enjinV100: new CallType(
        'Ump.service_overweight',
        sts.struct({
            index: sts.bigint(),
            weightLimit: enjinV100.Weight,
        })
    ),
}
