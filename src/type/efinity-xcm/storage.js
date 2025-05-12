'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.minimumWeights = void 0
var support_1 = require('../support')
var matrixV500 = require('../matrixV500')
exports.minimumWeights = {
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixV500: new support_1.StorageType(
        'EfinityXcm.MinimumWeights',
        'Default',
        [matrixV500.XcmOperation],
        matrixV500.MinimumWeightFeePair
    ),
}
