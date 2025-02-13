import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as v100 from '../v100'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'

export const beefyAuthorities = {
    /**
     *  Details of current BEEFY authority set.
     */
    enjinV100: new StorageType(
        'MmrLeaf.BeefyAuthorities',
        'Default',
        [],
        enjinV100.BeefyAuthoritySet
    ) as BeefyAuthoritiesEnjinV100,
    /**
     *  Details of current BEEFY authority set.
     */
    enjinV1032: new StorageType(
        'MmrLeaf.BeefyAuthorities',
        'Default',
        [],
        enjinV1032.BeefyAuthoritySet
    ) as BeefyAuthoritiesEnjinV1032,
    /**
     *  Details of current BEEFY authority set.
     */
    v100: new StorageType('MmrLeaf.BeefyAuthorities', 'Default', [], v100.BeefyAuthoritySet) as BeefyAuthoritiesV100,
    /**
     *  Details of current BEEFY authority set.
     */
    v1030: new StorageType('MmrLeaf.BeefyAuthorities', 'Default', [], v1030.BeefyAuthoritySet) as BeefyAuthoritiesV1030,
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.BeefyAuthoritySet
    get(block: Block): Promise<enjinV100.BeefyAuthoritySet | undefined>
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1032.BeefyAuthoritySet
    get(block: Block): Promise<enjinV1032.BeefyAuthoritySet | undefined>
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v100.BeefyAuthoritySet
    get(block: Block): Promise<v100.BeefyAuthoritySet | undefined>
}

/**
 *  Details of current BEEFY authority set.
 */
export interface BeefyAuthoritiesV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.BeefyAuthoritySet
    get(block: Block): Promise<v1030.BeefyAuthoritySet | undefined>
}

export const beefyNextAuthorities = {
    /**
     *  Details of next BEEFY authority set.
     *
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    enjinV100: new StorageType(
        'MmrLeaf.BeefyNextAuthorities',
        'Default',
        [],
        enjinV100.BeefyAuthoritySet
    ) as BeefyNextAuthoritiesEnjinV100,
    /**
     *  Details of next BEEFY authority set.
     *
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    enjinV1032: new StorageType(
        'MmrLeaf.BeefyNextAuthorities',
        'Default',
        [],
        enjinV1032.BeefyAuthoritySet
    ) as BeefyNextAuthoritiesEnjinV1032,
    /**
     *  Details of next BEEFY authority set.
     *
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v100: new StorageType(
        'MmrLeaf.BeefyNextAuthorities',
        'Default',
        [],
        v100.BeefyAuthoritySet
    ) as BeefyNextAuthoritiesV100,
    /**
     *  Details of next BEEFY authority set.
     *
     *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
     */
    v1030: new StorageType(
        'MmrLeaf.BeefyNextAuthorities',
        'Default',
        [],
        v1030.BeefyAuthoritySet
    ) as BeefyNextAuthoritiesV1030,
}

/**
 *  Details of next BEEFY authority set.
 *
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.BeefyAuthoritySet
    get(block: Block): Promise<enjinV100.BeefyAuthoritySet | undefined>
}

/**
 *  Details of next BEEFY authority set.
 *
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1032.BeefyAuthoritySet
    get(block: Block): Promise<enjinV1032.BeefyAuthoritySet | undefined>
}

/**
 *  Details of next BEEFY authority set.
 *
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v100.BeefyAuthoritySet
    get(block: Block): Promise<v100.BeefyAuthoritySet | undefined>
}

/**
 *  Details of next BEEFY authority set.
 *
 *  This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
 */
export interface BeefyNextAuthoritiesV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.BeefyAuthoritySet
    get(block: Block): Promise<v1030.BeefyAuthoritySet | undefined>
}
