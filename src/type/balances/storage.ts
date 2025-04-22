import { sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx } from '../support'
import * as v100 from '../v100'
import * as enjinV100 from '../enjinV100'
import * as v104 from '../v104'
import * as matrixV500 from '../matrixV500'
import * as matrixV602 from '../matrixV602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixV1010 from '../matrixV1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'
import * as matrixV1020 from '../matrixV1020'
import * as matrixEnjinV1022 from '../matrixEnjinV1022'
import * as v1030 from '../v1030'
import * as enjinV1032 from '../enjinV1032'
import * as enjinV1050 from '../enjinV1050'
import * as v1050 from '../v1050'

export const totalIssuance = {
    /**
     *  The total units issued in the system.
     */
    matrixEnjinV603: new StorageType(
        'Balances.TotalIssuance',
        'Default',
        [],
        sts.bigint()
    ) as TotalIssuanceMatrixEnjinV603,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const inactiveIssuance = {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    matrixEnjinV603: new StorageType(
        'Balances.InactiveIssuance',
        'Default',
        [],
        sts.bigint()
    ) as InactiveIssuanceMatrixEnjinV603,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<bigint | undefined>
}

export const account = {
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
    matrixEnjinV603: new StorageType(
        'Balances.Account',
        'Default',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.AccountData
    ) as AccountMatrixEnjinV603,
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
    matrixV500: new StorageType(
        'Balances.Account',
        'Default',
        [matrixV500.AccountId32],
        matrixV500.AccountData
    ) as AccountMatrixV500,
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
    matrixV602: new StorageType(
        'Balances.Account',
        'Default',
        [matrixV602.AccountId32],
        matrixV602.AccountData
    ) as AccountMatrixV602,
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
    v100: new StorageType('Balances.Account', 'Default', [v100.AccountId32], v100.AccountData) as AccountV100,
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
    v104: new StorageType('Balances.Account', 'Default', [v104.AccountId32], v104.AccountData) as AccountV104,
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
export interface AccountMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.AccountData
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountData | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.AccountData | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.AccountData | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.AccountData | undefined][]>
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
export interface AccountMatrixV500 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV500.AccountData
    get(block: Block, key: matrixV500.AccountId32): Promise<matrixV500.AccountData | undefined>
    getMany(block: Block, keys: matrixV500.AccountId32[]): Promise<(matrixV500.AccountData | undefined)[]>
    getKeys(block: Block): Promise<matrixV500.AccountId32[]>
    getKeys(block: Block, key: matrixV500.AccountId32): Promise<matrixV500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV500.AccountId32): AsyncIterable<matrixV500.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV500.AccountId32, v: matrixV500.AccountData | undefined][]>
    getPairs(
        block: Block,
        key: matrixV500.AccountId32
    ): Promise<[k: matrixV500.AccountId32, v: matrixV500.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV500.AccountId32, v: matrixV500.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV500.AccountId32
    ): AsyncIterable<[k: matrixV500.AccountId32, v: matrixV500.AccountData | undefined][]>
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
export interface AccountMatrixV602 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV602.AccountData
    get(block: Block, key: matrixV602.AccountId32): Promise<matrixV602.AccountData | undefined>
    getMany(block: Block, keys: matrixV602.AccountId32[]): Promise<(matrixV602.AccountData | undefined)[]>
    getKeys(block: Block): Promise<matrixV602.AccountId32[]>
    getKeys(block: Block, key: matrixV602.AccountId32): Promise<matrixV602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV602.AccountId32): AsyncIterable<matrixV602.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV602.AccountId32, v: matrixV602.AccountData | undefined][]>
    getPairs(
        block: Block,
        key: matrixV602.AccountId32
    ): Promise<[k: matrixV602.AccountId32, v: matrixV602.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV602.AccountId32, v: matrixV602.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV602.AccountId32
    ): AsyncIterable<[k: matrixV602.AccountId32, v: matrixV602.AccountData | undefined][]>
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
export interface AccountV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v100.AccountData
    get(block: Block, key: v100.AccountId32): Promise<v100.AccountData | undefined>
    getMany(block: Block, keys: v100.AccountId32[]): Promise<(v100.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v100.AccountId32[]>
    getKeys(block: Block, key: v100.AccountId32): Promise<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v100.AccountId32): AsyncIterable<v100.AccountId32[]>
    getPairs(block: Block): Promise<[k: v100.AccountId32, v: v100.AccountData | undefined][]>
    getPairs(block: Block, key: v100.AccountId32): Promise<[k: v100.AccountId32, v: v100.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v100.AccountId32, v: v100.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v100.AccountId32
    ): AsyncIterable<[k: v100.AccountId32, v: v100.AccountData | undefined][]>
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
export interface AccountV104 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v104.AccountData
    get(block: Block, key: v104.AccountId32): Promise<v104.AccountData | undefined>
    getMany(block: Block, keys: v104.AccountId32[]): Promise<(v104.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v104.AccountId32[]>
    getKeys(block: Block, key: v104.AccountId32): Promise<v104.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v104.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v104.AccountId32): AsyncIterable<v104.AccountId32[]>
    getPairs(block: Block): Promise<[k: v104.AccountId32, v: v104.AccountData | undefined][]>
    getPairs(block: Block, key: v104.AccountId32): Promise<[k: v104.AccountId32, v: v104.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v104.AccountId32, v: v104.AccountData | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v104.AccountId32
    ): AsyncIterable<[k: v104.AccountId32, v: v104.AccountData | undefined][]>
}

