import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'

export const totalIssuance = {
    /**
     *  The relay chain's total issuance at the relay parent of the last block whose relay chain
     *  state proof carried it.
     */
    matrixV1042: new StorageType(
        'RelayIssuance.TotalIssuance',
        'Default',
        [],
        sts.bigint()
    ) as TotalIssuanceMatrixV1042,
}

/**
 *  The relay chain's total issuance at the relay parent of the last block whose relay chain
 *  state proof carried it.
 */
export interface TotalIssuanceMatrixV1042 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}
