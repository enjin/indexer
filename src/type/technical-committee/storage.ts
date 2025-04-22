import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as matrixV500 from '../matrixV500'
import * as matrixV600 from '../matrixV600'
import * as matrixV601 from '../matrixV601'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV604 from '../matrixV604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as matrixV1000 from '../matrixV1000'
import * as matrixEnjinV1003 from '../matrixEnjinV1003'
import * as matrixV1003 from '../matrixV1003'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as matrixV1004 from '../matrixV1004'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as matrixV1005 from '../matrixV1005'
import * as matrixV1010 from '../matrixV1010'
import * as matrixV1011 from '../matrixV1011'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1012 from '../matrixV1012'
import * as matrixV1020 from '../matrixV1020'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as matrixV1022 from '../matrixV1022'

export const proposals = {
    /**
     *  The hashes of the active proposals.
     */
    matrixEnjinV603: new StorageType(
        'TechnicalCommittee.Proposals',
        'Default',
        [],
        sts.array(() => matrixEnjinV603.H256)
    ) as ProposalsMatrixEnjinV603,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.H256[]
    get(block: Block): Promise<matrixEnjinV603.H256[] | undefined>
}

export const proposalOf = {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV603: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixEnjinV603.H256],
        matrixEnjinV603.Call
    ) as ProposalOfMatrixEnjinV603,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1000: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixEnjinV1000.H256],
        matrixEnjinV1000.Call
    ) as ProposalOfMatrixEnjinV1000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1003: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixEnjinV1003.H256],
        matrixEnjinV1003.Call
    ) as ProposalOfMatrixEnjinV1003,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1004: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixEnjinV1004.H256],
        matrixEnjinV1004.Call
    ) as ProposalOfMatrixEnjinV1004,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1005: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixEnjinV1005.H256],
        matrixEnjinV1005.Call
    ) as ProposalOfMatrixEnjinV1005,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1012: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixEnjinV1012.H256],
        matrixEnjinV1012.Call
    ) as ProposalOfMatrixEnjinV1012,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1022: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixEnjinV1022.H256],
        matrixEnjinV1022.Call
    ) as ProposalOfMatrixEnjinV1022,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV500: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV500.H256],
        matrixV500.Call
    ) as ProposalOfMatrixV500,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV600: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV600.H256],
        matrixV600.Call
    ) as ProposalOfMatrixV600,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV601: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV601.H256],
        matrixV601.Call
    ) as ProposalOfMatrixV601,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV602: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV602.H256],
        matrixV602.Call
    ) as ProposalOfMatrixV602,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV604: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV604.H256],
        matrixV604.Call
    ) as ProposalOfMatrixV604,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1000: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV1000.H256],
        matrixV1000.Call
    ) as ProposalOfMatrixV1000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1003: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV1003.H256],
        matrixV1003.Call
    ) as ProposalOfMatrixV1003,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1004: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV1004.H256],
        matrixV1004.Call
    ) as ProposalOfMatrixV1004,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1005: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV1005.H256],
        matrixV1005.Call
    ) as ProposalOfMatrixV1005,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1010: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV1010.H256],
        matrixV1010.Call
    ) as ProposalOfMatrixV1010,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1011: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV1011.H256],
        matrixV1011.Call
    ) as ProposalOfMatrixV1011,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1012: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV1012.H256],
        matrixV1012.Call
    ) as ProposalOfMatrixV1012,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1020: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV1020.H256],
        matrixV1020.Call
    ) as ProposalOfMatrixV1020,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixV1022: new StorageType(
        'TechnicalCommittee.ProposalOf',
        'Optional',
        [matrixV1022.H256],
        matrixV1022.Call
    ) as ProposalOfMatrixV1022,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.Call | undefined>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(matrixEnjinV603.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Call | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.H256
    ): Promise<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.H256
    ): AsyncIterable<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1000 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.H256): Promise<matrixEnjinV1000.Call | undefined>
    getMany(block: Block, keys: matrixEnjinV1000.H256[]): Promise<(matrixEnjinV1000.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.H256[]>
    getKeys(block: Block, key: matrixEnjinV1000.H256): Promise<matrixEnjinV1000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.H256): AsyncIterable<matrixEnjinV1000.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.H256, v: matrixEnjinV1000.Call | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1000.H256
    ): Promise<[k: matrixEnjinV1000.H256, v: matrixEnjinV1000.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1000.H256, v: matrixEnjinV1000.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1000.H256
    ): AsyncIterable<[k: matrixEnjinV1000.H256, v: matrixEnjinV1000.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1003 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1003.H256): Promise<matrixEnjinV1003.Call | undefined>
    getMany(block: Block, keys: matrixEnjinV1003.H256[]): Promise<(matrixEnjinV1003.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1003.H256[]>
    getKeys(block: Block, key: matrixEnjinV1003.H256): Promise<matrixEnjinV1003.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1003.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1003.H256): AsyncIterable<matrixEnjinV1003.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1003.H256, v: matrixEnjinV1003.Call | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1003.H256
    ): Promise<[k: matrixEnjinV1003.H256, v: matrixEnjinV1003.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1003.H256, v: matrixEnjinV1003.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1003.H256
    ): AsyncIterable<[k: matrixEnjinV1003.H256, v: matrixEnjinV1003.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1004 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1004.H256): Promise<matrixEnjinV1004.Call | undefined>
    getMany(block: Block, keys: matrixEnjinV1004.H256[]): Promise<(matrixEnjinV1004.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1004.H256[]>
    getKeys(block: Block, key: matrixEnjinV1004.H256): Promise<matrixEnjinV1004.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1004.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1004.H256): AsyncIterable<matrixEnjinV1004.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1004.H256, v: matrixEnjinV1004.Call | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1004.H256
    ): Promise<[k: matrixEnjinV1004.H256, v: matrixEnjinV1004.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1004.H256, v: matrixEnjinV1004.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1004.H256
    ): AsyncIterable<[k: matrixEnjinV1004.H256, v: matrixEnjinV1004.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1005 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1005.H256): Promise<matrixEnjinV1005.Call | undefined>
    getMany(block: Block, keys: matrixEnjinV1005.H256[]): Promise<(matrixEnjinV1005.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1005.H256[]>
    getKeys(block: Block, key: matrixEnjinV1005.H256): Promise<matrixEnjinV1005.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1005.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1005.H256): AsyncIterable<matrixEnjinV1005.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1005.H256, v: matrixEnjinV1005.Call | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1005.H256
    ): Promise<[k: matrixEnjinV1005.H256, v: matrixEnjinV1005.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1005.H256, v: matrixEnjinV1005.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1005.H256
    ): AsyncIterable<[k: matrixEnjinV1005.H256, v: matrixEnjinV1005.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1012.H256): Promise<matrixEnjinV1012.Call | undefined>
    getMany(block: Block, keys: matrixEnjinV1012.H256[]): Promise<(matrixEnjinV1012.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.H256[]>
    getKeys(block: Block, key: matrixEnjinV1012.H256): Promise<matrixEnjinV1012.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1012.H256): AsyncIterable<matrixEnjinV1012.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.H256, v: matrixEnjinV1012.Call | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.H256
    ): Promise<[k: matrixEnjinV1012.H256, v: matrixEnjinV1012.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1012.H256, v: matrixEnjinV1012.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.H256
    ): AsyncIterable<[k: matrixEnjinV1012.H256, v: matrixEnjinV1012.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1022.H256): Promise<matrixEnjinV1022.Call | undefined>
    getMany(block: Block, keys: matrixEnjinV1022.H256[]): Promise<(matrixEnjinV1022.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1022.H256[]>
    getKeys(block: Block, key: matrixEnjinV1022.H256): Promise<matrixEnjinV1022.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1022.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1022.H256): AsyncIterable<matrixEnjinV1022.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1022.H256, v: matrixEnjinV1022.Call | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1022.H256
    ): Promise<[k: matrixEnjinV1022.H256, v: matrixEnjinV1022.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1022.H256, v: matrixEnjinV1022.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1022.H256
    ): AsyncIterable<[k: matrixEnjinV1022.H256, v: matrixEnjinV1022.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV500 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV500.H256): Promise<matrixV500.Call | undefined>
    getMany(block: Block, keys: matrixV500.H256[]): Promise<(matrixV500.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV500.H256[]>
    getKeys(block: Block, key: matrixV500.H256): Promise<matrixV500.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV500.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV500.H256): AsyncIterable<matrixV500.H256[]>
    getPairs(block: Block): Promise<[k: matrixV500.H256, v: matrixV500.Call | undefined][]>
    getPairs(block: Block, key: matrixV500.H256): Promise<[k: matrixV500.H256, v: matrixV500.Call | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV500.H256, v: matrixV500.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV500.H256
    ): AsyncIterable<[k: matrixV500.H256, v: matrixV500.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV600 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV600.H256): Promise<matrixV600.Call | undefined>
    getMany(block: Block, keys: matrixV600.H256[]): Promise<(matrixV600.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV600.H256[]>
    getKeys(block: Block, key: matrixV600.H256): Promise<matrixV600.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV600.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV600.H256): AsyncIterable<matrixV600.H256[]>
    getPairs(block: Block): Promise<[k: matrixV600.H256, v: matrixV600.Call | undefined][]>
    getPairs(block: Block, key: matrixV600.H256): Promise<[k: matrixV600.H256, v: matrixV600.Call | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV600.H256, v: matrixV600.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV600.H256
    ): AsyncIterable<[k: matrixV600.H256, v: matrixV600.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV601 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV601.H256): Promise<matrixV601.Call | undefined>
    getMany(block: Block, keys: matrixV601.H256[]): Promise<(matrixV601.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV601.H256[]>
    getKeys(block: Block, key: matrixV601.H256): Promise<matrixV601.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV601.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV601.H256): AsyncIterable<matrixV601.H256[]>
    getPairs(block: Block): Promise<[k: matrixV601.H256, v: matrixV601.Call | undefined][]>
    getPairs(block: Block, key: matrixV601.H256): Promise<[k: matrixV601.H256, v: matrixV601.Call | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV601.H256, v: matrixV601.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV601.H256
    ): AsyncIterable<[k: matrixV601.H256, v: matrixV601.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV602 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV602.H256): Promise<matrixV602.Call | undefined>
    getMany(block: Block, keys: matrixV602.H256[]): Promise<(matrixV602.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV602.H256[]>
    getKeys(block: Block, key: matrixV602.H256): Promise<matrixV602.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV602.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV602.H256): AsyncIterable<matrixV602.H256[]>
    getPairs(block: Block): Promise<[k: matrixV602.H256, v: matrixV602.Call | undefined][]>
    getPairs(block: Block, key: matrixV602.H256): Promise<[k: matrixV602.H256, v: matrixV602.Call | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV602.H256, v: matrixV602.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV602.H256
    ): AsyncIterable<[k: matrixV602.H256, v: matrixV602.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV604 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV604.H256): Promise<matrixV604.Call | undefined>
    getMany(block: Block, keys: matrixV604.H256[]): Promise<(matrixV604.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV604.H256[]>
    getKeys(block: Block, key: matrixV604.H256): Promise<matrixV604.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV604.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV604.H256): AsyncIterable<matrixV604.H256[]>
    getPairs(block: Block): Promise<[k: matrixV604.H256, v: matrixV604.Call | undefined][]>
    getPairs(block: Block, key: matrixV604.H256): Promise<[k: matrixV604.H256, v: matrixV604.Call | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixV604.H256, v: matrixV604.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV604.H256
    ): AsyncIterable<[k: matrixV604.H256, v: matrixV604.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV1000 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1000.H256): Promise<matrixV1000.Call | undefined>
    getMany(block: Block, keys: matrixV1000.H256[]): Promise<(matrixV1000.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV1000.H256[]>
    getKeys(block: Block, key: matrixV1000.H256): Promise<matrixV1000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1000.H256): AsyncIterable<matrixV1000.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1000.H256, v: matrixV1000.Call | undefined][]>
    getPairs(block: Block, key: matrixV1000.H256): Promise<[k: matrixV1000.H256, v: matrixV1000.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1000.H256, v: matrixV1000.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1000.H256
    ): AsyncIterable<[k: matrixV1000.H256, v: matrixV1000.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV1003 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1003.H256): Promise<matrixV1003.Call | undefined>
    getMany(block: Block, keys: matrixV1003.H256[]): Promise<(matrixV1003.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV1003.H256[]>
    getKeys(block: Block, key: matrixV1003.H256): Promise<matrixV1003.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1003.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1003.H256): AsyncIterable<matrixV1003.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1003.H256, v: matrixV1003.Call | undefined][]>
    getPairs(block: Block, key: matrixV1003.H256): Promise<[k: matrixV1003.H256, v: matrixV1003.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1003.H256, v: matrixV1003.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1003.H256
    ): AsyncIterable<[k: matrixV1003.H256, v: matrixV1003.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV1004 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1004.H256): Promise<matrixV1004.Call | undefined>
    getMany(block: Block, keys: matrixV1004.H256[]): Promise<(matrixV1004.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV1004.H256[]>
    getKeys(block: Block, key: matrixV1004.H256): Promise<matrixV1004.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1004.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1004.H256): AsyncIterable<matrixV1004.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1004.H256, v: matrixV1004.Call | undefined][]>
    getPairs(block: Block, key: matrixV1004.H256): Promise<[k: matrixV1004.H256, v: matrixV1004.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1004.H256, v: matrixV1004.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1004.H256
    ): AsyncIterable<[k: matrixV1004.H256, v: matrixV1004.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV1005 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1005.H256): Promise<matrixV1005.Call | undefined>
    getMany(block: Block, keys: matrixV1005.H256[]): Promise<(matrixV1005.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV1005.H256[]>
    getKeys(block: Block, key: matrixV1005.H256): Promise<matrixV1005.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1005.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1005.H256): AsyncIterable<matrixV1005.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1005.H256, v: matrixV1005.Call | undefined][]>
    getPairs(block: Block, key: matrixV1005.H256): Promise<[k: matrixV1005.H256, v: matrixV1005.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1005.H256, v: matrixV1005.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1005.H256
    ): AsyncIterable<[k: matrixV1005.H256, v: matrixV1005.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV1010 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1010.H256): Promise<matrixV1010.Call | undefined>
    getMany(block: Block, keys: matrixV1010.H256[]): Promise<(matrixV1010.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV1010.H256[]>
    getKeys(block: Block, key: matrixV1010.H256): Promise<matrixV1010.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1010.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1010.H256): AsyncIterable<matrixV1010.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1010.H256, v: matrixV1010.Call | undefined][]>
    getPairs(block: Block, key: matrixV1010.H256): Promise<[k: matrixV1010.H256, v: matrixV1010.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1010.H256, v: matrixV1010.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1010.H256
    ): AsyncIterable<[k: matrixV1010.H256, v: matrixV1010.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV1011 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1011.H256): Promise<matrixV1011.Call | undefined>
    getMany(block: Block, keys: matrixV1011.H256[]): Promise<(matrixV1011.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV1011.H256[]>
    getKeys(block: Block, key: matrixV1011.H256): Promise<matrixV1011.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1011.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1011.H256): AsyncIterable<matrixV1011.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1011.H256, v: matrixV1011.Call | undefined][]>
    getPairs(block: Block, key: matrixV1011.H256): Promise<[k: matrixV1011.H256, v: matrixV1011.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1011.H256, v: matrixV1011.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1011.H256
    ): AsyncIterable<[k: matrixV1011.H256, v: matrixV1011.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV1012 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1012.H256): Promise<matrixV1012.Call | undefined>
    getMany(block: Block, keys: matrixV1012.H256[]): Promise<(matrixV1012.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV1012.H256[]>
    getKeys(block: Block, key: matrixV1012.H256): Promise<matrixV1012.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1012.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1012.H256): AsyncIterable<matrixV1012.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1012.H256, v: matrixV1012.Call | undefined][]>
    getPairs(block: Block, key: matrixV1012.H256): Promise<[k: matrixV1012.H256, v: matrixV1012.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1012.H256, v: matrixV1012.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1012.H256
    ): AsyncIterable<[k: matrixV1012.H256, v: matrixV1012.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV1020 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1020.H256): Promise<matrixV1020.Call | undefined>
    getMany(block: Block, keys: matrixV1020.H256[]): Promise<(matrixV1020.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV1020.H256[]>
    getKeys(block: Block, key: matrixV1020.H256): Promise<matrixV1020.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1020.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1020.H256): AsyncIterable<matrixV1020.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1020.H256, v: matrixV1020.Call | undefined][]>
    getPairs(block: Block, key: matrixV1020.H256): Promise<[k: matrixV1020.H256, v: matrixV1020.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1020.H256, v: matrixV1020.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1020.H256
    ): AsyncIterable<[k: matrixV1020.H256, v: matrixV1020.Call | undefined][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixV1022 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixV1022.H256): Promise<matrixV1022.Call | undefined>
    getMany(block: Block, keys: matrixV1022.H256[]): Promise<(matrixV1022.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixV1022.H256[]>
    getKeys(block: Block, key: matrixV1022.H256): Promise<matrixV1022.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1022.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1022.H256): AsyncIterable<matrixV1022.H256[]>
    getPairs(block: Block): Promise<[k: matrixV1022.H256, v: matrixV1022.Call | undefined][]>
    getPairs(block: Block, key: matrixV1022.H256): Promise<[k: matrixV1022.H256, v: matrixV1022.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1022.H256, v: matrixV1022.Call | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1022.H256
    ): AsyncIterable<[k: matrixV1022.H256, v: matrixV1022.Call | undefined][]>
}

