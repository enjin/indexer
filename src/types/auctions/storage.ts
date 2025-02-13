import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as enjinV100 from '../enjinV100'

export const auctionCounter = {
    /**
     *  Number of auctions started so far.
     */
    enjinV100: new StorageType('Auctions.AuctionCounter', 'Default', [], sts.number()) as AuctionCounterEnjinV100,
}

/**
 *  Number of auctions started so far.
 */
export interface AuctionCounterEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<number | undefined>
}

export const auctionInfo = {
    /**
     *  Information relating to the current auction, if there is one.
     *
     *  The first item in the tuple is the lease period index that the first of the four
     *  contiguous lease periods on auction is for. The second is the block number when the
     *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
     */
    enjinV100: new StorageType(
        'Auctions.AuctionInfo',
        'Optional',
        [],
        sts.tuple(() => [sts.number(), sts.number()])
    ) as AuctionInfoEnjinV100,
}

/**
 *  Information relating to the current auction, if there is one.
 *
 *  The first item in the tuple is the lease period index that the first of the four
 *  contiguous lease periods on auction is for. The second is the block number when the
 *  auction will "begin to end", i.e. the first block of the Ending Period of the auction.
 */
export interface AuctionInfoEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<[number, number] | undefined>
}

export const reservedAmounts = {
    /**
     *  Amounts currently reserved in the accounts of the bidders currently winning
     *  (sub-)ranges.
     */
    enjinV100: new StorageType(
        'Auctions.ReservedAmounts',
        'Optional',
        [sts.tuple(() => [enjinV100.AccountId32, enjinV100.Id])],
        sts.bigint()
    ) as ReservedAmountsEnjinV100,
}

/**
 *  Amounts currently reserved in the accounts of the bidders currently winning
 *  (sub-)ranges.
 */
export interface ReservedAmountsEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [enjinV100.AccountId32, enjinV100.Id]): Promise<bigint | undefined>
    getMany(block: Block, keys: [enjinV100.AccountId32, enjinV100.Id][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[enjinV100.AccountId32, enjinV100.Id][]>
    getKeys(block: Block, key: [enjinV100.AccountId32, enjinV100.Id]): Promise<[enjinV100.AccountId32, enjinV100.Id][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV100.AccountId32, enjinV100.Id][]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: [enjinV100.AccountId32, enjinV100.Id]
    ): AsyncIterable<[enjinV100.AccountId32, enjinV100.Id][]>
    getPairs(block: Block): Promise<[k: [enjinV100.AccountId32, enjinV100.Id], v: bigint | undefined][]>
    getPairs(
        block: Block,
        key: [enjinV100.AccountId32, enjinV100.Id]
    ): Promise<[k: [enjinV100.AccountId32, enjinV100.Id], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: [enjinV100.AccountId32, enjinV100.Id], v: bigint | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: [enjinV100.AccountId32, enjinV100.Id]
    ): AsyncIterable<[k: [enjinV100.AccountId32, enjinV100.Id], v: bigint | undefined][]>
}

export const winning = {
    /**
     *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
     *  the current auction. The map's key is the 0-based index into the Sample Size. The
     *  first sample of the ending period is 0; the last is `Sample Size - 1`.
     */
    enjinV100: new StorageType(
        'Auctions.Winning',
        'Optional',
        [sts.number()],
        sts.array(() => sts.option(() => sts.tuple(() => [enjinV100.AccountId32, enjinV100.Id, sts.bigint()])))
    ) as WinningEnjinV100,
}

/**
 *  The winning bids for each of the 10 ranges at each sample in the final Ending Period of
 *  the current auction. The map's key is the 0-based index into the Sample Size. The
 *  first sample of the ending period is 0; the last is `Sample Size - 1`.
 */
export interface WinningEnjinV100 {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<([enjinV100.AccountId32, enjinV100.Id, bigint] | undefined)[] | undefined>
    getMany(
        block: Block,
        keys: number[]
    ): Promise<(([enjinV100.AccountId32, enjinV100.Id, bigint] | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(
        block: Block
    ): Promise<[k: number, v: ([enjinV100.AccountId32, enjinV100.Id, bigint] | undefined)[] | undefined][]>
    getPairs(
        block: Block,
        key: number
    ): Promise<[k: number, v: ([enjinV100.AccountId32, enjinV100.Id, bigint] | undefined)[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: number, v: ([enjinV100.AccountId32, enjinV100.Id, bigint] | undefined)[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: number
    ): AsyncIterable<[k: number, v: ([enjinV100.AccountId32, enjinV100.Id, bigint] | undefined)[] | undefined][]>
}
