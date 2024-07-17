import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as v1004 from '../v1004'
import * as v1010 from '../v1010'

export const attempted =  {
    name: 'PolkadotXcm.Attempted',
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.Attempted',
        matrixEnjinV603.V3Outcome
    ),
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
     * 
     * \[ outcome \]
     */
    v500: new EventType(
        'PolkadotXcm.Attempted',
        v500.V3Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v1004: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: v1004.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v1010: new EventType(
        'PolkadotXcm.Attempted',
        sts.struct({
            outcome: v1010.V4Outcome,
        })
    ),
}

export const sent =  {
    name: 'PolkadotXcm.Sent',
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([matrixEnjinV603.V3MultiLocation, matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3Instruction)])
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
     * 
     * \[ origin, destination, message \]
     */
    v500: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([v500.V3MultiLocation, v500.V3MultiLocation, sts.array(() => v500.V3Instruction)])
    ),
    /**
     * A XCM message was sent.
     */
    v1004: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: v1004.V3MultiLocation,
            destination: v1004.V3MultiLocation,
            message: sts.array(() => v1004.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    v1010: new EventType(
        'PolkadotXcm.Sent',
        sts.struct({
            origin: v1010.V4Location,
            destination: v1010.V4Location,
            message: sts.array(() => v1010.V4Instruction),
            messageId: sts.bytes(),
        })
    ),
}

export const unexpectedResponse =  {
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
     * 
     * \[ origin location, id \]
     */
    v500: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([v500.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v1004: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: v1004.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v1010: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.struct({
            origin: v1010.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseReady =  {
    name: 'PolkadotXcm.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), matrixEnjinV603.V3Response])
    ),
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
     * 
     * \[ id, response \]
     */
    v500: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), v500.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v1004: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v1004.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v1010: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v1010.V4Response,
        })
    ),
}

export const notified =  {
    name: 'PolkadotXcm.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
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
    v500: new EventType(
        'PolkadotXcm.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    v1004: new EventType(
        'PolkadotXcm.Notified',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyOverweight =  {
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
    v500: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v500.Weight, v500.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    v1004: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: v1004.Weight,
            maxBudgetedWeight: v1004.Weight,
        })
    ),
}

