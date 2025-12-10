import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixV1030 from '../matrixV1030'
import * as matrixEnjinV1031 from '../matrixEnjinV1031'

export const minimumWeightUpdated = {
    name: 'MatrixXcm.MinimumWeightUpdated',
    /**
     * Xcm fee and weight updated
     */
    matrixEnjinV603: new EventType('MatrixXcm.MinimumWeightUpdated', matrixEnjinV603.MinimumWeightFeePair),
}

export const xcmTransferFailed = {
    name: 'MatrixXcm.XcmTransferFailed',
    /**
     * XCM transfer failed
     */
    matrixEnjinV603: new EventType('MatrixXcm.XcmTransferFailed', matrixEnjinV603.DispatchError),
    /**
     * XCM transfer failed
     */
    matrixEnjinV1031: new EventType('MatrixXcm.XcmTransferFailed', matrixEnjinV1031.DispatchError),
    /**
     * XCM transfer failed
     */
    matrixV604: new EventType('MatrixXcm.XcmTransferFailed', matrixV604.DispatchError),
    /**
     * XCM transfer failed
     */
    matrixV1030: new EventType('MatrixXcm.XcmTransferFailed', matrixV1030.DispatchError),
}
