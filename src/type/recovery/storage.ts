import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'

export const staleBlockThreshold = {
    /**
     *  The number of blocks after which a parachain is considered stale
     *  if it hasn't been updated.
     *
     *  This value can be updated at runtime via the `set_stale_threshold` extrinsic.
     */
    v1070: new StorageType('Recovery.StaleBlockThreshold', 'Default', [], sts.number()) as StaleBlockThresholdV1070,
}

/**
 *  The number of blocks after which a parachain is considered stale
 *  if it hasn't been updated.
 *
 *  This value can be updated at runtime via the `set_stale_threshold` extrinsic.
 */
export interface StaleBlockThresholdV1070 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}
