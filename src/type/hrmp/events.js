'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.openChannelDepositsUpdated =
    exports.hrmpSystemChannelOpened =
    exports.hrmpChannelForceOpened =
    exports.channelClosed =
    exports.openChannelAccepted =
    exports.openChannelCanceled =
    exports.openChannelRequested =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.openChannelRequested = {
    name: 'Hrmp.OpenChannelRequested',
    /**
     * Open HRMP channel requested.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    enjinV100: new support_1.EventType(
        'Hrmp.OpenChannelRequested',
        support_1.sts.tuple([enjinV100.Id, enjinV100.Id, support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Open HRMP channel requested.
     */
    enjinV1032: new support_1.EventType(
        'Hrmp.OpenChannelRequested',
        support_1.sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        })
    ),
    /**
     * Open HRMP channel requested.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    v100: new support_1.EventType(
        'Hrmp.OpenChannelRequested',
        support_1.sts.tuple([v100.Id, v100.Id, support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * Open HRMP channel requested.
     */
    v1030: new support_1.EventType(
        'Hrmp.OpenChannelRequested',
        support_1.sts.struct({
            sender: v1030.Id,
            recipient: v1030.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        })
    ),
}
exports.openChannelCanceled = {
    name: 'Hrmp.OpenChannelCanceled',
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    enjinV100: new support_1.EventType(
        'Hrmp.OpenChannelCanceled',
        support_1.sts.tuple([enjinV100.Id, enjinV100.HrmpChannelId])
    ),
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     */
    enjinV1032: new support_1.EventType(
        'Hrmp.OpenChannelCanceled',
        support_1.sts.struct({
            byParachain: enjinV1032.Id,
            channelId: enjinV1032.HrmpChannelId,
        })
    ),
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     * `[by_parachain, channel_id]`
     */
    v100: new support_1.EventType('Hrmp.OpenChannelCanceled', support_1.sts.tuple([v100.Id, v100.HrmpChannelId])),
    /**
     * An HRMP channel request sent by the receiver was canceled by either party.
     */
    v1030: new support_1.EventType(
        'Hrmp.OpenChannelCanceled',
        support_1.sts.struct({
            byParachain: v1030.Id,
            channelId: v1030.HrmpChannelId,
        })
    ),
}
exports.openChannelAccepted = {
    name: 'Hrmp.OpenChannelAccepted',
    /**
     * Open HRMP channel accepted. `[sender, recipient]`
     */
    enjinV100: new support_1.EventType('Hrmp.OpenChannelAccepted', support_1.sts.tuple([enjinV100.Id, enjinV100.Id])),
    /**
     * Open HRMP channel accepted.
     */
    enjinV1032: new support_1.EventType(
        'Hrmp.OpenChannelAccepted',
        support_1.sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
        })
    ),
    /**
     * Open HRMP channel accepted. `[sender, recipient]`
     */
    v100: new support_1.EventType('Hrmp.OpenChannelAccepted', support_1.sts.tuple([v100.Id, v100.Id])),
    /**
     * Open HRMP channel accepted.
     */
    v1030: new support_1.EventType(
        'Hrmp.OpenChannelAccepted',
        support_1.sts.struct({
            sender: v1030.Id,
            recipient: v1030.Id,
        })
    ),
}
exports.channelClosed = {
    name: 'Hrmp.ChannelClosed',
    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    enjinV100: new support_1.EventType(
        'Hrmp.ChannelClosed',
        support_1.sts.tuple([enjinV100.Id, enjinV100.HrmpChannelId])
    ),
    /**
     * HRMP channel closed.
     */
    enjinV1032: new support_1.EventType(
        'Hrmp.ChannelClosed',
        support_1.sts.struct({
            byParachain: enjinV1032.Id,
            channelId: enjinV1032.HrmpChannelId,
        })
    ),
    /**
     * HRMP channel closed. `[by_parachain, channel_id]`
     */
    v100: new support_1.EventType('Hrmp.ChannelClosed', support_1.sts.tuple([v100.Id, v100.HrmpChannelId])),
    /**
     * HRMP channel closed.
     */
    v1030: new support_1.EventType(
        'Hrmp.ChannelClosed',
        support_1.sts.struct({
            byParachain: v1030.Id,
            channelId: v1030.HrmpChannelId,
        })
    ),
}
exports.hrmpChannelForceOpened = {
    name: 'Hrmp.HrmpChannelForceOpened',
    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    enjinV100: new support_1.EventType(
        'Hrmp.HrmpChannelForceOpened',
        support_1.sts.tuple([enjinV100.Id, enjinV100.Id, support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * An HRMP channel was opened via Root origin.
     */
    enjinV1032: new support_1.EventType(
        'Hrmp.HrmpChannelForceOpened',
        support_1.sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        })
    ),
    /**
     * An HRMP channel was opened via Root origin.
     * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
     */
    v100: new support_1.EventType(
        'Hrmp.HrmpChannelForceOpened',
        support_1.sts.tuple([v100.Id, v100.Id, support_1.sts.number(), support_1.sts.number()])
    ),
    /**
     * An HRMP channel was opened via Root origin.
     */
    v1030: new support_1.EventType(
        'Hrmp.HrmpChannelForceOpened',
        support_1.sts.struct({
            sender: v1030.Id,
            recipient: v1030.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        })
    ),
}
exports.hrmpSystemChannelOpened = {
    name: 'Hrmp.HrmpSystemChannelOpened',
    /**
     * An HRMP channel was opened between two system chains.
     */
    enjinV1032: new support_1.EventType(
        'Hrmp.HrmpSystemChannelOpened',
        support_1.sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
            proposedMaxCapacity: support_1.sts.number(),
            proposedMaxMessageSize: support_1.sts.number(),
        })
    ),
}
exports.openChannelDepositsUpdated = {
    name: 'Hrmp.OpenChannelDepositsUpdated',
    /**
     * An HRMP channel's deposits were updated.
     */
    enjinV1032: new support_1.EventType(
        'Hrmp.OpenChannelDepositsUpdated',
        support_1.sts.struct({
            sender: enjinV1032.Id,
            recipient: enjinV1032.Id,
        })
    ),
}
