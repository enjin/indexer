import { sts, Block, Bytes, Option, Result, CallType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const sudoScheduleParaInitialize = {
    name: 'ParasSudoWrapper.sudo_schedule_para_initialize',
    /**
     * Schedule a para to be initialized at the start of the next session.
     */
    enjinV100: new CallType(
        'ParasSudoWrapper.sudo_schedule_para_initialize',
        sts.struct({
            id: enjinV100.Id,
            genesis: enjinV100.ParaGenesisArgs,
        })
    ),
}

export const sudoScheduleParaCleanup = {
    name: 'ParasSudoWrapper.sudo_schedule_para_cleanup',
    /**
     * Schedule a para to be cleaned up at the start of the next session.
     */
    enjinV100: new CallType(
        'ParasSudoWrapper.sudo_schedule_para_cleanup',
        sts.struct({
            id: enjinV100.Id,
        })
    ),
}

export const sudoScheduleParathreadUpgrade = {
    name: 'ParasSudoWrapper.sudo_schedule_parathread_upgrade',
    /**
     * Upgrade a parathread to a parachain
     */
    enjinV100: new CallType(
        'ParasSudoWrapper.sudo_schedule_parathread_upgrade',
        sts.struct({
            id: enjinV100.Id,
        })
    ),
}

export const sudoScheduleParachainDowngrade = {
    name: 'ParasSudoWrapper.sudo_schedule_parachain_downgrade',
    /**
     * Downgrade a parachain to a parathread
     */
    enjinV100: new CallType(
        'ParasSudoWrapper.sudo_schedule_parachain_downgrade',
        sts.struct({
            id: enjinV100.Id,
        })
    ),
}

export const sudoQueueDownwardXcm = {
    name: 'ParasSudoWrapper.sudo_queue_downward_xcm',
    /**
     * Send a downward XCM to the given para.
     *
     * The given parachain should exist and the payload should not exceed the preconfigured size
     * `config.max_downward_message_size`.
     */
    enjinV100: new CallType(
        'ParasSudoWrapper.sudo_queue_downward_xcm',
        sts.struct({
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
    enjinV1032: new CallType(
        'ParasSudoWrapper.sudo_queue_downward_xcm',
        sts.struct({
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
    v100: new CallType(
        'ParasSudoWrapper.sudo_queue_downward_xcm',
        sts.struct({
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
    v1030: new CallType(
        'ParasSudoWrapper.sudo_queue_downward_xcm',
        sts.struct({
            id: v1030.Id,
            xcm: v1030.VersionedXcm,
        })
    ),
}

export const sudoEstablishHrmpChannel = {
    name: 'ParasSudoWrapper.sudo_establish_hrmp_channel',
    /**
     * Forcefully establish a channel from the sender to the recipient.
     *
     * This is equivalent to sending an `Hrmp::hrmp_init_open_channel` extrinsic followed by
     * `Hrmp::hrmp_accept_open_channel`.
     */
    enjinV100: new CallType(
        'ParasSudoWrapper.sudo_establish_hrmp_channel',
        sts.struct({
            sender: enjinV100.Id,
            recipient: enjinV100.Id,
            maxCapacity: sts.number(),
            maxMessageSize: sts.number(),
        })
    ),
}
