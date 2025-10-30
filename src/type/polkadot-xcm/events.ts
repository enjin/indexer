import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1030 from '../matrixV1030'

export const attempted = {
    name: 'PolkadotXcm.Attempted',
    /**
     * Execution of an XCM message was attempted.
     *
     * \[ outcome \]
     */
    matrixEnjinV603: new EventType('PolkadotXcm.Attempted', matrixEnjinV603.V3Outcome),
    /**
     * Execution of an XCM message was attempted.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: matrixEnjinV1004.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: matrixEnjinV1012.V4Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     *
     * \[ outcome \]
     */
    matrixV500: new EventType('PolkadotXcm.Attempted', matrixV500.V3Outcome),
    /**
     * Execution of an XCM message was attempted.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: matrixV1004.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: matrixV1010.V4Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: matrixV1030.V5Outcome,
        })
    ),
}

export const sent = {
    name: 'PolkadotXcm.Sent',
    /**
     * A XCM message was sent.
     *
     * \[ origin, destination, message \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            matrixEnjinV603.V3MultiLocation,
            sts.array(() => matrixEnjinV603.V3Instruction),
        ])
    ),
    /**
     * A XCM message was sent.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            destination: matrixEnjinV1004.V3MultiLocation,
            message: sts.array(() => matrixEnjinV1004.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: matrixEnjinV1012.V4Location,
            destination: matrixEnjinV1012.V4Location,
            message: sts.array(() => matrixEnjinV1012.V4Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     *
     * \[ origin, destination, message \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([matrixV500.V3MultiLocation, matrixV500.V3MultiLocation, sts.array(() => matrixV500.V3Instruction)])
    ),
    /**
     * A XCM message was sent.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: matrixV1004.V3MultiLocation,
            destination: matrixV1004.V3MultiLocation,
            message: sts.array(() => matrixV1004.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: matrixV1010.V4Location,
            destination: matrixV1010.V4Location,
            message: sts.array(() => matrixV1010.V4Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM message was sent.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: matrixV1030.V5Location,
            destination: matrixV1030.V5Location,
            message: sts.array(() => matrixV1030.V5Instruction),
            messageId: sts.bytes(),
        })
    ),
}

export const unexpectedResponse = {
    name: 'PolkadotXcm.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     *
     * \[ origin location, id \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: matrixEnjinV1012.V4Location,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     *
     * \[ origin location, id \]
     */
    matrixV500: new EventType('PolkadotXcm.UnexpectedResponse', sts.tuple([matrixV500.V3MultiLocation, sts.bigint()])),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: matrixV1004.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: matrixV1010.V4Location,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: matrixV1030.V5Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseReady = {
    name: 'PolkadotXcm.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     *
     * \[ id, response \]
     */
    matrixEnjinV603: new EventType('PolkadotXcm.ResponseReady', sts.tuple([sts.bigint(), matrixEnjinV603.V3Response])),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: matrixEnjinV1004.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: matrixEnjinV1012.V4Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     *
     * \[ id, response \]
     */
    matrixV500: new EventType('PolkadotXcm.ResponseReady', sts.tuple([sts.bigint(), matrixV500.V3Response])),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: matrixV1004.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: matrixV1010.V4Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: matrixV1030.V5Response,
        })
    ),
}

export const notified = {
    name: 'PolkadotXcm.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     *
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new EventType('PolkadotXcm.Notified', sts.tuple([sts.bigint(), sts.number(), sts.number()])),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.Notified',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     *
     * \[ id, pallet index, call index \]
     */
    matrixV500: new EventType('PolkadotXcm.Notified', sts.tuple([sts.bigint(), sts.number(), sts.number()])),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.Notified',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyOverweight = {
    name: 'PolkadotXcm.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     *
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), matrixEnjinV603.Weight, matrixEnjinV603.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: matrixEnjinV1004.Weight,
            maxBudgetedWeight: matrixEnjinV1004.Weight,
        })
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     *
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), matrixV500.Weight, matrixV500.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: matrixV1004.Weight,
            maxBudgetedWeight: matrixV1004.Weight,
        })
    ),
}

