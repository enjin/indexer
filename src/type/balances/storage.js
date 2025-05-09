'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.freezes =
    exports.holds =
    exports.reserves =
    exports.locks =
    exports.account =
    exports.inactiveIssuance =
    exports.totalIssuance =
        void 0
var support_1 = require('../support')
var v100 = require('../v100')
var enjinV100 = require('../enjinV100')
var v104 = require('../v104')
var matrixV500 = require('../matrixV500')
var matrixV602 = require('../matrixV602')
var matrixEnjinV603 = require('../matrixEnjinV603')
var matrixV1010 = require('../matrixV1010')
var matrixEnjinV1012 = require('../matrixEnjinV1012')
var matrixV1020 = require('../matrixV1020')
var matrixEnjinV1022 = require('../matrixEnjinV1022')
var v1030 = require('../v1030')
var enjinV1032 = require('../enjinV1032')
var enjinV1050 = require('../enjinV1050')
var v1050 = require('../v1050')
exports.totalIssuance = {
    /**
     *  The total units issued in the system.
     */
    matrixEnjinV603: new support_1.StorageType('Balances.TotalIssuance', 'Default', [], support_1.sts.bigint()),
}
exports.inactiveIssuance = {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    matrixEnjinV603: new support_1.StorageType('Balances.InactiveIssuance', 'Default', [], support_1.sts.bigint()),
}
exports.account = {
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
    matrixEnjinV603: new support_1.StorageType(
        'Balances.Account',
        'Default',
        [matrixEnjinV603.AccountId32],
        matrixEnjinV603.AccountData
    ),
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
    matrixV500: new support_1.StorageType(
        'Balances.Account',
        'Default',
        [matrixV500.AccountId32],
        matrixV500.AccountData
    ),
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
    matrixV602: new support_1.StorageType(
        'Balances.Account',
        'Default',
        [matrixV602.AccountId32],
        matrixV602.AccountData
    ),
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
    v100: new support_1.StorageType('Balances.Account', 'Default', [v100.AccountId32], v100.AccountData),
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
    v104: new support_1.StorageType('Balances.Account', 'Default', [v104.AccountId32], v104.AccountData),
}
exports.locks = {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Balances.Locks',
        'Default',
        [matrixEnjinV603.AccountId32],
        support_1.sts.array(function () {
            return matrixEnjinV603.BalanceLock
        })
    ),
}
exports.reserves = {
    /**
     *  Named reserves on some account balances.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Balances.Reserves',
        'Default',
        [matrixEnjinV603.AccountId32],
        support_1.sts.array(function () {
            return matrixEnjinV603.ReserveData
        })
    ),
}
exports.holds = {
    /**
     *  Holds on account balances.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [matrixEnjinV603.AccountId32],
        support_1.sts.array(function () {
            return matrixEnjinV603.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    matrixEnjinV1012: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [matrixEnjinV1012.AccountId32],
        support_1.sts.array(function () {
            return matrixEnjinV1012.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    matrixEnjinV1022: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [matrixEnjinV1022.AccountId32],
        support_1.sts.array(function () {
            return matrixEnjinV1022.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    matrixV602: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [matrixV602.AccountId32],
        support_1.sts.array(function () {
            return matrixV602.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    matrixV1010: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [matrixV1010.AccountId32],
        support_1.sts.array(function () {
            return matrixV1010.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    matrixV1020: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [matrixV1020.AccountId32],
        support_1.sts.array(function () {
            return matrixV1020.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    enjinV100: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [enjinV100.AccountId32],
        support_1.sts.array(function () {
            return enjinV100.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    enjinV1032: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [enjinV1032.AccountId32],
        support_1.sts.array(function () {
            return enjinV1032.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    enjinV1050: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [enjinV1050.AccountId32],
        support_1.sts.array(function () {
            return enjinV1050.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    v104: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [v104.AccountId32],
        support_1.sts.array(function () {
            return v104.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    v1030: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [v1030.AccountId32],
        support_1.sts.array(function () {
            return v1030.IdAmount
        })
    ),
    /**
     *  Holds on account balances.
     */
    v1050: new support_1.StorageType(
        'Balances.Holds',
        'Default',
        [v1050.AccountId32],
        support_1.sts.array(function () {
            return v1050.IdAmount
        })
    ),
}
exports.freezes = {
    /**
     *  Freeze locks on account balances.
     */
    matrixEnjinV603: new support_1.StorageType(
        'Balances.Freezes',
        'Default',
        [matrixEnjinV603.AccountId32],
        support_1.sts.array(function () {
            return matrixEnjinV603.IdAmount
        })
    ),
}
