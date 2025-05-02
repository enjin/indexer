'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.overweightServiced =
    exports.overweightEnqueued =
    exports.upwardMessagesReceived =
    exports.weightExhausted =
    exports.executedUpward =
    exports.unsupportedVersion =
    exports.invalidFormat =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.invalidFormat = {
    name: 'Ump.InvalidFormat',
    /**
     * Upward message is invalid XCM.
     * \[ id \]
     */
    enjinV100: new support_1.EventType('Ump.InvalidFormat', support_1.sts.bytes()),
}
exports.unsupportedVersion = {
    name: 'Ump.UnsupportedVersion',
    /**
     * Upward message is unsupported version of XCM.
     * \[ id \]
     */
    enjinV100: new support_1.EventType('Ump.UnsupportedVersion', support_1.sts.bytes()),
}
exports.executedUpward = {
    name: 'Ump.ExecutedUpward',
    /**
     * Upward message executed with the given outcome.
     * \[ id, outcome \]
     */
    enjinV100: new support_1.EventType(
        'Ump.ExecutedUpward',
        support_1.sts.tuple([support_1.sts.bytes(), enjinV100.V3Outcome])
    ),
}
exports.weightExhausted = {
    name: 'Ump.WeightExhausted',
    /**
     * The weight limit for handling upward messages was reached.
     * \[ id, remaining, required \]
     */
    enjinV100: new support_1.EventType(
        'Ump.WeightExhausted',
        support_1.sts.tuple([support_1.sts.bytes(), enjinV100.Weight, enjinV100.Weight])
    ),
}
exports.upwardMessagesReceived = {
    name: 'Ump.UpwardMessagesReceived',
    /**
     * Some upward messages have been received and will be processed.
     * \[ para, count, size \]
     */
    enjinV100: new support_1.EventType(
        'Ump.UpwardMessagesReceived',
        support_1.sts.tuple([enjinV100.Id, support_1.sts.number(), support_1.sts.number()])
    ),
}
exports.overweightEnqueued = {
    name: 'Ump.OverweightEnqueued',
    /**
     * The weight budget was exceeded for an individual upward message.
     *
     * This message can be later dispatched manually using `service_overweight` dispatchable
     * using the assigned `overweight_index`.
     *
     * \[ para, id, overweight_index, required \]
     */
    enjinV100: new support_1.EventType(
        'Ump.OverweightEnqueued',
        support_1.sts.tuple([enjinV100.Id, support_1.sts.bytes(), support_1.sts.bigint(), enjinV100.Weight])
    ),
}
exports.overweightServiced = {
    name: 'Ump.OverweightServiced',
    /**
     * Upward message from the overweight queue was executed with the given actual weight
     * used.
     *
     * \[ overweight_index, used \]
     */
    enjinV100: new support_1.EventType(
        'Ump.OverweightServiced',
        support_1.sts.tuple([support_1.sts.bigint(), enjinV100.Weight])
    ),
}
