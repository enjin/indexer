import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV110 from '../enjinV110'
import * as v110 from '../v110'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const identityOf = {
    /**
     *  Information that is pertinent to identify the entity behind an account.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1000: new StorageType(
        'Identity.IdentityOf',
        'Optional',
        [matrixEnjinV1000.AccountId32],
        matrixEnjinV1000.Registration
    ) as IdentityOfMatrixEnjinV1000,
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1012: new StorageType(
        'Identity.IdentityOf',
        'Optional',
        [matrixEnjinV1012.AccountId32],
        sts.tuple(() => [matrixEnjinV1012.Registration, sts.option(() => sts.bytes())])
    ) as IdentityOfMatrixEnjinV1012,
    /**
     *  Information that is pertinent to identify the entity behind an account.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixV1000: new StorageType(
        'Identity.IdentityOf',
        'Optional',
        [matrixV1000.AccountId32],
        matrixV1000.Registration
    ) as IdentityOfMatrixV1000,
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixV1010: new StorageType(
        'Identity.IdentityOf',
        'Optional',
        [matrixV1010.AccountId32],
        sts.tuple(() => [matrixV1010.Registration, sts.option(() => sts.bytes())])
    ) as IdentityOfMatrixV1010,
    /**
     *  Information that is pertinent to identify the entity behind an account.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    enjinV110: new StorageType(
        'Identity.IdentityOf',
        'Optional',
        [enjinV110.AccountId32],
        enjinV110.Registration
    ) as IdentityOfEnjinV110,
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    enjinV1032: new StorageType(
        'Identity.IdentityOf',
        'Optional',
        [enjinV1032.AccountId32],
        sts.tuple(() => [enjinV1032.Registration, sts.option(() => sts.bytes())])
    ) as IdentityOfEnjinV1032,
    /**
     *  Information that is pertinent to identify the entity behind an account.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v110: new StorageType('Identity.IdentityOf', 'Optional', [v110.AccountId32], v110.Registration) as IdentityOfV110,
    /**
     *  Information that is pertinent to identify the entity behind an account. First item is the
     *  registration, second is the account's primary username.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    v1030: new StorageType(
        'Identity.IdentityOf',
        'Optional',
        [v1030.AccountId32],
        sts.tuple(() => [v1030.Registration, sts.option(() => sts.bytes())])
    ) as IdentityOfV1030,
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 *
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.Registration | undefined>
    getMany(block: Block, keys: matrixEnjinV1000.AccountId32[]): Promise<(matrixEnjinV1000.Registration | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.AccountId32, v: matrixEnjinV1000.Registration | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): Promise<[k: matrixEnjinV1000.AccountId32, v: matrixEnjinV1000.Registration | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: matrixEnjinV1000.Registration | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: matrixEnjinV1000.Registration | undefined][]>
}

/**
 *  Information that is pertinent to identify the entity behind an account. First item is the
 *  registration, second is the account's primary username.
 *
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): Promise<[matrixEnjinV1012.Registration, Bytes | undefined] | undefined>
    getMany(
        block: Block,
        keys: matrixEnjinV1012.AccountId32[]
    ): Promise<([matrixEnjinV1012.Registration, Bytes | undefined] | undefined)[]>
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
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.Registration, Bytes | undefined] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.Registration, Bytes | undefined] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.Registration, Bytes | undefined] | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<
        [k: matrixEnjinV1012.AccountId32, v: [matrixEnjinV1012.Registration, Bytes | undefined] | undefined][]
    >
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 *
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfMatrixV1000 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1000.AccountId32): Promise<matrixV1000.Registration | undefined>
    getMany(block: Block, keys: matrixV1000.AccountId32[]): Promise<(matrixV1000.Registration | undefined)[]>
    getKeys(block: Block): Promise<matrixV1000.AccountId32[]>
    getKeys(block: Block, key: matrixV1000.AccountId32): Promise<matrixV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1000.AccountId32): AsyncIterable<matrixV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1000.AccountId32, v: matrixV1000.Registration | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1000.AccountId32
    ): Promise<[k: matrixV1000.AccountId32, v: matrixV1000.Registration | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1000.AccountId32, v: matrixV1000.Registration | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1000.AccountId32
    ): AsyncIterable<[k: matrixV1000.AccountId32, v: matrixV1000.Registration | undefined][]>
}

/**
 *  Information that is pertinent to identify the entity behind an account. First item is the
 *  registration, second is the account's primary username.
 *
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1010.AccountId32): Promise<[matrixV1010.Registration, Bytes | undefined] | undefined>
    getMany(
        block: Block,
        keys: matrixV1010.AccountId32[]
    ): Promise<([matrixV1010.Registration, Bytes | undefined] | undefined)[]>
    getKeys(block: Block): Promise<matrixV1010.AccountId32[]>
    getKeys(block: Block, key: matrixV1010.AccountId32): Promise<matrixV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1010.AccountId32): AsyncIterable<matrixV1010.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<[k: matrixV1010.AccountId32, v: [matrixV1010.Registration, Bytes | undefined] | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1010.AccountId32
    ): Promise<[k: matrixV1010.AccountId32, v: [matrixV1010.Registration, Bytes | undefined] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1010.AccountId32, v: [matrixV1010.Registration, Bytes | undefined] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1010.AccountId32
    ): AsyncIterable<[k: matrixV1010.AccountId32, v: [matrixV1010.Registration, Bytes | undefined] | undefined][]>
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 *
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfEnjinV110 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV110.AccountId32): Promise<enjinV110.Registration | undefined>
    getMany(block: Block, keys: enjinV110.AccountId32[]): Promise<(enjinV110.Registration | undefined)[]>
    getKeys(block: Block): Promise<enjinV110.AccountId32[]>
    getKeys(block: Block, key: enjinV110.AccountId32): Promise<enjinV110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV110.AccountId32): AsyncIterable<enjinV110.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV110.AccountId32, v: enjinV110.Registration | undefined][]>
    getPairs(
        block: Block,
        key: enjinV110.AccountId32
    ): Promise<[k: enjinV110.AccountId32, v: enjinV110.Registration | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV110.AccountId32, v: enjinV110.Registration | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV110.AccountId32
    ): AsyncIterable<[k: enjinV110.AccountId32, v: enjinV110.Registration | undefined][]>
}

/**
 *  Information that is pertinent to identify the entity behind an account. First item is the
 *  registration, second is the account's primary username.
 *
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV1032.AccountId32): Promise<[enjinV1032.Registration, Bytes | undefined] | undefined>
    getMany(
        block: Block,
        keys: enjinV1032.AccountId32[]
    ): Promise<([enjinV1032.Registration, Bytes | undefined] | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.AccountId32[]>
    getKeys(block: Block, key: enjinV1032.AccountId32): Promise<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.AccountId32): AsyncIterable<enjinV1032.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<[k: enjinV1032.AccountId32, v: [enjinV1032.Registration, Bytes | undefined] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1032.AccountId32
    ): Promise<[k: enjinV1032.AccountId32, v: [enjinV1032.Registration, Bytes | undefined] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1032.AccountId32, v: [enjinV1032.Registration, Bytes | undefined] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1032.AccountId32
    ): AsyncIterable<[k: enjinV1032.AccountId32, v: [enjinV1032.Registration, Bytes | undefined] | undefined][]>
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 *
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfV110 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v110.AccountId32): Promise<v110.Registration | undefined>
    getMany(block: Block, keys: v110.AccountId32[]): Promise<(v110.Registration | undefined)[]>
    getKeys(block: Block): Promise<v110.AccountId32[]>
    getKeys(block: Block, key: v110.AccountId32): Promise<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v110.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v110.AccountId32): AsyncIterable<v110.AccountId32[]>
    getPairs(block: Block): Promise<[k: v110.AccountId32, v: v110.Registration | undefined][]>
    getPairs(block: Block, key: v110.AccountId32): Promise<[k: v110.AccountId32, v: v110.Registration | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v110.AccountId32, v: v110.Registration | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v110.AccountId32
    ): AsyncIterable<[k: v110.AccountId32, v: v110.Registration | undefined][]>
}

/**
 *  Information that is pertinent to identify the entity behind an account. First item is the
 *  registration, second is the account's primary username.
 *
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1030.AccountId32): Promise<[v1030.Registration, Bytes | undefined] | undefined>
    getMany(block: Block, keys: v1030.AccountId32[]): Promise<([v1030.Registration, Bytes | undefined] | undefined)[]>
    getKeys(block: Block): Promise<v1030.AccountId32[]>
    getKeys(block: Block, key: v1030.AccountId32): Promise<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<v1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1030.AccountId32, v: [v1030.Registration, Bytes | undefined] | undefined][]>
    getPairs(
        block: Block,
        key: v1030.AccountId32
    ): Promise<[k: v1030.AccountId32, v: [v1030.Registration, Bytes | undefined] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1030.AccountId32, v: [v1030.Registration, Bytes | undefined] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1030.AccountId32
    ): AsyncIterable<[k: v1030.AccountId32, v: [v1030.Registration, Bytes | undefined] | undefined][]>
}

export const superOf = {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    matrixEnjinV1000: new StorageType(
        'Identity.SuperOf',
        'Optional',
        [matrixEnjinV1000.AccountId32],
        sts.tuple(() => [matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data])
    ) as SuperOfMatrixEnjinV1000,
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SuperOfMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    get(
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): Promise<[matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined>
    getMany(
        block: Block,
        keys: matrixEnjinV1000.AccountId32[]
    ): Promise<([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<
        [k: matrixEnjinV1000.AccountId32, v: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined][]
    >
    getPairs(
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): Promise<
        [k: matrixEnjinV1000.AccountId32, v: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<
        [k: matrixEnjinV1000.AccountId32, v: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined][]
    >
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): AsyncIterable<
        [k: matrixEnjinV1000.AccountId32, v: [matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined][]
    >
}

export const subsOf = {
    /**
     *  Alternative "sub" identities of this account.
     *
     *  The first item is the deposit, the second is a vector of the accounts.
     *
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1000: new StorageType(
        'Identity.SubsOf',
        'Default',
        [matrixEnjinV1000.AccountId32],
        sts.tuple(() => [sts.bigint(), sts.array(() => matrixEnjinV1000.AccountId32)])
    ) as SubsOfMatrixEnjinV1000,
}

/**
 *  Alternative "sub" identities of this account.
 *
 *  The first item is the deposit, the second is a vector of the accounts.
 *
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface SubsOfMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, matrixEnjinV1000.AccountId32[]]
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<[bigint, matrixEnjinV1000.AccountId32[]] | undefined>
    getMany(
        block: Block,
        keys: matrixEnjinV1000.AccountId32[]
    ): Promise<([bigint, matrixEnjinV1000.AccountId32[]] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(
        block: Block
    ): Promise<[k: matrixEnjinV1000.AccountId32, v: [bigint, matrixEnjinV1000.AccountId32[]] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): Promise<[k: matrixEnjinV1000.AccountId32, v: [bigint, matrixEnjinV1000.AccountId32[]] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: [bigint, matrixEnjinV1000.AccountId32[]] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: [bigint, matrixEnjinV1000.AccountId32[]] | undefined][]>
}

export const registrars = {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     *
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    matrixEnjinV1000: new StorageType(
        'Identity.Registrars',
        'Default',
        [],
        sts.array(() => sts.option(() => matrixEnjinV1000.RegistrarInfo))
    ) as RegistrarsMatrixEnjinV1000,
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 *
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface RegistrarsMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (matrixEnjinV1000.RegistrarInfo | undefined)[]
    get(block: Block): Promise<(matrixEnjinV1000.RegistrarInfo | undefined)[] | undefined>
}

export const usernameAuthorities = {
    /**
     *  A map of the accounts who are authorized to grant usernames.
     */
    matrixEnjinV1012: new StorageType(
        'Identity.UsernameAuthorities',
        'Optional',
        [matrixEnjinV1012.AccountId32],
        matrixEnjinV1012.AuthorityProperties
    ) as UsernameAuthoritiesMatrixEnjinV1012,
}

