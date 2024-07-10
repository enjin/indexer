import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const proxies =  {
    /**
     *  The set of account proxies. Maps the account which has delegated to the accounts
     *  which are being delegated to, together with the amount held on deposit.
     */
    matrixEnjinV1010: new StorageType('Proxy.Proxies', 'Default', [matrixEnjinV1010.AccountId32], sts.tuple(() => [sts.array(() => matrixEnjinV1010.ProxyDefinition), sts.bigint()])) as ProxiesMatrixEnjinV1010,
}

/**
 *  The set of account proxies. Maps the account which has delegated to the accounts
 *  which are being delegated to, together with the amount held on deposit.
 */
export interface ProxiesMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV1010.ProxyDefinition[], bigint]
    get(block: Block, key: matrixEnjinV1010.AccountId32): Promise<([matrixEnjinV1010.ProxyDefinition[], bigint] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1010.AccountId32[]): Promise<([matrixEnjinV1010.ProxyDefinition[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1010.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1010.AccountId32): Promise<matrixEnjinV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1010.AccountId32): AsyncIterable<matrixEnjinV1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1010.AccountId32, v: ([matrixEnjinV1010.ProxyDefinition[], bigint] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1010.AccountId32): Promise<[k: matrixEnjinV1010.AccountId32, v: ([matrixEnjinV1010.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1010.AccountId32, v: ([matrixEnjinV1010.ProxyDefinition[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1010.AccountId32): AsyncIterable<[k: matrixEnjinV1010.AccountId32, v: ([matrixEnjinV1010.ProxyDefinition[], bigint] | undefined)][]>
}

export const announcements =  {
    /**
     *  The announcements made by the proxy (key).
     */
    matrixEnjinV1010: new StorageType('Proxy.Announcements', 'Default', [matrixEnjinV1010.AccountId32], sts.tuple(() => [sts.array(() => matrixEnjinV1010.Announcement), sts.bigint()])) as AnnouncementsMatrixEnjinV1010,
}

/**
 *  The announcements made by the proxy (key).
 */
export interface AnnouncementsMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV1010.Announcement[], bigint]
    get(block: Block, key: matrixEnjinV1010.AccountId32): Promise<([matrixEnjinV1010.Announcement[], bigint] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1010.AccountId32[]): Promise<([matrixEnjinV1010.Announcement[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1010.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1010.AccountId32): Promise<matrixEnjinV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1010.AccountId32): AsyncIterable<matrixEnjinV1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1010.AccountId32, v: ([matrixEnjinV1010.Announcement[], bigint] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1010.AccountId32): Promise<[k: matrixEnjinV1010.AccountId32, v: ([matrixEnjinV1010.Announcement[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1010.AccountId32, v: ([matrixEnjinV1010.Announcement[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1010.AccountId32): AsyncIterable<[k: matrixEnjinV1010.AccountId32, v: ([matrixEnjinV1010.Announcement[], bigint] | undefined)][]>
}
