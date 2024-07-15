import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1010 from '../v1010'

export const proxies =  {
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    v1010: new StorageType('Proxy.Proxies', 'Default', [v1010.AccountId32], sts.tuple(() => [sts.array(() => v1010.ProxyDefinition), sts.bigint()])) as ProxiesV1010,
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1010.ProxyDefinition[], bigint]
    get(block: Block, key: v1010.AccountId32): Promise<([v1010.ProxyDefinition[], bigint] | undefined)>
    getMany(block: Block, keys: v1010.AccountId32[]): Promise<([v1010.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<v1010.AccountId32[]>
    getKeys(block: Block, key: v1010.AccountId32): Promise<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<v1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1010.AccountId32, v: ([v1010.ProxyDefinition[], bigint] | undefined)][]>
    getPairs(block: Block, key: v1010.AccountId32): Promise<[k: v1010.AccountId32, v: ([v1010.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.AccountId32, v: ([v1010.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<[k: v1010.AccountId32, v: ([v1010.ProxyDefinition[], bigint] | undefined)][]>
}

export const announcements =  {
    /**
     *  The announcements made by the proxy (key).
     */
    v1010: new StorageType('Proxy.Announcements', 'Default', [v1010.AccountId32], sts.tuple(() => [sts.array(() => v1010.Announcement), sts.bigint()])) as AnnouncementsV1010,
}

/**
 *  The announcements made by the proxy (key).
 */
export interface AnnouncementsV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [v1010.Announcement[], bigint]
    get(block: Block, key: v1010.AccountId32): Promise<([v1010.Announcement[], bigint] | undefined)>
    getMany(block: Block, keys: v1010.AccountId32[]): Promise<([v1010.Announcement[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<v1010.AccountId32[]>
    getKeys(block: Block, key: v1010.AccountId32): Promise<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<v1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1010.AccountId32, v: ([v1010.Announcement[], bigint] | undefined)][]>
    getPairs(block: Block, key: v1010.AccountId32): Promise<[k: v1010.AccountId32, v: ([v1010.Announcement[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.AccountId32, v: ([v1010.Announcement[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<[k: v1010.AccountId32, v: ([v1010.Announcement[], bigint] | undefined)][]>
}