export const notifyDispatchError = {
    name: 'PolkadotXcm.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     *
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     *
     * \[ id, pallet index, call index \]
     */
    matrixV500: new EventType('PolkadotXcm.NotifyDispatchError', sts.tuple([sts.bigint(), sts.number(), sts.number()])),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyDecodeFailed = {
    name: 'PolkadotXcm.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     *
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     *
     * \[ id, pallet index, call index \]
     */
    matrixV500: new EventType('PolkadotXcm.NotifyDecodeFailed', sts.tuple([sts.bigint(), sts.number(), sts.number()])),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const invalidResponder = {
    name: 'PolkadotXcm.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected location \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint(), sts.option(() => matrixEnjinV603.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => matrixEnjinV1004.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: matrixEnjinV1012.V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => matrixEnjinV1012.V4Location),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected location \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([matrixV500.V3MultiLocation, sts.bigint(), sts.option(() => matrixV500.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: matrixV1004.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => matrixV1004.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: matrixV1010.V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => matrixV1010.V4Location),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: matrixV1030.V5Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => matrixV1030.V5Location),
        })
    ),
}

export const invalidResponderVersion = {
    name: 'PolkadotXcm.InvalidResponderVersion',
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     *
     * \[ origin location, id \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: matrixEnjinV1012.V4Location,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     *
     * \[ origin location, id \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([matrixV500.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: matrixV1004.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: matrixV1010.V4Location,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: matrixV1030.V5Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseTaken = {
    name: 'PolkadotXcm.ResponseTaken',
    /**
     * Received query response has been read and removed.
     *
     * \[ id \]
     */
    matrixEnjinV603: new EventType('PolkadotXcm.ResponseTaken', sts.bigint()),
    /**
     * Received query response has been read and removed.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
    /**
     * Received query response has been read and removed.
     *
     * \[ id \]
     */
    matrixV500: new EventType('PolkadotXcm.ResponseTaken', sts.bigint()),
    /**
     * Received query response has been read and removed.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const assetsTrapped = {
    name: 'PolkadotXcm.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     *
     * \[ hash, origin, assets \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([matrixEnjinV603.H256, matrixEnjinV603.V3MultiLocation, matrixEnjinV603.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: matrixEnjinV1004.H256,
            origin: matrixEnjinV1004.V3MultiLocation,
            assets: matrixEnjinV1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: matrixEnjinV1012.H256,
            origin: matrixEnjinV1012.V4Location,
            assets: matrixEnjinV1012.VersionedAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     *
     * \[ hash, origin, assets \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([matrixV500.H256, matrixV500.V3MultiLocation, matrixV500.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: matrixV1004.H256,
            origin: matrixV1004.V3MultiLocation,
            assets: matrixV1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: matrixV1010.H256,
            origin: matrixV1010.V4Location,
            assets: matrixV1010.VersionedAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: matrixV1030.H256,
            origin: matrixV1030.V5Location,
            assets: matrixV1030.VersionedAssets,
        })
    ),
}

export const versionChangeNotified = {
    name: 'PolkadotXcm.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     *
     * \[ destination, result, cost \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.number(), sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: matrixEnjinV1004.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => matrixEnjinV1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: matrixEnjinV1012.V4Location,
            result: sts.number(),
            cost: sts.array(() => matrixEnjinV1012.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     *
     * \[ destination, result, cost \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([matrixV500.V3MultiLocation, sts.number(), sts.array(() => matrixV500.V3MultiAsset)])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: matrixV1004.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => matrixV1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: matrixV1010.V4Location,
            result: sts.number(),
            cost: sts.array(() => matrixV1010.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: matrixV1030.V5Location,
            result: sts.number(),
            cost: sts.array(() => matrixV1030.V5Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const supportedVersionChanged = {
    name: 'PolkadotXcm.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     *
     * \[ location, XCM version \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: matrixEnjinV1004.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: matrixEnjinV1012.V4Location,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     *
     * \[ location, XCM version \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([matrixV500.V3MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: matrixV1004.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: matrixV1010.V4Location,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: matrixV1030.V5Location,
            version: sts.number(),
        })
    ),
}

export const notifyTargetSendFail = {
    name: 'PolkadotXcm.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     *
     * \[ location, query ID, error \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint(), matrixEnjinV603.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: matrixEnjinV1004.V3MultiLocation,
            queryId: sts.bigint(),
            error: matrixEnjinV1004.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: matrixEnjinV1012.V4Location,
            queryId: sts.bigint(),
            error: matrixEnjinV1012.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     *
     * \[ location, query ID, error \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([matrixV500.V3MultiLocation, sts.bigint(), matrixV500.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: matrixV1004.V3MultiLocation,
            queryId: sts.bigint(),
            error: matrixV1004.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: matrixV1010.V4Location,
            queryId: sts.bigint(),
            error: matrixV1010.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: matrixV1030.V5Location,
            queryId: sts.bigint(),
            error: matrixV1030.V5Error,
        })
    ),
}

export const notifyTargetMigrationFail = {
    name: 'PolkadotXcm.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     *
     * \[ location, query ID \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([matrixEnjinV603.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: matrixEnjinV1004.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: matrixEnjinV1012.VersionedLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     *
     * \[ location, query ID \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([matrixV500.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: matrixV1004.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: matrixV1010.VersionedLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: matrixV1030.VersionedLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerierVersion = {
    name: 'PolkadotXcm.InvalidQuerierVersion',
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     *
     * \[ origin location, id \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: matrixEnjinV1012.V4Location,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     *
     * \[ origin location, id \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.tuple([matrixV500.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: matrixV1004.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: matrixV1010.V4Location,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     *
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: matrixV1030.V5Location,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerier = {
    name: 'PolkadotXcm.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            sts.bigint(),
            matrixEnjinV603.V3MultiLocation,
            sts.option(() => matrixEnjinV603.V3MultiLocation),
        ])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: matrixEnjinV1004.V3MultiLocation,
            maybeActualQuerier: sts.option(() => matrixEnjinV1004.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: matrixEnjinV1012.V4Location,
            queryId: sts.bigint(),
            expectedQuerier: matrixEnjinV1012.V4Location,
            maybeActualQuerier: sts.option(() => matrixEnjinV1012.V4Location),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.tuple([
            matrixV500.V3MultiLocation,
            sts.bigint(),
            matrixV500.V3MultiLocation,
            sts.option(() => matrixV500.V3MultiLocation),
        ])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: matrixV1004.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: matrixV1004.V3MultiLocation,
            maybeActualQuerier: sts.option(() => matrixV1004.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: matrixV1010.V4Location,
            queryId: sts.bigint(),
            expectedQuerier: matrixV1010.V4Location,
            maybeActualQuerier: sts.option(() => matrixV1010.V4Location),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: matrixV1030.V5Location,
            queryId: sts.bigint(),
            expectedQuerier: matrixV1030.V5Location,
            maybeActualQuerier: sts.option(() => matrixV1030.V5Location),
        })
    ),
}

export const versionNotifyStarted = {
    name: 'PolkadotXcm.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     *
     * \[ destination location, cost \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: matrixEnjinV1004.V3MultiLocation,
            cost: sts.array(() => matrixEnjinV1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: matrixEnjinV1012.V4Location,
            cost: sts.array(() => matrixEnjinV1012.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     *
     * \[ destination location, cost \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.tuple([matrixV500.V3MultiLocation, sts.array(() => matrixV500.V3MultiAsset)])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: matrixV1004.V3MultiLocation,
            cost: sts.array(() => matrixV1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: matrixV1010.V4Location,
            cost: sts.array(() => matrixV1010.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: matrixV1030.V5Location,
            cost: sts.array(() => matrixV1030.V5Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyRequested = {
    name: 'PolkadotXcm.VersionNotifyRequested',
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: matrixEnjinV1004.V3MultiLocation,
            cost: sts.array(() => matrixEnjinV1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: matrixEnjinV1012.V4Location,
            cost: sts.array(() => matrixEnjinV1012.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.tuple([matrixV500.V3MultiLocation, sts.array(() => matrixV500.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: matrixV1004.V3MultiLocation,
            cost: sts.array(() => matrixV1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: matrixV1010.V4Location,
            cost: sts.array(() => matrixV1010.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: matrixV1030.V5Location,
            cost: sts.array(() => matrixV1030.V5Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyUnrequested = {
    name: 'PolkadotXcm.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: matrixEnjinV1004.V3MultiLocation,
            cost: sts.array(() => matrixEnjinV1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: matrixEnjinV1012.V4Location,
            cost: sts.array(() => matrixEnjinV1012.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.tuple([matrixV500.V3MultiLocation, sts.array(() => matrixV500.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     */
    matrixV1004: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: matrixV1004.V3MultiLocation,
            cost: sts.array(() => matrixV1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    matrixV1010: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: matrixV1010.V4Location,
            cost: sts.array(() => matrixV1010.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: matrixV1030.V5Location,
            cost: sts.array(() => matrixV1030.V5Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const feesPaid = {
    name: 'PolkadotXcm.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     *
     * \[ paying location, fees \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: matrixEnjinV1004.V3MultiLocation,
            fees: sts.array(() => matrixEnjinV1004.V3MultiAsset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: matrixEnjinV1012.V4Location,
            fees: sts.array(() => matrixEnjinV1012.V4Asset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     *
     * \[ paying location, fees \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.tuple([matrixV500.V3MultiLocation, sts.array(() => matrixV500.V3MultiAsset)])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    matrixV1004: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: matrixV1004.V3MultiLocation,
            fees: sts.array(() => matrixV1004.V3MultiAsset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    matrixV1010: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: matrixV1010.V4Location,
            fees: sts.array(() => matrixV1010.V4Asset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    matrixV1030: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: matrixV1030.V5Location,
            fees: sts.array(() => matrixV1030.V5Asset),
        })
    ),
}

export const assetsClaimed = {
    name: 'PolkadotXcm.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     *
     * \[ hash, origin, assets \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.tuple([matrixEnjinV603.H256, matrixEnjinV603.V3MultiLocation, matrixEnjinV603.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    matrixEnjinV1004: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: matrixEnjinV1004.H256,
            origin: matrixEnjinV1004.V3MultiLocation,
            assets: matrixEnjinV1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: matrixEnjinV1012.H256,
            origin: matrixEnjinV1012.V4Location,
            assets: matrixEnjinV1012.VersionedAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     *
     * \[ hash, origin, assets \]
     */
    matrixV500: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.tuple([matrixV500.H256, matrixV500.V3MultiLocation, matrixV500.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    matrixV1004: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: matrixV1004.H256,
            origin: matrixV1004.V3MultiLocation,
            assets: matrixV1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    matrixV1010: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: matrixV1010.H256,
            origin: matrixV1010.V4Location,
            assets: matrixV1010.VersionedAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    matrixV1030: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: matrixV1030.H256,
            origin: matrixV1030.V5Location,
            assets: matrixV1030.VersionedAssets,
        })
    ),
}

export const versionMigrationFinished = {
    name: 'PolkadotXcm.VersionMigrationFinished',
    /**
     * A XCM version migration finished.
     */
    matrixEnjinV1012: new EventType(
        'PolkadotXcm.VersionMigrationFinished',
        sts.struct({
            version: sts.number(),
        })
    ),
}

export const sendFailed = {
    name: 'PolkadotXcm.SendFailed',
    /**
     * An XCM message failed to send.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.SendFailed',
        sts.struct({
            origin: matrixV1030.V5Location,
            destination: matrixV1030.V5Location,
            error: matrixV1030.V3SendError,
            messageId: sts.bytes(),
        })
    ),
}

export const processXcmError = {
    name: 'PolkadotXcm.ProcessXcmError',
    /**
     * An XCM message failed to process.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.ProcessXcmError',
        sts.struct({
            origin: matrixV1030.V5Location,
            error: matrixV1030.V5Error,
            messageId: sts.bytes(),
        })
    ),
}

export const aliasAuthorized = {
    name: 'PolkadotXcm.AliasAuthorized',
    /**
     * An `aliaser` location was authorized by `target` to alias it, authorization valid until
     * `expiry` block number.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.AliasAuthorized',
        sts.struct({
            aliaser: matrixV1030.V5Location,
            target: matrixV1030.V5Location,
            expiry: sts.option(() => sts.bigint()),
        })
    ),
}

export const aliasAuthorizationRemoved = {
    name: 'PolkadotXcm.AliasAuthorizationRemoved',
    /**
     * `target` removed alias authorization for `aliaser`.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.AliasAuthorizationRemoved',
        sts.struct({
            aliaser: matrixV1030.V5Location,
            target: matrixV1030.V5Location,
        })
    ),
}

export const aliasesAuthorizationsRemoved = {
    name: 'PolkadotXcm.AliasesAuthorizationsRemoved',
    /**
     * `target` removed all alias authorizations.
     */
    matrixV1030: new EventType(
        'PolkadotXcm.AliasesAuthorizationsRemoved',
        sts.struct({
            target: matrixV1030.V5Location,
        })
    ),
}
