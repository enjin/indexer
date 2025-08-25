import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as v1030 from '../v1030'
import * as matrixV1030 from '../matrixV1030'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'
import * as v1060 from '../v1060'

export const proxies = {
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    matrixEnjinV1012: new StorageType(
        'Proxy.Proxies',
        'Default',
        [matrixEnjinV1012.AccountId32],
        sts.tuple(() => [sts.array(() => matrixEnjinV1012.ProxyDefinition), sts.bigint()])
    ) as ProxiesMatrixEnjinV1012,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    enjinV1050: new StorageType(
        'Proxy.Proxies',
        'Default',
        [enjinV1050.AccountId32],
        sts.tuple(() => [sts.array(() => enjinV1050.ProxyDefinition), sts.bigint()])
    ) as ProxiesEnjinV1050,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v1030: new StorageType(
        'Proxy.Proxies',
        'Default',
        [v1030.AccountId32],
        sts.tuple(() => [sts.array(() => v1030.ProxyDefinition), sts.bigint()])
    ) as ProxiesV1030,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v1050: new StorageType(
        'Proxy.Proxies',
        'Default',
        [v1050.AccountId32],
        sts.tuple(() => [sts.array(() => v1050.ProxyDefinition), sts.bigint()])
    ) as ProxiesV1050,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    matrixV1030: new StorageType(
        'Proxy.Proxies',
        'Default',
        [matrixV1030.AccountId32],
        sts.tuple(() => [sts.array(() => matrixV1030.ProxyDefinition), sts.bigint()])
    ) as ProxiesMatrixV1030,
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v1060: new StorageType(
        'Proxy.Proxies',
        'Default',
        [v1060.AccountId32],
        sts.tuple(() => [sts.array(() => v1060.ProxyDefinition), sts.bigint()])
    ) as ProxiesV1060,
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV1012.ProxyDefinition[], bigint]
    get(
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): Promise<[matrixEnjinV1012.ProxyDefinition[], bigint] | undefined>
    getMany(
        block: Block,
        keys: matrixEnjinV1012.AccountId32[]
    ): Promise<([matrixEnjinV1012.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.ProxyDefinition[], bigint] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.ProxyDefinition[], bigint] | undefined][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesEnjinV1050 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [enjinV1050.ProxyDefinition[], bigint]
    get(block: Block, key: enjinV1050.AccountId32): Promise<[enjinV1050.ProxyDefinition[], bigint] | undefined>
    getMany(
        block: Block,
        keys: enjinV1050.AccountId32[]
    ): Promise<([enjinV1050.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<enjinV1050.AccountId32[]>
    getKeys(block: Block, key: enjinV1050.AccountId32): Promise<enjinV1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1050.AccountId32): AsyncIterable<enjinV1050.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<[k: enjinV1050.AccountId32, v: [enjinV1050.ProxyDefinition[], bigint] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1050.AccountId32
    ): Promise<[k: enjinV1050.AccountId32, v: [enjinV1050.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1050.AccountId32, v: [enjinV1050.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1050.AccountId32
    ): AsyncIterable<[k: enjinV1050.AccountId32, v: [enjinV1050.ProxyDefinition[], bigint] | undefined][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1030.ProxyDefinition[], bigint]
    get(block: Block, key: v1030.AccountId32): Promise<[v1030.ProxyDefinition[], bigint] | undefined>
    getMany(block: Block, keys: v1030.AccountId32[]): Promise<([v1030.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<v1030.AccountId32[]>
    getKeys(block: Block, key: v1030.AccountId32): Promise<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<v1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1030.AccountId32, v: [v1030.ProxyDefinition[], bigint] | undefined][]>
    getPairs(
        block: Block,
        key: v1030.AccountId32
    ): Promise<[k: v1030.AccountId32, v: [v1030.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1030.AccountId32, v: [v1030.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1030.AccountId32
    ): AsyncIterable<[k: v1030.AccountId32, v: [v1030.ProxyDefinition[], bigint] | undefined][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV1050 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1050.ProxyDefinition[], bigint]
    get(block: Block, key: v1050.AccountId32): Promise<[v1050.ProxyDefinition[], bigint] | undefined>
    getMany(block: Block, keys: v1050.AccountId32[]): Promise<([v1050.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<v1050.AccountId32[]>
    getKeys(block: Block, key: v1050.AccountId32): Promise<v1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1050.AccountId32): AsyncIterable<v1050.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1050.AccountId32, v: [v1050.ProxyDefinition[], bigint] | undefined][]>
    getPairs(
        block: Block,
        key: v1050.AccountId32
    ): Promise<[k: v1050.AccountId32, v: [v1050.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1050.AccountId32, v: [v1050.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1050.AccountId32
    ): AsyncIterable<[k: v1050.AccountId32, v: [v1050.ProxyDefinition[], bigint] | undefined][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixV1030.ProxyDefinition[], bigint]
    get(block: Block, key: matrixV1030.AccountId32): Promise<[matrixV1030.ProxyDefinition[], bigint] | undefined>
    getMany(
        block: Block,
        keys: matrixV1030.AccountId32[]
    ): Promise<([matrixV1030.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.AccountId32[]>
    getKeys(block: Block, key: matrixV1030.AccountId32): Promise<matrixV1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1030.AccountId32): AsyncIterable<matrixV1030.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<[k: matrixV1030.AccountId32, v: [matrixV1030.ProxyDefinition[], bigint] | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.AccountId32
    ): Promise<[k: matrixV1030.AccountId32, v: [matrixV1030.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.AccountId32, v: [matrixV1030.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.AccountId32
    ): AsyncIterable<[k: matrixV1030.AccountId32, v: [matrixV1030.ProxyDefinition[], bigint] | undefined][]>
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV1060 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1060.ProxyDefinition[], bigint]
    get(block: Block, key: v1060.AccountId32): Promise<[v1060.ProxyDefinition[], bigint] | undefined>
    getMany(block: Block, keys: v1060.AccountId32[]): Promise<([v1060.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<v1060.AccountId32[]>
    getKeys(block: Block, key: v1060.AccountId32): Promise<v1060.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1060.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1060.AccountId32): AsyncIterable<v1060.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1060.AccountId32, v: [v1060.ProxyDefinition[], bigint] | undefined][]>
    getPairs(
        block: Block,
        key: v1060.AccountId32
    ): Promise<[k: v1060.AccountId32, v: [v1060.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1060.AccountId32, v: [v1060.ProxyDefinition[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1060.AccountId32
    ): AsyncIterable<[k: v1060.AccountId32, v: [v1060.ProxyDefinition[], bigint] | undefined][]>
}

export const announcements = {
    /**
     *  The announcements made by the proxy (key).
     */
    matrixEnjinV1012: new StorageType(
        'Proxy.Announcements',
        'Default',
        [matrixEnjinV1012.AccountId32],
        sts.tuple(() => [sts.array(() => matrixEnjinV1012.Announcement), sts.bigint()])
    ) as AnnouncementsMatrixEnjinV1012,
}

/**
 *  The announcements made by the proxy (key).
 */
export interface AnnouncementsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV1012.Announcement[], bigint]
    get(block: Block, key: matrixEnjinV1012.AccountId32): Promise<[matrixEnjinV1012.Announcement[], bigint] | undefined>
    getMany(
        block: Block,
        keys: matrixEnjinV1012.AccountId32[]
    ): Promise<([matrixEnjinV1012.Announcement[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.Announcement[], bigint] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.Announcement[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.Announcement[], bigint] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.Announcement[], bigint] | undefined][]>
}