/**
 *  A map of the accounts who are authorized to grant usernames.
 */
export interface UsernameAuthoritiesMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.AuthorityProperties | undefined>
    getMany(
        block: Block,
        keys: matrixEnjinV1012.AccountId32[]
    ): Promise<(matrixEnjinV1012.AuthorityProperties | undefined)[]>
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
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.AuthorityProperties | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.AuthorityProperties | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.AuthorityProperties | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.AuthorityProperties | undefined][]>
}

export const accountOfUsername = {
    /**
     *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
     *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
     *
     *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
     *  primary username.
     */
    matrixEnjinV1012: new StorageType(
        'Identity.AccountOfUsername',
        'Optional',
        [sts.bytes()],
        matrixEnjinV1012.AccountId32
    ) as AccountOfUsernameMatrixEnjinV1012,
}

/**
 *  Reverse lookup from `username` to the `AccountId` that has registered it. The value should
 *  be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
 *
 *  Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
 *  primary username.
 */
export interface AccountOfUsernameMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<matrixEnjinV1012.AccountId32 | undefined>
    getMany(block: Block, keys: Bytes[]): Promise<(matrixEnjinV1012.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: matrixEnjinV1012.AccountId32 | undefined][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: matrixEnjinV1012.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: Bytes, v: matrixEnjinV1012.AccountId32 | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: Bytes
    ): AsyncIterable<[k: Bytes, v: matrixEnjinV1012.AccountId32 | undefined][]>
}

