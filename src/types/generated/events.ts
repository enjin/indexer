import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v1 from './v1'
import * as v2 from './v2'

export class BalancesTransferEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Transfer')
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get isV1(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get asV1(): [v1.AccountId32, v1.AccountId32, bigint] {
    assert(this.isV1)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asV2(): {from: v2.AccountId32, to: v2.AccountId32, amount: bigint} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {from: v2.AccountId32, to: v2.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensApprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.Approved')
  }

  /**
   * An approval took place. If `token_id` is `None`, it applies to the whole collection.
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.Approved') === 'be2c3db8582ba3e20a4c47b559208645f08eaef7453ba9dcf4fe7d6a8987b514'
  }

  /**
   * An approval took place. If `token_id` is `None`, it applies to the whole collection.
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), owner: v2.AccountId32, operator: v2.AccountId32, amount: (bigint | undefined), expiration: (number | undefined)} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: (bigint | undefined), owner: v2.AccountId32, operator: v2.AccountId32, amount: (bigint | undefined), expiration: (number | undefined)} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensAttributeRemovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.AttributeRemoved')
  }

  /**
   * An attribute has been removed
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.AttributeRemoved') === '4168a0c4eaad91f81c843978c2860e3e03730b7533206af99d8dc2200efdbec8'
  }

  /**
   * An attribute has been removed
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensAttributeSetEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.AttributeSet')
  }

  /**
   * New attribute has been set
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.AttributeSet') === 'd90964f28bdfc61e8bf4173cbde05cc375064aff638f0a40640ab04549efc4c2'
  }

  /**
   * New attribute has been set
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensBurnedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.Burned')
  }

  /**
   * Units of a `Token` were burned
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.Burned') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
  }

  /**
   * Units of a `Token` were burned
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, accountId: v2.AccountId32, amount: bigint} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: bigint, accountId: v2.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensCollectionAccountCreatedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.CollectionAccountCreated')
  }

  /**
   * A new `CollectionAccount` was created
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.CollectionAccountCreated') === '7b4295cf1bd074614f172814d727e76bda047f9869c73df3042c6baeb8b314c7'
  }

  /**
   * A new `CollectionAccount` was created
   */
  get asV2(): {collectionId: bigint, accountId: v2.AccountId32} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, accountId: v2.AccountId32} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensCollectionAccountDestroyedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.CollectionAccountDestroyed')
  }

  /**
   * A `CollectionAccount` was destroyed
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.CollectionAccountDestroyed') === '7b4295cf1bd074614f172814d727e76bda047f9869c73df3042c6baeb8b314c7'
  }

  /**
   * A `CollectionAccount` was destroyed
   */
  get asV2(): {collectionId: bigint, accountId: v2.AccountId32} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, accountId: v2.AccountId32} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensCollectionCreatedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.CollectionCreated')
  }

  /**
   * A new `Collection` was created
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.CollectionCreated') === '9f2f2f3af227369fdf6d6bca903e9d24ff2c10dbe8e2e81cc062779b6581c722'
  }

  /**
   * A new `Collection` was created
   */
  get asV2(): {collectionId: bigint, owner: v2.AccountId32} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, owner: v2.AccountId32} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensCollectionDestroyedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.CollectionDestroyed')
  }

  /**
   * A `Collection` was destroyed.
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.CollectionDestroyed') === '6b20939f2a6c4c23adcb69631c659bbf68a4e266bd90733cacfec7f21ecfc491'
  }

  /**
   * A `Collection` was destroyed.
   */
  get asV2(): {collectionId: bigint, caller: v2.AccountId32} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, caller: v2.AccountId32} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensFrozenEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.Frozen')
  }

  /**
   * Collection, token or account was frozen
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.Frozen') === 'a014bbbee6c873377a5589792e1499a486dbe8684a671e199e6811cb3f48fdff'
  }

  /**
   * Collection, token or account was frozen
   */
  get asV2(): v2.Freeze {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): v2.Freeze {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensMintedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.Minted')
  }

  /**
   * Units of a `Token` were minted
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.Minted') === '02090af421cf73146a30e88cdca92a9ee992857db2e335edc43f0b9be6d7ed9c'
  }

  /**
   * Units of a `Token` were minted
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, issuer: v2.AccountId32, recipient: v2.AccountId32, amount: bigint} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: bigint, issuer: v2.AccountId32, recipient: v2.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensThawedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.Thawed')
  }

  /**
   * Collection, token or account was unfrozen
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.Thawed') === 'a014bbbee6c873377a5589792e1499a486dbe8684a671e199e6811cb3f48fdff'
  }

  /**
   * Collection, token or account was unfrozen
   */
  get asV2(): v2.Freeze {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): v2.Freeze {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensTokenAccountCreatedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.TokenAccountCreated')
  }

  /**
   * A new `TokenAccount` was created
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.TokenAccountCreated') === '0cca0a7615506a78b65129d3424c22086426999e458decb2fb277f2a1aa1cb65'
  }

  /**
   * A new `TokenAccount` was created
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, accountId: v2.AccountId32, balance: bigint} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: bigint, accountId: v2.AccountId32, balance: bigint} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensTokenAccountDestroyedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.TokenAccountDestroyed')
  }

  /**
   * A `TokenAccount` was destroyed
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.TokenAccountDestroyed') === 'd3d24a0607b48c4ee8924ed762cb532aa6cf3a0d0410df546c31f4a14154c387'
  }

  /**
   * A `TokenAccount` was destroyed
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, accountId: v2.AccountId32} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: bigint, accountId: v2.AccountId32} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensTokenCreatedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.TokenCreated')
  }

  /**
   * A `Token` was created
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.TokenCreated') === '51fc1f1f4af97488d09187016da49d0820f9bf5a5f0662f551e14d3bf6c2f26f'
  }

  /**
   * A `Token` was created
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, issuer: v2.AccountId32, initialSupply: bigint} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: bigint, issuer: v2.AccountId32, initialSupply: bigint} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensTokenDestroyedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.TokenDestroyed')
  }

  /**
   * A `Token` was destroyed
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.TokenDestroyed') === 'cf1d93ed1d0b9ceef6268da8c9921584304700425bfb5edd986b2b7a7b02a021'
  }

  /**
   * A `Token` was destroyed
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, caller: v2.AccountId32} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: bigint, caller: v2.AccountId32} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensTransferredEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.Transferred')
  }

  /**
   * Units of a `Token` were transferred
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.Transferred') === 'c845e6a95391a8fa441a8156f9f87ac0df95affb6d9fce2cad53cb422fe1942a'
  }

  /**
   * Units of a `Token` were transferred
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, operator: v2.AccountId32, from: v2.AccountId32, to: v2.AccountId32, amount: bigint} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: bigint, operator: v2.AccountId32, from: v2.AccountId32, to: v2.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensUnapprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'multiTokens.Unapproved')
  }

  /**
   * An unapproval took place. If `token_id` is `None`, it applies to the collection.
   */
  get isV2(): boolean {
    return this.ctx._chain.getEventHash('multiTokens.Unapproved') === '668c5b2be0f408488a0422b461e10a6786cfe678bc278d2579b4a1d3a8635d49'
  }

  /**
   * An unapproval took place. If `token_id` is `None`, it applies to the collection.
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), owner: v2.AccountId32, operator: v2.AccountId32} {
    assert(this.isV2)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: (bigint | undefined), owner: v2.AccountId32, operator: v2.AccountId32} {
    deprecateLatest()
    return this.asV2
  }
}
