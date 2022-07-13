import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as efinityV1 from './efinityV1'
import * as v2 from './v2'
import * as v4 from './v4'
import * as efinityV3 from './efinityV3'

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
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isEfinityV1() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsEfinityV1(key: efinityV1.AccountId32): Promise<efinityV1.AccountData> {
    assert(this.isEfinityV1)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsEfinityV1(keys: efinityV1.AccountId32[]): Promise<(efinityV1.AccountData)[]> {
    assert(this.isEfinityV1)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') != null
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
  get isEfinityV1() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsEfinityV1(): Promise<bigint> {
    assert(this.isEfinityV1)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
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
  get isV2() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Attributes') === 'a746a93405e250d7e804277de85e59649a8d0f26dcdbc38249cee2190785886d'
  }

  /**
   *  Metadata of collections and tokens.
   */
  async getAsV2(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<v2.Attribute | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'Attributes', key1, key2, key3)
  }

  async getManyAsV2(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<(v2.Attribute | undefined)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'Attributes', keys)
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
  get isV2() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'CollectionAccounts') === 'b46672e82d7bfd0dfb77b459f54edcb3814fab36fcd1e60c5702769a7fd5b155'
  }

  /**
   *  Stores information for an account per collection
   */
  async getAsV2(key1: bigint, key2: v2.AccountId32): Promise<v2.CollectionAccount | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'CollectionAccounts', key1, key2)
  }

  async getManyAsV2(keys: [bigint, v2.AccountId32][]): Promise<(v2.CollectionAccount | undefined)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'CollectionAccounts', keys)
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

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Collections') != null
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
  get isV2() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'TokenAccounts') === '89f39f41ed2671d2c69225fcbd88510dab73617db2599eb112427615192fa223'
  }

  /**
   *  Accounts per token
   */
  async getAsV2(key1: v2.AccountId32, key2: bigint, key3: bigint): Promise<v2.TokenAccount | undefined> {
    assert(this.isV2)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', key1, key2, key3)
  }

  async getManyAsV2(keys: [v2.AccountId32, bigint, bigint][]): Promise<(v2.TokenAccount | undefined)[]> {
    assert(this.isV2)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', keys)
  }

  /**
   *  Accounts per token
   */
  get isEfinityV3() {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'TokenAccounts') === 'aa9987301d7154519df0fc59a4664d747676b382efcba3db6f30f66eda406862'
  }

  /**
   *  Accounts per token
   */
  async getAsEfinityV3(key1: efinityV3.AccountId32, key2: bigint, key3: bigint): Promise<efinityV3.TokenAccount | undefined> {
    assert(this.isEfinityV3)
    return this._chain.getStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', key1, key2, key3)
  }

  async getManyAsEfinityV3(keys: [efinityV3.AccountId32, bigint, bigint][]): Promise<(efinityV3.TokenAccount | undefined)[]> {
    assert(this.isEfinityV3)
    return this._chain.queryStorage(this.blockHash, 'MultiTokens', 'TokenAccounts', keys)
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

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTokens', 'Tokens') != null
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
  get isEfinityV1() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsEfinityV1(key: efinityV1.AccountId32): Promise<efinityV1.AccountInfo> {
    assert(this.isEfinityV1)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsEfinityV1(keys: efinityV1.AccountId32[]): Promise<(efinityV1.AccountInfo)[]> {
    assert(this.isEfinityV1)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
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
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isEfinityV1() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '23fd5dcee7cda161a02e562d592b78824641f0d3b02526c7af7182361bd6c01f'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsEfinityV1(): Promise<efinityV1.EventRecord[]> {
    assert(this.isEfinityV1)
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
  get isEfinityV3() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'c8a0f30468e6e6d0918317212be73b33345be77657252cc8e53d581816112b83'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsEfinityV3(): Promise<efinityV3.EventRecord[]> {
    assert(this.isEfinityV3)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV4() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === '8c61aa1f3f49d4106d772e00117bb4cf55e9db904b3e5fddc65866171f5f7a6f'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV4(): Promise<v4.EventRecord[]> {
    assert(this.isV4)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Events') != null
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
  get isEfinityV1() {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  async getAsEfinityV1(): Promise<efinityV1.LastRuntimeUpgradeInfo | undefined> {
    assert(this.isEfinityV1)
    return this._chain.getStorage(this.blockHash, 'System', 'LastRuntimeUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') != null
  }
}
