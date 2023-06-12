import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as rocfinityV3012 from './rocfinityV3012'
import * as efinityV3014 from './efinityV3014'
import * as v500 from './v500'
import * as v600 from './v600'
import * as v601 from './v601'
import * as v602 from './v602'

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asEfinityV3014(): AuthorshipAuthorStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageEfinityV3014 {
    get(): Promise<(Uint8Array | undefined)>
}

export class AuthorshipDidSetUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'DidSetUncles'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get asRocfinityV3012(): AuthorshipDidSetUnclesStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  Whether uncles were already set in this block.
 */
export interface AuthorshipDidSetUnclesStorageRocfinityV3012 {
    get(): Promise<boolean>
}

export class AuthorshipUnclesStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Uncles'
    }

    /**
     *  Uncles
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
    }

    /**
     *  Uncles
     */
    get asRocfinityV3012(): AuthorshipUnclesStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageRocfinityV3012 {
    get(): Promise<rocfinityV3012.UncleEntryItem[]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asEfinityV3014(): BalancesAccountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asRocfinityV3012(): BalancesAccountStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isV602(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
    }

    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asV602(): BalancesAccountStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageEfinityV3014 {
    get(key: Uint8Array): Promise<efinityV3014.AccountData>
    getAll(): Promise<efinityV3014.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<efinityV3014.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.AccountData][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageRocfinityV3012 {
    get(key: Uint8Array): Promise<rocfinityV3012.AccountData>
    getAll(): Promise<rocfinityV3012.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<rocfinityV3012.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: rocfinityV3012.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: rocfinityV3012.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.AccountData][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageV602 {
    get(key: Uint8Array): Promise<v602.AccountData>
    getAll(): Promise<v602.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v602.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.AccountData][]>
}

export class BalancesFreezesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Freezes'
    }

    /**
     *  Freeze locks on account balances.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asEfinityV3014(): BalancesFreezesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Freeze locks on account balances.
 */
export interface BalancesFreezesStorageEfinityV3014 {
    get(key: Uint8Array): Promise<efinityV3014.IdAmount[]>
    getAll(): Promise<efinityV3014.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<efinityV3014.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.IdAmount[]][]>
}

export class BalancesHoldsStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Holds'
    }

    /**
     *  Holds on account balances.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Holds on account balances.
     */
    get asEfinityV3014(): BalancesHoldsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageEfinityV3014 {
    get(key: Uint8Array): Promise<efinityV3014.IdAmount[]>
    getAll(): Promise<efinityV3014.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<efinityV3014.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.IdAmount[]][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asEfinityV3014(): BalancesInactiveIssuanceStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asEfinityV3014(): BalancesLocksStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageEfinityV3014 {
    get(key: Uint8Array): Promise<efinityV3014.BalanceLock[]>
    getAll(): Promise<efinityV3014.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<efinityV3014.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asEfinityV3014(): BalancesReservesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageEfinityV3014 {
    get(key: Uint8Array): Promise<efinityV3014.ReserveData[]>
    getAll(): Promise<efinityV3014.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<efinityV3014.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.ReserveData[]][]>
}

export class BalancesStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asRocfinityV3012(): BalancesStorageVersionStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageRocfinityV3012 {
    get(): Promise<rocfinityV3012.Releases>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asEfinityV3014(): BalancesTotalIssuanceStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class BountiesBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asEfinityV3014(): BountiesBountiesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageEfinityV3014 {
    get(key: number): Promise<(efinityV3014.Bounty | undefined)>
    getAll(): Promise<efinityV3014.Bounty[]>
    getMany(keys: number[]): Promise<(efinityV3014.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: efinityV3014.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: efinityV3014.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: efinityV3014.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: efinityV3014.Bounty][]>
}

export class BountiesBountyApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyApprovals'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asEfinityV3014(): BountiesBountyApprovalsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountiesBountyApprovalsStorageEfinityV3014 {
    get(): Promise<number[]>
}

export class BountiesBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyCount'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asEfinityV3014(): BountiesBountyCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountiesBountyCountStorageEfinityV3014 {
    get(): Promise<number>
}

export class BountiesBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asEfinityV3014(): BountiesBountyDescriptionsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageEfinityV3014 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ClaimsApprovedBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'ApprovedBlockNumber'
    }

    /**
     *  Latest block number on Ethereum for which requested claims have been approved.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '9a5c57c0fba14b65d0c87c39b55c2a918905695f933da9b666d5ccdfa9c3b77f'
    }

    /**
     *  Latest block number on Ethereum for which requested claims have been approved.
     */
    get asV500(): ClaimsApprovedBlockNumberStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Latest block number on Ethereum for which requested claims have been approved.
 */
export interface ClaimsApprovedBlockNumberStorageV500 {
    get(): Promise<(v500.TrackedBlockNumbers | undefined)>
}

export class ClaimsClaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Claims'
    }

    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'a4e45b744228821d2d599c2e7bd1993b9bd523df83f8ee660f73e52be555e75c'
    }

    get asRocfinityV3012(): ClaimsClaimsStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '898502079a98d13674aa6970cae6fc0555ae0d655f2e253a6707c38bf183d8e6'
    }

    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    get asV500(): ClaimsClaimsStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

export interface ClaimsClaimsStorageRocfinityV3012 {
    get(key: Uint8Array): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: Uint8Array[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint][]>
}

/**
 *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
 *  claim for.
 */
export interface ClaimsClaimsStorageV500 {
    get(key: v500.Account): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v500.Account[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v500.Account[]>
    getKeys(key: v500.Account): Promise<v500.Account[]>
    getKeysPaged(pageSize: number): AsyncIterable<v500.Account[]>
    getKeysPaged(pageSize: number, key: v500.Account): AsyncIterable<v500.Account[]>
    getPairs(): Promise<[k: v500.Account, v: bigint][]>
    getPairs(key: v500.Account): Promise<[k: v500.Account, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v500.Account, v: bigint][]>
    getPairsPaged(pageSize: number, key: v500.Account): AsyncIterable<[k: v500.Account, v: bigint][]>
}

export class ClaimsExchangeRateStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'ExchangeRate'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '8339208fdff8cc2cbfb9fe1daa9bd886d23b8951771ccf6b00d8cb68da55bcc5'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get asV500(): ClaimsExchangeRateStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageV500 {
    get(): Promise<(bigint | undefined)>
}

export class ClaimsLatestBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'LatestBlockNumber'
    }

    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '9a5c57c0fba14b65d0c87c39b55c2a918905695f933da9b666d5ccdfa9c3b77f'
    }

    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    get asV500(): ClaimsLatestBlockNumberStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
 *  relayer.
 */
export interface ClaimsLatestBlockNumberStorageV500 {
    get(): Promise<(v500.TrackedBlockNumbers | undefined)>
}

export class ClaimsMaxEfiForEarlyBirdRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'MaxEfiForEarlyBirdRewards'
    }

    /**
     *  Stores maximum eligible EFI for early bird bonus
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Stores maximum eligible EFI for early bird bonus
     */
    get asEfinityV3014(): ClaimsMaxEfiForEarlyBirdRewardsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Stores maximum eligible EFI for early bird bonus
 */
export interface ClaimsMaxEfiForEarlyBirdRewardsStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class ClaimsPendingApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'PendingApprovals'
    }

    get isV500(): boolean {
        return this.getTypeHash() === 'ec33c23b52f19052c2b84430adf5ca0d4d679518203eba4b8e7ec684b4532785'
    }

    get asV500(): ClaimsPendingApprovalsStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

export interface ClaimsPendingApprovalsStorageV500 {
    get(key: [Uint8Array, (number | undefined)]): Promise<(v500.TransactionData | undefined)>
    getAll(): Promise<v500.TransactionData[]>
    getMany(keys: [Uint8Array, (number | undefined)][]): Promise<(v500.TransactionData | undefined)[]>
    getKeys(): Promise<[Uint8Array, (number | undefined)][]>
    getKeys(key: [Uint8Array, (number | undefined)]): Promise<[Uint8Array, (number | undefined)][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, (number | undefined)][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, (number | undefined)]): AsyncIterable<[Uint8Array, (number | undefined)][]>
    getPairs(): Promise<[k: [Uint8Array, (number | undefined)], v: v500.TransactionData][]>
    getPairs(key: [Uint8Array, (number | undefined)]): Promise<[k: [Uint8Array, (number | undefined)], v: v500.TransactionData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, (number | undefined)], v: v500.TransactionData][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, (number | undefined)]): AsyncIterable<[k: [Uint8Array, (number | undefined)], v: v500.TransactionData][]>
}

export class ClaimsTotalStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Total'
    }

    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asRocfinityV3012(): ClaimsTotalStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

export interface ClaimsTotalStorageRocfinityV3012 {
    get(): Promise<bigint>
}

export class CollatorStakingCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The current set of candidates for collation.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of candidates for collation.
     */
    get asEfinityV3014(): CollatorStakingCandidatesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current set of candidates for collation.
 */
export interface CollatorStakingCandidatesStorageEfinityV3014 {
    get(): Promise<efinityV3014.Collator[]>
}

export class CollatorStakingCollatorExitsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'CollatorExits'
    }

    /**
     *  The list of collators who requested an exit.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  The list of collators who requested an exit.
     */
    get asEfinityV3014(): CollatorStakingCollatorExitsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The list of collators who requested an exit.
 */
export interface CollatorStakingCollatorExitsStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class CollatorStakingCollatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Collators'
    }

    /**
     *  The current set of collators
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of collators
     */
    get asEfinityV3014(): CollatorStakingCollatorsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current set of collators
 */
export interface CollatorStakingCollatorsStorageEfinityV3014 {
    get(): Promise<efinityV3014.Collator[]>
}

export class CollatorStakingCurrentRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'CurrentRound'
    }

    /**
     *  The current round information.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '55f635cb275994673c2b749928c20c824098d354b6ce574fd0854fccb2dfd74e'
    }

    /**
     *  The current round information.
     */
    get asEfinityV3014(): CollatorStakingCurrentRoundStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current round information.
 */
export interface CollatorStakingCurrentRoundStorageEfinityV3014 {
    get(): Promise<efinityV3014.Round>
}

export class CollatorStakingDesiredCandidatesCountStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'DesiredCandidatesCount'
    }

    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    get asEfinityV3014(): CollatorStakingDesiredCandidatesCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
 */
export interface CollatorStakingDesiredCandidatesCountStorageEfinityV3014 {
    get(): Promise<number>
}

