import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1030 from '../matrixV1030'

export const authorities = {
    /**
     *  Serves as cache for the authorities.
     *
     *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     *  but we require the old authorities to verify the seal when validating a PoV. This will
     *  always be updated to the latest AuRa authorities in `on_finalize`.
     */
    matrixEnjinV1012: new StorageType(
        'AuraExt.Authorities',
        'Default',
        [],
        sts.array(() => matrixEnjinV1012.Public)
    ) as AuthoritiesMatrixEnjinV1012,
}

/**
 *  Serves as cache for the authorities.
 *
 *  The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
 *  but we require the old authorities to verify the seal when validating a PoV. This will
 *  always be updated to the latest AuRa authorities in `on_finalize`.
 */
export interface AuthoritiesMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.Public[]
    get(block: Block): Promise<matrixEnjinV1012.Public[] | undefined>
}

export const slotInfo = {
    /**
     *  Current slot paired with a number of authored blocks.
     *
     *  Updated on each block initialization.
     */
    matrixEnjinV1012: new StorageType(
        'AuraExt.SlotInfo',
        'Optional',
        [],
        sts.tuple(() => [matrixEnjinV1012.Slot, sts.number()])
    ) as SlotInfoMatrixEnjinV1012,
}

/**
 *  Current slot paired with a number of authored blocks.
 *
 *  Updated on each block initialization.
 */
export interface SlotInfoMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<[matrixEnjinV1012.Slot, number] | undefined>
}

export const relaySlotInfo = {
    /**
     *  Current relay chain slot paired with a number of authored blocks.
     *
     *  This is updated in [`FixedVelocityConsensusHook::on_state_proof`] with the current relay
     *  chain slot as provided by the relay chain state proof.
     */
    matrixV1030: new StorageType(
        'AuraExt.RelaySlotInfo',
        'Optional',
        [],
        sts.tuple(() => [matrixV1030.Slot, sts.number()])
    ) as RelaySlotInfoMatrixV1030,
}

/**
 *  Current relay chain slot paired with a number of authored blocks.
 *
 *  This is updated in [`FixedVelocityConsensusHook::on_state_proof`] with the current relay
 *  chain slot as provided by the relay chain state proof.
 */
export interface RelaySlotInfoMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<[matrixV1030.Slot, number] | undefined>
}
