import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as rocfinityV5 from './rocfinityV5'
import * as v1 from './v1'
import * as rocfinityV6 from './rocfinityV6'
import * as v2 from './v2'
import * as v3 from './v3'

export class AssetRegistryLastAssetIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The last processed asset id - used when assigning a sequential id.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LastAssetId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The last processed asset id - used when assigning a sequential id.
   */
  async getAsRocfinityV6(): Promise<number> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'LastAssetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LastAssetId') != null
  }
}

export class AssetRegistryLocationToAssetIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Maps a multilocation to an asset id - useful when processing xcm
   *  messages.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LocationToAssetId') === '3c043d5ada7fce2b8b426c49f9b15d1308835a7483919400e4c42d24e95b4193'
  }

  /**
   *  Maps a multilocation to an asset id - useful when processing xcm
   *  messages.
   */
  async getAsRocfinityV6(key: rocfinityV6.V1MultiLocation): Promise<number | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'LocationToAssetId', key)
  }

  async getManyAsRocfinityV6(keys: rocfinityV6.V1MultiLocation[]): Promise<(number | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationToAssetId', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(number)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationToAssetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LocationToAssetId') != null
  }
}

export class AssetRegistryMetadataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The metadata of an asset, indexed by asset id.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'Metadata') === 'ecee0301595c8efdb7bb75fce789ce73c12d7f7cec5bc83b08871d28b4b1a98f'
  }

  /**
   *  The metadata of an asset, indexed by asset id.
   */
  async getAsRocfinityV6(key: number): Promise<rocfinityV6.AssetMetadata | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'Metadata', key)
  }

  async getManyAsRocfinityV6(keys: number[]): Promise<(rocfinityV6.AssetMetadata | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'Metadata', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(rocfinityV6.AssetMetadata)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'Metadata')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'Metadata') != null
  }
}

export class AuthorshipAuthorStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Author of current block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Author') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  Author of current block.
   */
  async getAsRocfinityV5(): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'Author')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'Author') != null
  }
}

export class AuthorshipDidSetUnclesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Whether uncles were already set in this block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Authorship', 'DidSetUncles') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Whether uncles were already set in this block.
   */
  async getAsRocfinityV5(): Promise<boolean> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'DidSetUncles')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'DidSetUncles') != null
  }
}

export class AuthorshipUnclesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Uncles
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
  }

  /**
   *  Uncles
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.UncleEntryItem[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'Uncles')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') != null
  }
}

export class BalancesAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
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
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.AccountData> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.AccountData)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.AccountData)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') != null
  }
}

export class BalancesLocksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.BalanceLock[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Locks', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.BalanceLock[])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.BalanceLock[])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') != null
  }
}

export class BalancesReservesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Named reserves on some account balances.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Balances', 'Reserves') === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
  }

  /**
   *  Named reserves on some account balances.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.ReserveData[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Reserves', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.ReserveData[])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Reserves', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.ReserveData[])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Reserves')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Reserves') != null
  }
}

export class BalancesStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.Releases> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Balances', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') != null
  }
}

export class BalancesTotalIssuanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total units issued in the system.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsRocfinityV5(): Promise<bigint> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class BountiesBountiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Bounties that have been made.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsRocfinityV5(key: number): Promise<rocfinityV5.Bounty | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'Bounties', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<(rocfinityV5.Bounty | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Bounty)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') != null
  }
}

export class BountiesBountyApprovalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Bounty indices that have been approved but not yet funded.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyApprovals') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Bounty indices that have been approved but not yet funded.
   */
  async getAsRocfinityV5(): Promise<number[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'BountyApprovals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyApprovals') != null
  }
}

export class BountiesBountyCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of bounty proposals that have been made.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of bounty proposals that have been made.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'BountyCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyCount') != null
  }
}

export class BountiesBountyDescriptionsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The description of each bounty.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyDescriptions') === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
  }

  /**
   *  The description of each bounty.
   */
  async getAsRocfinityV5(key: number): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'BountyDescriptions', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'BountyDescriptions', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'BountyDescriptions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'BountyDescriptions') != null
  }
}

export class ClaimsClaimsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Claims', 'Claims') === 'a4e45b744228821d2d599c2e7bd1993b9bd523df83f8ee660f73e52be555e75c'
  }

  async getAsRocfinityV5(key: Uint8Array): Promise<bigint | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Claims', 'Claims', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(bigint | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Claims', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(bigint)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Claims', 'Claims')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Claims', 'Claims') != null
  }
}

export class ClaimsTotalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Claims', 'Total') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  async getAsRocfinityV5(): Promise<bigint> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Claims', 'Total')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Claims', 'Total') != null
  }
}

export class CollatorStakingAuthoredBlocksCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  For each session index, we keep a mapping of collators to the
   *  number of blocks authored by them.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'AuthoredBlocksCount') === 'cc6a8dbe383d37ce9fa22935e3a1838a5aa7615fa4449b4318806f402f116ec9'
  }

  /**
   *  For each session index, we keep a mapping of collators to the
   *  number of blocks authored by them.
   */
  async getAsRocfinityV5(key1: number, key2: Uint8Array): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'AuthoredBlocksCount', key1, key2)
  }

  async getManyAsRocfinityV5(keys: [number, Uint8Array][]): Promise<(number)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'CollatorStaking', 'AuthoredBlocksCount', keys)
  }

  async getAllAsRocfinityV5(): Promise<(number)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'CollatorStaking', 'AuthoredBlocksCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'AuthoredBlocksCount') != null
  }
}

export class CollatorStakingBlockProducerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The collator to provide the next block
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'BlockProducer') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The collator to provide the next block
   */
  async getAsRocfinityV5(): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'BlockProducer')
  }

  /**
   *  The collator to provide the next block
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'BlockProducer') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  The collator to provide the next block
   */
  async getAsV1(): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'BlockProducer')
  }

  /**
   *  The collator to provide the next block
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'BlockProducer') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The collator to provide the next block
   */
  async getAsV2(): Promise<Uint8Array | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'BlockProducer')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'BlockProducer') != null
  }
}

export class CollatorStakingCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current set of candidates for collation.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'Candidates') === 'cbb398b5f9c260ae06ccf5001bdee4164668cfe3c49da06168fc750be84f5701'
  }

  /**
   *  The current set of candidates for collation.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.Collator[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'Candidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'Candidates') != null
  }
}

export class CollatorStakingCollatorExitsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The list of collators who requested an exit.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'CollatorExits') === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
  }

  /**
   *  The list of collators who requested an exit.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<number | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'CollatorExits', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(number | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'CollatorStaking', 'CollatorExits', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(number)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'CollatorStaking', 'CollatorExits')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'CollatorExits') != null
  }
}

export class CollatorStakingCollatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current set of collators
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'Collators') === 'cbb398b5f9c260ae06ccf5001bdee4164668cfe3c49da06168fc750be84f5701'
  }

  /**
   *  The current set of collators
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.Collator[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'Collators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'Collators') != null
  }
}

export class CollatorStakingCurrentRoundStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current round information.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'CurrentRound') === 'd301c895b8438300017ee0b57de86bcf91e9f12a5914bddbb4fa72622f169fa8'
  }

  /**
   *  The current round information.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.Round> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'CurrentRound')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'CurrentRound') != null
  }
}

export class CollatorStakingDesiredCandidatesCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current candidate limit, must be within 0 and `T::MaxCandidates`
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'DesiredCandidatesCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The current candidate limit, must be within 0 and `T::MaxCandidates`
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'DesiredCandidatesCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'DesiredCandidatesCount') != null
  }
}

export class CollatorStakingInvulnerablesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The invulnerable collators
   * 
   *  This is the list of collators who are invulnerable to being ejected from collation
   *  either by unbonding or by having less stake.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'Invulnerables') === 'cbb398b5f9c260ae06ccf5001bdee4164668cfe3c49da06168fc750be84f5701'
  }

  /**
   *  The invulnerable collators
   * 
   *  This is the list of collators who are invulnerable to being ejected from collation
   *  either by unbonding or by having less stake.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.Collator[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'Invulnerables')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'Invulnerables') != null
  }
}

export class CollatorStakingNominatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current set of nominators.
   * 
   *  Each nominator is allowed to nominate one collator.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'Nominators') === '11643981c5f057df403241a3175aad7384102829be78567ad40af375e54362df'
  }

  /**
   *  The current set of nominators.
   * 
   *  Each nominator is allowed to nominate one collator.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.Nomination | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CollatorStaking', 'Nominators', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.Nomination | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'CollatorStaking', 'Nominators', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Nomination)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'CollatorStaking', 'Nominators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorStaking', 'Nominators') != null
  }
}

export class CommunityPoolApprovalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposal indices that have been approved but not yet awarded.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CommunityPool', 'Approvals') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Proposal indices that have been approved but not yet awarded.
   */
  async getAsRocfinityV5(): Promise<number[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CommunityPool', 'Approvals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CommunityPool', 'Approvals') != null
  }
}

export class CommunityPoolProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of proposals that have been made.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CommunityPool', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of proposals that have been made.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CommunityPool', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CommunityPool', 'ProposalCount') != null
  }
}

export class CommunityPoolProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals that have been made.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('CommunityPool', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsRocfinityV5(key: number): Promise<rocfinityV5.Proposal | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'CommunityPool', 'Proposals', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<(rocfinityV5.Proposal | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'CommunityPool', 'Proposals', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Proposal)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'CommunityPool', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CommunityPool', 'Proposals') != null
  }
}

