import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v1000 from '../v1000'

export const identityOf =  {
    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v1000: new StorageType('Identity.IdentityOf', 'Optional', [v1000.AccountId32], v1000.Registration) as IdentityOfV1000,
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000.AccountId32): Promise<(v1000.Registration | undefined)>
    getMany(block: Block, keys: v1000.AccountId32[]): Promise<(v1000.Registration | undefined)[]>
    getKeys(block: Block): Promise<v1000.AccountId32[]>
    getKeys(block: Block, key: v1000.AccountId32): Promise<v1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.AccountId32): AsyncIterable<v1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000.AccountId32, v: (v1000.Registration | undefined)][]>
    getPairs(block: Block, key: v1000.AccountId32): Promise<[k: v1000.AccountId32, v: (v1000.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.AccountId32, v: (v1000.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.AccountId32): AsyncIterable<[k: v1000.AccountId32, v: (v1000.Registration | undefined)][]>
}

export const superOf =  {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    v1000: new StorageType('Identity.SuperOf', 'Optional', [v1000.AccountId32], sts.tuple(() => [v1000.AccountId32, v1000.Data])) as SuperOfV1000,
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SuperOfV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000.AccountId32): Promise<([v1000.AccountId32, v1000.Data] | undefined)>
    getMany(block: Block, keys: v1000.AccountId32[]): Promise<([v1000.AccountId32, v1000.Data] | undefined)[]>
    getKeys(block: Block): Promise<v1000.AccountId32[]>
    getKeys(block: Block, key: v1000.AccountId32): Promise<v1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.AccountId32): AsyncIterable<v1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000.AccountId32, v: ([v1000.AccountId32, v1000.Data] | undefined)][]>
    getPairs(block: Block, key: v1000.AccountId32): Promise<[k: v1000.AccountId32, v: ([v1000.AccountId32, v1000.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.AccountId32, v: ([v1000.AccountId32, v1000.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.AccountId32): AsyncIterable<[k: v1000.AccountId32, v: ([v1000.AccountId32, v1000.Data] | undefined)][]>
}

export const subsOf =  {
    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v1000: new StorageType('Identity.SubsOf', 'Default', [v1000.AccountId32], sts.tuple(() => [sts.bigint(), sts.array(() => v1000.AccountId32)])) as SubsOfV1000,
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface SubsOfV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, v1000.AccountId32[]]
    get(block: Block, key: v1000.AccountId32): Promise<([bigint, v1000.AccountId32[]] | undefined)>
    getMany(block: Block, keys: v1000.AccountId32[]): Promise<([bigint, v1000.AccountId32[]] | undefined)[]>
    getKeys(block: Block): Promise<v1000.AccountId32[]>
    getKeys(block: Block, key: v1000.AccountId32): Promise<v1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.AccountId32): AsyncIterable<v1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1000.AccountId32, v: ([bigint, v1000.AccountId32[]] | undefined)][]>
    getPairs(block: Block, key: v1000.AccountId32): Promise<[k: v1000.AccountId32, v: ([bigint, v1000.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.AccountId32, v: ([bigint, v1000.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.AccountId32): AsyncIterable<[k: v1000.AccountId32, v: ([bigint, v1000.AccountId32[]] | undefined)][]>
}

export const registrars =  {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    v1000: new StorageType('Identity.Registrars', 'Default', [], sts.array(() => sts.option(() => v1000.RegistrarInfo))) as RegistrarsV1000,
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface RegistrarsV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1000.RegistrarInfo | undefined)[]
    get(block: Block): Promise<((v1000.RegistrarInfo | undefined)[] | undefined)>
}
