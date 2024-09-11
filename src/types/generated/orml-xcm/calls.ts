import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v1010 from '../v1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const sendAsSovereign =  {
    name: 'OrmlXcm.send_as_sovereign',
    /**
     * Send an XCM message as parachain sovereign.
     */
    matrixEnjinV603: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            message: matrixEnjinV603.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    matrixEnjinV1012: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: matrixEnjinV1012.VersionedLocation,
            message: matrixEnjinV1012.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    v500: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v500.VersionedMultiLocation,
            message: v500.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    v1010: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: v1010.VersionedLocation,
            message: v1010.VersionedXcm,
        })
    ),
}
