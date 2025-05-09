'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.offence = void 0
var support_1 = require('../support')
exports.offence = {
    name: 'Offences.Offence',
    /**
     * There is an offence reported of the given `kind` happened at the `session_index` and
     * (kind-specific) time slot. This event is not deposited for duplicate slashes.
     * \[kind, timeslot\].
     */
    enjinV100: new support_1.EventType(
        'Offences.Offence',
        support_1.sts.struct({
            kind: support_1.sts.bytes(),
            timeslot: support_1.sts.bytes(),
        })
    ),
}
