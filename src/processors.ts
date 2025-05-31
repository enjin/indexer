import { Block, CallItem, CommonContext, EventItem } from './contexts'
import { AccountTokenEvent, Event } from './model'
import * as p from './pallets'
import { calls } from './types'
import { EventProcessorFactory } from './pallets/event-processor.factory'
import { multiTokens } from './types/events'
import { ApprovedProcessor } from './pallets/multi-tokens/events/approved.processor'
import { AttributeRemovedProcessor } from './pallets/multi-tokens/events/attribute-removed.processor'
import { BurnedProcessor } from './pallets/multi-tokens/events/burned.processor'
import { ClaimTokensCompletedProcessor } from './pallets/multi-tokens/events/claim-tokens-completed.processor'
import { ClaimedCollectionsProcessor } from './pallets/multi-tokens/events/claimed-collections.processor'
import { CollectionAccountDestroyedProcessor } from './pallets/multi-tokens/events/collection-account-destroyed.processor'
import { CollectionDestroyedProcessor } from './pallets/multi-tokens/events/collection-destroyed.processor'
import { UnreservedProcessor } from './pallets/multi-tokens/events/unreserved.processor'
import { TransferredProcessor } from './pallets/multi-tokens/events/transferred.processor'
import { TokenMutatedProcessor } from './pallets/multi-tokens/events/token-mutated.processor'
import { TokenDestroyedProcessor } from './pallets/multi-tokens/events/token-destroyed.processor'
import { InfusedProcessor } from './pallets/multi-tokens/events/infused.processor'
import { CollectionMutatedProcessor } from './pallets/multi-tokens/events/collection-mutated.processor'
import { FrozenProcessor } from './pallets/multi-tokens/events/frozen.processor'
import { AttributeSetProcessor } from './pallets/multi-tokens/events/attribute-set.processor'
import { ClaimTokensInitiatedProcessor } from './pallets/multi-tokens/events/claim-tokens-initiated.processor'
import { CollectionAccountCreatedProcessor } from './pallets/multi-tokens/events/collection-account-created.processor'
import { CollectionCreatedProcessor } from './pallets/multi-tokens/events/collection-created.processor'
import { CollectionTransferredProcessor } from './pallets/multi-tokens/events/collection-transferred.processor'
import { MintedProcessor } from './pallets/multi-tokens/events/minted.processor'
import { ReservedProcessor } from './pallets/multi-tokens/events/reserved.processor'
import { ThawedProcessor } from './pallets/multi-tokens/events/thawed.processor'
import { TokenAccountCreatedProcessor } from './pallets/multi-tokens/events/token-account-created.processor'
import { TokenAccountDestroyedProcessor } from './pallets/multi-tokens/events/token-account-destroyed.processor'
import { TokenCreatedProcessor } from './pallets/multi-tokens/events/token-created.processor'
import { UnapprovedProcessor } from './pallets/multi-tokens/events/unapproved.processor'

export function initProcessors(): void {
    const factory = EventProcessorFactory.getInstance()

    factory.register(multiTokens.approved.name, new ApprovedProcessor())
    factory.register(multiTokens.attributeRemoved.name, new AttributeRemovedProcessor())
    factory.register(multiTokens.attributeSet.name, new AttributeSetProcessor())
    factory.register(multiTokens.burned.name, new BurnedProcessor())
    factory.register(multiTokens.claimTokensCompleted.name, new ClaimTokensCompletedProcessor())
    factory.register(multiTokens.claimTokensInitiated.name, new ClaimTokensInitiatedProcessor())
    factory.register(multiTokens.claimedCollections.name, new ClaimedCollectionsProcessor())
    factory.register(multiTokens.collectionAccountCreated.name, new CollectionAccountCreatedProcessor())
    factory.register(multiTokens.collectionAccountDestroyed.name, new CollectionAccountDestroyedProcessor())
    factory.register(multiTokens.collectionCreated.name, new CollectionCreatedProcessor())
    factory.register(multiTokens.collectionDestroyed.name, new CollectionDestroyedProcessor())
    factory.register(multiTokens.collectionMutated.name, new CollectionMutatedProcessor())
    factory.register(multiTokens.collectionTransferred.name, new CollectionTransferredProcessor())
    factory.register(multiTokens.frozen.name, new FrozenProcessor())
    factory.register(multiTokens.infused.name, new InfusedProcessor())
    factory.register(multiTokens.minted.name, new MintedProcessor())
    factory.register(multiTokens.reserved.name, new ReservedProcessor())
    factory.register(multiTokens.thawed.name, new ThawedProcessor())
    factory.register(multiTokens.tokenAccountCreated.name, new TokenAccountCreatedProcessor())
    factory.register(multiTokens.tokenAccountDestroyed.name, new TokenAccountDestroyedProcessor())
    factory.register(multiTokens.tokenCreated.name, new TokenCreatedProcessor())
    factory.register(multiTokens.tokenDestroyed.name, new TokenDestroyedProcessor())
    factory.register(multiTokens.tokenMutated.name, new TokenMutatedProcessor())
    factory.register(multiTokens.transferred.name, new TransferredProcessor())
    factory.register(multiTokens.unapproved.name, new UnapprovedProcessor())
    factory.register(multiTokens.unreserved.name, new UnreservedProcessor())
}

