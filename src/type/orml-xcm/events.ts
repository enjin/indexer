import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const sent = {
    name: 'OrmlXcm.Sent',
    /**
     * XCM message sent. \[to, message\]
     */
    matrixEnjinV603: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: matrixEnjinV603.V3MultiLocation,
            message: sts.array(() => matrixEnjinV603.V3Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    matrixEnjinV1012: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: matrixEnjinV1012.V4Location,
            message: sts.array(() => matrixEnjinV1012.V4Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    matrixV500: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: matrixV500.V3MultiLocation,
            message: sts.array(() => matrixV500.V3Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    matrixV1010: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: matrixV1010.V4Location,
            message: sts.array(() => matrixV1010.V4Instruction),
        })
    ),
}
