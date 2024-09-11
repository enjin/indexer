import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v1010 from '../v1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const sent =  {
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
    v500: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v500.V3MultiLocation,
            message: sts.array(() => v500.V3Instruction),
        })
    ),
    /**
     * XCM message sent. \[to, message\]
     */
    v1010: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: v1010.V4Location,
            message: sts.array(() => v1010.V4Instruction),
        })
    ),
}
