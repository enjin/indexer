'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.serviceOverweight = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.serviceOverweight = {
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
    enjinV100: new support_1.CallType(
        'Ump.service_overweight',
        support_1.sts.struct({
            index: support_1.sts.bigint(),
            weightLimit: enjinV100.Weight,
        })
    ),
}
