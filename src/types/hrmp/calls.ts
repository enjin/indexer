import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as enjinV1050 from '../enjinV1050'

export const hrmpInitOpenChannel = {
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
    enjinV100: new CallType(
        'Hrmp.hrmp_init_open_channel',
        sts.struct({
            recipient: enjinV100.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const hrmpAcceptOpenChannel = {
    name: 'Hrmp.hrmp_accept_open_channel',
    /**
     * Accept a pending open channel request from the given sender.
     *
     * The channel will be opened only on the next session boundary.
     */
    enjinV100: new CallType(
        'Hrmp.hrmp_accept_open_channel',
        sts.struct({
            sender: enjinV100.Id,
        })
    ),
}

export const hrmpCloseChannel = {
    name: 'Hrmp.hrmp_close_channel',
    /**
     * Initiate unilateral closing of a channel. The origin must be either the sender or the
     * recipient in the channel being closed.
     *
     * The closure can only happen on a session change.
     */
    enjinV100: new CallType(
        'Hrmp.hrmp_close_channel',
        sts.struct({
            channelId: enjinV100.HrmpChannelId,
        })
    ),
}

export const forceCleanHrmp = {
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
    enjinV100: new CallType(
        'Hrmp.force_clean_hrmp',
        sts.struct({
            para: enjinV100.Id,
            inbound: sts.number(),
            outbound: sts.number(),
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
    enjinV1032: new CallType(
        'Hrmp.force_clean_hrmp',
        sts.struct({
            para: enjinV1032.Id,
            numInbound: sts.number(),
            numOutbound: sts.number(),
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
    v100: new CallType(
        'Hrmp.force_clean_hrmp',
        sts.struct({
            para: v100.Id,
            inbound: sts.number(),
            outbound: sts.number(),
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
    v1030: new CallType(
        'Hrmp.force_clean_hrmp',
        sts.struct({
            para: v1030.Id,
            numInbound: sts.number(),
            numOutbound: sts.number(),
        })
    ),
}

export const forceProcessHrmpOpen = {
    name: 'Hrmp.force_process_hrmp_open',
    /**
     * Force process HRMP open channel requests.
     *
     * If there are pending HRMP open channel requests, you can use this
     * function process all of those requests immediately.
     *
     * Total number of opening channels must be provided as witness data of weighing.
     */
    enjinV100: new CallType(
        'Hrmp.force_process_hrmp_open',
        sts.struct({
            channels: sts.number(),
        })
    ),
}

export const forceProcessHrmpClose = {
    name: 'Hrmp.force_process_hrmp_close',
    /**
     * Force process HRMP close channel requests.
     *
     * If there are pending HRMP close channel requests, you can use this
     * function process all of those requests immediately.
     *
     * Total number of closing channels must be provided as witness data of weighing.
     */
    enjinV100: new CallType(
        'Hrmp.force_process_hrmp_close',
        sts.struct({
            channels: sts.number(),
        })
    ),
}

export const hrmpCancelOpenRequest = {
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
    enjinV100: new CallType(
        'Hrmp.hrmp_cancel_open_request',
        sts.struct({
            channelId: enjinV100.HrmpChannelId,
            openRequests: sts.number(),
        })
    ),
}

export const forceOpenHrmpChannel = {
    name: 'Hrmp.force_open_hrmp_channel',
    /**
     * Open a channel from a `sender` to a `recipient` `ParaId` using the Root origin. Although
     * opened by Root, the `max_capacity` and `max_message_size` are still subject to the Relay
     * Chain's configured limits.
     *
     * Expected use is when one of the `ParaId`s involved in the channel is governed by the
     * Relay Chain, e.g. a common good parachain.
     */
    enjinV100: new CallType(
        'Hrmp.force_open_hrmp_channel',
        sts.struct({
            sender: enjinV100.Id,
            recipient: enjinV100.Id,
            maxCapacity: sts.number(),
            maxMessageSize: sts.number(),
        })
    ),
}

export const establishSystemChannel = {
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
    enjinV1032: new CallType(
        'Hrmp.establish_system_channel',
        sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
        })
    ),
}

export const pokeChannelDeposits = {
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
    enjinV1032: new CallType(
        'Hrmp.poke_channel_deposits',
        sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
        })
    ),
}

export const establishChannelWithSystem = {
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
    enjinV1050: new CallType(
        'Hrmp.establish_channel_with_system',
        sts.struct({
            targetSystemChain: enjinV1050.Id,
        })
    ),
}
