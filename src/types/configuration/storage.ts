import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as enjinV101 from '../enjinV101'
import * as v104 from '../v104'
import * as v105 from '../v105'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const activeConfig = {
    /**
     *  The active configuration for the current session.
     */
    enjinV100: new StorageType(
        'Configuration.ActiveConfig',
        'Default',
        [],
        enjinV100.HostConfiguration
    ) as ActiveConfigEnjinV100,
    /**
     *  The active configuration for the current session.
     */
    enjinV101: new StorageType(
        'Configuration.ActiveConfig',
        'Default',
        [],
        enjinV101.HostConfiguration
    ) as ActiveConfigEnjinV101,
    /**
     *  The active configuration for the current session.
     */
    enjinV1032: new StorageType(
        'Configuration.ActiveConfig',
        'Default',
        [],
        enjinV1032.HostConfiguration
    ) as ActiveConfigEnjinV1032,
    /**
     *  The active configuration for the current session.
     */
    v100: new StorageType('Configuration.ActiveConfig', 'Default', [], v100.HostConfiguration) as ActiveConfigV100,
    /**
     *  The active configuration for the current session.
     */
    v104: new StorageType('Configuration.ActiveConfig', 'Default', [], v104.HostConfiguration) as ActiveConfigV104,
    /**
     *  The active configuration for the current session.
     */
    v105: new StorageType('Configuration.ActiveConfig', 'Default', [], v105.HostConfiguration) as ActiveConfigV105,
    /**
     *  The active configuration for the current session.
     */
    v1030: new StorageType('Configuration.ActiveConfig', 'Default', [], v1030.HostConfiguration) as ActiveConfigV1030,
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.HostConfiguration
    get(block: Block): Promise<enjinV100.HostConfiguration | undefined>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigEnjinV101 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV101.HostConfiguration
    get(block: Block): Promise<enjinV101.HostConfiguration | undefined>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1032.HostConfiguration
    get(block: Block): Promise<enjinV1032.HostConfiguration | undefined>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v100.HostConfiguration
    get(block: Block): Promise<v100.HostConfiguration | undefined>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV104 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v104.HostConfiguration
    get(block: Block): Promise<v104.HostConfiguration | undefined>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV105 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v105.HostConfiguration
    get(block: Block): Promise<v105.HostConfiguration | undefined>
}

/**
 *  The active configuration for the current session.
 */
export interface ActiveConfigV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.HostConfiguration
    get(block: Block): Promise<v1030.HostConfiguration | undefined>
}

export const pendingConfigs = {
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    enjinV100: new StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [sts.number(), enjinV100.HostConfiguration]))
    ) as PendingConfigsEnjinV100,
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    enjinV101: new StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [sts.number(), enjinV101.HostConfiguration]))
    ) as PendingConfigsEnjinV101,
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    enjinV1032: new StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [sts.number(), enjinV1032.HostConfiguration]))
    ) as PendingConfigsEnjinV1032,
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v100: new StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [sts.number(), v100.HostConfiguration]))
    ) as PendingConfigsV100,
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v104: new StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [sts.number(), v104.HostConfiguration]))
    ) as PendingConfigsV104,
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v105: new StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [sts.number(), v105.HostConfiguration]))
    ) as PendingConfigsV105,
    /**
     *  Pending configuration changes.
     *
     *  This is a list of configuration changes, each with a session index at which it should
     *  be applied.
     *
     *  The list is sorted ascending by session index. Also, this list can only contain at most
     *  2 items: for the next session and for the `scheduled_session`.
     */
    v1030: new StorageType(
        'Configuration.PendingConfigs',
        'Default',
        [],
        sts.array(() => sts.tuple(() => [sts.number(), v1030.HostConfiguration]))
    ) as PendingConfigsV1030,
}

/**
 *  Pending configuration changes.
 *
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 *
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, enjinV100.HostConfiguration][]
    get(block: Block): Promise<[number, enjinV100.HostConfiguration][] | undefined>
}

/**
 *  Pending configuration changes.
 *
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 *
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsEnjinV101 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, enjinV101.HostConfiguration][]
    get(block: Block): Promise<[number, enjinV101.HostConfiguration][] | undefined>
}

/**
 *  Pending configuration changes.
 *
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 *
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, enjinV1032.HostConfiguration][]
    get(block: Block): Promise<[number, enjinV1032.HostConfiguration][] | undefined>
}

/**
 *  Pending configuration changes.
 *
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 *
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v100.HostConfiguration][]
    get(block: Block): Promise<[number, v100.HostConfiguration][] | undefined>
}

/**
 *  Pending configuration changes.
 *
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 *
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV104 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v104.HostConfiguration][]
    get(block: Block): Promise<[number, v104.HostConfiguration][] | undefined>
}

/**
 *  Pending configuration changes.
 *
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 *
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV105 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v105.HostConfiguration][]
    get(block: Block): Promise<[number, v105.HostConfiguration][] | undefined>
}

/**
 *  Pending configuration changes.
 *
 *  This is a list of configuration changes, each with a session index at which it should
 *  be applied.
 *
 *  The list is sorted ascending by session index. Also, this list can only contain at most
 *  2 items: for the next session and for the `scheduled_session`.
 */
export interface PendingConfigsV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, v1030.HostConfiguration][]
    get(block: Block): Promise<[number, v1030.HostConfiguration][] | undefined>
}

export const bypassConsistencyCheck = {
    /**
     *  If this is set, then the configuration setters will bypass the consistency checks. This
     *  is meant to be used only as the last resort.
     */
    enjinV100: new StorageType(
        'Configuration.BypassConsistencyCheck',
        'Default',
        [],
        sts.boolean()
    ) as BypassConsistencyCheckEnjinV100,
}

/**
 *  If this is set, then the configuration setters will bypass the consistency checks. This
 *  is meant to be used only as the last resort.
 */
export interface BypassConsistencyCheckEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<boolean | undefined>
}
