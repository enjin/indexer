import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV500 from '../matrixV500'

export const key = {
    /**
     *  The `AccountId` of the sudo key.
     */
    matrixV500: new StorageType('Sudo.Key', 'Optional', [], matrixV500.AccountId32) as KeyMatrixV500,
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixV500.AccountId32 | undefined>
}
