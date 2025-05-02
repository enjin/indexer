'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.versionMigrationFinished =
    exports.assetsClaimed =
    exports.feesPaid =
    exports.versionNotifyUnrequested =
    exports.versionNotifyRequested =
    exports.versionNotifyStarted =
    exports.invalidQuerier =
    exports.invalidQuerierVersion =
    exports.notifyTargetMigrationFail =
    exports.notifyTargetSendFail =
    exports.supportedVersionChanged =
    exports.versionChangeNotified =
    exports.assetsTrapped =
    exports.responseTaken =
    exports.invalidResponderVersion =
    exports.invalidResponder =
    exports.notifyDecodeFailed =
    exports.notifyDispatchError =
    exports.notifyOverweight =
    exports.notified =
    exports.responseReady =
    exports.unexpectedResponse =
    exports.sent =
    exports.attempted =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var enjinV1026 = require('../enjinV1026')
var v1026 = require('../v1026')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.attempted = {
    name: 'XcmPallet.Attempted',
    /**
     * Execution of an XCM message was attempted.
     *
     * \[ outcome \]
     */
    enjinV100: new support_1.EventType('XcmPallet.Attempted', enjinV100.V3Outcome),
    /**
     * Execution of an XCM message was attempted.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.Attempted',
        support_1.sts.struct({
            outcome: enjinV1026.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.Attempted',
        support_1.sts.struct({
            outcome: enjinV1032.V4Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     *
     * \[ outcome \]
     */
    v100: new support_1.EventType('XcmPallet.Attempted', v100.V3Outcome),
    /**
     * Execution of an XCM message was attempted.
     */
    v1026: new support_1.EventType(
        'XcmPallet.Attempted',
        support_1.sts.struct({
            outcome: v1026.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    v1030: new support_1.EventType(
        'XcmPallet.Attempted',
        support_1.sts.struct({
            outcome: v1030.V4Outcome,
        })
    ),
}
exports.sent = {
    name: 'XcmPallet.Sent',
    /**
     * A XCM message was sent.
     *
     * \[ origin, destination, message \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.Sent',
        support_1.sts.tuple([
            enjinV100.V3MultiLocation,
            enjinV100.V3MultiLocation,
            support_1.sts.array(function () {
                return enjinV100.V3Instruction
            }),
        ])
    ),
    /**
     * A XCM message was sent.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.Sent',
        support_1.sts.struct({
            origin: enjinV1026.V3MultiLocation,
            destination: enjinV1026.V3MultiLocation,
            message: support_1.sts.array(function () {
                return enjinV1026.V3Instruction
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.Sent',
        support_1.sts.struct({
            origin: enjinV1032.V4Location,
            destination: enjinV1032.V4Location,
            message: support_1.sts.array(function () {
                return enjinV1032.V4Instruction
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     *
     * \[ origin, destination, message \]
     */
    v100: new support_1.EventType(
        'XcmPallet.Sent',
        support_1.sts.tuple([
            v100.V3MultiLocation,
            v100.V3MultiLocation,
            support_1.sts.array(function () {
                return v100.V3Instruction
            }),
        ])
    ),
    /**
     * A XCM message was sent.
     */
    v1026: new support_1.EventType(
        'XcmPallet.Sent',
        support_1.sts.struct({
            origin: v1026.V3MultiLocation,
            destination: v1026.V3MultiLocation,
            message: support_1.sts.array(function () {
                return v1026.V3Instruction
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    v1030: new support_1.EventType(
        'XcmPallet.Sent',
        support_1.sts.struct({
            origin: v1030.V4Location,
            destination: v1030.V4Location,
            message: support_1.sts.array(function () {
                return v1030.V4Instruction
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.unexpectedResponse = {
    name: 'XcmPallet.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     *
     * \[ origin location, id \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.UnexpectedResponse',
        support_1.sts.tuple([enjinV100.V3MultiLocation, support_1.sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.UnexpectedResponse',
        support_1.sts.struct({
            origin: enjinV1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.UnexpectedResponse',
        support_1.sts.struct({
            origin: enjinV1032.V4Location,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     *
     * \[ origin location, id \]
     */
    v100: new support_1.EventType(
        'XcmPallet.UnexpectedResponse',
        support_1.sts.tuple([v100.V3MultiLocation, support_1.sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v1026: new support_1.EventType(
        'XcmPallet.UnexpectedResponse',
        support_1.sts.struct({
            origin: v1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    v1030: new support_1.EventType(
        'XcmPallet.UnexpectedResponse',
        support_1.sts.struct({
            origin: v1030.V4Location,
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.responseReady = {
    name: 'XcmPallet.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     *
     * \[ id, response \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.ResponseReady',
        support_1.sts.tuple([support_1.sts.bigint(), enjinV100.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.ResponseReady',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            response: enjinV1026.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.ResponseReady',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            response: enjinV1032.V4Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     *
     * \[ id, response \]
     */
    v100: new support_1.EventType(
        'XcmPallet.ResponseReady',
        support_1.sts.tuple([support_1.sts.bigint(), v100.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v1026: new support_1.EventType(
        'XcmPallet.ResponseReady',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            response: v1026.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    v1030: new support_1.EventType(
        'XcmPallet.ResponseReady',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            response: v1030.V4Response,
        })
    ),
}
exports.notified = {
    name: 'XcmPallet.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     *
     * \[ id, pallet index, call index \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.Notified',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.Notified',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        })
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     *
     * \[ id, pallet index, call index \]
     */
    v100: new support_1.EventType(
        'XcmPallet.Notified',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    v1026: new support_1.EventType(
        'XcmPallet.Notified',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        })
    ),
}
exports.notifyOverweight = {
    name: 'XcmPallet.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     *
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.NotifyOverweight',
        support_1.sts.tuple([
            support_1.sts.bigint(),
            support_1.sts.number(),
            support_1.sts.number(),
            enjinV100.Weight,
            enjinV100.Weight,
        ])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.NotifyOverweight',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
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
    v100: new support_1.EventType(
        'XcmPallet.NotifyOverweight',
        support_1.sts.tuple([
            support_1.sts.bigint(),
            support_1.sts.number(),
            support_1.sts.number(),
            v100.Weight,
            v100.Weight,
        ])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    v1026: new support_1.EventType(
        'XcmPallet.NotifyOverweight',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
            actualWeight: v1026.Weight,
            maxBudgetedWeight: v1026.Weight,
        })
    ),
}
exports.notifyDispatchError = {
    name: 'XcmPallet.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     *
     * \[ id, pallet index, call index \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.NotifyDispatchError',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.NotifyDispatchError',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        })
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     *
     * \[ id, pallet index, call index \]
     */
    v100: new support_1.EventType(
        'XcmPallet.NotifyDispatchError',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    v1026: new support_1.EventType(
        'XcmPallet.NotifyDispatchError',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        })
    ),
}
exports.notifyDecodeFailed = {
    name: 'XcmPallet.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     *
     * \[ id, pallet index, call index \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.NotifyDecodeFailed',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.NotifyDecodeFailed',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        })
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     *
     * \[ id, pallet index, call index \]
     */
    v100: new support_1.EventType(
        'XcmPallet.NotifyDecodeFailed',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    v1026: new support_1.EventType(
        'XcmPallet.NotifyDecodeFailed',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        })
    ),
}
exports.invalidResponder = {
    name: 'XcmPallet.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected location \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.InvalidResponder',
        support_1.sts.tuple([
            enjinV100.V3MultiLocation,
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return enjinV100.V3MultiLocation
            }),
        ])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.InvalidResponder',
        support_1.sts.struct({
            origin: enjinV1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            expectedLocation: support_1.sts.option(function () {
                return enjinV1026.V3MultiLocation
            }),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.InvalidResponder',
        support_1.sts.struct({
            origin: enjinV1032.V4Location,
            queryId: support_1.sts.bigint(),
            expectedLocation: support_1.sts.option(function () {
                return enjinV1032.V4Location
            }),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected location \]
     */
    v100: new support_1.EventType(
        'XcmPallet.InvalidResponder',
        support_1.sts.tuple([
            v100.V3MultiLocation,
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return v100.V3MultiLocation
            }),
        ])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1026: new support_1.EventType(
        'XcmPallet.InvalidResponder',
        support_1.sts.struct({
            origin: v1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            expectedLocation: support_1.sts.option(function () {
                return v1026.V3MultiLocation
            }),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1030: new support_1.EventType(
        'XcmPallet.InvalidResponder',
        support_1.sts.struct({
            origin: v1030.V4Location,
            queryId: support_1.sts.bigint(),
            expectedLocation: support_1.sts.option(function () {
                return v1030.V4Location
            }),
        })
    ),
}
exports.invalidResponderVersion = {
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
    enjinV100: new support_1.EventType(
        'XcmPallet.InvalidResponderVersion',
        support_1.sts.tuple([enjinV100.V3MultiLocation, support_1.sts.bigint()])
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
    enjinV1026: new support_1.EventType(
        'XcmPallet.InvalidResponderVersion',
        support_1.sts.struct({
            origin: enjinV1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
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
    enjinV1032: new support_1.EventType(
        'XcmPallet.InvalidResponderVersion',
        support_1.sts.struct({
            origin: enjinV1032.V4Location,
            queryId: support_1.sts.bigint(),
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
    v100: new support_1.EventType(
        'XcmPallet.InvalidResponderVersion',
        support_1.sts.tuple([v100.V3MultiLocation, support_1.sts.bigint()])
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
    v1026: new support_1.EventType(
        'XcmPallet.InvalidResponderVersion',
        support_1.sts.struct({
            origin: v1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
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
    v1030: new support_1.EventType(
        'XcmPallet.InvalidResponderVersion',
        support_1.sts.struct({
            origin: v1030.V4Location,
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.responseTaken = {
    name: 'XcmPallet.ResponseTaken',
    /**
     * Received query response has been read and removed.
     *
     * \[ id \]
     */
    enjinV100: new support_1.EventType('XcmPallet.ResponseTaken', support_1.sts.bigint()),
    /**
     * Received query response has been read and removed.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.ResponseTaken',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * Received query response has been read and removed.
     *
     * \[ id \]
     */
    v100: new support_1.EventType('XcmPallet.ResponseTaken', support_1.sts.bigint()),
    /**
     * Received query response has been read and removed.
     */
    v1026: new support_1.EventType(
        'XcmPallet.ResponseTaken',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.assetsTrapped = {
    name: 'XcmPallet.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     *
     * \[ hash, origin, assets \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.AssetsTrapped',
        support_1.sts.tuple([enjinV100.H256, enjinV100.V3MultiLocation, enjinV100.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.AssetsTrapped',
        support_1.sts.struct({
            hash: enjinV1026.H256,
            origin: enjinV1026.V3MultiLocation,
            assets: enjinV1026.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.AssetsTrapped',
        support_1.sts.struct({
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
    v100: new support_1.EventType(
        'XcmPallet.AssetsTrapped',
        support_1.sts.tuple([v100.H256, v100.V3MultiLocation, v100.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v1026: new support_1.EventType(
        'XcmPallet.AssetsTrapped',
        support_1.sts.struct({
            hash: v1026.H256,
            origin: v1026.V3MultiLocation,
            assets: v1026.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    v1030: new support_1.EventType(
        'XcmPallet.AssetsTrapped',
        support_1.sts.struct({
            hash: v1030.H256,
            origin: v1030.V4Location,
            assets: v1030.VersionedAssets,
        })
    ),
}
exports.versionChangeNotified = {
    name: 'XcmPallet.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     *
     * \[ destination, result, cost \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.VersionChangeNotified',
        support_1.sts.tuple([
            enjinV100.V3MultiLocation,
            support_1.sts.number(),
            support_1.sts.array(function () {
                return enjinV100.V3MultiAsset
            }),
        ])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.VersionChangeNotified',
        support_1.sts.struct({
            destination: enjinV1026.V3MultiLocation,
            result: support_1.sts.number(),
            cost: support_1.sts.array(function () {
                return enjinV1026.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.VersionChangeNotified',
        support_1.sts.struct({
            destination: enjinV1032.V4Location,
            result: support_1.sts.number(),
            cost: support_1.sts.array(function () {
                return enjinV1032.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     *
     * \[ destination, result, cost \]
     */
    v100: new support_1.EventType(
        'XcmPallet.VersionChangeNotified',
        support_1.sts.tuple([
            v100.V3MultiLocation,
            support_1.sts.number(),
            support_1.sts.array(function () {
                return v100.V3MultiAsset
            }),
        ])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    v1026: new support_1.EventType(
        'XcmPallet.VersionChangeNotified',
        support_1.sts.struct({
            destination: v1026.V3MultiLocation,
            result: support_1.sts.number(),
            cost: support_1.sts.array(function () {
                return v1026.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    v1030: new support_1.EventType(
        'XcmPallet.VersionChangeNotified',
        support_1.sts.struct({
            destination: v1030.V4Location,
            result: support_1.sts.number(),
            cost: support_1.sts.array(function () {
                return v1030.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.supportedVersionChanged = {
    name: 'XcmPallet.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     *
     * \[ location, XCM version \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.SupportedVersionChanged',
        support_1.sts.tuple([enjinV100.V3MultiLocation, support_1.sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.SupportedVersionChanged',
        support_1.sts.struct({
            location: enjinV1026.V3MultiLocation,
            version: support_1.sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.SupportedVersionChanged',
        support_1.sts.struct({
            location: enjinV1032.V4Location,
            version: support_1.sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     *
     * \[ location, XCM version \]
     */
    v100: new support_1.EventType(
        'XcmPallet.SupportedVersionChanged',
        support_1.sts.tuple([v100.V3MultiLocation, support_1.sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v1026: new support_1.EventType(
        'XcmPallet.SupportedVersionChanged',
        support_1.sts.struct({
            location: v1026.V3MultiLocation,
            version: support_1.sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    v1030: new support_1.EventType(
        'XcmPallet.SupportedVersionChanged',
        support_1.sts.struct({
            location: v1030.V4Location,
            version: support_1.sts.number(),
        })
    ),
}
exports.notifyTargetSendFail = {
    name: 'XcmPallet.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     *
     * \[ location, query ID, error \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.NotifyTargetSendFail',
        support_1.sts.tuple([enjinV100.V3MultiLocation, support_1.sts.bigint(), enjinV100.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.NotifyTargetSendFail',
        support_1.sts.struct({
            location: enjinV1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            error: enjinV1026.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.NotifyTargetSendFail',
        support_1.sts.struct({
            location: enjinV1032.V4Location,
            queryId: support_1.sts.bigint(),
            error: enjinV1032.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     *
     * \[ location, query ID, error \]
     */
    v100: new support_1.EventType(
        'XcmPallet.NotifyTargetSendFail',
        support_1.sts.tuple([v100.V3MultiLocation, support_1.sts.bigint(), v100.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v1026: new support_1.EventType(
        'XcmPallet.NotifyTargetSendFail',
        support_1.sts.struct({
            location: v1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            error: v1026.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    v1030: new support_1.EventType(
        'XcmPallet.NotifyTargetSendFail',
        support_1.sts.struct({
            location: v1030.V4Location,
            queryId: support_1.sts.bigint(),
            error: v1030.V3Error,
        })
    ),
}
exports.notifyTargetMigrationFail = {
    name: 'XcmPallet.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     *
     * \[ location, query ID \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        support_1.sts.tuple([enjinV100.VersionedMultiLocation, support_1.sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        support_1.sts.struct({
            location: enjinV1026.VersionedMultiLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        support_1.sts.struct({
            location: enjinV1032.VersionedLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     *
     * \[ location, query ID \]
     */
    v100: new support_1.EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        support_1.sts.tuple([v100.VersionedMultiLocation, support_1.sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v1026: new support_1.EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        support_1.sts.struct({
            location: v1026.VersionedMultiLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    v1030: new support_1.EventType(
        'XcmPallet.NotifyTargetMigrationFail',
        support_1.sts.struct({
            location: v1030.VersionedLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.invalidQuerierVersion = {
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
    enjinV100: new support_1.EventType(
        'XcmPallet.InvalidQuerierVersion',
        support_1.sts.tuple([enjinV100.V3MultiLocation, support_1.sts.bigint()])
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
    enjinV1026: new support_1.EventType(
        'XcmPallet.InvalidQuerierVersion',
        support_1.sts.struct({
            origin: enjinV1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
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
    enjinV1032: new support_1.EventType(
        'XcmPallet.InvalidQuerierVersion',
        support_1.sts.struct({
            origin: enjinV1032.V4Location,
            queryId: support_1.sts.bigint(),
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
    v100: new support_1.EventType(
        'XcmPallet.InvalidQuerierVersion',
        support_1.sts.tuple([v100.V3MultiLocation, support_1.sts.bigint()])
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
    v1026: new support_1.EventType(
        'XcmPallet.InvalidQuerierVersion',
        support_1.sts.struct({
            origin: v1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
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
    v1030: new support_1.EventType(
        'XcmPallet.InvalidQuerierVersion',
        support_1.sts.struct({
            origin: v1030.V4Location,
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.invalidQuerier = {
    name: 'XcmPallet.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.InvalidQuerier',
        support_1.sts.tuple([
            enjinV100.V3MultiLocation,
            support_1.sts.bigint(),
            enjinV100.V3MultiLocation,
            support_1.sts.option(function () {
                return enjinV100.V3MultiLocation
            }),
        ])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.InvalidQuerier',
        support_1.sts.struct({
            origin: enjinV1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            expectedQuerier: enjinV1026.V3MultiLocation,
            maybeActualQuerier: support_1.sts.option(function () {
                return enjinV1026.V3MultiLocation
            }),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.InvalidQuerier',
        support_1.sts.struct({
            origin: enjinV1032.V4Location,
            queryId: support_1.sts.bigint(),
            expectedQuerier: enjinV1032.V4Location,
            maybeActualQuerier: support_1.sts.option(function () {
                return enjinV1032.V4Location
            }),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    v100: new support_1.EventType(
        'XcmPallet.InvalidQuerier',
        support_1.sts.tuple([
            v100.V3MultiLocation,
            support_1.sts.bigint(),
            v100.V3MultiLocation,
            support_1.sts.option(function () {
                return v100.V3MultiLocation
            }),
        ])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1026: new support_1.EventType(
        'XcmPallet.InvalidQuerier',
        support_1.sts.struct({
            origin: v1026.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            expectedQuerier: v1026.V3MultiLocation,
            maybeActualQuerier: support_1.sts.option(function () {
                return v1026.V3MultiLocation
            }),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    v1030: new support_1.EventType(
        'XcmPallet.InvalidQuerier',
        support_1.sts.struct({
            origin: v1030.V4Location,
            queryId: support_1.sts.bigint(),
            expectedQuerier: v1030.V4Location,
            maybeActualQuerier: support_1.sts.option(function () {
                return v1030.V4Location
            }),
        })
    ),
}
exports.versionNotifyStarted = {
    name: 'XcmPallet.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     *
     * \[ destination location, cost \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.VersionNotifyStarted',
        support_1.sts.tuple([
            enjinV100.V3MultiLocation,
            support_1.sts.array(function () {
                return enjinV100.V3MultiAsset
            }),
        ])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.VersionNotifyStarted',
        support_1.sts.struct({
            destination: enjinV1026.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return enjinV1026.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.VersionNotifyStarted',
        support_1.sts.struct({
            destination: enjinV1032.V4Location,
            cost: support_1.sts.array(function () {
                return enjinV1032.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     *
     * \[ destination location, cost \]
     */
    v100: new support_1.EventType(
        'XcmPallet.VersionNotifyStarted',
        support_1.sts.tuple([
            v100.V3MultiLocation,
            support_1.sts.array(function () {
                return v100.V3MultiAsset
            }),
        ])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v1026: new support_1.EventType(
        'XcmPallet.VersionNotifyStarted',
        support_1.sts.struct({
            destination: v1026.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return v1026.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    v1030: new support_1.EventType(
        'XcmPallet.VersionNotifyStarted',
        support_1.sts.struct({
            destination: v1030.V4Location,
            cost: support_1.sts.array(function () {
                return v1030.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.versionNotifyRequested = {
    name: 'XcmPallet.VersionNotifyRequested',
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.VersionNotifyRequested',
        support_1.sts.tuple([
            enjinV100.V3MultiLocation,
            support_1.sts.array(function () {
                return enjinV100.V3MultiAsset
            }),
        ])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.VersionNotifyRequested',
        support_1.sts.struct({
            destination: enjinV1026.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return enjinV1026.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.VersionNotifyRequested',
        support_1.sts.struct({
            destination: enjinV1032.V4Location,
            cost: support_1.sts.array(function () {
                return enjinV1032.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    v100: new support_1.EventType(
        'XcmPallet.VersionNotifyRequested',
        support_1.sts.tuple([
            v100.V3MultiLocation,
            support_1.sts.array(function () {
                return v100.V3MultiAsset
            }),
        ])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v1026: new support_1.EventType(
        'XcmPallet.VersionNotifyRequested',
        support_1.sts.struct({
            destination: v1026.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return v1026.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    v1030: new support_1.EventType(
        'XcmPallet.VersionNotifyRequested',
        support_1.sts.struct({
            destination: v1030.V4Location,
            cost: support_1.sts.array(function () {
                return v1030.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.versionNotifyUnrequested = {
    name: 'XcmPallet.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.VersionNotifyUnrequested',
        support_1.sts.tuple([
            enjinV100.V3MultiLocation,
            support_1.sts.array(function () {
                return enjinV100.V3MultiAsset
            }),
        ])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.VersionNotifyUnrequested',
        support_1.sts.struct({
            destination: enjinV1026.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return enjinV1026.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.VersionNotifyUnrequested',
        support_1.sts.struct({
            destination: enjinV1032.V4Location,
            cost: support_1.sts.array(function () {
                return enjinV1032.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    v100: new support_1.EventType(
        'XcmPallet.VersionNotifyUnrequested',
        support_1.sts.tuple([
            v100.V3MultiLocation,
            support_1.sts.array(function () {
                return v100.V3MultiAsset
            }),
        ])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     */
    v1026: new support_1.EventType(
        'XcmPallet.VersionNotifyUnrequested',
        support_1.sts.struct({
            destination: v1026.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return v1026.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    v1030: new support_1.EventType(
        'XcmPallet.VersionNotifyUnrequested',
        support_1.sts.struct({
            destination: v1030.V4Location,
            cost: support_1.sts.array(function () {
                return v1030.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.feesPaid = {
    name: 'XcmPallet.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     *
     * \[ paying location, fees \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.FeesPaid',
        support_1.sts.tuple([
            enjinV100.V3MultiLocation,
            support_1.sts.array(function () {
                return enjinV100.V3MultiAsset
            }),
        ])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.FeesPaid',
        support_1.sts.struct({
            paying: enjinV1026.V3MultiLocation,
            fees: support_1.sts.array(function () {
                return enjinV1026.V3MultiAsset
            }),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.FeesPaid',
        support_1.sts.struct({
            paying: enjinV1032.V4Location,
            fees: support_1.sts.array(function () {
                return enjinV1032.V4Asset
            }),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     *
     * \[ paying location, fees \]
     */
    v100: new support_1.EventType(
        'XcmPallet.FeesPaid',
        support_1.sts.tuple([
            v100.V3MultiLocation,
            support_1.sts.array(function () {
                return v100.V3MultiAsset
            }),
        ])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v1026: new support_1.EventType(
        'XcmPallet.FeesPaid',
        support_1.sts.struct({
            paying: v1026.V3MultiLocation,
            fees: support_1.sts.array(function () {
                return v1026.V3MultiAsset
            }),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    v1030: new support_1.EventType(
        'XcmPallet.FeesPaid',
        support_1.sts.struct({
            paying: v1030.V4Location,
            fees: support_1.sts.array(function () {
                return v1030.V4Asset
            }),
        })
    ),
}
exports.assetsClaimed = {
    name: 'XcmPallet.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     *
     * \[ hash, origin, assets \]
     */
    enjinV100: new support_1.EventType(
        'XcmPallet.AssetsClaimed',
        support_1.sts.tuple([enjinV100.H256, enjinV100.V3MultiLocation, enjinV100.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    enjinV1026: new support_1.EventType(
        'XcmPallet.AssetsClaimed',
        support_1.sts.struct({
            hash: enjinV1026.H256,
            origin: enjinV1026.V3MultiLocation,
            assets: enjinV1026.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.AssetsClaimed',
        support_1.sts.struct({
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
    v100: new support_1.EventType(
        'XcmPallet.AssetsClaimed',
        support_1.sts.tuple([v100.H256, v100.V3MultiLocation, v100.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v1026: new support_1.EventType(
        'XcmPallet.AssetsClaimed',
        support_1.sts.struct({
            hash: v1026.H256,
            origin: v1026.V3MultiLocation,
            assets: v1026.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    v1030: new support_1.EventType(
        'XcmPallet.AssetsClaimed',
        support_1.sts.struct({
            hash: v1030.H256,
            origin: v1030.V4Location,
            assets: v1030.VersionedAssets,
        })
    ),
}
exports.versionMigrationFinished = {
    name: 'XcmPallet.VersionMigrationFinished',
    /**
     * A XCM version migration finished.
     */
    enjinV1032: new support_1.EventType(
        'XcmPallet.VersionMigrationFinished',
        support_1.sts.struct({
            version: support_1.sts.number(),
        })
    ),
}
