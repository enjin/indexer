import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'

export const totalIssuance = {
    /**
     *  The relay chain's total issuance at the relay parent of the last block whose relay chain
     *  state proof carried it.
     */
    matrixEnjinV1042: new StorageType(
        'RelayIssuance.TotalIssuance',
        'Default',
        [],
        sts.bigint()
    ) as TotalIssuanceMatrixEnjinV1042,
}

/**
 *  The relay chain's total issuance at the relay parent of the last block whose relay chain
 *  state proof carried it.
 */
export interface TotalIssuanceMatrixEnjinV1042 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}
