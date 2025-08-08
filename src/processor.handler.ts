import { Block, CallItem, CommonContext, EventItem } from '~/contexts'
import { AccountTokenEvent, Event } from '~/model'
import { match } from 'ts-pattern'
import * as p from '~/pallet'
import {
    multiTokens,
    balances,
    claims,
    marketplace,
    fuelTanks,
    polkadotXcm,
    identity,
    nominationPools,
    stakeExchange,
    staking,
    xcmPallet,
    imOnline,
} from '~/type/events'
import { calls } from '~/type'
import { recordEventMetric } from '~/util/metrics-logger'

export async function eventHandler(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave = false
): Promise<Event | [Event, AccountTokenEvent] | undefined> {
    const eventName = item.name
    const start = Date.now()
    try {
        const result = match(item.name)
            .with(multiTokens.approved.name, () => p.multiTokens.processors.approved(ctx, item, skipSave))
            .with(multiTokens.attributeRemoved.name, () =>
                p.multiTokens.processors.attributeRemoved(ctx, block, item, skipSave)
            )
            .with(multiTokens.attributeSet.name, () =>
                p.multiTokens.processors.attributeSet(ctx, block, item, skipSave)
            )
            .with(multiTokens.burned.name, () => p.multiTokens.processors.burned(ctx, block, item, skipSave))
            .with(multiTokens.collectionAccountCreated.name, () =>
                p.multiTokens.processors.collectionAccountCreated(ctx, block, item, skipSave)
            )
            .with(multiTokens.collectionAccountDestroyed.name, () =>
                p.multiTokens.processors.collectionAccountDestroyed(ctx, block, item, skipSave)
            )
            .with(multiTokens.collectionCreated.name, () =>
                p.multiTokens.processors.collectionCreated(ctx, block, item, skipSave)
            )
            .with(multiTokens.collectionDestroyed.name, () =>
                p.multiTokens.processors.collectionDestroyed(ctx, block, item, skipSave)
            )
            .with(multiTokens.collectionMutated.name, () =>
                p.multiTokens.processors.collectionMutated(ctx, block, item, skipSave)
            )
            .with(multiTokens.collectionTransferred.name, () =>
                p.multiTokens.processors.collectionTransferred(ctx, block, item, skipSave)
            )
            .with(multiTokens.collectionTransferCancelled.name, () =>
                p.multiTokens.processors.collectionTransferCancelled(ctx, block, item, skipSave)
            )
            .with(multiTokens.frozen.name, () => p.multiTokens.processors.frozen(ctx, block, item, skipSave))
            .with(multiTokens.minted.name, () => p.multiTokens.processors.minted(ctx, block, item, skipSave))
            .with(multiTokens.infused.name, () => p.multiTokens.processors.infused(ctx, block, item, skipSave))
            .with(multiTokens.reserved.name, () => p.multiTokens.processors.reserved(ctx, block, item, skipSave))
            .with(multiTokens.thawed.name, () => p.multiTokens.processors.thawed(ctx, block, item, skipSave))
            .with(multiTokens.tokenAccountCreated.name, () =>
                p.multiTokens.processors.tokenAccountCreated(ctx, block, item, skipSave)
            )
            .with(multiTokens.tokenAccountDestroyed.name, () =>
                p.multiTokens.processors.tokenAccountDestroyed(ctx, block, item, skipSave)
            )
            .with(multiTokens.tokenCreated.name, () =>
                p.multiTokens.processors.tokenCreated(ctx, block, item, skipSave)
            )
            .with(multiTokens.tokenDestroyed.name, () =>
                p.multiTokens.processors.tokenDestroyed(ctx, block, item, skipSave)
            )
            .with(multiTokens.tokenMutated.name, () =>
                p.multiTokens.processors.tokenMutated(ctx, block, item, skipSave)
            )
            .with(multiTokens.transferred.name, () => p.multiTokens.processors.transferred(ctx, block, item, skipSave))
            .with(multiTokens.unapproved.name, () => p.multiTokens.processors.unapproved(ctx, block, item, skipSave))
            .with(multiTokens.unreserved.name, () => p.multiTokens.processors.unreserved(ctx, block, item, skipSave))
            .with(multiTokens.claimedCollections.name, () =>
                p.multiTokens.processors.claimedCollections(ctx, block, item)
            )
            .with(multiTokens.claimTokensInitiated.name, () =>
                p.multiTokens.processors.claimTokensInitiated(ctx, block, item)
            )
            .with(multiTokens.claimTokensCompleted.name, () =>
                p.multiTokens.processors.claimTokensCompleted(ctx, block, item)
            )
            .with(multiTokens.tokenGroupCreated.name, () =>
                p.multiTokens.processors.tokenGroupCreated(ctx, block, item)
            )
            .with(multiTokens.tokenGroupAdded.name, () => p.multiTokens.processors.tokenGroupAdded(ctx, block, item))
            .with(multiTokens.tokenGroupRemoved.name, () =>
                p.multiTokens.processors.tokenGroupRemoved(ctx, block, item)
            )
            .with(multiTokens.tokenGroupDestroyed.name, () =>
                p.multiTokens.processors.tokenGroupDestroyed(ctx, block, item)
            )
            .with(multiTokens.tokenGroupAttributeSet.name, () =>
                p.multiTokens.processors.tokenGroupAttributeSet(ctx, block, item, skipSave)
            )
            .with(multiTokens.tokenGroupAttributeRemoved.name, () =>
                p.multiTokens.processors.tokenGroupAttributeRemoved(ctx, block, item, skipSave)
            )
            .with(multiTokens.tokenGroupsUpdated.name, () =>
                p.multiTokens.processors.tokenGroupUpdated(ctx, block, item)
            )
            .with(balances.transfer.name, () => {
                p.balances.processors.save(item)
                return p.balances.processors.transfer(item)
            })
            .with(
                balances.balanceSet.name,
                balances.burned.name,
                balances.deposit.name,
                balances.dustLost.name,
                balances.endowed.name,
                balances.frozen.name,
                balances.issued.name,
                balances.locked.name,
                balances.minted.name,
                balances.reserveRepatriated.name,
                balances.reserved.name,
                balances.restored.name,
                balances.slashed.name,
                balances.suspended.name,
                balances.withdraw.name,
                balances.thawed.name,
                balances.unlocked.name,
                balances.unreserved.name,
                () => p.balances.processors.save(item)
            )
            .with(claims.claimRequested.name, () => p.claims.processors.claimRequested(ctx, block, item))
            .with(claims.claimRejected.name, () => p.claims.processors.claimRejected(ctx, block, item))
            .with(claims.claimMinted.name, () => p.claims.processors.claimMinted(ctx, block, item))
            .with(claims.claimed.name, () => p.claims.processors.claimed(ctx, block, item))
            .with(claims.exchangeRateSet.name, () => p.claims.processors.exchangeRateSet(ctx, block, item))
            .with(claims.delayTimeForClaimSet.name, () => p.claims.processors.delayTimeForClaimSet(ctx, block, item))
            .with(marketplace.listingCreated.name, () => p.marketplace.processors.listingCreated(ctx, block, item))
            .with(marketplace.listingCancelled.name, () => p.marketplace.processors.listingCancelled(ctx, block, item))
            .with(marketplace.listingFilled.name, () => p.marketplace.processors.listingFilled(ctx, block, item))
            .with(marketplace.bidPlaced.name, () => p.marketplace.processors.bidPlaced(ctx, block, item))
            .with(marketplace.auctionFinalized.name, () => p.marketplace.processors.auctionFinalized(ctx, block, item))
            .with(marketplace.counterOfferPlaced.name, () =>
                p.marketplace.processors.counterOfferPlaced(ctx, block, item)
            )
            .with(marketplace.counterOfferAnswered.name, () =>
                p.marketplace.processors.counterOfferAnswered(ctx, block, item)
            )
            .with(marketplace.counterOfferRemoved.name, () =>
                p.marketplace.processors.counterOfferRemoved(ctx, block, item)
            )
            .with(marketplace.listingRemovedUnderMinimum.name, () =>
                p.marketplace.processors.listingRemovedUnderMinimum(ctx, block, item)
            )
            .with(polkadotXcm.attempted.name, () => p.polkadotXcm.processors.attempted(ctx, block, item))
            .with(fuelTanks.accountAdded.name, () => p.fuelTanks.processors.accountAdded(ctx, block, item))
            .with(fuelTanks.accountRemoved.name, () => p.fuelTanks.processors.accountRemoved(ctx, block, item))
            .with(fuelTanks.accountRuleDataRemoved.name, () =>
                p.fuelTanks.processors.accountRuleDataRemoved(ctx, block, item)
            )
            .with(fuelTanks.freezeStateMutated.name, () => p.fuelTanks.processors.freezeStateMutated(ctx, block, item))
            .with(fuelTanks.fuelTankCreated.name, () => p.fuelTanks.processors.fuelTankCreated(ctx, block, item))
            .with(fuelTanks.fuelTankDestroyed.name, () => p.fuelTanks.processors.fuelTankDestroyed(ctx, block, item))
            .with(fuelTanks.fuelTankMutated.name, () => p.fuelTanks.processors.fuelTankMutated(ctx, block, item))
            .with(fuelTanks.ruleSetInserted.name, () => p.fuelTanks.processors.ruleSetInserted(ctx, block, item))
            .with(fuelTanks.ruleSetRemoved.name, () => p.fuelTanks.processors.ruleSetRemoved(ctx, block, item))
            .with(identity.identityCleared.name, () => p.identity.processors.identityCleared(ctx, block, item))
            .with(identity.identityKilled.name, () => p.identity.processors.identityKilled(ctx, block, item))
            .with(identity.identitySet.name, () => p.identity.processors.identitySet(ctx, block, item))
            .with(identity.judgementGiven.name, () => p.identity.processors.judgementGiven(ctx, block, item))
            .with(identity.judgementRequested.name, () => p.identity.processors.judgementRequested(ctx, block, item))
            .with(identity.judgementUnrequested.name, () =>
                p.identity.processors.judgementUnrequested(ctx, block, item)
            )
            .with(identity.registrarAdded.name, () => p.identity.processors.registrarAdded(ctx, block, item))
            .with(identity.subIdentityAdded.name, () => p.identity.processors.subIdentityAdded(ctx, block, item))
            .with(identity.subIdentityRemoved.name, () => p.identity.processors.subIdentityRemoved(ctx, block, item))
            .with(identity.subIdentityRevoked.name, () => p.identity.processors.subIdentityRevoked(ctx, block, item))
            .with(nominationPools.created.name, () => p.nominationPools.processors.created(ctx, block, item))
            .with(nominationPools.destroyed.name, () => p.nominationPools.processors.destroyed(ctx, block, item))
            .with(nominationPools.bonded.name, () => p.nominationPools.processors.bonded(ctx, block, item))
            .with(nominationPools.eraRewardsProcessed.name, () =>
                p.nominationPools.processors.eraRewardsProcessed(ctx, block, item)
            )
            .with(nominationPools.nominated.name, () => p.nominationPools.processors.nominated(ctx, block, item))
            .with(nominationPools.poolMutated.name, () => p.nominationPools.processors.poolMutated(ctx, block, item))
            .with(nominationPools.poolSlashed.name, () => p.nominationPools.processors.poolSlashed(ctx, block, item))
            .with(nominationPools.rewardPaid.name, () => p.nominationPools.processors.rewardPaid(ctx, block, item))
            .with(nominationPools.stateChanged.name, () => p.nominationPools.processors.stateChanged(ctx, block, item))
            .with(nominationPools.unbonded.name, () => p.nominationPools.processors.unbonded(ctx, block, item))
            .with(nominationPools.withdrawn.name, () => p.nominationPools.processors.withdrawn(ctx, block, item))
            .with(nominationPools.earlyBirdBonusPaymentUnlocked.name, () =>
                p.nominationPools.processors.earlyBirdBonusPaymentUnlocked(ctx, block, item)
            )
            .with(nominationPools.earlyBirdBonusCalculated.name, () =>
                p.nominationPools.processors.earlyBirdBonusCalculated(ctx, block, item)
            )
            .with(nominationPools.earlyBirdSharesCaptured.name, () =>
                p.nominationPools.processors.earlyBirdSharesCaptured(ctx, block, item)
            )
            .with(nominationPools.earlyBirdBonusPaid.name, () =>
                p.nominationPools.processors.earlyBirdBonusPaid(ctx, block, item)
            )
            // .with(nominationPools.earlyBirdSharesRemoved.name, () => p.nominationPools.processors.earlyBirdSharesRemoved(ctx, block, item))
            .with(stakeExchange.buyOrderCompleted.name, () =>
                p.stakeExchange.processors.buyOrderCompleted(ctx, block, item)
            )
            .with(stakeExchange.liquidityAdded.name, () => p.stakeExchange.processors.liquidityAdded(ctx, block, item))
            .with(stakeExchange.liquidityConfigUpdated.name, () =>
                p.stakeExchange.processors.liquidityConfigUpdated(ctx, block, item)
            )
            .with(stakeExchange.liquidityWithdrawn.name, () =>
                p.stakeExchange.processors.liquidityWithdrawn(ctx, block, item)
            )
            .with(stakeExchange.offerCancelled.name, () => p.stakeExchange.processors.offerCancelled(ctx, block, item))
            .with(stakeExchange.offerCreated.name, () => p.stakeExchange.processors.offerCreated(ctx, block, item))
            .with(stakeExchange.offerCompleted.name, () => p.stakeExchange.processors.offerCompleted(ctx, block, item))
            .with(staking.eraPaid.name, () => p.staking.processors.eraPaid(ctx, block, item))
            .with(staking.validatorPrefsSet.name, () => p.staking.processors.validatorPrefsSet(ctx, block, item))
            .with(xcmPallet.attempted.name, () => p.xcmPallet.processors.attempted(ctx, block, item))
            .with(imOnline.someOffline.name, () => p.imOnline.processors.someOffline(ctx, block, item))
            .otherwise(() => {
                ctx.log.error(`Unsupported event on handle event: ${item.name}`)
                return undefined
            })

        return result
    } finally {
        const dur = Date.now() - start
        recordEventMetric(eventName, dur)
    }
}

export async function callHandler(ctx: CommonContext, block: Block, item: CallItem) {
    switch (item.name) {
        case calls.identity.setSubs.name:
            return p.identity.processors.setSubs(ctx, block, item)
        case calls.identity.renameSub.name:
            return p.identity.processors.renameSub(ctx, block, item)
        default: {
            return undefined
        }
    }
}
