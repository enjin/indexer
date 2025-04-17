import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as enjinV100 from '../enjinV100'

export const leases =  {
    /**
     *  Amounts held on deposit for each (possibly future) leased parachain.
     * 
     *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
     *  of the items in this list whose first value is the account.
     * 
     *  The first item in the list is the amount locked for the current Lease Period. Following
     *  items are for the subsequent lease periods.
     * 
     *  The default value (an empty list) implies that the parachain no longer exists (or never
     *  existed) as far as this pallet is concerned.
     * 
     *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
     *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
     *  deposit for the non-existent chain currently, but is held at some point in the future.
     * 
     *  It is illegal for a `None` value to trail in the list.
     */
    enjinV100: new StorageType('Slots.Leases', 'Default', [enjinV100.Id], sts.array(() => sts.option(() => sts.tuple(() => [enjinV100.AccountId32, sts.bigint()])))) as LeasesEnjinV100,
}

/**
 *  Amounts held on deposit for each (possibly future) leased parachain.
 * 
 *  The actual amount locked on its behalf by any account at any time is the maximum of the second values
 *  of the items in this list whose first value is the account.
 * 
 *  The first item in the list is the amount locked for the current Lease Period. Following
 *  items are for the subsequent lease periods.
 * 
 *  The default value (an empty list) implies that the parachain no longer exists (or never
 *  existed) as far as this pallet is concerned.
 * 
 *  If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
 *  will be left-padded with one or more `None`s to denote the fact that nothing is held on
 *  deposit for the non-existent chain currently, but is held at some point in the future.
 * 
 *  It is illegal for a `None` value to trail in the list.
 */
export interface LeasesEnjinV100  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): ([enjinV100.AccountId32, bigint] | undefined)[]
    get(block: Block, key: enjinV100.Id): Promise<(([enjinV100.AccountId32, bigint] | undefined)[] | undefined)>
    getMany(block: Block, keys: enjinV100.Id[]): Promise<(([enjinV100.AccountId32, bigint] | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.Id[]>
    getKeys(block: Block, key: enjinV100.Id): Promise<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<enjinV100.Id[]>
    getPairs(block: Block): Promise<[k: enjinV100.Id, v: (([enjinV100.AccountId32, bigint] | undefined)[] | undefined)][]>
    getPairs(block: Block, key: enjinV100.Id): Promise<[k: enjinV100.Id, v: (([enjinV100.AccountId32, bigint] | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: enjinV100.Id, v: (([enjinV100.AccountId32, bigint] | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: enjinV100.Id): AsyncIterable<[k: enjinV100.Id, v: (([enjinV100.AccountId32, bigint] | undefined)[] | undefined)][]>
}
