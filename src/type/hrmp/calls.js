'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.establishChannelWithSystem =
    exports.pokeChannelDeposits =
    exports.establishSystemChannel =
    exports.forceOpenHrmpChannel =
    exports.hrmpCancelOpenRequest =
    exports.forceProcessHrmpClose =
    exports.forceProcessHrmpOpen =
    exports.forceCleanHrmp =
    exports.hrmpCloseChannel =
    exports.hrmpAcceptOpenChannel =
    exports.hrmpInitOpenChannel =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
exports.hrmpInitOpenChannel = {
    name: 'Hrmp.hrmp_init_open_channel',
    /**
     * Initiate opening a channel from a parachain to a given recipient with given channel
     * parameters.
     *
     * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
     * - `proposed_max_message_size` - specifies the maximum size of the messages.
     *
     * These numbers are a subject to the relay-chain configuration limits.
     *
     * The channel can be opened only after the recipient confirms it and only on a session
     * change.
     */
    enjinV100: new support_1.CallType(
        'Hrmp.hrmp_init_open_channel',
        support_1.sts.struct({
            recipient: enjinV100.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        })
    ),
}
exports.hrmpAcceptOpenChannel = {
    name: 'Hrmp.hrmp_accept_open_channel',
    /**
     * Accept a pending open channel request from the given sender.
     *
     * The channel will be opened only on the next session boundary.
     */
    enjinV100: new support_1.CallType(
        'Hrmp.hrmp_accept_open_channel',
        support_1.sts.struct({
            sender: enjinV100.Id,
        })
    ),
}
exports.hrmpCloseChannel = {
    name: 'Hrmp.hrmp_close_channel',
    /**
     * Initiate unilateral closing of a channel. The origin must be either the sender or the
     * recipient in the channel being closed.
     *
     * The closure can only happen on a session change.
     */
    enjinV100: new support_1.CallType(
        'Hrmp.hrmp_close_channel',
        support_1.sts.struct({
            channelId: enjinV100.HrmpChannelId,
        })
    ),
}
exports.forceCleanHrmp = {
    name: 'Hrmp.force_clean_hrmp',
    /**
     * This extrinsic triggers the cleanup of all the HRMP storage items that
     * a para may have. Normally this happens once per session, but this allows
     * you to trigger the cleanup immediately for a specific parachain.
     *
     * Origin must be Root.
     *
     * Number of inbound and outbound channels for `para` must be provided as witness data of weighing.
     */
    enjinV100: new support_1.CallType(
        'Hrmp.force_clean_hrmp',
        support_1.sts.struct({
            para: enjinV100.Id,
            inbound: support_1.sts.number(),
            outbound: support_1.sts.number(),
        })
    ),
    /**
     * This extrinsic triggers the cleanup of all the HRMP storage items that a para may have.
     * Normally this happens once per session, but this allows you to trigger the cleanup
     * immediately for a specific parachain.
     *
     * Number of inbound and outbound channels for `para` must be provided as witness data.
     *
     * Origin must be the `ChannelManager`.
     */
    enjinV1032: new support_1.CallType(
        'Hrmp.force_clean_hrmp',
        support_1.sts.struct({
            para: enjinV1032.Id,
            numInbound: support_1.sts.number(),
            numOutbound: support_1.sts.number(),
        })
    ),
    /**
     * This extrinsic triggers the cleanup of all the HRMP storage items that
     * a para may have. Normally this happens once per session, but this allows
     * you to trigger the cleanup immediately for a specific parachain.
     *
     * Origin must be Root.
     *
     * Number of inbound and outbound channels for `para` must be provided as witness data of weighing.
     */
    v100: new support_1.CallType(
        'Hrmp.force_clean_hrmp',
        support_1.sts.struct({
            para: v100.Id,
            inbound: support_1.sts.number(),
            outbound: support_1.sts.number(),
        })
    ),
    /**
     * This extrinsic triggers the cleanup of all the HRMP storage items that a para may have.
     * Normally this happens once per session, but this allows you to trigger the cleanup
     * immediately for a specific parachain.
     *
     * Number of inbound and outbound channels for `para` must be provided as witness data.
     *
     * Origin must be the `ChannelManager`.
     */
    v1030: new support_1.CallType(
        'Hrmp.force_clean_hrmp',
        support_1.sts.struct({
            para: v1030.Id,
            numInbound: support_1.sts.number(),
            numOutbound: support_1.sts.number(),
        })
    ),
}
exports.forceProcessHrmpOpen = {
    name: 'Hrmp.force_process_hrmp_open',
    /**
     * Force process HRMP open channel requests.
     *
     * If there are pending HRMP open channel requests, you can use this
     * function process all of those requests immediately.
     *
     * Total number of opening channels must be provided as witness data of weighing.
     */
    enjinV100: new support_1.CallType(
        'Hrmp.force_process_hrmp_open',
        support_1.sts.struct({
            channels: support_1.sts.number(),
        })
    ),
}
exports.forceProcessHrmpClose = {
    name: 'Hrmp.force_process_hrmp_close',
    /**
     * Force process HRMP close channel requests.
     *
     * If there are pending HRMP close channel requests, you can use this
     * function process all of those requests immediately.
     *
     * Total number of closing channels must be provided as witness data of weighing.
     */
    enjinV100: new support_1.CallType(
        'Hrmp.force_process_hrmp_close',
        support_1.sts.struct({
            channels: support_1.sts.number(),
        })
    ),
}
exports.hrmpCancelOpenRequest = {
    name: 'Hrmp.hrmp_cancel_open_request',
    /**
     * This cancels a pending open channel request. It can be canceled by either of the sender
     * or the recipient for that request. The origin must be either of those.
     *
     * The cancellation happens immediately. It is not possible to cancel the request if it is
     * already accepted.
     *
     * Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as
     * witness data.
     */
    enjinV100: new support_1.CallType(
        'Hrmp.hrmp_cancel_open_request',
        support_1.sts.struct({
            channelId: enjinV100.HrmpChannelId,
            openRequests: support_1.sts.number(),
        })
    ),
}
exports.forceOpenHrmpChannel = {
    name: 'Hrmp.force_open_hrmp_channel',
    /**
     * Open a channel from a `sender` to a `recipient` `ParaId` using the Root origin. Although
     * opened by Root, the `max_capacity` and `max_message_size` are still subject to the Relay
     * Chain's configured limits.
     *
     * Expected use is when one of the `ParaId`s involved in the channel is governed by the
     * Relay Chain, e.g. a common good parachain.
     */
    enjinV100: new support_1.CallType(
        'Hrmp.force_open_hrmp_channel',
        support_1.sts.struct({
            sender: enjinV100.Id,
            recipient: enjinV100.Id,
            maxCapacity: support_1.sts.number(),
            maxMessageSize: support_1.sts.number(),
        })
    ),
}
exports.establishSystemChannel = {
    name: 'Hrmp.establish_system_channel',
    /**
     * Establish an HRMP channel between two system chains. If the channel does not already
     * exist, the transaction fees will be refunded to the caller. The system does not take
     * deposits for channels between system chains, and automatically sets the message number
     * and size limits to the maximum allowed by the network's configuration.
     *
     * Arguments:
     *
     * - `sender`: A system chain, `ParaId`.
     * - `recipient`: A system chain, `ParaId`.
     *
     * Any signed origin can call this function, but _both_ inputs MUST be system chains. If
     * the channel does not exist yet, there is no fee.
     */
    enjinV1032: new support_1.CallType(
        'Hrmp.establish_system_channel',
        support_1.sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
        })
    ),
}
exports.pokeChannelDeposits = {
    name: 'Hrmp.poke_channel_deposits',
    /**
     * Update the deposits held for an HRMP channel to the latest `Configuration`. Channels
     * with system chains do not require a deposit.
     *
     * Arguments:
     *
     * - `sender`: A chain, `ParaId`.
     * - `recipient`: A chain, `ParaId`.
     *
     * Any signed origin can call this function.
     */
    enjinV1032: new support_1.CallType(
        'Hrmp.poke_channel_deposits',
        support_1.sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
        })
    ),
}
exports.establishChannelWithSystem = {
    name: 'Hrmp.establish_channel_with_system',
    /**
     * Establish a bidirectional HRMP channel between a parachain and a system chain.
     *
     * Arguments:
     *
     * - `target_system_chain`: A system chain, `ParaId`.
     *
     * The origin needs to be the parachain origin.
     */
    enjinV1050: new support_1.CallType(
        'Hrmp.establish_channel_with_system',
        support_1.sts.struct({
            targetSystemChain: enjinV1050.Id,
        })
    ),
}
