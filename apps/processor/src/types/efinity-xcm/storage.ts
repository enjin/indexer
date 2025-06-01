import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixV500 from '../matrixV500'

export const minimumWeights =  {
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixV500: new StorageType('EfinityXcm.MinimumWeights', 'Default', [matrixV500.XcmOperation], matrixV500.MinimumWeightFeePair) as MinimumWeightsMatrixV500,
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsMatrixV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.MinimumWeightFeePair
    get(block: Block, key: matrixV500.XcmOperation): Promise<(matrixV500.MinimumWeightFeePair | undefined)>
    getMany(block: Block, keys: matrixV500.XcmOperation[]): Promise<(matrixV500.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<matrixV500.XcmOperation[]>
    getKeys(block: Block, key: matrixV500.XcmOperation): Promise<matrixV500.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV500.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV500.XcmOperation): AsyncIterable<matrixV500.XcmOperation[]>
    getPairs(block: Block): Promise<[k: matrixV500.XcmOperation, v: (matrixV500.MinimumWeightFeePair | undefined)][]>
    getPairs(block: Block, key: matrixV500.XcmOperation): Promise<[k: matrixV500.XcmOperation, v: (matrixV500.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV500.XcmOperation, v: (matrixV500.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixV500.XcmOperation): AsyncIterable<[k: matrixV500.XcmOperation, v: (matrixV500.MinimumWeightFeePair | undefined)][]>
}