export class ContractsCodeStorageStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A mapping between an original code hash and instrumented wasm code, ready for execution.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Contracts', 'CodeStorage') === '1d41f869264eec7411828c1a845cdbad1a39455691f254f6bfead6b3102145ab'
  }

  /**
   *  A mapping between an original code hash and instrumented wasm code, ready for execution.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.PrefabWasmModule | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Contracts', 'CodeStorage', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.PrefabWasmModule | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Contracts', 'CodeStorage', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.PrefabWasmModule)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Contracts', 'CodeStorage')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Contracts', 'CodeStorage') != null
  }
}

export class ContractsContractInfoOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The code associated with a given account.
   * 
   *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Contracts', 'ContractInfoOf') === 'ca1ad2ae4b550883411d45c2158af4f3e2a0bde306e44674a586527ce222bcf3'
  }

  /**
   *  The code associated with a given account.
   * 
   *  TWOX-NOTE: SAFE since `AccountId` is a secure hash.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.RawContractInfo | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Contracts', 'ContractInfoOf', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.RawContractInfo | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Contracts', 'ContractInfoOf', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.RawContractInfo)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Contracts', 'ContractInfoOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Contracts', 'ContractInfoOf') != null
  }
}

export class ContractsDeletionQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Evicted contracts that await child trie deletion.
   * 
   *  Child trie deletion is a heavy operation depending on the amount of storage items
   *  stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Contracts', 'DeletionQueue') === 'acd21a3434a729eeba0503ec7163c1b1afb6a839983d2fed35e9e4681d68d116'
  }

  /**
   *  Evicted contracts that await child trie deletion.
   * 
   *  Child trie deletion is a heavy operation depending on the amount of storage items
   *  stored in said trie. Therefore this operation is performed lazily in `on_initialize`.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.DeletedContract[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Contracts', 'DeletionQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Contracts', 'DeletionQueue') != null
  }
}

export class ContractsNonceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Contracts', 'Nonce') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
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
  async getAsRocfinityV5(): Promise<bigint> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Contracts', 'Nonce')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Contracts', 'Nonce') != null
  }
}

export class ContractsOwnerInfoOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A mapping between an original code hash and its owner information.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Contracts', 'OwnerInfoOf') === '76689686c73821ee740f33d092a38a05de83a2833f6c8857baa886203c5bf939'
  }

  /**
   *  A mapping between an original code hash and its owner information.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.OwnerInfo | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Contracts', 'OwnerInfoOf', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.OwnerInfo | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Contracts', 'OwnerInfoOf', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.OwnerInfo)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Contracts', 'OwnerInfoOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Contracts', 'OwnerInfoOf') != null
  }
}

export class ContractsPristineCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A mapping from an original code hash to the original code, untouched by instrumentation.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Contracts', 'PristineCode') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  A mapping from an original code hash to the original code, untouched by instrumentation.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Contracts', 'PristineCode', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Contracts', 'PristineCode', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Contracts', 'PristineCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Contracts', 'PristineCode') != null
  }
}

export class CouncilMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsRocfinityV5(): Promise<Uint8Array[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Council', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Members') != null
  }
}

export class CouncilPrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Council', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsRocfinityV5(): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Council', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Prime') != null
  }
}

export class CouncilProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') != null
  }
}

export class CouncilProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '3086cb7dd72e8a750dd7b1a207b9f94123651b10d43e995c166c43e4d1b38101'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.Call | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.Call | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Call)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '1d2fe834da1946560a18e385db353906535734a3ba734a68bb830b167e352a8a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsRocfinityV6(key: Uint8Array): Promise<rocfinityV6.Call | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsRocfinityV6(keys: Uint8Array[]): Promise<(rocfinityV6.Call | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(rocfinityV6.Call)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '0f3007c68722fd11be8b2174f41f58819d999d19ac6bc66e70c97b8b57b3eb90'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2(key: Uint8Array): Promise<v2.Call | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV2(keys: Uint8Array[]): Promise<(v2.Call | undefined)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2(): Promise<(v2.Call)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV3() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '8072ac36972240ef7be53d931291d08dcf2288b6065ce85460cf882dff3d6fbd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV3(key: Uint8Array): Promise<v3.Call | undefined> {
    assert(this.isV3)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV3(keys: Uint8Array[]): Promise<(v3.Call | undefined)[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV3(): Promise<(v3.Call)[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') != null
  }
}

export class CouncilProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The hashes of the active proposals.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Council', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsRocfinityV5(): Promise<Uint8Array[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Council', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Proposals') != null
  }
}

export class CouncilVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Council', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.Votes | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Council', 'Voting', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.Votes | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Council', 'Voting', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Votes)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Council', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Voting') != null
  }
}

export class DemocracyBlacklistStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A record of who vetoed what. Maps proposal hash to a possible existent block number
   *  (until when it may not be resubmitted) and who vetoed it.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Blacklist') === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
  }

  /**
   *  A record of who vetoed what. Maps proposal hash to a possible existent block number
   *  (until when it may not be resubmitted) and who vetoed it.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<[number, Uint8Array[]] | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Blacklist', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Blacklist', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<([number, Uint8Array[]])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Blacklist')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Blacklist') != null
  }
}

export class DemocracyCancellationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Record of all proposals that have been subject to emergency cancellation.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Cancellations') === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
  }

  /**
   *  Record of all proposals that have been subject to emergency cancellation.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<boolean> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Cancellations', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(boolean)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Cancellations', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(boolean)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Cancellations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Cancellations') != null
  }
}

export class DemocracyDepositOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Those who have locked a deposit.
   * 
   *  TWOX-NOTE: Safe, as increasing integer keys are safe.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'DepositOf') === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
  }

  /**
   *  Those who have locked a deposit.
   * 
   *  TWOX-NOTE: Safe, as increasing integer keys are safe.
   */
  async getAsRocfinityV5(key: number): Promise<[Uint8Array[], bigint] | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'DepositOf', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<([Uint8Array[], bigint])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'DepositOf') != null
  }
}

export class DemocracyLastTabledWasExternalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if the last referendum tabled was submitted externally. False if it was a public
   *  proposal.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'LastTabledWasExternal') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if the last referendum tabled was submitted externally. False if it was a public
   *  proposal.
   */
  async getAsRocfinityV5(): Promise<boolean> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'LastTabledWasExternal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'LastTabledWasExternal') != null
  }
}

export class DemocracyLowestUnbakedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The lowest referendum index representing an unbaked referendum. Equal to
   *  `ReferendumCount` if there isn't a unbaked referendum.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'LowestUnbaked') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The lowest referendum index representing an unbaked referendum. Equal to
   *  `ReferendumCount` if there isn't a unbaked referendum.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'LowestUnbaked')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'LowestUnbaked') != null
  }
}

export class DemocracyNextExternalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The referendum to be tabled whenever it would be valid to table an external proposal.
   *  This happens when a referendum needs to be tabled and one of two conditions are met:
   *  - `LastTabledWasExternal` is `false`; or
   *  - `PublicProps` is empty.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextExternal') === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
  }

  /**
   *  The referendum to be tabled whenever it would be valid to table an external proposal.
   *  This happens when a referendum needs to be tabled and one of two conditions are met:
   *  - `LastTabledWasExternal` is `false`; or
   *  - `PublicProps` is empty.
   */
  async getAsRocfinityV5(): Promise<[Uint8Array, rocfinityV5.VoteThreshold] | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'NextExternal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextExternal') != null
  }
}

export class DemocracyPreimagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.PreimageStatus | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.PreimageStatus | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.PreimageStatus)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') != null
  }
}

export class DemocracyPublicPropCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicPropCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') != null
  }
}

export class DemocracyPublicPropsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsRocfinityV5(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicProps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') != null
  }
}

export class DemocracyReferendumCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next free referendum index, aka the number of referenda started so far.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The next free referendum index, aka the number of referenda started so far.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumCount') != null
  }
}

export class DemocracyReferendumInfoOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsRocfinityV5(key: number): Promise<rocfinityV5.ReferendumInfo | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<(rocfinityV5.ReferendumInfo | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.ReferendumInfo)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class DemocracyStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.Type_354 | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') != null
  }
}

export class DemocracyVotingOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.Voting> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'VotingOf', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.Voting)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Voting)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') != null
  }
}

export class DmpQueueConfigurationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The configuration.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Configuration') === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
  }

  /**
   *  The configuration.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.ConfigData> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Configuration')
  }

  /**
   *  The configuration.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Configuration') === '67bde14908f93a3aea4aa5877726bd296c59aa66227203739244319bbf5fb443'
  }

  /**
   *  The configuration.
   */
  async getAsRocfinityV6(): Promise<rocfinityV6.ConfigData> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Configuration')
  }

  /**
   *  The configuration.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Configuration') === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
  }

  /**
   *  The configuration.
   */
  async getAsV1(): Promise<v1.ConfigData> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Configuration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Configuration') != null
  }
}

export class DmpQueueOverweightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The overweight messages.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Overweight') === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
  }

  /**
   *  The overweight messages.
   */
  async getAsRocfinityV5(key: bigint): Promise<[number, Uint8Array] | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Overweight', key)
  }

  async getManyAsRocfinityV5(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Overweight', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<([number, Uint8Array])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Overweight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Overweight') != null
  }
}

export class DmpQueuePageIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The page index.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'PageIndex') === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
  }

  /**
   *  The page index.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.PageIndexData> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'PageIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'PageIndex') != null
  }
}

export class DmpQueuePagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The queue pages.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Pages') === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
  }

  /**
   *  The queue pages.
   */
  async getAsRocfinityV5(key: number): Promise<[number, Uint8Array][]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Pages', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<([number, Uint8Array][])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Pages', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<([number, Uint8Array][])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Pages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Pages') != null
  }
}

export class ExtrinsicPausePausedExtrinsicsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Paused extrinsics map
   * 
   *  The key is tuple with the name of the pallet and the extrinsic name and value is
   *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('ExtrinsicPause', 'PausedExtrinsics') === '9914d71a2b43fa7da00c957184ae8b79abfcf4e6a63fb1b814680e322156164c'
  }

  /**
   *  Paused extrinsics map
   * 
   *  The key is tuple with the name of the pallet and the extrinsic name and value is
   *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
   */
  async getAsRocfinityV6(key: rocfinityV6.ExtrinsicInfo): Promise<null | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'ExtrinsicPause', 'PausedExtrinsics', key)
  }

  async getManyAsRocfinityV6(keys: rocfinityV6.ExtrinsicInfo[]): Promise<(null | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'ExtrinsicPause', 'PausedExtrinsics', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(null)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'ExtrinsicPause', 'PausedExtrinsics')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ExtrinsicPause', 'PausedExtrinsics') != null
  }
}

