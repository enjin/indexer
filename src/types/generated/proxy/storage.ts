import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const proxies =  {
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    matrixEnjinV1012: new StorageType('Proxy.Proxies', 'Default', [matrixEnjinV1012.AccountId32], sts.tuple(() => [sts.array(() => matrixEnjinV1012.ProxyDefinition), sts.bigint()])) as ProxiesMatrixEnjinV1012,
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV1012.ProxyDefinition[], bigint]
    get(block: Block, key: matrixEnjinV1012.AccountId32): Promise<([matrixEnjinV1012.ProxyDefinition[], bigint] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1012.AccountId32[]): Promise<([matrixEnjinV1012.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AccountId32): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.AccountId32, v: ([matrixEnjinV1012.ProxyDefinition[], bigint] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1012.AccountId32): Promise<[k: matrixEnjinV1012.AccountId32, v: ([matrixEnjinV1012.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: ([matrixEnjinV1012.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AccountId32): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: ([matrixEnjinV1012.ProxyDefinition[], bigint] | undefined)][]>
}

export const announcements =  {
    /**
     *  The announcements made by the proxy (key).
     */
    matrixEnjinV1012: new StorageType('Proxy.Announcements', 'Default', [matrixEnjinV1012.AccountId32], sts.tuple(() => [sts.array(() => matrixEnjinV1012.Announcement), sts.bigint()])) as AnnouncementsMatrixEnjinV1012,
}

/**
 *  The announcements made by the proxy (key).
 */
export interface AnnouncementsMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV1012.Announcement[], bigint]
    get(block: Block, key: matrixEnjinV1012.AccountId32): Promise<([matrixEnjinV1012.Announcement[], bigint] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1012.AccountId32[]): Promise<([matrixEnjinV1012.Announcement[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AccountId32): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.AccountId32, v: ([matrixEnjinV1012.Announcement[], bigint] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1012.AccountId32): Promise<[k: matrixEnjinV1012.AccountId32, v: ([matrixEnjinV1012.Announcement[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: ([matrixEnjinV1012.Announcement[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1012.AccountId32): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: ([matrixEnjinV1012.Announcement[], bigint] | undefined)][]>
}
