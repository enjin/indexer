import { sts, Block, Bytes, Option, Result, EventType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const openChannelRequested = {
    name: 'Hrmp.OpenChannelRequested',
    /**
     * Open HRMP channel requested.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    enjinV100: new EventType(
        'Hrmp.OpenChannelRequested',
        sts.tuple([enjinV100.Id, enjinV100.Id, sts.number(), sts.number()])
    ),
    /**
     * Open HRMP channel requested.
     */
    enjinV1032: new EventType(
        'Hrmp.OpenChannelRequested',
        sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
    /**
     * Open HRMP channel requested.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    v100: new EventType('Hrmp.OpenChannelRequested', sts.tuple([v100.Id, v100.Id, sts.number(), sts.number()])),
    /**
     * Open HRMP channel requested.
     */
    v1030: new EventType(
        'Hrmp.OpenChannelRequested',
        sts.struct({
            sender: v1030.Id,
            recipient: v1030.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const openChannelCanceled = {
    name: 'Hrmp.OpenChannelCanceled',
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    enjinV100: new EventType('Hrmp.OpenChannelCanceled', sts.tuple([enjinV100.Id, enjinV100.HrmpChannelId])),
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     */
    enjinV1032: new EventType(
        'Hrmp.OpenChannelCanceled',
        sts.struct({
            byParachain: enjinV1032.Id,
            channelId: enjinV1032.HrmpChannelId,
        })
    ),
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    v100: new EventType('Hrmp.OpenChannelCanceled', sts.tuple([v100.Id, v100.HrmpChannelId])),
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     */
    v1030: new EventType(
        'Hrmp.OpenChannelCanceled',
        sts.struct({
            byParachain: v1030.Id,
            channelId: v1030.HrmpChannelId,
        })
    ),
}

export const openChannelAccepted = {
    name: 'Hrmp.OpenChannelAccepted',
    /**
     * Open HRMP channel accepted. `[sender, recipient]`
     */
    enjinV100: new EventType('Hrmp.OpenChannelAccepted', sts.tuple([enjinV100.Id, enjinV100.Id])),
    /**
     * Open HRMP channel accepted.
     */
    enjinV1032: new EventType(
        'Hrmp.OpenChannelAccepted',
        sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
        })
    ),
    /**
     * Open HRMP channel accepted. `[sender, recipient]`
     */
    v100: new EventType('Hrmp.OpenChannelAccepted', sts.tuple([v100.Id, v100.Id])),
    /**
     * Open HRMP channel accepted.
     */
    v1030: new EventType(
        'Hrmp.OpenChannelAccepted',
        sts.struct({
            sender: v1030.Id,
            recipient: v1030.Id,
        })
    ),
}

export const channelClosed = {
    name: 'Hrmp.ChannelClosed',
    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    enjinV100: new EventType('Hrmp.ChannelClosed', sts.tuple([enjinV100.Id, enjinV100.HrmpChannelId])),
    /**
     * HRMP channel closed.
     */
    enjinV1032: new EventType(
        'Hrmp.ChannelClosed',
        sts.struct({
            byParachain: enjinV1032.Id,
            channelId: enjinV1032.HrmpChannelId,
        })
    ),
    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    v100: new EventType('Hrmp.ChannelClosed', sts.tuple([v100.Id, v100.HrmpChannelId])),
    /**
     * HRMP channel closed.
     */
    v1030: new EventType(
        'Hrmp.ChannelClosed',
        sts.struct({
            byParachain: v1030.Id,
            channelId: v1030.HrmpChannelId,
        })
    ),
}

export const hrmpChannelForceOpened = {
    name: 'Hrmp.HrmpChannelForceOpened',
    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    enjinV100: new EventType(
        'Hrmp.HrmpChannelForceOpened',
        sts.tuple([enjinV100.Id, enjinV100.Id, sts.number(), sts.number()])
    ),
    /**
     * An HRMP channel was opened via Root origin.
     */
    enjinV1032: new EventType(
        'Hrmp.HrmpChannelForceOpened',
        sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    v100: new EventType('Hrmp.HrmpChannelForceOpened', sts.tuple([v100.Id, v100.Id, sts.number(), sts.number()])),
    /**
     * An HRMP channel was opened via Root origin.
     */
    v1030: new EventType(
        'Hrmp.HrmpChannelForceOpened',
        sts.struct({
            sender: v1030.Id,
            recipient: v1030.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const hrmpSystemChannelOpened = {
    name: 'Hrmp.HrmpSystemChannelOpened',
    /**
     * An HRMP channel was opened between two system chains.
     */
    enjinV1032: new EventType(
        'Hrmp.HrmpSystemChannelOpened',
        sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
            proposedMaxCapacity: sts.number(),
            proposedMaxMessageSize: sts.number(),
        })
    ),
}

export const openChannelDepositsUpdated = {
    name: 'Hrmp.OpenChannelDepositsUpdated',
    /**
     * An HRMP channel's deposits were updated.
     */
    enjinV1032: new EventType(
        'Hrmp.OpenChannelDepositsUpdated',
        sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
        })
    ),
}
