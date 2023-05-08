import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as efinityV1 from './efinityV1'
import * as v500 from './v500'
import * as rocfinityV3012 from './rocfinityV3012'
import * as v600 from './v600'
import * as efinityV2 from './efinityV2'
import * as efinityV3 from './efinityV3'
import * as efinityV3000 from './efinityV3000'
import * as efinityV3012 from './efinityV3012'

export class AssetRegistryLastAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'LastAssetId'
    }

    /**
     *  The last processed asset id - used when assigning a sequential id.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last processed asset id - used when assigning a sequential id.
     */
    get asEfinityV3000(): AssetRegistryLastAssetIdStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  The last processed asset id - used when assigning a sequential id.
 */
export interface AssetRegistryLastAssetIdStorageEfinityV3000 {
    get(): Promise<number>
}

export class AssetRegistryLocationToAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'LocationToAssetId'
    }

    /**
     *  Maps a multilocation to an asset id - useful when processing xcm
     *  messages.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '3c043d5ada7fce2b8b426c49f9b15d1308835a7483919400e4c42d24e95b4193'
    }

    /**
     *  Maps a multilocation to an asset id - useful when processing xcm
     *  messages.
     */
    get asEfinityV3000(): AssetRegistryLocationToAssetIdStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Maps a multilocation to an asset id - useful when processing xcm
 *  messages.
 */
export interface AssetRegistryLocationToAssetIdStorageEfinityV3000 {
    get(key: efinityV3000.V1MultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: efinityV3000.V1MultiLocation[]): Promise<(number | undefined)[]>
    getKeys(): Promise<efinityV3000.V1MultiLocation[]>
    getKeys(key: efinityV3000.V1MultiLocation): Promise<efinityV3000.V1MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV3000.V1MultiLocation[]>
    getKeysPaged(pageSize: number, key: efinityV3000.V1MultiLocation): AsyncIterable<efinityV3000.V1MultiLocation[]>
    getPairs(): Promise<[k: efinityV3000.V1MultiLocation, v: number][]>
    getPairs(key: efinityV3000.V1MultiLocation): Promise<[k: efinityV3000.V1MultiLocation, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV3000.V1MultiLocation, v: number][]>
    getPairsPaged(pageSize: number, key: efinityV3000.V1MultiLocation): AsyncIterable<[k: efinityV3000.V1MultiLocation, v: number][]>
}

export class AssetRegistryMetadataStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'Metadata'
    }

    /**
     *  The metadata of an asset, indexed by asset id.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'ecee0301595c8efdb7bb75fce789ce73c12d7f7cec5bc83b08871d28b4b1a98f'
    }

    /**
     *  The metadata of an asset, indexed by asset id.
     */
    get asEfinityV3000(): AssetRegistryMetadataStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  The metadata of an asset, indexed by asset id.
 */
