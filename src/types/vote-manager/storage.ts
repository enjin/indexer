import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV120 from '../enjinV120'

export const voteCurrencies =  {
    /**
     *  The currency used by `AccountId` to vote in Poll with
     *  `PollIndex`
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV120: new StorageType('VoteManager.VoteCurrencies', 'Optional', [enjinV120.AccountId32, sts.number()], enjinV120.VoteCurrency) as VoteCurrenciesEnjinV120,
}

/**
 *  The currency used by `AccountId` to vote in Poll with
 *  `PollIndex`
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface VoteCurrenciesEnjinV120  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: enjinV120.AccountId32, key2: number): Promise<(enjinV120.VoteCurrency | undefined)>
    getMany(block: Block, keys: [enjinV120.AccountId32, number][]): Promise<(enjinV120.VoteCurrency | undefined)[]>
    getKeys(block: Block): Promise<[enjinV120.AccountId32, number][]>
    getKeys(block: Block, key1: enjinV120.AccountId32): Promise<[enjinV120.AccountId32, number][]>
    getKeys(block: Block, key1: enjinV120.AccountId32, key2: number): Promise<[enjinV120.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV120.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: enjinV120.AccountId32): AsyncIterable<[enjinV120.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: enjinV120.AccountId32, key2: number): AsyncIterable<[enjinV120.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [enjinV120.AccountId32, number], v: (enjinV120.VoteCurrency | undefined)][]>
    getPairs(block: Block, key1: enjinV120.AccountId32): Promise<[k: [enjinV120.AccountId32, number], v: (enjinV120.VoteCurrency | undefined)][]>
    getPairs(block: Block, key1: enjinV120.AccountId32, key2: number): Promise<[k: [enjinV120.AccountId32, number], v: (enjinV120.VoteCurrency | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [enjinV120.AccountId32, number], v: (enjinV120.VoteCurrency | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: enjinV120.AccountId32): AsyncIterable<[k: [enjinV120.AccountId32, number], v: (enjinV120.VoteCurrency | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: enjinV120.AccountId32, key2: number): AsyncIterable<[k: [enjinV120.AccountId32, number], v: (enjinV120.VoteCurrency | undefined)][]>
}

export const votesToUnlock =  {
    /**
     *  The currency used by `AccountId` to vote in referendum with
     *  `ReferendumIndex`
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    enjinV120: new StorageType('VoteManager.VotesToUnlock', 'Optional', [enjinV120.AccountId32, sts.number()], enjinV120.BalanceToUnlock) as VotesToUnlockEnjinV120,
}

/**
 *  The currency used by `AccountId` to vote in referendum with
 *  `ReferendumIndex`
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface VotesToUnlockEnjinV120  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: enjinV120.AccountId32, key2: number): Promise<(enjinV120.BalanceToUnlock | undefined)>
    getMany(block: Block, keys: [enjinV120.AccountId32, number][]): Promise<(enjinV120.BalanceToUnlock | undefined)[]>
    getKeys(block: Block): Promise<[enjinV120.AccountId32, number][]>
    getKeys(block: Block, key1: enjinV120.AccountId32): Promise<[enjinV120.AccountId32, number][]>
    getKeys(block: Block, key1: enjinV120.AccountId32, key2: number): Promise<[enjinV120.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[enjinV120.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: enjinV120.AccountId32): AsyncIterable<[enjinV120.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: enjinV120.AccountId32, key2: number): AsyncIterable<[enjinV120.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [enjinV120.AccountId32, number], v: (enjinV120.BalanceToUnlock | undefined)][]>
    getPairs(block: Block, key1: enjinV120.AccountId32): Promise<[k: [enjinV120.AccountId32, number], v: (enjinV120.BalanceToUnlock | undefined)][]>
    getPairs(block: Block, key1: enjinV120.AccountId32, key2: number): Promise<[k: [enjinV120.AccountId32, number], v: (enjinV120.BalanceToUnlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [enjinV120.AccountId32, number], v: (enjinV120.BalanceToUnlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: enjinV120.AccountId32): AsyncIterable<[k: [enjinV120.AccountId32, number], v: (enjinV120.BalanceToUnlock | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: enjinV120.AccountId32, key2: number): AsyncIterable<[k: [enjinV120.AccountId32, number], v: (enjinV120.BalanceToUnlock | undefined)][]>
}