export class FuelTanksAccountsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Mapping of Fuel Tanks and their user Accounts to account data
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('FuelTanks', 'Accounts') === '779942d2fcd4cd5dbeb1843d9556a6249b0b76ec19382709018ef4f07e288ee0'
  }

  /**
   *  Mapping of Fuel Tanks and their user Accounts to account data
   */
  async getAsRocfinityV6(key1: Uint8Array, key2: Uint8Array): Promise<rocfinityV6.UserAccount | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'FuelTanks', 'Accounts', key1, key2)
  }

  async getManyAsRocfinityV6(keys: [Uint8Array, Uint8Array][]): Promise<(rocfinityV6.UserAccount | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'FuelTanks', 'Accounts', keys)
  }

  async getAllAsRocfinityV6(): Promise<(rocfinityV6.UserAccount)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'FuelTanks', 'Accounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FuelTanks', 'Accounts') != null
  }
}

export class FuelTanksFreezeQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The queue for fuel tank and rule set freezing
   *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('FuelTanks', 'FreezeQueue') === '6417b6c5aebb64849792349d17be222d1c212c6254e5517ec62f89a5e5e14ddc'
  }

  /**
   *  The queue for fuel tank and rule set freezing
   *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
   */
  async getAsRocfinityV6(): Promise<rocfinityV6.FreezeQueueItem[]> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'FuelTanks', 'FreezeQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FuelTanks', 'FreezeQueue') != null
  }
}

export class FuelTanksTanksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Mapping of Fuel Tanks accounts to their data
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('FuelTanks', 'Tanks') === 'f75b278131ab790de7986c66a9238030c7fde76022a4a06bd888cff70440801d'
  }

  /**
   *  Mapping of Fuel Tanks accounts to their data
   */
  async getAsRocfinityV6(key: Uint8Array): Promise<rocfinityV6.FuelTank | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'FuelTanks', 'Tanks', key)
  }

  async getManyAsRocfinityV6(keys: Uint8Array[]): Promise<(rocfinityV6.FuelTank | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'FuelTanks', 'Tanks', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(rocfinityV6.FuelTank)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'FuelTanks', 'Tanks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('FuelTanks', 'Tanks') != null
  }
}

export class MarketplaceInfoStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores information about the marketplace
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('Marketplace', 'Info') === '8f3079a34bccec98eddaa087299c671597b9b6c0401ca8c900734ef257151b13'
  }

  /**
   *  Stores information about the marketplace
   */
  async getAsRocfinityV6(): Promise<rocfinityV6.MarketPlaceInfo> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'Marketplace', 'Info')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Marketplace', 'Info') != null
  }
}

export class MarketplaceListingIdsByAccountIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Listing Ids by `AccountId`
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('Marketplace', 'ListingIdsByAccountId') === '33e12ad309c02112b5ea505c6e3e739ba83921bfe6bed7e5eb08d21907895180'
  }

  /**
   *  Listing Ids by `AccountId`
   */
  async getAsRocfinityV6(key1: Uint8Array, key2: Uint8Array): Promise<null | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'Marketplace', 'ListingIdsByAccountId', key1, key2)
  }

  async getManyAsRocfinityV6(keys: [Uint8Array, Uint8Array][]): Promise<(null | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'ListingIdsByAccountId', keys)
  }

  async getAllAsRocfinityV6(): Promise<(null)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'ListingIdsByAccountId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Marketplace', 'ListingIdsByAccountId') != null
  }
}

export class MarketplaceListingIdsByMakeAssetStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Listing Ids by make asset's collection id and token id
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('Marketplace', 'ListingIdsByMakeAsset') === 'cc5df187f7a6ddcd474c0c1e410e8d72bd71954d4b2ad06da5882588a225356a'
  }

  /**
   *  Listing Ids by make asset's collection id and token id
   */
  async getAsRocfinityV6(key1: bigint, key2: bigint): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'Marketplace', 'ListingIdsByMakeAsset', key1, key2)
  }

  async getManyAsRocfinityV6(keys: [bigint, bigint][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'ListingIdsByMakeAsset', keys)
  }

  async getAllAsRocfinityV6(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'ListingIdsByMakeAsset')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Marketplace', 'ListingIdsByMakeAsset') != null
  }
}

export class MarketplaceListingIdsByTakeAssetStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Listing Ids by take asset's collection id and token id
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('Marketplace', 'ListingIdsByTakeAsset') === 'cc5df187f7a6ddcd474c0c1e410e8d72bd71954d4b2ad06da5882588a225356a'
  }

  /**
   *  Listing Ids by take asset's collection id and token id
   */
  async getAsRocfinityV6(key1: bigint, key2: bigint): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'Marketplace', 'ListingIdsByTakeAsset', key1, key2)
  }

  async getManyAsRocfinityV6(keys: [bigint, bigint][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'ListingIdsByTakeAsset', keys)
  }

  async getAllAsRocfinityV6(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'ListingIdsByTakeAsset')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Marketplace', 'ListingIdsByTakeAsset') != null
  }
}

export class MarketplaceListingsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Listings by ID
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('Marketplace', 'Listings') === 'e51936bd4e8b63920dc0b1c10bbd1672cd077197cb65f17e9eba1f1a57c36335'
  }

  /**
   *  Listings by ID
   */
  async getAsRocfinityV6(key: Uint8Array): Promise<rocfinityV6.Listing | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'Marketplace', 'Listings', key)
  }

  async getManyAsRocfinityV6(keys: Uint8Array[]): Promise<(rocfinityV6.Listing | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'Listings', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(rocfinityV6.Listing)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'Listings')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Marketplace', 'Listings') != null
  }
}

export class MultiAssetsAssetsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The assets in existence and their ownership details.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'Assets') === '20a663a47af2299526b3f39588fc24a70f12614ef28ce9c51f43831c6bbbd3a0'
  }

  /**
   *  The assets in existence and their ownership details.
   */
  async getAsV1(key: bigint): Promise<v1.Asset | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssets', 'Assets', key)
  }

  async getManyAsV1(keys: bigint[]): Promise<(v1.Asset | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'Assets', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(v1.Asset)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'Assets')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'Assets') != null
  }
}

export class MultiAssetsAttributesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Metadata of assets and tokens.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'Attributes') === '9922a04129703e336f57d3c6245cd779335975858c760cb8e5541e8b78b286d5'
  }

  /**
   *  Metadata of assets and tokens.
   */
  async getAsV1(key1: bigint, key2: (number | undefined), key3: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssets', 'Attributes', key1, key2, key3)
  }

  async getManyAsV1(keys: [bigint, (number | undefined), Uint8Array][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'Attributes', keys)
  }

  async getAllAsV1(): Promise<(Uint8Array)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'Attributes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'Attributes') != null
  }
}

export class MultiAssetsBurnedZombieTokensStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Burned Non-fungible tokens of a valid asset.
   *  Tokens were deleted from a valid asset (Zombie Token).
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'BurnedZombieTokens') === '2aeab94eea243a2ee5a2cc9a4581e9a1b328c25347d96c89e872f624b02aff84'
  }

  /**
   *  Burned Non-fungible tokens of a valid asset.
   *  Tokens were deleted from a valid asset (Zombie Token).
   */
  async getAsV1(key1: bigint, key2: number): Promise<v1.Range[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssets', 'BurnedZombieTokens', key1, key2)
  }

  async getManyAsV1(keys: [bigint, number][]): Promise<(v1.Range[])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'BurnedZombieTokens', keys)
  }

  async getAllAsV1(): Promise<(v1.Range[])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'BurnedZombieTokens')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'BurnedZombieTokens') != null
  }
}

export class MultiAssetsFungibleBalancesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Asset balances of accounts.
   *  # TODO
   *  - Is `Towx64Concat` safe enough here?
   *  - Performance Improvement: Only store the localId for UUAID.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'FungibleBalances') === 'eeea1705b24c280b812adc25b045aa67d67a83cec8842b18c5f450c83916dc4d'
  }

  /**
   *  Asset balances of accounts.
   *  # TODO
   *  - Is `Towx64Concat` safe enough here?
   *  - Performance Improvement: Only store the localId for UUAID.
   */
  async getAsV1(key1: Uint8Array, key2: bigint): Promise<bigint> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssets', 'FungibleBalances', key1, key2)
  }

  async getManyAsV1(keys: [Uint8Array, bigint][]): Promise<(bigint)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'FungibleBalances', keys)
  }

  async getAllAsV1(): Promise<(bigint)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'FungibleBalances')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'FungibleBalances') != null
  }
}

export class MultiAssetsIdleOperationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pending operations to be executed on `Hooks::on_idle`.
   * 
   *  # TODO
   *  - Support list of `IdleOperation` per `key` (a.k.a. `AssetId`). It will reduce the number
   *  of writes from three (i.e. `fn do_burn_fungible_asset`) to only one.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'IdleOperations') === '155e0e87aa1f501194d92e3538b1a9efb10719b04ef38a7e275c2482f2c06b59'
  }

  /**
   *  Pending operations to be executed on `Hooks::on_idle`.
   * 
   *  # TODO
   *  - Support list of `IdleOperation` per `key` (a.k.a. `AssetId`). It will reduce the number
   *  of writes from three (i.e. `fn do_burn_fungible_asset`) to only one.
   */
  async getAsV1(key: v1.IdleOperation): Promise<null | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssets', 'IdleOperations', key)
  }

  async getManyAsV1(keys: v1.IdleOperation[]): Promise<(null | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'IdleOperations', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(null)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'IdleOperations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'IdleOperations') != null
  }
}

export class MultiAssetsNextLocalAssetIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Sequencer for assetID generators.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'NextLocalAssetId') === 'b74b68c991bd7b84f6a5c507e278122d6de167efa17d4a61114639f0a032e198'
  }

  /**
   *  Sequencer for assetID generators.
   */
  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssets', 'NextLocalAssetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'NextLocalAssetId') != null
  }
}

export class MultiAssetsNonFungibleBalancesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  # TODO
   *  - Performance Improvement: Only store the localId for UUAID.
   *  - Is `Identity` safe enough here?
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'NonFungibleBalances') === '5ee65d59f800ee5f3a909ccd908d4aed069c199580d0e5d85119ba9058aadce7'
  }

  /**
   *  # TODO
   *  - Performance Improvement: Only store the localId for UUAID.
   *  - Is `Identity` safe enough here?
   */
  async getAsV1(key1: Uint8Array, key2: bigint, key3: number): Promise<v1.Range[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssets', 'NonFungibleBalances', key1, key2, key3)
  }

  async getManyAsV1(keys: [Uint8Array, bigint, number][]): Promise<(v1.Range[])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'NonFungibleBalances', keys)
  }

  async getAllAsV1(): Promise<(v1.Range[])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssets', 'NonFungibleBalances')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssets', 'NonFungibleBalances') != null
  }
}

export class MultiAssetsOperatorExtApprovalsForAllStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Approvals for all
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssetsOperatorExt', 'ApprovalsForAll') === '179a175e3ec7957b6b232c7168b31beef93d19748947c1ccaa4a43ca2ae0189a'
  }

  /**
   *  Approvals for all
   */
  async getAsV1(key1: Uint8Array, key2: Uint8Array): Promise<v1.Expiration | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssetsOperatorExt', 'ApprovalsForAll', key1, key2)
  }

  async getManyAsV1(keys: [Uint8Array, Uint8Array][]): Promise<(v1.Expiration | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssetsOperatorExt', 'ApprovalsForAll', keys)
  }

  async getAllAsV1(): Promise<(v1.Expiration)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssetsOperatorExt', 'ApprovalsForAll')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssetsOperatorExt', 'ApprovalsForAll') != null
  }
}

export class MultiAssetsOperatorExtAssetApprovalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Approvals for assets
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssetsOperatorExt', 'AssetApprovals') === '0970fdc94ea8324d89cd7f326d002c4fdfba484ba1b879331d1fb596049d97c6'
  }

  /**
   *  Approvals for assets
   */
  async getAsV1(key1: Uint8Array, key2: Uint8Array, key3: bigint): Promise<v1.Expiration | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssetsOperatorExt', 'AssetApprovals', key1, key2, key3)
  }

  async getManyAsV1(keys: [Uint8Array, Uint8Array, bigint][]): Promise<(v1.Expiration | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssetsOperatorExt', 'AssetApprovals', keys)
  }

  async getAllAsV1(): Promise<(v1.Expiration)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssetsOperatorExt', 'AssetApprovals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssetsOperatorExt', 'AssetApprovals') != null
  }
}

export class MultiAssetsOperatorExtTokenApprovalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Approvals for tokens
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('MultiAssetsOperatorExt', 'TokenApprovals') === 'fa08d00250edbdcb0238ab699dc35abfbfeba7b95bae0583502fe52eedc7bf1c'
  }

  /**
   *  Approvals for tokens
   */
  async getAsV1(key1: Uint8Array, key2: Uint8Array, key3: bigint, key4: number): Promise<v1.Approval | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'MultiAssetsOperatorExt', 'TokenApprovals', key1, key2, key3, key4)
  }

  async getManyAsV1(keys: [Uint8Array, Uint8Array, bigint, number][]): Promise<(v1.Approval | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssetsOperatorExt', 'TokenApprovals', keys)
  }

  async getAllAsV1(): Promise<(v1.Approval)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'MultiAssetsOperatorExt', 'TokenApprovals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiAssetsOperatorExt', 'TokenApprovals') != null
  }
}

export class MultiTokensAttributesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Metadata of collections and tokens.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Attributes') === 'a746a93405e250d7e804277de85e59649a8d0f26dcdbc38249cee2190785886d'
  }

  /**
   *  Metadata of collections and tokens.
   */
  async getAsRocfinityV5(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<rocfinityV5.Attribute | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'Attributes', key1, key2, key3)
  }

  async getManyAsRocfinityV5(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<(rocfinityV5.Attribute | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Attributes', keys)
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Attribute)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Attributes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Attributes') != null
  }
}

export class MultiTokensCollectionAccountsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores information for an account per collection
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'CollectionAccounts') === 'b46672e82d7bfd0dfb77b459f54edcb3814fab36fcd1e60c5702769a7fd5b155'
  }

  /**
   *  Stores information for an account per collection
   */
  async getAsRocfinityV5(key1: bigint, key2: Uint8Array): Promise<rocfinityV5.CollectionAccount | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'CollectionAccounts', key1, key2)
  }

  async getManyAsRocfinityV5(keys: [bigint, Uint8Array][]): Promise<(rocfinityV5.CollectionAccount | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'CollectionAccounts', keys)
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.CollectionAccount)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'CollectionAccounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'CollectionAccounts') != null
  }
}

export class MultiTokensCollectionsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The collections in existence and their ownership details.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Collections') === '796cee53b5b0994fbc828ea8d49c6ffd793ecd23b4c7a29bd969e059778d89f3'
  }

  /**
   *  The collections in existence and their ownership details.
   */
  async getAsRocfinityV5(key: bigint): Promise<rocfinityV5.Collection | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'Collections', key)
  }

  async getManyAsRocfinityV5(keys: bigint[]): Promise<(rocfinityV5.Collection | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Collections', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Collection)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Collections')
  }

  /**
   *  The collections in existence and their ownership details.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Collections') === 'e505bb38c2f05501278271d4d92422c32c38f8976d079eddae5a656ea2e00d3e'
  }

  /**
   *  The collections in existence and their ownership details.
   */
  async getAsRocfinityV6(key: bigint): Promise<rocfinityV6.Collection | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'Collections', key)
  }

  async getManyAsRocfinityV6(keys: bigint[]): Promise<(rocfinityV6.Collection | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Collections', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(rocfinityV6.Collection)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Collections')
  }

  /**
   *  The collections in existence and their ownership details.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Collections') === '796cee53b5b0994fbc828ea8d49c6ffd793ecd23b4c7a29bd969e059778d89f3'
  }

  /**
   *  The collections in existence and their ownership details.
   */
  async getAsV2(key: bigint): Promise<v2.Collection | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'Collections', key)
  }

  async getManyAsV2(keys: bigint[]): Promise<(v2.Collection | undefined)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Collections', keys.map(k => [k]))
  }

  async getAllAsV2(): Promise<(v2.Collection)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Collections')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Collections') != null
  }
}

export class MultiTokensIdleOperationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Pending operations to be executed on `Hooks::on_idle`.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'IdleOperations') === '3eb5f23bd85218994c65072029a61dbd467eb712c53d9f7e5dfa83a6dc8687f3'
  }

  /**
   *  Pending operations to be executed on `Hooks::on_idle`.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.WeightedIdleOperation[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'IdleOperations')
  }

  /**
   *  Pending operations to be executed on `Hooks::on_idle`.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'IdleOperations') === 'b90452918976da2c388676316009c640f822e1e429f7262cddef8c96a87aa496'
  }

  /**
   *  Pending operations to be executed on `Hooks::on_idle`.
   */
  async getAsRocfinityV6(): Promise<rocfinityV6.WeightedIdleOperation[]> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'IdleOperations')
  }

  /**
   *  Pending operations to be executed on `Hooks::on_idle`.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'IdleOperations') === '3eb5f23bd85218994c65072029a61dbd467eb712c53d9f7e5dfa83a6dc8687f3'
  }

  /**
   *  Pending operations to be executed on `Hooks::on_idle`.
   */
  async getAsV2(): Promise<v2.WeightedIdleOperation[]> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'IdleOperations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'IdleOperations') != null
  }
}

export class MultiTokensNextCollectionIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Sequencer for collectionID generators.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'NextCollectionId') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  Sequencer for collectionID generators.
   */
  async getAsRocfinityV5(): Promise<bigint> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'NextCollectionId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'NextCollectionId') != null
  }
}

export class MultiTokensTokenAccountsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Accounts per token
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'TokenAccounts') === 'aa9987301d7154519df0fc59a4664d747676b382efcba3db6f30f66eda406862'
  }

  /**
   *  Accounts per token
   */
  async getAsRocfinityV5(key1: Uint8Array, key2: bigint, key3: bigint): Promise<rocfinityV5.TokenAccount | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', key1, key2, key3)
  }

  async getManyAsRocfinityV5(keys: [Uint8Array, bigint, bigint][]): Promise<(rocfinityV5.TokenAccount | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', keys)
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.TokenAccount)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'TokenAccounts')
  }

  /**
   *  Accounts per token
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'TokenAccounts') === '89f39f41ed2671d2c69225fcbd88510dab73617db2599eb112427615192fa223'
  }

  /**
   *  Accounts per token
   */
  async getAsV2(key1: Uint8Array, key2: bigint, key3: bigint): Promise<v2.TokenAccount | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', key1, key2, key3)
  }

  async getManyAsV2(keys: [Uint8Array, bigint, bigint][]): Promise<(v2.TokenAccount | undefined)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', keys)
  }

  async getAllAsV2(): Promise<(v2.TokenAccount)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'TokenAccounts')
  }

  /**
   *  Accounts per token
   */
  get isV3() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'TokenAccounts') === 'aa9987301d7154519df0fc59a4664d747676b382efcba3db6f30f66eda406862'
  }

  /**
   *  Accounts per token
   */
  async getAsV3(key1: Uint8Array, key2: bigint, key3: bigint): Promise<v3.TokenAccount | undefined> {
    assert(this.isV3)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', key1, key2, key3)
  }

  async getManyAsV3(keys: [Uint8Array, bigint, bigint][]): Promise<(v3.TokenAccount | undefined)[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', keys)
  }

  async getAllAsV3(): Promise<(v3.TokenAccount)[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'TokenAccounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'TokenAccounts') != null
  }
}