export interface AssetRegistryMetadataStorageEfinityV3000 {
    get(key: number): Promise<(efinityV3000.AssetMetadata | undefined)>
    getAll(): Promise<efinityV3000.AssetMetadata[]>
    getMany(keys: number[]): Promise<(efinityV3000.AssetMetadata | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: efinityV3000.AssetMetadata][]>
    getPairs(key: number): Promise<[k: number, v: efinityV3000.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: efinityV3000.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: efinityV3000.AssetMetadata][]>
}

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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asEfinityV3000(): AuthorshipAuthorStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageEfinityV3000 {
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether uncles were already set in this block.
     */
    get asEfinityV3000(): AuthorshipDidSetUnclesStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Whether uncles were already set in this block.
 */
export interface AuthorshipDidSetUnclesStorageEfinityV3000 {
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
    }

    /**
     *  Uncles
     */
    get asEfinityV3000(): AuthorshipUnclesStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Uncles
 */
export interface AuthorshipUnclesStorageEfinityV3000 {
    get(): Promise<efinityV3000.UncleEntryItem[]>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    get asEfinityV1(): BalancesAccountStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface BalancesAccountStorageEfinityV1 {
    get(key: Uint8Array): Promise<efinityV1.AccountData>
    getAll(): Promise<efinityV1.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<efinityV1.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV1.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV1.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV1.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV1.AccountData][]>
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
    get isV500(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asV500(): BalancesInactiveIssuanceStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageV500 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asEfinityV1(): BalancesLocksStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageEfinityV1 {
    get(key: Uint8Array): Promise<efinityV1.BalanceLock[]>
    getAll(): Promise<efinityV1.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<efinityV1.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV1.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV1.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV1.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV1.BalanceLock[]][]>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asEfinityV1(): BalancesReservesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageEfinityV1 {
    get(key: Uint8Array): Promise<efinityV1.ReserveData[]>
    getAll(): Promise<efinityV1.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<efinityV1.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV1.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV1.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV1.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV1.ReserveData[]][]>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  This is set to v2.0.0 for new networks.
     */
    get asEfinityV1(): BalancesStorageVersionStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  This is set to v2.0.0 for new networks.
 */
export interface BalancesStorageVersionStorageEfinityV1 {
    get(): Promise<efinityV1.Releases>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asEfinityV1(): BalancesTotalIssuanceStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageEfinityV1 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asEfinityV2(): BountiesBountiesStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageEfinityV2 {
    get(key: number): Promise<(efinityV2.Bounty | undefined)>
    getAll(): Promise<efinityV2.Bounty[]>
    getMany(keys: number[]): Promise<(efinityV2.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: efinityV2.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: efinityV2.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: efinityV2.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: efinityV2.Bounty][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asEfinityV2(): BountiesBountyApprovalsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountiesBountyApprovalsStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asEfinityV2(): BountiesBountyCountStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountiesBountyCountStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asEfinityV2(): BountiesBountyDescriptionsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageEfinityV2 {
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

    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'a4e45b744228821d2d599c2e7bd1993b9bd523df83f8ee660f73e52be555e75c'
    }

    get asEfinityV1(): ClaimsClaimsStorageEfinityV1 {
        assert(this.isEfinityV1)
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

export interface ClaimsClaimsStorageEfinityV1 {
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

    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asEfinityV1(): ClaimsTotalStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

export interface ClaimsTotalStorageEfinityV1 {
    get(): Promise<bigint>
}

export class CollatorStakingAuthoredBlocksCountStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'AuthoredBlocksCount'
    }

    /**
     *  For each session index, we keep a mapping of collators to the
     *  number of blocks authored by them.
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
    }

    /**
     *  For each session index, we keep a mapping of collators to the
     *  number of blocks authored by them.
     */
    get asEfinityV3(): CollatorStakingAuthoredBlocksCountStorageEfinityV3 {
        assert(this.isEfinityV3)
        return this as any
    }
}

/**
 *  For each session index, we keep a mapping of collators to the
 *  number of blocks authored by them.
 */
export interface CollatorStakingAuthoredBlocksCountStorageEfinityV3 {
    get(key1: number, key2: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: [number, Uint8Array][]): Promise<number[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: number][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: number][]>
}

export class CollatorStakingBlockProducerStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'BlockProducer'
    }

    /**
     *  The collator to provide the next block
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The collator to provide the next block
     */
    get asEfinityV1(): CollatorStakingBlockProducerStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The collator to provide the next block
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The collator to provide the next block
     */
    get asEfinityV2(): CollatorStakingBlockProducerStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The collator to provide the next block
 */
export interface CollatorStakingBlockProducerStorageEfinityV1 {
    get(): Promise<Uint8Array>
}

/**
 *  The collator to provide the next block
 */
export interface CollatorStakingBlockProducerStorageEfinityV2 {
    get(): Promise<(Uint8Array | undefined)>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'cbb398b5f9c260ae06ccf5001bdee4164668cfe3c49da06168fc750be84f5701'
    }

    /**
     *  The current set of candidates for collation.
     */
    get asEfinityV1(): CollatorStakingCandidatesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The current set of candidates for collation.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of candidates for collation.
     */
    get asEfinityV3012(): CollatorStakingCandidatesStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The current set of candidates for collation.
 */
export interface CollatorStakingCandidatesStorageEfinityV1 {
    get(): Promise<efinityV1.Collator[]>
}

/**
 *  The current set of candidates for collation.
 */
export interface CollatorStakingCandidatesStorageEfinityV3012 {
    get(): Promise<efinityV3012.Collator[]>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  The list of collators who requested an exit.
     */
    get asEfinityV1(): CollatorStakingCollatorExitsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The list of collators who requested an exit.
 */
export interface CollatorStakingCollatorExitsStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'cbb398b5f9c260ae06ccf5001bdee4164668cfe3c49da06168fc750be84f5701'
    }

    /**
     *  The current set of collators
     */
    get asEfinityV1(): CollatorStakingCollatorsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The current set of collators
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of collators
     */
    get asEfinityV3012(): CollatorStakingCollatorsStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The current set of collators
 */
export interface CollatorStakingCollatorsStorageEfinityV1 {
    get(): Promise<efinityV1.Collator[]>
}

/**
 *  The current set of collators
 */
export interface CollatorStakingCollatorsStorageEfinityV3012 {
    get(): Promise<efinityV3012.Collator[]>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'd301c895b8438300017ee0b57de86bcf91e9f12a5914bddbb4fa72622f169fa8'
    }

    /**
     *  The current round information.
     */
    get asEfinityV1(): CollatorStakingCurrentRoundStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The current round information.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '55f635cb275994673c2b749928c20c824098d354b6ce574fd0854fccb2dfd74e'
    }

    /**
     *  The current round information.
     */
    get asEfinityV3012(): CollatorStakingCurrentRoundStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The current round information.
 */
export interface CollatorStakingCurrentRoundStorageEfinityV1 {
    get(): Promise<efinityV1.Round>
}

/**
 *  The current round information.
 */
export interface CollatorStakingCurrentRoundStorageEfinityV3012 {
    get(): Promise<efinityV3012.Round>
}

export class CollatorStakingDesiredCandidatesCountStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'DesiredCandidatesCount'
    }

    /**
     *  The current candidate limit, must be within 0 and `T::MaxCandidates`
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current candidate limit, must be within 0 and `T::MaxCandidates`
     */
    get asEfinityV3(): CollatorStakingDesiredCandidatesCountStorageEfinityV3 {
        assert(this.isEfinityV3)
        return this as any
    }
}

/**
 *  The current candidate limit, must be within 0 and `T::MaxCandidates`
 */
export interface CollatorStakingDesiredCandidatesCountStorageEfinityV3 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'cbb398b5f9c260ae06ccf5001bdee4164668cfe3c49da06168fc750be84f5701'
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get asEfinityV2(): CollatorStakingInvulnerablesStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get asEfinityV3012(): CollatorStakingInvulnerablesStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The invulnerable collators
 * 
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface CollatorStakingInvulnerablesStorageEfinityV2 {
    get(): Promise<efinityV2.Collator[]>
}

/**
 *  The invulnerable collators
 * 
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface CollatorStakingInvulnerablesStorageEfinityV3012 {
    get(): Promise<efinityV3012.Collator[]>
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
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The min stake amount for collators
     */
    get asEfinityV3012(): CollatorStakingMinCollatorStakeStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The min stake amount for collators
 */
export interface CollatorStakingMinCollatorStakeStorageEfinityV3012 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '11643981c5f057df403241a3175aad7384102829be78567ad40af375e54362df'
    }

    /**
     *  The current set of nominators.
     * 
     *  Each nominator is allowed to nominate one collator.
     */
    get asEfinityV1(): CollatorStakingNominatorsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The current set of nominators.
 * 
 *  Each nominator is allowed to nominate one collator.
 */
export interface CollatorStakingNominatorsStorageEfinityV1 {
    get(key: Uint8Array): Promise<(efinityV1.Nomination | undefined)>
    getAll(): Promise<efinityV1.Nomination[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV1.Nomination | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV1.Nomination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV1.Nomination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV1.Nomination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV1.Nomination][]>
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
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '158926fcec32bbcafd0b7803e082429e4e807c32a63362ded7d2c8c3c9e95edb'
    }

    /**
     *  The session info of collators including produced blocks and uptime
     */
    get asEfinityV3012(): CollatorStakingSessionInfoStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The session info of collators including produced blocks and uptime
 */
export interface CollatorStakingSessionInfoStorageEfinityV3012 {
    get(key1: Uint8Array, key2: number): Promise<efinityV3012.CollatorSessionInfo>
    getAll(): Promise<efinityV3012.CollatorSessionInfo[]>
    getMany(keys: [Uint8Array, number][]): Promise<efinityV3012.CollatorSessionInfo[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: efinityV3012.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: efinityV3012.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: efinityV3012.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: efinityV3012.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: efinityV3012.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: efinityV3012.CollatorSessionInfo][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asEfinityV2(): CommunityPoolApprovalsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface CommunityPoolApprovalsStorageEfinityV2 {
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
    get isV500(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asV500(): CommunityPoolDeactivatedStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface CommunityPoolDeactivatedStorageV500 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asEfinityV2(): CommunityPoolProposalCountStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface CommunityPoolProposalCountStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asEfinityV2(): CommunityPoolProposalsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface CommunityPoolProposalsStorageEfinityV2 {
    get(key: number): Promise<(efinityV2.Proposal | undefined)>
    getAll(): Promise<efinityV2.Proposal[]>
    getMany(keys: number[]): Promise<(efinityV2.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: efinityV2.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: efinityV2.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: efinityV2.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: efinityV2.Proposal][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asEfinityV2(): CouncilMembersStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asEfinityV2(): CouncilPrimeStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asEfinityV2(): CouncilProposalCountStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '0f3007c68722fd11be8b2174f41f58819d999d19ac6bc66e70c97b8b57b3eb90'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV2(): CouncilProposalOfStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === '8072ac36972240ef7be53d931291d08dcf2288b6065ce85460cf882dff3d6fbd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV3(): CouncilProposalOfStorageEfinityV3 {
        assert(this.isEfinityV3)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'a8aad93a48825f59eda8290b5f376abaad23ad8d117ace81aed42a2fc9a707f6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV3000(): CouncilProposalOfStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '206139e5383da57babd738f6be967d820718de2d26b822150cfbe0ef523b7978'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV3012(): CouncilProposalOfStorageEfinityV3012 {
        assert(this.isEfinityV3012)
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
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageEfinityV2 {
    get(key: Uint8Array): Promise<(efinityV2.Call | undefined)>
    getAll(): Promise<efinityV2.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV2.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV2.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV2.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV2.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV2.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageEfinityV3 {
    get(key: Uint8Array): Promise<(efinityV3.Call | undefined)>
    getAll(): Promise<efinityV3.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageEfinityV3000 {
    get(key: Uint8Array): Promise<(efinityV3000.Call | undefined)>
    getAll(): Promise<efinityV3000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageEfinityV3012 {
    get(key: Uint8Array): Promise<(efinityV3012.Call | undefined)>
    getAll(): Promise<efinityV3012.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3012.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3012.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3012.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3012.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3012.Call][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asEfinityV2(): CouncilProposalsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asEfinityV2(): CouncilVotingStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageEfinityV2 {
    get(key: Uint8Array): Promise<(efinityV2.Votes | undefined)>
    getAll(): Promise<efinityV2.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV2.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV2.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV2.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV2.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV2.Votes][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asEfinityV2(): DemocracyBlacklistStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asEfinityV2(): DemocracyCancellationsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asEfinityV2(): DemocracyDepositOfStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asEfinityV2(): DemocracyLastTabledWasExternalStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asEfinityV2(): DemocracyLowestUnbakedStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageEfinityV2 {
    get(): Promise<number>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asEfinityV2(): DemocracyNextExternalStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asEfinityV3012(): DemocracyNextExternalStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageEfinityV2 {
    get(): Promise<([Uint8Array, efinityV2.VoteThreshold] | undefined)>
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageEfinityV3012 {
    get(): Promise<([efinityV3012.Bounded, efinityV3012.VoteThreshold] | undefined)>
}

export class DemocracyPreimagesStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Preimages'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
    }

    /**
     *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
     *  The block number is the block at which it was deposited.
     */
    get asEfinityV2(): DemocracyPreimagesStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
 *  The block number is the block at which it was deposited.
 */
export interface DemocracyPreimagesStorageEfinityV2 {
    get(key: Uint8Array): Promise<(efinityV2.PreimageStatus | undefined)>
    getAll(): Promise<efinityV2.PreimageStatus[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV2.PreimageStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV2.PreimageStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV2.PreimageStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV2.PreimageStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV2.PreimageStatus][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asEfinityV2(): DemocracyPublicPropCountStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageEfinityV2 {
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
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal's hash.
     */
    get asEfinityV2(): DemocracyPublicPropsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asEfinityV3012(): DemocracyPublicPropsStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal's hash.
 */
export interface DemocracyPublicPropsStorageEfinityV2 {
    get(): Promise<[number, Uint8Array, Uint8Array][]>
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageEfinityV3012 {
    get(): Promise<[number, efinityV3012.Bounded, Uint8Array][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asEfinityV2(): DemocracyReferendumCountStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asEfinityV2(): DemocracyReferendumInfoOfStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asEfinityV3012(): DemocracyReferendumInfoOfStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageEfinityV2 {
    get(key: number): Promise<(efinityV2.ReferendumInfo | undefined)>
    getAll(): Promise<efinityV2.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(efinityV2.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: efinityV2.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: efinityV2.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: efinityV2.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: efinityV2.ReferendumInfo][]>
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageEfinityV3012 {
    get(key: number): Promise<(efinityV3012.ReferendumInfo | undefined)>
    getAll(): Promise<efinityV3012.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(efinityV3012.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: efinityV3012.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: efinityV3012.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: efinityV3012.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: efinityV3012.ReferendumInfo][]>
}

export class DemocracyStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'StorageVersion'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
    }

    /**
     *  Storage version of the pallet.
     * 
     *  New networks start with last version.
     */
    get asEfinityV2(): DemocracyStorageVersionStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Storage version of the pallet.
 * 
 *  New networks start with last version.
 */
export interface DemocracyStorageVersionStorageEfinityV2 {
    get(): Promise<(efinityV2.Type_322 | undefined)>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asEfinityV2(): DemocracyVotingOfStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageEfinityV2 {
    get(key: Uint8Array): Promise<efinityV2.Voting>
    getAll(): Promise<efinityV2.Voting[]>
    getMany(keys: Uint8Array[]): Promise<efinityV2.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV2.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV2.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV2.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV2.Voting][]>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
    }

    /**
     *  The configuration.
     */
    get asEfinityV1(): DmpQueueConfigurationStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The configuration.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '67bde14908f93a3aea4aa5877726bd296c59aa66227203739244319bbf5fb443'
    }

    /**
     *  The configuration.
     */
    get asEfinityV3000(): DmpQueueConfigurationStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  The configuration.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'd4ff4c68d7b5a5db6603b6449fa2fc5fa9ccb53292dd0c03e9b6a4920c6e75f9'
    }

    /**
     *  The configuration.
     */
    get asEfinityV3012(): DmpQueueConfigurationStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageEfinityV1 {
    get(): Promise<efinityV1.ConfigData>
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageEfinityV3000 {
    get(): Promise<efinityV3000.ConfigData>
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageEfinityV3012 {
    get(): Promise<efinityV3012.ConfigData>
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
    get isV500(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV500(): DmpQueueCounterForOverweightStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface DmpQueueCounterForOverweightStorageV500 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asEfinityV1(): DmpQueueOverweightStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asEfinityV1(): DmpQueuePageIndexStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageEfinityV1 {
    get(): Promise<efinityV1.PageIndexData>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asEfinityV1(): DmpQueuePagesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageEfinityV1 {
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
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'a6c0b18ac1880d14733b821d81f9929753a09ce6f844e3eee25d384d26e504f3'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get asEfinityV3012(): EfinityXcmMinimumWeightsStorageEfinityV3012 {
        assert(this.isEfinityV3012)
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
export interface EfinityXcmMinimumWeightsStorageEfinityV3012 {
    get(key: efinityV3012.XcmOperation): Promise<efinityV3012.MinimumWeightFeePair>
    getAll(): Promise<efinityV3012.MinimumWeightFeePair[]>
    getMany(keys: efinityV3012.XcmOperation[]): Promise<efinityV3012.MinimumWeightFeePair[]>
    getKeys(): Promise<efinityV3012.XcmOperation[]>
    getKeys(key: efinityV3012.XcmOperation): Promise<efinityV3012.XcmOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV3012.XcmOperation[]>
    getKeysPaged(pageSize: number, key: efinityV3012.XcmOperation): AsyncIterable<efinityV3012.XcmOperation[]>
    getPairs(): Promise<[k: efinityV3012.XcmOperation, v: efinityV3012.MinimumWeightFeePair][]>
    getPairs(key: efinityV3012.XcmOperation): Promise<[k: efinityV3012.XcmOperation, v: efinityV3012.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV3012.XcmOperation, v: efinityV3012.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number, key: efinityV3012.XcmOperation): AsyncIterable<[k: efinityV3012.XcmOperation, v: efinityV3012.MinimumWeightFeePair][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '9914d71a2b43fa7da00c957184ae8b79abfcf4e6a63fb1b814680e322156164c'
    }

    /**
     *  Paused extrinsics map
     * 
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    get asEfinityV3000(): ExtrinsicPausePausedExtrinsicsStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Paused extrinsics map
 * 
 *  The key is tuple with the name of the pallet and the extrinsic name and value is
 *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
 */
export interface ExtrinsicPausePausedExtrinsicsStorageEfinityV3000 {
    get(key: efinityV3000.ExtrinsicInfo): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: efinityV3000.ExtrinsicInfo[]): Promise<(null | undefined)[]>
    getKeys(): Promise<efinityV3000.ExtrinsicInfo[]>
    getKeys(key: efinityV3000.ExtrinsicInfo): Promise<efinityV3000.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV3000.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number, key: efinityV3000.ExtrinsicInfo): AsyncIterable<efinityV3000.ExtrinsicInfo[]>
    getPairs(): Promise<[k: efinityV3000.ExtrinsicInfo, v: null][]>
    getPairs(key: efinityV3000.ExtrinsicInfo): Promise<[k: efinityV3000.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV3000.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number, key: efinityV3000.ExtrinsicInfo): AsyncIterable<[k: efinityV3000.ExtrinsicInfo, v: null][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '779942d2fcd4cd5dbeb1843d9556a6249b0b76ec19382709018ef4f07e288ee0'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asEfinityV3000(): FuelTanksAccountsStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '01245446ad097e0a27bc7d677ff4084b3e43dd7bf1f408c6295b2c4b9b742aa1'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asEfinityV3012(): FuelTanksAccountsStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageEfinityV3000 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(efinityV3000.UserAccount | undefined)>
    getAll(): Promise<efinityV3000.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(efinityV3000.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3000.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3000.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3000.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3000.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3000.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3000.UserAccount][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageEfinityV3012 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(efinityV3012.UserAccount | undefined)>
    getAll(): Promise<efinityV3012.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(efinityV3012.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3012.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3012.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV3012.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3012.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3012.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV3012.UserAccount][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '6417b6c5aebb64849792349d17be222d1c212c6254e5517ec62f89a5e5e14ddc'
    }

    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    get asEfinityV3000(): FuelTanksFreezeQueueStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  The queue for fuel tank and rule set freezing
 *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
 */
export interface FuelTanksFreezeQueueStorageEfinityV3000 {
    get(): Promise<efinityV3000.FreezeQueueItem[]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'f75b278131ab790de7986c66a9238030c7fde76022a4a06bd888cff70440801d'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asEfinityV3000(): FuelTanksTanksStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '170c8c92a3afd2eb9f5df09f52871255ecd25233f0e5b53f9e504a5d16ca3478'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asEfinityV3012(): FuelTanksTanksStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageEfinityV3000 {
    get(key: Uint8Array): Promise<(efinityV3000.FuelTank | undefined)>
    getAll(): Promise<efinityV3000.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3000.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3000.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3000.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3000.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3000.FuelTank][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageEfinityV3012 {
    get(key: Uint8Array): Promise<(efinityV3012.FuelTank | undefined)>
    getAll(): Promise<efinityV3012.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3012.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3012.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3012.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3012.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3012.FuelTank][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '8f3079a34bccec98eddaa087299c671597b9b6c0401ca8c900734ef257151b13'
    }

    /**
     *  Stores information about the marketplace
     */
    get asEfinityV3000(): MarketplaceInfoStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Stores information about the marketplace
 */
export interface MarketplaceInfoStorageEfinityV3000 {
    get(): Promise<efinityV3000.MarketPlaceInfo>
}

export class MarketplaceListingIdsByAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'ListingIdsByAccountId'
    }

    /**
     *  Listing Ids by `AccountId`
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '33e12ad309c02112b5ea505c6e3e739ba83921bfe6bed7e5eb08d21907895180'
    }

    /**
     *  Listing Ids by `AccountId`
     */
    get asEfinityV3000(): MarketplaceListingIdsByAccountIdStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Listing Ids by `AccountId`
 */
export interface MarketplaceListingIdsByAccountIdStorageEfinityV3000 {
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'cc5df187f7a6ddcd474c0c1e410e8d72bd71954d4b2ad06da5882588a225356a'
    }

    /**
     *  Listing Ids by make asset's collection id and token id
     */
    get asEfinityV3000(): MarketplaceListingIdsByMakeAssetStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Listing Ids by make asset's collection id and token id
 */
export interface MarketplaceListingIdsByMakeAssetStorageEfinityV3000 {
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'cc5df187f7a6ddcd474c0c1e410e8d72bd71954d4b2ad06da5882588a225356a'
    }

    /**
     *  Listing Ids by take asset's collection id and token id
     */
    get asEfinityV3000(): MarketplaceListingIdsByTakeAssetStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Listing Ids by take asset's collection id and token id
 */
export interface MarketplaceListingIdsByTakeAssetStorageEfinityV3000 {
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'e51936bd4e8b63920dc0b1c10bbd1672cd077197cb65f17e9eba1f1a57c36335'
    }

    /**
     *  Listings by ID
     */
    get asEfinityV3000(): MarketplaceListingsStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Listings by ID
 */
export interface MarketplaceListingsStorageEfinityV3000 {
    get(key: Uint8Array): Promise<(efinityV3000.Listing | undefined)>
    getAll(): Promise<efinityV3000.Listing[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3000.Listing | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3000.Listing][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3000.Listing][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3000.Listing][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3000.Listing][]>
}

export class MultiAssetsAssetsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssets'
    }

    protected getName() {
        return 'Assets'
    }

    /**
     *  The assets in existence and their ownership details.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '20a663a47af2299526b3f39588fc24a70f12614ef28ce9c51f43831c6bbbd3a0'
    }

    /**
     *  The assets in existence and their ownership details.
     */
    get asEfinityV1(): MultiAssetsAssetsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The assets in existence and their ownership details.
 */
export interface MultiAssetsAssetsStorageEfinityV1 {
    get(key: bigint): Promise<(efinityV1.Asset | undefined)>
    getAll(): Promise<efinityV1.Asset[]>
    getMany(keys: bigint[]): Promise<(efinityV1.Asset | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: efinityV1.Asset][]>
    getPairs(key: bigint): Promise<[k: bigint, v: efinityV1.Asset][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: efinityV1.Asset][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: efinityV1.Asset][]>
}

export class MultiAssetsAttributesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssets'
    }

    protected getName() {
        return 'Attributes'
    }

    /**
     *  Metadata of assets and tokens.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '9922a04129703e336f57d3c6245cd779335975858c760cb8e5541e8b78b286d5'
    }

    /**
     *  Metadata of assets and tokens.
     */
    get asEfinityV1(): MultiAssetsAttributesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Metadata of assets and tokens.
 */
export interface MultiAssetsAttributesStorageEfinityV1 {
    get(key1: bigint, key2: (number | undefined), key3: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, (number | undefined), Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, (number | undefined), Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, (number | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (number | undefined)): Promise<[bigint, (number | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (number | undefined), key3: Uint8Array): Promise<[bigint, (number | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, (number | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, (number | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (number | undefined)): AsyncIterable<[bigint, (number | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (number | undefined), key3: Uint8Array): AsyncIterable<[bigint, (number | undefined), Uint8Array][]>
    getPairs(): Promise<[k: [bigint, (number | undefined), Uint8Array], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, (number | undefined), Uint8Array], v: Uint8Array][]>
    getPairs(key1: bigint, key2: (number | undefined)): Promise<[k: [bigint, (number | undefined), Uint8Array], v: Uint8Array][]>
    getPairs(key1: bigint, key2: (number | undefined), key3: Uint8Array): Promise<[k: [bigint, (number | undefined), Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, (number | undefined), Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, (number | undefined), Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (number | undefined)): AsyncIterable<[k: [bigint, (number | undefined), Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (number | undefined), key3: Uint8Array): AsyncIterable<[k: [bigint, (number | undefined), Uint8Array], v: Uint8Array][]>
}

export class MultiAssetsBurnedZombieTokensStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssets'
    }

    protected getName() {
        return 'BurnedZombieTokens'
    }

    /**
     *  Burned Non-fungible tokens of a valid asset.
     *  Tokens were deleted from a valid asset (Zombie Token).
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '2aeab94eea243a2ee5a2cc9a4581e9a1b328c25347d96c89e872f624b02aff84'
    }

    /**
     *  Burned Non-fungible tokens of a valid asset.
     *  Tokens were deleted from a valid asset (Zombie Token).
     */
    get asEfinityV1(): MultiAssetsBurnedZombieTokensStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Burned Non-fungible tokens of a valid asset.
 *  Tokens were deleted from a valid asset (Zombie Token).
 */
export interface MultiAssetsBurnedZombieTokensStorageEfinityV1 {
    get(key1: bigint, key2: number): Promise<efinityV1.Range[]>
    getAll(): Promise<efinityV1.Range[][]>
    getMany(keys: [bigint, number][]): Promise<efinityV1.Range[][]>
    getKeys(): Promise<[bigint, number][]>
    getKeys(key1: bigint): Promise<[bigint, number][]>
    getKeys(key1: bigint, key2: number): Promise<[bigint, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, number][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, number][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: number): AsyncIterable<[bigint, number][]>
    getPairs(): Promise<[k: [bigint, number], v: efinityV1.Range[]][]>
    getPairs(key1: bigint): Promise<[k: [bigint, number], v: efinityV1.Range[]][]>
    getPairs(key1: bigint, key2: number): Promise<[k: [bigint, number], v: efinityV1.Range[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, number], v: efinityV1.Range[]][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, number], v: efinityV1.Range[]][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: number): AsyncIterable<[k: [bigint, number], v: efinityV1.Range[]][]>
}

export class MultiAssetsFungibleBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssets'
    }

    protected getName() {
        return 'FungibleBalances'
    }

    /**
     *  Asset balances of accounts.
     *  # TODO
     *  - Is `Towx64Concat` safe enough here?
     *  - Performance Improvement: Only store the localId for UUAID.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'eeea1705b24c280b812adc25b045aa67d67a83cec8842b18c5f450c83916dc4d'
    }

    /**
     *  Asset balances of accounts.
     *  # TODO
     *  - Is `Towx64Concat` safe enough here?
     *  - Performance Improvement: Only store the localId for UUAID.
     */
    get asEfinityV1(): MultiAssetsFungibleBalancesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Asset balances of accounts.
 *  # TODO
 *  - Is `Towx64Concat` safe enough here?
 *  - Performance Improvement: Only store the localId for UUAID.
 */
export interface MultiAssetsFungibleBalancesStorageEfinityV1 {
    get(key1: Uint8Array, key2: bigint): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, bigint][]): Promise<bigint[]>
    getKeys(): Promise<[Uint8Array, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint], v: bigint][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint], v: bigint][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint], v: bigint][]>
}

export class MultiAssetsIdleOperationsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssets'
    }

    protected getName() {
        return 'IdleOperations'
    }

    /**
     *  Pending operations to be executed on `Hooks::on_idle`.
     * 
     *  # TODO
     *  - Support list of `IdleOperation` per `key` (a.k.a. `AssetId`). It will reduce the number
     *  of writes from three (i.e. `fn do_burn_fungible_asset`) to only one.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '155e0e87aa1f501194d92e3538b1a9efb10719b04ef38a7e275c2482f2c06b59'
    }

    /**
     *  Pending operations to be executed on `Hooks::on_idle`.
     * 
     *  # TODO
     *  - Support list of `IdleOperation` per `key` (a.k.a. `AssetId`). It will reduce the number
     *  of writes from three (i.e. `fn do_burn_fungible_asset`) to only one.
     */
    get asEfinityV1(): MultiAssetsIdleOperationsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Pending operations to be executed on `Hooks::on_idle`.
 * 
 *  # TODO
 *  - Support list of `IdleOperation` per `key` (a.k.a. `AssetId`). It will reduce the number
 *  of writes from three (i.e. `fn do_burn_fungible_asset`) to only one.
 */
export interface MultiAssetsIdleOperationsStorageEfinityV1 {
    get(key: efinityV1.IdleOperation): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: efinityV1.IdleOperation[]): Promise<(null | undefined)[]>
    getKeys(): Promise<efinityV1.IdleOperation[]>
    getKeys(key: efinityV1.IdleOperation): Promise<efinityV1.IdleOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV1.IdleOperation[]>
    getKeysPaged(pageSize: number, key: efinityV1.IdleOperation): AsyncIterable<efinityV1.IdleOperation[]>
    getPairs(): Promise<[k: efinityV1.IdleOperation, v: null][]>
    getPairs(key: efinityV1.IdleOperation): Promise<[k: efinityV1.IdleOperation, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV1.IdleOperation, v: null][]>
    getPairsPaged(pageSize: number, key: efinityV1.IdleOperation): AsyncIterable<[k: efinityV1.IdleOperation, v: null][]>
}

export class MultiAssetsNextLocalAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssets'
    }

    protected getName() {
        return 'NextLocalAssetId'
    }

    /**
     *  Sequencer for assetID generators.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'b74b68c991bd7b84f6a5c507e278122d6de167efa17d4a61114639f0a032e198'
    }

    /**
     *  Sequencer for assetID generators.
     */
    get asEfinityV1(): MultiAssetsNextLocalAssetIdStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Sequencer for assetID generators.
 */
export interface MultiAssetsNextLocalAssetIdStorageEfinityV1 {
    get(): Promise<bigint>
}

export class MultiAssetsNonFungibleBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssets'
    }

    protected getName() {
        return 'NonFungibleBalances'
    }

    /**
     *  # TODO
     *  - Performance Improvement: Only store the localId for UUAID.
     *  - Is `Identity` safe enough here?
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '5ee65d59f800ee5f3a909ccd908d4aed069c199580d0e5d85119ba9058aadce7'
    }

    /**
     *  # TODO
     *  - Performance Improvement: Only store the localId for UUAID.
     *  - Is `Identity` safe enough here?
     */
    get asEfinityV1(): MultiAssetsNonFungibleBalancesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  # TODO
 *  - Performance Improvement: Only store the localId for UUAID.
 *  - Is `Identity` safe enough here?
 */
export interface MultiAssetsNonFungibleBalancesStorageEfinityV1 {
    get(key1: Uint8Array, key2: bigint, key3: number): Promise<efinityV1.Range[]>
    getAll(): Promise<efinityV1.Range[][]>
    getMany(keys: [Uint8Array, bigint, number][]): Promise<efinityV1.Range[][]>
    getKeys(): Promise<[Uint8Array, bigint, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, number][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, number][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: number): Promise<[Uint8Array, bigint, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: number): AsyncIterable<[Uint8Array, bigint, number][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, number], v: efinityV1.Range[]][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, number], v: efinityV1.Range[]][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, number], v: efinityV1.Range[]][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: number): Promise<[k: [Uint8Array, bigint, number], v: efinityV1.Range[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, number], v: efinityV1.Range[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, number], v: efinityV1.Range[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, number], v: efinityV1.Range[]][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: number): AsyncIterable<[k: [Uint8Array, bigint, number], v: efinityV1.Range[]][]>
}

export class MultiAssetsOperatorExtApprovalsForAllStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssetsOperatorExt'
    }

    protected getName() {
        return 'ApprovalsForAll'
    }

    /**
     *  Approvals for all
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '179a175e3ec7957b6b232c7168b31beef93d19748947c1ccaa4a43ca2ae0189a'
    }

    /**
     *  Approvals for all
     */
    get asEfinityV1(): MultiAssetsOperatorExtApprovalsForAllStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Approvals for all
 */
export interface MultiAssetsOperatorExtApprovalsForAllStorageEfinityV1 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(efinityV1.Expiration | undefined)>
    getAll(): Promise<efinityV1.Expiration[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(efinityV1.Expiration | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: efinityV1.Expiration][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV1.Expiration][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV1.Expiration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV1.Expiration][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV1.Expiration][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV1.Expiration][]>
}

export class MultiAssetsOperatorExtAssetApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssetsOperatorExt'
    }

    protected getName() {
        return 'AssetApprovals'
    }

    /**
     *  Approvals for assets
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '0970fdc94ea8324d89cd7f326d002c4fdfba484ba1b879331d1fb596049d97c6'
    }

    /**
     *  Approvals for assets
     */
    get asEfinityV1(): MultiAssetsOperatorExtAssetApprovalsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Approvals for assets
 */
export interface MultiAssetsOperatorExtAssetApprovalsStorageEfinityV1 {
    get(key1: Uint8Array, key2: Uint8Array, key3: bigint): Promise<(efinityV1.Expiration | undefined)>
    getAll(): Promise<efinityV1.Expiration[]>
    getMany(keys: [Uint8Array, Uint8Array, bigint][]): Promise<(efinityV1.Expiration | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint][]>
    getKeys(key1: Uint8Array, key2: Uint8Array, key3: bigint): Promise<[Uint8Array, Uint8Array, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array, key3: bigint): AsyncIterable<[Uint8Array, Uint8Array, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array, bigint], v: efinityV1.Expiration][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array, bigint], v: efinityV1.Expiration][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array, bigint], v: efinityV1.Expiration][]>
    getPairs(key1: Uint8Array, key2: Uint8Array, key3: bigint): Promise<[k: [Uint8Array, Uint8Array, bigint], v: efinityV1.Expiration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array, bigint], v: efinityV1.Expiration][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array, bigint], v: efinityV1.Expiration][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array, bigint], v: efinityV1.Expiration][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array, key3: bigint): AsyncIterable<[k: [Uint8Array, Uint8Array, bigint], v: efinityV1.Expiration][]>
}

export class MultiAssetsOperatorExtTokenApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiAssetsOperatorExt'
    }

    protected getName() {
        return 'TokenApprovals'
    }

    /**
     *  Approvals for tokens
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'fa08d00250edbdcb0238ab699dc35abfbfeba7b95bae0583502fe52eedc7bf1c'
    }

    /**
     *  Approvals for tokens
     */
    get asEfinityV1(): MultiAssetsOperatorExtTokenApprovalsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Approvals for tokens
 */
export interface MultiAssetsOperatorExtTokenApprovalsStorageEfinityV1 {
    get(key1: Uint8Array, key2: Uint8Array, key3: bigint, key4: number): Promise<(efinityV1.Approval | undefined)>
    getAll(): Promise<efinityV1.Approval[]>
    getMany(keys: [Uint8Array, Uint8Array, bigint, number][]): Promise<(efinityV1.Approval | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array, bigint, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint, number][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint, number][]>
    getKeys(key1: Uint8Array, key2: Uint8Array, key3: bigint): Promise<[Uint8Array, Uint8Array, bigint, number][]>
    getKeys(key1: Uint8Array, key2: Uint8Array, key3: bigint, key4: number): Promise<[Uint8Array, Uint8Array, bigint, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array, bigint, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array, bigint, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array, bigint, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array, key3: bigint): AsyncIterable<[Uint8Array, Uint8Array, bigint, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array, key3: bigint, key4: number): AsyncIterable<[Uint8Array, Uint8Array, bigint, number][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
    getPairs(key1: Uint8Array, key2: Uint8Array, key3: bigint): Promise<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
    getPairs(key1: Uint8Array, key2: Uint8Array, key3: bigint, key4: number): Promise<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array, key3: bigint): AsyncIterable<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array, key3: bigint, key4: number): AsyncIterable<[k: [Uint8Array, Uint8Array, bigint, number], v: efinityV1.Approval][]>
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
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '560c8ffce9be2f673615d006ac6747641630ed7dac4f7ce3edd1fbeb2f2e8c13'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asEfinityV3012(): MultiTokensAssetIdsByLocationStorageEfinityV3012 {
        assert(this.isEfinityV3012)
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
export interface MultiTokensAssetIdsByLocationStorageEfinityV3012 {
    get(key: efinityV3012.V1MultiLocation): Promise<(efinityV3012.AssetId | undefined)>
    getAll(): Promise<efinityV3012.AssetId[]>
    getMany(keys: efinityV3012.V1MultiLocation[]): Promise<(efinityV3012.AssetId | undefined)[]>
    getKeys(): Promise<efinityV3012.V1MultiLocation[]>
    getKeys(key: efinityV3012.V1MultiLocation): Promise<efinityV3012.V1MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV3012.V1MultiLocation[]>
    getKeysPaged(pageSize: number, key: efinityV3012.V1MultiLocation): AsyncIterable<efinityV3012.V1MultiLocation[]>
    getPairs(): Promise<[k: efinityV3012.V1MultiLocation, v: efinityV3012.AssetId][]>
    getPairs(key: efinityV3012.V1MultiLocation): Promise<[k: efinityV3012.V1MultiLocation, v: efinityV3012.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV3012.V1MultiLocation, v: efinityV3012.AssetId][]>
    getPairsPaged(pageSize: number, key: efinityV3012.V1MultiLocation): AsyncIterable<[k: efinityV3012.V1MultiLocation, v: efinityV3012.AssetId][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'a746a93405e250d7e804277de85e59649a8d0f26dcdbc38249cee2190785886d'
    }

    /**
     *  Metadata of collections and tokens.
     */
    get asEfinityV2(): MultiTokensAttributesStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Metadata of collections and tokens.
 */
export interface MultiTokensAttributesStorageEfinityV2 {
    get(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<(efinityV2.Attribute | undefined)>
    getAll(): Promise<efinityV2.Attribute[]>
    getMany(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<(efinityV2.Attribute | undefined)[]>
    getKeys(): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined)): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getPairs(): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV2.Attribute][]>
    getPairs(key1: bigint): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV2.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined)): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV2.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV2.Attribute][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV2.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV2.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV2.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: efinityV2.Attribute][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'b46672e82d7bfd0dfb77b459f54edcb3814fab36fcd1e60c5702769a7fd5b155'
    }

    /**
     *  Stores information for an account per collection
     */
    get asEfinityV2(): MultiTokensCollectionAccountsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Stores information for an account per collection
 */
export interface MultiTokensCollectionAccountsStorageEfinityV2 {
    get(key1: bigint, key2: Uint8Array): Promise<(efinityV2.CollectionAccount | undefined)>
    getAll(): Promise<efinityV2.CollectionAccount[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(efinityV2.CollectionAccount | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: efinityV2.CollectionAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: efinityV2.CollectionAccount][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: efinityV2.CollectionAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: efinityV2.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: efinityV2.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: efinityV2.CollectionAccount][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '796cee53b5b0994fbc828ea8d49c6ffd793ecd23b4c7a29bd969e059778d89f3'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get asEfinityV2(): MultiTokensCollectionsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'e505bb38c2f05501278271d4d92422c32c38f8976d079eddae5a656ea2e00d3e'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get asEfinityV3000(): MultiTokensCollectionsStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  The collections in existence and their ownership details.
 */
export interface MultiTokensCollectionsStorageEfinityV2 {
    get(key: bigint): Promise<(efinityV2.Collection | undefined)>
    getAll(): Promise<efinityV2.Collection[]>
    getMany(keys: bigint[]): Promise<(efinityV2.Collection | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: efinityV2.Collection][]>
    getPairs(key: bigint): Promise<[k: bigint, v: efinityV2.Collection][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: efinityV2.Collection][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: efinityV2.Collection][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface MultiTokensCollectionsStorageEfinityV3000 {
    get(key: bigint): Promise<(efinityV3000.Collection | undefined)>
    getAll(): Promise<efinityV3000.Collection[]>
    getMany(keys: bigint[]): Promise<(efinityV3000.Collection | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: efinityV3000.Collection][]>
    getPairs(key: bigint): Promise<[k: bigint, v: efinityV3000.Collection][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: efinityV3000.Collection][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: efinityV3000.Collection][]>
}

export class MultiTokensIdleOperationsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'IdleOperations'
    }

    /**
     *  Pending operations to be executed on `Hooks::on_idle`.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '3eb5f23bd85218994c65072029a61dbd467eb712c53d9f7e5dfa83a6dc8687f3'
    }

    /**
     *  Pending operations to be executed on `Hooks::on_idle`.
     */
    get asEfinityV2(): MultiTokensIdleOperationsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  Pending operations to be executed on `Hooks::on_idle`.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'b90452918976da2c388676316009c640f822e1e429f7262cddef8c96a87aa496'
    }

    /**
     *  Pending operations to be executed on `Hooks::on_idle`.
     */
    get asEfinityV3000(): MultiTokensIdleOperationsStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  Pending operations to be executed on `Hooks::on_idle`.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'ec6db42c13dba4897e1ce4c4d70fe8bb97c8e9d28f3b74c9fb0c50aa25ec55e1'
    }

    /**
     *  Pending operations to be executed on `Hooks::on_idle`.
     */
    get asEfinityV3012(): MultiTokensIdleOperationsStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  Pending operations to be executed on `Hooks::on_idle`.
 */
export interface MultiTokensIdleOperationsStorageEfinityV2 {
    get(): Promise<efinityV2.WeightedIdleOperation[]>
}

/**
 *  Pending operations to be executed on `Hooks::on_idle`.
 */
export interface MultiTokensIdleOperationsStorageEfinityV3000 {
    get(): Promise<efinityV3000.WeightedIdleOperation[]>
}

/**
 *  Pending operations to be executed on `Hooks::on_idle`.
 */
export interface MultiTokensIdleOperationsStorageEfinityV3012 {
    get(): Promise<efinityV3012.WeightedIdleOperation[]>
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
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  Stores last iterated key for migrations. Used by multi block migrations
     */
    get asEfinityV3012(): MultiTokensLastIteratedMigrationKeyStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  Stores last iterated key for migrations. Used by multi block migrations
 */
export interface MultiTokensLastIteratedMigrationKeyStorageEfinityV3012 {
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
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'b774eae9b764e58709b24f1cf13f47feebc5721c1a9d4e0ed22e4d0aaff8a169'
    }

    /**
     *  Status of the current multi-block migration
     */
    get asEfinityV3012(): MultiTokensMigrationStatusStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  Status of the current multi-block migration
 */
export interface MultiTokensMigrationStatusStorageEfinityV3012 {
    get(): Promise<efinityV3012.MigrationStage>
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
    get isV500(): boolean {
        return this.getTypeHash() === '63315d583f765c75d71965bc03cd236f3e328b0d0c36349716dd7e18cb40721d'
    }

    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     * 
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    get asV500(): MultiTokensMigrationsStorageV500 {
        assert(this.isV500)
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
export interface MultiTokensMigrationsStorageV500 {
    get(key: Uint8Array): Promise<(v500.Migration | undefined)>
    getAll(): Promise<v500.Migration[]>
    getMany(keys: Uint8Array[]): Promise<(v500.Migration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.Migration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.Migration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.Migration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.Migration][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Sequencer for collectionID generators.
     */
    get asEfinityV2(): MultiTokensNextCollectionIdStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Sequencer for collectionID generators.
 */
export interface MultiTokensNextCollectionIdStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '89f39f41ed2671d2c69225fcbd88510dab73617db2599eb112427615192fa223'
    }

    /**
     *  Accounts per token
     */
    get asEfinityV2(): MultiTokensTokenAccountsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  Accounts per token
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === 'aa9987301d7154519df0fc59a4664d747676b382efcba3db6f30f66eda406862'
    }

    /**
     *  Accounts per token
     */
    get asEfinityV3(): MultiTokensTokenAccountsStorageEfinityV3 {
        assert(this.isEfinityV3)
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
export interface MultiTokensTokenAccountsStorageEfinityV2 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(efinityV2.TokenAccount | undefined)>
    getAll(): Promise<efinityV2.TokenAccount[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(efinityV2.TokenAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: efinityV2.TokenAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: efinityV2.TokenAccount][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: efinityV2.TokenAccount][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: efinityV2.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: efinityV2.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: efinityV2.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: efinityV2.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: efinityV2.TokenAccount][]>
}

/**
 *  Accounts per token
 */
export interface MultiTokensTokenAccountsStorageEfinityV3 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(efinityV3.TokenAccount | undefined)>
    getAll(): Promise<efinityV3.TokenAccount[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(efinityV3.TokenAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: efinityV3.TokenAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: efinityV3.TokenAccount][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: efinityV3.TokenAccount][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: efinityV3.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: efinityV3.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: efinityV3.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: efinityV3.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: efinityV3.TokenAccount][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '4eac4ac19f06319a6cc826f78f0b579a3c691cb8f1cdf61c93a535676b73abed'
    }

    /**
     *  Tokens storage
     */
    get asEfinityV2(): MultiTokensTokensStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  Tokens storage
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'a212292bd554690a043da4ee9ec0a79e4b8384cb8b35b8038a2d72f85bf5d0bc'
    }

    /**
     *  Tokens storage
     */
    get asEfinityV3000(): MultiTokensTokensStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  Tokens storage
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '1f0fc6f95d09c4195cdaa7e949e1b978130df91d5db17a5653ccc7d3bf38bf98'
    }

    /**
     *  Tokens storage
     */
    get asEfinityV3012(): MultiTokensTokensStorageEfinityV3012 {
        assert(this.isEfinityV3012)
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
export interface MultiTokensTokensStorageEfinityV2 {
    get(key1: bigint, key2: bigint): Promise<(efinityV2.Token | undefined)>
    getAll(): Promise<efinityV2.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(efinityV2.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: efinityV2.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: efinityV2.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: efinityV2.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: efinityV2.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: efinityV2.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: efinityV2.Token][]>
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageEfinityV3000 {
    get(key1: bigint, key2: bigint): Promise<(efinityV3000.Token | undefined)>
    getAll(): Promise<efinityV3000.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(efinityV3000.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: efinityV3000.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: efinityV3000.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: efinityV3000.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: efinityV3000.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: efinityV3000.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: efinityV3000.Token][]>
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageEfinityV3012 {
    get(key1: bigint, key2: bigint): Promise<(efinityV3012.Token | undefined)>
    getAll(): Promise<efinityV3012.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(efinityV3012.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: efinityV3012.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: efinityV3012.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: efinityV3012.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: efinityV3012.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: efinityV3012.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: efinityV3012.Token][]>
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

export class MultisigCallsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Calls'
    }

    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
    }

    get asEfinityV2(): MultisigCallsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

export interface MultisigCallsStorageEfinityV2 {
    get(key: Uint8Array): Promise<([Uint8Array, Uint8Array, bigint] | undefined)>
    getAll(): Promise<[Uint8Array, Uint8Array, bigint][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, Uint8Array, bigint]][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asEfinityV2(): MultisigMultisigsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageEfinityV2 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(efinityV2.Multisig | undefined)>
    getAll(): Promise<efinityV2.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(efinityV2.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: efinityV2.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV2.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: efinityV2.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV2.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV2.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: efinityV2.Multisig][]>
}

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isEfinityV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asEfinityV1(): ParachainInfoParachainIdStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asEfinityV1(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asEfinityV1(): ParachainSystemAuthorizedUpgradeStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageEfinityV1 {
    get(): Promise<(Uint8Array | undefined)>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asEfinityV2(): ParachainSystemCustomValidationHeadDataStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageEfinityV2 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asEfinityV1(): ParachainSystemDidSetValidationCodeStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'e7770235be9d14ed134fc6d0effb398cdedbf1010adc4f3555004a1d10de49d3'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asEfinityV1(): ParachainSystemHostConfigurationStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isEfinityV2(): boolean {
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
    get asEfinityV2(): ParachainSystemHostConfigurationStorageEfinityV2 {
        assert(this.isEfinityV2)
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
export interface ParachainSystemHostConfigurationStorageEfinityV1 {
    get(): Promise<(efinityV1.V1AbridgedHostConfiguration | undefined)>
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageEfinityV2 {
    get(): Promise<(efinityV2.V1AbridgedHostConfiguration | undefined)>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asEfinityV1(): ParachainSystemHrmpOutboundMessagesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageEfinityV1 {
    get(): Promise<efinityV1.OutboundHrmpMessage[]>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asEfinityV1(): ParachainSystemHrmpWatermarkStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asEfinityV1(): ParachainSystemLastDmqMqcHeadStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asEfinityV1(): ParachainSystemLastHrmpMqcHeadsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageEfinityV1 {
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get asEfinityV3000(): ParachainSystemLastRelayChainBlockNumberStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface ParachainSystemLastRelayChainBlockNumberStorageEfinityV3000 {
    get(): Promise<number>
}

export class ParachainSystemLastUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastUpgrade'
    }

    /**
     *  The last relay parent block number at which we signalled the code upgrade.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The last relay parent block number at which we signalled the code upgrade.
     */
    get asEfinityV1(): ParachainSystemLastUpgradeStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The last relay parent block number at which we signalled the code upgrade.
 */
export interface ParachainSystemLastUpgradeStorageEfinityV1 {
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
     *  New validation code that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  New validation code that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asEfinityV1(): ParachainSystemNewValidationCodeStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  New validation code that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface ParachainSystemNewValidationCodeStorageEfinityV1 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemPendingRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingRelayChainBlockNumber'
    }

    /**
     *  We need to store the new validation function for the span between
     *  setting it and applying it. If it has a
     *  value, then [`PendingValidationCode`] must have a real value, and
     *  together will coordinate the block number where the upgrade will happen.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  We need to store the new validation function for the span between
     *  setting it and applying it. If it has a
     *  value, then [`PendingValidationCode`] must have a real value, and
     *  together will coordinate the block number where the upgrade will happen.
     */
    get asEfinityV1(): ParachainSystemPendingRelayChainBlockNumberStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  We need to store the new validation function for the span between
 *  setting it and applying it. If it has a
 *  value, then [`PendingValidationCode`] must have a real value, and
 *  together will coordinate the block number where the upgrade will happen.
 */
export interface ParachainSystemPendingRelayChainBlockNumberStorageEfinityV1 {
    get(): Promise<(number | undefined)>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asEfinityV1(): ParachainSystemPendingUpwardMessagesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageEfinityV1 {
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
     *  The new validation function we will upgrade to when the relay chain
     *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
     *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    /**
     *  The new validation function we will upgrade to when the relay chain
     *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
     *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
     */
    get asEfinityV1(): ParachainSystemPendingValidationCodeStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The new validation function we will upgrade to when the relay chain
 *  reaches [`PendingRelayChainBlockNumber`]. A real validation function must
 *  exist here as long as [`PendingRelayChainBlockNumber`] is set.
 */
export interface ParachainSystemPendingValidationCodeStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asEfinityV1(): ParachainSystemProcessedDownwardMessagesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageEfinityV1 {
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
    get isEfinityV2(): boolean {
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
    get asEfinityV2(): ParachainSystemRelayStateProofStorageEfinityV2 {
        assert(this.isEfinityV2)
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
export interface ParachainSystemRelayStateProofStorageEfinityV2 {
    get(): Promise<(efinityV2.StorageProof | undefined)>
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
    get isEfinityV1(): boolean {
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
    get asEfinityV1(): ParachainSystemRelevantMessagingStateStorageEfinityV1 {
        assert(this.isEfinityV1)
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
export interface ParachainSystemRelevantMessagingStateStorageEfinityV1 {
    get(): Promise<(efinityV1.MessagingStateSnapshot | undefined)>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asEfinityV1(): ParachainSystemReservedDmpWeightOverrideStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asEfinityV3000(): ParachainSystemReservedDmpWeightOverrideStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asEfinityV3012(): ParachainSystemReservedDmpWeightOverrideStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageEfinityV1 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageEfinityV3000 {
    get(): Promise<(efinityV3000.Weight | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageEfinityV3012 {
    get(): Promise<(efinityV3012.Weight | undefined)>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asEfinityV1(): ParachainSystemReservedXcmpWeightOverrideStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asEfinityV3000(): ParachainSystemReservedXcmpWeightOverrideStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asEfinityV3012(): ParachainSystemReservedXcmpWeightOverrideStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageEfinityV1 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageEfinityV3000 {
    get(): Promise<(efinityV3000.Weight | undefined)>
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageEfinityV3012 {
    get(): Promise<(efinityV3012.Weight | undefined)>
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
    get isEfinityV2(): boolean {
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
    get asEfinityV2(): ParachainSystemUpgradeRestrictionSignalStorageEfinityV2 {
        assert(this.isEfinityV2)
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
export interface ParachainSystemUpgradeRestrictionSignalStorageEfinityV2 {
    get(): Promise<(efinityV2.V1UpgradeRestriction | undefined)>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asEfinityV1(): ParachainSystemUpwardMessagesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageEfinityV1 {
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
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     */
    get asEfinityV1(): ParachainSystemValidationDataStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 */
export interface ParachainSystemValidationDataStorageEfinityV1 {
    get(): Promise<(efinityV1.V1PersistedValidationData | undefined)>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asEfinityV3000(): PolkadotXcmAssetTrapsStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageEfinityV3000 {
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asEfinityV3000(): PolkadotXcmCurrentMigrationStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageEfinityV3000 {
    get(): Promise<(efinityV3000.VersionMigrationStage | undefined)>
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
    get isV500(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asV500(): PolkadotXcmLockedFungiblesStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface PolkadotXcmLockedFungiblesStorageV500 {
    get(key: Uint8Array): Promise<([bigint, v500.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, v500.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, v500.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, v500.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, v500.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, v500.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, v500.VersionedMultiLocation][]][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
    }

    /**
     *  The ongoing queries.
     */
    get asEfinityV3000(): PolkadotXcmQueriesStorageEfinityV3000 {
        assert(this.isEfinityV3000)
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
export interface PolkadotXcmQueriesStorageEfinityV3000 {
    get(key: bigint): Promise<(efinityV3000.QueryStatus | undefined)>
    getAll(): Promise<efinityV3000.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(efinityV3000.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: efinityV3000.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: efinityV3000.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: efinityV3000.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: efinityV3000.QueryStatus][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asEfinityV3000(): PolkadotXcmQueryCounterStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageEfinityV3000 {
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
    get isV500(): boolean {
        return this.getTypeHash() === '32350375a3f683ddfbcb5dbc0bc4773d1d5aa9c2f1f2e358dced4492be76a541'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV500(): PolkadotXcmRemoteLockedFungiblesStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageV500 {
    get(key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): Promise<(v500.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v500.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v500.VersionedAssetId][]): Promise<(v500.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): Promise<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): AsyncIterable<[number, Uint8Array, v500.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): Promise<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asEfinityV3000(): PolkadotXcmSafeXcmVersionStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageEfinityV3000 {
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asEfinityV3000(): PolkadotXcmSupportedVersionStorageEfinityV3000 {
        assert(this.isEfinityV3000)
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
export interface PolkadotXcmSupportedVersionStorageEfinityV3000 {
    get(key1: number, key2: efinityV3000.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, efinityV3000.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, efinityV3000.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, efinityV3000.VersionedMultiLocation][]>
    getKeys(key1: number, key2: efinityV3000.VersionedMultiLocation): Promise<[number, efinityV3000.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, efinityV3000.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, efinityV3000.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: efinityV3000.VersionedMultiLocation): AsyncIterable<[number, efinityV3000.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, efinityV3000.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, efinityV3000.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: efinityV3000.VersionedMultiLocation): Promise<[k: [number, efinityV3000.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, efinityV3000.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, efinityV3000.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: efinityV3000.VersionedMultiLocation): AsyncIterable<[k: [number, efinityV3000.VersionedMultiLocation], v: number][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asEfinityV3000(): PolkadotXcmVersionDiscoveryQueueStorageEfinityV3000 {
        assert(this.isEfinityV3000)
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
export interface PolkadotXcmVersionDiscoveryQueueStorageEfinityV3000 {
    get(): Promise<[efinityV3000.VersionedMultiLocation, number][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asEfinityV3000(): PolkadotXcmVersionNotifiersStorageEfinityV3000 {
        assert(this.isEfinityV3000)
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
export interface PolkadotXcmVersionNotifiersStorageEfinityV3000 {
    get(key1: number, key2: efinityV3000.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, efinityV3000.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, efinityV3000.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, efinityV3000.VersionedMultiLocation][]>
    getKeys(key1: number, key2: efinityV3000.VersionedMultiLocation): Promise<[number, efinityV3000.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, efinityV3000.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, efinityV3000.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: efinityV3000.VersionedMultiLocation): AsyncIterable<[number, efinityV3000.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, efinityV3000.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, efinityV3000.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: efinityV3000.VersionedMultiLocation): Promise<[k: [number, efinityV3000.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, efinityV3000.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, efinityV3000.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: efinityV3000.VersionedMultiLocation): AsyncIterable<[k: [number, efinityV3000.VersionedMultiLocation], v: bigint][]>
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asEfinityV3000(): PolkadotXcmVersionNotifyTargetsStorageEfinityV3000 {
        assert(this.isEfinityV3000)
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
export interface PolkadotXcmVersionNotifyTargetsStorageEfinityV3000 {
    get(key1: number, key2: efinityV3000.VersionedMultiLocation): Promise<([bigint, bigint, number] | undefined)>
    getAll(): Promise<[bigint, bigint, number][]>
    getMany(keys: [number, efinityV3000.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]>
    getKeys(): Promise<[number, efinityV3000.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, efinityV3000.VersionedMultiLocation][]>
    getKeys(key1: number, key2: efinityV3000.VersionedMultiLocation): Promise<[number, efinityV3000.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, efinityV3000.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, efinityV3000.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: efinityV3000.VersionedMultiLocation): AsyncIterable<[number, efinityV3000.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, efinityV3000.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number): Promise<[k: [number, efinityV3000.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairs(key1: number, key2: efinityV3000.VersionedMultiLocation): Promise<[k: [number, efinityV3000.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, efinityV3000.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, efinityV3000.VersionedMultiLocation], v: [bigint, bigint, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: efinityV3000.VersionedMultiLocation): AsyncIterable<[k: [number, efinityV3000.VersionedMultiLocation], v: [bigint, bigint, number]][]>
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

export class PoolsNextPoolIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Pools'
    }

    protected getName() {
        return 'NextPoolId'
    }

    get isEfinityV1(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    get asEfinityV1(): PoolsNextPoolIdStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

export interface PoolsNextPoolIdStorageEfinityV1 {
    get(): Promise<bigint>
}

export class PoolsPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'Pools'
    }

    protected getName() {
        return 'Pools'
    }

    get isEfinityV1(): boolean {
        return this.getTypeHash() === '2d467a041f3422f5668753c5fbac435e78eff005564666c1904628ef2d9ee7fd'
    }

    get asEfinityV1(): PoolsPoolsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  Information about the pools
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === 'c34074cd3c393bbbf499a52d01b17aab7f4b9ef8d114a6f1153dba4c76f48632'
    }

    /**
     *  Information about the pools
     */
    get asEfinityV3(): PoolsPoolsStorageEfinityV3 {
        assert(this.isEfinityV3)
        return this as any
    }
}

export interface PoolsPoolsStorageEfinityV1 {
    get(key: bigint): Promise<(efinityV1.Pool | undefined)>
    getAll(): Promise<efinityV1.Pool[]>
    getMany(keys: bigint[]): Promise<(efinityV1.Pool | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: efinityV1.Pool][]>
    getPairs(key: bigint): Promise<[k: bigint, v: efinityV1.Pool][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: efinityV1.Pool][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: efinityV1.Pool][]>
}

/**
 *  Information about the pools
 */
export interface PoolsPoolsStorageEfinityV3 {
    get(): Promise<[Uint8Array, efinityV3.Pool][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asEfinityV2(): PreimagePreimageForStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asEfinityV3012(): PreimagePreimageForStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageEfinityV2 {
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

export interface PreimagePreimageForStorageEfinityV3012 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asEfinityV2(): PreimageStatusForStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asEfinityV3012(): PreimageStatusForStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageEfinityV2 {
    get(key: Uint8Array): Promise<(efinityV2.RequestStatus | undefined)>
    getAll(): Promise<efinityV2.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV2.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV2.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV2.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV2.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV2.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageEfinityV3012 {
    get(key: Uint8Array): Promise<(efinityV3012.RequestStatus | undefined)>
    getAll(): Promise<efinityV3012.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3012.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3012.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3012.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3012.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3012.RequestStatus][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '730fbc487a2049d5cff6d2b2a8afba7cea5dd33cde7f6fbac0d2c4db9f0765a0'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asEfinityV2(): SchedulerAgendaStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === '5aff581e546f5198a9e72bd3877d9b9840a6e12e466e332094cbb8ca8d06c91a'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asEfinityV3(): SchedulerAgendaStorageEfinityV3 {
        assert(this.isEfinityV3)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '610cd949ab174bd8b298e376210be6cc1d03634ec5d606f4cba97007dd28d8b2'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asEfinityV3000(): SchedulerAgendaStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'a3e055e5b1bc78a9c0bf07ec2e12a6e84ef0e6040db9b7d685a8c82d052bd87e'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asEfinityV3012(): SchedulerAgendaStorageEfinityV3012 {
        assert(this.isEfinityV3012)
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
export interface SchedulerAgendaStorageEfinityV2 {
    get(key: number): Promise<(efinityV2.ScheduledV3 | undefined)[]>
    getAll(): Promise<(efinityV2.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(efinityV2.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (efinityV2.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (efinityV2.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (efinityV2.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (efinityV2.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageEfinityV3 {
    get(key: number): Promise<(efinityV3.ScheduledV3 | undefined)[]>
    getAll(): Promise<(efinityV3.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(efinityV3.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (efinityV3.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (efinityV3.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (efinityV3.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (efinityV3.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageEfinityV3000 {
    get(key: number): Promise<(efinityV3000.ScheduledV3 | undefined)[]>
    getAll(): Promise<(efinityV3000.ScheduledV3 | undefined)[][]>
    getMany(keys: number[]): Promise<(efinityV3000.ScheduledV3 | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (efinityV3000.ScheduledV3 | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (efinityV3000.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (efinityV3000.ScheduledV3 | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (efinityV3000.ScheduledV3 | undefined)[]][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageEfinityV3012 {
    get(key: number): Promise<(efinityV3012.Scheduled | undefined)[]>
    getAll(): Promise<(efinityV3012.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(efinityV3012.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (efinityV3012.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (efinityV3012.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (efinityV3012.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (efinityV3012.Scheduled | undefined)[]][]>
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

    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asEfinityV3012(): SchedulerIncompleteSinceStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageEfinityV3012 {
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
     *  Lookup from identity to the block number and index of the task.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
    }

    /**
     *  Lookup from identity to the block number and index of the task.
     */
    get asEfinityV2(): SchedulerLookupStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asEfinityV3012(): SchedulerLookupStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  Lookup from identity to the block number and index of the task.
 */
export interface SchedulerLookupStorageEfinityV2 {
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

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageEfinityV3012 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asEfinityV2(): SessionCurrentIndexStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asEfinityV2(): SessionDisabledValidatorsStorageEfinityV2 {
        assert(this.isEfinityV2)
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
export interface SessionDisabledValidatorsStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asEfinityV2(): SessionKeyOwnerStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'ae0c60ac4ee2dd838f17d6007db841839476f10123e4729d4b0b8f2602afa357'
    }

    /**
     *  The next session keys for a validator.
     */
    get asEfinityV2(): SessionNextKeysStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  The next session keys for a validator.
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === '2f670cd584e15d58095cb717f2ec5413369ec61a1d09b68212a36ac0523e456b'
    }

    /**
     *  The next session keys for a validator.
     */
    get asEfinityV3(): SessionNextKeysStorageEfinityV3 {
        assert(this.isEfinityV3)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageEfinityV2 {
    get(key: Uint8Array): Promise<(efinityV2.SessionKeys | undefined)>
    getAll(): Promise<efinityV2.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV2.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV2.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV2.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV2.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV2.SessionKeys][]>
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageEfinityV3 {
    get(key: Uint8Array): Promise<(efinityV3.SessionKeys | undefined)>
    getAll(): Promise<efinityV3.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3.SessionKeys][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asEfinityV2(): SessionQueuedChangedStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '0a46f52a4d2fbd54bb31da7161556814e66b469df7c14975323784b6b294b5e7'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asEfinityV2(): SessionQueuedKeysStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === '932bfec933e0f3e31ccbf8c6fe92f26e726dddd47f6a44fd88e96d56054aa98a'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asEfinityV3(): SessionQueuedKeysStorageEfinityV3 {
        assert(this.isEfinityV3)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageEfinityV2 {
    get(): Promise<[Uint8Array, efinityV2.SessionKeys][]>
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageEfinityV3 {
    get(): Promise<[Uint8Array, efinityV3.SessionKeys][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asEfinityV2(): SessionValidatorsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageEfinityV2 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asEfinityV1(): SudoKeyStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asEfinityV2(): SudoKeyStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageEfinityV1 {
    get(): Promise<Uint8Array>
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageEfinityV2 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asEfinityV1(): SystemAccountStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageEfinityV1 {
    get(key: Uint8Array): Promise<efinityV1.AccountInfo>
    getAll(): Promise<efinityV1.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<efinityV1.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV1.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV1.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV1.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV1.AccountInfo][]>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asEfinityV1(): SystemAllExtrinsicsLenStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asEfinityV1(): SystemBlockHashStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
    }

    /**
     *  The current weight for the block.
     */
    get asEfinityV1(): SystemBlockWeightStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'd35f09c6f3fd2f6e93d9006f364b5b6e91ce1207594e51247070364731dba424'
    }

    /**
     *  The current weight for the block.
     */
    get asEfinityV3000(): SystemBlockWeightStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  The current weight for the block.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asEfinityV3012(): SystemBlockWeightStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageEfinityV1 {
    get(): Promise<efinityV1.PerDispatchClass>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageEfinityV3000 {
    get(): Promise<efinityV3000.PerDispatchClass>
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageEfinityV3012 {
    get(): Promise<efinityV3012.PerDispatchClass>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '08ab0f1eb08eb281a0be5123646d1a04bf4254218b3b8617ed26e880f8eaa52f'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asEfinityV1(): SystemDigestStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asEfinityV2(): SystemDigestStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageEfinityV1 {
    get(): Promise<efinityV1.Digest>
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageEfinityV2 {
    get(): Promise<efinityV2.Digest>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asEfinityV1(): SystemEventCountStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
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
    get asEfinityV1(): SystemEventTopicsStorageEfinityV1 {
        assert(this.isEfinityV1)
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
export interface SystemEventTopicsStorageEfinityV1 {
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
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'e2e27bde8fdf9bad9ddddc0fc285b7ef62cff712fef3d74a66c498bbb7203afc'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asEfinityV1(): SystemEventsStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '2d3b4f07367b61246f48b21ccc8d9644239a100a17c4470d93e7e45336f3e657'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asEfinityV2(): SystemEventsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === '251cf5048539bec1a87a7a8bddfdce3356a338d567ecb5f72ac661124df9a416'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
     *  from within the runtime.
     */
    get asEfinityV3(): SystemEventsStorageEfinityV3 {
        assert(this.isEfinityV3)
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
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === '69f53ee0fadfcaaecc22becb6a891969074329e9c2ac0f84a139fa4a261bf240'
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
    get asEfinityV3000(): SystemEventsStorageEfinityV3000 {
        assert(this.isEfinityV3000)
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
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === 'f1c10ad2315d1a47cdeb65427d4c697e0ede1e918e4eeb5abcc23df877b35d7a'
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
    get asEfinityV3012(): SystemEventsStorageEfinityV3012 {
        assert(this.isEfinityV3012)
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
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageEfinityV1 {
    get(): Promise<efinityV1.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageEfinityV2 {
    get(): Promise<efinityV2.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
 *  from within the runtime.
 */
export interface SystemEventsStorageEfinityV3 {
    get(): Promise<efinityV3.EventRecord[]>
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
export interface SystemEventsStorageEfinityV3000 {
    get(): Promise<efinityV3000.EventRecord[]>
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
export interface SystemEventsStorageEfinityV3012 {
    get(): Promise<efinityV3012.EventRecord[]>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asEfinityV1(): SystemExecutionPhaseStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageEfinityV1 {
    get(): Promise<(efinityV1.Phase | undefined)>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asEfinityV1(): SystemExtrinsicCountStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asEfinityV1(): SystemExtrinsicDataStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asEfinityV1(): SystemLastRuntimeUpgradeStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageEfinityV1 {
    get(): Promise<(efinityV1.LastRuntimeUpgradeInfo | undefined)>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asEfinityV1(): SystemNumberStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asEfinityV1(): SystemParentHashStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asEfinityV1(): SystemUpgradedToTripleRefCountStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asEfinityV1(): SystemUpgradedToU32RefCountStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageEfinityV1 {
    get(): Promise<boolean>
}

export class TagsAssetIdsByTagIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Tags'
    }

    protected getName() {
        return 'AssetIdsByTagId'
    }

    /**
     *  `AssetId`s by `TagId`
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '984b756ec7a461f556ee62d13d0d6560997b6b3aaef49f21cc965a459038c637'
    }

    /**
     *  `AssetId`s by `TagId`
     */
    get asEfinityV1(): TagsAssetIdsByTagIdStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  `AssetId`s by `TagId`
 */
export interface TagsAssetIdsByTagIdStorageEfinityV1 {
    get(key1: bigint, key2: efinityV1.TypedLocalAssetId): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [bigint, efinityV1.TypedLocalAssetId][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[bigint, efinityV1.TypedLocalAssetId][]>
    getKeys(key1: bigint): Promise<[bigint, efinityV1.TypedLocalAssetId][]>
    getKeys(key1: bigint, key2: efinityV1.TypedLocalAssetId): Promise<[bigint, efinityV1.TypedLocalAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, efinityV1.TypedLocalAssetId][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, efinityV1.TypedLocalAssetId][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: efinityV1.TypedLocalAssetId): AsyncIterable<[bigint, efinityV1.TypedLocalAssetId][]>
    getPairs(): Promise<[k: [bigint, efinityV1.TypedLocalAssetId], v: null][]>
    getPairs(key1: bigint): Promise<[k: [bigint, efinityV1.TypedLocalAssetId], v: null][]>
    getPairs(key1: bigint, key2: efinityV1.TypedLocalAssetId): Promise<[k: [bigint, efinityV1.TypedLocalAssetId], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, efinityV1.TypedLocalAssetId], v: null][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, efinityV1.TypedLocalAssetId], v: null][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: efinityV1.TypedLocalAssetId): AsyncIterable<[k: [bigint, efinityV1.TypedLocalAssetId], v: null][]>
}

export class TagsAssetIdsToRemoveStorage extends StorageBase {
    protected getPrefix() {
        return 'Tags'
    }

    protected getName() {
        return 'AssetIdsToRemove'
    }

    /**
     *  Asset ids that will be removed in on_idle
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'ea36f33059b5bcc22da55bb541aab505ebaf772c088b3f123cba5b1c573baaae'
    }

    /**
     *  Asset ids that will be removed in on_idle
     */
    get asEfinityV1(): TagsAssetIdsToRemoveStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Asset ids that will be removed in on_idle
 */
export interface TagsAssetIdsToRemoveStorageEfinityV1 {
    get(key: efinityV1.TypedLocalAssetId): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: efinityV1.TypedLocalAssetId[]): Promise<(null | undefined)[]>
    getKeys(): Promise<efinityV1.TypedLocalAssetId[]>
    getKeys(key: efinityV1.TypedLocalAssetId): Promise<efinityV1.TypedLocalAssetId[]>
    getKeysPaged(pageSize: number): AsyncIterable<efinityV1.TypedLocalAssetId[]>
    getKeysPaged(pageSize: number, key: efinityV1.TypedLocalAssetId): AsyncIterable<efinityV1.TypedLocalAssetId[]>
    getPairs(): Promise<[k: efinityV1.TypedLocalAssetId, v: null][]>
    getPairs(key: efinityV1.TypedLocalAssetId): Promise<[k: efinityV1.TypedLocalAssetId, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: efinityV1.TypedLocalAssetId, v: null][]>
    getPairsPaged(pageSize: number, key: efinityV1.TypedLocalAssetId): AsyncIterable<[k: efinityV1.TypedLocalAssetId, v: null][]>
}

export class TagsNextTagIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Tags'
    }

    protected getName() {
        return 'NextTagId'
    }

    /**
     *  Next `TagId` that will be used when a `Tag` is created
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Next `TagId` that will be used when a `Tag` is created
     */
    get asEfinityV1(): TagsNextTagIdStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Next `TagId` that will be used when a `Tag` is created
 */
export interface TagsNextTagIdStorageEfinityV1 {
    get(): Promise<bigint>
}

export class TagsTagIdsByAssetIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Tags'
    }

    protected getName() {
        return 'TagIdsByAssetId'
    }

    /**
     *  `TagId`s by `AssetId`
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'f3dad8d1199217d03fb7a032f1eacfb8377b2891e197008fbb11b326852c82bd'
    }

    /**
     *  `TagId`s by `AssetId`
     */
    get asEfinityV1(): TagsTagIdsByAssetIdStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  `TagId`s by `AssetId`
 */
export interface TagsTagIdsByAssetIdStorageEfinityV1 {
    get(key: bigint): Promise<(bigint[] | undefined)>
    getAll(): Promise<bigint[][]>
    getMany(keys: bigint[]): Promise<(bigint[] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint[]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint[]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint[]][]>
}

export class TagsTagsByIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Tags'
    }

    protected getName() {
        return 'TagsById'
    }

    /**
     *  Tags by `TagId`
     */
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '279f34258579b6e26b1972e4c4f7f17f8bc6f33254823ecdd37eed694135678a'
    }

    /**
     *  Tags by `TagId`
     */
    get asEfinityV1(): TagsTagsByIdStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Tags by `TagId`
 */
export interface TagsTagsByIdStorageEfinityV1 {
    get(key: bigint): Promise<(efinityV1.Tag | undefined)>
    getAll(): Promise<efinityV1.Tag[]>
    getMany(keys: bigint[]): Promise<(efinityV1.Tag | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: efinityV1.Tag][]>
    getPairs(key: bigint): Promise<[k: bigint, v: efinityV1.Tag][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: efinityV1.Tag][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: efinityV1.Tag][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asEfinityV2(): TechnicalCommitteeMembersStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asEfinityV2(): TechnicalCommitteePrimeStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asEfinityV2(): TechnicalCommitteeProposalCountStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '0f3007c68722fd11be8b2174f41f58819d999d19ac6bc66e70c97b8b57b3eb90'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV2(): TechnicalCommitteeProposalOfStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isEfinityV3(): boolean {
        return this.getTypeHash() === '8072ac36972240ef7be53d931291d08dcf2288b6065ce85460cf882dff3d6fbd'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV3(): TechnicalCommitteeProposalOfStorageEfinityV3 {
        assert(this.isEfinityV3)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'a8aad93a48825f59eda8290b5f376abaad23ad8d117ace81aed42a2fc9a707f6'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV3000(): TechnicalCommitteeProposalOfStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '206139e5383da57babd738f6be967d820718de2d26b822150cfbe0ef523b7978'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asEfinityV3012(): TechnicalCommitteeProposalOfStorageEfinityV3012 {
        assert(this.isEfinityV3012)
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
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageEfinityV2 {
    get(key: Uint8Array): Promise<(efinityV2.Call | undefined)>
    getAll(): Promise<efinityV2.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV2.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV2.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV2.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV2.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV2.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageEfinityV3 {
    get(key: Uint8Array): Promise<(efinityV3.Call | undefined)>
    getAll(): Promise<efinityV3.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageEfinityV3000 {
    get(key: Uint8Array): Promise<(efinityV3000.Call | undefined)>
    getAll(): Promise<efinityV3000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageEfinityV3012 {
    get(key: Uint8Array): Promise<(efinityV3012.Call | undefined)>
    getAll(): Promise<efinityV3012.Call[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV3012.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV3012.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV3012.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV3012.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV3012.Call][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asEfinityV2(): TechnicalCommitteeProposalsStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asEfinityV2(): TechnicalCommitteeVotingStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageEfinityV2 {
    get(key: Uint8Array): Promise<(efinityV2.Votes | undefined)>
    getAll(): Promise<efinityV2.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(efinityV2.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV2.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV2.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV2.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV2.Votes][]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asEfinityV2(): TechnicalMembershipMembersStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asEfinityV2(): TechnicalMembershipPrimeStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageEfinityV2 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asEfinityV1(): TimestampDidUpdateStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asEfinityV1(): TimestampNowStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageEfinityV1 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asEfinityV1(): TransactionPaymentNextFeeMultiplierStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageEfinityV1 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isEfinityV1(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asEfinityV1(): TransactionPaymentStorageVersionStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageEfinityV1 {
    get(): Promise<efinityV1.Type_223>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'd1025301ffa60f04c50bb1007ecb356d52103dd9c366150de1ba80c6e043ac2f'
    }

    /**
     *  Vesting schedules of an account.
     * 
     *  VestingSchedules: map AccountId => Vec<VestingSchedule>
     */
    get asEfinityV2(): VestingVestingSchedulesStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Vesting schedules of an account.
 * 
 *  VestingSchedules: map AccountId => Vec<VestingSchedule>
 */
export interface VestingVestingSchedulesStorageEfinityV2 {
    get(key: Uint8Array): Promise<efinityV2.VestingSchedule[]>
    getAll(): Promise<efinityV2.VestingSchedule[][]>
    getMany(keys: Uint8Array[]): Promise<efinityV2.VestingSchedule[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: efinityV2.VestingSchedule[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: efinityV2.VestingSchedule[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: efinityV2.VestingSchedule[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: efinityV2.VestingSchedule[]][]>
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
    get isV500(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asV500(): XcmpQueueCounterForOverweightStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface XcmpQueueCounterForOverweightStorageV500 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asEfinityV1(): XcmpQueueInboundXcmpMessagesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '48f3de6a738f03ae3c729fdf2adfbcc7dd58a2d62c1e81c228ac332b7237c8c2'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asEfinityV1(): XcmpQueueInboundXcmpStatusStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asEfinityV2(): XcmpQueueInboundXcmpStatusStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageEfinityV1 {
    get(): Promise<[number, efinityV1.InboundStatus, [number, efinityV1.XcmpMessageFormat][]][]>
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageEfinityV2 {
    get(): Promise<efinityV2.InboundChannelDetails[]>
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asEfinityV1(): XcmpQueueOutboundXcmpMessagesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageEfinityV1 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '2284f25ad36d908dd9054d516baba1c7da89eb5dbefc09e2f88eaad6bd217ebf'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asEfinityV1(): XcmpQueueOutboundXcmpStatusStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isEfinityV2(): boolean {
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
    get asEfinityV2(): XcmpQueueOutboundXcmpStatusStorageEfinityV2 {
        assert(this.isEfinityV2)
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
export interface XcmpQueueOutboundXcmpStatusStorageEfinityV1 {
    get(): Promise<[number, efinityV1.OutboundStatus, boolean, number, number][]>
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageEfinityV2 {
    get(): Promise<efinityV2.OutboundChannelDetails[]>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asEfinityV2(): XcmpQueueOverweightStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageEfinityV2 {
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asEfinityV2(): XcmpQueueOverweightCountStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageEfinityV2 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === '4eee4c318310895e220c6e665c876bf76f75ef8f5530bcd8f8ea1d5b966ff46f'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asEfinityV1(): XcmpQueueQueueConfigStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isEfinityV2(): boolean {
        return this.getTypeHash() === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asEfinityV2(): XcmpQueueQueueConfigStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isEfinityV3000(): boolean {
        return this.getTypeHash() === 'b9e7fe75fd5e16e066448c0d0a704aec5c90e5e751ca04108c2b35ab00764560'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asEfinityV3000(): XcmpQueueQueueConfigStorageEfinityV3000 {
        assert(this.isEfinityV3000)
        return this as any
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isEfinityV3012(): boolean {
        return this.getTypeHash() === '2a88389b0d97d3253b6e1cdc0a2e938907eda23917d9d2a7dcb76b96b945d7c1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asEfinityV3012(): XcmpQueueQueueConfigStorageEfinityV3012 {
        assert(this.isEfinityV3012)
        return this as any
    }
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageEfinityV1 {
    get(): Promise<efinityV1.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageEfinityV2 {
    get(): Promise<efinityV2.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageEfinityV3000 {
    get(): Promise<efinityV3000.QueueConfigData>
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageEfinityV3012 {
    get(): Promise<efinityV3012.QueueConfigData>
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
    get isEfinityV2(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asEfinityV2(): XcmpQueueQueueSuspendedStorageEfinityV2 {
        assert(this.isEfinityV2)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageEfinityV2 {
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
    get isEfinityV1(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asEfinityV1(): XcmpQueueSignalMessagesStorageEfinityV1 {
        assert(this.isEfinityV1)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageEfinityV1 {
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
