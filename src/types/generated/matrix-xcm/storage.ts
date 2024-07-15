import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v1010 from '../v1010'

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
    v1010: new StorageType('MatrixXcm.MinimumWeights', 'Default', [v1010.XcmOperation], v1010.MinimumWeightFeePair) as MinimumWeightsV1010,
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
export interface MinimumWeightsV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1010.MinimumWeightFeePair
    get(block: Block, key: v1010.XcmOperation): Promise<(v1010.MinimumWeightFeePair | undefined)>
    getMany(block: Block, keys: v1010.XcmOperation[]): Promise<(v1010.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<v1010.XcmOperation[]>
    getKeys(block: Block, key: v1010.XcmOperation): Promise<v1010.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.XcmOperation): AsyncIterable<v1010.XcmOperation[]>
    getPairs(block: Block): Promise<[k: v1010.XcmOperation, v: (v1010.MinimumWeightFeePair | undefined)][]>
    getPairs(block: Block, key: v1010.XcmOperation): Promise<[k: v1010.XcmOperation, v: (v1010.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.XcmOperation, v: (v1010.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.XcmOperation): AsyncIterable<[k: v1010.XcmOperation, v: (v1010.MinimumWeightFeePair | undefined)][]>
}