export const pendingUsernames = {
    /**
     *  Usernames that an authority has granted, but that the account controller has not confirmed
     *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
     *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
     *  [`Call::accept_username`].
     *
     *  First tuple item is the account and second is the acceptance deadline.
     */
    matrixEnjinV1012: new StorageType(
        'Identity.PendingUsernames',
        'Optional',
        [sts.bytes()],
        sts.tuple(() => [matrixEnjinV1012.AccountId32, sts.number()])
    ) as PendingUsernamesMatrixEnjinV1012,
}

/**
 *  Usernames that an authority has granted, but that the account controller has not confirmed
 *  that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
 *  because they are a pure proxy, multisig, etc. In order to confirm it, they should call
 *  [`Call::accept_username`].
 *
 *  First tuple item is the account and second is the acceptance deadline.
 */
export interface PendingUsernamesMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<[matrixEnjinV1012.AccountId32, number] | undefined>
    getMany(block: Block, keys: Bytes[]): Promise<([matrixEnjinV1012.AccountId32, number] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: [matrixEnjinV1012.AccountId32, number] | undefined][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: [matrixEnjinV1012.AccountId32, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: Bytes, v: [matrixEnjinV1012.AccountId32, number] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: Bytes
    ): AsyncIterable<[k: Bytes, v: [matrixEnjinV1012.AccountId32, number] | undefined][]>
}
