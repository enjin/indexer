'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.sudoEstablishHrmpChannel =
    exports.sudoQueueDownwardXcm =
    exports.sudoScheduleParachainDowngrade =
    exports.sudoScheduleParathreadUpgrade =
    exports.sudoScheduleParaCleanup =
    exports.sudoScheduleParaInitialize =
        void 0
var support_1 = require('../support')
var enjinV100 = require('../enjinV100')
var v100 = require('../v100')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
exports.sudoScheduleParaInitialize = {
    name: 'ParasSudoWrapper.sudo_schedule_para_initialize',
    /**
     * Schedule a para to be initialized at the start of the next session.
     */
    enjinV100: new support_1.CallType(
        'ParasSudoWrapper.sudo_schedule_para_initialize',
        support_1.sts.struct({
            id: enjinV100.Id,
            genesis: enjinV100.ParaGenesisArgs,
        })
    ),
}
exports.sudoScheduleParaCleanup = {
    name: 'ParasSudoWrapper.sudo_schedule_para_cleanup',
    /**
     * Schedule a para to be cleaned up at the start of the next session.
     */
    enjinV100: new support_1.CallType(
        'ParasSudoWrapper.sudo_schedule_para_cleanup',
        support_1.sts.struct({
            id: enjinV100.Id,
        })
    ),
}
exports.sudoScheduleParathreadUpgrade = {
    name: 'ParasSudoWrapper.sudo_schedule_parathread_upgrade',
    /**
     * Upgrade a parathread to a parachain
     */
    enjinV100: new support_1.CallType(
        'ParasSudoWrapper.sudo_schedule_parathread_upgrade',
        support_1.sts.struct({
            id: enjinV100.Id,
        })
    ),
}
exports.sudoScheduleParachainDowngrade = {
    name: 'ParasSudoWrapper.sudo_schedule_parachain_downgrade',
    /**
     * Downgrade a parachain to a parathread
     */
    enjinV100: new support_1.CallType(
        'ParasSudoWrapper.sudo_schedule_parachain_downgrade',
        support_1.sts.struct({
            id: enjinV100.Id,
        })
    ),
}
exports.sudoQueueDownwardXcm = {
    name: 'ParasSudoWrapper.sudo_queue_downward_xcm',
    /**
     * Send a downward XCM to the given para.
     *
     * The given parachain should exist and the payload should not exceed the preconfigured size
     * `config.max_downward_message_size`.
     */
    enjinV100: new support_1.CallType(
        'ParasSudoWrapper.sudo_queue_downward_xcm',
        support_1.sts.struct({
            id: enjinV100.Id,
            xcm: enjinV100.VersionedXcm,
        })
    ),
    /**
     * Send a downward XCM to the given para.
     *
     * The given parachain should exist and the payload should not exceed the preconfigured
     * size `config.max_downward_message_size`.
     */
    enjinV1032: new support_1.CallType(
        'ParasSudoWrapper.sudo_queue_downward_xcm',
        support_1.sts.struct({
            id: enjinV1032.Id,
            xcm: enjinV1032.VersionedXcm,
        })
    ),
    /**
     * Send a downward XCM to the given para.
     *
     * The given parachain should exist and the payload should not exceed the preconfigured size
     * `config.max_downward_message_size`.
     */
    v100: new support_1.CallType(
        'ParasSudoWrapper.sudo_queue_downward_xcm',
        support_1.sts.struct({
            id: v100.Id,
            xcm: v100.VersionedXcm,
        })
    ),
    /**
     * Send a downward XCM to the given para.
     *
     * The given parachain should exist and the payload should not exceed the preconfigured
     * size `config.max_downward_message_size`.
     */
    v1030: new support_1.CallType(
        'ParasSudoWrapper.sudo_queue_downward_xcm',
        support_1.sts.struct({
            id: v1030.Id,
            xcm: v1030.VersionedXcm,
        })
    ),
}
exports.sudoEstablishHrmpChannel = {
    name: 'ParasSudoWrapper.sudo_establish_hrmp_channel',
    /**
     * Forcefully establish a channel from the sender to the recipient.
     *
     * This is equivalent to sending an `Hrmp::hrmp_init_open_channel` extrinsic followed by
     * `Hrmp::hrmp_accept_open_channel`.
     */
    enjinV100: new support_1.CallType(
        'ParasSudoWrapper.sudo_establish_hrmp_channel',
        support_1.sts.struct({
            sender: enjinV100.Id,
            recipient: enjinV100.Id,
            maxCapacity: support_1.sts.number(),
            maxMessageSize: support_1.sts.number(),
        })
    ),
}
