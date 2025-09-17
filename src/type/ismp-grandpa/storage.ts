import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV1030 from '../matrixV1030'

export const supportedStateMachines = {
    /**
     *  Registered state machines for the grandpa consensus client
     */
    matrixV1030: new StorageType(
        'IsmpGrandpa.SupportedStateMachines',
        'Optional',
        [matrixV1030.StateMachine],
        sts.bigint()
    ) as SupportedStateMachinesMatrixV1030,
}

/**
 *  Registered state machines for the grandpa consensus client
 */
export interface SupportedStateMachinesMatrixV1030 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1030.StateMachine): Promise<bigint | undefined>
    getMany(block: Block, keys: matrixV1030.StateMachine[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<matrixV1030.StateMachine[]>
    getKeys(block: Block, key: matrixV1030.StateMachine): Promise<matrixV1030.StateMachine[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1030.StateMachine[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachine
    ): AsyncIterable<matrixV1030.StateMachine[]>
    getPairs(block: Block): Promise<[k: matrixV1030.StateMachine, v: bigint | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1030.StateMachine
    ): Promise<[k: matrixV1030.StateMachine, v: bigint | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV1030.StateMachine, v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1030.StateMachine
    ): AsyncIterable<[k: matrixV1030.StateMachine, v: bigint | undefined][]>
}
