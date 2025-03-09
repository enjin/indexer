import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'

export const success =  {
    name: 'XcmpQueue.Success',
    /**
     * Some XCM was executed ok.
     */
    matrixEnjinV603: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            weight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    matrixEnjinV1004: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            weight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    matrixV500: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            weight: matrixV500.Weight,
        })
    ),
    /**
     * Some XCM was executed ok.
     */
    matrixV1004: new EventType(
        'XcmpQueue.Success',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            weight: matrixV1004.Weight,
        })
    ),
}

export const fail =  {
    name: 'XcmpQueue.Fail',
    /**
     * Some XCM failed.
     */
    matrixEnjinV603: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            error: matrixEnjinV603.V3Error,
            weight: matrixEnjinV603.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    matrixEnjinV1004: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            error: matrixEnjinV1004.V3Error,
            weight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    matrixV500: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
            error: matrixV500.V3Error,
            weight: matrixV500.Weight,
        })
    ),
    /**
     * Some XCM failed.
     */
    matrixV1004: new EventType(
        'XcmpQueue.Fail',
        sts.struct({
            messageHash: sts.bytes(),
            messageId: sts.bytes(),
            error: matrixV1004.V3Error,
            weight: matrixV1004.Weight,
        })
    ),
}

export const badVersion =  {
    name: 'XcmpQueue.BadVersion',
    /**
     * Bad XCM version used.
     */
    matrixEnjinV603: new EventType(
        'XcmpQueue.BadVersion',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Bad XCM version used.
     */
    matrixEnjinV1004: new EventType(
        'XcmpQueue.BadVersion',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
    /**
     * Bad XCM version used.
     */
    matrixV500: new EventType(
        'XcmpQueue.BadVersion',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Bad XCM version used.
     */
    matrixV1004: new EventType(
        'XcmpQueue.BadVersion',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const badFormat =  {
    name: 'XcmpQueue.BadFormat',
    /**
     * Bad XCM format used.
     */
    matrixEnjinV603: new EventType(
        'XcmpQueue.BadFormat',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Bad XCM format used.
     */
    matrixEnjinV1004: new EventType(
        'XcmpQueue.BadFormat',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
    /**
     * Bad XCM format used.
     */
    matrixV500: new EventType(
        'XcmpQueue.BadFormat',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * Bad XCM format used.
     */
    matrixV1004: new EventType(
        'XcmpQueue.BadFormat',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const xcmpMessageSent =  {
    name: 'XcmpQueue.XcmpMessageSent',
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    matrixEnjinV603: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    matrixEnjinV1004: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    matrixV500: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
    /**
     * An HRMP message was sent to a sibling parachain.
     */
    matrixV1004: new EventType(
        'XcmpQueue.XcmpMessageSent',
        sts.struct({
            messageHash: sts.bytes(),
        })
    ),
}

export const overweightEnqueued =  {
    name: 'XcmpQueue.OverweightEnqueued',
    /**
     * An XCM exceeded the individual message weight budget.
     */
    matrixEnjinV603: new EventType(
        'XcmpQueue.OverweightEnqueued',
        sts.struct({
            sender: matrixEnjinV603.Id,
            sentAt: sts.number(),
            index: sts.bigint(),
            required: matrixEnjinV603.Weight,
        })
    ),
}

export const overweightServiced =  {
    name: 'XcmpQueue.OverweightServiced',
    /**
     * An XCM from the overweight queue was executed with the given actual weight used.
     */
    matrixEnjinV603: new EventType(
        'XcmpQueue.OverweightServiced',
        sts.struct({
            index: sts.bigint(),
            used: matrixEnjinV603.Weight,
        })
    ),
}
