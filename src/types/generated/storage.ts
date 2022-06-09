import assert from 'assert'
import { StorageContext, Result } from './support'
import * as v4 from './v4'

export class BalancesAccountStorage {
    constructor(private ctx: StorageContext) {}

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
     *  But this comes with tradeoffs, storing account system in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account system in the
     *  `Balances` pallet, which uses a `StorageMap` to store system data only.
     *  NOTE: This is only used in the case that this pallet is used to store system.
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('Balances', 'Account') ===
            '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
        )
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
     *  But this comes with tradeoffs, storing account system in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account system in the
     *  `Balances` pallet, which uses a `StorageMap` to store system data only.
     *  NOTE: This is only used in the case that this pallet is used to store system.
     */
    async getAsV4(key: v4.AccountId32): Promise<v4.AccountData> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'Account', key)
    }

    async getManyAsV4(keys: v4.AccountId32[]): Promise<v4.AccountData[]> {
        assert(this.isV4)
        return this.ctx._chain.queryStorage(
            this.ctx.block.hash,
            'Balances',
            'Account',
            keys.map((k) => [k])
        )
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('Balances', 'Account') != null
    }
}

export class BalancesTotalIssuanceStorage {
    constructor(private ctx: StorageContext) {}

    /**
     *  The total units issued in the system.
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') ===
            'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
        )
    }

    /**
     *  The total units issued in the system.
     */
    async getAsV4(): Promise<bigint> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'TotalIssuance')
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
    }
}

export class MultiTokensAttributesStorage {
    constructor(private ctx: StorageContext) {}

    /**
     *  Metadata of collections and tokens.
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'Attributes') ===
            'a746a93405e250d7e804277de85e59649a8d0f26dcdbc38249cee2190785886d'
        )
    }

    /**
     *  Metadata of collections and tokens.
     */
    async getAsV4(key1: bigint, key2: bigint | undefined, key3: Uint8Array): Promise<v4.Attribute | undefined> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'MultiTokens', 'Attributes', key1, key2, key3)
    }

    async getManyAsV4(
        keys: [key1: bigint, key2: bigint | undefined, key3: Uint8Array][]
    ): Promise<(v4.Attribute | undefined)[]> {
        assert(this.isV4)
        return this.ctx._chain.queryStorage(this.ctx.block.hash, 'MultiTokens', 'Attributes', keys)
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'Attributes') != null
    }
}

export class MultiTokensCollectionAccountsStorage {
    constructor(private ctx: StorageContext) {}

    /**
     *  Stores information for an account per collection
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'CollectionAccounts') ===
            'b46672e82d7bfd0dfb77b459f54edcb3814fab36fcd1e60c5702769a7fd5b155'
        )
    }

    /**
     *  Stores information for an account per collection
     */
    async getAsV4(key1: bigint, key2: v4.AccountId32): Promise<v4.CollectionAccount | undefined> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'MultiTokens', 'CollectionAccounts', key1, key2)
    }

    async getManyAsV4(keys: [key1: bigint, key2: v4.AccountId32][]): Promise<(v4.CollectionAccount | undefined)[]> {
        assert(this.isV4)
        return this.ctx._chain.queryStorage(this.ctx.block.hash, 'MultiTokens', 'CollectionAccounts', keys)
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'CollectionAccounts') != null
    }
}

export class MultiTokensCollectionsStorage {
    constructor(private ctx: StorageContext) {}

    /**
     *  The collections in existence and their ownership details.
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'Collections') ===
            'c76fc43d1e02d9edc8473a5a9854c76e0ef6e67b2e71f1b73097b4387b02cbac'
        )
    }

    /**
     *  The collections in existence and their ownership details.
     */
    async getAsV4(key: bigint): Promise<v4.Collection | undefined> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'MultiTokens', 'Collections', key)
    }

    async getManyAsV4(keys: bigint[]): Promise<(v4.Collection | undefined)[]> {
        assert(this.isV4)
        return this.ctx._chain.queryStorage(
            this.ctx.block.hash,
            'MultiTokens',
            'Collections',
            keys.map((k) => [k])
        )
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'Collections') != null
    }
}

export class MultiTokensTokenAccountsStorage {
    constructor(private ctx: StorageContext) {}

    /**
     *  Accounts per token
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'TokenAccounts') ===
            'aa9987301d7154519df0fc59a4664d747676b382efcba3db6f30f66eda406862'
        )
    }

    /**
     *  Accounts per token
     */
    async getAsV4(key1: v4.AccountId32, key2: bigint, key3: bigint): Promise<v4.TokenAccount | undefined> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'MultiTokens', 'TokenAccounts', key1, key2, key3)
    }

    async getManyAsV4(
        keys: [key1: v4.AccountId32, key2: bigint, key3: bigint][]
    ): Promise<(v4.TokenAccount | undefined)[]> {
        assert(this.isV4)
        return this.ctx._chain.queryStorage(this.ctx.block.hash, 'MultiTokens', 'TokenAccounts', keys)
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'TokenAccounts') != null
    }
}

export class MultiTokensTokensStorage {
    constructor(private ctx: StorageContext) {}

    /**
     *  Tokens storage
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'Tokens') ===
            '4eac4ac19f06319a6cc826f78f0b579a3c691cb8f1cdf61c93a535676b73abed'
        )
    }

    /**
     *  Tokens storage
     */
    async getAsV4(key1: bigint, key2: bigint): Promise<v4.Token | undefined> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'MultiTokens', 'Tokens', key1, key2)
    }

    async getManyAsV4(keys: [key1: bigint, key2: bigint][]): Promise<(v4.Token | undefined)[]> {
        assert(this.isV4)
        return this.ctx._chain.queryStorage(this.ctx.block.hash, 'MultiTokens', 'Tokens', keys)
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('MultiTokens', 'Tokens') != null
    }
}

export class SystemAccountStorage {
    constructor(private ctx: StorageContext) {}

    /**
     *  The full account information for a particular account ID.
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('System', 'Account') ===
            '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
        )
    }

    /**
     *  The full account information for a particular account ID.
     */
    async getAsV4(key: v4.AccountId32): Promise<v4.AccountInfo> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Account', key)
    }

    async getManyAsV4(keys: v4.AccountId32[]): Promise<v4.AccountInfo[]> {
        assert(this.isV4)
        return this.ctx._chain.queryStorage(
            this.ctx.block.hash,
            'System',
            'Account',
            keys.map((k) => [k])
        )
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('System', 'Account') != null
    }
}

export class SystemEventsStorage {
    constructor(private ctx: StorageContext) {}

    /**
     *  Events deposited for the current block.
     *
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('System', 'Events') ===
            '8eb3143d755f3e97ad8400740aa078bb85051c4311cc7dc019464f3db3f9f73a'
        )
    }

    /**
     *  Events deposited for the current block.
     *
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    async getAsV4(): Promise<v4.EventRecord[]> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Events')
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('System', 'Events') != null
    }
}

export class SystemLastRuntimeUpgradeStorage {
    constructor(private ctx: StorageContext) {}

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isV4() {
        return (
            this.ctx._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') ===
            'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
        )
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    async getAsV4(): Promise<v4.LastRuntimeUpgradeInfo | undefined> {
        assert(this.isV4)
        return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'LastRuntimeUpgrade')
    }

    /**
     * Checks whether the storage item is defined for the current chain version.
     */
    get isExists(): boolean {
        return this.ctx._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') != null
    }
}
