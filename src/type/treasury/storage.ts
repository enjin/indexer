import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'
import * as enjinV1032 from '../enjinV1032'

export const proposalCount = {
    /**
     *  Number of proposals that have been made.
     */
    enjinV100: new StorageType('Treasury.ProposalCount', 'Default', [], sts.number()) as ProposalCountEnjinV100,
}

/**
 *  Number of proposals that have been made.
 */
export interface ProposalCountEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const proposals = {
    /**
     *  Proposals that have been made.
     */
    enjinV100: new StorageType(
        'Treasury.Proposals',
        'Optional',
        [sts.number()],
        enjinV100.Proposal
    ) as ProposalsEnjinV100,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV100.Proposal | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV100.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV100.Proposal | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV100.Proposal | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV100.Proposal | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV100.Proposal | undefined][]>
}

export const deactivated = {
    /**
     *  The amount which has been reported as inactive to Currency.
     */
    enjinV100: new StorageType('Treasury.Deactivated', 'Default', [], sts.bigint()) as DeactivatedEnjinV100,
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface DeactivatedEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const approvals = {
    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    enjinV100: new StorageType(
        'Treasury.Approvals',
        'Default',
        [],
        sts.array(() => sts.number())
    ) as ApprovalsEnjinV100,
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface ApprovalsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<number[] | undefined>
}

export const spendCount = {
    /**
     *  The count of spends that have been made.
     */
    enjinV1032: new StorageType('Treasury.SpendCount', 'Default', [], sts.number()) as SpendCountEnjinV1032,
}

/**
 *  The count of spends that have been made.
 */
export interface SpendCountEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const spends = {
    /**
     *  Spends that have been approved and being processed.
     */
    enjinV1032: new StorageType(
        'Treasury.Spends',
        'Optional',
        [sts.number()],
        enjinV1032.SpendStatus
    ) as SpendsEnjinV1032,
}

/**
 *  Spends that have been approved and being processed.
 */
export interface SpendsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<enjinV1032.SpendStatus | undefined>
    getMany(block: Block, keys: number[]): Promise<(enjinV1032.SpendStatus | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: enjinV1032.SpendStatus | undefined][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: enjinV1032.SpendStatus | undefined][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: enjinV1032.SpendStatus | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: enjinV1032.SpendStatus | undefined][]>
}

export const lastSpendPeriod = {
    /**
     *  The blocknumber for the last triggered spend period.
     */
    v1060: new StorageType('Treasury.LastSpendPeriod', 'Optional', [], sts.number()) as LastSpendPeriodV1060,
}

/**
 *  The blocknumber for the last triggered spend period.
 */
export interface LastSpendPeriodV1060 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<number | undefined>
}
