import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV1032 from '../enjinV1032'

export const currentSessionIndex = {
    /**
     *  The current session index.
     */
    enjinV100: new StorageType(
        'ParasShared.CurrentSessionIndex',
        'Default',
        [],
        sts.number()
    ) as CurrentSessionIndexEnjinV100,
}

/**
 *  The current session index.
 */
export interface CurrentSessionIndexEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const activeValidatorIndices = {
    /**
     *  All the validators actively participating in parachain consensus.
     *  Indices are into the broader validator set.
     */
    enjinV100: new StorageType(
        'ParasShared.ActiveValidatorIndices',
        'Default',
        [],
        sts.array(() => enjinV100.V4ValidatorIndex)
    ) as ActiveValidatorIndicesEnjinV100,
}

/**
 *  All the validators actively participating in parachain consensus.
 *  Indices are into the broader validator set.
 */
export interface ActiveValidatorIndicesEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.V4ValidatorIndex[]
    get(block: Block): Promise<enjinV100.V4ValidatorIndex[] | undefined>
}

export const activeValidatorKeys = {
    /**
     *  The parachain attestation keys of the validators actively participating in parachain consensus.
     *  This should be the same length as `ActiveValidatorIndices`.
     */
    enjinV100: new StorageType(
        'ParasShared.ActiveValidatorKeys',
        'Default',
        [],
        sts.array(() => sts.bytes())
    ) as ActiveValidatorKeysEnjinV100,
}

/**
 *  The parachain attestation keys of the validators actively participating in parachain consensus.
 *  This should be the same length as `ActiveValidatorIndices`.
 */
export interface ActiveValidatorKeysEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes[]
    get(block: Block): Promise<Bytes[] | undefined>
}

export const allowedRelayParents = {
    /**
     *  All allowed relay-parents.
     */
    enjinV1032: new StorageType(
        'ParasShared.AllowedRelayParents',
        'Default',
        [],
        enjinV1032.AllowedRelayParentsTracker
    ) as AllowedRelayParentsEnjinV1032,
}

/**
 *  All allowed relay-parents.
 */
export interface AllowedRelayParentsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1032.AllowedRelayParentsTracker
    get(block: Block): Promise<enjinV1032.AllowedRelayParentsTracker | undefined>
}