export const notifyDispatchError =  {
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
    v500: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    v1004: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyDecodeFailed =  {
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
    v500: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    v1004: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const invalidResponder =  {
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
     * 
     * \[ origin location, id, expected location \]
     */
    v500: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([v500.V3MultiLocation, sts.bigint(), sts.option(() => v500.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1004: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: v1004.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v1004.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1010: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.struct({
            origin: v1010.V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v1010.V4Location),
        })
    ),
}

export const invalidResponderVersion =  {
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
     * 
     * \[ origin location, id \]
     */
    v500: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([v500.V3MultiLocation, sts.bigint()])
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
    v1004: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: v1004.V3MultiLocation,
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
    v1010: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.struct({
            origin: v1010.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseTaken =  {
    name: 'PolkadotXcm.ResponseTaken',
    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.bigint()
    ),
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
    v500: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.bigint()
    ),
    /**
     * Received query response has been read and removed.
     */
    v1004: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const assetsTrapped =  {
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
     * 
     * \[ hash, origin, assets \]
     */
    v500: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([v500.H256, v500.V3MultiLocation, v500.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v1004: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: v1004.H256,
            origin: v1004.V3MultiLocation,
            assets: v1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v1010: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.struct({
            hash: v1010.H256,
            origin: v1010.V4Location,
            assets: v1010.VersionedAssets,
        })
    ),
}

export const versionChangeNotified =  {
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
     * 
     * \[ destination, result, cost \]
     */
    v500: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([v500.V3MultiLocation, sts.number(), sts.array(() => v500.V3MultiAsset)])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v1004: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: v1004.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => v1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v1010: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.struct({
            destination: v1010.V4Location,
            result: sts.number(),
            cost: sts.array(() => v1010.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const supportedVersionChanged =  {
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
     * 
     * \[ location, XCM version \]
     */
    v500: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([v500.V3MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v1004: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: v1004.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v1010: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.struct({
            location: v1010.V4Location,
            version: sts.number(),
        })
    ),
}

export const notifyTargetSendFail =  {
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
     * 
     * \[ location, query ID, error \]
     */
    v500: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([v500.V3MultiLocation, sts.bigint(), v500.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v1004: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: v1004.V3MultiLocation,
            queryId: sts.bigint(),
            error: v1004.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v1010: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.struct({
            location: v1010.V4Location,
            queryId: sts.bigint(),
            error: v1010.V3Error,
        })
    ),
}

export const notifyTargetMigrationFail =  {
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
     * 
     * \[ location, query ID \]
     */
    v500: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([v500.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v1004: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: v1004.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v1010: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.struct({
            location: v1010.VersionedLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerierVersion =  {
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
     * 
     * \[ origin location, id \]
     */
    v500: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.tuple([v500.V3MultiLocation, sts.bigint()])
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
    v1004: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: v1004.V3MultiLocation,
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
    v1010: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.struct({
            origin: v1010.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerier =  {
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
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint(), matrixEnjinV603.V3MultiLocation, sts.option(() => matrixEnjinV603.V3MultiLocation)])
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
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    v500: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.tuple([v500.V3MultiLocation, sts.bigint(), v500.V3MultiLocation, sts.option(() => v500.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1004: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: v1004.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: v1004.V3MultiLocation,
            maybeActualQuerier: sts.option(() => v1004.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1010: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.struct({
            origin: v1010.V4Location,
            queryId: sts.bigint(),
            expectedQuerier: v1010.V4Location,
            maybeActualQuerier: sts.option(() => v1010.V4Location),
        })
    ),
}

export const versionNotifyStarted =  {
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
     * 
     * \[ destination location, cost \]
     */
    v500: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.tuple([v500.V3MultiLocation, sts.array(() => v500.V3MultiAsset)])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v1004: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: v1004.V3MultiLocation,
            cost: sts.array(() => v1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v1010: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.struct({
            destination: v1010.V4Location,
            cost: sts.array(() => v1010.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyRequested =  {
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
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v500: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.tuple([v500.V3MultiLocation, sts.array(() => v500.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v1004: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: v1004.V3MultiLocation,
            cost: sts.array(() => v1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v1010: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.struct({
            destination: v1010.V4Location,
            cost: sts.array(() => v1010.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyUnrequested =  {
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
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v500: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.tuple([v500.V3MultiLocation, sts.array(() => v500.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     */
    v1004: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: v1004.V3MultiLocation,
            cost: sts.array(() => v1004.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v1010: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.struct({
            destination: v1010.V4Location,
            cost: sts.array(() => v1010.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const feesPaid =  {
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
     * 
     * \[ paying location, fees \]
     */
    v500: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.tuple([v500.V3MultiLocation, sts.array(() => v500.V3MultiAsset)])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v1004: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: v1004.V3MultiLocation,
            fees: sts.array(() => v1004.V3MultiAsset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v1010: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.struct({
            paying: v1010.V4Location,
            fees: sts.array(() => v1010.V4Asset),
        })
    ),
}

export const assetsClaimed =  {
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
     * 
     * \[ hash, origin, assets \]
     */
    v500: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.tuple([v500.H256, v500.V3MultiLocation, v500.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v1004: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: v1004.H256,
            origin: v1004.V3MultiLocation,
            assets: v1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v1010: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.struct({
            hash: v1010.H256,
            origin: v1010.V4Location,
            assets: v1010.VersionedAssets,
        })
    ),
}

export const versionMigrationFinished =  {
    name: 'PolkadotXcm.VersionMigrationFinished',
    /**
     * A XCM version migration finished.
     */
    v1010: new EventType(
        'PolkadotXcm.VersionMigrationFinished',
        sts.struct({
            version: sts.number(),
        })
    ),
}