export class MultiTokensTokensStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Tokens storage
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Tokens') === '4eac4ac19f06319a6cc826f78f0b579a3c691cb8f1cdf61c93a535676b73abed'
  }

  /**
   *  Tokens storage
   */
  async getAsRocfinityV5(key1: bigint, key2: bigint): Promise<rocfinityV5.Token | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'Tokens', key1, key2)
  }

  async getManyAsRocfinityV5(keys: [bigint, bigint][]): Promise<(rocfinityV5.Token | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Tokens', keys)
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Token)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Tokens')
  }

  /**
   *  Tokens storage
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Tokens') === 'a212292bd554690a043da4ee9ec0a79e4b8384cb8b35b8038a2d72f85bf5d0bc'
  }

  /**
   *  Tokens storage
   */
  async getAsRocfinityV6(key1: bigint, key2: bigint): Promise<rocfinityV6.Token | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'Tokens', key1, key2)
  }

  async getManyAsRocfinityV6(keys: [bigint, bigint][]): Promise<(rocfinityV6.Token | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Tokens', keys)
  }

  async getAllAsRocfinityV6(): Promise<(rocfinityV6.Token)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Tokens')
  }

  /**
   *  Tokens storage
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Tokens') === '4eac4ac19f06319a6cc826f78f0b579a3c691cb8f1cdf61c93a535676b73abed'
  }

  /**
   *  Tokens storage
   */
  async getAsV2(key1: bigint, key2: bigint): Promise<v2.Token | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'Tokens', key1, key2)
  }

  async getManyAsV2(keys: [bigint, bigint][]): Promise<(v2.Token | undefined)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Tokens', keys)
  }

  async getAllAsV2(): Promise<(v2.Token)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Tokens')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Tokens') != null
  }
}

export class MultisigCallsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Multisig', 'Calls') === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
  }

  async getAsRocfinityV5(key: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint] | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Multisig', 'Calls', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Calls', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<([Uint8Array, Uint8Array, bigint])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Calls')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Multisig', 'Calls') != null
  }
}

export class MultisigMultisigsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of open multisig operations.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Multisig', 'Multisigs') === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
  }

  /**
   *  The set of open multisig operations.
   */
  async getAsRocfinityV5(key1: Uint8Array, key2: Uint8Array): Promise<rocfinityV5.Multisig | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Multisig', 'Multisigs', key1, key2)
  }

  async getManyAsRocfinityV5(keys: [Uint8Array, Uint8Array][]): Promise<(rocfinityV5.Multisig | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Multisigs', keys)
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Multisig)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Multisigs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Multisig', 'Multisigs') != null
  }
}

export class ParachainInfoParachainIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainInfo', 'ParachainId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainInfo', 'ParachainId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainInfo', 'ParachainId') != null
  }
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
   *  announcing the weight of `on_initialize` and `on_finalize`.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
   *  announcing the weight of `on_initialize` and `on_finalize`.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate') != null
  }
}

export class ParachainSystemAuthorizedUpgradeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next authorized upgrade, if there is one.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AuthorizedUpgrade') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The next authorized upgrade, if there is one.
   */
  async getAsRocfinityV5(): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'AuthorizedUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AuthorizedUpgrade') != null
  }
}

export class ParachainSystemCustomValidationHeadDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A custom head data that should be returned as result of `validate_block`.
   * 
   *  See [`Pallet::set_custom_validation_head_data`] for more information.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'CustomValidationHeadData') === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
  }

  /**
   *  A custom head data that should be returned as result of `validate_block`.
   * 
   *  See [`Pallet::set_custom_validation_head_data`] for more information.
   */
  async getAsRocfinityV5(): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'CustomValidationHeadData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'CustomValidationHeadData') != null
  }
}

export class ParachainSystemDidSetValidationCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Were the validation data set to notify the relay chain?
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'DidSetValidationCode') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Were the validation data set to notify the relay chain?
   */
  async getAsRocfinityV5(): Promise<boolean> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'DidSetValidationCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'DidSetValidationCode') != null
  }
}

export class ParachainSystemHostConfigurationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HostConfiguration') === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.V2AbridgedHostConfiguration | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HostConfiguration')
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HostConfiguration') === 'e7770235be9d14ed134fc6d0effb398cdedbf1010adc4f3555004a1d10de49d3'
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsV1(): Promise<v1.V1AbridgedHostConfiguration | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HostConfiguration')
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HostConfiguration') === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsV2(): Promise<v2.V1AbridgedHostConfiguration | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HostConfiguration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HostConfiguration') != null
  }
}

export class ParachainSystemHrmpOutboundMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  HRMP messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpOutboundMessages') === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
  }

  /**
   *  HRMP messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.OutboundHrmpMessage[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HrmpOutboundMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpOutboundMessages') != null
  }
}

export class ParachainSystemHrmpWatermarkStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  HRMP watermark that was set in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpWatermark') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  HRMP watermark that was set in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HrmpWatermark')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpWatermark') != null
  }
}

export class ParachainSystemLastDmqMqcHeadStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The last downward message queue chain head we have observed.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastDmqMqcHead') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  The last downward message queue chain head we have observed.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  async getAsRocfinityV5(): Promise<Uint8Array> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastDmqMqcHead')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastDmqMqcHead') != null
  }
}

export class ParachainSystemLastHrmpMqcHeadsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The message queue chain heads we have observed per each channel incoming channel.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastHrmpMqcHeads') === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
  }

  /**
   *  The message queue chain heads we have observed per each channel incoming channel.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  async getAsRocfinityV5(): Promise<[number, Uint8Array][]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastHrmpMqcHeads')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastHrmpMqcHeads') != null
  }
}

export class ParachainSystemLastRelayChainBlockNumberStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The relay chain block number associated with the last parachain block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastRelayChainBlockNumber') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The relay chain block number associated with the last parachain block.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastRelayChainBlockNumber')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastRelayChainBlockNumber') != null
  }
}

export class ParachainSystemLastUpgradeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The last relay parent block number at which we signalled the code upgrade.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastUpgrade') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The last relay parent block number at which we signalled the code upgrade.
   */
  async getAsV1(): Promise<number> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastUpgrade') != null
  }
}

export class ParachainSystemNewValidationCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Validation code that is set by the parachain and is to be communicated to collator and
   *  consequently the relay-chain.
   * 
   *  This will be cleared in `on_initialize` of each new block if no other pallet already set
   *  the value.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'NewValidationCode') === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
  }

  /**
   *  Validation code that is set by the parachain and is to be communicated to collator and
   *  consequently the relay-chain.
   * 
   *  This will be cleared in `on_initialize` of each new block if no other pallet already set
   *  the value.
   */
  async getAsRocfinityV5(): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'NewValidationCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'NewValidationCode') != null
  }
}

export class ParachainSystemPendingRelayChainBlockNumberStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  We need to store the new validation function for the span between
   *  setting it and applying it. If it has a
   *  value, then [`PendingValidationCode`] must have a real value, and
   *  together will coordinate the block number where the upgrade will happen.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingRelayChainBlockNumber') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  We need to store the new validation function for the span between
   *  setting it and applying it. If it has a
   *  value, then [`PendingValidationCode`] must have a real value, and
   *  together will coordinate the block number where the upgrade will happen.
   */
  async getAsV1(): Promise<number | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'PendingRelayChainBlockNumber')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingRelayChainBlockNumber') != null
  }
}

export class ParachainSystemPendingUpwardMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Upward messages that are still pending and not yet send to the relay chain.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingUpwardMessages') === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
  }

  /**
   *  Upward messages that are still pending and not yet send to the relay chain.
   */
  async getAsRocfinityV5(): Promise<Uint8Array[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'PendingUpwardMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingUpwardMessages') != null
  }
}

export class ParachainSystemPendingValidationCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
   * 
   *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
   *  which will result the next block process with the new validation code. This concludes the upgrade process.
   * 
   *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingValidationCode') === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
  }

  /**
   *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
   * 
   *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
   *  which will result the next block process with the new validation code. This concludes the upgrade process.
   * 
   *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
   */
  async getAsRocfinityV5(): Promise<Uint8Array> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'PendingValidationCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingValidationCode') != null
  }
}

export class ParachainSystemProcessedDownwardMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of downward messages processed in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ProcessedDownwardMessages') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of downward messages processed in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ProcessedDownwardMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ProcessedDownwardMessages') != null
  }
}

export class ParachainSystemRelayStateProofStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The state proof for the last relay parent block.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelayStateProof') === '38f79414b788123884c7cc1e6c6ca89331d3264f4bdcf6dff4501d6b20966908'
  }

  /**
   *  The state proof for the last relay parent block.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.StorageProof | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'RelayStateProof')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelayStateProof') != null
  }
}

export class ParachainSystemRelevantMessagingStateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelevantMessagingState') === '24e0311e0ec9634d6acff6e06aa83b4bd4c57957b8f7525bf0dd22f0a73d7b09'
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
  async getAsRocfinityV5(): Promise<rocfinityV5.MessagingStateSnapshot | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'RelevantMessagingState')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelevantMessagingState') != null
  }
}

export class ParachainSystemReservedDmpWeightOverrideStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedDmpWeightOverride') === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsRocfinityV5(): Promise<bigint | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedDmpWeightOverride')
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedDmpWeightOverride') === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsRocfinityV6(): Promise<rocfinityV6.Weight | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedDmpWeightOverride')
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedDmpWeightOverride') === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsV1(): Promise<bigint | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedDmpWeightOverride')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedDmpWeightOverride') != null
  }
}

export class ParachainSystemReservedXcmpWeightOverrideStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedXcmpWeightOverride') === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsRocfinityV5(): Promise<bigint | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedXcmpWeightOverride')
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedXcmpWeightOverride') === '1e8de4f65927863b2d720c007e917cc371de0d6c8aee8f5e19251fcf4c5a171b'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsRocfinityV6(): Promise<rocfinityV6.Weight | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedXcmpWeightOverride')
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedXcmpWeightOverride') === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsV1(): Promise<bigint | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedXcmpWeightOverride')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedXcmpWeightOverride') != null
  }
}

export class ParachainSystemUpgradeRestrictionSignalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpgradeRestrictionSignal') === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
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
  async getAsRocfinityV5(): Promise<(rocfinityV5.V2UpgradeRestriction | undefined)> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'UpgradeRestrictionSignal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpgradeRestrictionSignal') != null
  }
}

export class ParachainSystemUpwardMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Upward messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpwardMessages') === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
  }

  /**
   *  Upward messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsRocfinityV5(): Promise<Uint8Array[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'UpwardMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpwardMessages') != null
  }
}

export class ParachainSystemValidationDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The [`PersistedValidationData`] set for this block.
   *  This value is expected to be set only once per block and it's never stored
   *  in the trie.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ValidationData') === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
  }

  /**
   *  The [`PersistedValidationData`] set for this block.
   *  This value is expected to be set only once per block and it's never stored
   *  in the trie.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.V2PersistedValidationData | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ValidationData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ValidationData') != null
  }
}

export class PolkadotXcmAssetTrapsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The existing asset traps.
   * 
   *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
   *  times this pair has been trapped (usually just 1 if it exists at all).
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'AssetTraps') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  The existing asset traps.
   * 
   *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
   *  times this pair has been trapped (usually just 1 if it exists at all).
   */
  async getAsRocfinityV6(key: Uint8Array): Promise<number> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'AssetTraps', key)
  }

  async getManyAsRocfinityV6(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'AssetTraps', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(number)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'AssetTraps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'AssetTraps') != null
  }
}

export class PolkadotXcmCurrentMigrationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current migration's stage, if any.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'CurrentMigration') === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
  }

  /**
   *  The current migration's stage, if any.
   */
  async getAsRocfinityV6(): Promise<rocfinityV6.VersionMigrationStage | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'CurrentMigration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'CurrentMigration') != null
  }
}

export class PolkadotXcmQueriesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The ongoing queries.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'Queries') === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
  }

  /**
   *  The ongoing queries.
   */
  async getAsRocfinityV6(key: bigint): Promise<rocfinityV6.QueryStatus | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'Queries', key)
  }

  async getManyAsRocfinityV6(keys: bigint[]): Promise<(rocfinityV6.QueryStatus | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'Queries', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(rocfinityV6.QueryStatus)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'Queries')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'Queries') != null
  }
}

export class PolkadotXcmQueryCounterStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The latest available query index.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'QueryCounter') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The latest available query index.
   */
  async getAsRocfinityV6(): Promise<bigint> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'QueryCounter')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'QueryCounter') != null
  }
}

export class PolkadotXcmSafeXcmVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Default version to encode XCM when latest version of destination is unknown. If `None`,
   *  then the destinations whose XCM version is unknown are considered unreachable.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SafeXcmVersion') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Default version to encode XCM when latest version of destination is unknown. If `None`,
   *  then the destinations whose XCM version is unknown are considered unreachable.
   */
  async getAsRocfinityV6(): Promise<number | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'SafeXcmVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SafeXcmVersion') != null
  }
}

export class PolkadotXcmSupportedVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The Latest versions that we know various locations support.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SupportedVersion') === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
  }

  /**
   *  The Latest versions that we know various locations support.
   */
  async getAsRocfinityV6(key1: number, key2: rocfinityV6.VersionedMultiLocation): Promise<number | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'SupportedVersion', key1, key2)
  }

  async getManyAsRocfinityV6(keys: [number, rocfinityV6.VersionedMultiLocation][]): Promise<(number | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'SupportedVersion', keys)
  }

  async getAllAsRocfinityV6(): Promise<(number)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'SupportedVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SupportedVersion') != null
  }
}

export class PolkadotXcmVersionDiscoveryQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
   *  the `u32` counter is the number of times that a send to the destination has been attempted,
   *  which is used as a prioritization.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionDiscoveryQueue') === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
  }

  /**
   *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
   *  the `u32` counter is the number of times that a send to the destination has been attempted,
   *  which is used as a prioritization.
   */
  async getAsRocfinityV6(): Promise<[rocfinityV6.VersionedMultiLocation, number][]> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'VersionDiscoveryQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionDiscoveryQueue') != null
  }
}

export class PolkadotXcmVersionNotifiersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All locations that we have requested version notifications from.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifiers') === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
  }

  /**
   *  All locations that we have requested version notifications from.
   */
  async getAsRocfinityV6(key1: number, key2: rocfinityV6.VersionedMultiLocation): Promise<bigint | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifiers', key1, key2)
  }

  async getManyAsRocfinityV6(keys: [number, rocfinityV6.VersionedMultiLocation][]): Promise<(bigint | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifiers', keys)
  }

  async getAllAsRocfinityV6(): Promise<(bigint)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifiers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifiers') != null
  }
}

export class PolkadotXcmVersionNotifyTargetsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The target locations that are subscribed to our version changes, as well as the most recent
   *  of our versions we informed them of.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifyTargets') === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
  }

  /**
   *  The target locations that are subscribed to our version changes, as well as the most recent
   *  of our versions we informed them of.
   */
  async getAsRocfinityV6(key1: number, key2: rocfinityV6.VersionedMultiLocation): Promise<[bigint, bigint, number] | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifyTargets', key1, key2)
  }

  async getManyAsRocfinityV6(keys: [number, rocfinityV6.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifyTargets', keys)
  }

  async getAllAsRocfinityV6(): Promise<([bigint, bigint, number])[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifyTargets')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifyTargets') != null
  }
}

export class PoolsNextPoolIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV1() {
    return this._chain.getStorageItemTypeHash('Pools', 'NextPoolId') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Pools', 'NextPoolId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Pools', 'NextPoolId') != null
  }
}

export class PoolsPoolsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information about the pools
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Pools', 'Pools') === 'c34074cd3c393bbbf499a52d01b17aab7f4b9ef8d114a6f1153dba4c76f48632'
  }

  /**
   *  Information about the pools
   */
  async getAsRocfinityV5(): Promise<[Uint8Array, rocfinityV5.Pool][]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Pools', 'Pools')
  }

  get isV1() {
    return this._chain.getStorageItemTypeHash('Pools', 'Pools') === '2d467a041f3422f5668753c5fbac435e78eff005564666c1904628ef2d9ee7fd'
  }

  async getAsV1(key: bigint): Promise<v1.Pool | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Pools', 'Pools', key)
  }

  async getManyAsV1(keys: bigint[]): Promise<(v1.Pool | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Pools', 'Pools', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(v1.Pool)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Pools', 'Pools')
  }

  /**
   *  Information about the pools
   */
  get isV3() {
    return this._chain.getStorageItemTypeHash('Pools', 'Pools') === 'c34074cd3c393bbbf499a52d01b17aab7f4b9ef8d114a6f1153dba4c76f48632'
  }

  /**
   *  Information about the pools
   */
  async getAsV3(): Promise<[Uint8Array, v3.Pool][]> {
    assert(this.isV3)
    return this._chain.getStorage(this.blockHash, 'Pools', 'Pools')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Pools', 'Pools') != null
  }
}

export class PreimagePreimageForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The preimages stored by this pallet.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  The preimages stored by this pallet.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'PreimageFor', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') != null
  }
}

export class PreimageStatusForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The request status of a given hash.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
  }

  /**
   *  The request status of a given hash.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.RequestStatus | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'StatusFor', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.RequestStatus | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.RequestStatus)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') != null
  }
}

export class RandomnessCollectiveFlipRandomMaterialStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Series of block headers from the last 81 blocks that acts as random seed material. This
   *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
   *  the oldest hash.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  Series of block headers from the last 81 blocks that acts as random seed material. This
   *  is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
   *  the oldest hash.
   */
  async getAsRocfinityV5(): Promise<Uint8Array[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'RandomnessCollectiveFlip', 'RandomMaterial')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('RandomnessCollectiveFlip', 'RandomMaterial') != null
  }
}