export class CollatorStakingInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get asEfinityV3014(): CollatorStakingInvulnerablesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The invulnerable collators
 * 
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface CollatorStakingInvulnerablesStorageEfinityV3014 {
    get(): Promise<efinityV3014.Collator[]>
}

export class CollatorStakingMinCollatorStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'MinCollatorStake'
    }

    /**
     *  The min stake amount for collators
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The min stake amount for collators
     */
    get asEfinityV3014(): CollatorStakingMinCollatorStakeStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The min stake amount for collators
 */
export interface CollatorStakingMinCollatorStakeStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class CollatorStakingNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Nominators'
    }

    /**
     *  The current set of nominators.
     * 
     *  Each nominator is allowed to nominate one collator.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '11643981c5f057df403241a3175aad7384102829be78567ad40af375e54362df'
    }

    /**
     *  The current set of nominators.
     * 
     *  Each nominator is allowed to nominate one collator.
     */
    get asEfinityV3014(): CollatorStakingNominatorsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current set of nominators.
 * 
 *  Each nominator is allowed to nominate one collator.
 */
export interface CollatorStakingNominatorsStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.Nomination | undefined)>
    getAll(): Promise<efinityV3014.Nomination[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.Nomination | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.Nomination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.Nomination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.Nomination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.Nomination][]>
}

export class CollatorStakingSessionInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'SessionInfo'
    }

    /**
     *  The session info of collators including produced blocks and uptime
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '158926fcec32bbcafd0b7803e082429e4e807c32a63362ded7d2c8c3c9e95edb'
    }

    /**
     *  The session info of collators including produced blocks and uptime
     */
    get asEfinityV3014(): CollatorStakingSessionInfoStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The session info of collators including produced blocks and uptime
 */
export interface CollatorStakingSessionInfoStorageEfinityV3014 {
    get(key1: Uint8Array, key2: number): Promise<efinityV3014.CollatorSessionInfo>
    getAll(): Promise<efinityV3014.CollatorSessionInfo[]>
    getMany(keys: [Uint8Array, number][]): Promise<efinityV3014.CollatorSessionInfo[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: efinityV3014.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: efinityV3014.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: efinityV3014.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: efinityV3014.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: efinityV3014.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: efinityV3014.CollatorSessionInfo][]>
}

export class CommunityPoolApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asEfinityV3014(): CommunityPoolApprovalsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface CommunityPoolApprovalsStorageEfinityV3014 {
    get(): Promise<number[]>
}

export class CommunityPoolDeactivatedStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'Deactivated'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asEfinityV3014(): CommunityPoolDeactivatedStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface CommunityPoolDeactivatedStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class CommunityPoolProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asEfinityV3014(): CommunityPoolProposalCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface CommunityPoolProposalCountStorageEfinityV3014 {
    get(): Promise<number>
}

export class CommunityPoolProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asEfinityV3014(): CommunityPoolProposalsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface CommunityPoolProposalsStorageEfinityV3014 {
    get(key: number): Promise<(efinityV3014.Proposal | undefined)>
    getAll(): Promise<efinityV3014.Proposal[]>
    getMany(keys: number[]): Promise<(efinityV3014.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: efinityV3014.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: efinityV3014.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: efinityV3014.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: efinityV3014.Proposal][]>
}

export class ContractsCodeStorageStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'CodeStorage'
    }

    /**
     *  A mapping between an original code hash and instrumented wasm code, ready for execution.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'd90967ccfb2cbaf184f7d41bb1a330beaf15a192d25803d6352047090a9e635e'
    }

    /**
     *  A mapping between an original code hash and instrumented wasm code, ready for execution.
     */
    get asRocfinityV3012(): ContractsCodeStorageStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  A mapping between an original code hash and instrumented wasm code, ready for execution.
 */
export interface ContractsCodeStorageStorageRocfinityV3012 {
    get(key: Uint8Array): Promise<(rocfinityV3012.PrefabWasmModule | undefined)>
    getAll(): Promise<rocfinityV3012.PrefabWasmModule[]>
    getMany(keys: Uint8Array[]): Promise<(rocfinityV3012.PrefabWasmModule | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: rocfinityV3012.PrefabWasmModule][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: rocfinityV3012.PrefabWasmModule][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.PrefabWasmModule][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.PrefabWasmModule][]>
}

export class ContractsContractInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'ContractInfoOf'
    }

    /**
     *  The code associated with a given account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'b19f56551b6001070487b6e33ba3a88bf2e7a48df38a8c979b2d69856127de63'
    }

    /**
     *  The code associated with a given account.
     * 
     *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
     */
    get asRocfinityV3012(): ContractsContractInfoOfStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  The code associated with a given account.
 * 
 *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
 */
export interface ContractsContractInfoOfStorageRocfinityV3012 {
    get(key: Uint8Array): Promise<(rocfinityV3012.ContractInfo | undefined)>
    getAll(): Promise<rocfinityV3012.ContractInfo[]>
    getMany(keys: Uint8Array[]): Promise<(rocfinityV3012.ContractInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: rocfinityV3012.ContractInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: rocfinityV3012.ContractInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.ContractInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.ContractInfo][]>
}

export class ContractsDeletionQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'DeletionQueue'
    }

    /**
     *  Evicted contracts that await child trie deletion.
     * 
     *  Child trie deletion is a heavy operation depending on the amount of storage items
     *  stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'acd21a3434a729eeba0503ec7163c1b1afb6a839983d2fed35e9e4681d68d116'
    }

    /**
     *  Evicted contracts that await child trie deletion.
     * 
     *  Child trie deletion is a heavy operation depending on the amount of storage items
     *  stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
     */
    get asRocfinityV3012(): ContractsDeletionQueueStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  Evicted contracts that await child trie deletion.
 * 
 *  Child trie deletion is a heavy operation depending on the amount of storage items
 *  stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
 */
export interface ContractsDeletionQueueStorageRocfinityV3012 {
    get(): Promise<rocfinityV3012.DeletedContract[]>
}

export class ContractsNonceStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'Nonce'
    }

    /**
     *  This is a **monotonic** counter incremented on contract instantiation.
     * 
     *  This is used in order to generate unique trie ids for contracts.
     *  The trie id of a new contract is calculated from hash(account_id, nonce).
     *  The nonce is required because otherwise the following sequence would lead to
     *  a possible collision of storage:
     * 
     *  1. Create a new contract.
     *  2. Terminate the contract.
     *  3. Immediately recreate the contract with the same account_id.
     * 
     *  This is bad because the contents of a trie are deleted lazily and there might be
     *  storage of the old instantiation still in it when the new contract is created. Please
     *  note that we can't replace the counter by the block number because the sequence above
     *  can happen in the same block. We also can't keep the account counter in memory only
     *  because storage is the only way to communicate across different extrinsics in the
     *  same block.
     * 
     *  # Note
     * 
     *  Do not use it to determine the number of contracts. It won't be decremented if
     *  a contract is destroyed.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  This is a **monotonic** counter incremented on contract instantiation.
     * 
     *  This is used in order to generate unique trie ids for contracts.
     *  The trie id of a new contract is calculated from hash(account_id, nonce).
     *  The nonce is required because otherwise the following sequence would lead to
     *  a possible collision of storage:
     * 
     *  1. Create a new contract.
     *  2. Terminate the contract.
     *  3. Immediately recreate the contract with the same account_id.
     * 
     *  This is bad because the contents of a trie are deleted lazily and there might be
     *  storage of the old instantiation still in it when the new contract is created. Please
     *  note that we can't replace the counter by the block number because the sequence above
     *  can happen in the same block. We also can't keep the account counter in memory only
     *  because storage is the only way to communicate across different extrinsics in the
     *  same block.
     * 
     *  # Note
     * 
     *  Do not use it to determine the number of contracts. It won't be decremented if
     *  a contract is destroyed.
     */
    get asRocfinityV3012(): ContractsNonceStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  This is a **monotonic** counter incremented on contract instantiation.
 * 
 *  This is used in order to generate unique trie ids for contracts.
 *  The trie id of a new contract is calculated from hash(account_id, nonce).
 *  The nonce is required because otherwise the following sequence would lead to
 *  a possible collision of storage:
 * 
 *  1. Create a new contract.
 *  2. Terminate the contract.
 *  3. Immediately recreate the contract with the same account_id.
 * 
 *  This is bad because the contents of a trie are deleted lazily and there might be
 *  storage of the old instantiation still in it when the new contract is created. Please
 *  note that we can't replace the counter by the block number because the sequence above
 *  can happen in the same block. We also can't keep the account counter in memory only
 *  because storage is the only way to communicate across different extrinsics in the
 *  same block.
 * 
 *  # Note
 * 
 *  Do not use it to determine the number of contracts. It won't be decremented if
 *  a contract is destroyed.
 */
export interface ContractsNonceStorageRocfinityV3012 {
    get(): Promise<bigint>
}

export class ContractsOwnerInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'OwnerInfoOf'
    }

    /**
     *  A mapping between an original code hash and its owner information.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '76689686c73821ee740f33d092a38a05de83a2833f6c8857baa886203c5bf939'
    }

    /**
     *  A mapping between an original code hash and its owner information.
     */
    get asRocfinityV3012(): ContractsOwnerInfoOfStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  A mapping between an original code hash and its owner information.
 */
export interface ContractsOwnerInfoOfStorageRocfinityV3012 {
    get(key: Uint8Array): Promise<(rocfinityV3012.OwnerInfo | undefined)>
    getAll(): Promise<rocfinityV3012.OwnerInfo[]>
    getMany(keys: Uint8Array[]): Promise<(rocfinityV3012.OwnerInfo | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: rocfinityV3012.OwnerInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: rocfinityV3012.OwnerInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.OwnerInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.OwnerInfo][]>
}

export class ContractsPristineCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'Contracts'
    }

    protected getName() {
        return 'PristineCode'
    }

    /**
     *  A mapping from an original code hash to the original code, untouched by instrumentation.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  A mapping from an original code hash to the original code, untouched by instrumentation.
     */
    get asRocfinityV3012(): ContractsPristineCodeStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  A mapping from an original code hash to the original code, untouched by instrumentation.
 */
export interface ContractsPristineCodeStorageRocfinityV3012 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asEfinityV3014(): CouncilMembersStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageEfinityV3014 {
    get(): Promise<Uint8Array[]>
}

