import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV1040 from '../matrixV1040'

export const whitelistedCall = {
    matrixV1040: new StorageType(
        'Whitelist.WhitelistedCall',
        'Optional',
        [matrixV1040.H256],
        sts.unit()
    ) as WhitelistedCallMatrixV1040,
}

export interface WhitelistedCallMatrixV1040 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1040.H256): Promise<null | undefined>
    getMany(block: Block, keys: matrixV1040.H256[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<matrixV1040.H256[]>
    getKeys(block: Block, key: matrixV1040.H256): Promise<matrixV1040.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1040.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1040.H256): AsyncIterable<matrixV1040.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1040.H256, v: null | undefined][]>
    getPairs(block: Block, key: matrixV1040.H256): Promise<[k: matrixV1040.H256, v: null | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV1040.H256, v: null | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1040.H256
    ): AsyncIterable<[k: matrixV1040.H256, v: null | undefined][]>
}
