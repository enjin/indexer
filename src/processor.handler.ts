import { Block, CallItem, CommonContext, EventItem } from './contexts'
import { AccountTokenEvent, Event } from './model'
import { match } from 'ts-pattern'
import { processors } from './processors'
import { multiTokens, balances, claims, marketplace, fuelTanks, polkadotXcm, identity } from './types/events'
import { calls } from './types'

export async function eventHandler(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave = false
): Promise<Event | [Event, AccountTokenEvent] | undefined> {
    return match(item.name)
        .with(multiTokens.approved.name, () => processors.multiTokens.approved(ctx, item, skipSave))
        .with(multiTokens.attributeRemoved.name, () =>
            processors.multiTokens.attributeRemoved(ctx, block, item, skipSave)
        )
        .with(multiTokens.attributeSet.name, () => processors.multiTokens.attributeSet(ctx, block, item, skipSave))
        .with(multiTokens.burned.name, () => processors.multiTokens.burned(ctx, block, item, skipSave))
        .with(multiTokens.collectionAccountCreated.name, () =>
            processors.multiTokens.collectionAccountCreated(ctx, block, item, skipSave)
        )
        .with(multiTokens.collectionAccountDestroyed.name, () =>
            processors.multiTokens.collectionAccountDestroyed(ctx, block, item, skipSave)
        )
        .with(multiTokens.collectionCreated.name, () =>
            processors.multiTokens.collectionCreated(ctx, block, item, skipSave)
        )
        .with(multiTokens.collectionDestroyed.name, () =>
            processors.multiTokens.collectionDestroyed(ctx, block, item, skipSave)
        )
        .with(multiTokens.collectionMutated.name, () =>
            processors.multiTokens.collectionMutated(ctx, block, item, skipSave)
        )
        .with(multiTokens.collectionTransferred.name, () =>
            processors.multiTokens.collectionTransferred(ctx, block, item, skipSave)
        )
        .with(multiTokens.frozen.name, () => processors.multiTokens.frozen(ctx, block, item, skipSave))
        .with(multiTokens.minted.name, () => processors.multiTokens.minted(ctx, block, item, skipSave))
        .with(multiTokens.infused.name, () => processors.multiTokens.infused(ctx, block, item, skipSave))
        .with(multiTokens.reserved.name, () => processors.multiTokens.reserved(ctx, block, item, skipSave))
        .with(multiTokens.thawed.name, () => processors.multiTokens.thawed(ctx, block, item, skipSave))
        .with(multiTokens.tokenAccountCreated.name, () =>
            processors.multiTokens.tokenAccountCreated(ctx, block, item, skipSave)
        )
        .with(multiTokens.tokenAccountDestroyed.name, () =>
            processors.multiTokens.tokenAccountDestroyed(ctx, block, item, skipSave)
        )
        .with(multiTokens.tokenCreated.name, () => processors.multiTokens.tokenCreated(ctx, block, item, skipSave))
        .with(multiTokens.tokenDestroyed.name, () => processors.multiTokens.tokenDestroyed(ctx, block, item, skipSave))
        .with(multiTokens.tokenMutated.name, () => processors.multiTokens.tokenMutated(ctx, block, item, skipSave))
        .with(multiTokens.transferred.name, () => processors.multiTokens.transferred(ctx, block, item, skipSave))
        .with(multiTokens.unapproved.name, () => processors.multiTokens.unapproved(ctx, block, item, skipSave))
        .with(multiTokens.unreserved.name, () => processors.multiTokens.unreserved(ctx, block, item, skipSave))
        .with(multiTokens.claimedCollections.name, () => processors.multiTokens.claimedCollections(ctx, block, item))
        .with(multiTokens.claimTokensInitiated.name, () =>
            processors.multiTokens.claimTokensInitiated(ctx, block, item)
        )
        .with(multiTokens.claimTokensCompleted.name, () =>
            processors.multiTokens.claimTokensCompleted(ctx, block, item)
        )
        .with(
            balances.balanceSet.name,
            balances.burned.name,
            balances.deposit.name,
            balances.dustLost.name,
            balances.endowed.name,
            balances.frozen.name,
            balances.locked.name,
            balances.minted.name,
            balances.reserveRepatriated.name,
            balances.reserved.name,
            balances.restored.name,
            balances.slashed.name,
            balances.suspended.name,
            balances.thawed.name,
            balances.unlocked.name,
            balances.unreserved.name,
            balances.transfer.name,
            balances.withdraw.name,
            () => processors.balances.save(item)
        )
        .with(claims.claimRequested.name, () => processors.claims.claimRequested(ctx, block, item))
        .with(claims.claimRejected.name, () => processors.claims.claimRejected(ctx, block, item))
        .with(claims.claimMinted.name, () => processors.claims.claimMinted(ctx, block, item))
        .with(claims.claimed.name, () => processors.claims.claimed(ctx, block, item))
        .with(claims.exchangeRateSet.name, () => processors.claims.exchangeRateSet(ctx, block, item))
        .with(claims.delayTimeForClaimSet.name, () => processors.claims.delayTimeForClaimSet(ctx, block, item))
        .with(marketplace.listingCreated.name, () => processors.marketplace.listingCreated(ctx, block, item))
        .with(marketplace.listingCancelled.name, () => processors.marketplace.listingCancelled(ctx, block, item))
        .with(marketplace.listingFilled.name, () => processors.marketplace.listingFilled(ctx, block, item))
        .with(marketplace.bidPlaced.name, () => processors.marketplace.bidPlaced(ctx, block, item))
        .with(marketplace.auctionFinalized.name, () => processors.marketplace.auctionFinalized(ctx, block, item))
        .with(marketplace.counterOfferPlaced.name, () => processors.marketplace.counterOfferPlaced(ctx, block, item))
        .with(marketplace.counterOfferAnswered.name, () =>
            processors.marketplace.counterOfferAnswered(ctx, block, item)
        )
        .with(marketplace.counterOfferRemoved.name, () => processors.marketplace.counterOfferRemoved(ctx, block, item))
        .with(marketplace.listingRemovedUnderMinimum.name, () =>
            processors.marketplace.listingRemovedUnderMinimum(ctx, block, item)
        )
        .with(polkadotXcm.attempted.name, () => processors.polkadotXcm.attempted(ctx, block, item))
        .with(fuelTanks.accountAdded.name, () => processors.fuelTanks.accountAdded(ctx, block, item))
        .with(fuelTanks.accountRemoved.name, () => processors.fuelTanks.accountRemoved(ctx, block, item))
        .with(fuelTanks.accountRuleDataRemoved.name, () =>
            processors.fuelTanks.accountRuleDataRemoved(ctx, block, item)
        )
        .with(fuelTanks.freezeStateMutated.name, () => processors.fuelTanks.freezeStateMutated(ctx, block, item))
        .with(fuelTanks.fuelTankCreated.name, () => processors.fuelTanks.fuelTankCreated(ctx, block, item))
        .with(fuelTanks.fuelTankDestroyed.name, () => processors.fuelTanks.fuelTankDestroyed(ctx, block, item))
        .with(fuelTanks.fuelTankMutated.name, () => processors.fuelTanks.fuelTankMutated(ctx, block, item))
        .with(fuelTanks.ruleSetInserted.name, () => processors.fuelTanks.ruleSetInserted(ctx, block, item))
        .with(fuelTanks.ruleSetRemoved.name, () => processors.fuelTanks.ruleSetRemoved(ctx, block, item))
        .with(identity.identityCleared.name, () => processors.identity.identityCleared(ctx, block, item))
        .with(identity.identityKilled.name, () => processors.identity.identityKilled(ctx, block, item))
        .with(identity.identitySet.name, () => processors.identity.identitySet(ctx, block, item))
        .with(identity.judgementGiven.name, () => processors.identity.judgementGiven(ctx, block, item))
        .with(identity.judgementRequested.name, () => processors.identity.judgementRequested(ctx, block, item))
        .with(identity.judgementUnrequested.name, () => processors.identity.judgementUnrequested(ctx, block, item))
        .with(identity.registrarAdded.name, () => processors.identity.registrarAdded(ctx, block, item))
        .with(identity.subIdentityAdded.name, () => processors.identity.subIdentityAdded(ctx, block, item))
        .with(identity.subIdentityRemoved.name, () => processors.identity.subIdentityRemoved(ctx, block, item))
        .with(identity.subIdentityRevoked.name, () => processors.identity.subIdentityRevoked(ctx, block, item))
        .otherwise(() => {
            ctx.log.error(`Unsupported event on handle event: ${item.name}`)
            return undefined
        })
}

export async function callHandler(ctx: CommonContext, block: Block, item: CallItem) {
    switch (item.name) {
        case calls.identity.setSubs.name:
            return processors.identity.setSubs(ctx, block, item)
        case calls.identity.renameSub.name:
            return processors.identity.renameSub(ctx, block, item)
        default: {
            return undefined
        }
    }
}