export class CouncilPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asEfinityV3014(): CouncilPrimeStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageEfinityV3014 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asEfinityV3014(): CouncilProposalCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageEfinityV3014 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '55b93fe51dc259c64e7ccd6364c69a6ff7c5dcacfd08498dc55059727da4938d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV3014(): CouncilProposalOfStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '7ed70254be0aed8e19c3ec391131fe3dbd3320b92ff6b61d79b32af21435db03'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asRocfinityV3012(): CouncilProposalOfStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '6cde8e9630d410c635d38d4e132dcdeddc5fd40211867012e22267dd19cd2cf1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV500(): CouncilProposalOfStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV600(): boolean {
        return this.getTypeHash() === 'd0a200fac2f9993d848c3a7287da92f026ee7ee2a194fed9e6f2d9eb76c9ab57'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV600(): CouncilProposalOfStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV601(): boolean {
        return this.getTypeHash() === 'cc79ccb140126aa785dace5b0d26db51b8387db5f6cbb6917faa59383367df1d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV601(): CouncilProposalOfStorageV601 {
        assert(this.isV601)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV602(): boolean {
        return this.getTypeHash() === '89559d3fb6f541bdf5075d1f4863bb5ac0e0acfed89282c2e8067b09a3b99f23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV602(): CouncilProposalOfStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.Call | undefined)>
    getAll(): Promise<efinityV3014.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageRocfinityV3012 {
    get(key: Uint8Array): Promise<(rocfinityV3012.Call | undefined)>
    getAll(): Promise<rocfinityV3012.Call[]>
    getMany(keys: Uint8Array[]): Promise<(rocfinityV3012.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: rocfinityV3012.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: rocfinityV3012.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV500 {
    get(key: Uint8Array): Promise<(v500.Call | undefined)>
    getAll(): Promise<v500.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v500.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV600 {
    get(key: Uint8Array): Promise<(v600.Call | undefined)>
    getAll(): Promise<v600.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v600.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v600.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v600.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v600.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v600.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV601 {
    get(key: Uint8Array): Promise<(v601.Call | undefined)>
    getAll(): Promise<v601.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v601.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v601.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v601.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v601.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v601.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV602 {
    get(key: Uint8Array): Promise<(v602.Call | undefined)>
    getAll(): Promise<v602.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v602.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.Call][]>
}

export class CouncilProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asEfinityV3014(): CouncilProposalsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageEfinityV3014 {
    get(): Promise<Uint8Array[]>
}

export class CouncilVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asEfinityV3014(): CouncilVotingStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.Votes | undefined)>
    getAll(): Promise<efinityV3014.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.Votes][]>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asEfinityV3014(): DemocracyBlacklistStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageEfinityV3014 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asEfinityV3014(): DemocracyCancellationsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageEfinityV3014 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asEfinityV3014(): DemocracyDepositOfStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageEfinityV3014 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asEfinityV3014(): DemocracyLastTabledWasExternalStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageEfinityV3014 {
    get(): Promise<boolean>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asEfinityV3014(): DemocracyLowestUnbakedStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageEfinityV3014 {
    get(): Promise<number>
}

export class DemocracyMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'a67a07e9fffcce1c75e0f4b23d9fdf10851d6031a73b67c731af0a1b8e2197e2'
    }

    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asEfinityV3014(): DemocracyMetadataOfStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  General information concerning any proposal or referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface DemocracyMetadataOfStorageEfinityV3014 {
    get(key: efinityV3014.MetadataOwner): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: efinityV3014.MetadataOwner[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<efinityV3014.MetadataOwner[]>
    getKeys(key: efinityV3014.MetadataOwner): Promise<efinityV3014.MetadataOwner[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV3014.MetadataOwner[]>
    getKeysPaged(pageSize: number, key: efinityV3014.MetadataOwner): AsyncIterable<efinityV3014.MetadataOwner[]>
    getPairs(): Promise<[k: efinityV3014.MetadataOwner, v: Uint8Array][]>
    getPairs(key: efinityV3014.MetadataOwner): Promise<[k: efinityV3014.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV3014.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: efinityV3014.MetadataOwner): AsyncIterable<[k: efinityV3014.MetadataOwner, v: Uint8Array][]>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asEfinityV3014(): DemocracyNextExternalStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageEfinityV3014 {
    get(): Promise<([efinityV3014.Bounded, efinityV3014.VoteThreshold] | undefined)>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asEfinityV3014(): DemocracyPublicPropCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageEfinityV3014 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asEfinityV3014(): DemocracyPublicPropsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageEfinityV3014 {
    get(): Promise<[number, efinityV3014.Bounded, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asEfinityV3014(): DemocracyReferendumCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageEfinityV3014 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asEfinityV3014(): DemocracyReferendumInfoOfStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageEfinityV3014 {
    get(key: number): Promise<(efinityV3014.ReferendumInfo | undefined)>
    getAll(): Promise<efinityV3014.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(efinityV3014.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: efinityV3014.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: efinityV3014.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: efinityV3014.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: efinityV3014.ReferendumInfo][]>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asEfinityV3014(): DemocracyVotingOfStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageEfinityV3014 {
    get(key: Uint8Array): Promise<efinityV3014.Voting>
    getAll(): Promise<efinityV3014.Voting[]>
    getMany(keys: Uint8Array[]): Promise<efinityV3014.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.Voting][]>
}

export class DmpQueueConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Configuration'
    }

    /**
     *  The configuration.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'd4ff4c68d7b5a5db6603b6449fa2fc5fa9ccb53292dd0c03e9b6a4920c6e75f9'
    }

    /**
     *  The configuration.
     */
    get asEfinityV3014(): DmpQueueConfigurationStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageEfinityV3014 {
    get(): Promise<efinityV3014.ConfigData>
}

export class DmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asEfinityV3014(): DmpQueueCounterForOverweightStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface DmpQueueCounterForOverweightStorageEfinityV3014 {
    get(): Promise<number>
}

export class DmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The overweight messages.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asEfinityV3014(): DmpQueueOverweightStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageEfinityV3014 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class DmpQueuePageIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'PageIndex'
    }

    /**
     *  The page index.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asEfinityV3014(): DmpQueuePageIndexStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageEfinityV3014 {
    get(): Promise<efinityV3014.PageIndexData>
}

export class DmpQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The queue pages.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asEfinityV3014(): DmpQueuePagesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageEfinityV3014 {
    get(key: number): Promise<[number, Uint8Array][]>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: number[]): Promise<[number, Uint8Array][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
}

export class EfinityXcmMinimumWeightsStorage extends StorageBase {
    protected getPrefix() {
        return 'EfinityXcm'
    }

    protected getName() {
        return 'MinimumWeights'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '54746c8f01b687fecc1a895c1db7ce3ffd9db2d7ab532bd2488b343309741009'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get asEfinityV3014(): EfinityXcmMinimumWeightsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'a6c0b18ac1880d14733b821d81f9929753a09ce6f844e3eee25d384d26e504f3'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get asRocfinityV3012(): EfinityXcmMinimumWeightsStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get isV500(): boolean {
        return this.getTypeHash() === '54746c8f01b687fecc1a895c1db7ce3ffd9db2d7ab532bd2488b343309741009'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get asV500(): EfinityXcmMinimumWeightsStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface EfinityXcmMinimumWeightsStorageEfinityV3014 {
    get(key: efinityV3014.XcmOperation): Promise<efinityV3014.MinimumWeightFeePair>
    getAll(): Promise<efinityV3014.MinimumWeightFeePair[]>
    getMany(keys: efinityV3014.XcmOperation[]): Promise<efinityV3014.MinimumWeightFeePair[]>
    getKeys(): Promise<efinityV3014.XcmOperation[]>
    getKeys(key: efinityV3014.XcmOperation): Promise<efinityV3014.XcmOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV3014.XcmOperation[]>
    getKeysPaged(pageSize: number, key: efinityV3014.XcmOperation): AsyncIterable<efinityV3014.XcmOperation[]>
    getPairs(): Promise<[k: efinityV3014.XcmOperation, v: efinityV3014.MinimumWeightFeePair][]>
    getPairs(key: efinityV3014.XcmOperation): Promise<[k: efinityV3014.XcmOperation, v: efinityV3014.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV3014.XcmOperation, v: efinityV3014.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number, key: efinityV3014.XcmOperation): AsyncIterable<[k: efinityV3014.XcmOperation, v: efinityV3014.MinimumWeightFeePair][]>
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface EfinityXcmMinimumWeightsStorageRocfinityV3012 {
    get(key: rocfinityV3012.XcmOperation): Promise<rocfinityV3012.MinimumWeightFeePair>
    getAll(): Promise<rocfinityV3012.MinimumWeightFeePair[]>
    getMany(keys: rocfinityV3012.XcmOperation[]): Promise<rocfinityV3012.MinimumWeightFeePair[]>
    getKeys(): Promise<rocfinityV3012.XcmOperation[]>
    getKeys(key: rocfinityV3012.XcmOperation): Promise<rocfinityV3012.XcmOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<rocfinityV3012.XcmOperation[]>
    getKeysPaged(pageSize: number, key: rocfinityV3012.XcmOperation): AsyncIterable<rocfinityV3012.XcmOperation[]>
    getPairs(): Promise<[k: rocfinityV3012.XcmOperation, v: rocfinityV3012.MinimumWeightFeePair][]>
    getPairs(key: rocfinityV3012.XcmOperation): Promise<[k: rocfinityV3012.XcmOperation, v: rocfinityV3012.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: rocfinityV3012.XcmOperation, v: rocfinityV3012.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number, key: rocfinityV3012.XcmOperation): AsyncIterable<[k: rocfinityV3012.XcmOperation, v: rocfinityV3012.MinimumWeightFeePair][]>
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface EfinityXcmMinimumWeightsStorageV500 {
    get(key: v500.XcmOperation): Promise<v500.MinimumWeightFeePair>
    getAll(): Promise<v500.MinimumWeightFeePair[]>
    getMany(keys: v500.XcmOperation[]): Promise<v500.MinimumWeightFeePair[]>
    getKeys(): Promise<v500.XcmOperation[]>
    getKeys(key: v500.XcmOperation): Promise<v500.XcmOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v500.XcmOperation[]>
    getKeysPaged(pageSize: number, key: v500.XcmOperation): AsyncIterable<v500.XcmOperation[]>
    getPairs(): Promise<[k: v500.XcmOperation, v: v500.MinimumWeightFeePair][]>
    getPairs(key: v500.XcmOperation): Promise<[k: v500.XcmOperation, v: v500.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v500.XcmOperation, v: v500.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number, key: v500.XcmOperation): AsyncIterable<[k: v500.XcmOperation, v: v500.MinimumWeightFeePair][]>
}

export class ExtrinsicPausePausedExtrinsicsStorage extends StorageBase {
    protected getPrefix() {
        return 'ExtrinsicPause'
    }

    protected getName() {
        return 'PausedExtrinsics'
    }

    /**
     *  Paused extrinsics map
     * 
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '9914d71a2b43fa7da00c957184ae8b79abfcf4e6a63fb1b814680e322156164c'
    }

    /**
     *  Paused extrinsics map
     * 
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    get asEfinityV3014(): ExtrinsicPausePausedExtrinsicsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Paused extrinsics map
 * 
 *  The key is tuple with the name of the pallet and the extrinsic name and value is
 *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
 */
export interface ExtrinsicPausePausedExtrinsicsStorageEfinityV3014 {
    get(key: efinityV3014.ExtrinsicInfo): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: efinityV3014.ExtrinsicInfo[]): Promise<(null | undefined)[]>
    getKeys(): Promise<efinityV3014.ExtrinsicInfo[]>
    getKeys(key: efinityV3014.ExtrinsicInfo): Promise<efinityV3014.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV3014.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number, key: efinityV3014.ExtrinsicInfo): AsyncIterable<efinityV3014.ExtrinsicInfo[]>
    getPairs(): Promise<[k: efinityV3014.ExtrinsicInfo, v: null][]>
    getPairs(key: efinityV3014.ExtrinsicInfo): Promise<[k: efinityV3014.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV3014.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number, key: efinityV3014.ExtrinsicInfo): AsyncIterable<[k: efinityV3014.ExtrinsicInfo, v: null][]>
}

export class FuelTanksAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'FuelTanks'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '01245446ad097e0a27bc7d677ff4084b3e43dd7bf1f408c6295b2c4b9b742aa1'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asEfinityV3014(): FuelTanksAccountsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageEfinityV3014 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(efinityV3014.UserAccount | undefined)>
    getAll(): Promise<efinityV3014.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(efinityV3014.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3014.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3014.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3014.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3014.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3014.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3014.UserAccount][]>
}

export class FuelTanksFreezeQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FuelTanks'
    }

    protected getName() {
        return 'FreezeQueue'
    }

    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '6417b6c5aebb64849792349d17be222d1c212c6254e5517ec62f89a5e5e14ddc'
    }

    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    get asEfinityV3014(): FuelTanksFreezeQueueStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The queue for fuel tank and rule set freezing
 *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
 */
export interface FuelTanksFreezeQueueStorageEfinityV3014 {
    get(): Promise<efinityV3014.FreezeQueueItem[]>
}

export class FuelTanksTanksStorage extends StorageBase {
    protected getPrefix() {
        return 'FuelTanks'
    }

    protected getName() {
        return 'Tanks'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '170c8c92a3afd2eb9f5df09f52871255ecd25233f0e5b53f9e504a5d16ca3478'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asEfinityV3014(): FuelTanksTanksStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.FuelTank | undefined)>
    getAll(): Promise<efinityV3014.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.FuelTank][]>
}

export class MarketplaceInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'Info'
    }

    /**
     *  Stores information about the marketplace
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8f3079a34bccec98eddaa087299c671597b9b6c0401ca8c900734ef257151b13'
    }

    /**
     *  Stores information about the marketplace
     */
    get asEfinityV3014(): MarketplaceInfoStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Stores information about the marketplace
 */
export interface MarketplaceInfoStorageEfinityV3014 {
    get(): Promise<efinityV3014.MarketPlaceInfo>
}

export class MarketplaceListingIdsByAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'ListingIdsByAccountId'
    }

