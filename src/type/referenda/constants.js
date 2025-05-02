'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.tracks =
    exports.alarmInterval =
    exports.undecidingTimeout =
    exports.maxQueued =
    exports.submissionDeposit =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.submissionDeposit = {
    /**
     *  The minimum amount to be used as a deposit for a public referendum proposal.
     */
    enjinV100: new support_1.ConstantType('Referenda.SubmissionDeposit', support_1.sts.bigint()),
}
exports.maxQueued = {
    /**
     *  Maximum size of the referendum queue for a single track.
     */
    enjinV100: new support_1.ConstantType('Referenda.MaxQueued', support_1.sts.number()),
}
exports.undecidingTimeout = {
    /**
     *  The number of blocks after submission that a referendum must begin being decided by.
     *  Once this passes, then anyone may cancel the referendum.
     */
    enjinV100: new support_1.ConstantType('Referenda.UndecidingTimeout', support_1.sts.number()),
}
exports.alarmInterval = {
    /**
     *  Quantization level for the referendum wakeup scheduler. A higher number will result in
     *  fewer storage reads/writes needed for smaller voters, but also result in delays to the
     *  automatic referendum status changes. Explicit servicing instructions are unaffected.
     */
    enjinV100: new support_1.ConstantType('Referenda.AlarmInterval', support_1.sts.number()),
}
exports.tracks = {
    /**
     *  Information concerning the different referendum tracks.
     */
    enjinV100: new support_1.ConstantType(
        'Referenda.Tracks',
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [support_1.sts.number(), enjinV100.TrackInfo]
            })
        })
    ),
}
