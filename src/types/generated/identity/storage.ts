import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1010 from '../v1010'

export const identityOf =  {
    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1000: new StorageType('Identity.IdentityOf', 'Optional', [matrixEnjinV1000.AccountId32], matrixEnjinV1000.Registration) as IdentityOfMatrixEnjinV1000,
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v1010: new StorageType('Identity.IdentityOf', 'Optional', [v1010.AccountId32], sts.tuple(() => [v1010.Registration, sts.option(() => sts.bytes())])) as IdentityOfV1010,
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<(matrixEnjinV1000.Registration | undefined)>
    getMany(block: Block, keys: matrixEnjinV1000.AccountId32[]): Promise<(matrixEnjinV1000.Registration | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.Registration | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1000.AccountId32): Promise<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.Registration | undefined)][]>
}

/**
 *  Information that is pertinent to identify the entity behind an account. First item is the
 *  registration, second is the account's primary username.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1010.AccountId32): Promise<([v1010.Registration, (Bytes | undefined)] | undefined)>
    getMany(block: Block, keys: v1010.AccountId32[]): Promise<([v1010.Registration, (Bytes | undefined)] | undefined)[]>
    getKeys(block: Block): Promise<v1010.AccountId32[]>
    getKeys(block: Block, key: v1010.AccountId32): Promise<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<v1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1010.AccountId32, v: ([v1010.Registration, (Bytes | undefined)] | undefined)][]>
    getPairs(block: Block, key: v1010.AccountId32): Promise<[k: v1010.AccountId32, v: ([v1010.Registration, (Bytes | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.AccountId32, v: ([v1010.Registration, (Bytes | undefined)] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<[k: v1010.AccountId32, v: ([v1010.Registration, (Bytes | undefined)] | undefined)][]>
}

export const superOf =  {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    matrixEnjinV1000: new StorageType('Identity.SuperOf', 'Optional', [matrixEnjinV1000.AccountId32], sts.tuple(() => [matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data])) as SuperOfMatrixEnjinV1000,
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SuperOfMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1000.AccountId32[]): Promise<([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.AccountId32, v: ([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1000.AccountId32): Promise<[k: matrixEnjinV1000.AccountId32, v: ([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: ([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: ([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)][]>
}

export const subsOf =  {
    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1000: new StorageType('Identity.SubsOf', 'Default', [matrixEnjinV1000.AccountId32], sts.tuple(() => [sts.bigint(), sts.array(() => matrixEnjinV1000.AccountId32)])) as SubsOfMatrixEnjinV1000,
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface SubsOfMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, matrixEnjinV1000.AccountId32[]]
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<([bigint, matrixEnjinV1000.AccountId32[]] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1000.AccountId32[]): Promise<([bigint, matrixEnjinV1000.AccountId32[]] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.AccountId32, v: ([bigint, matrixEnjinV1000.AccountId32[]] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1000.AccountId32): Promise<[k: matrixEnjinV1000.AccountId32, v: ([bigint, matrixEnjinV1000.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: ([bigint, matrixEnjinV1000.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: ([bigint, matrixEnjinV1000.AccountId32[]] | undefined)][]>
}

export const registrars =  {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    matrixEnjinV1000: new StorageType('Identity.Registrars', 'Default', [], sts.array(() => sts.option(() => matrixEnjinV1000.RegistrarInfo))) as RegistrarsMatrixEnjinV1000,
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface RegistrarsMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (matrixEnjinV1000.RegistrarInfo | undefined)[]
    get(block: Block): Promise<((matrixEnjinV1000.RegistrarInfo | undefined)[] | undefined)>
}

export const usernameAuthorities =  {
    /**
     *  A map of the accounts who are authorized to grant usernames.
     */
    v1010: new StorageType('Identity.UsernameAuthorities', 'Optional', [v1010.AccountId32], v1010.AuthorityProperties) as UsernameAuthoritiesV1010,
}

/**
 *  A map of the accounts who are authorized to grant usernames.
 */
export interface UsernameAuthoritiesV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1010.AccountId32): Promise<(v1010.AuthorityProperties | undefined)>
    getMany(block: Block, keys: v1010.AccountId32[]): Promise<(v1010.AuthorityProperties | undefined)[]>
    getKeys(block: Block): Promise<v1010.AccountId32[]>
    getKeys(block: Block, key: v1010.AccountId32): Promise<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<v1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1010.AccountId32, v: (v1010.AuthorityProperties | undefined)][]>
    getPairs(block: Block, key: v1010.AccountId32): Promise<[k: v1010.AccountId32, v: (v1010.AuthorityProperties | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.AccountId32, v: (v1010.AuthorityProperties | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.AccountId32): AsyncIterable<[k: v1010.AccountId32, v: (v1010.AuthorityProperties | undefined)][]>
}

export const accountOfUsername =  {
    /**
     *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
     *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
     * 
     *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
     *  primary username.
     */
    v1010: new StorageType('Identity.AccountOfUsername', 'Optional', [sts.bytes()], v1010.AccountId32) as AccountOfUsernameV1010,
}

/**
 *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
 *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
 * 
 *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
 *  primary username.
 */
export interface AccountOfUsernameV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<(v1010.AccountId32 | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(v1010.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (v1010.AccountId32 | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (v1010.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (v1010.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (v1010.AccountId32 | undefined)][]>
}

export const pendingUsernames =  {
    /**
     *  Usernames that an authority has granted, but that the account controller has not confirmed
     *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
     *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
     *  [`Call::accept_username`].
     * 
     *  First tuple item is the account and second is the acceptance deadline.
     */
    v1010: new StorageType('Identity.PendingUsernames', 'Optional', [sts.bytes()], sts.tuple(() => [v1010.AccountId32, sts.number()])) as PendingUsernamesV1010,
}

/**
 *  Usernames that an authority has granted, but that the account controller has not confirmed
 *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
 *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
 *  [`Call::accept_username`].
 * 
 *  First tuple item is the account and second is the acceptance deadline.
 */
export interface PendingUsernamesV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([v1010.AccountId32, number] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([v1010.AccountId32, number] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([v1010.AccountId32, number] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([v1010.AccountId32, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([v1010.AccountId32, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([v1010.AccountId32, number] | undefined)][]>
}
