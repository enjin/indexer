import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1030 from '../matrixV1030'

export const minimumWeights = {
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixEnjinV603: new StorageType(
        'MatrixXcm.MinimumWeights',
        'Default',
        [matrixEnjinV603.XcmOperation],
        matrixEnjinV603.MinimumWeightFeePair
    ) as MinimumWeightsMatrixEnjinV603,
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixEnjinV1012: new StorageType(
        'MatrixXcm.MinimumWeights',
        'Default',
        [matrixEnjinV1012.XcmOperation],
        matrixEnjinV1012.MinimumWeightFeePair
    ) as MinimumWeightsMatrixEnjinV1012,
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixV604: new StorageType(
        'MatrixXcm.MinimumWeights',
        'Default',
        [matrixV604.XcmOperation],
        matrixV604.MinimumWeightFeePair
    ) as MinimumWeightsMatrixV604,
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixV1010: new StorageType(
        'MatrixXcm.MinimumWeights',
        'Default',
        [matrixV1010.XcmOperation],
        matrixV1010.MinimumWeightFeePair
    ) as MinimumWeightsMatrixV1010,
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     *
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixV1030: new StorageType(
        'MatrixXcm.MinimumWeights',
        'Default',
        [matrixV1030.XcmOperation],
        matrixV1030.MinimumWeightFeePair
    ) as MinimumWeightsMatrixV1030,
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 *
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.MinimumWeightFeePair
    get(block: Block, key: matrixEnjinV603.XcmOperation): Promise<matrixEnjinV603.MinimumWeightFeePair | undefined>
    getMany(
        block: Block,
        keys: matrixEnjinV603.XcmOperation[]
    ): Promise<(matrixEnjinV603.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.XcmOperation[]>
    getKeys(block: Block, key: matrixEnjinV603.XcmOperation): Promise<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.XcmOperation
    ): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getPairs(
        block: Block
    ): Promise<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.XcmOperation
    ): Promise<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.XcmOperation
    ): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair | undefined][]>
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 *
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.MinimumWeightFeePair
    get(block: Block, key: matrixEnjinV1012.XcmOperation): Promise<matrixEnjinV1012.MinimumWeightFeePair | undefined>
    getMany(
        block: Block,
        keys: matrixEnjinV1012.XcmOperation[]
    ): Promise<(matrixEnjinV1012.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.XcmOperation[]>
    getKeys(block: Block, key: matrixEnjinV1012.XcmOperation): Promise<matrixEnjinV1012.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.XcmOperation[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.XcmOperation
    ): AsyncIterable<matrixEnjinV1012.XcmOperation[]>
    getPairs(
        block: Block
    ): Promise<[k: matrixEnjinV1012.XcmOperation, v: matrixEnjinV1012.MinimumWeightFeePair | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.XcmOperation
    ): Promise<[k: matrixEnjinV1012.XcmOperation, v: matrixEnjinV1012.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1012.XcmOperation, v: matrixEnjinV1012.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.XcmOperation
    ): AsyncIterable<[k: matrixEnjinV1012.XcmOperation, v: matrixEnjinV1012.MinimumWeightFeePair | undefined][]>
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 *
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsMatrixV604 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV604.MinimumWeightFeePair
    get(block: Block, key: matrixV604.XcmOperation): Promise<matrixV604.MinimumWeightFeePair | undefined>
    getMany(block: Block, keys: matrixV604.XcmOperation[]): Promise<(matrixV604.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<matrixV604.XcmOperation[]>
    getKeys(block: Block, key: matrixV604.XcmOperation): Promise<matrixV604.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV604.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV604.XcmOperation): AsyncIterable<matrixV604.XcmOperation[]>
    getPairs(block: Block): Promise<[k: matrixV604.XcmOperation, v: matrixV604.MinimumWeightFeePair | undefined][]>
    getPairs(
        block: Block,
        key: matrixV604.XcmOperation
    ): Promise<[k: matrixV604.XcmOperation, v: matrixV604.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV604.XcmOperation, v: matrixV604.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV604.XcmOperation
    ): AsyncIterable<[k: matrixV604.XcmOperation, v: matrixV604.MinimumWeightFeePair | undefined][]>
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 *
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsMatrixV1010 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1010.MinimumWeightFeePair
    get(block: Block, key: matrixV1010.XcmOperation): Promise<matrixV1010.MinimumWeightFeePair | undefined>
    getMany(block: Block, keys: matrixV1010.XcmOperation[]): Promise<(matrixV1010.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<matrixV1010.XcmOperation[]>
    getKeys(block: Block, key: matrixV1010.XcmOperation): Promise<matrixV1010.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1010.XcmOperation[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixV1010.XcmOperation
    ): AsyncIterable<matrixV1010.XcmOperation[]>
    getPairs(block: Block): Promise<[k: matrixV1010.XcmOperation, v: matrixV1010.MinimumWeightFeePair | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1010.XcmOperation
    ): Promise<[k: matrixV1010.XcmOperation, v: matrixV1010.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1010.XcmOperation, v: matrixV1010.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1010.XcmOperation
    ): AsyncIterable<[k: matrixV1010.XcmOperation, v: matrixV1010.MinimumWeightFeePair | undefined][]>
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 *
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsMatrixV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1030.MinimumWeightFeePair
    get(block: Block, key: matrixV1030.XcmOperation): Promise<matrixV1030.MinimumWeightFeePair | undefined>
    getMany(block: Block, keys: matrixV1030.XcmOperation[]): Promise<(matrixV1030.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.XcmOperation[]>
    getKeys(block: Block, key: matrixV1030.XcmOperation): Promise<matrixV1030.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.XcmOperation[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.XcmOperation
    ): AsyncIterable<matrixV1030.XcmOperation[]>
    getPairs(block: Block): Promise<[k: matrixV1030.XcmOperation, v: matrixV1030.MinimumWeightFeePair | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.XcmOperation
    ): Promise<[k: matrixV1030.XcmOperation, v: matrixV1030.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1030.XcmOperation, v: matrixV1030.MinimumWeightFeePair | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.XcmOperation
    ): AsyncIterable<[k: matrixV1030.XcmOperation, v: matrixV1030.MinimumWeightFeePair | undefined][]>
}