export const voting = {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    matrixEnjinV603: new StorageType(
        'TechnicalCommittee.Voting',
        'Optional',
        [matrixEnjinV603.H256],
        matrixEnjinV603.Votes
    ) as VotingMatrixEnjinV603,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.Votes | undefined>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(matrixEnjinV603.Votes | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Votes | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.H256
    ): Promise<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Votes | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Votes | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.H256
    ): AsyncIterable<[k: matrixEnjinV603.H256, v: matrixEnjinV603.Votes | undefined][]>
}

export const proposalCount = {
    /**
     *  Proposals so far.
     */
    matrixEnjinV603: new StorageType(
        'TechnicalCommittee.ProposalCount',
        'Default',
        [],
        sts.number()
    ) as ProposalCountMatrixEnjinV603,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const members = {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    matrixEnjinV603: new StorageType(
        'TechnicalCommittee.Members',
        'Default',
        [],
        sts.array(() => matrixEnjinV603.AccountId32)
    ) as MembersMatrixEnjinV603,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.AccountId32[]
    get(block: Block): Promise<matrixEnjinV603.AccountId32[] | undefined>
}

export const prime = {
    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    matrixEnjinV603: new StorageType(
        'TechnicalCommittee.Prime',
        'Optional',
        [],
        matrixEnjinV603.AccountId32
    ) as PrimeMatrixEnjinV603,
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface PrimeMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<matrixEnjinV603.AccountId32 | undefined>
}