export async function eventHandler(
    ctx: CommonContext,
    block: Block,
    item: EventItem,
    skipSave = false
): Promise<Event | [Event, AccountTokenEvent] | undefined> {
    const factory = EventProcessorFactory.getInstance()
    const processor = factory.get(item.name)

    if (!processor) {
        ctx.log.error(`Unsupported event on handle event: ${item.name}`)
        return undefined
    }

    return processor.run(ctx, block, item, skipSave)
    //         .with(balances.transfer.name, () => {
    //             p.balances.processors.save(item)
    //             return p.balances.processors.transfer(item)
    //         })
    //         .with(
    //             balances.balanceSet.name,
    //             balances.burned.name,
    //             balances.deposit.name,
    //             balances.dustLost.name,
    //             balances.endowed.name,
    //             balances.frozen.name,
    //             balances.issued.name,
    //             balances.locked.name,
    //             balances.minted.name,
    //             balances.reserveRepatriated.name,
    //             balances.reserved.name,
    //             balances.restored.name,
    //             balances.slashed.name,
    //             balances.suspended.name,
    //             balances.withdraw.name,
    //             balances.thawed.name,
    //             balances.unlocked.name,
    //             balances.unreserved.name,
    //             () => p.balances.processors.save(item)
    //         )
    //         .with(claims.claimRequested.name, () => p.claims.processors.claimRequested(ctx, block, item))
    //         .with(claims.claimRejected.name, () => p.claims.processors.claimRejected(ctx, block, item))
    //         .with(claims.claimMinted.name, () => p.claims.processors.claimMinted(ctx, block, item))
    //         .with(claims.claimed.name, () => p.claims.processors.claimed(ctx, block, item))
    //         .with(claims.exchangeRateSet.name, () => p.claims.processors.exchangeRateSet(ctx, block, item))
    //         .with(claims.delayTimeForClaimSet.name, () => p.claims.processors.delayTimeForClaimSet(ctx, block, item))
    //         .with(marketplace.listingCreated.name, () => p.marketplace.processors.listingCreated(ctx, block, item))
    //         .with(marketplace.listingCancelled.name, () => p.marketplace.processors.listingCancelled(ctx, block, item))
    //         .with(marketplace.listingFilled.name, () => p.marketplace.processors.listingFilled(ctx, block, item))
    //         .with(marketplace.bidPlaced.name, () => p.marketplace.processors.bidPlaced(ctx, block, item))
    //         .with(marketplace.auctionFinalized.name, () => p.marketplace.processors.auctionFinalized(ctx, block, item))
    //         .with(marketplace.counterOfferPlaced.name, () =>
    //             p.marketplace.processors.counterOfferPlaced(ctx, block, item)
    //         )
    //         .with(marketplace.counterOfferAnswered.name, () =>
    //             p.marketplace.processors.counterOfferAnswered(ctx, block, item)
    //         )
    //         .with(marketplace.counterOfferRemoved.name, () =>
    //             p.marketplace.processors.counterOfferRemoved(ctx, block, item)
    //         )
    //         .with(marketplace.listingRemovedUnderMinimum.name, () =>
    //             p.marketplace.processors.listingRemovedUnderMinimum(ctx, block, item)
    //         )
    //         .with(polkadotXcm.attempted.name, () => p.polkadotXcm.processors.attempted(ctx, block, item))
    //         .with(fuelTanks.accountAdded.name, () => p.fuelTanks.processors.accountAdded(ctx, block, item))
    //         .with(fuelTanks.accountRemoved.name, () => p.fuelTanks.processors.accountRemoved(ctx, block, item))
    //         .with(fuelTanks.accountRuleDataRemoved.name, () =>
    //             p.fuelTanks.processors.accountRuleDataRemoved(ctx, block, item)
    //         )
    //         .with(fuelTanks.freezeStateMutated.name, () => p.fuelTanks.processors.freezeStateMutated(ctx, block, item))
    //         .with(fuelTanks.fuelTankCreated.name, () => p.fuelTanks.processors.fuelTankCreated(ctx, block, item))
    //         .with(fuelTanks.fuelTankDestroyed.name, () => p.fuelTanks.processors.fuelTankDestroyed(ctx, block, item))
    //         .with(fuelTanks.fuelTankMutated.name, () => p.fuelTanks.processors.fuelTankMutated(ctx, block, item))
    //         .with(fuelTanks.ruleSetInserted.name, () => p.fuelTanks.processors.ruleSetInserted(ctx, block, item))
    //         .with(fuelTanks.ruleSetRemoved.name, () => p.fuelTanks.processors.ruleSetRemoved(ctx, block, item))
    //         .with(identity.identityCleared.name, () => p.identity.processors.identityCleared(ctx, block, item))
    //         .with(identity.identityKilled.name, () => p.identity.processors.identityKilled(ctx, block, item))
    //         .with(identity.identitySet.name, () => p.identity.processors.identitySet(ctx, block, item))
    //         .with(identity.judgementGiven.name, () => p.identity.processors.judgementGiven(ctx, block, item))
    //         .with(identity.judgementRequested.name, () => p.identity.processors.judgementRequested(ctx, block, item))
    //         .with(identity.judgementUnrequested.name, () =>
    //             p.identity.processors.judgementUnrequested(ctx, block, item)
    //         )
    //         .with(identity.registrarAdded.name, () => p.identity.processors.registrarAdded(ctx, block, item))
    //         .with(identity.subIdentityAdded.name, () => p.identity.processors.subIdentityAdded(ctx, block, item))
    //         .with(identity.subIdentityRemoved.name, () => p.identity.processors.subIdentityRemoved(ctx, block, item))
    //         .with(identity.subIdentityRevoked.name, () => p.identity.processors.subIdentityRevoked(ctx, block, item))
    //         .with(nominationPools.created.name, () => p.nominationPools.processors.created(ctx, block, item))
    //         .with(nominationPools.destroyed.name, () => p.nominationPools.processors.destroyed(ctx, block, item))
    //         .with(nominationPools.bonded.name, () => p.nominationPools.processors.bonded(ctx, block, item))
    //         .with(nominationPools.eraRewardsProcessed.name, () =>
    //             p.nominationPools.processors.eraRewardsProcessed(ctx, block, item)
    //         )
    //         .with(nominationPools.nominated.name, () => p.nominationPools.processors.nominated(ctx, block, item))
    //         .with(nominationPools.poolMutated.name, () => p.nominationPools.processors.poolMutated(ctx, block, item))
    //         .with(nominationPools.poolSlashed.name, () => p.nominationPools.processors.poolSlashed(ctx, block, item))
    //         .with(nominationPools.rewardPaid.name, () => p.nominationPools.processors.rewardPaid(ctx, block, item))
    //         .with(nominationPools.stateChanged.name, () => p.nominationPools.processors.stateChanged(ctx, block, item))
    //         .with(nominationPools.unbonded.name, () => p.nominationPools.processors.unbonded(ctx, block, item))
    //         .with(nominationPools.withdrawn.name, () => p.nominationPools.processors.withdrawn(ctx, block, item))
    //         .with(nominationPools.earlyBirdBonusPaymentUnlocked.name, () =>
    //             p.nominationPools.processors.earlyBirdBonusPaymentUnlocked(ctx, block, item)
    //         )
    //         .with(nominationPools.earlyBirdBonusCalculated.name, () =>
    //             p.nominationPools.processors.earlyBirdBonusCalculated(ctx, block, item)
    //         )
    //         .with(nominationPools.earlyBirdSharesCaptured.name, () =>
    //             p.nominationPools.processors.earlyBirdSharesCaptured(ctx, block, item)
    //         )
    //         .with(nominationPools.earlyBirdBonusPaid.name, () =>
    //             p.nominationPools.processors.earlyBirdBonusPaid(ctx, block, item)
    //         )
    //         // .with(nominationPools.earlyBirdSharesRemoved.name, () => p.nominationPools.processors.earlyBirdSharesRemoved(ctx, block, item))
    //         .with(stakeExchange.buyOrderCompleted.name, () =>
    //             p.stakeExchange.processors.buyOrderCompleted(ctx, block, item)
    //         )
    //         .with(stakeExchange.liquidityAdded.name, () => p.stakeExchange.processors.liquidityAdded(ctx, block, item))
    //         .with(stakeExchange.liquidityConfigUpdated.name, () =>
    //             p.stakeExchange.processors.liquidityConfigUpdated(ctx, block, item)
    //         )
    //         .with(stakeExchange.liquidityWithdrawn.name, () =>
    //             p.stakeExchange.processors.liquidityWithdrawn(ctx, block, item)
    //         )
    //         .with(stakeExchange.offerCancelled.name, () => p.stakeExchange.processors.offerCancelled(ctx, block, item))
    //         .with(stakeExchange.offerCreated.name, () => p.stakeExchange.processors.offerCreated(ctx, block, item))
    //         .with(stakeExchange.offerCompleted.name, () => p.stakeExchange.processors.offerCompleted(ctx, block, item))
    //         .with(staking.eraPaid.name, () => p.staking.processors.eraPaid(ctx, block, item))
    //         .with(staking.validatorPrefsSet.name, () => p.staking.processors.validatorPrefsSet(ctx, block, item))
    //         .with(xcmPallet.attempted.name, () => p.xcmPallet.processors.attempted(ctx, block, item))
    //         .with(imOnline.someOffline.name, () => p.imOnline.processors.someOffline(ctx, block, item))
    //         .otherwise(() => {
    //             ctx.log.error(`Unsupported event on handle event: ${item.name}`)
    //             return undefined
    //         })
    // )
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
