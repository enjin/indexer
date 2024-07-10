import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const minimumWeights =  {
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixEnjinV603: new StorageType('MatrixXcm.MinimumWeights', 'Default', [matrixEnjinV603.XcmOperation], matrixEnjinV603.MinimumWeightFeePair) as MinimumWeightsMatrixEnjinV603,
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixEnjinV1010: new StorageType('MatrixXcm.MinimumWeights', 'Default', [matrixEnjinV1010.XcmOperation], matrixEnjinV1010.MinimumWeightFeePair) as MinimumWeightsMatrixEnjinV1010,
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    v604: new StorageType('MatrixXcm.MinimumWeights', 'Default', [v604.XcmOperation], v604.MinimumWeightFeePair) as MinimumWeightsV604,
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.MinimumWeightFeePair
    get(block: Block, key: matrixEnjinV603.XcmOperation): Promise<(matrixEnjinV603.MinimumWeightFeePair | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.XcmOperation[]): Promise<(matrixEnjinV603.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.XcmOperation[]>
    getKeys(block: Block, key: matrixEnjinV603.XcmOperation): Promise<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.XcmOperation): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.XcmOperation, v: (matrixEnjinV603.MinimumWeightFeePair | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.XcmOperation): Promise<[k: matrixEnjinV603.XcmOperation, v: (matrixEnjinV603.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: (matrixEnjinV603.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.XcmOperation): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: (matrixEnjinV603.MinimumWeightFeePair | undefined)][]>
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsMatrixEnjinV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1010.MinimumWeightFeePair
    get(block: Block, key: matrixEnjinV1010.XcmOperation): Promise<(matrixEnjinV1010.MinimumWeightFeePair | undefined)>
    getMany(block: Block, keys: matrixEnjinV1010.XcmOperation[]): Promise<(matrixEnjinV1010.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1010.XcmOperation[]>
    getKeys(block: Block, key: matrixEnjinV1010.XcmOperation): Promise<matrixEnjinV1010.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1010.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1010.XcmOperation): AsyncIterable<matrixEnjinV1010.XcmOperation[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1010.XcmOperation, v: (matrixEnjinV1010.MinimumWeightFeePair | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1010.XcmOperation): Promise<[k: matrixEnjinV1010.XcmOperation, v: (matrixEnjinV1010.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1010.XcmOperation, v: (matrixEnjinV1010.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1010.XcmOperation): AsyncIterable<[k: matrixEnjinV1010.XcmOperation, v: (matrixEnjinV1010.MinimumWeightFeePair | undefined)][]>
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsV604  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v604.MinimumWeightFeePair
    get(block: Block, key: v604.XcmOperation): Promise<(v604.MinimumWeightFeePair | undefined)>
    getMany(block: Block, keys: v604.XcmOperation[]): Promise<(v604.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<v604.XcmOperation[]>
    getKeys(block: Block, key: v604.XcmOperation): Promise<v604.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v604.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block, key: v604.XcmOperation): AsyncIterable<v604.XcmOperation[]>
    getPairs(block: Block): Promise<[k: v604.XcmOperation, v: (v604.MinimumWeightFeePair | undefined)][]>
    getPairs(block: Block, key: v604.XcmOperation): Promise<[k: v604.XcmOperation, v: (v604.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v604.XcmOperation, v: (v604.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v604.XcmOperation): AsyncIterable<[k: v604.XcmOperation, v: (v604.MinimumWeightFeePair | undefined)][]>
}
