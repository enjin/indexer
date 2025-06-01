import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV1026 from '../enjinV1026'
import * as v1026 from '../v1026'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const attempted =  {
    name: 'XcmPallet.Attempted',
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    enjinV100: new EventType(
        'XcmPallet.Attempted',
        enjinV100.V3Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    enjinV1026: new EventType(
        'XcmPallet.Attempted',
        sts.struct({
            outcome: enjinV1026.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    enjinV1032: new EventType(
        'XcmPallet.Attempted',
        sts.struct({
            outcome: enjinV1032.V4Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    v100: new EventType(
        'XcmPallet.Attempted',
        v100.V3Outcome
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v1026: new EventType(
        'XcmPallet.Attempted',
        sts.struct({
            outcome: v1026.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v1030: new EventType(
        'XcmPallet.Attempted',
        sts.struct({
            outcome: v1030.V4Outcome,
        })
    ),
}

export const sent =  {
    name: 'XcmPallet.Sent',
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    enjinV100: new EventType(
        'XcmPallet.Sent',
        sts.tuple([enjinV100.V3MultiLocation, enjinV100.V3MultiLocation, sts.array(() => enjinV100.V3Instruction)])
    ),
    /**
     * A XCM message was sent.
     */
    enjinV1026: new EventType(
        'XcmPallet.Sent',
        sts.struct({
            origin: enjinV1026.V3MultiLocation,
            destination: enjinV1026.V3MultiLocation,
            message: sts.array(() => enjinV1026.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    enjinV1032: new EventType(
        'XcmPallet.Sent',
        sts.struct({
            origin: enjinV1032.V4Location,
            destination: enjinV1032.V4Location,
            message: sts.array(() => enjinV1032.V4Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    v100: new EventType(
        'XcmPallet.Sent',
        sts.tuple([v100.V3MultiLocation, v100.V3MultiLocation, sts.array(() => v100.V3Instruction)])
    ),
    /**
     * A XCM message was sent.
     */
    v1026: new EventType(
        'XcmPallet.Sent',
        sts.struct({
            origin: v1026.V3MultiLocation,
            destination: v1026.V3MultiLocation,
            message: sts.array(() => v1026.V3Instruction),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    v1030: new EventType(
        'XcmPallet.Sent',
        sts.struct({
            origin: v1030.V4Location,
            destination: v1030.V4Location,
            message: sts.array(() => v1030.V4Instruction),
            messageId: sts.bytes(),
        })
    ),
}

export const unexpectedResponse =  {
    name: 'XcmPallet.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    enjinV100: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.tuple([enjinV100.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    enjinV1026: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.struct({
            origin: enjinV1026.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    enjinV1032: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.struct({
            origin: enjinV1032.V4Location,
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
    v100: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.tuple([v100.V3MultiLocation, sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v1026: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.struct({
            origin: v1026.V3MultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v1030: new EventType(
        'XcmPallet.UnexpectedResponse',
        sts.struct({
            origin: v1030.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseReady =  {
    name: 'XcmPallet.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    enjinV100: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), enjinV100.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    enjinV1026: new EventType(
        'XcmPallet.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: enjinV1026.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    enjinV1032: new EventType(
        'XcmPallet.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: enjinV1032.V4Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    v100: new EventType(
        'XcmPallet.ResponseReady',
        sts.tuple([sts.bigint(), v100.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v1026: new EventType(
        'XcmPallet.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v1026.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v1030: new EventType(
        'XcmPallet.ResponseReady',
        sts.struct({
            queryId: sts.bigint(),
            response: v1030.V4Response,
        })
    ),
}

export const notified =  {
    name: 'XcmPallet.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    enjinV100: new EventType(
        'XcmPallet.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    enjinV1026: new EventType(
        'XcmPallet.Notified',
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
    v100: new EventType(
        'XcmPallet.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    v1026: new EventType(
        'XcmPallet.Notified',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyOverweight =  {
    name: 'XcmPallet.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    enjinV100: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), enjinV100.Weight, enjinV100.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    enjinV1026: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: enjinV1026.Weight,
            maxBudgetedWeight: enjinV1026.Weight,
        })
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    v100: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), v100.Weight, v100.Weight])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    v1026: new EventType(
        'XcmPallet.NotifyOverweight',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
            actualWeight: v1026.Weight,
            maxBudgetedWeight: v1026.Weight,
        })
    ),
}

export const notifyDispatchError =  {
    name: 'XcmPallet.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    enjinV100: new EventType(
        'XcmPallet.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    enjinV1026: new EventType(
        'XcmPallet.NotifyDispatchError',
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
    v100: new EventType(
        'XcmPallet.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    v1026: new EventType(
        'XcmPallet.NotifyDispatchError',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const notifyDecodeFailed =  {
    name: 'XcmPallet.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    enjinV100: new EventType(
        'XcmPallet.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    enjinV1026: new EventType(
        'XcmPallet.NotifyDecodeFailed',
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
    v100: new EventType(
        'XcmPallet.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    v1026: new EventType(
        'XcmPallet.NotifyDecodeFailed',
        sts.struct({
            queryId: sts.bigint(),
            palletIndex: sts.number(),
            callIndex: sts.number(),
        })
    ),
}

export const invalidResponder =  {
    name: 'XcmPallet.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    enjinV100: new EventType(
        'XcmPallet.InvalidResponder',
        sts.tuple([enjinV100.V3MultiLocation, sts.bigint(), sts.option(() => enjinV100.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    enjinV1026: new EventType(
        'XcmPallet.InvalidResponder',
        sts.struct({
            origin: enjinV1026.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => enjinV1026.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    enjinV1032: new EventType(
        'XcmPallet.InvalidResponder',
        sts.struct({
            origin: enjinV1032.V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => enjinV1032.V4Location),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    v100: new EventType(
        'XcmPallet.InvalidResponder',
        sts.tuple([v100.V3MultiLocation, sts.bigint(), sts.option(() => v100.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1026: new EventType(
        'XcmPallet.InvalidResponder',
        sts.struct({
            origin: v1026.V3MultiLocation,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v1026.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1030: new EventType(
        'XcmPallet.InvalidResponder',
        sts.struct({
            origin: v1030.V4Location,
            queryId: sts.bigint(),
            expectedLocation: sts.option(() => v1030.V4Location),
        })
    ),
}

export const invalidResponderVersion =  {
    name: 'XcmPallet.InvalidResponderVersion',
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
    enjinV100: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.tuple([enjinV100.V3MultiLocation, sts.bigint()])
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
    enjinV1026: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.struct({
            origin: enjinV1026.V3MultiLocation,
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
    enjinV1032: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.struct({
            origin: enjinV1032.V4Location,
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
    v100: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.tuple([v100.V3MultiLocation, sts.bigint()])
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
    v1026: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.struct({
            origin: v1026.V3MultiLocation,
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
    v1030: new EventType(
        'XcmPallet.InvalidResponderVersion',
        sts.struct({
            origin: v1030.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const responseTaken =  {
    name: 'XcmPallet.ResponseTaken',
    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    enjinV100: new EventType(
        'XcmPallet.ResponseTaken',
        sts.bigint()
    ),
    /**
     * Received query response has been read and removed.
     */
    enjinV1026: new EventType(
        'XcmPallet.ResponseTaken',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    v100: new EventType(
        'XcmPallet.ResponseTaken',
        sts.bigint()
    ),
    /**
     * Received query response has been read and removed.
     */
    v1026: new EventType(
        'XcmPallet.ResponseTaken',
        sts.struct({
            queryId: sts.bigint(),
        })
    ),
}

export const assetsTrapped =  {
    name: 'XcmPallet.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    enjinV100: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.tuple([enjinV100.H256, enjinV100.V3MultiLocation, enjinV100.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    enjinV1026: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.struct({
            hash: enjinV1026.H256,
            origin: enjinV1026.V3MultiLocation,
            assets: enjinV1026.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    enjinV1032: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.struct({
            hash: enjinV1032.H256,
            origin: enjinV1032.V4Location,
            assets: enjinV1032.VersionedAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    v100: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.tuple([v100.H256, v100.V3MultiLocation, v100.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v1026: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.struct({
            hash: v1026.H256,
            origin: v1026.V3MultiLocation,
            assets: v1026.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v1030: new EventType(
        'XcmPallet.AssetsTrapped',
        sts.struct({
            hash: v1030.H256,
            origin: v1030.V4Location,
            assets: v1030.VersionedAssets,
        })
    ),
}

export const versionChangeNotified =  {
    name: 'XcmPallet.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    enjinV100: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.tuple([enjinV100.V3MultiLocation, sts.number(), sts.array(() => enjinV100.V3MultiAsset)])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    enjinV1026: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.struct({
            destination: enjinV1026.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => enjinV1026.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    enjinV1032: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.struct({
            destination: enjinV1032.V4Location,
            result: sts.number(),
            cost: sts.array(() => enjinV1032.V4Asset),
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
    v100: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.tuple([v100.V3MultiLocation, sts.number(), sts.array(() => v100.V3MultiAsset)])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v1026: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.struct({
            destination: v1026.V3MultiLocation,
            result: sts.number(),
            cost: sts.array(() => v1026.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     */
    v1030: new EventType(
        'XcmPallet.VersionChangeNotified',
        sts.struct({
            destination: v1030.V4Location,
            result: sts.number(),
            cost: sts.array(() => v1030.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const supportedVersionChanged =  {
    name: 'XcmPallet.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    enjinV100: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.tuple([enjinV100.V3MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    enjinV1026: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.struct({
            location: enjinV1026.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    enjinV1032: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.struct({
            location: enjinV1032.V4Location,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    v100: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.tuple([v100.V3MultiLocation, sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v1026: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.struct({
            location: v1026.V3MultiLocation,
            version: sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v1030: new EventType(
        'XcmPallet.SupportedVersionChanged',
        sts.struct({
            location: v1030.V4Location,
            version: sts.number(),
        })
    ),
}

export const notifyTargetSendFail =  {
    name: 'XcmPallet.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    enjinV100: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([enjinV100.V3MultiLocation, sts.bigint(), enjinV100.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    enjinV1026: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.struct({
            location: enjinV1026.V3MultiLocation,
            queryId: sts.bigint(),
            error: enjinV1026.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    enjinV1032: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.struct({
            location: enjinV1032.V4Location,
            queryId: sts.bigint(),
            error: enjinV1032.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    v100: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.tuple([v100.V3MultiLocation, sts.bigint(), v100.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v1026: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.struct({
            location: v1026.V3MultiLocation,
            queryId: sts.bigint(),
            error: v1026.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v1030: new EventType(
        'XcmPallet.NotifyTargetSendFail',
        sts.struct({
            location: v1030.V4Location,
            queryId: sts.bigint(),
            error: v1030.V3Error,
        })
    ),
}

export const notifyTargetMigrationFail =  {
    name: 'XcmPallet.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    enjinV100: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.tuple([enjinV100.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    enjinV1026: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.struct({
            location: enjinV1026.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    enjinV1032: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.struct({
            location: enjinV1032.VersionedLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    v100: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.tuple([v100.VersionedMultiLocation, sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v1026: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.struct({
            location: v1026.VersionedMultiLocation,
            queryId: sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v1030: new EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        sts.struct({
            location: v1030.VersionedLocation,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerierVersion =  {
    name: 'XcmPallet.InvalidQuerierVersion',
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
    enjinV100: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.tuple([enjinV100.V3MultiLocation, sts.bigint()])
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
    enjinV1026: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.struct({
            origin: enjinV1026.V3MultiLocation,
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
    enjinV1032: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.struct({
            origin: enjinV1032.V4Location,
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
    v100: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.tuple([v100.V3MultiLocation, sts.bigint()])
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
    v1026: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.struct({
            origin: v1026.V3MultiLocation,
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
    v1030: new EventType(
        'XcmPallet.InvalidQuerierVersion',
        sts.struct({
            origin: v1030.V4Location,
            queryId: sts.bigint(),
        })
    ),
}

export const invalidQuerier =  {
    name: 'XcmPallet.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    enjinV100: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.tuple([enjinV100.V3MultiLocation, sts.bigint(), enjinV100.V3MultiLocation, sts.option(() => enjinV100.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    enjinV1026: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.struct({
            origin: enjinV1026.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: enjinV1026.V3MultiLocation,
            maybeActualQuerier: sts.option(() => enjinV1026.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    enjinV1032: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.struct({
            origin: enjinV1032.V4Location,
            queryId: sts.bigint(),
            expectedQuerier: enjinV1032.V4Location,
            maybeActualQuerier: sts.option(() => enjinV1032.V4Location),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    v100: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.tuple([v100.V3MultiLocation, sts.bigint(), v100.V3MultiLocation, sts.option(() => v100.V3MultiLocation)])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1026: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.struct({
            origin: v1026.V3MultiLocation,
            queryId: sts.bigint(),
            expectedQuerier: v1026.V3MultiLocation,
            maybeActualQuerier: sts.option(() => v1026.V3MultiLocation),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1030: new EventType(
        'XcmPallet.InvalidQuerier',
        sts.struct({
            origin: v1030.V4Location,
            queryId: sts.bigint(),
            expectedQuerier: v1030.V4Location,
            maybeActualQuerier: sts.option(() => v1030.V4Location),
        })
    ),
}

export const versionNotifyStarted =  {
    name: 'XcmPallet.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    enjinV100: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.tuple([enjinV100.V3MultiLocation, sts.array(() => enjinV100.V3MultiAsset)])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    enjinV1026: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.struct({
            destination: enjinV1026.V3MultiLocation,
            cost: sts.array(() => enjinV1026.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    enjinV1032: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.struct({
            destination: enjinV1032.V4Location,
            cost: sts.array(() => enjinV1032.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    v100: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.tuple([v100.V3MultiLocation, sts.array(() => v100.V3MultiAsset)])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v1026: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.struct({
            destination: v1026.V3MultiLocation,
            cost: sts.array(() => v1026.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v1030: new EventType(
        'XcmPallet.VersionNotifyStarted',
        sts.struct({
            destination: v1030.V4Location,
            cost: sts.array(() => v1030.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyRequested =  {
    name: 'XcmPallet.VersionNotifyRequested',
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    enjinV100: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.tuple([enjinV100.V3MultiLocation, sts.array(() => enjinV100.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    enjinV1026: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.struct({
            destination: enjinV1026.V3MultiLocation,
            cost: sts.array(() => enjinV1026.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    enjinV1032: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.struct({
            destination: enjinV1032.V4Location,
            cost: sts.array(() => enjinV1032.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v100: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.tuple([v100.V3MultiLocation, sts.array(() => v100.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v1026: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.struct({
            destination: v1026.V3MultiLocation,
            cost: sts.array(() => v1026.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v1030: new EventType(
        'XcmPallet.VersionNotifyRequested',
        sts.struct({
            destination: v1030.V4Location,
            cost: sts.array(() => v1030.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const versionNotifyUnrequested =  {
    name: 'XcmPallet.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    enjinV100: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.tuple([enjinV100.V3MultiLocation, sts.array(() => enjinV100.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     */
    enjinV1026: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.struct({
            destination: enjinV1026.V3MultiLocation,
            cost: sts.array(() => enjinV1026.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    enjinV1032: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.struct({
            destination: enjinV1032.V4Location,
            cost: sts.array(() => enjinV1032.V4Asset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    v100: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.tuple([v100.V3MultiLocation, sts.array(() => v100.V3MultiAsset)])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     */
    v1026: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.struct({
            destination: v1026.V3MultiLocation,
            cost: sts.array(() => v1026.V3MultiAsset),
            messageId: sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v1030: new EventType(
        'XcmPallet.VersionNotifyUnrequested',
        sts.struct({
            destination: v1030.V4Location,
            cost: sts.array(() => v1030.V4Asset),
            messageId: sts.bytes(),
        })
    ),
}

export const feesPaid =  {
    name: 'XcmPallet.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    enjinV100: new EventType(
        'XcmPallet.FeesPaid',
        sts.tuple([enjinV100.V3MultiLocation, sts.array(() => enjinV100.V3MultiAsset)])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    enjinV1026: new EventType(
        'XcmPallet.FeesPaid',
        sts.struct({
            paying: enjinV1026.V3MultiLocation,
            fees: sts.array(() => enjinV1026.V3MultiAsset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    enjinV1032: new EventType(
        'XcmPallet.FeesPaid',
        sts.struct({
            paying: enjinV1032.V4Location,
            fees: sts.array(() => enjinV1032.V4Asset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    v100: new EventType(
        'XcmPallet.FeesPaid',
        sts.tuple([v100.V3MultiLocation, sts.array(() => v100.V3MultiAsset)])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v1026: new EventType(
        'XcmPallet.FeesPaid',
        sts.struct({
            paying: v1026.V3MultiLocation,
            fees: sts.array(() => v1026.V3MultiAsset),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v1030: new EventType(
        'XcmPallet.FeesPaid',
        sts.struct({
            paying: v1030.V4Location,
            fees: sts.array(() => v1030.V4Asset),
        })
    ),
}

export const assetsClaimed =  {
    name: 'XcmPallet.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    enjinV100: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.tuple([enjinV100.H256, enjinV100.V3MultiLocation, enjinV100.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    enjinV1026: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.struct({
            hash: enjinV1026.H256,
            origin: enjinV1026.V3MultiLocation,
            assets: enjinV1026.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    enjinV1032: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.struct({
            hash: enjinV1032.H256,
            origin: enjinV1032.V4Location,
            assets: enjinV1032.VersionedAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    v100: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.tuple([v100.H256, v100.V3MultiLocation, v100.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v1026: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.struct({
            hash: v1026.H256,
            origin: v1026.V3MultiLocation,
            assets: v1026.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v1030: new EventType(
        'XcmPallet.AssetsClaimed',
        sts.struct({
            hash: v1030.H256,
            origin: v1030.V4Location,
            assets: v1030.VersionedAssets,
        })
    ),
}

export const versionMigrationFinished =  {
    name: 'XcmPallet.VersionMigrationFinished',
    /**
     * A XCM version migration finished.
     */
    enjinV1032: new EventType(
        'XcmPallet.VersionMigrationFinished',
        sts.struct({
            version: sts.number(),
        })
    ),
}
