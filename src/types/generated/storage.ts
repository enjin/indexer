import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as matrixV603 from './matrixV603'
import * as v500 from './v500'
<<<<<<< HEAD
import * as efinityV3014 from './efinityV3014'
=======
import * as v602 from './v602'
>>>>>>> 7bcb92f (add events)
import * as v600 from './v600'
import * as v601 from './v601'

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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asMatrixV603(): AuthorshipAuthorStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageMatrixV603 {
    get(): Promise<(Uint8Array | undefined)>
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
    get isMatrixV603(): boolean {
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
    get asMatrixV603(): BalancesAccountStorageMatrixV603 {
        assert(this.isMatrixV603)
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
    get isV500(): boolean {
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
    get asV500(): BalancesAccountStorageV500 {
        assert(this.isV500)
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
export interface BalancesAccountStorageMatrixV603 {
    get(key: Uint8Array): Promise<matrixV603.AccountData>
    getAll(): Promise<matrixV603.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<matrixV603.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.AccountData][]>
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
export interface BalancesAccountStorageV500 {
    get(key: Uint8Array): Promise<v500.AccountData>
    getAll(): Promise<v500.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v500.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.AccountData][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asMatrixV603(): BalancesFreezesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Freeze locks on account balances.
 */
export interface BalancesFreezesStorageMatrixV603 {
    get(key: Uint8Array): Promise<matrixV603.IdAmount[]>
    getAll(): Promise<matrixV603.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<matrixV603.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.IdAmount[]][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Holds on account balances.
     */
    get asMatrixV603(): BalancesHoldsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageMatrixV603 {
    get(key: Uint8Array): Promise<matrixV603.IdAmount[]>
    getAll(): Promise<matrixV603.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<matrixV603.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.IdAmount[]][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asMatrixV603(): BalancesInactiveIssuanceStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asMatrixV603(): BalancesLocksStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageMatrixV603 {
    get(key: Uint8Array): Promise<matrixV603.BalanceLock[]>
    getAll(): Promise<matrixV603.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<matrixV603.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.BalanceLock[]][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asMatrixV603(): BalancesReservesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageMatrixV603 {
    get(key: Uint8Array): Promise<matrixV603.ReserveData[]>
    getAll(): Promise<matrixV603.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<matrixV603.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.ReserveData[]][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asMatrixV603(): BalancesTotalIssuanceStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asMatrixV603(): BountiesBountiesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageMatrixV603 {
    get(key: number): Promise<(matrixV603.Bounty | undefined)>
    getAll(): Promise<matrixV603.Bounty[]>
    getMany(keys: number[]): Promise<(matrixV603.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: matrixV603.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: matrixV603.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: matrixV603.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: matrixV603.Bounty][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asMatrixV603(): BountiesBountyApprovalsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountiesBountyApprovalsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asMatrixV603(): BountiesBountyCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountiesBountyCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asMatrixV603(): BountiesBountyDescriptionsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageMatrixV603 {
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

export class ClaimsAccountNonceStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'AccountNonce'
    }

    /**
     *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
     *  claimed.
     */
<<<<<<< HEAD
    get isMatrixV603(): boolean {
=======
    get isV602(): boolean {
>>>>>>> 7bcb92f (add events)
        return this.getTypeHash() === 'b66e643893eeb22eb47e70e5963130466a65d7fdc06d6f4fefd82f3ba4c900bd'
    }

    /**
     *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
     *  claimed.
     */
<<<<<<< HEAD
    get asMatrixV603(): ClaimsAccountNonceStorageMatrixV603 {
        assert(this.isMatrixV603)
=======
    get asV602(): ClaimsAccountNonceStorageV602 {
        assert(this.isV602)
>>>>>>> 7bcb92f (add events)
        return this as any
    }
}

/**
 *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
 *  claimed.
 */
<<<<<<< HEAD
export interface ClaimsAccountNonceStorageMatrixV603 {
=======
export interface ClaimsAccountNonceStorageV602 {
>>>>>>> 7bcb92f (add events)
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

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'b59addc95e4ad12f850fe4129a0ee964077180ad25eacf666dc124f2f5e0f166'
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get asMatrixV603(): ClaimsClaimsStorageMatrixV603 {
        assert(this.isMatrixV603)
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

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'b59addc95e4ad12f850fe4129a0ee964077180ad25eacf666dc124f2f5e0f166'
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get asV602(): ClaimsClaimsStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsClaimsStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.ClaimData[] | undefined)>
    getAll(): Promise<matrixV603.ClaimData[][]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.ClaimData[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.ClaimData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.ClaimData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.ClaimData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.ClaimData[]][]>
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

<<<<<<< HEAD
=======
/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsClaimsStorageV602 {
    get(key: Uint8Array): Promise<(v602.ClaimData[] | undefined)>
    getAll(): Promise<v602.ClaimData[][]>
    getMany(keys: Uint8Array[]): Promise<(v602.ClaimData[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.ClaimData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.ClaimData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.ClaimData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.ClaimData[]][]>
}

>>>>>>> 7bcb92f (add events)
export class ClaimsDelayClaimsPeriodStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'DelayClaimsPeriod'
    }

    /**
     *  Delay time in block numbers before the user could claim
     */
<<<<<<< HEAD
    get isMatrixV603(): boolean {
=======
    get isV602(): boolean {
>>>>>>> 7bcb92f (add events)
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Delay time in block numbers before the user could claim
     */
<<<<<<< HEAD
    get asMatrixV603(): ClaimsDelayClaimsPeriodStorageMatrixV603 {
        assert(this.isMatrixV603)
=======
    get asV602(): ClaimsDelayClaimsPeriodStorageV602 {
        assert(this.isV602)
>>>>>>> 7bcb92f (add events)
        return this as any
    }
}

/**
 *  Delay time in block numbers before the user could claim
 */
<<<<<<< HEAD
export interface ClaimsDelayClaimsPeriodStorageMatrixV603 {
=======
export interface ClaimsDelayClaimsPeriodStorageV602 {
>>>>>>> 7bcb92f (add events)
    get(): Promise<(number | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get asMatrixV603(): ClaimsExchangeRateStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
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

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get asV602(): ClaimsExchangeRateStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageMatrixV603 {
    get(): Promise<(number | undefined)>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageV500 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageV602 {
    get(): Promise<(number | undefined)>
}

export class ClaimsLatestBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'LatestBlockNumber'
    }

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get asMatrixV603(): ClaimsLatestBlockNumberStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
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

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get asV602(): ClaimsLatestBlockNumberStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface ClaimsLatestBlockNumberStorageMatrixV603 {
    get(): Promise<(number | undefined)>
}

/**
 *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
 *  relayer.
 */
export interface ClaimsLatestBlockNumberStorageV500 {
    get(): Promise<(v500.TrackedBlockNumbers | undefined)>
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface ClaimsLatestBlockNumberStorageV602 {
    get(): Promise<(number | undefined)>
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

    /**
     *  This is the total amount for which claims have been approved and are not yet claimed.
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  This is the total amount for which claims have been approved and are not yet claimed.
     */
    get asV500(): ClaimsTotalStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  This is the total amount for which claims have been approved and are not yet claimed.
 */
export interface ClaimsTotalStorageV500 {
    get(): Promise<bigint>
}

export class ClaimsTotalUnclaimedAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'TotalUnclaimedAmount'
    }

    /**
     *  This is the total amount for which claims have been requested and are not yet claimed.
     */
<<<<<<< HEAD
    get isMatrixV603(): boolean {
=======
    get isV602(): boolean {
>>>>>>> 7bcb92f (add events)
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  This is the total amount for which claims have been requested and are not yet claimed.
     */
<<<<<<< HEAD
    get asMatrixV603(): ClaimsTotalUnclaimedAmountStorageMatrixV603 {
        assert(this.isMatrixV603)
=======
    get asV602(): ClaimsTotalUnclaimedAmountStorageV602 {
        assert(this.isV602)
>>>>>>> 7bcb92f (add events)
        return this as any
    }
}

/**
 *  This is the total amount for which claims have been requested and are not yet claimed.
 */
<<<<<<< HEAD
export interface ClaimsTotalUnclaimedAmountStorageMatrixV603 {
=======
export interface ClaimsTotalUnclaimedAmountStorageV602 {
>>>>>>> 7bcb92f (add events)
    get(): Promise<bigint>
}

export class ClaimsTransactionHashLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'TransactionHashLookup'
    }

    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
<<<<<<< HEAD
    get isMatrixV603(): boolean {
=======
    get isV602(): boolean {
>>>>>>> 7bcb92f (add events)
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
<<<<<<< HEAD
    get asMatrixV603(): ClaimsTransactionHashLookupStorageMatrixV603 {
        assert(this.isMatrixV603)
=======
    get asV602(): ClaimsTransactionHashLookupStorageV602 {
        assert(this.isV602)
>>>>>>> 7bcb92f (add events)
        return this as any
    }
}

/**
 *  This stores transaction hash. Is used to check if transaction hash is already present
 */
<<<<<<< HEAD
export interface ClaimsTransactionHashLookupStorageMatrixV603 {
=======
export interface ClaimsTransactionHashLookupStorageV602 {
>>>>>>> 7bcb92f (add events)
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of candidates for collation.
     */
    get asMatrixV603(): CollatorStakingCandidatesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current set of candidates for collation.
 */
export interface CollatorStakingCandidatesStorageMatrixV603 {
    get(): Promise<matrixV603.Collator[]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  The list of collators who requested an exit.
     */
    get asMatrixV603(): CollatorStakingCollatorExitsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The list of collators who requested an exit.
 */
export interface CollatorStakingCollatorExitsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of collators
     */
    get asMatrixV603(): CollatorStakingCollatorsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current set of collators
 */
export interface CollatorStakingCollatorsStorageMatrixV603 {
    get(): Promise<matrixV603.Collator[]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '55f635cb275994673c2b749928c20c824098d354b6ce574fd0854fccb2dfd74e'
    }

    /**
     *  The current round information.
     */
    get asMatrixV603(): CollatorStakingCurrentRoundStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current round information.
 */
export interface CollatorStakingCurrentRoundStorageMatrixV603 {
    get(): Promise<matrixV603.Round>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    get asMatrixV603(): CollatorStakingDesiredCandidatesCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
 */
export interface CollatorStakingDesiredCandidatesCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get asMatrixV603(): CollatorStakingInvulnerablesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The invulnerable collators
 * 
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface CollatorStakingInvulnerablesStorageMatrixV603 {
    get(): Promise<matrixV603.Collator[]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The min stake amount for collators
     */
    get asMatrixV603(): CollatorStakingMinCollatorStakeStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The min stake amount for collators
 */
export interface CollatorStakingMinCollatorStakeStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '11643981c5f057df403241a3175aad7384102829be78567ad40af375e54362df'
    }

    /**
     *  The current set of nominators.
     * 
     *  Each nominator is allowed to nominate one collator.
     */
    get asMatrixV603(): CollatorStakingNominatorsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current set of nominators.
 * 
 *  Each nominator is allowed to nominate one collator.
 */
export interface CollatorStakingNominatorsStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.Nomination | undefined)>
    getAll(): Promise<matrixV603.Nomination[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.Nomination | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.Nomination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.Nomination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.Nomination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.Nomination][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '158926fcec32bbcafd0b7803e082429e4e807c32a63362ded7d2c8c3c9e95edb'
    }

    /**
     *  The session info of collators including produced blocks and uptime
     */
    get asMatrixV603(): CollatorStakingSessionInfoStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The session info of collators including produced blocks and uptime
 */
export interface CollatorStakingSessionInfoStorageMatrixV603 {
    get(key1: Uint8Array, key2: number): Promise<matrixV603.CollatorSessionInfo>
    getAll(): Promise<matrixV603.CollatorSessionInfo[]>
    getMany(keys: [Uint8Array, number][]): Promise<matrixV603.CollatorSessionInfo[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: matrixV603.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: matrixV603.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: matrixV603.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: matrixV603.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: matrixV603.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: matrixV603.CollatorSessionInfo][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asMatrixV603(): CommunityPoolApprovalsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface CommunityPoolApprovalsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asMatrixV603(): CommunityPoolDeactivatedStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface CommunityPoolDeactivatedStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asMatrixV603(): CommunityPoolProposalCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface CommunityPoolProposalCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asMatrixV603(): CommunityPoolProposalsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface CommunityPoolProposalsStorageMatrixV603 {
    get(key: number): Promise<(matrixV603.Proposal | undefined)>
    getAll(): Promise<matrixV603.Proposal[]>
    getMany(keys: number[]): Promise<(matrixV603.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: matrixV603.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: matrixV603.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: matrixV603.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: matrixV603.Proposal][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asMatrixV603(): CouncilMembersStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asMatrixV603(): CouncilPrimeStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asMatrixV603(): CouncilProposalCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixV603(): CouncilProposalOfStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
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
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
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
export interface CouncilProposalOfStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.Call | undefined)>
    getAll(): Promise<matrixV603.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.Call][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asMatrixV603(): CouncilProposalsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asMatrixV603(): CouncilVotingStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.Votes | undefined)>
    getAll(): Promise<matrixV603.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.Votes][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asMatrixV603(): DemocracyBlacklistStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asMatrixV603(): DemocracyCancellationsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asMatrixV603(): DemocracyDepositOfStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asMatrixV603(): DemocracyLastTabledWasExternalStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asMatrixV603(): DemocracyLowestUnbakedStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
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
    get asMatrixV603(): DemocracyMetadataOfStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface DemocracyMetadataOfStorageMatrixV603 {
    get(key: matrixV603.MetadataOwner): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: matrixV603.MetadataOwner[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<matrixV603.MetadataOwner[]>
    getKeys(key: matrixV603.MetadataOwner): Promise<matrixV603.MetadataOwner[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixV603.MetadataOwner[]>
    getKeysPaged(pageSize: number, key: matrixV603.MetadataOwner): AsyncIterable<matrixV603.MetadataOwner[]>
    getPairs(): Promise<[k: matrixV603.MetadataOwner, v: Uint8Array][]>
    getPairs(key: matrixV603.MetadataOwner): Promise<[k: matrixV603.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixV603.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: matrixV603.MetadataOwner): AsyncIterable<[k: matrixV603.MetadataOwner, v: Uint8Array][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asMatrixV603(): DemocracyNextExternalStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageMatrixV603 {
    get(): Promise<([matrixV603.Bounded, matrixV603.VoteThreshold] | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asMatrixV603(): DemocracyPublicPropCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asMatrixV603(): DemocracyPublicPropsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageMatrixV603 {
    get(): Promise<[number, matrixV603.Bounded, Uint8Array][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asMatrixV603(): DemocracyReferendumCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asMatrixV603(): DemocracyReferendumInfoOfStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageMatrixV603 {
    get(key: number): Promise<(matrixV603.ReferendumInfo | undefined)>
    getAll(): Promise<matrixV603.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(matrixV603.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: matrixV603.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: matrixV603.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: matrixV603.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: matrixV603.ReferendumInfo][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asMatrixV603(): DemocracyVotingOfStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageMatrixV603 {
    get(key: Uint8Array): Promise<matrixV603.Voting>
    getAll(): Promise<matrixV603.Voting[]>
    getMany(keys: Uint8Array[]): Promise<matrixV603.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.Voting][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'd4ff4c68d7b5a5db6603b6449fa2fc5fa9ccb53292dd0c03e9b6a4920c6e75f9'
    }

    /**
     *  The configuration.
     */
    get asMatrixV603(): DmpQueueConfigurationStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageMatrixV603 {
    get(): Promise<matrixV603.ConfigData>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asMatrixV603(): DmpQueueCounterForOverweightStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface DmpQueueCounterForOverweightStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asMatrixV603(): DmpQueueOverweightStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asMatrixV603(): DmpQueuePageIndexStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageMatrixV603 {
    get(): Promise<matrixV603.PageIndexData>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asMatrixV603(): DmpQueuePagesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '9914d71a2b43fa7da00c957184ae8b79abfcf4e6a63fb1b814680e322156164c'
    }

    /**
     *  Paused extrinsics map
     * 
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    get asMatrixV603(): ExtrinsicPausePausedExtrinsicsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Paused extrinsics map
 * 
 *  The key is tuple with the name of the pallet and the extrinsic name and value is
 *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
 */
export interface ExtrinsicPausePausedExtrinsicsStorageMatrixV603 {
    get(key: matrixV603.ExtrinsicInfo): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: matrixV603.ExtrinsicInfo[]): Promise<(null | undefined)[]>
    getKeys(): Promise<matrixV603.ExtrinsicInfo[]>
    getKeys(key: matrixV603.ExtrinsicInfo): Promise<matrixV603.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixV603.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number, key: matrixV603.ExtrinsicInfo): AsyncIterable<matrixV603.ExtrinsicInfo[]>
    getPairs(): Promise<[k: matrixV603.ExtrinsicInfo, v: null][]>
    getPairs(key: matrixV603.ExtrinsicInfo): Promise<[k: matrixV603.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixV603.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number, key: matrixV603.ExtrinsicInfo): AsyncIterable<[k: matrixV603.ExtrinsicInfo, v: null][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '01245446ad097e0a27bc7d677ff4084b3e43dd7bf1f408c6295b2c4b9b742aa1'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asMatrixV603(): FuelTanksAccountsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageMatrixV603 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(matrixV603.UserAccount | undefined)>
    getAll(): Promise<matrixV603.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(matrixV603.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: matrixV603.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixV603.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixV603.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixV603.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixV603.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixV603.UserAccount][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '6417b6c5aebb64849792349d17be222d1c212c6254e5517ec62f89a5e5e14ddc'
    }

    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    get asMatrixV603(): FuelTanksFreezeQueueStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The queue for fuel tank and rule set freezing
 *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
 */
export interface FuelTanksFreezeQueueStorageMatrixV603 {
    get(): Promise<matrixV603.FreezeQueueItem[]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '170c8c92a3afd2eb9f5df09f52871255ecd25233f0e5b53f9e504a5d16ca3478'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asMatrixV603(): FuelTanksTanksStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.FuelTank | undefined)>
    getAll(): Promise<matrixV603.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.FuelTank][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'cf0eb405cb6ed3bb6861e38a8d936f67fa9f71862d7c3c2be2ca3f90d3ad8b3d'
    }

    /**
     *  Stores information about the marketplace
     */
    get asMatrixV603(): MarketplaceInfoStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
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

    /**
     *  Stores information about the marketplace
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'cf0eb405cb6ed3bb6861e38a8d936f67fa9f71862d7c3c2be2ca3f90d3ad8b3d'
    }

    /**
     *  Stores information about the marketplace
     */
    get asV602(): MarketplaceInfoStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Stores information about the marketplace
 */
export interface MarketplaceInfoStorageMatrixV603 {
    get(): Promise<matrixV603.MarketPlaceInfo>
}

/**
 *  Stores information about the marketplace
 */
export interface MarketplaceInfoStorageEfinityV3014 {
    get(): Promise<efinityV3014.MarketPlaceInfo>
}

/**
 *  Stores information about the marketplace
 */
export interface MarketplaceInfoStorageV602 {
    get(): Promise<v602.MarketPlaceInfo>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'e51936bd4e8b63920dc0b1c10bbd1672cd077197cb65f17e9eba1f1a57c36335'
    }

    /**
     *  Listings by ID
     */
    get asMatrixV603(): MarketplaceListingsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Listings by ID
 */
export interface MarketplaceListingsStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.Listing | undefined)>
    getAll(): Promise<matrixV603.Listing[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.Listing | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.Listing][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.Listing][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.Listing][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.Listing][]>
}

export class MatrixXcmMinimumWeightsStorage extends StorageBase {
    protected getPrefix() {
        return 'MatrixXcm'
    }

    protected getName() {
        return 'MinimumWeights'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '54746c8f01b687fecc1a895c1db7ce3ffd9db2d7ab532bd2488b343309741009'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get asMatrixV603(): MatrixXcmMinimumWeightsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MatrixXcmMinimumWeightsStorageMatrixV603 {
    get(key: matrixV603.XcmOperation): Promise<matrixV603.MinimumWeightFeePair>
    getAll(): Promise<matrixV603.MinimumWeightFeePair[]>
    getMany(keys: matrixV603.XcmOperation[]): Promise<matrixV603.MinimumWeightFeePair[]>
    getKeys(): Promise<matrixV603.XcmOperation[]>
    getKeys(key: matrixV603.XcmOperation): Promise<matrixV603.XcmOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixV603.XcmOperation[]>
    getKeysPaged(pageSize: number, key: matrixV603.XcmOperation): AsyncIterable<matrixV603.XcmOperation[]>
    getPairs(): Promise<[k: matrixV603.XcmOperation, v: matrixV603.MinimumWeightFeePair][]>
    getPairs(key: matrixV603.XcmOperation): Promise<[k: matrixV603.XcmOperation, v: matrixV603.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixV603.XcmOperation, v: matrixV603.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number, key: matrixV603.XcmOperation): AsyncIterable<[k: matrixV603.XcmOperation, v: matrixV603.MinimumWeightFeePair][]>
}

export class MatrixXcmMinimumWeightsStorage extends StorageBase {
    protected getPrefix() {
        return 'MatrixXcm'
    }

    protected getName() {
        return 'MinimumWeights'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get isV602(): boolean {
        return this.getTypeHash() === '54746c8f01b687fecc1a895c1db7ce3ffd9db2d7ab532bd2488b343309741009'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get asV602(): MatrixXcmMinimumWeightsStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MatrixXcmMinimumWeightsStorageV602 {
    get(key: v602.XcmOperation): Promise<v602.MinimumWeightFeePair>
    getAll(): Promise<v602.MinimumWeightFeePair[]>
    getMany(keys: v602.XcmOperation[]): Promise<v602.MinimumWeightFeePair[]>
    getKeys(): Promise<v602.XcmOperation[]>
    getKeys(key: v602.XcmOperation): Promise<v602.XcmOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v602.XcmOperation[]>
    getKeysPaged(pageSize: number, key: v602.XcmOperation): AsyncIterable<v602.XcmOperation[]>
    getPairs(): Promise<[k: v602.XcmOperation, v: v602.MinimumWeightFeePair][]>
    getPairs(key: v602.XcmOperation): Promise<[k: v602.XcmOperation, v: v602.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v602.XcmOperation, v: v602.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number, key: v602.XcmOperation): AsyncIterable<[k: v602.XcmOperation, v: v602.MinimumWeightFeePair][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '7920f1b519a7f965b522a230108d367f65586e4e31d2aa9d94778fd4f0aab869'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asMatrixV603(): MultiTokensAssetIdsByLocationStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface MultiTokensAssetIdsByLocationStorageMatrixV603 {
    get(key: matrixV603.V3MultiLocation): Promise<(matrixV603.AssetId | undefined)>
    getAll(): Promise<matrixV603.AssetId[]>
    getMany(keys: matrixV603.V3MultiLocation[]): Promise<(matrixV603.AssetId | undefined)[]>
    getKeys(): Promise<matrixV603.V3MultiLocation[]>
    getKeys(key: matrixV603.V3MultiLocation): Promise<matrixV603.V3MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixV603.V3MultiLocation[]>
    getKeysPaged(pageSize: number, key: matrixV603.V3MultiLocation): AsyncIterable<matrixV603.V3MultiLocation[]>
    getPairs(): Promise<[k: matrixV603.V3MultiLocation, v: matrixV603.AssetId][]>
    getPairs(key: matrixV603.V3MultiLocation): Promise<[k: matrixV603.V3MultiLocation, v: matrixV603.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixV603.V3MultiLocation, v: matrixV603.AssetId][]>
    getPairsPaged(pageSize: number, key: matrixV603.V3MultiLocation): AsyncIterable<[k: matrixV603.V3MultiLocation, v: matrixV603.AssetId][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a746a93405e250d7e804277de85e59649a8d0f26dcdbc38249cee2190785886d'
    }

    /**
     *  Metadata of collections and tokens.
     */
    get asMatrixV603(): MultiTokensAttributesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Metadata of collections and tokens.
 */
export interface MultiTokensAttributesStorageMatrixV603 {
    get(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<(matrixV603.Attribute | undefined)>
    getAll(): Promise<matrixV603.Attribute[]>
    getMany(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<(matrixV603.Attribute | undefined)[]>
    getKeys(): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined)): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getPairs(): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixV603.Attribute][]>
    getPairs(key1: bigint): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixV603.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined)): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixV603.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixV603.Attribute][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixV603.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixV603.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixV603.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixV603.Attribute][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'b46672e82d7bfd0dfb77b459f54edcb3814fab36fcd1e60c5702769a7fd5b155'
    }

    /**
     *  Stores information for an account per collection
     */
    get asMatrixV603(): MultiTokensCollectionAccountsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Stores information for an account per collection
 */
export interface MultiTokensCollectionAccountsStorageMatrixV603 {
    get(key1: bigint, key2: Uint8Array): Promise<(matrixV603.CollectionAccount | undefined)>
    getAll(): Promise<matrixV603.CollectionAccount[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(matrixV603.CollectionAccount | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: matrixV603.CollectionAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: matrixV603.CollectionAccount][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: matrixV603.CollectionAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: matrixV603.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: matrixV603.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: matrixV603.CollectionAccount][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'e505bb38c2f05501278271d4d92422c32c38f8976d079eddae5a656ea2e00d3e'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get asMatrixV603(): MultiTokensCollectionsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The collections in existence and their ownership details.
 */
export interface MultiTokensCollectionsStorageMatrixV603 {
    get(key: bigint): Promise<(matrixV603.Collection | undefined)>
    getAll(): Promise<matrixV603.Collection[]>
    getMany(keys: bigint[]): Promise<(matrixV603.Collection | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: matrixV603.Collection][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixV603.Collection][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixV603.Collection][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixV603.Collection][]>
}

export class MultiTokensEthereumAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumAccounts'
    }

    /**
     *  Stores data for an ethereum address
     */
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '7cc397680e440faaf2a40fafae4d9fde6957423c8489984029cd2e04818a92f7'
    }

    /**
     *  Stores data for an ethereum address
     */
    get asMatrixV603(): MultiTokensEthereumAccountsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Stores data for an ethereum address
 */
export interface MultiTokensEthereumAccountsStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.EthereumAccount | undefined)>
    getAll(): Promise<matrixV603.EthereumAccount[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.EthereumAccount | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.EthereumAccount][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.EthereumAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.EthereumAccount][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.EthereumAccount][]>
}

export class MultiTokensEthereumBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumBalances'
    }

    /**
     *  Holds the ethereum balance for each token
     */
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'c6d469a2bb1159ba1b3bfd48909f40e09449e74f982e2dee969f83c6e45d4ea9'
    }

    /**
     *  Holds the ethereum balance for each token
     */
    get asMatrixV603(): MultiTokensEthereumBalancesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Holds the ethereum balance for each token
 */
export interface MultiTokensEthereumBalancesStorageMatrixV603 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
}

export class MultiTokensEthereumTokensStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumTokens'
    }

    /**
     *  The token assets from ethereum
     */
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '8862d6dd197aaeee063a1d9f6b6879d6d08545ad6f66ce3d357775bbceb00bc9'
    }

    /**
     *  The token assets from ethereum
     */
    get asMatrixV603(): MultiTokensEthereumTokensStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The token assets from ethereum
 */
export interface MultiTokensEthereumTokensStorageMatrixV603 {
    get(key1: bigint, key2: bigint): Promise<(matrixV603.EthereumToken | undefined)>
    getAll(): Promise<matrixV603.EthereumToken[]>
    getMany(keys: [bigint, bigint][]): Promise<(matrixV603.EthereumToken | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: matrixV603.EthereumToken][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: matrixV603.EthereumToken][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: matrixV603.EthereumToken][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: matrixV603.EthereumToken][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixV603.EthereumToken][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixV603.EthereumToken][]>
}

export class MultiTokensEthereumAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumAccounts'
    }

    /**
     *  Stores data for an ethereum address
     */
    get isV602(): boolean {
        return this.getTypeHash() === '7cc397680e440faaf2a40fafae4d9fde6957423c8489984029cd2e04818a92f7'
    }

    /**
     *  Stores data for an ethereum address
     */
    get asV602(): MultiTokensEthereumAccountsStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Stores data for an ethereum address
 */
export interface MultiTokensEthereumAccountsStorageV602 {
    get(key: Uint8Array): Promise<(v602.EthereumAccount | undefined)>
    getAll(): Promise<v602.EthereumAccount[]>
    getMany(keys: Uint8Array[]): Promise<(v602.EthereumAccount | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.EthereumAccount][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.EthereumAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.EthereumAccount][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.EthereumAccount][]>
}

export class MultiTokensEthereumBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumBalances'
    }

    /**
     *  Holds the ethereum balance for each token
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'c6d469a2bb1159ba1b3bfd48909f40e09449e74f982e2dee969f83c6e45d4ea9'
    }

    /**
     *  Holds the ethereum balance for each token
     */
    get asV602(): MultiTokensEthereumBalancesStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Holds the ethereum balance for each token
 */
export interface MultiTokensEthereumBalancesStorageV602 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
}

export class MultiTokensEthereumTokensStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumTokens'
    }

    /**
     *  The token assets from ethereum
     */
    get isV602(): boolean {
        return this.getTypeHash() === '8862d6dd197aaeee063a1d9f6b6879d6d08545ad6f66ce3d357775bbceb00bc9'
    }

    /**
     *  The token assets from ethereum
     */
    get asV602(): MultiTokensEthereumTokensStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  The token assets from ethereum
 */
export interface MultiTokensEthereumTokensStorageV602 {
    get(key1: bigint, key2: bigint): Promise<(v602.EthereumToken | undefined)>
    getAll(): Promise<v602.EthereumToken[]>
    getMany(keys: [bigint, bigint][]): Promise<(v602.EthereumToken | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v602.EthereumToken][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v602.EthereumToken][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v602.EthereumToken][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v602.EthereumToken][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v602.EthereumToken][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v602.EthereumToken][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'b774eae9b764e58709b24f1cf13f47feebc5721c1a9d4e0ed22e4d0aaff8a169'
    }

    /**
     *  Status of the current multi-block migration
     */
    get asMatrixV603(): MultiTokensMigrationStatusStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Status of the current multi-block migration
 */
export interface MultiTokensMigrationStatusStorageMatrixV603 {
    get(): Promise<matrixV603.MigrationStage>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '63315d583f765c75d71965bc03cd236f3e328b0d0c36349716dd7e18cb40721d'
    }

    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     * 
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    get asMatrixV603(): MultiTokensMigrationsStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface MultiTokensMigrationsStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.Migration | undefined)>
    getAll(): Promise<matrixV603.Migration[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.Migration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.Migration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.Migration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.Migration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.Migration][]>
}

export class MultiTokensNativeCollectionIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'NativeCollectionIds'
    }

    /**
     *  Map of ethereum collection id to the native collection id
     */
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '03ac0b80fdf641bd511733299fc9539a6f79a9c134c3b7d7af44cad8d25fa71a'
    }

    /**
     *  Map of ethereum collection id to the native collection id
     */
    get asMatrixV603(): MultiTokensNativeCollectionIdsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Map of ethereum collection id to the native collection id
 */
export interface MultiTokensNativeCollectionIdsStorageMatrixV603 {
    get(key: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class MultiTokensNativeCollectionIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'NativeCollectionIds'
    }

    /**
     *  Map of ethereum collection id to the native collection id
     */
    get isV602(): boolean {
        return this.getTypeHash() === '03ac0b80fdf641bd511733299fc9539a6f79a9c134c3b7d7af44cad8d25fa71a'
    }

    /**
     *  Map of ethereum collection id to the native collection id
     */
    get asV602(): MultiTokensNativeCollectionIdsStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Map of ethereum collection id to the native collection id
 */
export interface MultiTokensNativeCollectionIdsStorageV602 {
    get(key: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Sequencer for collectionID generators.
     */
    get asMatrixV603(): MultiTokensNextCollectionIdStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Sequencer for collectionID generators.
 */
export interface MultiTokensNextCollectionIdStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '022fd18d40c53146908df260f1461b3e2a5e157129bb9cf34fd0207c0910c0a9'
    }

    /**
     *  Accounts per token
     */
    get asMatrixV603(): MultiTokensTokenAccountsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Accounts per token
 */
export interface MultiTokensTokenAccountsStorageMatrixV603 {
    get(key1: bigint, key2: bigint, key3: Uint8Array): Promise<(matrixV603.TokenAccount | undefined)>
    getAll(): Promise<matrixV603.TokenAccount[]>
    getMany(keys: [bigint, bigint, Uint8Array][]): Promise<(matrixV603.TokenAccount | undefined)[]>
    getKeys(): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, bigint, Uint8Array], v: matrixV603.TokenAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: matrixV603.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: matrixV603.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[k: [bigint, bigint, Uint8Array], v: matrixV603.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixV603.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixV603.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixV603.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixV603.TokenAccount][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '459387852b7c4d57e0769b6472defe27e00a6384a006f2d282c25b921828e149'
    }

    /**
     *  Tokens storage
     */
    get asMatrixV603(): MultiTokensTokensStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface MultiTokensTokensStorageMatrixV603 {
    get(key1: bigint, key2: bigint): Promise<(matrixV603.Token | undefined)>
    getAll(): Promise<matrixV603.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(matrixV603.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: matrixV603.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: matrixV603.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: matrixV603.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: matrixV603.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixV603.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixV603.Token][]>
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

export class MultiTokensUnmintableTokenIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'UnmintableTokenIds'
    }

    /**
<<<<<<< HEAD
     *  These token ids can only be minted by calling `claim_token`
     */
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '0d4d9ebe1fd4a49e1a98cae9e4f2da1f4465c6dbdbc2902d364eefd30c55ef87'
    }

    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    get asMatrixV603(): MultiTokensUnmintableTokenIdsStorageMatrixV603 {
        assert(this.isMatrixV603)
=======
     *  These token ids cannot be minted
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'd425451c3caec1f07a7ef5323427ee76c7b59839ca20d8c8ab5f0315d974b61c'
    }

    /**
     *  These token ids cannot be minted
     */
    get asV602(): MultiTokensUnmintableTokenIdsStorageV602 {
        assert(this.isV602)
>>>>>>> 7bcb92f (add events)
        return this as any
    }
}

/**
<<<<<<< HEAD
 *  These token ids can only be minted by calling `claim_token`
 */
export interface MultiTokensUnmintableTokenIdsStorageMatrixV603 {
    get(key: bigint): Promise<(matrixV603.RangeInclusive | undefined)>
    getAll(): Promise<matrixV603.RangeInclusive[]>
    getMany(keys: bigint[]): Promise<(matrixV603.RangeInclusive | undefined)[]>
=======
 *  These token ids cannot be minted
 */
export interface MultiTokensUnmintableTokenIdsStorageV602 {
    get(key: bigint): Promise<v602.RangeInclusive>
    getAll(): Promise<v602.RangeInclusive[]>
    getMany(keys: bigint[]): Promise<v602.RangeInclusive[]>
>>>>>>> 7bcb92f (add events)
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
<<<<<<< HEAD
    getPairs(): Promise<[k: bigint, v: matrixV603.RangeInclusive][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixV603.RangeInclusive][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixV603.RangeInclusive][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixV603.RangeInclusive][]>
=======
    getPairs(): Promise<[k: bigint, v: v602.RangeInclusive][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v602.RangeInclusive][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v602.RangeInclusive][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v602.RangeInclusive][]>
>>>>>>> 7bcb92f (add events)
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asMatrixV603(): MultisigMultisigsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageMatrixV603 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(matrixV603.Multisig | undefined)>
    getAll(): Promise<matrixV603.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(matrixV603.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: matrixV603.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixV603.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixV603.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixV603.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixV603.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixV603.Multisig][]>
}

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asMatrixV603(): ParachainInfoParachainIdStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asMatrixV603(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '901f6f87c9fafe3d3f61c36b45b24a63a90d51ae151f2b4a361d3c5611ffb723'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asMatrixV603(): ParachainSystemAuthorizedUpgradeStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV500(): ParachainSystemAuthorizedUpgradeStorageV500 {
        assert(this.isV500)
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
export interface ParachainSystemAuthorizedUpgradeStorageMatrixV603 {
    get(): Promise<(matrixV603.CodeUpgradeAuthorization | undefined)>
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV500 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asMatrixV603(): ParachainSystemCustomValidationHeadDataStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asMatrixV603(): ParachainSystemDidSetValidationCodeStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
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
    get asMatrixV603(): ParachainSystemHostConfigurationStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface ParachainSystemHostConfigurationStorageMatrixV603 {
    get(): Promise<(matrixV603.V4AbridgedHostConfiguration | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixV603(): ParachainSystemHrmpOutboundMessagesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageMatrixV603 {
    get(): Promise<matrixV603.OutboundHrmpMessage[]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixV603(): ParachainSystemHrmpWatermarkStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asMatrixV603(): ParachainSystemLastDmqMqcHeadStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asMatrixV603(): ParachainSystemLastHrmpMqcHeadsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get asMatrixV603(): ParachainSystemLastRelayChainBlockNumberStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface ParachainSystemLastRelayChainBlockNumberStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asMatrixV603(): ParachainSystemNewValidationCodeStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface ParachainSystemNewValidationCodeStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asMatrixV603(): ParachainSystemPendingUpwardMessagesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
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
    get asMatrixV603(): ParachainSystemPendingValidationCodeStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface ParachainSystemPendingValidationCodeStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixV603(): ParachainSystemProcessedDownwardMessagesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
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
    get asMatrixV603(): ParachainSystemRelayStateProofStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface ParachainSystemRelayStateProofStorageMatrixV603 {
    get(): Promise<(matrixV603.StorageProof | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '2e08e09c21eea176bfd53411112b867efc3c3d71f51431e11288adfb3e3ede6f'
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
    get asMatrixV603(): ParachainSystemRelevantMessagingStateStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
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

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV602(): boolean {
        return this.getTypeHash() === '2e08e09c21eea176bfd53411112b867efc3c3d71f51431e11288adfb3e3ede6f'
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
    get asV602(): ParachainSystemRelevantMessagingStateStorageV602 {
        assert(this.isV602)
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
export interface ParachainSystemRelevantMessagingStateStorageMatrixV603 {
    get(): Promise<(matrixV603.MessagingStateSnapshot | undefined)>
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

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV602 {
    get(): Promise<(v602.MessagingStateSnapshot | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asMatrixV603(): ParachainSystemReservedDmpWeightOverrideStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageMatrixV603 {
    get(): Promise<(matrixV603.Weight | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asMatrixV603(): ParachainSystemReservedXcmpWeightOverrideStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageMatrixV603 {
    get(): Promise<(matrixV603.Weight | undefined)>
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
    get isMatrixV603(): boolean {
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
    get asMatrixV603(): ParachainSystemUpgradeRestrictionSignalStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface ParachainSystemUpgradeRestrictionSignalStorageMatrixV603 {
    get(): Promise<(matrixV603.V4UpgradeRestriction | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixV603(): ParachainSystemUpwardMessagesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get asMatrixV603(): ParachainSystemValidationDataStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 *  This value is expected to be set only once per block and it's never stored
 *  in the trie.
 */
export interface ParachainSystemValidationDataStorageMatrixV603 {
    get(): Promise<(matrixV603.V4PersistedValidationData | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asMatrixV603(): PolkadotXcmAssetTrapsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asMatrixV603(): PolkadotXcmCurrentMigrationStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageMatrixV603 {
    get(): Promise<(matrixV603.VersionMigrationStage | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asMatrixV603(): PolkadotXcmLockedFungiblesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface PolkadotXcmLockedFungiblesStorageMatrixV603 {
    get(key: Uint8Array): Promise<([bigint, matrixV603.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, matrixV603.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, matrixV603.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, matrixV603.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, matrixV603.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, matrixV603.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, matrixV603.VersionedMultiLocation][]][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asMatrixV603(): PolkadotXcmQueriesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageMatrixV603 {
    get(key: bigint): Promise<(matrixV603.QueryStatus | undefined)>
    getAll(): Promise<matrixV603.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(matrixV603.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: matrixV603.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixV603.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixV603.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixV603.QueryStatus][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asMatrixV603(): PolkadotXcmQueryCounterStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1149837e63a49b75805a12d31afe81a1d8d4392ee13be03404f08d002d1c9928'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asMatrixV603(): PolkadotXcmRemoteLockedFungiblesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
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

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV602(): boolean {
        return this.getTypeHash() === '1149837e63a49b75805a12d31afe81a1d8d4392ee13be03404f08d002d1c9928'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV602(): PolkadotXcmRemoteLockedFungiblesStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageMatrixV603 {
    get(key1: number, key2: Uint8Array, key3: matrixV603.VersionedAssetId): Promise<(matrixV603.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<matrixV603.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, matrixV603.VersionedAssetId][]): Promise<(matrixV603.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, matrixV603.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, matrixV603.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, matrixV603.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: matrixV603.VersionedAssetId): Promise<[number, Uint8Array, matrixV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, matrixV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, matrixV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, matrixV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: matrixV603.VersionedAssetId): AsyncIterable<[number, Uint8Array, matrixV603.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, matrixV603.VersionedAssetId], v: matrixV603.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, matrixV603.VersionedAssetId], v: matrixV603.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, matrixV603.VersionedAssetId], v: matrixV603.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: matrixV603.VersionedAssetId): Promise<[k: [number, Uint8Array, matrixV603.VersionedAssetId], v: matrixV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, matrixV603.VersionedAssetId], v: matrixV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, matrixV603.VersionedAssetId], v: matrixV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, matrixV603.VersionedAssetId], v: matrixV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: matrixV603.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, matrixV603.VersionedAssetId], v: matrixV603.RemoteLockedFungibleRecord][]>
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

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageV602 {
    get(key1: number, key2: Uint8Array, key3: v602.VersionedAssetId): Promise<(v602.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v602.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v602.VersionedAssetId][]): Promise<(v602.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v602.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v602.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v602.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v602.VersionedAssetId): Promise<[number, Uint8Array, v602.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v602.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v602.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v602.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v602.VersionedAssetId): AsyncIterable<[number, Uint8Array, v602.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v602.VersionedAssetId], v: v602.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v602.VersionedAssetId], v: v602.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v602.VersionedAssetId], v: v602.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v602.VersionedAssetId): Promise<[k: [number, Uint8Array, v602.VersionedAssetId], v: v602.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v602.VersionedAssetId], v: v602.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v602.VersionedAssetId], v: v602.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v602.VersionedAssetId], v: v602.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v602.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v602.VersionedAssetId], v: v602.RemoteLockedFungibleRecord][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asMatrixV603(): PolkadotXcmSafeXcmVersionStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asMatrixV603(): PolkadotXcmSupportedVersionStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageMatrixV603 {
    get(key1: number, key2: matrixV603.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, matrixV603.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, matrixV603.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, matrixV603.VersionedMultiLocation][]>
    getKeys(key1: number, key2: matrixV603.VersionedMultiLocation): Promise<[number, matrixV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, matrixV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, matrixV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: matrixV603.VersionedMultiLocation): AsyncIterable<[number, matrixV603.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, matrixV603.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, matrixV603.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: matrixV603.VersionedMultiLocation): Promise<[k: [number, matrixV603.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, matrixV603.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, matrixV603.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: matrixV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixV603.VersionedMultiLocation], v: number][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asMatrixV603(): PolkadotXcmVersionDiscoveryQueueStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageMatrixV603 {
    get(): Promise<[matrixV603.VersionedMultiLocation, number][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asMatrixV603(): PolkadotXcmVersionNotifiersStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageMatrixV603 {
    get(key1: number, key2: matrixV603.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, matrixV603.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, matrixV603.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, matrixV603.VersionedMultiLocation][]>
    getKeys(key1: number, key2: matrixV603.VersionedMultiLocation): Promise<[number, matrixV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, matrixV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, matrixV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: matrixV603.VersionedMultiLocation): AsyncIterable<[number, matrixV603.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, matrixV603.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, matrixV603.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: matrixV603.VersionedMultiLocation): Promise<[k: [number, matrixV603.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, matrixV603.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, matrixV603.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: matrixV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixV603.VersionedMultiLocation], v: bigint][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asMatrixV603(): PolkadotXcmVersionNotifyTargetsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageMatrixV603 {
    get(key1: number, key2: matrixV603.VersionedMultiLocation): Promise<([bigint, matrixV603.Weight, number] | undefined)>
    getAll(): Promise<[bigint, matrixV603.Weight, number][]>
    getMany(keys: [number, matrixV603.VersionedMultiLocation][]): Promise<([bigint, matrixV603.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, matrixV603.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, matrixV603.VersionedMultiLocation][]>
    getKeys(key1: number, key2: matrixV603.VersionedMultiLocation): Promise<[number, matrixV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, matrixV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, matrixV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: matrixV603.VersionedMultiLocation): AsyncIterable<[number, matrixV603.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, matrixV603.VersionedMultiLocation], v: [bigint, matrixV603.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, matrixV603.VersionedMultiLocation], v: [bigint, matrixV603.Weight, number]][]>
    getPairs(key1: number, key2: matrixV603.VersionedMultiLocation): Promise<[k: [number, matrixV603.VersionedMultiLocation], v: [bigint, matrixV603.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, matrixV603.VersionedMultiLocation], v: [bigint, matrixV603.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, matrixV603.VersionedMultiLocation], v: [bigint, matrixV603.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: matrixV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixV603.VersionedMultiLocation], v: [bigint, matrixV603.Weight, number]][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get asMatrixV603(): PolkadotXcmXcmExecutionSuspendedStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface PolkadotXcmXcmExecutionSuspendedStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'c34074cd3c393bbbf499a52d01b17aab7f4b9ef8d114a6f1153dba4c76f48632'
    }

    /**
     *  Information about the pools
     */
    get asMatrixV603(): PoolsPoolsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Information about the pools
 */
export interface PoolsPoolsStorageMatrixV603 {
    get(): Promise<[Uint8Array, matrixV603.Pool][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isMatrixV603(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asMatrixV603(): PreimagePreimageForStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

export interface PreimagePreimageForStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asMatrixV603(): PreimageStatusForStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.RequestStatus | undefined)>
    getAll(): Promise<matrixV603.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.RequestStatus][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '6fe031a319b530f979b7d99af729c9762ca4fc70785d6631d8088992a71ae701'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asMatrixV603(): SchedulerAgendaStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageMatrixV603 {
    get(key: number): Promise<(matrixV603.Scheduled | undefined)[]>
    getAll(): Promise<(matrixV603.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(matrixV603.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (matrixV603.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (matrixV603.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (matrixV603.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (matrixV603.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asMatrixV603(): SchedulerIncompleteSinceStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asMatrixV603(): SchedulerLookupStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asMatrixV603(): SessionCurrentIndexStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asMatrixV603(): SessionDisabledValidatorsStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface SessionDisabledValidatorsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asMatrixV603(): SessionKeyOwnerStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '2f670cd584e15d58095cb717f2ec5413369ec61a1d09b68212a36ac0523e456b'
    }

    /**
     *  The next session keys for a validator.
     */
    get asMatrixV603(): SessionNextKeysStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.SessionKeys | undefined)>
    getAll(): Promise<matrixV603.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.SessionKeys][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asMatrixV603(): SessionQueuedChangedStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '932bfec933e0f3e31ccbf8c6fe92f26e726dddd47f6a44fd88e96d56054aa98a'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asMatrixV603(): SessionQueuedKeysStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageMatrixV603 {
    get(): Promise<[Uint8Array, matrixV603.SessionKeys][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asMatrixV603(): SessionValidatorsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asMatrixV603(): SystemAccountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV500(): SystemAccountStorageV500 {
        assert(this.isV500)
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
export interface SystemAccountStorageMatrixV603 {
    get(key: Uint8Array): Promise<matrixV603.AccountInfo>
    getAll(): Promise<matrixV603.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<matrixV603.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV500 {
    get(key: Uint8Array): Promise<v500.AccountInfo>
    getAll(): Promise<v500.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v500.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.AccountInfo][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asMatrixV603(): SystemAllExtrinsicsLenStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asMatrixV603(): SystemBlockHashStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asMatrixV603(): SystemBlockWeightStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageMatrixV603 {
    get(): Promise<matrixV603.PerDispatchClass>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asMatrixV603(): SystemDigestStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageMatrixV603 {
    get(): Promise<matrixV603.Digest>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asMatrixV603(): SystemEventCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
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
    get asMatrixV603(): SystemEventTopicsStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface SystemEventTopicsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a57dd21e7aeaa4b8e9f0e55f1f48c7e44e142ba9a66bb9c49a3cdf88a9cc9c46'
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
    get asMatrixV603(): SystemEventsStorageMatrixV603 {
        assert(this.isMatrixV603)
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
        return this.getTypeHash() === '6790f0a756fabae6834af1181cbe018e42a97c6a43e3d2591686412a746f9b2c'
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
export interface SystemEventsStorageMatrixV603 {
    get(): Promise<matrixV603.EventRecord[]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asMatrixV603(): SystemExecutionPhaseStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageMatrixV603 {
    get(): Promise<(matrixV603.Phase | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asMatrixV603(): SystemExtrinsicCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asMatrixV603(): SystemExtrinsicDataStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asMatrixV603(): SystemLastRuntimeUpgradeStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageMatrixV603 {
    get(): Promise<(matrixV603.LastRuntimeUpgradeInfo | undefined)>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asMatrixV603(): SystemNumberStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asMatrixV603(): SystemParentHashStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asMatrixV603(): SystemUpgradedToTripleRefCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asMatrixV603(): SystemUpgradedToU32RefCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asMatrixV603(): TechnicalCommitteeMembersStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asMatrixV603(): TechnicalCommitteePrimeStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asMatrixV603(): TechnicalCommitteeProposalCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixV603(): TechnicalCommitteeProposalOfStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
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
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
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
export interface TechnicalCommitteeProposalOfStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.Call | undefined)>
    getAll(): Promise<matrixV603.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.Call][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asMatrixV603(): TechnicalCommitteeProposalsStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asMatrixV603(): TechnicalCommitteeVotingStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageMatrixV603 {
    get(key: Uint8Array): Promise<(matrixV603.Votes | undefined)>
    getAll(): Promise<matrixV603.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(matrixV603.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixV603.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixV603.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixV603.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixV603.Votes][]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asMatrixV603(): TechnicalMembershipMembersStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asMatrixV603(): TechnicalMembershipPrimeStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asMatrixV603(): TimestampDidUpdateStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asMatrixV603(): TimestampNowStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageMatrixV603 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asMatrixV603(): TransactionPaymentNextFeeMultiplierStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageMatrixV603 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isMatrixV603(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asMatrixV603(): TransactionPaymentStorageVersionStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageMatrixV603 {
    get(): Promise<matrixV603.Releases>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asMatrixV603(): XcmpQueueCounterForOverweightStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface XcmpQueueCounterForOverweightStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asMatrixV603(): XcmpQueueInboundXcmpMessagesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asMatrixV603(): XcmpQueueInboundXcmpStatusStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageMatrixV603 {
    get(): Promise<matrixV603.InboundChannelDetails[]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asMatrixV603(): XcmpQueueOutboundXcmpMessagesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
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
    get asMatrixV603(): XcmpQueueOutboundXcmpStatusStorageMatrixV603 {
        assert(this.isMatrixV603)
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
export interface XcmpQueueOutboundXcmpStatusStorageMatrixV603 {
    get(): Promise<matrixV603.OutboundChannelDetails[]>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asMatrixV603(): XcmpQueueOverweightStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asMatrixV603(): XcmpQueueOverweightCountStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '2a88389b0d97d3253b6e1cdc0a2e938907eda23917d9d2a7dcb76b96b945d7c1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asMatrixV603(): XcmpQueueQueueConfigStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageMatrixV603 {
    get(): Promise<matrixV603.QueueConfigData>
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asMatrixV603(): XcmpQueueQueueSuspendedStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageMatrixV603 {
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
    get isMatrixV603(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asMatrixV603(): XcmpQueueSignalMessagesStorageMatrixV603 {
        assert(this.isMatrixV603)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageMatrixV603 {
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