    /**
     *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '33e12ad309c02112b5ea505c6e3e739ba83921bfe6bed7e5eb08d21907895180'
    }

    /**
     *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
     */
    get asEfinityV3014(): MarketplaceListingIdsByAccountIdStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
 */
export interface MarketplaceListingIdsByAccountIdStorageEfinityV3014 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
}

export class MarketplaceListingIdsByMakeAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'ListingIdsByMakeAsset'
    }

    /**
     *  Listing Ids by make asset's collection id and token id
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'cc5df187f7a6ddcd474c0c1e410e8d72bd71954d4b2ad06da5882588a225356a'
    }

    /**
     *  Listing Ids by make asset's collection id and token id
     */
    get asEfinityV3014(): MarketplaceListingIdsByMakeAssetStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Listing Ids by make asset's collection id and token id
 */
export interface MarketplaceListingIdsByMakeAssetStorageEfinityV3014 {
    get(key1: bigint, key2: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, bigint][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
}

export class MarketplaceListingIdsByTakeAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'ListingIdsByTakeAsset'
    }

    /**
     *  Listing Ids by take asset's collection id and token id
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'cc5df187f7a6ddcd474c0c1e410e8d72bd71954d4b2ad06da5882588a225356a'
    }

    /**
     *  Listing Ids by take asset's collection id and token id
     */
    get asEfinityV3014(): MarketplaceListingIdsByTakeAssetStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Listing Ids by take asset's collection id and token id
 */
export interface MarketplaceListingIdsByTakeAssetStorageEfinityV3014 {
    get(key1: bigint, key2: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, bigint][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
}

export class MarketplaceListingsStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'Listings'
    }

    /**
     *  Listings by ID
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'e51936bd4e8b63920dc0b1c10bbd1672cd077197cb65f17e9eba1f1a57c36335'
    }

    /**
     *  Listings by ID
     */
    get asEfinityV3014(): MarketplaceListingsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Listings by ID
 */
export interface MarketplaceListingsStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.Listing | undefined)>
    getAll(): Promise<efinityV3014.Listing[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.Listing | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.Listing][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.Listing][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.Listing][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.Listing][]>
}

export class MultiTokensAssetIdsByLocationStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'AssetIdsByLocation'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '7920f1b519a7f965b522a230108d367f65586e4e31d2aa9d94778fd4f0aab869'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asEfinityV3014(): MultiTokensAssetIdsByLocationStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '560c8ffce9be2f673615d006ac6747641630ed7dac4f7ce3edd1fbeb2f2e8c13'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asRocfinityV3012(): MultiTokensAssetIdsByLocationStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get isV500(): boolean {
        return this.getTypeHash() === '7920f1b519a7f965b522a230108d367f65586e4e31d2aa9d94778fd4f0aab869'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asV500(): MultiTokensAssetIdsByLocationStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface MultiTokensAssetIdsByLocationStorageEfinityV3014 {
    get(key: efinityV3014.V3MultiLocation): Promise<(efinityV3014.AssetId | undefined)>
    getAll(): Promise<efinityV3014.AssetId[]>
    getMany(keys: efinityV3014.V3MultiLocation[]): Promise<(efinityV3014.AssetId | undefined)[]>
    getKeys(): Promise<efinityV3014.V3MultiLocation[]>
    getKeys(key: efinityV3014.V3MultiLocation): Promise<efinityV3014.V3MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV3014.V3MultiLocation[]>
    getKeysPaged(pageSize: number, key: efinityV3014.V3MultiLocation): AsyncIterable<efinityV3014.V3MultiLocation[]>
    getPairs(): Promise<[k: efinityV3014.V3MultiLocation, v: efinityV3014.AssetId][]>
    getPairs(key: efinityV3014.V3MultiLocation): Promise<[k: efinityV3014.V3MultiLocation, v: efinityV3014.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV3014.V3MultiLocation, v: efinityV3014.AssetId][]>
    getPairsPaged(pageSize: number, key: efinityV3014.V3MultiLocation): AsyncIterable<[k: efinityV3014.V3MultiLocation, v: efinityV3014.AssetId][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface MultiTokensAssetIdsByLocationStorageRocfinityV3012 {
    get(key: rocfinityV3012.V1MultiLocation): Promise<(rocfinityV3012.AssetId | undefined)>
    getAll(): Promise<rocfinityV3012.AssetId[]>
    getMany(keys: rocfinityV3012.V1MultiLocation[]): Promise<(rocfinityV3012.AssetId | undefined)[]>
    getKeys(): Promise<rocfinityV3012.V1MultiLocation[]>
    getKeys(key: rocfinityV3012.V1MultiLocation): Promise<rocfinityV3012.V1MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<rocfinityV3012.V1MultiLocation[]>
    getKeysPaged(pageSize: number, key: rocfinityV3012.V1MultiLocation): AsyncIterable<rocfinityV3012.V1MultiLocation[]>
    getPairs(): Promise<[k: rocfinityV3012.V1MultiLocation, v: rocfinityV3012.AssetId][]>
    getPairs(key: rocfinityV3012.V1MultiLocation): Promise<[k: rocfinityV3012.V1MultiLocation, v: rocfinityV3012.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: rocfinityV3012.V1MultiLocation, v: rocfinityV3012.AssetId][]>
    getPairsPaged(pageSize: number, key: rocfinityV3012.V1MultiLocation): AsyncIterable<[k: rocfinityV3012.V1MultiLocation, v: rocfinityV3012.AssetId][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface MultiTokensAssetIdsByLocationStorageV500 {
    get(key: v500.V3MultiLocation): Promise<(v500.AssetId | undefined)>
    getAll(): Promise<v500.AssetId[]>
    getMany(keys: v500.V3MultiLocation[]): Promise<(v500.AssetId | undefined)[]>
    getKeys(): Promise<v500.V3MultiLocation[]>
    getKeys(key: v500.V3MultiLocation): Promise<v500.V3MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v500.V3MultiLocation[]>
    getKeysPaged(pageSize: number, key: v500.V3MultiLocation): AsyncIterable<v500.V3MultiLocation[]>
    getPairs(): Promise<[k: v500.V3MultiLocation, v: v500.AssetId][]>
    getPairs(key: v500.V3MultiLocation): Promise<[k: v500.V3MultiLocation, v: v500.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v500.V3MultiLocation, v: v500.AssetId][]>
    getPairsPaged(pageSize: number, key: v500.V3MultiLocation): AsyncIterable<[k: v500.V3MultiLocation, v: v500.AssetId][]>
}

export class MultiTokensAttributesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Attributes'
    }

    /**
     *  Metadata of collections and tokens.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'a746a93405e250d7e804277de85e59649a8d0f26dcdbc38249cee2190785886d'
    }

    /**
     *  Metadata of collections and tokens.
     */
    get asEfinityV3014(): MultiTokensAttributesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Metadata of collections and tokens.
 */
export interface MultiTokensAttributesStorageEfinityV3014 {
    get(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<(efinityV3014.Attribute | undefined)>
    getAll(): Promise<efinityV3014.Attribute[]>
    getMany(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<(efinityV3014.Attribute | undefined)[]>
    getKeys(): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined)): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getPairs(): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV3014.Attribute][]>
    getPairs(key1: bigint): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV3014.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined)): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV3014.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV3014.Attribute][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV3014.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV3014.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV3014.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV3014.Attribute][]>
}

