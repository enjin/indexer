import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1030 from '../matrixV1030'

export const sendAsSovereign = {
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
    matrixV500: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: matrixV500.VersionedMultiLocation,
            message: matrixV500.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    matrixV1010: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: matrixV1010.VersionedLocation,
            message: matrixV1010.VersionedXcm,
        })
    ),
    /**
     * Send an XCM message as parachain sovereign.
     */
    matrixV1030: new CallType(
        'OrmlXcm.send_as_sovereign',
        sts.struct({
            dest: matrixV1030.VersionedLocation,
            message: matrixV1030.VersionedXcm,
        })
    ),
}
