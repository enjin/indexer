import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const invalidFormat =  {
    name: 'CumulusXcm.InvalidFormat',
    /**
     * Downward message is invalid XCM.
     * \[ id \]
     */
    matrixEnjinV603: new EventType(
        'CumulusXcm.InvalidFormat',
        sts.bytes()
    ),
}

export const unsupportedVersion =  {
    name: 'CumulusXcm.UnsupportedVersion',
    /**
     * Downward message is unsupported version of XCM.
     * \[ id \]
     */
    matrixEnjinV603: new EventType(
        'CumulusXcm.UnsupportedVersion',
        sts.bytes()
    ),
}

export const executedDownward =  {
    name: 'CumulusXcm.ExecutedDownward',
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    matrixEnjinV603: new EventType(
        'CumulusXcm.ExecutedDownward',
        sts.tuple([sts.bytes(), matrixEnjinV603.V3Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    matrixEnjinV1010: new EventType(
        'CumulusXcm.ExecutedDownward',
        sts.tuple([sts.bytes(), matrixEnjinV1010.V4Outcome])
    ),
    /**
     * Downward message executed with the given outcome.
     * \[ id, outcome \]
     */
    v500: new EventType(
        'CumulusXcm.ExecutedDownward',
        sts.tuple([sts.bytes(), v500.V3Outcome])
    ),
}