export const locks = {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    matrixEnjinV603: new StorageType(
        'Balances.Locks',
        'Default',
        [matrixEnjinV603.AccountId32],
        sts.array(() => matrixEnjinV603.BalanceLock)
    ) as LocksMatrixEnjinV603,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.BalanceLock[]
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.BalanceLock[] | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.BalanceLock[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.BalanceLock[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.BalanceLock[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.BalanceLock[] | undefined][]>
}

export const reserves = {
    /**
     *  Named reserves on some account balances.
     */
    matrixEnjinV603: new StorageType(
        'Balances.Reserves',
        'Default',
        [matrixEnjinV603.AccountId32],
        sts.array(() => matrixEnjinV603.ReserveData)
    ) as ReservesMatrixEnjinV603,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.ReserveData[]
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.ReserveData[] | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.ReserveData[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.ReserveData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.ReserveData[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.ReserveData[] | undefined][]>
}

export const holds = {
    /**
     *  Holds on account balances.
     */
    matrixEnjinV603: new StorageType(
        'Balances.Holds',
        'Default',
        [matrixEnjinV603.AccountId32],
        sts.array(() => matrixEnjinV603.IdAmount)
    ) as HoldsMatrixEnjinV603,
    /**
     *  Holds on account balances.
     */
    matrixEnjinV1012: new StorageType(
        'Balances.Holds',
        'Default',
        [matrixEnjinV1012.AccountId32],
        sts.array(() => matrixEnjinV1012.IdAmount)
    ) as HoldsMatrixEnjinV1012,
    /**
     *  Holds on account balances.
     */
    matrixEnjinV1022: new StorageType(
        'Balances.Holds',
        'Default',
        [matrixEnjinV1022.AccountId32],
        sts.array(() => matrixEnjinV1022.IdAmount)
    ) as HoldsMatrixEnjinV1022,
    /**
     *  Holds on account balances.
     */
    matrixV602: new StorageType(
        'Balances.Holds',
        'Default',
        [matrixV602.AccountId32],
        sts.array(() => matrixV602.IdAmount)
    ) as HoldsMatrixV602,
    /**
     *  Holds on account balances.
     */
    matrixV1010: new StorageType(
        'Balances.Holds',
        'Default',
        [matrixV1010.AccountId32],
        sts.array(() => matrixV1010.IdAmount)
    ) as HoldsMatrixV1010,
    /**
     *  Holds on account balances.
     */
    matrixV1020: new StorageType(
        'Balances.Holds',
        'Default',
        [matrixV1020.AccountId32],
        sts.array(() => matrixV1020.IdAmount)
    ) as HoldsMatrixV1020,
    /**
     *  Holds on account balances.
     */
    enjinV100: new StorageType(
        'Balances.Holds',
        'Default',
        [enjinV100.AccountId32],
        sts.array(() => enjinV100.IdAmount)
    ) as HoldsEnjinV100,
    /**
     *  Holds on account balances.
     */
    enjinV1032: new StorageType(
        'Balances.Holds',
        'Default',
        [enjinV1032.AccountId32],
        sts.array(() => enjinV1032.IdAmount)
    ) as HoldsEnjinV1032,
    /**
     *  Holds on account balances.
     */
    enjinV1050: new StorageType(
        'Balances.Holds',
        'Default',
        [enjinV1050.AccountId32],
        sts.array(() => enjinV1050.IdAmount)
    ) as HoldsEnjinV1050,
    /**
     *  Holds on account balances.
     */
    v104: new StorageType(
        'Balances.Holds',
        'Default',
        [v104.AccountId32],
        sts.array(() => v104.IdAmount)
    ) as HoldsV104,
    /**
     *  Holds on account balances.
     */
    v1030: new StorageType(
        'Balances.Holds',
        'Default',
        [v1030.AccountId32],
        sts.array(() => v1030.IdAmount)
    ) as HoldsV1030,
    /**
     *  Holds on account balances.
     */
    v1050: new StorageType(
        'Balances.Holds',
        'Default',
        [v1050.AccountId32],
        sts.array(() => v1050.IdAmount)
    ) as HoldsV1050,
}

/**
 *  Holds on account balances.
 */
export interface HoldsMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.IdAmount[]
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.IdAmount[] | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsMatrixEnjinV1012 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1012.IdAmount[]
    get(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.IdAmount[] | undefined>
    getMany(block: Block, keys: matrixEnjinV1012.AccountId32[]): Promise<(matrixEnjinV1012.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1012.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1012.AccountId32): Promise<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<matrixEnjinV1012.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): Promise<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1012.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1012.AccountId32, v: matrixEnjinV1012.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsMatrixEnjinV1022 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1022.IdAmount[]
    get(block: Block, key: matrixEnjinV1022.AccountId32): Promise<matrixEnjinV1022.IdAmount[] | undefined>
    getMany(block: Block, keys: matrixEnjinV1022.AccountId32[]): Promise<(matrixEnjinV1022.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1022.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1022.AccountId32): Promise<matrixEnjinV1022.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1022.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1022.AccountId32
    ): AsyncIterable<matrixEnjinV1022.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1022.AccountId32, v: matrixEnjinV1022.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV1022.AccountId32
    ): Promise<[k: matrixEnjinV1022.AccountId32, v: matrixEnjinV1022.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV1022.AccountId32, v: matrixEnjinV1022.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV1022.AccountId32
    ): AsyncIterable<[k: matrixEnjinV1022.AccountId32, v: matrixEnjinV1022.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsMatrixV602 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV602.IdAmount[]
    get(block: Block, key: matrixV602.AccountId32): Promise<matrixV602.IdAmount[] | undefined>
    getMany(block: Block, keys: matrixV602.AccountId32[]): Promise<(matrixV602.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<matrixV602.AccountId32[]>
    getKeys(block: Block, key: matrixV602.AccountId32): Promise<matrixV602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV602.AccountId32): AsyncIterable<matrixV602.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV602.AccountId32, v: matrixV602.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixV602.AccountId32
    ): Promise<[k: matrixV602.AccountId32, v: matrixV602.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV602.AccountId32, v: matrixV602.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV602.AccountId32
    ): AsyncIterable<[k: matrixV602.AccountId32, v: matrixV602.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsMatrixV1010 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1010.IdAmount[]
    get(block: Block, key: matrixV1010.AccountId32): Promise<matrixV1010.IdAmount[] | undefined>
    getMany(block: Block, keys: matrixV1010.AccountId32[]): Promise<(matrixV1010.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<matrixV1010.AccountId32[]>
    getKeys(block: Block, key: matrixV1010.AccountId32): Promise<matrixV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1010.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1010.AccountId32): AsyncIterable<matrixV1010.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1010.AccountId32, v: matrixV1010.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1010.AccountId32
    ): Promise<[k: matrixV1010.AccountId32, v: matrixV1010.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1010.AccountId32, v: matrixV1010.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1010.AccountId32
    ): AsyncIterable<[k: matrixV1010.AccountId32, v: matrixV1010.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsMatrixV1020 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixV1020.IdAmount[]
    get(block: Block, key: matrixV1020.AccountId32): Promise<matrixV1020.IdAmount[] | undefined>
    getMany(block: Block, keys: matrixV1020.AccountId32[]): Promise<(matrixV1020.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<matrixV1020.AccountId32[]>
    getKeys(block: Block, key: matrixV1020.AccountId32): Promise<matrixV1020.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixV1020.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixV1020.AccountId32): AsyncIterable<matrixV1020.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixV1020.AccountId32, v: matrixV1020.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixV1020.AccountId32
    ): Promise<[k: matrixV1020.AccountId32, v: matrixV1020.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixV1020.AccountId32, v: matrixV1020.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixV1020.AccountId32
    ): AsyncIterable<[k: matrixV1020.AccountId32, v: matrixV1020.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsEnjinV100 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV100.IdAmount[]
    get(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.IdAmount[] | undefined>
    getMany(block: Block, keys: enjinV100.AccountId32[]): Promise<(enjinV100.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV100.AccountId32[]>
    getKeys(block: Block, key: enjinV100.AccountId32): Promise<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV100.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV100.AccountId32): AsyncIterable<enjinV100.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV100.AccountId32, v: enjinV100.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV100.AccountId32
    ): Promise<[k: enjinV100.AccountId32, v: enjinV100.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV100.AccountId32
    ): AsyncIterable<[k: enjinV100.AccountId32, v: enjinV100.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsEnjinV1032 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1032.IdAmount[]
    get(block: Block, key: enjinV1032.AccountId32): Promise<enjinV1032.IdAmount[] | undefined>
    getMany(block: Block, keys: enjinV1032.AccountId32[]): Promise<(enjinV1032.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV1032.AccountId32[]>
    getKeys(block: Block, key: enjinV1032.AccountId32): Promise<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1032.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1032.AccountId32): AsyncIterable<enjinV1032.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV1032.AccountId32, v: enjinV1032.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1032.AccountId32
    ): Promise<[k: enjinV1032.AccountId32, v: enjinV1032.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1032.AccountId32, v: enjinV1032.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1032.AccountId32
    ): AsyncIterable<[k: enjinV1032.AccountId32, v: enjinV1032.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsEnjinV1050 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): enjinV1050.IdAmount[]
    get(block: Block, key: enjinV1050.AccountId32): Promise<enjinV1050.IdAmount[] | undefined>
    getMany(block: Block, keys: enjinV1050.AccountId32[]): Promise<(enjinV1050.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<enjinV1050.AccountId32[]>
    getKeys(block: Block, key: enjinV1050.AccountId32): Promise<enjinV1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<enjinV1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: enjinV1050.AccountId32): AsyncIterable<enjinV1050.AccountId32[]>
    getPairs(block: Block): Promise<[k: enjinV1050.AccountId32, v: enjinV1050.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: enjinV1050.AccountId32
    ): Promise<[k: enjinV1050.AccountId32, v: enjinV1050.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: enjinV1050.AccountId32, v: enjinV1050.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: enjinV1050.AccountId32
    ): AsyncIterable<[k: enjinV1050.AccountId32, v: enjinV1050.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsV104 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v104.IdAmount[]
    get(block: Block, key: v104.AccountId32): Promise<v104.IdAmount[] | undefined>
    getMany(block: Block, keys: v104.AccountId32[]): Promise<(v104.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v104.AccountId32[]>
    getKeys(block: Block, key: v104.AccountId32): Promise<v104.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v104.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v104.AccountId32): AsyncIterable<v104.AccountId32[]>
    getPairs(block: Block): Promise<[k: v104.AccountId32, v: v104.IdAmount[] | undefined][]>
    getPairs(block: Block, key: v104.AccountId32): Promise<[k: v104.AccountId32, v: v104.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v104.AccountId32, v: v104.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v104.AccountId32
    ): AsyncIterable<[k: v104.AccountId32, v: v104.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsV1030 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1030.IdAmount[]
    get(block: Block, key: v1030.AccountId32): Promise<v1030.IdAmount[] | undefined>
    getMany(block: Block, keys: v1030.AccountId32[]): Promise<(v1030.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v1030.AccountId32[]>
    getKeys(block: Block, key: v1030.AccountId32): Promise<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1030.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1030.AccountId32): AsyncIterable<v1030.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1030.AccountId32, v: v1030.IdAmount[] | undefined][]>
    getPairs(block: Block, key: v1030.AccountId32): Promise<[k: v1030.AccountId32, v: v1030.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1030.AccountId32, v: v1030.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1030.AccountId32
    ): AsyncIterable<[k: v1030.AccountId32, v: v1030.IdAmount[] | undefined][]>
}

/**
 *  Holds on account balances.
 */
export interface HoldsV1050 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1050.IdAmount[]
    get(block: Block, key: v1050.AccountId32): Promise<v1050.IdAmount[] | undefined>
    getMany(block: Block, keys: v1050.AccountId32[]): Promise<(v1050.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<v1050.AccountId32[]>
    getKeys(block: Block, key: v1050.AccountId32): Promise<v1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1050.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v1050.AccountId32): AsyncIterable<v1050.AccountId32[]>
    getPairs(block: Block): Promise<[k: v1050.AccountId32, v: v1050.IdAmount[] | undefined][]>
    getPairs(block: Block, key: v1050.AccountId32): Promise<[k: v1050.AccountId32, v: v1050.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: v1050.AccountId32, v: v1050.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: v1050.AccountId32
    ): AsyncIterable<[k: v1050.AccountId32, v: v1050.IdAmount[] | undefined][]>
}

export const freezes = {
    /**
     *  Freeze locks on account balances.
     */
    matrixEnjinV603: new StorageType(
        'Balances.Freezes',
        'Default',
        [matrixEnjinV603.AccountId32],
        sts.array(() => matrixEnjinV603.IdAmount)
    ) as FreezesMatrixEnjinV603,
}

/**
 *  Freeze locks on account balances.
 */
export interface FreezesMatrixEnjinV603 {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.IdAmount[]
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.IdAmount[] | undefined>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.IdAmount[] | undefined][]>
    getPairs(
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): Promise<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.IdAmount[] | undefined][]>
    getPairsPaged(
        pageSize: number,
        block: Block,
        key: matrixEnjinV603.AccountId32
    ): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: matrixEnjinV603.IdAmount[] | undefined][]>
}
