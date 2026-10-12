import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV1041 from '../matrixEnjinV1041'

export const whitelistedCall = {
    matrixEnjinV1041: new StorageType(
        'Whitelist.WhitelistedCall',
        'Optional',
        [matrixEnjinV1041.H256],
        sts.unit()
    ) as WhitelistedCallMatrixEnjinV1041,
}

export interface WhitelistedCallMatrixEnjinV1041 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1041.H256): Promise<null | undefined>
    getMany(block: Block, keys: matrixEnjinV1041.H256[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1041.H256[]>
    getKeys(block: Block, key: matrixEnjinV1041.H256): Promise<matrixEnjinV1041.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1041.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1041.H256): AsyncIterable<matrixEnjinV1041.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1041.H256, v: null | undefined][]>
    getPairs(block: Block, key: matrixEnjinV1041.H256): Promise<[k: matrixEnjinV1041.H256, v: null | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1041.H256, v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1041.H256
    ): AsyncIterable<[k: matrixEnjinV1041.H256, v: null | undefined][]>
}
