import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const hostParams = {
    /**
     *  The host parameters of the pallet-hyperbridge.
     */
    matrixV1030: new StorageType(
        'Hyperbridge.HostParams',
        'Default',
        [],
        matrixV1030.VersionedHostParams
    ) as HostParamsMatrixV1030,
}

/**
 *  The host parameters of the pallet-hyperbridge.
 */
export interface HostParamsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1030.VersionedHostParams
    get(block: Block): Promise<matrixV1030.VersionedHostParams | undefined>
}
