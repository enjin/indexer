'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.reportsByKindIndex = exports.concurrentReportsIndex = exports.reports = void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.reports = {
    /**
     *  The primary structure that holds all offence records keyed by report identifiers.
     */
    enjinV100: new support_1.StorageType('Offences.Reports', 'Optional', [enjinV100.H256], enjinV100.OffenceDetails),
}
exports.concurrentReportsIndex = {
    /**
     *  A vector of reports of the same kind that happened at the same time slot.
     */
    enjinV100: new support_1.StorageType(
        'Offences.ConcurrentReportsIndex',
        'Default',
        [support_1.sts.bytes(), support_1.sts.bytes()],
        support_1.sts.array(function () {
            return enjinV100.H256
        })
    ),
}
exports.reportsByKindIndex = {
    /**
     *  Enumerates all reports of a kind along with the time they happened.
     *
     *  All reports are sorted by the time of offence.
     *
     *  Note that the actual type of this mapping is `Vec<u8>`, this is because values of
     *  different types are not supported at the moment so we are doing the manual serialization.
     */
    v100: new support_1.StorageType(
        'Offences.ReportsByKindIndex',
        'Default',
        [support_1.sts.bytes()],
        support_1.sts.bytes()
    ),
}
