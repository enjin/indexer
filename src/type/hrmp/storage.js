'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.hrmpChannelDigests =
    exports.hrmpChannelContents =
    exports.hrmpEgressChannelsIndex =
    exports.hrmpIngressChannelsIndex =
    exports.hrmpChannels =
    exports.hrmpWatermarks =
    exports.hrmpCloseChannelRequestsList =
    exports.hrmpCloseChannelRequests =
    exports.hrmpAcceptedChannelRequestCount =
    exports.hrmpOpenChannelRequestCount =
    exports.hrmpOpenChannelRequestsList =
    exports.hrmpOpenChannelRequests =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
exports.hrmpOpenChannelRequests = {
    /**
     *  The set of pending HRMP open channel requests.
     *
     *  The set is accompanied by a list for iteration.
     *
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpOpenChannelRequests',
        'Optional',
        [enjinV100.HrmpChannelId],
        enjinV100.HrmpOpenChannelRequest
    ),
}
exports.hrmpOpenChannelRequestsList = {
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpOpenChannelRequestsList',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.HrmpChannelId
        })
    ),
}
exports.hrmpOpenChannelRequestCount = {
    /**
     *  This mapping tracks how many open channel requests are initiated by a given sender para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
     *  `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
     */
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpOpenChannelRequestCount',
        'Default',
        [enjinV100.Id],
        support_1.sts.number()
    ),
}
exports.hrmpAcceptedChannelRequestCount = {
    /**
     *  This mapping tracks how many open channel requests were accepted by a given recipient para.
     *  Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
     *  `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
     */
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpAcceptedChannelRequestCount',
        'Default',
        [enjinV100.Id],
        support_1.sts.number()
    ),
}
exports.hrmpCloseChannelRequests = {
    /**
     *  A set of pending HRMP close channel requests that are going to be closed during the session
     *  change. Used for checking if a given channel is registered for closure.
     *
     *  The set is accompanied by a list for iteration.
     *
     *  Invariant:
     *  - There are no channels that exists in list but not in the set and vice versa.
     */
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpCloseChannelRequests',
        'Optional',
        [enjinV100.HrmpChannelId],
        support_1.sts.unit()
    ),
}
exports.hrmpCloseChannelRequestsList = {
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpCloseChannelRequestsList',
        'Default',
        [],
        support_1.sts.array(function () {
            return enjinV100.HrmpChannelId
        })
    ),
}
exports.hrmpWatermarks = {
    /**
     *  The HRMP watermark associated with each para.
     *  Invariant:
     *  - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a session.
     */
    enjinV100: new support_1.StorageType('Hrmp.HrmpWatermarks', 'Optional', [enjinV100.Id], support_1.sts.number()),
}
exports.hrmpChannels = {
    /**
     *  HRMP channel data associated with each para.
     *  Invariant:
     *  - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
     */
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpChannels',
        'Optional',
        [enjinV100.HrmpChannelId],
        enjinV100.HrmpChannel
    ),
}
exports.hrmpIngressChannelsIndex = {
    /**
     *  Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
     *  I.e.
     *
     *  (a) ingress index allows to find all the senders for a given recipient.
     *  (b) egress index allows to find all the recipients for a given sender.
     *
     *  Invariants:
     *  - for each ingress index entry for `P` each item `I` in the index should present in
     *    `HrmpChannels` as `(I, P)`.
     *  - for each egress index entry for `P` each item `E` in the index should present in
     *    `HrmpChannels` as `(P, E)`.
     *  - there should be no other dangling channels in `HrmpChannels`.
     *  - the vectors are sorted.
     */
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpIngressChannelsIndex',
        'Default',
        [enjinV100.Id],
        support_1.sts.array(function () {
            return enjinV100.Id
        })
    ),
}
exports.hrmpEgressChannelsIndex = {
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpEgressChannelsIndex',
        'Default',
        [enjinV100.Id],
        support_1.sts.array(function () {
            return enjinV100.Id
        })
    ),
}
exports.hrmpChannelContents = {
    /**
     *  Storage for the messages for each channel.
     *  Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
     */
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpChannelContents',
        'Default',
        [enjinV100.HrmpChannelId],
        support_1.sts.array(function () {
            return enjinV100.InboundHrmpMessage
        })
    ),
}
exports.hrmpChannelDigests = {
    /**
     *  Maintains a mapping that can be used to answer the question: What paras sent a message at
     *  the given block number for a given receiver. Invariants:
     *  - The inner `Vec<ParaId>` is never empty.
     *  - The inner `Vec<ParaId>` cannot store two same `ParaId`.
     *  - The outer vector is sorted ascending by block number and cannot store two items with the
     *    same block number.
     */
    enjinV100: new support_1.StorageType(
        'Hrmp.HrmpChannelDigests',
        'Default',
        [enjinV100.Id],
        support_1.sts.array(function () {
            return support_1.sts.tuple(function () {
                return [
                    support_1.sts.number(),
                    support_1.sts.array(function () {
                        return enjinV100.Id
                    }),
                ]
            })
        })
    ),
}
