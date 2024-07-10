import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const statusFor =  {
    /**
     *  The request status of a given hash.
     */
    matrixEnjinV603: new StorageType('Preimage.StatusFor', 'Optional', [matrixEnjinV603.H256], matrixEnjinV603.RequestStatus) as StatusForMatrixEnjinV603,
}

/**
 *  The request status of a given hash.
 */
export interface StatusForMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<(matrixEnjinV603.RequestStatus | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(matrixEnjinV603.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.RequestStatus | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.RequestStatus | undefined)][]>
}

export const preimageFor =  {
    matrixEnjinV603: new StorageType('Preimage.PreimageFor', 'Optional', [sts.tuple(() => [matrixEnjinV603.H256, sts.number()])], sts.bytes()) as PreimageForMatrixEnjinV603,
}

export interface PreimageForMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [matrixEnjinV603.H256, number]): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [matrixEnjinV603.H256, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.H256, number][]>
    getKeys(block: Block, key: [matrixEnjinV603.H256, number]): Promise<[matrixEnjinV603.H256, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.H256, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [matrixEnjinV603.H256, number]): AsyncIterable<[matrixEnjinV603.H256, number][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV603.H256, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key: [matrixEnjinV603.H256, number]): Promise<[k: [matrixEnjinV603.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV603.H256, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [matrixEnjinV603.H256, number]): AsyncIterable<[k: [matrixEnjinV603.H256, number], v: (Bytes | undefined)][]>
}

export const requestStatusFor =  {
    /**
     *  The request status of a given hash.
     */
    matrixEnjinV1010: new StorageType('Preimage.RequestStatusFor', 'Optional', [matrixEnjinV1010.H256], matrixEnjinV1010.RequestStatus) as RequestStatusForMatrixEnjinV1010,
}

/**
 *  The request status of a given hash.
 */
export interface RequestStatusForMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1010.H256): Promise<(matrixEnjinV1010.RequestStatus | undefined)>
    getMany(block: Block, keys: matrixEnjinV1010.H256[]): Promise<(matrixEnjinV1010.RequestStatus | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1010.H256[]>
    getKeys(block: Block, key: matrixEnjinV1010.H256): Promise<matrixEnjinV1010.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1010.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1010.H256): AsyncIterable<matrixEnjinV1010.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1010.H256, v: (matrixEnjinV1010.RequestStatus | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1010.H256): Promise<[k: matrixEnjinV1010.H256, v: (matrixEnjinV1010.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1010.H256, v: (matrixEnjinV1010.RequestStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1010.H256): AsyncIterable<[k: matrixEnjinV1010.H256, v: (matrixEnjinV1010.RequestStatus | undefined)][]>
}
