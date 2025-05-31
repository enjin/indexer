import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'

export const minimumWeightUpdated =  {
    name: 'EfinityXcm.MinimumWeightUpdated',
    /**
     * Xcm fee and weight updated
     */
    matrixV500: new EventType(
        'EfinityXcm.MinimumWeightUpdated',
        matrixV500.MinimumWeightFeePair
    ),
}

export const xcmTransferFailed =  {
    name: 'EfinityXcm.XcmTransferFailed',
    /**
     * XCM transfer failed
     */
    matrixV500: new EventType(
        'EfinityXcm.XcmTransferFailed',
        matrixV500.DispatchError
    ),
    /**
     * XCM transfer failed
     */
    matrixV602: new EventType(
        'EfinityXcm.XcmTransferFailed',
        matrixV602.DispatchError
    ),
}
