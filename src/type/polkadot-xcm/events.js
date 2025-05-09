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
var matrixV500 = require('../matrixV500')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixEnjinV1004 = require('../matrixEnjinV1004')
var matrixV1004 = require('../matrixV1004')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
exports.attempted = {
    name: 'PolkadotXcm.Attempted',
    /**
     * Execution of an XCM message was attempted.
     *
     * \[ outcome \]
     */
    matrixEnjinV603: new support_1.EventType('PolkadotXcm.Attempted', matrixEnjinV603.V3Outcome),
    /**
     * Execution of an XCM message was attempted.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.Attempted',
        support_1.sts.struct({
            outcome: matrixEnjinV1004.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.Attempted',
        support_1.sts.struct({
            outcome: matrixEnjinV1012.V4Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     *
     * \[ outcome \]
     */
    matrixV500: new support_1.EventType('PolkadotXcm.Attempted', matrixV500.V3Outcome),
    /**
     * Execution of an XCM message was attempted.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.Attempted',
        support_1.sts.struct({
            outcome: matrixV1004.V3Outcome,
        })
    ),
    /**
     * Execution of an XCM message was attempted.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.Attempted',
        support_1.sts.struct({
            outcome: matrixV1010.V4Outcome,
        })
    ),
}
exports.sent = {
    name: 'PolkadotXcm.Sent',
    /**
     * A XCM message was sent.
     *
     * \[ origin, destination, message \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.Sent',
        support_1.sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            matrixEnjinV603.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixEnjinV603.V3Instruction
            }),
        ])
    ),
    /**
     * A XCM message was sent.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.Sent',
        support_1.sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            destination: matrixEnjinV1004.V3MultiLocation,
            message: support_1.sts.array(function () {
                return matrixEnjinV1004.V3Instruction
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.Sent',
        support_1.sts.struct({
            origin: matrixEnjinV1012.V4Location,
            destination: matrixEnjinV1012.V4Location,
            message: support_1.sts.array(function () {
                return matrixEnjinV1012.V4Instruction
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     *
     * \[ origin, destination, message \]
     */
    matrixV500: new support_1.EventType(
        'PolkadotXcm.Sent',
        support_1.sts.tuple([
            matrixV500.V3MultiLocation,
            matrixV500.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixV500.V3Instruction
            }),
        ])
    ),
    /**
     * A XCM message was sent.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.Sent',
        support_1.sts.struct({
            origin: matrixV1004.V3MultiLocation,
            destination: matrixV1004.V3MultiLocation,
            message: support_1.sts.array(function () {
                return matrixV1004.V3Instruction
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A XCM message was sent.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.Sent',
        support_1.sts.struct({
            origin: matrixV1010.V4Location,
            destination: matrixV1010.V4Location,
            message: support_1.sts.array(function () {
                return matrixV1010.V4Instruction
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.unexpectedResponse = {
    name: 'PolkadotXcm.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     *
     * \[ origin location, id \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.UnexpectedResponse',
        support_1.sts.tuple([matrixEnjinV603.V3MultiLocation, support_1.sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.UnexpectedResponse',
        support_1.sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.UnexpectedResponse',
        support_1.sts.struct({
            origin: matrixEnjinV1012.V4Location,
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.UnexpectedResponse',
        support_1.sts.tuple([matrixV500.V3MultiLocation, support_1.sts.bigint()])
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.UnexpectedResponse',
        support_1.sts.struct({
            origin: matrixV1004.V3MultiLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.UnexpectedResponse',
        support_1.sts.struct({
            origin: matrixV1010.V4Location,
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.responseReady = {
    name: 'PolkadotXcm.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     *
     * \[ id, response \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.ResponseReady',
        support_1.sts.tuple([support_1.sts.bigint(), matrixEnjinV603.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.ResponseReady',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            response: matrixEnjinV1004.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.ResponseReady',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            response: matrixEnjinV1012.V4Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     *
     * \[ id, response \]
     */
    matrixV500: new support_1.EventType(
        'PolkadotXcm.ResponseReady',
        support_1.sts.tuple([support_1.sts.bigint(), matrixV500.V3Response])
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.ResponseReady',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            response: matrixV1004.V3Response,
        })
    ),
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.ResponseReady',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            response: matrixV1010.V4Response,
        })
    ),
}
exports.notified = {
    name: 'PolkadotXcm.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     *
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.Notified',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.Notified',
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.Notified',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.Notified',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        })
    ),
}
exports.notifyOverweight = {
    name: 'PolkadotXcm.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     *
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.NotifyOverweight',
        support_1.sts.tuple([
            support_1.sts.bigint(),
            support_1.sts.number(),
            support_1.sts.number(),
            matrixEnjinV603.Weight,
            matrixEnjinV603.Weight,
        ])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.NotifyOverweight',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.NotifyOverweight',
        support_1.sts.tuple([
            support_1.sts.bigint(),
            support_1.sts.number(),
            support_1.sts.number(),
            matrixV500.Weight,
            matrixV500.Weight,
        ])
    ),
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.NotifyOverweight',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
            actualWeight: matrixV1004.Weight,
            maxBudgetedWeight: matrixV1004.Weight,
        })
    ),
}
exports.notifyDispatchError = {
    name: 'PolkadotXcm.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     *
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.NotifyDispatchError',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.NotifyDispatchError',
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.NotifyDispatchError',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.NotifyDispatchError',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        })
    ),
}
exports.notifyDecodeFailed = {
    name: 'PolkadotXcm.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     *
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.NotifyDecodeFailed',
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        support_1.sts.tuple([support_1.sts.bigint(), support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
            palletIndex: support_1.sts.number(),
            callIndex: support_1.sts.number(),
        })
    ),
}
exports.invalidResponder = {
    name: 'PolkadotXcm.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected location \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.InvalidResponder',
        support_1.sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return matrixEnjinV603.V3MultiLocation
            }),
        ])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.InvalidResponder',
        support_1.sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            expectedLocation: support_1.sts.option(function () {
                return matrixEnjinV1004.V3MultiLocation
            }),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.InvalidResponder',
        support_1.sts.struct({
            origin: matrixEnjinV1012.V4Location,
            queryId: support_1.sts.bigint(),
            expectedLocation: support_1.sts.option(function () {
                return matrixEnjinV1012.V4Location
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.InvalidResponder',
        support_1.sts.tuple([
            matrixV500.V3MultiLocation,
            support_1.sts.bigint(),
            support_1.sts.option(function () {
                return matrixV500.V3MultiLocation
            }),
        ])
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.InvalidResponder',
        support_1.sts.struct({
            origin: matrixV1004.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            expectedLocation: support_1.sts.option(function () {
                return matrixV1004.V3MultiLocation
            }),
        })
    ),
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.InvalidResponder',
        support_1.sts.struct({
            origin: matrixV1010.V4Location,
            queryId: support_1.sts.bigint(),
            expectedLocation: support_1.sts.option(function () {
                return matrixV1010.V4Location
            }),
        })
    ),
}
exports.invalidResponderVersion = {
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
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.InvalidResponderVersion',
        support_1.sts.tuple([matrixEnjinV603.V3MultiLocation, support_1.sts.bigint()])
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
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.InvalidResponderVersion',
        support_1.sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
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
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.InvalidResponderVersion',
        support_1.sts.struct({
            origin: matrixEnjinV1012.V4Location,
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.InvalidResponderVersion',
        support_1.sts.tuple([matrixV500.V3MultiLocation, support_1.sts.bigint()])
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
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.InvalidResponderVersion',
        support_1.sts.struct({
            origin: matrixV1004.V3MultiLocation,
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
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.InvalidResponderVersion',
        support_1.sts.struct({
            origin: matrixV1010.V4Location,
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.responseTaken = {
    name: 'PolkadotXcm.ResponseTaken',
    /**
     * Received query response has been read and removed.
     *
     * \[ id \]
     */
    matrixEnjinV603: new support_1.EventType('PolkadotXcm.ResponseTaken', support_1.sts.bigint()),
    /**
     * Received query response has been read and removed.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.ResponseTaken',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * Received query response has been read and removed.
     *
     * \[ id \]
     */
    matrixV500: new support_1.EventType('PolkadotXcm.ResponseTaken', support_1.sts.bigint()),
    /**
     * Received query response has been read and removed.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.ResponseTaken',
        support_1.sts.struct({
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.assetsTrapped = {
    name: 'PolkadotXcm.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     *
     * \[ hash, origin, assets \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.AssetsTrapped',
        support_1.sts.tuple([
            matrixEnjinV603.H256,
            matrixEnjinV603.V3MultiLocation,
            matrixEnjinV603.VersionedMultiAssets,
        ])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.AssetsTrapped',
        support_1.sts.struct({
            hash: matrixEnjinV1004.H256,
            origin: matrixEnjinV1004.V3MultiLocation,
            assets: matrixEnjinV1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.AssetsTrapped',
        support_1.sts.struct({
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.AssetsTrapped',
        support_1.sts.tuple([matrixV500.H256, matrixV500.V3MultiLocation, matrixV500.VersionedMultiAssets])
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.AssetsTrapped',
        support_1.sts.struct({
            hash: matrixV1004.H256,
            origin: matrixV1004.V3MultiLocation,
            assets: matrixV1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been placed in an asset trap.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.AssetsTrapped',
        support_1.sts.struct({
            hash: matrixV1010.H256,
            origin: matrixV1010.V4Location,
            assets: matrixV1010.VersionedAssets,
        })
    ),
}
exports.versionChangeNotified = {
    name: 'PolkadotXcm.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     *
     * \[ destination, result, cost \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.VersionChangeNotified',
        support_1.sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            support_1.sts.number(),
            support_1.sts.array(function () {
                return matrixEnjinV603.V3MultiAsset
            }),
        ])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.VersionChangeNotified',
        support_1.sts.struct({
            destination: matrixEnjinV1004.V3MultiLocation,
            result: support_1.sts.number(),
            cost: support_1.sts.array(function () {
                return matrixEnjinV1004.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.VersionChangeNotified',
        support_1.sts.struct({
            destination: matrixEnjinV1012.V4Location,
            result: support_1.sts.number(),
            cost: support_1.sts.array(function () {
                return matrixEnjinV1012.V4Asset
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.VersionChangeNotified',
        support_1.sts.tuple([
            matrixV500.V3MultiLocation,
            support_1.sts.number(),
            support_1.sts.array(function () {
                return matrixV500.V3MultiAsset
            }),
        ])
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.VersionChangeNotified',
        support_1.sts.struct({
            destination: matrixV1004.V3MultiLocation,
            result: support_1.sts.number(),
            cost: support_1.sts.array(function () {
                return matrixV1004.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * An XCM version change notification message has been attempted to be sent.
     *
     * The cost of sending it (borne by the chain) is included.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.VersionChangeNotified',
        support_1.sts.struct({
            destination: matrixV1010.V4Location,
            result: support_1.sts.number(),
            cost: support_1.sts.array(function () {
                return matrixV1010.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.supportedVersionChanged = {
    name: 'PolkadotXcm.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     *
     * \[ location, XCM version \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.SupportedVersionChanged',
        support_1.sts.tuple([matrixEnjinV603.V3MultiLocation, support_1.sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.SupportedVersionChanged',
        support_1.sts.struct({
            location: matrixEnjinV1004.V3MultiLocation,
            version: support_1.sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.SupportedVersionChanged',
        support_1.sts.struct({
            location: matrixEnjinV1012.V4Location,
            version: support_1.sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     *
     * \[ location, XCM version \]
     */
    matrixV500: new support_1.EventType(
        'PolkadotXcm.SupportedVersionChanged',
        support_1.sts.tuple([matrixV500.V3MultiLocation, support_1.sts.number()])
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.SupportedVersionChanged',
        support_1.sts.struct({
            location: matrixV1004.V3MultiLocation,
            version: support_1.sts.number(),
        })
    ),
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.SupportedVersionChanged',
        support_1.sts.struct({
            location: matrixV1010.V4Location,
            version: support_1.sts.number(),
        })
    ),
}
exports.notifyTargetSendFail = {
    name: 'PolkadotXcm.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     *
     * \[ location, query ID, error \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        support_1.sts.tuple([matrixEnjinV603.V3MultiLocation, support_1.sts.bigint(), matrixEnjinV603.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        support_1.sts.struct({
            location: matrixEnjinV1004.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            error: matrixEnjinV1004.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        support_1.sts.struct({
            location: matrixEnjinV1012.V4Location,
            queryId: support_1.sts.bigint(),
            error: matrixEnjinV1012.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     *
     * \[ location, query ID, error \]
     */
    matrixV500: new support_1.EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        support_1.sts.tuple([matrixV500.V3MultiLocation, support_1.sts.bigint(), matrixV500.V3Error])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        support_1.sts.struct({
            location: matrixV1004.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            error: matrixV1004.V3Error,
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        support_1.sts.struct({
            location: matrixV1010.V4Location,
            queryId: support_1.sts.bigint(),
            error: matrixV1010.V3Error,
        })
    ),
}
exports.notifyTargetMigrationFail = {
    name: 'PolkadotXcm.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     *
     * \[ location, query ID \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        support_1.sts.tuple([matrixEnjinV603.VersionedMultiLocation, support_1.sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        support_1.sts.struct({
            location: matrixEnjinV1004.VersionedMultiLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        support_1.sts.struct({
            location: matrixEnjinV1012.VersionedLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     *
     * \[ location, query ID \]
     */
    matrixV500: new support_1.EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        support_1.sts.tuple([matrixV500.VersionedMultiLocation, support_1.sts.bigint()])
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        support_1.sts.struct({
            location: matrixV1004.VersionedMultiLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        support_1.sts.struct({
            location: matrixV1010.VersionedLocation,
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.invalidQuerierVersion = {
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
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        support_1.sts.tuple([matrixEnjinV603.V3MultiLocation, support_1.sts.bigint()])
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
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        support_1.sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
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
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        support_1.sts.struct({
            origin: matrixEnjinV1012.V4Location,
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        support_1.sts.tuple([matrixV500.V3MultiLocation, support_1.sts.bigint()])
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
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        support_1.sts.struct({
            origin: matrixV1004.V3MultiLocation,
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
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        support_1.sts.struct({
            origin: matrixV1010.V4Location,
            queryId: support_1.sts.bigint(),
        })
    ),
}
exports.invalidQuerier = {
    name: 'PolkadotXcm.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     *
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.InvalidQuerier',
        support_1.sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            support_1.sts.bigint(),
            matrixEnjinV603.V3MultiLocation,
            support_1.sts.option(function () {
                return matrixEnjinV603.V3MultiLocation
            }),
        ])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.InvalidQuerier',
        support_1.sts.struct({
            origin: matrixEnjinV1004.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            expectedQuerier: matrixEnjinV1004.V3MultiLocation,
            maybeActualQuerier: support_1.sts.option(function () {
                return matrixEnjinV1004.V3MultiLocation
            }),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.InvalidQuerier',
        support_1.sts.struct({
            origin: matrixEnjinV1012.V4Location,
            queryId: support_1.sts.bigint(),
            expectedQuerier: matrixEnjinV1012.V4Location,
            maybeActualQuerier: support_1.sts.option(function () {
                return matrixEnjinV1012.V4Location
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.InvalidQuerier',
        support_1.sts.tuple([
            matrixV500.V3MultiLocation,
            support_1.sts.bigint(),
            matrixV500.V3MultiLocation,
            support_1.sts.option(function () {
                return matrixV500.V3MultiLocation
            }),
        ])
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.InvalidQuerier',
        support_1.sts.struct({
            origin: matrixV1004.V3MultiLocation,
            queryId: support_1.sts.bigint(),
            expectedQuerier: matrixV1004.V3MultiLocation,
            maybeActualQuerier: support_1.sts.option(function () {
                return matrixV1004.V3MultiLocation
            }),
        })
    ),
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.InvalidQuerier',
        support_1.sts.struct({
            origin: matrixV1010.V4Location,
            queryId: support_1.sts.bigint(),
            expectedQuerier: matrixV1010.V4Location,
            maybeActualQuerier: support_1.sts.option(function () {
                return matrixV1010.V4Location
            }),
        })
    ),
}
exports.versionNotifyStarted = {
    name: 'PolkadotXcm.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     *
     * \[ destination location, cost \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.VersionNotifyStarted',
        support_1.sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixEnjinV603.V3MultiAsset
            }),
        ])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.VersionNotifyStarted',
        support_1.sts.struct({
            destination: matrixEnjinV1004.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return matrixEnjinV1004.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.VersionNotifyStarted',
        support_1.sts.struct({
            destination: matrixEnjinV1012.V4Location,
            cost: support_1.sts.array(function () {
                return matrixEnjinV1012.V4Asset
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.VersionNotifyStarted',
        support_1.sts.tuple([
            matrixV500.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixV500.V3MultiAsset
            }),
        ])
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.VersionNotifyStarted',
        support_1.sts.struct({
            destination: matrixV1004.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return matrixV1004.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.VersionNotifyStarted',
        support_1.sts.struct({
            destination: matrixV1010.V4Location,
            cost: support_1.sts.array(function () {
                return matrixV1010.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.versionNotifyRequested = {
    name: 'PolkadotXcm.VersionNotifyRequested',
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.VersionNotifyRequested',
        support_1.sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixEnjinV603.V3MultiAsset
            }),
        ])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.VersionNotifyRequested',
        support_1.sts.struct({
            destination: matrixEnjinV1004.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return matrixEnjinV1004.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.VersionNotifyRequested',
        support_1.sts.struct({
            destination: matrixEnjinV1012.V4Location,
            cost: support_1.sts.array(function () {
                return matrixEnjinV1012.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    matrixV500: new support_1.EventType(
        'PolkadotXcm.VersionNotifyRequested',
        support_1.sts.tuple([
            matrixV500.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixV500.V3MultiAsset
            }),
        ])
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.VersionNotifyRequested',
        support_1.sts.struct({
            destination: matrixV1004.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return matrixV1004.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain send us XCM version change notifications.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.VersionNotifyRequested',
        support_1.sts.struct({
            destination: matrixV1010.V4Location,
            cost: support_1.sts.array(function () {
                return matrixV1010.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.versionNotifyUnrequested = {
    name: 'PolkadotXcm.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        support_1.sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixEnjinV603.V3MultiAsset
            }),
        ])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        support_1.sts.struct({
            destination: matrixEnjinV1004.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return matrixEnjinV1004.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        support_1.sts.struct({
            destination: matrixEnjinV1012.V4Location,
            cost: support_1.sts.array(function () {
                return matrixEnjinV1012.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     *
     * \[ destination location, cost \]
     */
    matrixV500: new support_1.EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        support_1.sts.tuple([
            matrixV500.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixV500.V3MultiAsset
            }),
        ])
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        support_1.sts.struct({
            destination: matrixV1004.V3MultiLocation,
            cost: support_1.sts.array(function () {
                return matrixV1004.V3MultiAsset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
    /**
     * We have requested that a remote chain stops sending us XCM version change
     * notifications.
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        support_1.sts.struct({
            destination: matrixV1010.V4Location,
            cost: support_1.sts.array(function () {
                return matrixV1010.V4Asset
            }),
            messageId: support_1.sts.bytes(),
        })
    ),
}
exports.feesPaid = {
    name: 'PolkadotXcm.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     *
     * \[ paying location, fees \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.FeesPaid',
        support_1.sts.tuple([
            matrixEnjinV603.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixEnjinV603.V3MultiAsset
            }),
        ])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.FeesPaid',
        support_1.sts.struct({
            paying: matrixEnjinV1004.V3MultiLocation,
            fees: support_1.sts.array(function () {
                return matrixEnjinV1004.V3MultiAsset
            }),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.FeesPaid',
        support_1.sts.struct({
            paying: matrixEnjinV1012.V4Location,
            fees: support_1.sts.array(function () {
                return matrixEnjinV1012.V4Asset
            }),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     *
     * \[ paying location, fees \]
     */
    matrixV500: new support_1.EventType(
        'PolkadotXcm.FeesPaid',
        support_1.sts.tuple([
            matrixV500.V3MultiLocation,
            support_1.sts.array(function () {
                return matrixV500.V3MultiAsset
            }),
        ])
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.FeesPaid',
        support_1.sts.struct({
            paying: matrixV1004.V3MultiLocation,
            fees: support_1.sts.array(function () {
                return matrixV1004.V3MultiAsset
            }),
        })
    ),
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.FeesPaid',
        support_1.sts.struct({
            paying: matrixV1010.V4Location,
            fees: support_1.sts.array(function () {
                return matrixV1010.V4Asset
            }),
        })
    ),
}
exports.assetsClaimed = {
    name: 'PolkadotXcm.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     *
     * \[ hash, origin, assets \]
     */
    matrixEnjinV603: new support_1.EventType(
        'PolkadotXcm.AssetsClaimed',
        support_1.sts.tuple([
            matrixEnjinV603.H256,
            matrixEnjinV603.V3MultiLocation,
            matrixEnjinV603.VersionedMultiAssets,
        ])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    matrixEnjinV1004: new support_1.EventType(
        'PolkadotXcm.AssetsClaimed',
        support_1.sts.struct({
            hash: matrixEnjinV1004.H256,
            origin: matrixEnjinV1004.V3MultiLocation,
            assets: matrixEnjinV1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.AssetsClaimed',
        support_1.sts.struct({
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
    matrixV500: new support_1.EventType(
        'PolkadotXcm.AssetsClaimed',
        support_1.sts.tuple([matrixV500.H256, matrixV500.V3MultiLocation, matrixV500.VersionedMultiAssets])
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    matrixV1004: new support_1.EventType(
        'PolkadotXcm.AssetsClaimed',
        support_1.sts.struct({
            hash: matrixV1004.H256,
            origin: matrixV1004.V3MultiLocation,
            assets: matrixV1004.VersionedMultiAssets,
        })
    ),
    /**
     * Some assets have been claimed from an asset trap
     */
    matrixV1010: new support_1.EventType(
        'PolkadotXcm.AssetsClaimed',
        support_1.sts.struct({
            hash: matrixV1010.H256,
            origin: matrixV1010.V4Location,
            assets: matrixV1010.VersionedAssets,
        })
    ),
}
exports.versionMigrationFinished = {
    name: 'PolkadotXcm.VersionMigrationFinished',
    /**
     * A XCM version migration finished.
     */
    matrixEnjinV1012: new support_1.EventType(
        'PolkadotXcm.VersionMigrationFinished',
        support_1.sts.struct({
            version: support_1.sts.number(),
        })
    ),
}