export class SchedulerAgendaStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '993d140b941a0c85f780ae26196adc205e2c2d10e7dbd15212daef68f7909fe9'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsRocfinityV5(key: number): Promise<(rocfinityV5.ScheduledV3 | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<((rocfinityV5.ScheduledV3 | undefined)[])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<((rocfinityV5.ScheduledV3 | undefined)[])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '489cc03243149a7f48e06f866bd088df2597e50cb80dc2adca721620723e0a8a'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsRocfinityV6(key: number): Promise<(rocfinityV6.ScheduledV3 | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsRocfinityV6(keys: number[]): Promise<((rocfinityV6.ScheduledV3 | undefined)[])[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<((rocfinityV6.ScheduledV3 | undefined)[])[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '730fbc487a2049d5cff6d2b2a8afba7cea5dd33cde7f6fbac0d2c4db9f0765a0'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV2(key: number): Promise<(v2.ScheduledV3 | undefined)[]> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV2(keys: number[]): Promise<((v2.ScheduledV3 | undefined)[])[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV2(): Promise<((v2.ScheduledV3 | undefined)[])[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV3() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '5aff581e546f5198a9e72bd3877d9b9840a6e12e466e332094cbb8ca8d06c91a'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV3(key: number): Promise<(v3.ScheduledV3 | undefined)[]> {
    assert(this.isV3)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV3(keys: number[]): Promise<((v3.ScheduledV3 | undefined)[])[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV3(): Promise<((v3.ScheduledV3 | undefined)[])[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') != null
  }
}

export class SchedulerLookupStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Lookup from identity to the block number and index of the task.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Lookup') === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
  }

  /**
   *  Lookup from identity to the block number and index of the task.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<[number, number] | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Lookup', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<([number, number] | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Lookup', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<([number, number])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Lookup')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Lookup') != null
  }
}

export class SessionCurrentIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current index of the session.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Session', 'CurrentIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Current index of the session.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Session', 'CurrentIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'CurrentIndex') != null
  }
}

export class SessionDisabledValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Indices of disabled validators.
   * 
   *  The vec is always kept sorted so that we can find whether a given validator is
   *  disabled using binary search. It gets cleared when `on_session_ending` returns
   *  a new set of identities.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Session', 'DisabledValidators') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Indices of disabled validators.
   * 
   *  The vec is always kept sorted so that we can find whether a given validator is
   *  disabled using binary search. It gets cleared when `on_session_ending` returns
   *  a new set of identities.
   */
  async getAsRocfinityV5(): Promise<number[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Session', 'DisabledValidators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'DisabledValidators') != null
  }
}

export class SessionKeyOwnerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  async getAsRocfinityV5(key: [Uint8Array, Uint8Array]): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Session', 'KeyOwner', key)
  }

  async getManyAsRocfinityV5(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') != null
  }
}

export class SessionNextKeysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next session keys for a validator.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === '2f670cd584e15d58095cb717f2ec5413369ec61a1d09b68212a36ac0523e456b'
  }

  /**
   *  The next session keys for a validator.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.SessionKeys | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.SessionKeys | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.SessionKeys)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys')
  }

  /**
   *  The next session keys for a validator.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === 'ae0c60ac4ee2dd838f17d6007db841839476f10123e4729d4b0b8f2602afa357'
  }

  /**
   *  The next session keys for a validator.
   */
  async getAsV2(key: Uint8Array): Promise<v2.SessionKeys | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key)
  }

  async getManyAsV2(keys: Uint8Array[]): Promise<(v2.SessionKeys | undefined)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys.map(k => [k]))
  }

  async getAllAsV2(): Promise<(v2.SessionKeys)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys')
  }

  /**
   *  The next session keys for a validator.
   */
  get isV3() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === '2f670cd584e15d58095cb717f2ec5413369ec61a1d09b68212a36ac0523e456b'
  }

  /**
   *  The next session keys for a validator.
   */
  async getAsV3(key: Uint8Array): Promise<v3.SessionKeys | undefined> {
    assert(this.isV3)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key)
  }

  async getManyAsV3(keys: Uint8Array[]): Promise<(v3.SessionKeys | undefined)[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys.map(k => [k]))
  }

  async getAllAsV3(): Promise<(v3.SessionKeys)[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') != null
  }
}

export class SessionQueuedChangedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if the underlying economic identities or weighting behind the validators
   *  has changed in the queued validator set.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedChanged') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if the underlying economic identities or weighting behind the validators
   *  has changed in the queued validator set.
   */
  async getAsRocfinityV5(): Promise<boolean> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedChanged')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedChanged') != null
  }
}

export class SessionQueuedKeysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') === '932bfec933e0f3e31ccbf8c6fe92f26e726dddd47f6a44fd88e96d56054aa98a'
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  async getAsRocfinityV5(): Promise<[Uint8Array, rocfinityV5.SessionKeys][]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedKeys')
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') === '0a46f52a4d2fbd54bb31da7161556814e66b469df7c14975323784b6b294b5e7'
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  async getAsV2(): Promise<[Uint8Array, v2.SessionKeys][]> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedKeys')
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  get isV3() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') === '932bfec933e0f3e31ccbf8c6fe92f26e726dddd47f6a44fd88e96d56054aa98a'
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  async getAsV3(): Promise<[Uint8Array, v3.SessionKeys][]> {
    assert(this.isV3)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedKeys')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') != null
  }
}

export class SessionValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current set of validators.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Session', 'Validators') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current set of validators.
   */
  async getAsRocfinityV5(): Promise<Uint8Array[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Session', 'Validators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'Validators') != null
  }
}

export class SudoKeyStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  async getAsRocfinityV5(): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'Key')
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  async getAsV1(): Promise<Uint8Array> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'Key')
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  async getAsV2(): Promise<Uint8Array | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'Key')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') != null
  }
}

export class SystemAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.AccountInfo> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.AccountInfo)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.AccountInfo)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class SystemAllExtrinsicsLenStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  async getAsRocfinityV5(): Promise<number | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'AllExtrinsicsLen')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') != null
  }
}

export class SystemBlockHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of block numbers to block hashes.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'BlockHash') === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
  }

  /**
   *  Map of block numbers to block hashes.
   */
  async getAsRocfinityV5(key: number): Promise<Uint8Array> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockHash', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'System', 'BlockHash', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'System', 'BlockHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'BlockHash') != null
  }
}

export class SystemBlockWeightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current weight for the block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
  }

  /**
   *  The current weight for the block.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.PerDispatchClass> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockWeight')
  }

  /**
   *  The current weight for the block.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') === 'd35f09c6f3fd2f6e93d9006f364b5b6e91ce1207594e51247070364731dba424'
  }

  /**
   *  The current weight for the block.
   */
  async getAsRocfinityV6(): Promise<rocfinityV6.PerDispatchClass> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockWeight')
  }

  /**
   *  The current weight for the block.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
  }

  /**
   *  The current weight for the block.
   */
  async getAsV1(): Promise<v1.PerDispatchClass> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockWeight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') != null
  }
}

export class SystemDigestStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.Digest> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '08ab0f1eb08eb281a0be5123646d1a04bf4254218b3b8617ed26e880f8eaa52f'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV1(): Promise<v1.Digest> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV2(): Promise<v2.Digest> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Digest') != null
  }
}

export class SystemEventCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'EventCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'EventCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'EventCount') != null
  }
}

export class SystemEventTopicsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'EventTopics') === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
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
  async getAsRocfinityV5(key: Uint8Array): Promise<[number, number][]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'EventTopics', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<([number, number][])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<([number, number][])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'EventTopics') != null
  }
}

export class SystemEventsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
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
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'ef39e5f1c13dc9f246bed0ff3d3981861dd54102023ebe2eb2ebc17ebc2a9d92'
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
  async getAsRocfinityV5(): Promise<rocfinityV5.EventRecord[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
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
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '552d66de5a0be80ca24cfe3354a66aaf600154156628cd3b3f76f34a7c87a5a5'
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
  async getAsRocfinityV6(): Promise<rocfinityV6.EventRecord[]> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '23fd5dcee7cda161a02e562d592b78824641f0d3b02526c7af7182361bd6c01f'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV1(): Promise<v1.EventRecord[]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '35c64341488fff4210e4cf63ee50752aa4d11209f47b066f4d681bde5efcfef1'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV2(): Promise<v2.EventRecord[]> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV3() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'c8a0f30468e6e6d0918317212be73b33345be77657252cc8e53d581816112b83'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV3(): Promise<v3.EventRecord[]> {
    assert(this.isV3)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Events') != null
  }
}

export class SystemExecutionPhaseStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The execution phase of the block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
  }

  /**
   *  The execution phase of the block.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.Phase | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'ExecutionPhase')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') != null
  }
}

export class SystemExtrinsicCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total extrinsics count for the current block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total extrinsics count for the current block.
   */
  async getAsRocfinityV5(): Promise<number | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') != null
  }
}

export class SystemExtrinsicDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  async getAsRocfinityV5(key: number): Promise<Uint8Array> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicData', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'System', 'ExtrinsicData', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'System', 'ExtrinsicData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') != null
  }
}

export class SystemLastRuntimeUpgradeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.LastRuntimeUpgradeInfo | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'LastRuntimeUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') != null
  }
}

export class SystemNumberStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'Number') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'Number')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Number') != null
  }
}

export class SystemParentHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Hash of the previous block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Hash of the previous block.
   */
  async getAsRocfinityV5(): Promise<Uint8Array> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'ParentHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') != null
  }
}

export class SystemUpgradedToTripleRefCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  async getAsRocfinityV5(): Promise<boolean> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToTripleRefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') != null
  }
}

export class SystemUpgradedToU32RefCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  async getAsRocfinityV5(): Promise<boolean> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToU32RefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') != null
  }
}

export class TagsAssetIdsByTagIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  `AssetId`s by `TagId`
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Tags', 'AssetIdsByTagId') === '984b756ec7a461f556ee62d13d0d6560997b6b3aaef49f21cc965a459038c637'
  }

  /**
   *  `AssetId`s by `TagId`
   */
  async getAsV1(key1: bigint, key2: v1.TypedLocalAssetId): Promise<null | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Tags', 'AssetIdsByTagId', key1, key2)
  }

  async getManyAsV1(keys: [bigint, v1.TypedLocalAssetId][]): Promise<(null | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Tags', 'AssetIdsByTagId', keys)
  }

  async getAllAsV1(): Promise<(null)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Tags', 'AssetIdsByTagId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tags', 'AssetIdsByTagId') != null
  }
}

export class TagsAssetIdsToRemoveStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Asset ids that will be removed in on_idle
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Tags', 'AssetIdsToRemove') === 'ea36f33059b5bcc22da55bb541aab505ebaf772c088b3f123cba5b1c573baaae'
  }

  /**
   *  Asset ids that will be removed in on_idle
   */
  async getAsV1(key: v1.TypedLocalAssetId): Promise<null | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Tags', 'AssetIdsToRemove', key)
  }

  async getManyAsV1(keys: v1.TypedLocalAssetId[]): Promise<(null | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Tags', 'AssetIdsToRemove', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(null)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Tags', 'AssetIdsToRemove')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tags', 'AssetIdsToRemove') != null
  }
}