export class MultiTokensCollectionAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'CollectionAccounts'
    }

    /**
     *  Stores information for an account per collection
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'b46672e82d7bfd0dfb77b459f54edcb3814fab36fcd1e60c5702769a7fd5b155'
    }

    /**
     *  Stores information for an account per collection
     */
    get asEfinityV3014(): MultiTokensCollectionAccountsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Stores information for an account per collection
 */
export interface MultiTokensCollectionAccountsStorageEfinityV3014 {
    get(key1: bigint, key2: Uint8Array): Promise<(efinityV3014.CollectionAccount | undefined)>
    getAll(): Promise<efinityV3014.CollectionAccount[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(efinityV3014.CollectionAccount | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: efinityV3014.CollectionAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: efinityV3014.CollectionAccount][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: efinityV3014.CollectionAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: efinityV3014.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: efinityV3014.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: efinityV3014.CollectionAccount][]>
}

export class MultiTokensCollectionsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Collections'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'e505bb38c2f05501278271d4d92422c32c38f8976d079eddae5a656ea2e00d3e'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get asEfinityV3014(): MultiTokensCollectionsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The collections in existence and their ownership details.
 */
export interface MultiTokensCollectionsStorageEfinityV3014 {
    get(key: bigint): Promise<(efinityV3014.Collection | undefined)>
    getAll(): Promise<efinityV3014.Collection[]>
    getMany(keys: bigint[]): Promise<(efinityV3014.Collection | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: efinityV3014.Collection][]>
    getPairs(key: bigint): Promise<[k: bigint, v: efinityV3014.Collection][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: efinityV3014.Collection][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: efinityV3014.Collection][]>
}

export class MultiTokensIdleOperationsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'IdleOperations'
    }

    /**
     *  Pending operations to be executed on [`Hooks::on_idle`].
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'ec6db42c13dba4897e1ce4c4d70fe8bb97c8e9d28f3b74c9fb0c50aa25ec55e1'
    }

    /**
     *  Pending operations to be executed on [`Hooks::on_idle`].
     */
    get asEfinityV3014(): MultiTokensIdleOperationsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Pending operations to be executed on [`Hooks::on_idle`].
 */
export interface MultiTokensIdleOperationsStorageEfinityV3014 {
    get(): Promise<efinityV3014.WeightedIdleOperation[]>
}

export class MultiTokensLastIteratedMigrationKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'LastIteratedMigrationKey'
    }

    /**
     *  Stores last iterated key for migrations. Used by multi block migrations
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  Stores last iterated key for migrations. Used by multi block migrations
     */
    get asRocfinityV3012(): MultiTokensLastIteratedMigrationKeyStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  Stores last iterated key for migrations. Used by multi block migrations
 */
export interface MultiTokensLastIteratedMigrationKeyStorageRocfinityV3012 {
    get(): Promise<(Uint8Array | undefined)>
}

export class MultiTokensMigrationStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'MigrationStatus'
    }

    /**
     *  Status of the current multi-block migration
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'b774eae9b764e58709b24f1cf13f47feebc5721c1a9d4e0ed22e4d0aaff8a169'
    }

    /**
     *  Status of the current multi-block migration
     */
    get asEfinityV3014(): MultiTokensMigrationStatusStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Status of the current multi-block migration
 */
export interface MultiTokensMigrationStatusStorageEfinityV3014 {
    get(): Promise<efinityV3014.MigrationStage>
}

export class MultiTokensMigrationsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Migrations'
    }

    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     * 
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '63315d583f765c75d71965bc03cd236f3e328b0d0c36349716dd7e18cb40721d'
    }

    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     * 
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    get asEfinityV3014(): MultiTokensMigrationsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Stores last iterated keys for migrations. Used by multi block migrations
 *  to resume from the last iterated key.
 * 
 *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
 *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
 */
export interface MultiTokensMigrationsStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.Migration | undefined)>
    getAll(): Promise<efinityV3014.Migration[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.Migration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.Migration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.Migration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.Migration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.Migration][]>
}

export class MultiTokensNextCollectionIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'NextCollectionId'
    }

    /**
     *  Sequencer for collectionID generators.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Sequencer for collectionID generators.
     */
    get asEfinityV3014(): MultiTokensNextCollectionIdStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Sequencer for collectionID generators.
 */
export interface MultiTokensNextCollectionIdStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class MultiTokensTokenAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'TokenAccounts'
    }

    /**
     *  Accounts per token
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '022fd18d40c53146908df260f1461b3e2a5e157129bb9cf34fd0207c0910c0a9'
    }

    /**
     *  Accounts per token
     */
    get asEfinityV3014(): MultiTokensTokenAccountsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  Accounts per token
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'aa9987301d7154519df0fc59a4664d747676b382efcba3db6f30f66eda406862'
    }

    /**
     *  Accounts per token
     */
    get asRocfinityV3012(): MultiTokensTokenAccountsStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  Accounts per token
     */
    get isV500(): boolean {
        return this.getTypeHash() === '022fd18d40c53146908df260f1461b3e2a5e157129bb9cf34fd0207c0910c0a9'
    }

    /**
     *  Accounts per token
     */
    get asV500(): MultiTokensTokenAccountsStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Accounts per token
 */
export interface MultiTokensTokenAccountsStorageEfinityV3014 {
    get(key1: bigint, key2: bigint, key3: Uint8Array): Promise<(efinityV3014.TokenAccount | undefined)>
    getAll(): Promise<efinityV3014.TokenAccount[]>
    getMany(keys: [bigint, bigint, Uint8Array][]): Promise<(efinityV3014.TokenAccount | undefined)[]>
    getKeys(): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, bigint, Uint8Array], v: efinityV3014.TokenAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: efinityV3014.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: efinityV3014.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[k: [bigint, bigint, Uint8Array], v: efinityV3014.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: efinityV3014.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: efinityV3014.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: efinityV3014.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: efinityV3014.TokenAccount][]>
}

/**
 *  Accounts per token
 */
export interface MultiTokensTokenAccountsStorageRocfinityV3012 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(rocfinityV3012.TokenAccount | undefined)>
    getAll(): Promise<rocfinityV3012.TokenAccount[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(rocfinityV3012.TokenAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: rocfinityV3012.TokenAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: rocfinityV3012.TokenAccount][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: rocfinityV3012.TokenAccount][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: rocfinityV3012.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: rocfinityV3012.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: rocfinityV3012.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: rocfinityV3012.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: rocfinityV3012.TokenAccount][]>
}

/**
 *  Accounts per token
 */
export interface MultiTokensTokenAccountsStorageV500 {
    get(key1: bigint, key2: bigint, key3: Uint8Array): Promise<(v500.TokenAccount | undefined)>
    getAll(): Promise<v500.TokenAccount[]>
    getMany(keys: [bigint, bigint, Uint8Array][]): Promise<(v500.TokenAccount | undefined)[]>
    getKeys(): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, bigint, Uint8Array], v: v500.TokenAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: v500.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: v500.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[k: [bigint, bigint, Uint8Array], v: v500.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: v500.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: v500.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: v500.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: v500.TokenAccount][]>
}

