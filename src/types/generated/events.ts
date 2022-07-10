import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v2 from './v2'

export class BalancesWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Withdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get isV2(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get asV2(): {who: v2.AccountId32, amount: bigint} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An approval took place. If `token_id` is `None`, it applies to the whole collection.
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Approved') === 'be2c3db8582ba3e20a4c47b559208645f08eaef7453ba9dcf4fe7d6a8987b514'
  }

  /**
   * An approval took place. If `token_id` is `None`, it applies to the whole collection.
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), owner: v2.AccountId32, operator: v2.AccountId32, amount: (bigint | undefined), expiration: (number | undefined)} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensAttributeRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.AttributeRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An attribute has been removed
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.AttributeRemoved') === '4168a0c4eaad91f81c843978c2860e3e03730b7533206af99d8dc2200efdbec8'
  }

  /**
   * An attribute has been removed
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensAttributeSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.AttributeSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New attribute has been set
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.AttributeSet') === 'd90964f28bdfc61e8bf4173cbde05cc375064aff638f0a40640ab04549efc4c2'
  }

  /**
   * New attribute has been set
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensBurnedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Burned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Units of a `Token` were burned
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Burned') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
  }

  /**
   * Units of a `Token` were burned
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, accountId: v2.AccountId32, amount: bigint} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionAccountCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionAccountCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new `CollectionAccount` was created
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionAccountCreated') === '7b4295cf1bd074614f172814d727e76bda047f9869c73df3042c6baeb8b314c7'
  }

  /**
   * A new `CollectionAccount` was created
   */
  get asV2(): {collectionId: bigint, accountId: v2.AccountId32} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionAccountDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionAccountDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `CollectionAccount` was destroyed
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionAccountDestroyed') === '7b4295cf1bd074614f172814d727e76bda047f9869c73df3042c6baeb8b314c7'
  }

  /**
   * A `CollectionAccount` was destroyed
   */
  get asV2(): {collectionId: bigint, accountId: v2.AccountId32} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new `Collection` was created
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionCreated') === '9f2f2f3af227369fdf6d6bca903e9d24ff2c10dbe8e2e81cc062779b6581c722'
  }

  /**
   * A new `Collection` was created
   */
  get asV2(): {collectionId: bigint, owner: v2.AccountId32} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `Collection` was destroyed.
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionDestroyed') === '6b20939f2a6c4c23adcb69631c659bbf68a4e266bd90733cacfec7f21ecfc491'
  }

  /**
   * A `Collection` was destroyed.
   */
  get asV2(): {collectionId: bigint, caller: v2.AccountId32} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensFrozenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Frozen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Collection, token or account was frozen
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Frozen') === 'a014bbbee6c873377a5589792e1499a486dbe8684a671e199e6811cb3f48fdff'
  }

  /**
   * Collection, token or account was frozen
   */
  get asV2(): v2.Freeze {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensMintedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Minted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Units of a `Token` were minted
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Minted') === '02090af421cf73146a30e88cdca92a9ee992857db2e335edc43f0b9be6d7ed9c'
  }

  /**
   * Units of a `Token` were minted
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, issuer: v2.AccountId32, recipient: v2.AccountId32, amount: bigint} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensThawedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Thawed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Collection, token or account was unfrozen
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Thawed') === 'a014bbbee6c873377a5589792e1499a486dbe8684a671e199e6811cb3f48fdff'
  }

  /**
   * Collection, token or account was unfrozen
   */
  get asV2(): v2.Freeze {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenAccountCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenAccountCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new `TokenAccount` was created
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenAccountCreated') === '0cca0a7615506a78b65129d3424c22086426999e458decb2fb277f2a1aa1cb65'
  }

  /**
   * A new `TokenAccount` was created
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, accountId: v2.AccountId32, balance: bigint} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenAccountDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenAccountDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `TokenAccount` was destroyed
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenAccountDestroyed') === 'd3d24a0607b48c4ee8924ed762cb532aa6cf3a0d0410df546c31f4a14154c387'
  }

  /**
   * A `TokenAccount` was destroyed
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, accountId: v2.AccountId32} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `Token` was created
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenCreated') === '51fc1f1f4af97488d09187016da49d0820f9bf5a5f0662f551e14d3bf6c2f26f'
  }

  /**
   * A `Token` was created
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, issuer: v2.AccountId32, initialSupply: bigint} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `Token` was destroyed
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenDestroyed') === 'cf1d93ed1d0b9ceef6268da8c9921584304700425bfb5edd986b2b7a7b02a021'
  }

  /**
   * A `Token` was destroyed
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, caller: v2.AccountId32} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Units of a `Token` were transferred
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Transferred') === 'c845e6a95391a8fa441a8156f9f87ac0df95affb6d9fce2cad53cb422fe1942a'
  }

  /**
   * Units of a `Token` were transferred
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, operator: v2.AccountId32, from: v2.AccountId32, to: v2.AccountId32, amount: bigint} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensUnapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Unapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An unapproval took place. If `token_id` is `None`, it applies to the collection.
   */
  get isV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Unapproved') === '668c5b2be0f408488a0422b461e10a6786cfe678bc278d2579b4a1d3a8635d49'
  }

  /**
   * An unapproval took place. If `token_id` is `None`, it applies to the collection.
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), owner: v2.AccountId32, operator: v2.AccountId32} {
    assert(this.isV2)
    return this._chain.decodeEvent(this.event)
  }
}