export class TagsNextTagIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Next `TagId` that will be used when a `Tag` is created
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Tags', 'NextTagId') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  Next `TagId` that will be used when a `Tag` is created
   */
  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Tags', 'NextTagId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tags', 'NextTagId') != null
  }
}

export class TagsTagIdsByAssetIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  `TagId`s by `AssetId`
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Tags', 'TagIdsByAssetId') === 'f3dad8d1199217d03fb7a032f1eacfb8377b2891e197008fbb11b326852c82bd'
  }

  /**
   *  `TagId`s by `AssetId`
   */
  async getAsV1(key: bigint): Promise<bigint[] | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Tags', 'TagIdsByAssetId', key)
  }

  async getManyAsV1(keys: bigint[]): Promise<(bigint[] | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Tags', 'TagIdsByAssetId', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(bigint[])[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Tags', 'TagIdsByAssetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tags', 'TagIdsByAssetId') != null
  }
}

export class TagsTagsByIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Tags by `TagId`
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Tags', 'TagsById') === '279f34258579b6e26b1972e4c4f7f17f8bc6f33254823ecdd37eed694135678a'
  }

  /**
   *  Tags by `TagId`
   */
  async getAsV1(key: bigint): Promise<v1.Tag | undefined> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Tags', 'TagsById', key)
  }

  async getManyAsV1(keys: bigint[]): Promise<(v1.Tag | undefined)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Tags', 'TagsById', keys.map(k => [k]))
  }

  async getAllAsV1(): Promise<(v1.Tag)[]> {
    assert(this.isV1)
    return this._chain.queryStorage(this.blockHash, 'Tags', 'TagsById')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tags', 'TagsById') != null
  }
}

export class TechnicalCommitteeMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsRocfinityV5(): Promise<Uint8Array[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Members') != null
  }
}

export class TechnicalCommitteePrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsRocfinityV5(): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Prime') != null
  }
}

export class TechnicalCommitteeProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsRocfinityV5(): Promise<number> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalCount') != null
  }
}

export class TechnicalCommitteeProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '3086cb7dd72e8a750dd7b1a207b9f94123651b10d43e995c166c43e4d1b38101'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.Call | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.Call | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Call)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '1d2fe834da1946560a18e385db353906535734a3ba734a68bb830b167e352a8a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsRocfinityV6(key: Uint8Array): Promise<rocfinityV6.Call | undefined> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsRocfinityV6(keys: Uint8Array[]): Promise<(rocfinityV6.Call | undefined)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsRocfinityV6(): Promise<(rocfinityV6.Call)[]> {
    assert(this.isRocfinityV6)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '0f3007c68722fd11be8b2174f41f58819d999d19ac6bc66e70c97b8b57b3eb90'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2(key: Uint8Array): Promise<v2.Call | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2(keys: Uint8Array[]): Promise<(v2.Call | undefined)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV2(): Promise<(v2.Call)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV3() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '8072ac36972240ef7be53d931291d08dcf2288b6065ce85460cf882dff3d6fbd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV3(key: Uint8Array): Promise<v3.Call | undefined> {
    assert(this.isV3)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV3(keys: Uint8Array[]): Promise<(v3.Call | undefined)[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV3(): Promise<(v3.Call)[]> {
    assert(this.isV3)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') != null
  }
}

export class TechnicalCommitteeProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The hashes of the active proposals.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsRocfinityV5(): Promise<Uint8Array[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Proposals') != null
  }
}

export class TechnicalCommitteeVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.Votes | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Voting', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.Votes | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'Voting', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.Votes)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Voting') != null
  }
}

export class TechnicalMembershipMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current membership, stored as an ordered Vec.
   */
  async getAsRocfinityV5(): Promise<Uint8Array[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TechnicalMembership', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Members') != null
  }
}

export class TechnicalMembershipPrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current prime member, if one exists.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The current prime member, if one exists.
   */
  async getAsRocfinityV5(): Promise<Uint8Array | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TechnicalMembership', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalMembership', 'Prime') != null
  }
}

export class TimestampDidUpdateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  async getAsRocfinityV5(): Promise<boolean> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Timestamp', 'DidUpdate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') != null
  }
}

export class TimestampNowStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current time for the current block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'Now') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  Current time for the current block.
   */
  async getAsRocfinityV5(): Promise<bigint> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Timestamp', 'Now')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Timestamp', 'Now') != null
  }
}

export class TransactionPaymentNextFeeMultiplierStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  async getAsRocfinityV5(): Promise<bigint> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'NextFeeMultiplier')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') != null
  }
}

export class TransactionPaymentStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
  }

  async getAsRocfinityV5(): Promise<rocfinityV5.Type_336> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') != null
  }
}

export class VestingVestingSchedulesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Vesting schedules of an account.
   * 
   *  VestingSchedules: map AccountId => Vec<VestingSchedule>
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('Vesting', 'VestingSchedules') === 'd1025301ffa60f04c50bb1007ecb356d52103dd9c366150de1ba80c6e043ac2f'
  }

  /**
   *  Vesting schedules of an account.
   * 
   *  VestingSchedules: map AccountId => Vec<VestingSchedule>
   */
  async getAsRocfinityV5(key: Uint8Array): Promise<rocfinityV5.VestingSchedule[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'Vesting', 'VestingSchedules', key)
  }

  async getManyAsRocfinityV5(keys: Uint8Array[]): Promise<(rocfinityV5.VestingSchedule[])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'VestingSchedules', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(rocfinityV5.VestingSchedule[])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'VestingSchedules')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Vesting', 'VestingSchedules') != null
  }
}

export class XcmpQueueInboundXcmpMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpMessages') === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
  }

  /**
   *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
   */
  async getAsRocfinityV5(key1: number, key2: number): Promise<Uint8Array> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpMessages', key1, key2)
  }

  async getManyAsRocfinityV5(keys: [number, number][]): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpMessages', keys)
  }

  async getAllAsRocfinityV5(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpMessages') != null
  }
}

export class XcmpQueueInboundXcmpStatusStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpStatus') === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.InboundChannelDetails[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpStatus')
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpStatus') === '48f3de6a738f03ae3c729fdf2adfbcc7dd58a2d62c1e81c228ac332b7237c8c2'
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  async getAsV1(): Promise<[number, v1.InboundStatus, [number, v1.XcmpMessageFormat][]][]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpStatus')
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpStatus') === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  async getAsV2(): Promise<v2.InboundChannelDetails[]> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpStatus')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpStatus') != null
  }
}

export class XcmpQueueOutboundXcmpMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The messages outbound in a given XCMP channel.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpMessages') === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
  }

  /**
   *  The messages outbound in a given XCMP channel.
   */
  async getAsRocfinityV5(key1: number, key2: number): Promise<Uint8Array> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpMessages', key1, key2)
  }

  async getManyAsRocfinityV5(keys: [number, number][]): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpMessages', keys)
  }

  async getAllAsRocfinityV5(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpMessages') != null
  }
}

export class XcmpQueueOutboundXcmpStatusStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpStatus') === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.OutboundChannelDetails[]> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpStatus')
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpStatus') === '2284f25ad36d908dd9054d516baba1c7da89eb5dbefc09e2f88eaad6bd217ebf'
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  async getAsV1(): Promise<[number, v1.OutboundStatus, boolean, number, number][]> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpStatus')
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpStatus') === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  async getAsV2(): Promise<v2.OutboundChannelDetails[]> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpStatus')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpStatus') != null
  }
}

export class XcmpQueueOverweightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The messages that exceeded max individual message weight budget.
   * 
   *  These message stay in this storage map until they are manually dispatched via
   *  `service_overweight`.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'Overweight') === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
  }

  /**
   *  The messages that exceeded max individual message weight budget.
   * 
   *  These message stay in this storage map until they are manually dispatched via
   *  `service_overweight`.
   */
  async getAsRocfinityV5(key: bigint): Promise<[number, number, Uint8Array] | undefined> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'Overweight', key)
  }

  async getManyAsRocfinityV5(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'Overweight', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<([number, number, Uint8Array])[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'Overweight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'Overweight') != null
  }
}

export class XcmpQueueOverweightCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
   *  available free overweight index.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OverweightCount') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
   *  available free overweight index.
   */
  async getAsRocfinityV5(): Promise<bigint> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OverweightCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OverweightCount') != null
  }
}

export class XcmpQueueQueueConfigStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  async getAsRocfinityV5(): Promise<rocfinityV5.QueueConfigData> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueConfig')
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  get isRocfinityV6() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') === 'b9e7fe75fd5e16e066448c0d0a704aec5c90e5e751ca04108c2b35ab00764560'
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  async getAsRocfinityV6(): Promise<rocfinityV6.QueueConfigData> {
    assert(this.isRocfinityV6)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueConfig')
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') === '4eee4c318310895e220c6e665c876bf76f75ef8f5530bcd8f8ea1d5b966ff46f'
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  async getAsV1(): Promise<v1.QueueConfigData> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueConfig')
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  get isV2() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  async getAsV2(): Promise<v2.QueueConfigData> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueConfig')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') != null
  }
}

export class XcmpQueueQueueSuspendedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueSuspended') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
   */
  async getAsRocfinityV5(): Promise<boolean> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueSuspended')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueSuspended') != null
  }
}

export class XcmpQueueSignalMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any signal messages waiting to be sent.
   */
  get isRocfinityV5() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'SignalMessages') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Any signal messages waiting to be sent.
   */
  async getAsRocfinityV5(key: number): Promise<Uint8Array> {
    assert(this.isRocfinityV5)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'SignalMessages', key)
  }

  async getManyAsRocfinityV5(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'SignalMessages', keys.map(k => [k]))
  }

  async getAllAsRocfinityV5(): Promise<(Uint8Array)[]> {
    assert(this.isRocfinityV5)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'SignalMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'SignalMessages') != null
  }
}