export class MultiTokensTokensStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Tokens'
    }

    /**
     *  Tokens storage
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '459387852b7c4d57e0769b6472defe27e00a6384a006f2d282c25b921828e149'
    }

    /**
     *  Tokens storage
     */
    get asEfinityV3014(): MultiTokensTokensStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  Tokens storage
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '1f0fc6f95d09c4195cdaa7e949e1b978130df91d5db17a5653ccc7d3bf38bf98'
    }

    /**
     *  Tokens storage
     */
    get asRocfinityV3012(): MultiTokensTokensStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  Tokens storage
     */
    get isV500(): boolean {
        return this.getTypeHash() === '4a69c75f61a970937687e30fb5e813537829154fe6e4cd7a99f23a9b880ca004'
    }

    /**
     *  Tokens storage
     */
    get asV500(): MultiTokensTokensStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Tokens storage
     */
    get isV600(): boolean {
        return this.getTypeHash() === '459387852b7c4d57e0769b6472defe27e00a6384a006f2d282c25b921828e149'
    }

    /**
     *  Tokens storage
     */
    get asV600(): MultiTokensTokensStorageV600 {
        assert(this.isV600)
        return this as any
    }
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageEfinityV3014 {
    get(key1: bigint, key2: bigint): Promise<(efinityV3014.Token | undefined)>
    getAll(): Promise<efinityV3014.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(efinityV3014.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: efinityV3014.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: efinityV3014.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: efinityV3014.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: efinityV3014.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: efinityV3014.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: efinityV3014.Token][]>
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageRocfinityV3012 {
    get(key1: bigint, key2: bigint): Promise<(rocfinityV3012.Token | undefined)>
    getAll(): Promise<rocfinityV3012.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(rocfinityV3012.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: rocfinityV3012.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: rocfinityV3012.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: rocfinityV3012.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: rocfinityV3012.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: rocfinityV3012.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: rocfinityV3012.Token][]>
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageV500 {
    get(key1: bigint, key2: bigint): Promise<(v500.Token | undefined)>
    getAll(): Promise<v500.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(v500.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v500.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v500.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v500.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v500.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v500.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v500.Token][]>
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageV600 {
    get(key1: bigint, key2: bigint): Promise<(v600.Token | undefined)>
    getAll(): Promise<v600.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(v600.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v600.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v600.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v600.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v600.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v600.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v600.Token][]>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asEfinityV3014(): MultisigMultisigsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageEfinityV3014 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(efinityV3014.Multisig | undefined)>
    getAll(): Promise<efinityV3014.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(efinityV3014.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3014.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3014.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3014.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3014.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3014.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3014.Multisig][]>
}

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asEfinityV3014(): ParachainInfoParachainIdStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageEfinityV3014 {
    get(): Promise<number>
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AnnouncedHrmpMessagesPerCandidate'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asEfinityV3014(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageEfinityV3014 {
    get(): Promise<number>
}

export class ParachainSystemAuthorizedUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AuthorizedUpgrade'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '901f6f87c9fafe3d3f61c36b45b24a63a90d51ae151f2b4a361d3c5611ffb723'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asEfinityV3014(): ParachainSystemAuthorizedUpgradeStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asRocfinityV3012(): ParachainSystemAuthorizedUpgradeStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isV602(): boolean {
        return this.getTypeHash() === '901f6f87c9fafe3d3f61c36b45b24a63a90d51ae151f2b4a361d3c5611ffb723'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV602(): ParachainSystemAuthorizedUpgradeStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageEfinityV3014 {
    get(): Promise<(efinityV3014.CodeUpgradeAuthorization | undefined)>
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageRocfinityV3012 {
    get(): Promise<(Uint8Array | undefined)>
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV602 {
    get(): Promise<(v602.CodeUpgradeAuthorization | undefined)>
}

export class ParachainSystemCustomValidationHeadDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'CustomValidationHeadData'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asEfinityV3014(): ParachainSystemCustomValidationHeadDataStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageEfinityV3014 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemDidSetValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'DidSetValidationCode'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asEfinityV3014(): ParachainSystemDidSetValidationCodeStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageEfinityV3014 {
    get(): Promise<boolean>
}

export class ParachainSystemHostConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HostConfiguration'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asEfinityV3014(): ParachainSystemHostConfigurationStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageEfinityV3014 {
    get(): Promise<(efinityV3014.V4AbridgedHostConfiguration | undefined)>
}

export class ParachainSystemHrmpOutboundMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpOutboundMessages'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asEfinityV3014(): ParachainSystemHrmpOutboundMessagesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageEfinityV3014 {
    get(): Promise<efinityV3014.OutboundHrmpMessage[]>
}

export class ParachainSystemHrmpWatermarkStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpWatermark'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asEfinityV3014(): ParachainSystemHrmpWatermarkStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageEfinityV3014 {
    get(): Promise<number>
}

export class ParachainSystemLastDmqMqcHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastDmqMqcHead'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asEfinityV3014(): ParachainSystemLastDmqMqcHeadStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageEfinityV3014 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemLastHrmpMqcHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastHrmpMqcHeads'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asEfinityV3014(): ParachainSystemLastHrmpMqcHeadsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageEfinityV3014 {
    get(): Promise<[number, Uint8Array][]>
}

export class ParachainSystemLastRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastRelayChainBlockNumber'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get asEfinityV3014(): ParachainSystemLastRelayChainBlockNumberStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface ParachainSystemLastRelayChainBlockNumberStorageEfinityV3014 {
    get(): Promise<number>
}

export class ParachainSystemNewValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'NewValidationCode'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asEfinityV3014(): ParachainSystemNewValidationCodeStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Validation code that is set by the parachain and is to be communicated to collator and
 *  consequently the relay-chain.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface ParachainSystemNewValidationCodeStorageEfinityV3014 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemPendingUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingUpwardMessages'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asEfinityV3014(): ParachainSystemPendingUpwardMessagesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageEfinityV3014 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemPendingValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingValidationCode'
    }

    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get asEfinityV3014(): ParachainSystemPendingValidationCodeStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
 * 
 *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
 *  which will result the next block process with the new validation code. This concludes the upgrade process.
 * 
 *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
 */
export interface ParachainSystemPendingValidationCodeStorageEfinityV3014 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemProcessedDownwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ProcessedDownwardMessages'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asEfinityV3014(): ParachainSystemProcessedDownwardMessagesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageEfinityV3014 {
    get(): Promise<number>
}

export class ParachainSystemRelayStateProofStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelayStateProof'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '38f79414b788123884c7cc1e6c6ca89331d3264f4bdcf6dff4501d6b20966908'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asEfinityV3014(): ParachainSystemRelayStateProofStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The state proof for the last relay parent block.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelayStateProofStorageEfinityV3014 {
    get(): Promise<(efinityV3014.StorageProof | undefined)>
}

export class ParachainSystemRelevantMessagingStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelevantMessagingState'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '24e0311e0ec9634d6acff6e06aa83b4bd4c57957b8f7525bf0dd22f0a73d7b09'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asEfinityV3014(): ParachainSystemRelevantMessagingStateStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageEfinityV3014 {
    get(): Promise<(efinityV3014.MessagingStateSnapshot | undefined)>
}

export class ParachainSystemReservedDmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedDmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asEfinityV3014(): ParachainSystemReservedDmpWeightOverrideStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageEfinityV3014 {
    get(): Promise<(efinityV3014.Weight | undefined)>
}

export class ParachainSystemReservedXcmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedXcmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asEfinityV3014(): ParachainSystemReservedXcmpWeightOverrideStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageEfinityV3014 {
    get(): Promise<(efinityV3014.Weight | undefined)>
}

export class ParachainSystemUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get asEfinityV3014(): ParachainSystemUpgradeRestrictionSignalStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 *  candidate will be invalid.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface ParachainSystemUpgradeRestrictionSignalStorageEfinityV3014 {
    get(): Promise<(efinityV3014.V4UpgradeRestriction | undefined)>
}

export class ParachainSystemUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpwardMessages'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asEfinityV3014(): ParachainSystemUpwardMessagesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageEfinityV3014 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemValidationDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ValidationData'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get asEfinityV3014(): ParachainSystemValidationDataStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 *  This value is expected to be set only once per block and it's never stored
 *  in the trie.
 */
export interface ParachainSystemValidationDataStorageEfinityV3014 {
    get(): Promise<(efinityV3014.V4PersistedValidationData | undefined)>
}

export class PolkadotXcmAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asEfinityV3014(): PolkadotXcmAssetTrapsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageEfinityV3014 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class PolkadotXcmCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asEfinityV3014(): PolkadotXcmCurrentMigrationStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageEfinityV3014 {
    get(): Promise<(efinityV3014.VersionMigrationStage | undefined)>
}

export class PolkadotXcmLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'LockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asEfinityV3014(): PolkadotXcmLockedFungiblesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface PolkadotXcmLockedFungiblesStorageEfinityV3014 {
    get(key: Uint8Array): Promise<([bigint, efinityV3014.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, efinityV3014.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, efinityV3014.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, efinityV3014.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, efinityV3014.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, efinityV3014.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, efinityV3014.VersionedMultiLocation][]][]>
}

export class PolkadotXcmQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asEfinityV3014(): PolkadotXcmQueriesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
    }

    /**
     *  The ongoing queries.
     */
    get asRocfinityV3012(): PolkadotXcmQueriesStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  The ongoing queries.
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asV500(): PolkadotXcmQueriesStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageEfinityV3014 {
    get(key: bigint): Promise<(efinityV3014.QueryStatus | undefined)>
    getAll(): Promise<efinityV3014.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(efinityV3014.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: efinityV3014.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: efinityV3014.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: efinityV3014.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: efinityV3014.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageRocfinityV3012 {
    get(key: bigint): Promise<(rocfinityV3012.QueryStatus | undefined)>
    getAll(): Promise<rocfinityV3012.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(rocfinityV3012.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: rocfinityV3012.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: rocfinityV3012.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: rocfinityV3012.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: rocfinityV3012.QueryStatus][]>
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageV500 {
    get(key: bigint): Promise<(v500.QueryStatus | undefined)>
    getAll(): Promise<v500.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(v500.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v500.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v500.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v500.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v500.QueryStatus][]>
}

export class PolkadotXcmQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asEfinityV3014(): PolkadotXcmQueryCounterStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class PolkadotXcmRemoteLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'RemoteLockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '32350375a3f683ddfbcb5dbc0bc4773d1d5aa9c2f1f2e358dced4492be76a541'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asEfinityV3014(): PolkadotXcmRemoteLockedFungiblesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageEfinityV3014 {
    get(key1: number, key2: Uint8Array, key3: efinityV3014.VersionedAssetId): Promise<(efinityV3014.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<efinityV3014.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, efinityV3014.VersionedAssetId][]): Promise<(efinityV3014.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, efinityV3014.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, efinityV3014.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, efinityV3014.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: efinityV3014.VersionedAssetId): Promise<[number, Uint8Array, efinityV3014.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, efinityV3014.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, efinityV3014.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, efinityV3014.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: efinityV3014.VersionedAssetId): AsyncIterable<[number, Uint8Array, efinityV3014.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, efinityV3014.VersionedAssetId], v: efinityV3014.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, efinityV3014.VersionedAssetId], v: efinityV3014.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, efinityV3014.VersionedAssetId], v: efinityV3014.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: efinityV3014.VersionedAssetId): Promise<[k: [number, Uint8Array, efinityV3014.VersionedAssetId], v: efinityV3014.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, efinityV3014.VersionedAssetId], v: efinityV3014.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, efinityV3014.VersionedAssetId], v: efinityV3014.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, efinityV3014.VersionedAssetId], v: efinityV3014.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: efinityV3014.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, efinityV3014.VersionedAssetId], v: efinityV3014.RemoteLockedFungibleRecord][]>
}

export class PolkadotXcmSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asEfinityV3014(): PolkadotXcmSafeXcmVersionStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageEfinityV3014 {
    get(): Promise<(number | undefined)>
}

