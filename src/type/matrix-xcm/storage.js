'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.minimumWeights = void 0
var support_1 = require('../support')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV604 = require('../matrixV604')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.minimumWeights = {
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixEnjinV603: new support_1.StorageType(
        'MatrixXcm.MinimumWeights',
        'Default',
        [matrixEnjinV603.XcmOperation],
        matrixEnjinV603.MinimumWeightFeePair
    ),
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixEnjinV1012: new support_1.StorageType(
        'MatrixXcm.MinimumWeights',
        'Default',
        [matrixEnjinV1012.XcmOperation],
        matrixEnjinV1012.MinimumWeightFeePair
    ),
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixV604: new support_1.StorageType(
        'MatrixXcm.MinimumWeights',
        'Default',
        [matrixV604.XcmOperation],
        matrixV604.MinimumWeightFeePair
    ),
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixV1010: new support_1.StorageType(
        'MatrixXcm.MinimumWeights',
        'Default',
        [matrixV1010.XcmOperation],
        matrixV1010.MinimumWeightFeePair
    ),
}
