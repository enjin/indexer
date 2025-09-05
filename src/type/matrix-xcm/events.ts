import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1030 from '../matrixV1030'

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
    matrixV1030: new EventType('MatrixXcm.XcmTransferFailed', matrixV1030.DispatchError),
}