export class PolkadotXcmSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asEfinityV3014(): PolkadotXcmSupportedVersionStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asRocfinityV3012(): PolkadotXcmSupportedVersionStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asV500(): PolkadotXcmSupportedVersionStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageEfinityV3014 {
    get(key1: number, key2: efinityV3014.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, efinityV3014.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, efinityV3014.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, efinityV3014.VersionedMultiLocation][]>
    getKeys(key1: number, key2: efinityV3014.VersionedMultiLocation): Promise<[number, efinityV3014.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, efinityV3014.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, efinityV3014.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: efinityV3014.VersionedMultiLocation): AsyncIterable<[number, efinityV3014.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, efinityV3014.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, efinityV3014.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: efinityV3014.VersionedMultiLocation): Promise<[k: [number, efinityV3014.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, efinityV3014.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, efinityV3014.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: efinityV3014.VersionedMultiLocation): AsyncIterable<[k: [number, efinityV3014.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageRocfinityV3012 {
    get(key1: number, key2: rocfinityV3012.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, rocfinityV3012.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeys(key1: number, key2: rocfinityV3012.VersionedMultiLocation): Promise<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: rocfinityV3012.VersionedMultiLocation): AsyncIterable<[number, rocfinityV3012.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, rocfinityV3012.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, rocfinityV3012.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: rocfinityV3012.VersionedMultiLocation): Promise<[k: [number, rocfinityV3012.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, rocfinityV3012.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, rocfinityV3012.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: rocfinityV3012.VersionedMultiLocation): AsyncIterable<[k: [number, rocfinityV3012.VersionedMultiLocation], v: number][]>
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageV500 {
    get(key1: number, key2: v500.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, v500.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v500.VersionedMultiLocation): Promise<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v500.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, v500.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: v500.VersionedMultiLocation): Promise<[k: [number, v500.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: number][]>
}

export class PolkadotXcmVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asEfinityV3014(): PolkadotXcmVersionDiscoveryQueueStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asRocfinityV3012(): PolkadotXcmVersionDiscoveryQueueStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asV500(): PolkadotXcmVersionDiscoveryQueueStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageEfinityV3014 {
    get(): Promise<[efinityV3014.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageRocfinityV3012 {
    get(): Promise<[rocfinityV3012.VersionedMultiLocation, number][]>
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageV500 {
    get(): Promise<[v500.VersionedMultiLocation, number][]>
}

export class PolkadotXcmVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asEfinityV3014(): PolkadotXcmVersionNotifiersStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asRocfinityV3012(): PolkadotXcmVersionNotifiersStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asV500(): PolkadotXcmVersionNotifiersStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageEfinityV3014 {
    get(key1: number, key2: efinityV3014.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, efinityV3014.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, efinityV3014.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, efinityV3014.VersionedMultiLocation][]>
    getKeys(key1: number, key2: efinityV3014.VersionedMultiLocation): Promise<[number, efinityV3014.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, efinityV3014.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, efinityV3014.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: efinityV3014.VersionedMultiLocation): AsyncIterable<[number, efinityV3014.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, efinityV3014.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, efinityV3014.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: efinityV3014.VersionedMultiLocation): Promise<[k: [number, efinityV3014.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, efinityV3014.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, efinityV3014.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: efinityV3014.VersionedMultiLocation): AsyncIterable<[k: [number, efinityV3014.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageRocfinityV3012 {
    get(key1: number, key2: rocfinityV3012.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, rocfinityV3012.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeys(key1: number, key2: rocfinityV3012.VersionedMultiLocation): Promise<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: rocfinityV3012.VersionedMultiLocation): AsyncIterable<[number, rocfinityV3012.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, rocfinityV3012.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, rocfinityV3012.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: rocfinityV3012.VersionedMultiLocation): Promise<[k: [number, rocfinityV3012.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, rocfinityV3012.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, rocfinityV3012.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: rocfinityV3012.VersionedMultiLocation): AsyncIterable<[k: [number, rocfinityV3012.VersionedMultiLocation], v: bigint][]>
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageV500 {
    get(key1: number, key2: v500.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, v500.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v500.VersionedMultiLocation): Promise<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v500.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, v500.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: v500.VersionedMultiLocation): Promise<[k: [number, v500.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: bigint][]>
}

export class PolkadotXcmVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asEfinityV3014(): PolkadotXcmVersionNotifyTargetsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asRocfinityV3012(): PolkadotXcmVersionNotifyTargetsStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asV500(): PolkadotXcmVersionNotifyTargetsStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageEfinityV3014 {
    get(key1: number, key2: efinityV3014.VersionedMultiLocation): Promise<([bigint, efinityV3014.Weight, number] | undefined)>
    getAll(): Promise<[bigint, efinityV3014.Weight, number][]>
    getMany(keys: [number, efinityV3014.VersionedMultiLocation][]): Promise<([bigint, efinityV3014.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, efinityV3014.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, efinityV3014.VersionedMultiLocation][]>
    getKeys(key1: number, key2: efinityV3014.VersionedMultiLocation): Promise<[number, efinityV3014.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, efinityV3014.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, efinityV3014.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: efinityV3014.VersionedMultiLocation): AsyncIterable<[number, efinityV3014.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, efinityV3014.VersionedMultiLocation], v: [bigint, efinityV3014.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, efinityV3014.VersionedMultiLocation], v: [bigint, efinityV3014.Weight, number]][]>
    getPairs(key1: number, key2: efinityV3014.VersionedMultiLocation): Promise<[k: [number, efinityV3014.VersionedMultiLocation], v: [bigint, efinityV3014.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, efinityV3014.VersionedMultiLocation], v: [bigint, efinityV3014.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, efinityV3014.VersionedMultiLocation], v: [bigint, efinityV3014.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: efinityV3014.VersionedMultiLocation): AsyncIterable<[k: [number, efinityV3014.VersionedMultiLocation], v: [bigint, efinityV3014.Weight, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageRocfinityV3012 {
    get(key1: number, key2: rocfinityV3012.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, rocfinityV3012.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeys(key1: number, key2: rocfinityV3012.VersionedMultiLocation): Promise<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, rocfinityV3012.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: rocfinityV3012.VersionedMultiLocation): AsyncIterable<[number, rocfinityV3012.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, rocfinityV3012.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, rocfinityV3012.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: rocfinityV3012.VersionedMultiLocation): Promise<[k: [number, rocfinityV3012.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, rocfinityV3012.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, rocfinityV3012.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: rocfinityV3012.VersionedMultiLocation): AsyncIterable<[k: [number, rocfinityV3012.VersionedMultiLocation], v: [bigint, bigint, number]][]>
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageV500 {
    get(key1: number, key2: v500.VersionedMultiLocation): Promise<([bigint, v500.Weight, number] | undefined)>
    getAll(): Promise<[bigint, v500.Weight, number][]>
    getMany(keys: [number, v500.VersionedMultiLocation][]): Promise<([bigint, v500.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, v500.VersionedMultiLocation][]>
    getKeys(key1: number, key2: v500.VersionedMultiLocation): Promise<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[number, v500.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, v500.VersionedMultiLocation], v: [bigint, v500.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, v500.VersionedMultiLocation], v: [bigint, v500.Weight, number]][]>
    getPairs(key1: number, key2: v500.VersionedMultiLocation): Promise<[k: [number, v500.VersionedMultiLocation], v: [bigint, v500.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: [bigint, v500.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: [bigint, v500.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: v500.VersionedMultiLocation): AsyncIterable<[k: [number, v500.VersionedMultiLocation], v: [bigint, v500.Weight, number]][]>
}

export class PolkadotXcmXcmExecutionSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'XcmExecutionSuspended'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get asEfinityV3014(): PolkadotXcmXcmExecutionSuspendedStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface PolkadotXcmXcmExecutionSuspendedStorageEfinityV3014 {
    get(): Promise<boolean>
}

export class PoolsPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'Pools'
    }

    protected getName() {
        return 'Pools'
    }

    /**
     *  Information about the pools
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'c34074cd3c393bbbf499a52d01b17aab7f4b9ef8d114a6f1153dba4c76f48632'
    }

    /**
     *  Information about the pools
     */
    get asEfinityV3014(): PoolsPoolsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Information about the pools
 */
export interface PoolsPoolsStorageEfinityV3014 {
    get(): Promise<[Uint8Array, efinityV3014.Pool][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asEfinityV3014(): PreimagePreimageForStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

export interface PreimagePreimageForStorageEfinityV3014 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asEfinityV3014(): PreimageStatusForStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.RequestStatus | undefined)>
    getAll(): Promise<efinityV3014.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.RequestStatus][]>
}

export class RandomnessCollectiveFlipRandomMaterialStorage extends StorageBase {
    protected getPrefix() {
        return 'RandomnessCollectiveFlip'
    }

    protected getName() {
        return 'RandomMaterial'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  Series of block headers from the last 81 blocks that acts as random seed material. This
     *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
     *  the oldest hash.
     */
    get asRocfinityV3012(): RandomnessCollectiveFlipRandomMaterialStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }
}

/**
 *  Series of block headers from the last 81 blocks that acts as random seed material. This
 *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
 *  the oldest hash.
 */
export interface RandomnessCollectiveFlipRandomMaterialStorageRocfinityV3012 {
    get(): Promise<Uint8Array[]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '6fe031a319b530f979b7d99af729c9762ca4fc70785d6631d8088992a71ae701'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asEfinityV3014(): SchedulerAgendaStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === 'a3e055e5b1bc78a9c0bf07ec2e12a6e84ef0e6040db9b7d685a8c82d052bd87e'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asRocfinityV3012(): SchedulerAgendaStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '6fe031a319b530f979b7d99af729c9762ca4fc70785d6631d8088992a71ae701'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asV500(): SchedulerAgendaStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageEfinityV3014 {
    get(key: number): Promise<(efinityV3014.Scheduled | undefined)[]>
    getAll(): Promise<(efinityV3014.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(efinityV3014.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (efinityV3014.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (efinityV3014.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (efinityV3014.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (efinityV3014.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageRocfinityV3012 {
    get(key: number): Promise<(rocfinityV3012.Scheduled | undefined)[]>
    getAll(): Promise<(rocfinityV3012.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(rocfinityV3012.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (rocfinityV3012.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (rocfinityV3012.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (rocfinityV3012.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (rocfinityV3012.Scheduled | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageV500 {
    get(key: number): Promise<(v500.Scheduled | undefined)[]>
    getAll(): Promise<(v500.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(v500.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (v500.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (v500.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (v500.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (v500.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asEfinityV3014(): SchedulerIncompleteSinceStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageEfinityV3014 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asEfinityV3014(): SchedulerLookupStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageEfinityV3014 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asEfinityV3014(): SessionCurrentIndexStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageEfinityV3014 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asEfinityV3014(): SessionDisabledValidatorsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface SessionDisabledValidatorsStorageEfinityV3014 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asEfinityV3014(): SessionKeyOwnerStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageEfinityV3014 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '2f670cd584e15d58095cb717f2ec5413369ec61a1d09b68212a36ac0523e456b'
    }

    /**
     *  The next session keys for a validator.
     */
    get asEfinityV3014(): SessionNextKeysStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.SessionKeys | undefined)>
    getAll(): Promise<efinityV3014.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asEfinityV3014(): SessionQueuedChangedStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageEfinityV3014 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '932bfec933e0f3e31ccbf8c6fe92f26e726dddd47f6a44fd88e96d56054aa98a'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asEfinityV3014(): SessionQueuedKeysStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageEfinityV3014 {
    get(): Promise<[Uint8Array, efinityV3014.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asEfinityV3014(): SessionValidatorsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageEfinityV3014 {
    get(): Promise<Uint8Array[]>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asEfinityV3014(): SudoKeyStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageEfinityV3014 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asEfinityV3014(): SystemAccountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asRocfinityV3012(): SystemAccountStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV602(): SystemAccountStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageEfinityV3014 {
    get(key: Uint8Array): Promise<efinityV3014.AccountInfo>
    getAll(): Promise<efinityV3014.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<efinityV3014.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageRocfinityV3012 {
    get(key: Uint8Array): Promise<rocfinityV3012.AccountInfo>
    getAll(): Promise<rocfinityV3012.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<rocfinityV3012.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: rocfinityV3012.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: rocfinityV3012.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV602 {
    get(key: Uint8Array): Promise<v602.AccountInfo>
    getAll(): Promise<v602.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v602.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asEfinityV3014(): SystemAllExtrinsicsLenStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageEfinityV3014 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asEfinityV3014(): SystemBlockHashStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageEfinityV3014 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asEfinityV3014(): SystemBlockWeightStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageEfinityV3014 {
    get(): Promise<efinityV3014.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asEfinityV3014(): SystemDigestStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageEfinityV3014 {
    get(): Promise<efinityV3014.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asEfinityV3014(): SystemEventCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageEfinityV3014 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asEfinityV3014(): SystemEventTopicsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageEfinityV3014 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'cc511fb88fb3c573ce4bbe26f8662a53bd4e39e3c663fb39824ed94a8f5a1ca7'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asEfinityV3014(): SystemEventsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '22655e23d2b361220fc5e90d1f4fb02d3c81f0f96d93c89d42c7d5ce1fe15de6'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asRocfinityV3012(): SystemEventsStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'c2bf473ffa588f7b22c332d1777f77f07e6c74d8e4e536160007c88d1615f6f6'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV500(): SystemEventsStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV600(): boolean {
        return this.getTypeHash() === '492eab1b45057659ac7e26547dd44eb8c72ec589d897ca0d65f3e57f6618a78e'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV600(): SystemEventsStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV601(): boolean {
        return this.getTypeHash() === '9a12903bc922139b71e2eb8cb38b73727f3896ca3de80e5d1bdd0519dd921f9b'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV601(): SystemEventsStorageV601 {
        assert(this.isV601)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'e1ee78d27d2150e8a2f93ff7bf8eecec264eabf963316e9e980901ba7fab01b2'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV602(): SystemEventsStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageEfinityV3014 {
    get(): Promise<efinityV3014.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageRocfinityV3012 {
    get(): Promise<rocfinityV3012.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV500 {
    get(): Promise<v500.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV600 {
    get(): Promise<v600.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV601 {
    get(): Promise<v601.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV602 {
    get(): Promise<v602.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asEfinityV3014(): SystemExecutionPhaseStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageEfinityV3014 {
    get(): Promise<(efinityV3014.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asEfinityV3014(): SystemExtrinsicCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageEfinityV3014 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asEfinityV3014(): SystemExtrinsicDataStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageEfinityV3014 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asEfinityV3014(): SystemLastRuntimeUpgradeStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageEfinityV3014 {
    get(): Promise<(efinityV3014.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asEfinityV3014(): SystemNumberStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageEfinityV3014 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asEfinityV3014(): SystemParentHashStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageEfinityV3014 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asEfinityV3014(): SystemUpgradedToTripleRefCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageEfinityV3014 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asEfinityV3014(): SystemUpgradedToU32RefCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageEfinityV3014 {
    get(): Promise<boolean>
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asEfinityV3014(): TechnicalCommitteeMembersStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageEfinityV3014 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asEfinityV3014(): TechnicalCommitteePrimeStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageEfinityV3014 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asEfinityV3014(): TechnicalCommitteeProposalCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageEfinityV3014 {
    get(): Promise<number>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '55b93fe51dc259c64e7ccd6364c69a6ff7c5dcacfd08498dc55059727da4938d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV3014(): TechnicalCommitteeProposalOfStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isRocfinityV3012(): boolean {
        return this.getTypeHash() === '7ed70254be0aed8e19c3ec391131fe3dbd3320b92ff6b61d79b32af21435db03'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asRocfinityV3012(): TechnicalCommitteeProposalOfStorageRocfinityV3012 {
        assert(this.isRocfinityV3012)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '6cde8e9630d410c635d38d4e132dcdeddc5fd40211867012e22267dd19cd2cf1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV500(): TechnicalCommitteeProposalOfStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV600(): boolean {
        return this.getTypeHash() === 'd0a200fac2f9993d848c3a7287da92f026ee7ee2a194fed9e6f2d9eb76c9ab57'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV600(): TechnicalCommitteeProposalOfStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV601(): boolean {
        return this.getTypeHash() === 'cc79ccb140126aa785dace5b0d26db51b8387db5f6cbb6917faa59383367df1d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV601(): TechnicalCommitteeProposalOfStorageV601 {
        assert(this.isV601)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV602(): boolean {
        return this.getTypeHash() === '89559d3fb6f541bdf5075d1f4863bb5ac0e0acfed89282c2e8067b09a3b99f23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV602(): TechnicalCommitteeProposalOfStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.Call | undefined)>
    getAll(): Promise<efinityV3014.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageRocfinityV3012 {
    get(key: Uint8Array): Promise<(rocfinityV3012.Call | undefined)>
    getAll(): Promise<rocfinityV3012.Call[]>
    getMany(keys: Uint8Array[]): Promise<(rocfinityV3012.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: rocfinityV3012.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: rocfinityV3012.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: rocfinityV3012.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV500 {
    get(key: Uint8Array): Promise<(v500.Call | undefined)>
    getAll(): Promise<v500.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v500.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV600 {
    get(key: Uint8Array): Promise<(v600.Call | undefined)>
    getAll(): Promise<v600.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v600.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v600.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v600.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v600.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v600.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV601 {
    get(key: Uint8Array): Promise<(v601.Call | undefined)>
    getAll(): Promise<v601.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v601.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v601.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v601.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v601.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v601.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV602 {
    get(key: Uint8Array): Promise<(v602.Call | undefined)>
    getAll(): Promise<v602.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v602.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.Call][]>
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asEfinityV3014(): TechnicalCommitteeProposalsStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageEfinityV3014 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asEfinityV3014(): TechnicalCommitteeVotingStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageEfinityV3014 {
    get(key: Uint8Array): Promise<(efinityV3014.Votes | undefined)>
    getAll(): Promise<efinityV3014.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3014.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.Votes][]>
}

export class TechnicalMembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asEfinityV3014(): TechnicalMembershipMembersStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageEfinityV3014 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalMembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asEfinityV3014(): TechnicalMembershipPrimeStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageEfinityV3014 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asEfinityV3014(): TimestampDidUpdateStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageEfinityV3014 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asEfinityV3014(): TimestampNowStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asEfinityV3014(): TransactionPaymentNextFeeMultiplierStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asEfinityV3014(): TransactionPaymentStorageVersionStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageEfinityV3014 {
    get(): Promise<efinityV3014.Releases>
}

export class VestingVestingSchedulesStorage extends StorageBase {
    protected getPrefix() {
        return 'Vesting'
    }

    protected getName() {
        return 'VestingSchedules'
    }

    /**
     *  Vesting schedules of an account.
     * 
     *  VestingSchedules: map AccountId => Vec<VestingSchedule>
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'd1025301ffa60f04c50bb1007ecb356d52103dd9c366150de1ba80c6e043ac2f'
    }

    /**
     *  Vesting schedules of an account.
     * 
     *  VestingSchedules: map AccountId => Vec<VestingSchedule>
     */
    get asEfinityV3014(): VestingVestingSchedulesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Vesting schedules of an account.
 * 
 *  VestingSchedules: map AccountId => Vec<VestingSchedule>
 */
export interface VestingVestingSchedulesStorageEfinityV3014 {
    get(key: Uint8Array): Promise<efinityV3014.VestingSchedule[]>
    getAll(): Promise<efinityV3014.VestingSchedule[][]>
    getMany(keys: Uint8Array[]): Promise<efinityV3014.VestingSchedule[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3014.VestingSchedule[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3014.VestingSchedule[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3014.VestingSchedule[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3014.VestingSchedule[]][]>
}

export class XcmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asEfinityV3014(): XcmpQueueCounterForOverweightStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface XcmpQueueCounterForOverweightStorageEfinityV3014 {
    get(): Promise<number>
}

export class XcmpQueueInboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpMessages'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asEfinityV3014(): XcmpQueueInboundXcmpMessagesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageEfinityV3014 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueInboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpStatus'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asEfinityV3014(): XcmpQueueInboundXcmpStatusStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageEfinityV3014 {
    get(): Promise<efinityV3014.InboundChannelDetails[]>
}

export class XcmpQueueOutboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpMessages'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asEfinityV3014(): XcmpQueueOutboundXcmpMessagesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageEfinityV3014 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueOutboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpStatus'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asEfinityV3014(): XcmpQueueOutboundXcmpStatusStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageEfinityV3014 {
    get(): Promise<efinityV3014.OutboundChannelDetails[]>
}

export class XcmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asEfinityV3014(): XcmpQueueOverweightStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageEfinityV3014 {
    get(key: bigint): Promise<([number, number, Uint8Array] | undefined)>
    getAll(): Promise<[number, number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
}

export class XcmpQueueOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asEfinityV3014(): XcmpQueueOverweightCountStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageEfinityV3014 {
    get(): Promise<bigint>
}

export class XcmpQueueQueueConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueConfig'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '2a88389b0d97d3253b6e1cdc0a2e938907eda23917d9d2a7dcb76b96b945d7c1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asEfinityV3014(): XcmpQueueQueueConfigStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageEfinityV3014 {
    get(): Promise<efinityV3014.QueueConfigData>
}

export class XcmpQueueQueueSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueSuspended'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asEfinityV3014(): XcmpQueueQueueSuspendedStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageEfinityV3014 {
    get(): Promise<boolean>
}

export class XcmpQueueSignalMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'SignalMessages'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get isEfinityV3014(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asEfinityV3014(): XcmpQueueSignalMessagesStorageEfinityV3014 {
        assert(this.isEfinityV3014)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageEfinityV3014 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}
