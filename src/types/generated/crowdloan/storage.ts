import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const funds =  {
    /**
     *  Info on all of the funds.
     */
    enjinV100: new StorageType('Crowdloan.Funds', 'Optional', [enjinV100.Id], enjinV100.FundInfo) as FundsEnjinV100,
}

/**
 *  Info on all of the funds.
 */
export interface FundsEnjinV100  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: enjinV100.Id): Promise<(enjinV100.FundInfo | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(enjinV100.FundInfo | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (enjinV100.FundInfo | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (enjinV100.FundInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.FundInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (enjinV100.FundInfo | undefined)][]>
}

export const newRaise =  {
    /**
     *  The funds that have had additional contributions during the last block. This is used
     *  in order to determine which funds should submit new or updated bids.
     */
    enjinV100: new StorageType('Crowdloan.NewRaise', 'Default', [], sts.array(() => enjinV100.Id)) as NewRaiseEnjinV100,
}

/**
 *  The funds that have had additional contributions during the last block. This is used
 *  in order to determine which funds should submit new or updated bids.
 */
export interface NewRaiseEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.Id[]
    get(block: Block): Promise<(enjinV100.Id[] | undefined)>
}

export const endingsCount =  {
    /**
     *  The number of auctions that have entered into their ending period so far.
     */
    enjinV100: new StorageType('Crowdloan.EndingsCount', 'Default', [], sts.number()) as EndingsCountEnjinV100,
}

/**
 *  The number of auctions that have entered into their ending period so far.
 */
export interface EndingsCountEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const nextFundIndex =  {
    /**
     *  Tracker for the next available fund index
     */
    enjinV100: new StorageType('Crowdloan.NextFundIndex', 'Default', [], sts.number()) as NextFundIndexEnjinV100,
}

/**
 *  Tracker for the next available fund index
 */
export interface NextFundIndexEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}
